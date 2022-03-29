// Deps
import axios from 'axios';

// Main class, which accepts configuration in it's constructor and exposes
// helper methods
export default class ShopifyGtmInstrumentor {
	// Save settings and hydrate vars
	constructor(param) {
		if (param == null) {
			param = {};
		}
		const {
			disableEcommerceProperty = false,
			enableCheckoutEcommerceProperty = true,
		} = param;
		this.debug = false;
		this.storeUrl = '{{ shop.secure_url }}';
		this.SHOPIFY_URL = '{{ shop.secure_url }}';
		this.storefrontToken = window.sfToken;
		this.SHOPIFY_STOREFRONT_TOKEN = window.sfToken;
		this.currencyCode = '{{ shop.currency }}';
		this.disableEcommerceProperty = disableEcommerceProperty;
		this.enableCheckoutEcommerceProperty = enableCheckoutEcommerceProperty;
		this.occurances = [];
	}

	// API #######################################################################

	// A view of a product element
	async productImpression(variantPayload, { el, list, position } = {}) {
		let flatVariant = [];
		if (typeof window === 'undefined' || window === null) {
			return;
		}

		if (typeof variantPayload === 'object' && typeof variantPayload.name === 'undefined') {
			for (let i = 0; i < variantPayload.length; i++) {
				if (!(flatVariant[flatVariant.length] = await this.getFlatVariant(variantPayload[i]))) {
					return;
				}
			}
		}

		// Make defaults
		if (el && position == null) {
			position = getElPosition(el);
		}

		for (let i = 0; i < flatVariant.length; i++) {
			flatVariant[i] = this.makeUaProductFieldObject(flatVariant[i]);
		}

		// Fire event
		const eventPusher = () =>
			this.pushEvent('Product Impression', {
				listName: list,
				listPosition: position,
				ecommerce: {
					impressions: {
						...flatVariant,
						list,
						position,
					},
				},
			});
		if (el) {
			return whenFirstInViewport(el, eventPusher);
		} else {
			return eventPusher();
		}
	}

	// A click on a product
	async productClick(
		variantPayload,
		{ el, list, position, clickEvent } = {},
	) {
		let clickUrl, flatVariant;
		if (typeof window === 'undefined' || window === null) {
			return;
		}

		// Prevent navigation
		if (
			(clickUrl = __guard__(
				clickEvent != null ? clickEvent.currentTarget : undefined,
				(x) => x.href,
			))
		) {
			if (clickEvent != null) {
				clickEvent.preventDefault();
			}
		}

		// Get variant
		if (!(flatVariant = await this.getFlatVariant(variantPayload))) {
			return;
		}

		// Make defaults
		if (el && position == null) {
			position = getElPosition(el);
		}

		// Fire event
		this.pushEvent('Product Click', {
			...flatVariant,
			listName: list,
			listPosition: position,
			ecommerce: {
				click: {
					...(!list
						? {}
						: {
								actionField: { list },
						  }),
					products: [
						{
							...this.makeUaProductFieldObject(flatVariant),
							position,
						},
					],
				},
			},
		});

		// Finish navigation
		if (clickUrl) {
			return (window.location = clickUrl);
		}
	}

	// Typically used for view of PDP page
	async viewProductDetails(variantPayload) {
		let flatVariant;
		if (typeof window === 'undefined' || window === null) {
			return;
		}

		// Get variant
		if (!(flatVariant = await this.getFlatVariant(variantPayload))) {
			return;
		}

		// Fire event
		return this.pushEvent('View Product Details', {
			...flatVariant,
			ecommerce: {
				detail: {
					products: [this.makeUaProductFieldObject(flatVariant)],
				},
			},
		});
	}

	// Used whenver there is a positive change in the quantity of a product in
	// the cart.
	addToCart(variantPayload, quantity) {
		return this.updateQuantity(
			variantPayload,
			quantity,
			'Add to Cart',
			'add',
		);
	}

	// Used whenever there is a negative change in the quantity of a product in
	// the cart.
	removeFromCart(variantPayload, quantity) {
		return this.updateQuantity(
			variantPayload,
			quantity,
			'Remove from Cart',
			'remove',
		);
	}

	// Used both fire the `Update Quantity` event but also as a helper for the
	// add and remove methods.
	async updateQuantity(
		variantPayload,
		quantity,
		gtmEvent = 'Update Quantity',
		ecommerceAction,
	) {
		let flatVariant;
		if (typeof window === 'undefined' || window === null) {
			return;
		}

		// Get variant
		if (!(flatVariant = await this.getFlatVariant(variantPayload))) {
			return;
		}

		// Fire the event
		return this.pushEvent(gtmEvent, {
			...flatVariant,
			quantity,

			// Conditionally add enhanced ecommerce action
			...(!ecommerceAction
				? {}
				: {
						ecommerce: {
							currencyCode: this.currencyCode,
							[ecommerceAction]: {
								products: [
									{
										...this.makeUaProductFieldObject(
											flatVariant,
										),
										quantity,
									},
								],
							},
						},
				  }),
		});
	}

	// Fire an event with the current state of the cart
	async cartUpdated(checkoutOrCartPayload) {
		let simplifiedCheckout;
		if (typeof window === 'undefined' || window === null) {
			return;
		}
		if (
			(simplifiedCheckout = await this.getSimplifiedCheckout(
				checkoutOrCartPayload,
			))
		) {
			return this.pushEvent('Cart Updated', simplifiedCheckout);
		}
	}

	// Fire an event with the current step of the checkout process
	async checkout(checkoutOrCartPayload, checkoutStep) {
		let simplifiedCheckout;
		if (typeof window === 'undefined' || window === null) {
			return;
		}
		if (
			(simplifiedCheckout = await this.getSimplifiedCheckout(
				checkoutOrCartPayload,
			))
		) {
			return this.pushEvent('Checkout', {
				checkoutStep,
				...simplifiedCheckout,
				...(!this.enableCheckoutEcommerceProperty
					? {}
					: {
							ecommerce: {
								currencyCode: this.currencyCode,
								checkout: {
									actionField: { step: checkoutStep },
									products:
										this.makeUaCheckoutProducts(
											simplifiedCheckout,
										),
								},
							},
					  }),
			});
		}
	}

	// Notify of final checkout, using array of variant data from liquid
	async purchase(checkoutOrCartPayload) {
		let simplifiedCheckout;
		if (typeof window === 'undefined' || window === null) {
			return;
		}
		if (
			(simplifiedCheckout = await this.getSimplifiedCheckout(
				checkoutOrCartPayload,
			))
		) {
			return this.pushEvent('Purchase', {
				...simplifiedCheckout,
				...(!this.enableCheckoutEcommerceProperty
					? {}
					: {
							ecommerce: {
								currencyCode: this.currencyCode,
								purchase: {
									actionField: {
										id:
											'#' +
											simplifiedCheckout.orderNumber, // Matches Shopify
										revenue: simplifiedCheckout.totalPrice,
										tax: simplifiedCheckout.totalTax,
										shipping:
											simplifiedCheckout.totalShipping,
										coupon: simplifiedCheckout.discountCodes.join(
											',',
										),
									},
									products:
										this.makeUaCheckoutProducts(
											simplifiedCheckout,
										),
								},
							},
					  }),
			});
		}
	}

	// Customer information
	identifyCustomer(customer) {
		if (typeof window === 'undefined' || window === null) {
			return;
		}
		return this.pushEvent('Identify Customer', {
			customerId: customer.id,
			customerZip: customer.zip,
			customerEmail: customer.email,
		});
	}

	// VARIANT DATA ##############################################################

	// Take a variantPayload, which may be an id or an object, and return an
	// object that can be easily consumed by GTM.
	async getFlatVariant (variantPayload) {

		let products, variant;

		if (typeof variantPayload === 'object' || typeof variantPayload === 'array') {
			for (let i = 0; i < variantPayload.length; i++) {
				products.push(variantPayload[i]);
			}

			for (let i = 0; i < products.length; i++) {
				const variantPayload = products[i];
				// Conditioally fetch from storefront API
				variant =
					typeof variantPayload === 'object'
						? variantPayload
						: await this.fetchVariant(variantPayload);

				// Validate the variant and return
				if (variant) {
					products[i] = this.makeFlatVariant(variant);
				} else {
					return console.error('Variant not found', variantPayload);
				}
			}

			return products;

		} else {
			// Conditioally fetch from storefront API
			variant =
				typeof variantPayload === 'object'
					? variantPayload
					: await this.fetchVariant(variantPayload);

			// Validate the variant and return
			if (variant) {
				return this.makeFlatVariant(variant);
			} else {
				return console.error('Variant not found', variantPayload);
			}
		}
	}

	// Lookup a product variant by id. Id may be a simple number or a
	// gid://shopify string
	async fetchVariant(variantId) {
		if (!variantId) {
			return;
		}
		variantId = getShopifyId(variantId);
		const result = await this.queryStorefrontApi({
			variables: {
				id: btoa('gid://shopify/ProductVariant/' + variantId),
			},
			query: fetchVariantQuery,
		});
		return result.node;
	}

	// Make flat object from a variant with nested product data
	makeFlatVariant(variant) {
		let productUrl, variantId;
		const { product } = variant;

		// Product level info
		return {
			productId: getShopifyId(product.id),
			productTitle: product.title,
			productVariantTitle: `${product.title} - ${variant.title}`,
			productType: product.productType || product.type,
			productVendor: product.vendor,
			productUrl:
				(productUrl = `${this.storeUrl}/products/${product.handle}`),

			// Variant level data
			sku: variant.sku,
			price: variant.price,
			compareAtPrice: variant.compareAtPrice,
			variantId: (variantId = getShopifyId(variant.id)),
			variantTitle: variant.title,
			variantImage:
				(variant.image != null
					? variant.image.originalSrc
					: undefined) || variant.image,
			variantUrl: `${productUrl}?variant=${variantId}`,
		};
	}

	// Convert a Shopify variant object to a UA productFieldObject. I'm
	// combining the product and variant name because that's what Shopify does
	// with it's own events.
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-data
	makeUaProductFieldObject(flatVariant) {
		return {
			id: flatVariant.sku,
			name: flatVariant.productVariantTitle,
			brand: flatVariant.productVendor,
			category: flatVariant.productType,
			variant: flatVariant.variantTitle,
			price: flatVariant.price,
		};
	}

	// CHECKOUT DATA #############################################################

	// Take a checkoutPayload, which may be an id or an object, and return the
	// Shopify checkout object that has been simplified a bit.
	async getSimplifiedCheckout(checkoutOrCartPayload) {
		// Conditioally fetch from storefront API
		const checkout =
			typeof checkoutOrCartPayload === 'object'
				? checkoutOrCartPayload
				: await this.fetchCheckout(checkoutOrCartPayload);

		// Validate the checkout and return
		if (!checkout) {
			return console.error(
				'Checkout or Cart not found',
				checkoutOrCartPayload,
			);
		}
		return this.makeSimplifiedCheckout(checkout);
	}

	// Lookup a checkout or cart by id. Id should be a gid://shopify string
	async fetchCheckout(checkoutOrCartId) {
		// Determine if cart of checkout request
		const [all, type] = atob(checkoutOrCartId).match(
			/gid:\/\/shopify\/(\w+)/,
		);

		// Get the data
		const { node } = await this.queryStorefrontApi({
			query: (() => {
				switch (type) {
					case 'Cart':
						return fetchCartQuery;
					case 'Checkout':
						return fetchCheckoutQuery;
					default:
						throw `Unknown type: ${type}`;
				}
			})(),
			variables: { id: checkoutOrCartId },
		});

		// Final massage of Carts into Checkout
		if (node.estimatedCost) {
			node.subtotalPrice = node.estimatedCost.subtotalAmount.amount;
			node.totalPrice = node.estimatedCost.totalAmount.amount;
		}

		// Return "checkout" (which could be a Cart object)
		return node;
	}

	// Standardize checkout properties to something more easily used in dataLayer
	makeSimplifiedCheckout(checkout) {
		// Flatten nodes that contain line items
		if (checkout.lineItems.edges) {
			checkout.lineItems = checkout.lineItems.edges.map(
				({ node }) => node,
			);
		}

		// Return the simplified object
		return {
			checkoutId: getShopifyId(checkout.id),
			checkoutUrl: checkout.webUrl,
			subtotalPrice: checkout.subtotalPrice,
			totalPrice: checkout.totalPrice,
			lineItems: checkout.lineItems.map((lineItem) => ({
				lineItemId: getShopifyId(lineItem.id),
				quantity: lineItem.quantity,
				...this.makeFlatVariant(lineItem.variant),
			})),

			// Properties that aren't present until purchase
			orderNumber: checkout.orderNumber,
			totalTax: checkout.totalTax,
			totalShipping: checkout.totalShipping,
			discountCodes: checkout.discountCodes || [],
		};
	}

	// Get a simplifiedCheckout object and make the `products` array from the
	// lineItems.  Which is
	makeUaCheckoutProducts(simplifiedCheckout) {
		return simplifiedCheckout.lineItems.map((lineItem) => ({
			quantity: lineItem.quantity,
			...this.makeUaProductFieldObject(lineItem),
		}));
	}

	// STOREFRONT API ############################################################

	// Query Storefront API
	async queryStorefrontApi(payload) {
		const response = await axios({
			url: `${this.storeUrl}/api/2021-10/graphql`,
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': this.storefrontToken,
			},
			data: payload,
		});
		if (response.data.errors) {
			throw new StorefrontError(response.data.errors, payload);
		}
		return response.data.data;
	}

	// DATALAYER WRITING #########################################################

	// Push GTM dataLayer event
	pushEvent(name, payload) {
		if (this.debug) {
			console.debug(`'${name}'`, payload);
		}
		if (!window.dataLayer) {
			window.dataLayer = [];
		}

		// Remove the ecommerce property, like if they are going to be created in
		// GTM manually.
		if (this.disableEcommerceProperty && payload.ecommerce) {
			payload = { ...payload };
			delete payload.ecommerce;

			// Clear previous ecommerce values
		} else {
			window.dataLayer.push({ ecommerce: null });
		}

		// Add new event
		return window.dataLayer.push({
			event: name,
			firstOccurance: this.isFirstOccurance(name),
			...payload,
		});
	}

	// Return whether this is the first time the event has fired. This can be
	// helpeful in conjunction to prevent double triggering from events that are
	// also fired in the intial page response from Shopify, like Page Views.
	isFirstOccurance(eventName) {
		if (Array.from(this.occurances).includes(eventName)) {
			return false;
		}
		this.occurances.push(eventName);
		return true;
	}
}

// STOREFRONT QUERIES ##########################################################

// Product Variant fragment
export var productVariantFragment = `\
fragment variant on ProductVariant {
	id
	sku
	title
	price
	compareAtPrice
	image { originalSrc }
	product {
		id
		title
		handle
		productType
		vendor
	}
}\
`;

// Graphql query to fetch a variant by id
export var fetchVariantQuery = `\
query($id: ID!) {
	node(id: $id) {
		...variant
	}
}
${productVariantFragment}\
`;

// Graphql query to fetch a cart by id
export var fetchCartQuery = `\
query($id: ID!) {
	node: cart(id: $id) {
		... on Cart {
			id
			webUrl: checkoutUrl
			estimatedCost {
				subtotalAmount { amount }
				totalAmount { amount }
			}
			lineItems: lines (first: 250) {
				edges {
					node {
						... on CartLine {
							id
							quantity
							variant: merchandise { ...variant }
						}
					}
				}
			}
		}
	}
}
${productVariantFragment}\
`;

// Graphql query to fetch a checkout by id
export var fetchCheckoutQuery = `\
query($id: ID!) {
	node(id: $id) {
		... on Checkout {
			id
			webUrl
			subtotalPrice
			totalPrice
			lineItems (first: 250) {
				edges {
					node {
						... on CheckoutLineItem {
							id
							quantity
							variant { ...variant }
						}
					}
				}
			}
		}
	}
}
${productVariantFragment}\
`;

// NON-INSTANCE HELPERS ########################################################

// Error object with custom handling
class StorefrontError extends Error {
	static initClass() {
		this.prototype.name = 'StorefrontError';
	}
	constructor(errors, payload) {
		super(errors.map((e) => e.debugMessage || e.message).join(', '));
		this.errors = errors.map((e) => JSON.stringify(e));
		this.payload = payload;
	}
}
StorefrontError.initClass();

// Get the id from a Shopify gid:// style id.  This strips everything but the
// last part of the string.  So gid://shopify/ProductVariant/34641879105581
// becomes 34641879105581
// https://regex101.com/r/3FIplL/1
var getShopifyId = function (id) {
	if (String(id).match(/^\d+$/)) {
		return id;
	} // Already simple id
	if (!id.match(/^gid:\/\//)) {
		id = atob(id);
	} // De-base64
	return __guard__(id.match(/\/([^\/]+)$/), (x) => x[1]); // Get the id from the gid
};

// Get the position of an element with respect to it's parent
// https://stackoverflow.com/a/5913984/59160
var getElPosition = function (el) {
	let i = 1; // The first position will be `1`
	while ((el = el.previousElementSibling) !== null) {
		i++;
	}
	return i;
};

// Fire callback when in viewport. Not exposing a way to manually disconnect or
// unobserve because it _should_ be garbage collected when el is removed.
// https://stackoverflow.com/a/51106262/59160
var whenFirstInViewport = function (el, callback) {
	var observer = new IntersectionObserver(function ([{ isIntersecting }]) {
		if (!isIntersecting) {
			return;
		}
		observer.disconnect();
		return callback();
	});
	return observer.observe(el);
};

function __guard__(value, transform) {
	return typeof value !== 'undefined' && value !== null
		? transform(value)
		: undefined;
}

window.gtmEcomm = new ShopifyGtmInstrumentor({
	currencyCode: '{{ shop.currency }}',
});