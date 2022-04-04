function ct_init_gtm_shopify() {
	let current_cart,
		settings = {
			storefront_token: '',
			currency: 'USD',
			shop_url: `${window.location.protocol}//${window.location.host}`,
			searchPagePath: '/search',
			template: '',
			customer: '',
			collectionTitle: '',
			productDetails: '',
			...window.ct_gtm_settings,
		};

	if (
		typeof settings.storefront_token === 'undefined' ||
		(typeof settings.storefront_token !== 'string' &&
			settings.storefront_token !== '')
	) {
		console.error('You must provide a storefront token');
		return; // Exit
	}

	function loadExt(done, args) {
		let that = this;
		that.files = done;
		that.js = [];
		that.head = document.getElementsByTagName("head")[0];
		that.after = args || function() {};
		that.loadStyle = function(url) {
			let cssLink = document.createElement("link");
			cssLink.rel = "stylesheet";
			cssLink.type = "text/css";
			cssLink.href = url;
			that.head.appendChild(cssLink);
		};
		that.loadScript = function(i) {
			let script = document.createElement("script");
			script.type = "text/javascript";
			script.src = that.js[i];
			let load = function() {
				if (++i < that.js.length) {
					that.loadScript(i);
				} else {
					that.after();
				}
			};
			script.onload = function() {
				load();
			};
			that.head.appendChild(script);
		};
		for (let i = 0; i < that.files.length; i++) {
			if (/\.js$|\.js\?/.test(that.files[i])) {
				that.js.push(that.files[i]);
			}
			if (/\.css$|\.css\?/.test(that.files[i])) {
				that.loadStyle(that.files[i]);
			}
		}
		if (that.js.length > 0) {
			that.loadScript(0);
		} else {
			that.after();
		}
	}

	let getURLParams = function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	};

	window.dataLayer = window.dataLayer || [];

	let scripts_to_load = [
		'https://cdnjs.cloudflare.com/ajax/libs/xhook/1.4.9/xhook.min.js',
	];

	if (!window.jQuery) {
		scripts_to_load = [
			'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/xhook/1.4.9/xhook.min.js',
		];
	}

	if (settings.customer && typeof settings.customer === 'object') {
		gtmEcomm.identifyCustomer(settings.customer);
	}

	new loadExt(scripts_to_load, function() {
		jQuery.getJSON(`${settings.shop_url}/cart`, function(response) {
			current_cart = {
				products: response.items.map(function(line_item) {
					return {
						id: line_item.id,
						quantity: line_item.quantity,
					};
				}),
			};
			if (sessionStorage.getItem('ct-cart-contents')) {
				ct_check_cart(current_cart, JSON.parse(atob(sessionStorage.getItem('ct-cart-contents'))));
			} else {
				sessionStorage.setItem('ct-cart-contents', btoa(JSON.stringify(current_cart)));
			}
		});

		// Site search tracking
		if (
			document.location.pathname === settings.searchPagePath
		) {
			dataLayer.push({
				event: 'search',
				pageType: 'Search Results',
				searchTerm: getURLParams('q'),
			});
		}

		if (document.querySelectorAll('a[href*="/products/"]').length) {
			let product_ids = [],
				items = {},
				index_prods = 0,
				xhr = [];
			[].forEach.call(
				document.querySelectorAll('a[href*="/products/"]'),
				function(el) {
					items[el.getAttribute('href')] = el;
				},
			);

			for (let i in items) {
				let url = items[i]
					.getAttribute('href')
					.split(/[?#]/)[0]
					.split('/');
				let handle = url[url.length - 1];

				let request = $.ajax({
					url: `${settings.shop_url}/products/${handle}.json`,
					success: function(data) {
						let id = data.product.variants[0].id || data.product.id;
						product_ids.push(id);
					},
				});
				xhr.push(request);
			}

			let list = {};

			if (settings.collectionTitle !== '' && typeof settings.collectionTitle === 'string') {
				list = {
					list: settings.collectionTitle
				};
			}

			$.when.apply(null, xhr).done(function() {
				gtmEcomm.productImpression(product_ids, list);
			});
		}

		$('a[href*="/products/"]').click(function() {
			let url = $(this).attr('href').split(/[?#]/)[0].split('/');
			let handle = url[url.length - 1];

			$.ajax({
				url: `${settings.shop_url}/products/${handle}.json`,
				success: function(data) {
					gtmEcomm.productClick(data.product.id);
				},
			});
		});

		// Product page tracking
		if (
			settings.template.match(/.*product.*/gi) &&
			!settings.template.match(/.*collection.*/gi) &&
			typeof settings.productDetails === 'string' &&
			settings.productDetails !== ''
		) {
			gtmEcomm.viewProductDetails(settings.productDetails);
		}

		if (
			window.Shopify &&
			window.Shopify.Checkout &&
			window.Shopify.Checkout.step == 'thank_you'
		) {
			gtmEcomm.purchase(window.CHECKOUT_FOR_GTM_INSTRUMENTOR);
		}

		function ct_check_cart(cart, old_cart = current_cart) {
			let type,
				new_cart = {
					products: [],
				};
			if (old_cart.products.length !== cart.products.length) {
				if (
					old_cart.products.length < cart.products.length
				) {
					// Product was added
					const missingIndex = cart.products.reduce(
						(acc, curV, curI) => {
							if (
								!old_cart.products.some(
									(item) => item.id === curV.id,
								)
							) {
								acc.push(curI);
							}
							return acc;
						},
						[],
					);
					for (let i = 0; i < missingIndex.length; i++) {
						gtmEcomm.addToCart(
							cart.products[missingIndex[i]].id,
							cart.products[missingIndex[i]].quantity,
						);
					}
				} else {
					// Product was removed
					const missingIndex = old_cart.products.reduce(
						(acc, curV, curI) => {
							if (
								!cart.products.some(
									(item) => item.id === curV.id,
								)
							) {
								acc.push(curI);
							}
							return acc;
						},
						[],
					);
					for (let i = 0; i < missingIndex.length; i++) {
						gtmEcomm.removeFromCart(
							old_cart.products[missingIndex[i]].id,
							old_cart.products[missingIndex[i]]
							.quantity,
						);
					}
				}
			}

			for (let i = 0; i < cart.products.length; i++) {
				// If a product was added or removed
				if (
					old_cart.products.length ===
					cart.products.length
				) {
					if (
						cart.products[i].quantity !==
						old_cart.products[i].quantity
					) {
						if (
							old_cart.products[i].quantity <
							cart.products[i].quantity
						) {
							// Product was added
							gtmEcomm.addToCart(
								cart.products[i].id,
								cart.products[i].quantity -
								old_cart.products[i].quantity,
							);
						} else if (
							old_cart.products[i].quantity >
							cart.products[i].quantity
						) {
							// Product was removed
							gtmEcomm.removeFromCart(
								cart.products[i].id,
								old_cart.products[i].quantity -
								cart.products[i].quantity,
							);
						}
					}
				}
			}
			sessionStorage.setItem('ct-cart-contents', btoa(JSON.stringify(cart)));
		}

		xhook.after(function(request, response) {
			let responseUrl = String(response.url),
				responseFinalUrl = String(request.finalUrl),
				requestUrl = String(request.url);
			if (
				responseUrl.includes(window.routes.cart_add_url) ||
				responseUrl.includes(window.routes.cart_change_url) ||
				responseUrl.includes(window.routes.cart_update_url) ||
				responseFinalUrl.includes(window.routes.cart_add_url) ||
				responseFinalUrl.includes(window.routes.cart_change_url) ||
				responseFinalUrl.includes(window.routes.cart_update_url) ||
				requestUrl.includes(window.routes.cart_add_url) ||
				requestUrl.includes(window.routes.cart_change_url) ||
				requestUrl.includes(window.routes.cart_update_url)
			) {
				jQuery.getJSON(
					`${settings.shop_url}/cart`,
					function(response) {
						let cart = {
							products: response.items.map(function(
								line_item,
							) {
								return {
									id: line_item.id,
									quantity: line_item.quantity,
								};
							}),
						};
						ct_check_cart(cart);
					},
				);
			}
		});
	});
}

document.addEventListener('DOMContentLoaded', ct_init_gtm_shopify);