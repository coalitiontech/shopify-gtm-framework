(function() {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = "function" == typeof require && require;
					if (!f && c) return c(i, !0);
					if (u) return u(i, !0);
					var a = new Error("Cannot find module '" + i + "'");
					throw a.code = "MODULE_NOT_FOUND", a
				}
				var p = n[i] = {
					exports: {}
				};
				e[i][0].call(p.exports, function(r) {
					var n = e[i][1][r];
					return o(n || r)
				}, p, p.exports, r, e, n, t)
			}
			return n[i].exports
		}
		for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
		return o
	}
	return r
})()({
	1: [function(require, module, exports) {
		function _arrayLikeToArray(arr, len) {
			if (len == null || len > arr.length) len = arr.length;

			for (var i = 0, arr2 = new Array(len); i < len; i++) {
				arr2[i] = arr[i];
			}

			return arr2;
		}

		module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	2: [function(require, module, exports) {
		function _arrayWithHoles(arr) {
			if (Array.isArray(arr)) return arr;
		}

		module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	3: [function(require, module, exports) {
		function _assertThisInitialized(self) {
			if (self === void 0) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}

			return self;
		}

		module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	4: [function(require, module, exports) {
		function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
			try {
				var info = gen[key](arg);
				var value = info.value;
			} catch (error) {
				reject(error);
				return;
			}

			if (info.done) {
				resolve(value);
			} else {
				Promise.resolve(value).then(_next, _throw);
			}
		}

		function _asyncToGenerator(fn) {
			return function() {
				var self = this,
					args = arguments;
				return new Promise(function(resolve, reject) {
					var gen = fn.apply(self, args);

					function _next(value) {
						asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
					}

					function _throw(err) {
						asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
					}

					_next(undefined);
				});
			};
		}

		module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	5: [function(require, module, exports) {
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	6: [function(require, module, exports) {
		var setPrototypeOf = require("./setPrototypeOf.js");

		var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");

		function _construct(Parent, args, Class) {
			if (isNativeReflectConstruct()) {
				module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
			} else {
				module.exports = _construct = function _construct(Parent, args, Class) {
					var a = [null];
					a.push.apply(a, args);
					var Constructor = Function.bind.apply(Parent, a);
					var instance = new Constructor();
					if (Class) setPrototypeOf(instance, Class.prototype);
					return instance;
				}, module.exports.__esModule = true, module.exports["default"] = module.exports;
			}

			return _construct.apply(null, arguments);
		}

		module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {
		"./isNativeReflectConstruct.js": 13,
		"./setPrototypeOf.js": 17
	}],
	7: [function(require, module, exports) {
		function _defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		function _createClass(Constructor, protoProps, staticProps) {
			if (protoProps) _defineProperties(Constructor.prototype, protoProps);
			if (staticProps) _defineProperties(Constructor, staticProps);
			Object.defineProperty(Constructor, "prototype", {
				writable: false
			});
			return Constructor;
		}

		module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	8: [function(require, module, exports) {
		function _defineProperty(obj, key, value) {
			if (key in obj) {
				Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true
				});
			} else {
				obj[key] = value;
			}

			return obj;
		}

		module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	9: [function(require, module, exports) {
		function _getPrototypeOf(o) {
			module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
				return o.__proto__ || Object.getPrototypeOf(o);
			}, module.exports.__esModule = true, module.exports["default"] = module.exports;
			return _getPrototypeOf(o);
		}

		module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	10: [function(require, module, exports) {
		var setPrototypeOf = require("./setPrototypeOf.js");

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function");
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {
				constructor: {
					value: subClass,
					writable: true,
					configurable: true
				}
			});
			Object.defineProperty(subClass, "prototype", {
				writable: false
			});
			if (superClass) setPrototypeOf(subClass, superClass);
		}

		module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {
		"./setPrototypeOf.js": 17
	}],
	11: [function(require, module, exports) {
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : {
				"default": obj
			};
		}

		module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	12: [function(require, module, exports) {
		function _isNativeFunction(fn) {
			return Function.toString.call(fn).indexOf("[native code]") !== -1;
		}

		module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	13: [function(require, module, exports) {
		function _isNativeReflectConstruct() {
			if (typeof Reflect === "undefined" || !Reflect.construct) return false;
			if (Reflect.construct.sham) return false;
			if (typeof Proxy === "function") return true;

			try {
				Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
				return true;
			} catch (e) {
				return false;
			}
		}

		module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	14: [function(require, module, exports) {
		function _iterableToArrayLimit(arr, i) {
			var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

			if (_i == null) return;
			var _arr = [];
			var _n = true;
			var _d = false;

			var _s, _e;

			try {
				for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
					_arr.push(_s.value);

					if (i && _arr.length === i) break;
				}
			} catch (err) {
				_d = true;
				_e = err;
			} finally {
				try {
					if (!_n && _i["return"] != null) _i["return"]();
				} finally {
					if (_d) throw _e;
				}
			}

			return _arr;
		}

		module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	15: [function(require, module, exports) {
		function _nonIterableRest() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		}

		module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	16: [function(require, module, exports) {
		var _typeof = require("./typeof.js")["default"];

		var assertThisInitialized = require("./assertThisInitialized.js");

		function _possibleConstructorReturn(self, call) {
			if (call && (_typeof(call) === "object" || typeof call === "function")) {
				return call;
			} else if (call !== void 0) {
				throw new TypeError("Derived constructors may only return object or undefined");
			}

			return assertThisInitialized(self);
		}

		module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {
		"./assertThisInitialized.js": 3,
		"./typeof.js": 19
	}],
	17: [function(require, module, exports) {
		function _setPrototypeOf(o, p) {
			module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			}, module.exports.__esModule = true, module.exports["default"] = module.exports;
			return _setPrototypeOf(o, p);
		}

		module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	18: [function(require, module, exports) {
		var arrayWithHoles = require("./arrayWithHoles.js");

		var iterableToArrayLimit = require("./iterableToArrayLimit.js");

		var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

		var nonIterableRest = require("./nonIterableRest.js");

		function _slicedToArray(arr, i) {
			return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
		}

		module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {
		"./arrayWithHoles.js": 2,
		"./iterableToArrayLimit.js": 14,
		"./nonIterableRest.js": 15,
		"./unsupportedIterableToArray.js": 20
	}],
	19: [function(require, module, exports) {
		function _typeof(obj) {
			"@babel/helpers - typeof";

			return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
				return typeof obj;
			} : function(obj) {
				return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
			}, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
		}

		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {}],
	20: [function(require, module, exports) {
		var arrayLikeToArray = require("./arrayLikeToArray.js");

		function _unsupportedIterableToArray(o, minLen) {
			if (!o) return;
			if (typeof o === "string") return arrayLikeToArray(o, minLen);
			var n = Object.prototype.toString.call(o).slice(8, -1);
			if (n === "Object" && o.constructor) n = o.constructor.name;
			if (n === "Map" || n === "Set") return Array.from(o);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
		}

		module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {
		"./arrayLikeToArray.js": 1
	}],
	21: [function(require, module, exports) {
		var getPrototypeOf = require("./getPrototypeOf.js");

		var setPrototypeOf = require("./setPrototypeOf.js");

		var isNativeFunction = require("./isNativeFunction.js");

		var construct = require("./construct.js");

		function _wrapNativeSuper(Class) {
			var _cache = typeof Map === "function" ? new Map() : undefined;

			module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
				if (Class === null || !isNativeFunction(Class)) return Class;

				if (typeof Class !== "function") {
					throw new TypeError("Super expression must either be null or a function");
				}

				if (typeof _cache !== "undefined") {
					if (_cache.has(Class)) return _cache.get(Class);

					_cache.set(Class, Wrapper);
				}

				function Wrapper() {
					return construct(Class, arguments, getPrototypeOf(this).constructor);
				}

				Wrapper.prototype = Object.create(Class.prototype, {
					constructor: {
						value: Wrapper,
						enumerable: false,
						writable: true,
						configurable: true
					}
				});
				return setPrototypeOf(Wrapper, Class);
			}, module.exports.__esModule = true, module.exports["default"] = module.exports;
			return _wrapNativeSuper(Class);
		}

		module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}, {
		"./construct.js": 6,
		"./getPrototypeOf.js": 9,
		"./isNativeFunction.js": 12,
		"./setPrototypeOf.js": 17
	}],
	22: [function(require, module, exports) {
		/**
		 * Copyright (c) 2014-present, Facebook, Inc.
		 *
		 * This source code is licensed under the MIT license found in the
		 * LICENSE file in the root directory of this source tree.
		 */

		var runtime = (function(exports) {
			"use strict";

			var Op = Object.prototype;
			var hasOwn = Op.hasOwnProperty;
			var undefined; // More compressible than void 0.
			var $Symbol = typeof Symbol === "function" ? Symbol : {};
			var iteratorSymbol = $Symbol.iterator || "@@iterator";
			var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
			var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

			function define(obj, key, value) {
				Object.defineProperty(obj, key, {
					value: value,
					enumerable: true,
					configurable: true,
					writable: true
				});
				return obj[key];
			}
			try {
				// IE 8 has a broken Object.defineProperty that only works on DOM objects.
				define({}, "");
			} catch (err) {
				define = function(obj, key, value) {
					return obj[key] = value;
				};
			}

			function wrap(innerFn, outerFn, self, tryLocsList) {
				// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
				var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
				var generator = Object.create(protoGenerator.prototype);
				var context = new Context(tryLocsList || []);

				// The ._invoke method unifies the implementations of the .next,
				// .throw, and .return methods.
				generator._invoke = makeInvokeMethod(innerFn, self, context);

				return generator;
			}
			exports.wrap = wrap;

			// Try/catch helper to minimize deoptimizations. Returns a completion
			// record like context.tryEntries[i].completion. This interface could
			// have been (and was previously) designed to take a closure to be
			// invoked without arguments, but in all the cases we care about we
			// already have an existing method we want to call, so there's no need
			// to create a new function object. We can even get away with assuming
			// the method takes exactly one argument, since that happens to be true
			// in every case, so we don't have to touch the arguments object. The
			// only additional allocation required is the completion record, which
			// has a stable shape and so hopefully should be cheap to allocate.
			function tryCatch(fn, obj, arg) {
				try {
					return {
						type: "normal",
						arg: fn.call(obj, arg)
					};
				} catch (err) {
					return {
						type: "throw",
						arg: err
					};
				}
			}

			var GenStateSuspendedStart = "suspendedStart";
			var GenStateSuspendedYield = "suspendedYield";
			var GenStateExecuting = "executing";
			var GenStateCompleted = "completed";

			// Returning this object from the innerFn has the same effect as
			// breaking out of the dispatch switch statement.
			var ContinueSentinel = {};

			// Dummy constructor functions that we use as the .constructor and
			// .constructor.prototype properties for functions that return Generator
			// objects. For full spec compliance, you may wish to configure your
			// minifier not to mangle the names of these two functions.
			function Generator() {}

			function GeneratorFunction() {}

			function GeneratorFunctionPrototype() {}

			// This is a polyfill for %IteratorPrototype% for environments that
			// don't natively support it.
			var IteratorPrototype = {};
			define(IteratorPrototype, iteratorSymbol, function() {
				return this;
			});

			var getProto = Object.getPrototypeOf;
			var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
			if (NativeIteratorPrototype &&
				NativeIteratorPrototype !== Op &&
				hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
				// This environment has a native %IteratorPrototype%; use it instead
				// of the polyfill.
				IteratorPrototype = NativeIteratorPrototype;
			}

			var Gp = GeneratorFunctionPrototype.prototype =
				Generator.prototype = Object.create(IteratorPrototype);
			GeneratorFunction.prototype = GeneratorFunctionPrototype;
			define(Gp, "constructor", GeneratorFunctionPrototype);
			define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
			GeneratorFunction.displayName = define(
				GeneratorFunctionPrototype,
				toStringTagSymbol,
				"GeneratorFunction"
			);

			// Helper for defining the .next, .throw, and .return methods of the
			// Iterator interface in terms of a single ._invoke method.
			function defineIteratorMethods(prototype) {
				["next", "throw", "return"].forEach(function(method) {
					define(prototype, method, function(arg) {
						return this._invoke(method, arg);
					});
				});
			}

			exports.isGeneratorFunction = function(genFun) {
				var ctor = typeof genFun === "function" && genFun.constructor;
				return ctor ?
					ctor === GeneratorFunction ||
					// For the native GeneratorFunction constructor, the best we can
					// do is to check its .name property.
					(ctor.displayName || ctor.name) === "GeneratorFunction" :
					false;
			};

			exports.mark = function(genFun) {
				if (Object.setPrototypeOf) {
					Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
				} else {
					genFun.__proto__ = GeneratorFunctionPrototype;
					define(genFun, toStringTagSymbol, "GeneratorFunction");
				}
				genFun.prototype = Object.create(Gp);
				return genFun;
			};

			// Within the body of any async function, `await x` is transformed to
			// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
			// `hasOwn.call(value, "__await")` to determine if the yielded value is
			// meant to be awaited.
			exports.awrap = function(arg) {
				return {
					__await: arg
				};
			};

			function AsyncIterator(generator, PromiseImpl) {
				function invoke(method, arg, resolve, reject) {
					var record = tryCatch(generator[method], generator, arg);
					if (record.type === "throw") {
						reject(record.arg);
					} else {
						var result = record.arg;
						var value = result.value;
						if (value &&
							typeof value === "object" &&
							hasOwn.call(value, "__await")) {
							return PromiseImpl.resolve(value.__await).then(function(value) {
								invoke("next", value, resolve, reject);
							}, function(err) {
								invoke("throw", err, resolve, reject);
							});
						}

						return PromiseImpl.resolve(value).then(function(unwrapped) {
							// When a yielded Promise is resolved, its final value becomes
							// the .value of the Promise<{value,done}> result for the
							// current iteration.
							result.value = unwrapped;
							resolve(result);
						}, function(error) {
							// If a rejected Promise was yielded, throw the rejection back
							// into the async generator function so it can be handled there.
							return invoke("throw", error, resolve, reject);
						});
					}
				}

				var previousPromise;

				function enqueue(method, arg) {
					function callInvokeWithMethodAndArg() {
						return new PromiseImpl(function(resolve, reject) {
							invoke(method, arg, resolve, reject);
						});
					}

					return previousPromise =
						// If enqueue has been called before, then we want to wait until
						// all previous Promises have been resolved before calling invoke,
						// so that results are always delivered in the correct order. If
						// enqueue has not been called before, then it is important to
						// call invoke immediately, without waiting on a callback to fire,
						// so that the async generator function has the opportunity to do
						// any necessary setup in a predictable way. This predictability
						// is why the Promise constructor synchronously invokes its
						// executor callback, and why async functions synchronously
						// execute code before the first await. Since we implement simple
						// async functions in terms of async generators, it is especially
						// important to get this right, even though it requires care.
						previousPromise ? previousPromise.then(
							callInvokeWithMethodAndArg,
							// Avoid propagating failures to Promises returned by later
							// invocations of the iterator.
							callInvokeWithMethodAndArg
						) : callInvokeWithMethodAndArg();
				}

				// Define the unified helper method that is used to implement .next,
				// .throw, and .return (see defineIteratorMethods).
				this._invoke = enqueue;
			}

			defineIteratorMethods(AsyncIterator.prototype);
			define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
				return this;
			});
			exports.AsyncIterator = AsyncIterator;

			// Note that simple async functions are implemented on top of
			// AsyncIterator objects; they just return a Promise for the value of
			// the final result produced by the iterator.
			exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
				if (PromiseImpl === void 0) PromiseImpl = Promise;

				var iter = new AsyncIterator(
					wrap(innerFn, outerFn, self, tryLocsList),
					PromiseImpl
				);

				return exports.isGeneratorFunction(outerFn) ?
					iter // If outerFn is a generator, return the full iterator.
					:
					iter.next().then(function(result) {
						return result.done ? result.value : iter.next();
					});
			};

			function makeInvokeMethod(innerFn, self, context) {
				var state = GenStateSuspendedStart;

				return function invoke(method, arg) {
					if (state === GenStateExecuting) {
						throw new Error("Generator is already running");
					}

					if (state === GenStateCompleted) {
						if (method === "throw") {
							throw arg;
						}

						// Be forgiving, per 25.3.3.3.3 of the spec:
						// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
						return doneResult();
					}

					context.method = method;
					context.arg = arg;

					while (true) {
						var delegate = context.delegate;
						if (delegate) {
							var delegateResult = maybeInvokeDelegate(delegate, context);
							if (delegateResult) {
								if (delegateResult === ContinueSentinel) continue;
								return delegateResult;
							}
						}

						if (context.method === "next") {
							// Setting context._sent for legacy support of Babel's
							// function.sent implementation.
							context.sent = context._sent = context.arg;

						} else if (context.method === "throw") {
							if (state === GenStateSuspendedStart) {
								state = GenStateCompleted;
								throw context.arg;
							}

							context.dispatchException(context.arg);

						} else if (context.method === "return") {
							context.abrupt("return", context.arg);
						}

						state = GenStateExecuting;

						var record = tryCatch(innerFn, self, context);
						if (record.type === "normal") {
							// If an exception is thrown from innerFn, we leave state ===
							// GenStateExecuting and loop back for another invocation.
							state = context.done ?
								GenStateCompleted :
								GenStateSuspendedYield;

							if (record.arg === ContinueSentinel) {
								continue;
							}

							return {
								value: record.arg,
								done: context.done
							};

						} else if (record.type === "throw") {
							state = GenStateCompleted;
							// Dispatch the exception by looping back around to the
							// context.dispatchException(context.arg) call above.
							context.method = "throw";
							context.arg = record.arg;
						}
					}
				};
			}

			// Call delegate.iterator[context.method](context.arg) and handle the
			// result, either by returning a { value, done } result from the
			// delegate iterator, or by modifying context.method and context.arg,
			// setting context.delegate to null, and returning the ContinueSentinel.
			function maybeInvokeDelegate(delegate, context) {
				var method = delegate.iterator[context.method];
				if (method === undefined) {
					// A .throw or .return when the delegate iterator has no .throw
					// method always terminates the yield* loop.
					context.delegate = null;

					if (context.method === "throw") {
						// Note: ["return"] must be used for ES3 parsing compatibility.
						if (delegate.iterator["return"]) {
							// If the delegate iterator has a return method, give it a
							// chance to clean up.
							context.method = "return";
							context.arg = undefined;
							maybeInvokeDelegate(delegate, context);

							if (context.method === "throw") {
								// If maybeInvokeDelegate(context) changed context.method from
								// "return" to "throw", let that override the TypeError below.
								return ContinueSentinel;
							}
						}

						context.method = "throw";
						context.arg = new TypeError(
							"The iterator does not provide a 'throw' method");
					}

					return ContinueSentinel;
				}

				var record = tryCatch(method, delegate.iterator, context.arg);

				if (record.type === "throw") {
					context.method = "throw";
					context.arg = record.arg;
					context.delegate = null;
					return ContinueSentinel;
				}

				var info = record.arg;

				if (!info) {
					context.method = "throw";
					context.arg = new TypeError("iterator result is not an object");
					context.delegate = null;
					return ContinueSentinel;
				}

				if (info.done) {
					// Assign the result of the finished delegate to the temporary
					// variable specified by delegate.resultName (see delegateYield).
					context[delegate.resultName] = info.value;

					// Resume execution at the desired location (see delegateYield).
					context.next = delegate.nextLoc;

					// If context.method was "throw" but the delegate handled the
					// exception, let the outer generator proceed normally. If
					// context.method was "next", forget context.arg since it has been
					// "consumed" by the delegate iterator. If context.method was
					// "return", allow the original .return call to continue in the
					// outer generator.
					if (context.method !== "return") {
						context.method = "next";
						context.arg = undefined;
					}

				} else {
					// Re-yield the result returned by the delegate method.
					return info;
				}

				// The delegate iterator is finished, so forget it and continue with
				// the outer generator.
				context.delegate = null;
				return ContinueSentinel;
			}

			// Define Generator.prototype.{next,throw,return} in terms of the
			// unified ._invoke helper method.
			defineIteratorMethods(Gp);

			define(Gp, toStringTagSymbol, "Generator");

			// A Generator should always return itself as the iterator object when the
			// @@iterator function is called on it. Some browsers' implementations of the
			// iterator prototype chain incorrectly implement this, causing the Generator
			// object to not be returned from this call. This ensures that doesn't happen.
			// See https://github.com/facebook/regenerator/issues/274 for more details.
			define(Gp, iteratorSymbol, function() {
				return this;
			});

			define(Gp, "toString", function() {
				return "[object Generator]";
			});

			function pushTryEntry(locs) {
				var entry = {
					tryLoc: locs[0]
				};

				if (1 in locs) {
					entry.catchLoc = locs[1];
				}

				if (2 in locs) {
					entry.finallyLoc = locs[2];
					entry.afterLoc = locs[3];
				}

				this.tryEntries.push(entry);
			}

			function resetTryEntry(entry) {
				var record = entry.completion || {};
				record.type = "normal";
				delete record.arg;
				entry.completion = record;
			}

			function Context(tryLocsList) {
				// The root entry object (effectively a try statement without a catch
				// or a finally block) gives us a place to store values thrown from
				// locations where there is no enclosing try statement.
				this.tryEntries = [{
					tryLoc: "root"
				}];
				tryLocsList.forEach(pushTryEntry, this);
				this.reset(true);
			}

			exports.keys = function(object) {
				var keys = [];
				for (var key in object) {
					keys.push(key);
				}
				keys.reverse();

				// Rather than returning an object with a next method, we keep
				// things simple and return the next function itself.
				return function next() {
					while (keys.length) {
						var key = keys.pop();
						if (key in object) {
							next.value = key;
							next.done = false;
							return next;
						}
					}

					// To avoid creating an additional object, we just hang the .value
					// and .done properties off the next function object itself. This
					// also ensures that the minifier will not anonymize the function.
					next.done = true;
					return next;
				};
			};

			function values(iterable) {
				if (iterable) {
					var iteratorMethod = iterable[iteratorSymbol];
					if (iteratorMethod) {
						return iteratorMethod.call(iterable);
					}

					if (typeof iterable.next === "function") {
						return iterable;
					}

					if (!isNaN(iterable.length)) {
						var i = -1,
							next = function next() {
								while (++i < iterable.length) {
									if (hasOwn.call(iterable, i)) {
										next.value = iterable[i];
										next.done = false;
										return next;
									}
								}

								next.value = undefined;
								next.done = true;

								return next;
							};

						return next.next = next;
					}
				}

				// Return an iterator with no values.
				return {
					next: doneResult
				};
			}
			exports.values = values;

			function doneResult() {
				return {
					value: undefined,
					done: true
				};
			}

			Context.prototype = {
				constructor: Context,

				reset: function(skipTempReset) {
					this.prev = 0;
					this.next = 0;
					// Resetting context._sent for legacy support of Babel's
					// function.sent implementation.
					this.sent = this._sent = undefined;
					this.done = false;
					this.delegate = null;

					this.method = "next";
					this.arg = undefined;

					this.tryEntries.forEach(resetTryEntry);

					if (!skipTempReset) {
						for (var name in this) {
							// Not sure about the optimal order of these conditions:
							if (name.charAt(0) === "t" &&
								hasOwn.call(this, name) &&
								!isNaN(+name.slice(1))) {
								this[name] = undefined;
							}
						}
					}
				},

				stop: function() {
					this.done = true;

					var rootEntry = this.tryEntries[0];
					var rootRecord = rootEntry.completion;
					if (rootRecord.type === "throw") {
						throw rootRecord.arg;
					}

					return this.rval;
				},

				dispatchException: function(exception) {
					if (this.done) {
						throw exception;
					}

					var context = this;

					function handle(loc, caught) {
						record.type = "throw";
						record.arg = exception;
						context.next = loc;

						if (caught) {
							// If the dispatched exception was caught by a catch block,
							// then let that catch block handle the exception normally.
							context.method = "next";
							context.arg = undefined;
						}

						return !!caught;
					}

					for (var i = this.tryEntries.length - 1; i >= 0; --i) {
						var entry = this.tryEntries[i];
						var record = entry.completion;

						if (entry.tryLoc === "root") {
							// Exception thrown outside of any try block that could handle
							// it, so set the completion value of the entire function to
							// throw the exception.
							return handle("end");
						}

						if (entry.tryLoc <= this.prev) {
							var hasCatch = hasOwn.call(entry, "catchLoc");
							var hasFinally = hasOwn.call(entry, "finallyLoc");

							if (hasCatch && hasFinally) {
								if (this.prev < entry.catchLoc) {
									return handle(entry.catchLoc, true);
								} else if (this.prev < entry.finallyLoc) {
									return handle(entry.finallyLoc);
								}

							} else if (hasCatch) {
								if (this.prev < entry.catchLoc) {
									return handle(entry.catchLoc, true);
								}

							} else if (hasFinally) {
								if (this.prev < entry.finallyLoc) {
									return handle(entry.finallyLoc);
								}

							} else {
								throw new Error("try statement without catch or finally");
							}
						}
					}
				},

				abrupt: function(type, arg) {
					for (var i = this.tryEntries.length - 1; i >= 0; --i) {
						var entry = this.tryEntries[i];
						if (entry.tryLoc <= this.prev &&
							hasOwn.call(entry, "finallyLoc") &&
							this.prev < entry.finallyLoc) {
							var finallyEntry = entry;
							break;
						}
					}

					if (finallyEntry &&
						(type === "break" ||
							type === "continue") &&
						finallyEntry.tryLoc <= arg &&
						arg <= finallyEntry.finallyLoc) {
						// Ignore the finally entry if control is not jumping to a
						// location outside the try/catch block.
						finallyEntry = null;
					}

					var record = finallyEntry ? finallyEntry.completion : {};
					record.type = type;
					record.arg = arg;

					if (finallyEntry) {
						this.method = "next";
						this.next = finallyEntry.finallyLoc;
						return ContinueSentinel;
					}

					return this.complete(record);
				},

				complete: function(record, afterLoc) {
					if (record.type === "throw") {
						throw record.arg;
					}

					if (record.type === "break" ||
						record.type === "continue") {
						this.next = record.arg;
					} else if (record.type === "return") {
						this.rval = this.arg = record.arg;
						this.method = "return";
						this.next = "end";
					} else if (record.type === "normal" && afterLoc) {
						this.next = afterLoc;
					}

					return ContinueSentinel;
				},

				finish: function(finallyLoc) {
					for (var i = this.tryEntries.length - 1; i >= 0; --i) {
						var entry = this.tryEntries[i];
						if (entry.finallyLoc === finallyLoc) {
							this.complete(entry.completion, entry.afterLoc);
							resetTryEntry(entry);
							return ContinueSentinel;
						}
					}
				},

				"catch": function(tryLoc) {
					for (var i = this.tryEntries.length - 1; i >= 0; --i) {
						var entry = this.tryEntries[i];
						if (entry.tryLoc === tryLoc) {
							var record = entry.completion;
							if (record.type === "throw") {
								var thrown = record.arg;
								resetTryEntry(entry);
							}
							return thrown;
						}
					}

					// The context.catch method must only be called with a location
					// argument that corresponds to a known catch block.
					throw new Error("illegal catch attempt");
				},

				delegateYield: function(iterable, resultName, nextLoc) {
					this.delegate = {
						iterator: values(iterable),
						resultName: resultName,
						nextLoc: nextLoc
					};

					if (this.method === "next") {
						// Deliberately forget the last sent value so that we don't
						// accidentally pass it on to the delegate.
						this.arg = undefined;
					}

					return ContinueSentinel;
				}
			};

			// Regardless of whether this script is executing as a CommonJS module
			// or not, return the runtime object so that we can declare the variable
			// regeneratorRuntime in the outer scope, which allows this module to be
			// injected easily by `bin/regenerator --include-runtime script.js`.
			return exports;

		}(
			// If this script is executing as a CommonJS module, use module.exports
			// as the regeneratorRuntime namespace. Otherwise create a new empty
			// object. Either way, the resulting object will be used to initialize
			// the regeneratorRuntime variable at the top of this file.
			typeof module === "object" ? module.exports : {}
		));

		try {
			regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
			// This module should not be running in strict mode, so the above
			// assignment should always work unless something is misconfigured. Just
			// in case runtime.js accidentally runs in strict mode, in modern engines
			// we can explicitly access globalThis. In older engines we can escape
			// strict mode using a global Function call. This could conceivably fail
			// if a Content Security Policy forbids using Function, but in that case
			// the proper solution is to fix the accidental strict mode problem. If
			// you've misconfigured your bundler to force strict mode and applied a
			// CSP to forbid Function, and you're not willing to fix either of those
			// problems, please detail your unique predicament in a GitHub issue.
			if (typeof globalThis === "object") {
				globalThis.regeneratorRuntime = runtime;
			} else {
				Function("r", "regeneratorRuntime = r")(runtime);
			}
		}

	}, {}],
	23: [function(require, module, exports) {
		module.exports = require("regenerator-runtime");

	}, {
		"regenerator-runtime": 22
	}],
	24: [function(require, module, exports) {
		module.exports = require('./lib/axios');
	}, {
		"./lib/axios": 26
	}],
	25: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');
		var settle = require('./../core/settle');
		var cookies = require('./../helpers/cookies');
		var buildURL = require('./../helpers/buildURL');
		var buildFullPath = require('../core/buildFullPath');
		var parseHeaders = require('./../helpers/parseHeaders');
		var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
		var createError = require('../core/createError');
		var transitionalDefaults = require('../defaults/transitional');
		var Cancel = require('../cancel/Cancel');

		module.exports = function xhrAdapter(config) {
			return new Promise(function dispatchXhrRequest(resolve, reject) {
				var requestData = config.data;
				var requestHeaders = config.headers;
				var responseType = config.responseType;
				var onCanceled;

				function done() {
					if (config.cancelToken) {
						config.cancelToken.unsubscribe(onCanceled);
					}

					if (config.signal) {
						config.signal.removeEventListener('abort', onCanceled);
					}
				}

				if (utils.isFormData(requestData)) {
					delete requestHeaders['Content-Type']; // Let the browser set it
				}

				var request = new XMLHttpRequest();

				// HTTP basic authentication
				if (config.auth) {
					var username = config.auth.username || '';
					var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
					requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
				}

				var fullPath = buildFullPath(config.baseURL, config.url);
				request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

				// Set the request timeout in MS
				request.timeout = config.timeout;

				function onloadend() {
					if (!request) {
						return;
					}
					// Prepare the response
					var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
					var responseData = !responseType || responseType === 'text' || responseType === 'json' ?
						request.responseText : request.response;
					var response = {
						data: responseData,
						status: request.status,
						statusText: request.statusText,
						headers: responseHeaders,
						config: config,
						request: request
					};

					settle(function _resolve(value) {
						resolve(value);
						done();
					}, function _reject(err) {
						reject(err);
						done();
					}, response);

					// Clean up request
					request = null;
				}

				if ('onloadend' in request) {
					// Use onloadend if available
					request.onloadend = onloadend;
				} else {
					// Listen for ready state to emulate onloadend
					request.onreadystatechange = function handleLoad() {
						if (!request || request.readyState !== 4) {
							return;
						}

						// The request errored out and we didn't get a response, this will be
						// handled by onerror instead
						// With one exception: request that using file: protocol, most browsers
						// will return status as 0 even though it's a successful request
						if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
							return;
						}
						// readystate handler is calling before onerror or ontimeout handlers,
						// so we should call onloadend on the next 'tick'
						setTimeout(onloadend);
					};
				}

				// Handle browser request cancellation (as opposed to a manual cancellation)
				request.onabort = function handleAbort() {
					if (!request) {
						return;
					}

					reject(createError('Request aborted', config, 'ECONNABORTED', request));

					// Clean up request
					request = null;
				};

				// Handle low level network errors
				request.onerror = function handleError() {
					// Real errors are hidden from us by the browser
					// onerror should only fire if it's a network error
					reject(createError('Network Error', config, null, request));

					// Clean up request
					request = null;
				};

				// Handle timeout
				request.ontimeout = function handleTimeout() {
					var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
					var transitional = config.transitional || transitionalDefaults;
					if (config.timeoutErrorMessage) {
						timeoutErrorMessage = config.timeoutErrorMessage;
					}
					reject(createError(
						timeoutErrorMessage,
						config,
						transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
						request));

					// Clean up request
					request = null;
				};

				// Add xsrf header
				// This is only done if running in a standard browser environment.
				// Specifically not if we're in a web worker, or react-native.
				if (utils.isStandardBrowserEnv()) {
					// Add xsrf header
					var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
						cookies.read(config.xsrfCookieName) :
						undefined;

					if (xsrfValue) {
						requestHeaders[config.xsrfHeaderName] = xsrfValue;
					}
				}

				// Add headers to the request
				if ('setRequestHeader' in request) {
					utils.forEach(requestHeaders, function setRequestHeader(val, key) {
						if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
							// Remove Content-Type if data is undefined
							delete requestHeaders[key];
						} else {
							// Otherwise add header to the request
							request.setRequestHeader(key, val);
						}
					});
				}

				// Add withCredentials to request if needed
				if (!utils.isUndefined(config.withCredentials)) {
					request.withCredentials = !!config.withCredentials;
				}

				// Add responseType to request if needed
				if (responseType && responseType !== 'json') {
					request.responseType = config.responseType;
				}

				// Handle progress if needed
				if (typeof config.onDownloadProgress === 'function') {
					request.addEventListener('progress', config.onDownloadProgress);
				}

				// Not all browsers support upload events
				if (typeof config.onUploadProgress === 'function' && request.upload) {
					request.upload.addEventListener('progress', config.onUploadProgress);
				}

				if (config.cancelToken || config.signal) {
					// Handle cancellation
					// eslint-disable-next-line func-names
					onCanceled = function(cancel) {
						if (!request) {
							return;
						}
						reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
						request.abort();
						request = null;
					};

					config.cancelToken && config.cancelToken.subscribe(onCanceled);
					if (config.signal) {
						config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
					}
				}

				if (!requestData) {
					requestData = null;
				}

				// Send the request
				request.send(requestData);
			});
		};

	}, {
		"../cancel/Cancel": 27,
		"../core/buildFullPath": 32,
		"../core/createError": 33,
		"../defaults/transitional": 40,
		"./../core/settle": 37,
		"./../helpers/buildURL": 43,
		"./../helpers/cookies": 45,
		"./../helpers/isURLSameOrigin": 48,
		"./../helpers/parseHeaders": 50,
		"./../utils": 53
	}],
	26: [function(require, module, exports) {
		'use strict';

		var utils = require('./utils');
		var bind = require('./helpers/bind');
		var Axios = require('./core/Axios');
		var mergeConfig = require('./core/mergeConfig');
		var defaults = require('./defaults');

		/**
		 * Create an instance of Axios
		 *
		 * @param {Object} defaultConfig The default config for the instance
		 * @return {Axios} A new instance of Axios
		 */
		function createInstance(defaultConfig) {
			var context = new Axios(defaultConfig);
			var instance = bind(Axios.prototype.request, context);

			// Copy axios.prototype to instance
			utils.extend(instance, Axios.prototype, context);

			// Copy context to instance
			utils.extend(instance, context);

			// Factory for creating new instances
			instance.create = function create(instanceConfig) {
				return createInstance(mergeConfig(defaultConfig, instanceConfig));
			};

			return instance;
		}

		// Create the default instance to be exported
		var axios = createInstance(defaults);

		// Expose Axios class to allow class inheritance
		axios.Axios = Axios;

		// Expose Cancel & CancelToken
		axios.Cancel = require('./cancel/Cancel');
		axios.CancelToken = require('./cancel/CancelToken');
		axios.isCancel = require('./cancel/isCancel');
		axios.VERSION = require('./env/data').version;

		// Expose all/spread
		axios.all = function all(promises) {
			return Promise.all(promises);
		};
		axios.spread = require('./helpers/spread');

		// Expose isAxiosError
		axios.isAxiosError = require('./helpers/isAxiosError');

		module.exports = axios;

		// Allow use of default import syntax in TypeScript
		module.exports.default = axios;

	}, {
		"./cancel/Cancel": 27,
		"./cancel/CancelToken": 28,
		"./cancel/isCancel": 29,
		"./core/Axios": 30,
		"./core/mergeConfig": 36,
		"./defaults": 39,
		"./env/data": 41,
		"./helpers/bind": 42,
		"./helpers/isAxiosError": 47,
		"./helpers/spread": 51,
		"./utils": 53
	}],
	27: [function(require, module, exports) {
		'use strict';

		/**
		 * A `Cancel` is an object that is thrown when an operation is canceled.
		 *
		 * @class
		 * @param {string=} message The message.
		 */
		function Cancel(message) {
			this.message = message;
		}

		Cancel.prototype.toString = function toString() {
			return 'Cancel' + (this.message ? ': ' + this.message : '');
		};

		Cancel.prototype.__CANCEL__ = true;

		module.exports = Cancel;

	}, {}],
	28: [function(require, module, exports) {
		'use strict';

		var Cancel = require('./Cancel');

		/**
		 * A `CancelToken` is an object that can be used to request cancellation of an operation.
		 *
		 * @class
		 * @param {Function} executor The executor function.
		 */
		function CancelToken(executor) {
			if (typeof executor !== 'function') {
				throw new TypeError('executor must be a function.');
			}

			var resolvePromise;

			this.promise = new Promise(function promiseExecutor(resolve) {
				resolvePromise = resolve;
			});

			var token = this;

			// eslint-disable-next-line func-names
			this.promise.then(function(cancel) {
				if (!token._listeners) return;

				var i;
				var l = token._listeners.length;

				for (i = 0; i < l; i++) {
					token._listeners[i](cancel);
				}
				token._listeners = null;
			});

			// eslint-disable-next-line func-names
			this.promise.then = function(onfulfilled) {
				var _resolve;
				// eslint-disable-next-line func-names
				var promise = new Promise(function(resolve) {
					token.subscribe(resolve);
					_resolve = resolve;
				}).then(onfulfilled);

				promise.cancel = function reject() {
					token.unsubscribe(_resolve);
				};

				return promise;
			};

			executor(function cancel(message) {
				if (token.reason) {
					// Cancellation has already been requested
					return;
				}

				token.reason = new Cancel(message);
				resolvePromise(token.reason);
			});
		}

		/**
		 * Throws a `Cancel` if cancellation has been requested.
		 */
		CancelToken.prototype.throwIfRequested = function throwIfRequested() {
			if (this.reason) {
				throw this.reason;
			}
		};

		/**
		 * Subscribe to the cancel signal
		 */

		CancelToken.prototype.subscribe = function subscribe(listener) {
			if (this.reason) {
				listener(this.reason);
				return;
			}

			if (this._listeners) {
				this._listeners.push(listener);
			} else {
				this._listeners = [listener];
			}
		};

		/**
		 * Unsubscribe from the cancel signal
		 */

		CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
			if (!this._listeners) {
				return;
			}
			var index = this._listeners.indexOf(listener);
			if (index !== -1) {
				this._listeners.splice(index, 1);
			}
		};

		/**
		 * Returns an object that contains a new `CancelToken` and a function that, when called,
		 * cancels the `CancelToken`.
		 */
		CancelToken.source = function source() {
			var cancel;
			var token = new CancelToken(function executor(c) {
				cancel = c;
			});
			return {
				token: token,
				cancel: cancel
			};
		};

		module.exports = CancelToken;

	}, {
		"./Cancel": 27
	}],
	29: [function(require, module, exports) {
		'use strict';

		module.exports = function isCancel(value) {
			return !!(value && value.__CANCEL__);
		};

	}, {}],
	30: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');
		var buildURL = require('../helpers/buildURL');
		var InterceptorManager = require('./InterceptorManager');
		var dispatchRequest = require('./dispatchRequest');
		var mergeConfig = require('./mergeConfig');
		var validator = require('../helpers/validator');

		var validators = validator.validators;
		/**
		 * Create a new instance of Axios
		 *
		 * @param {Object} instanceConfig The default config for the instance
		 */
		function Axios(instanceConfig) {
			this.defaults = instanceConfig;
			this.interceptors = {
				request: new InterceptorManager(),
				response: new InterceptorManager()
			};
		}

		/**
		 * Dispatch a request
		 *
		 * @param {Object} config The config specific for this request (merged with this.defaults)
		 */
		Axios.prototype.request = function request(configOrUrl, config) {
			/*eslint no-param-reassign:0*/
			// Allow for axios('example/url'[, config]) a la fetch API
			if (typeof configOrUrl === 'string') {
				config = config || {};
				config.url = configOrUrl;
			} else {
				config = configOrUrl || {};
			}

			config = mergeConfig(this.defaults, config);

			// Set config.method
			if (config.method) {
				config.method = config.method.toLowerCase();
			} else if (this.defaults.method) {
				config.method = this.defaults.method.toLowerCase();
			} else {
				config.method = 'get';
			}

			var transitional = config.transitional;

			if (transitional !== undefined) {
				validator.assertOptions(transitional, {
					silentJSONParsing: validators.transitional(validators.boolean),
					forcedJSONParsing: validators.transitional(validators.boolean),
					clarifyTimeoutError: validators.transitional(validators.boolean)
				}, false);
			}

			// filter out skipped interceptors
			var requestInterceptorChain = [];
			var synchronousRequestInterceptors = true;
			this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
				if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
					return;
				}

				synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

				requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
			});

			var responseInterceptorChain = [];
			this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
				responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
			});

			var promise;

			if (!synchronousRequestInterceptors) {
				var chain = [dispatchRequest, undefined];

				Array.prototype.unshift.apply(chain, requestInterceptorChain);
				chain = chain.concat(responseInterceptorChain);

				promise = Promise.resolve(config);
				while (chain.length) {
					promise = promise.then(chain.shift(), chain.shift());
				}

				return promise;
			}


			var newConfig = config;
			while (requestInterceptorChain.length) {
				var onFulfilled = requestInterceptorChain.shift();
				var onRejected = requestInterceptorChain.shift();
				try {
					newConfig = onFulfilled(newConfig);
				} catch (error) {
					onRejected(error);
					break;
				}
			}

			try {
				promise = dispatchRequest(newConfig);
			} catch (error) {
				return Promise.reject(error);
			}

			while (responseInterceptorChain.length) {
				promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
			}

			return promise;
		};

		Axios.prototype.getUri = function getUri(config) {
			config = mergeConfig(this.defaults, config);
			return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
		};

		// Provide aliases for supported request methods
		utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
			/*eslint func-names:0*/
			Axios.prototype[method] = function(url, config) {
				return this.request(mergeConfig(config || {}, {
					method: method,
					url: url,
					data: (config || {}).data
				}));
			};
		});

		utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
			/*eslint func-names:0*/
			Axios.prototype[method] = function(url, data, config) {
				return this.request(mergeConfig(config || {}, {
					method: method,
					url: url,
					data: data
				}));
			};
		});

		module.exports = Axios;

	}, {
		"../helpers/buildURL": 43,
		"../helpers/validator": 52,
		"./../utils": 53,
		"./InterceptorManager": 31,
		"./dispatchRequest": 34,
		"./mergeConfig": 36
	}],
	31: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');

		function InterceptorManager() {
			this.handlers = [];
		}

		/**
		 * Add a new interceptor to the stack
		 *
		 * @param {Function} fulfilled The function to handle `then` for a `Promise`
		 * @param {Function} rejected The function to handle `reject` for a `Promise`
		 *
		 * @return {Number} An ID used to remove interceptor later
		 */
		InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
			this.handlers.push({
				fulfilled: fulfilled,
				rejected: rejected,
				synchronous: options ? options.synchronous : false,
				runWhen: options ? options.runWhen : null
			});
			return this.handlers.length - 1;
		};

		/**
		 * Remove an interceptor from the stack
		 *
		 * @param {Number} id The ID that was returned by `use`
		 */
		InterceptorManager.prototype.eject = function eject(id) {
			if (this.handlers[id]) {
				this.handlers[id] = null;
			}
		};

		/**
		 * Iterate over all the registered interceptors
		 *
		 * This method is particularly useful for skipping over any
		 * interceptors that may have become `null` calling `eject`.
		 *
		 * @param {Function} fn The function to call for each interceptor
		 */
		InterceptorManager.prototype.forEach = function forEach(fn) {
			utils.forEach(this.handlers, function forEachHandler(h) {
				if (h !== null) {
					fn(h);
				}
			});
		};

		module.exports = InterceptorManager;

	}, {
		"./../utils": 53
	}],
	32: [function(require, module, exports) {
		'use strict';

		var isAbsoluteURL = require('../helpers/isAbsoluteURL');
		var combineURLs = require('../helpers/combineURLs');

		/**
		 * Creates a new URL by combining the baseURL with the requestedURL,
		 * only when the requestedURL is not already an absolute URL.
		 * If the requestURL is absolute, this function returns the requestedURL untouched.
		 *
		 * @param {string} baseURL The base URL
		 * @param {string} requestedURL Absolute or relative URL to combine
		 * @returns {string} The combined full path
		 */
		module.exports = function buildFullPath(baseURL, requestedURL) {
			if (baseURL && !isAbsoluteURL(requestedURL)) {
				return combineURLs(baseURL, requestedURL);
			}
			return requestedURL;
		};

	}, {
		"../helpers/combineURLs": 44,
		"../helpers/isAbsoluteURL": 46
	}],
	33: [function(require, module, exports) {
		'use strict';

		var enhanceError = require('./enhanceError');

		/**
		 * Create an Error with the specified message, config, error code, request and response.
		 *
		 * @param {string} message The error message.
		 * @param {Object} config The config.
		 * @param {string} [code] The error code (for example, 'ECONNABORTED').
		 * @param {Object} [request] The request.
		 * @param {Object} [response] The response.
		 * @returns {Error} The created error.
		 */
		module.exports = function createError(message, config, code, request, response) {
			var error = new Error(message);
			return enhanceError(error, config, code, request, response);
		};

	}, {
		"./enhanceError": 35
	}],
	34: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');
		var transformData = require('./transformData');
		var isCancel = require('../cancel/isCancel');
		var defaults = require('../defaults');
		var Cancel = require('../cancel/Cancel');

		/**
		 * Throws a `Cancel` if cancellation has been requested.
		 */
		function throwIfCancellationRequested(config) {
			if (config.cancelToken) {
				config.cancelToken.throwIfRequested();
			}

			if (config.signal && config.signal.aborted) {
				throw new Cancel('canceled');
			}
		}

		/**
		 * Dispatch a request to the server using the configured adapter.
		 *
		 * @param {object} config The config that is to be used for the request
		 * @returns {Promise} The Promise to be fulfilled
		 */
		module.exports = function dispatchRequest(config) {
			throwIfCancellationRequested(config);

			// Ensure headers exist
			config.headers = config.headers || {};

			// Transform request data
			config.data = transformData.call(
				config,
				config.data,
				config.headers,
				config.transformRequest
			);

			// Flatten headers
			config.headers = utils.merge(
				config.headers.common || {},
				config.headers[config.method] || {},
				config.headers
			);

			utils.forEach(
				['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
				function cleanHeaderConfig(method) {
					delete config.headers[method];
				}
			);

			var adapter = config.adapter || defaults.adapter;

			return adapter(config).then(function onAdapterResolution(response) {
				throwIfCancellationRequested(config);

				// Transform response data
				response.data = transformData.call(
					config,
					response.data,
					response.headers,
					config.transformResponse
				);

				return response;
			}, function onAdapterRejection(reason) {
				if (!isCancel(reason)) {
					throwIfCancellationRequested(config);

					// Transform response data
					if (reason && reason.response) {
						reason.response.data = transformData.call(
							config,
							reason.response.data,
							reason.response.headers,
							config.transformResponse
						);
					}
				}

				return Promise.reject(reason);
			});
		};

	}, {
		"../cancel/Cancel": 27,
		"../cancel/isCancel": 29,
		"../defaults": 39,
		"./../utils": 53,
		"./transformData": 38
	}],
	35: [function(require, module, exports) {
		'use strict';

		/**
		 * Update an Error with the specified config, error code, and response.
		 *
		 * @param {Error} error The error to update.
		 * @param {Object} config The config.
		 * @param {string} [code] The error code (for example, 'ECONNABORTED').
		 * @param {Object} [request] The request.
		 * @param {Object} [response] The response.
		 * @returns {Error} The error.
		 */
		module.exports = function enhanceError(error, config, code, request, response) {
			error.config = config;
			if (code) {
				error.code = code;
			}

			error.request = request;
			error.response = response;
			error.isAxiosError = true;

			error.toJSON = function toJSON() {
				return {
					// Standard
					message: this.message,
					name: this.name,
					// Microsoft
					description: this.description,
					number: this.number,
					// Mozilla
					fileName: this.fileName,
					lineNumber: this.lineNumber,
					columnNumber: this.columnNumber,
					stack: this.stack,
					// Axios
					config: this.config,
					code: this.code,
					status: this.response && this.response.status ? this.response.status : null
				};
			};
			return error;
		};

	}, {}],
	36: [function(require, module, exports) {
		'use strict';

		var utils = require('../utils');

		/**
		 * Config-specific merge-function which creates a new config-object
		 * by merging two configuration objects together.
		 *
		 * @param {Object} config1
		 * @param {Object} config2
		 * @returns {Object} New object resulting from merging config2 to config1
		 */
		module.exports = function mergeConfig(config1, config2) {
			// eslint-disable-next-line no-param-reassign
			config2 = config2 || {};
			var config = {};

			function getMergedValue(target, source) {
				if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
					return utils.merge(target, source);
				} else if (utils.isPlainObject(source)) {
					return utils.merge({}, source);
				} else if (utils.isArray(source)) {
					return source.slice();
				}
				return source;
			}

			// eslint-disable-next-line consistent-return
			function mergeDeepProperties(prop) {
				if (!utils.isUndefined(config2[prop])) {
					return getMergedValue(config1[prop], config2[prop]);
				} else if (!utils.isUndefined(config1[prop])) {
					return getMergedValue(undefined, config1[prop]);
				}
			}

			// eslint-disable-next-line consistent-return
			function valueFromConfig2(prop) {
				if (!utils.isUndefined(config2[prop])) {
					return getMergedValue(undefined, config2[prop]);
				}
			}

			// eslint-disable-next-line consistent-return
			function defaultToConfig2(prop) {
				if (!utils.isUndefined(config2[prop])) {
					return getMergedValue(undefined, config2[prop]);
				} else if (!utils.isUndefined(config1[prop])) {
					return getMergedValue(undefined, config1[prop]);
				}
			}

			// eslint-disable-next-line consistent-return
			function mergeDirectKeys(prop) {
				if (prop in config2) {
					return getMergedValue(config1[prop], config2[prop]);
				} else if (prop in config1) {
					return getMergedValue(undefined, config1[prop]);
				}
			}

			var mergeMap = {
				'url': valueFromConfig2,
				'method': valueFromConfig2,
				'data': valueFromConfig2,
				'baseURL': defaultToConfig2,
				'transformRequest': defaultToConfig2,
				'transformResponse': defaultToConfig2,
				'paramsSerializer': defaultToConfig2,
				'timeout': defaultToConfig2,
				'timeoutMessage': defaultToConfig2,
				'withCredentials': defaultToConfig2,
				'adapter': defaultToConfig2,
				'responseType': defaultToConfig2,
				'xsrfCookieName': defaultToConfig2,
				'xsrfHeaderName': defaultToConfig2,
				'onUploadProgress': defaultToConfig2,
				'onDownloadProgress': defaultToConfig2,
				'decompress': defaultToConfig2,
				'maxContentLength': defaultToConfig2,
				'maxBodyLength': defaultToConfig2,
				'transport': defaultToConfig2,
				'httpAgent': defaultToConfig2,
				'httpsAgent': defaultToConfig2,
				'cancelToken': defaultToConfig2,
				'socketPath': defaultToConfig2,
				'responseEncoding': defaultToConfig2,
				'validateStatus': mergeDirectKeys
			};

			utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
				var merge = mergeMap[prop] || mergeDeepProperties;
				var configValue = merge(prop);
				(utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
			});

			return config;
		};

	}, {
		"../utils": 53
	}],
	37: [function(require, module, exports) {
		'use strict';

		var createError = require('./createError');

		/**
		 * Resolve or reject a Promise based on response status.
		 *
		 * @param {Function} resolve A function that resolves the promise.
		 * @param {Function} reject A function that rejects the promise.
		 * @param {object} response The response.
		 */
		module.exports = function settle(resolve, reject, response) {
			var validateStatus = response.config.validateStatus;
			if (!response.status || !validateStatus || validateStatus(response.status)) {
				resolve(response);
			} else {
				reject(createError(
					'Request failed with status code ' + response.status,
					response.config,
					null,
					response.request,
					response
				));
			}
		};

	}, {
		"./createError": 33
	}],
	38: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');
		var defaults = require('../defaults');

		/**
		 * Transform the data for a request or a response
		 *
		 * @param {Object|String} data The data to be transformed
		 * @param {Array} headers The headers for the request or response
		 * @param {Array|Function} fns A single function or Array of functions
		 * @returns {*} The resulting transformed data
		 */
		module.exports = function transformData(data, headers, fns) {
			var context = this || defaults;
			/*eslint no-param-reassign:0*/
			utils.forEach(fns, function transform(fn) {
				data = fn.call(context, data, headers);
			});

			return data;
		};

	}, {
		"../defaults": 39,
		"./../utils": 53
	}],
	39: [function(require, module, exports) {
		(function(process) {
			(function() {
				'use strict';

				var utils = require('../utils');
				var normalizeHeaderName = require('../helpers/normalizeHeaderName');
				var enhanceError = require('../core/enhanceError');
				var transitionalDefaults = require('./transitional');

				var DEFAULT_CONTENT_TYPE = {
					'Content-Type': 'application/x-www-form-urlencoded'
				};

				function setContentTypeIfUnset(headers, value) {
					if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
						headers['Content-Type'] = value;
					}
				}

				function getDefaultAdapter() {
					var adapter;
					if (typeof XMLHttpRequest !== 'undefined') {
						// For browsers use XHR adapter
						adapter = require('../adapters/xhr');
					} else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
						// For node use HTTP adapter
						adapter = require('../adapters/http');
					}
					return adapter;
				}

				function stringifySafely(rawValue, parser, encoder) {
					if (utils.isString(rawValue)) {
						try {
							(parser || JSON.parse)(rawValue);
							return utils.trim(rawValue);
						} catch (e) {
							if (e.name !== 'SyntaxError') {
								throw e;
							}
						}
					}

					return (encoder || JSON.stringify)(rawValue);
				}

				var defaults = {

					transitional: transitionalDefaults,

					adapter: getDefaultAdapter(),

					transformRequest: [function transformRequest(data, headers) {
						normalizeHeaderName(headers, 'Accept');
						normalizeHeaderName(headers, 'Content-Type');

						if (utils.isFormData(data) ||
							utils.isArrayBuffer(data) ||
							utils.isBuffer(data) ||
							utils.isStream(data) ||
							utils.isFile(data) ||
							utils.isBlob(data)
						) {
							return data;
						}
						if (utils.isArrayBufferView(data)) {
							return data.buffer;
						}
						if (utils.isURLSearchParams(data)) {
							setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
							return data.toString();
						}
						if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
							setContentTypeIfUnset(headers, 'application/json');
							return stringifySafely(data);
						}
						return data;
					}],

					transformResponse: [function transformResponse(data) {
						var transitional = this.transitional || defaults.transitional;
						var silentJSONParsing = transitional && transitional.silentJSONParsing;
						var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
						var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

						if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
							try {
								return JSON.parse(data);
							} catch (e) {
								if (strictJSONParsing) {
									if (e.name === 'SyntaxError') {
										throw enhanceError(e, this, 'E_JSON_PARSE');
									}
									throw e;
								}
							}
						}

						return data;
					}],

					/**
					 * A timeout in milliseconds to abort a request. If set to 0 (default) a
					 * timeout is not created.
					 */
					timeout: 0,

					xsrfCookieName: 'XSRF-TOKEN',
					xsrfHeaderName: 'X-XSRF-TOKEN',

					maxContentLength: -1,
					maxBodyLength: -1,

					validateStatus: function validateStatus(status) {
						return status >= 200 && status < 300;
					},

					headers: {
						common: {
							'Accept': 'application/json, text/plain, */*'
						}
					}
				};

				utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
					defaults.headers[method] = {};
				});

				utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
					defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
				});

				module.exports = defaults;

			}).call(this)
		}).call(this, require('_process'))

	}, {
		"../adapters/http": 25,
		"../adapters/xhr": 25,
		"../core/enhanceError": 35,
		"../helpers/normalizeHeaderName": 49,
		"../utils": 53,
		"./transitional": 40,
		"_process": 54
	}],
	40: [function(require, module, exports) {
		'use strict';

		module.exports = {
			silentJSONParsing: true,
			forcedJSONParsing: true,
			clarifyTimeoutError: false
		};

	}, {}],
	41: [function(require, module, exports) {
		module.exports = {
			"version": "0.26.1"
		};
	}, {}],
	42: [function(require, module, exports) {
		'use strict';

		module.exports = function bind(fn, thisArg) {
			return function wrap() {
				var args = new Array(arguments.length);
				for (var i = 0; i < args.length; i++) {
					args[i] = arguments[i];
				}
				return fn.apply(thisArg, args);
			};
		};

	}, {}],
	43: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');

		function encode(val) {
			return encodeURIComponent(val).
			replace(/%3A/gi, ':').
			replace(/%24/g, '$').
			replace(/%2C/gi, ',').
			replace(/%20/g, '+').
			replace(/%5B/gi, '[').
			replace(/%5D/gi, ']');
		}

		/**
		 * Build a URL by appending params to the end
		 *
		 * @param {string} url The base of the url (e.g., http://www.google.com)
		 * @param {object} [params] The params to be appended
		 * @returns {string} The formatted url
		 */
		module.exports = function buildURL(url, params, paramsSerializer) {
			/*eslint no-param-reassign:0*/
			if (!params) {
				return url;
			}

			var serializedParams;
			if (paramsSerializer) {
				serializedParams = paramsSerializer(params);
			} else if (utils.isURLSearchParams(params)) {
				serializedParams = params.toString();
			} else {
				var parts = [];

				utils.forEach(params, function serialize(val, key) {
					if (val === null || typeof val === 'undefined') {
						return;
					}

					if (utils.isArray(val)) {
						key = key + '[]';
					} else {
						val = [val];
					}

					utils.forEach(val, function parseValue(v) {
						if (utils.isDate(v)) {
							v = v.toISOString();
						} else if (utils.isObject(v)) {
							v = JSON.stringify(v);
						}
						parts.push(encode(key) + '=' + encode(v));
					});
				});

				serializedParams = parts.join('&');
			}

			if (serializedParams) {
				var hashmarkIndex = url.indexOf('#');
				if (hashmarkIndex !== -1) {
					url = url.slice(0, hashmarkIndex);
				}

				url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
			}

			return url;
		};

	}, {
		"./../utils": 53
	}],
	44: [function(require, module, exports) {
		'use strict';

		/**
		 * Creates a new URL by combining the specified URLs
		 *
		 * @param {string} baseURL The base URL
		 * @param {string} relativeURL The relative URL
		 * @returns {string} The combined URL
		 */
		module.exports = function combineURLs(baseURL, relativeURL) {
			return relativeURL ?
				baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') :
				baseURL;
		};

	}, {}],
	45: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');

		module.exports = (
			utils.isStandardBrowserEnv() ?

			// Standard browser envs support document.cookie
			(function standardBrowserEnv() {
				return {
					write: function write(name, value, expires, path, domain, secure) {
						var cookie = [];
						cookie.push(name + '=' + encodeURIComponent(value));

						if (utils.isNumber(expires)) {
							cookie.push('expires=' + new Date(expires).toGMTString());
						}

						if (utils.isString(path)) {
							cookie.push('path=' + path);
						}

						if (utils.isString(domain)) {
							cookie.push('domain=' + domain);
						}

						if (secure === true) {
							cookie.push('secure');
						}

						document.cookie = cookie.join('; ');
					},

					read: function read(name) {
						var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
						return (match ? decodeURIComponent(match[3]) : null);
					},

					remove: function remove(name) {
						this.write(name, '', Date.now() - 86400000);
					}
				};
			})() :

			// Non standard browser env (web workers, react-native) lack needed support.
			(function nonStandardBrowserEnv() {
				return {
					write: function write() {},
					read: function read() {
						return null;
					},
					remove: function remove() {}
				};
			})()
		);

	}, {
		"./../utils": 53
	}],
	46: [function(require, module, exports) {
		'use strict';

		/**
		 * Determines whether the specified URL is absolute
		 *
		 * @param {string} url The URL to test
		 * @returns {boolean} True if the specified URL is absolute, otherwise false
		 */
		module.exports = function isAbsoluteURL(url) {
			// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
			// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
			// by any combination of letters, digits, plus, period, or hyphen.
			return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
		};

	}, {}],
	47: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');

		/**
		 * Determines whether the payload is an error thrown by Axios
		 *
		 * @param {*} payload The value to test
		 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
		 */
		module.exports = function isAxiosError(payload) {
			return utils.isObject(payload) && (payload.isAxiosError === true);
		};

	}, {
		"./../utils": 53
	}],
	48: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');

		module.exports = (
			utils.isStandardBrowserEnv() ?

			// Standard browser envs have full support of the APIs needed to test
			// whether the request URL is of the same origin as current location.
			(function standardBrowserEnv() {
				var msie = /(msie|trident)/i.test(navigator.userAgent);
				var urlParsingNode = document.createElement('a');
				var originURL;

				/**
				 * Parse a URL to discover it's components
				 *
				 * @param {String} url The URL to be parsed
				 * @returns {Object}
				 */
				function resolveURL(url) {
					var href = url;

					if (msie) {
						// IE needs attribute set twice to normalize properties
						urlParsingNode.setAttribute('href', href);
						href = urlParsingNode.href;
					}

					urlParsingNode.setAttribute('href', href);

					// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
					return {
						href: urlParsingNode.href,
						protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
						host: urlParsingNode.host,
						search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
						hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
						hostname: urlParsingNode.hostname,
						port: urlParsingNode.port,
						pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
							urlParsingNode.pathname : '/' + urlParsingNode.pathname
					};
				}

				originURL = resolveURL(window.location.href);

				/**
				 * Determine if a URL shares the same origin as the current location
				 *
				 * @param {String} requestURL The URL to test
				 * @returns {boolean} True if URL shares the same origin, otherwise false
				 */
				return function isURLSameOrigin(requestURL) {
					var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
					return (parsed.protocol === originURL.protocol &&
						parsed.host === originURL.host);
				};
			})() :

			// Non standard browser envs (web workers, react-native) lack needed support.
			(function nonStandardBrowserEnv() {
				return function isURLSameOrigin() {
					return true;
				};
			})()
		);

	}, {
		"./../utils": 53
	}],
	49: [function(require, module, exports) {
		'use strict';

		var utils = require('../utils');

		module.exports = function normalizeHeaderName(headers, normalizedName) {
			utils.forEach(headers, function processHeader(value, name) {
				if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
					headers[normalizedName] = value;
					delete headers[name];
				}
			});
		};

	}, {
		"../utils": 53
	}],
	50: [function(require, module, exports) {
		'use strict';

		var utils = require('./../utils');

		// Headers whose duplicates are ignored by node
		// c.f. https://nodejs.org/api/http.html#http_message_headers
		var ignoreDuplicateOf = [
			'age', 'authorization', 'content-length', 'content-type', 'etag',
			'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
			'last-modified', 'location', 'max-forwards', 'proxy-authorization',
			'referer', 'retry-after', 'user-agent'
		];

		/**
		 * Parse headers into an object
		 *
		 * ```
		 * Date: Wed, 27 Aug 2014 08:58:49 GMT
		 * Content-Type: application/json
		 * Connection: keep-alive
		 * Transfer-Encoding: chunked
		 * ```
		 *
		 * @param {String} headers Headers needing to be parsed
		 * @returns {Object} Headers parsed into an object
		 */
		module.exports = function parseHeaders(headers) {
			var parsed = {};
			var key;
			var val;
			var i;

			if (!headers) {
				return parsed;
			}

			utils.forEach(headers.split('\n'), function parser(line) {
				i = line.indexOf(':');
				key = utils.trim(line.substr(0, i)).toLowerCase();
				val = utils.trim(line.substr(i + 1));

				if (key) {
					if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
						return;
					}
					if (key === 'set-cookie') {
						parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
					} else {
						parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
					}
				}
			});

			return parsed;
		};

	}, {
		"./../utils": 53
	}],
	51: [function(require, module, exports) {
		'use strict';

		/**
		 * Syntactic sugar for invoking a function and expanding an array for arguments.
		 *
		 * Common use case would be to use `Function.prototype.apply`.
		 *
		 *  ```js
		 *  function f(x, y, z) {}
		 *  var args = [1, 2, 3];
		 *  f.apply(null, args);
		 *  ```
		 *
		 * With `spread` this example can be re-written.
		 *
		 *  ```js
		 *  spread(function(x, y, z) {})([1, 2, 3]);
		 *  ```
		 *
		 * @param {Function} callback
		 * @returns {Function}
		 */
		module.exports = function spread(callback) {
			return function wrap(arr) {
				return callback.apply(null, arr);
			};
		};

	}, {}],
	52: [function(require, module, exports) {
		'use strict';

		var VERSION = require('../env/data').version;

		var validators = {};

		// eslint-disable-next-line func-names
		['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
			validators[type] = function validator(thing) {
				return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
			};
		});

		var deprecatedWarnings = {};

		/**
		 * Transitional option validator
		 * @param {function|boolean?} validator - set to false if the transitional option has been removed
		 * @param {string?} version - deprecated version / removed since version
		 * @param {string?} message - some message with additional info
		 * @returns {function}
		 */
		validators.transitional = function transitional(validator, version, message) {
			function formatMessage(opt, desc) {
				return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
			}

			// eslint-disable-next-line func-names
			return function(value, opt, opts) {
				if (validator === false) {
					throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
				}

				if (version && !deprecatedWarnings[opt]) {
					deprecatedWarnings[opt] = true;
					// eslint-disable-next-line no-console
					console.warn(
						formatMessage(
							opt,
							' has been deprecated since v' + version + ' and will be removed in the near future'
						)
					);
				}

				return validator ? validator(value, opt, opts) : true;
			};
		};

		/**
		 * Assert object's properties type
		 * @param {object} options
		 * @param {object} schema
		 * @param {boolean?} allowUnknown
		 */

		function assertOptions(options, schema, allowUnknown) {
			if (typeof options !== 'object') {
				throw new TypeError('options must be an object');
			}
			var keys = Object.keys(options);
			var i = keys.length;
			while (i-- > 0) {
				var opt = keys[i];
				var validator = schema[opt];
				if (validator) {
					var value = options[opt];
					var result = value === undefined || validator(value, opt, options);
					if (result !== true) {
						throw new TypeError('option ' + opt + ' must be ' + result);
					}
					continue;
				}
				if (allowUnknown !== true) {
					throw Error('Unknown option ' + opt);
				}
			}
		}

		module.exports = {
			assertOptions: assertOptions,
			validators: validators
		};

	}, {
		"../env/data": 41
	}],
	53: [function(require, module, exports) {
		'use strict';

		var bind = require('./helpers/bind');

		// utils is a library of generic helper functions non-specific to axios

		var toString = Object.prototype.toString;

		/**
		 * Determine if a value is an Array
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an Array, otherwise false
		 */
		function isArray(val) {
			return Array.isArray(val);
		}

		/**
		 * Determine if a value is undefined
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if the value is undefined, otherwise false
		 */
		function isUndefined(val) {
			return typeof val === 'undefined';
		}

		/**
		 * Determine if a value is a Buffer
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Buffer, otherwise false
		 */
		function isBuffer(val) {
			return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) &&
				typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
		}

		/**
		 * Determine if a value is an ArrayBuffer
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
		 */
		function isArrayBuffer(val) {
			return toString.call(val) === '[object ArrayBuffer]';
		}

		/**
		 * Determine if a value is a FormData
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an FormData, otherwise false
		 */
		function isFormData(val) {
			return toString.call(val) === '[object FormData]';
		}

		/**
		 * Determine if a value is a view on an ArrayBuffer
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
		 */
		function isArrayBufferView(val) {
			var result;
			if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
				result = ArrayBuffer.isView(val);
			} else {
				result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
			}
			return result;
		}

		/**
		 * Determine if a value is a String
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a String, otherwise false
		 */
		function isString(val) {
			return typeof val === 'string';
		}

		/**
		 * Determine if a value is a Number
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Number, otherwise false
		 */
		function isNumber(val) {
			return typeof val === 'number';
		}

		/**
		 * Determine if a value is an Object
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is an Object, otherwise false
		 */
		function isObject(val) {
			return val !== null && typeof val === 'object';
		}

		/**
		 * Determine if a value is a plain Object
		 *
		 * @param {Object} val The value to test
		 * @return {boolean} True if value is a plain Object, otherwise false
		 */
		function isPlainObject(val) {
			if (toString.call(val) !== '[object Object]') {
				return false;
			}

			var prototype = Object.getPrototypeOf(val);
			return prototype === null || prototype === Object.prototype;
		}

		/**
		 * Determine if a value is a Date
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Date, otherwise false
		 */
		function isDate(val) {
			return toString.call(val) === '[object Date]';
		}

		/**
		 * Determine if a value is a File
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a File, otherwise false
		 */
		function isFile(val) {
			return toString.call(val) === '[object File]';
		}

		/**
		 * Determine if a value is a Blob
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Blob, otherwise false
		 */
		function isBlob(val) {
			return toString.call(val) === '[object Blob]';
		}

		/**
		 * Determine if a value is a Function
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Function, otherwise false
		 */
		function isFunction(val) {
			return toString.call(val) === '[object Function]';
		}

		/**
		 * Determine if a value is a Stream
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a Stream, otherwise false
		 */
		function isStream(val) {
			return isObject(val) && isFunction(val.pipe);
		}

		/**
		 * Determine if a value is a URLSearchParams object
		 *
		 * @param {Object} val The value to test
		 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
		 */
		function isURLSearchParams(val) {
			return toString.call(val) === '[object URLSearchParams]';
		}

		/**
		 * Trim excess whitespace off the beginning and end of a string
		 *
		 * @param {String} str The String to trim
		 * @returns {String} The String freed of excess whitespace
		 */
		function trim(str) {
			return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
		}

		/**
		 * Determine if we're running in a standard browser environment
		 *
		 * This allows axios to run in a web worker, and react-native.
		 * Both environments support XMLHttpRequest, but not fully standard globals.
		 *
		 * web workers:
		 *  typeof window -> undefined
		 *  typeof document -> undefined
		 *
		 * react-native:
		 *  navigator.product -> 'ReactNative'
		 * nativescript
		 *  navigator.product -> 'NativeScript' or 'NS'
		 */
		function isStandardBrowserEnv() {
			if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
					navigator.product === 'NativeScript' ||
					navigator.product === 'NS')) {
				return false;
			}
			return (
				typeof window !== 'undefined' &&
				typeof document !== 'undefined'
			);
		}

		/**
		 * Iterate over an Array or an Object invoking a function for each item.
		 *
		 * If `obj` is an Array callback will be called passing
		 * the value, index, and complete array for each item.
		 *
		 * If 'obj' is an Object callback will be called passing
		 * the value, key, and complete object for each property.
		 *
		 * @param {Object|Array} obj The object to iterate
		 * @param {Function} fn The callback to invoke for each item
		 */
		function forEach(obj, fn) {
			// Don't bother if no value provided
			if (obj === null || typeof obj === 'undefined') {
				return;
			}

			// Force an array if not already something iterable
			if (typeof obj !== 'object') {
				/*eslint no-param-reassign:0*/
				obj = [obj];
			}

			if (isArray(obj)) {
				// Iterate over array values
				for (var i = 0, l = obj.length; i < l; i++) {
					fn.call(null, obj[i], i, obj);
				}
			} else {
				// Iterate over object keys
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) {
						fn.call(null, obj[key], key, obj);
					}
				}
			}
		}

		/**
		 * Accepts varargs expecting each argument to be an object, then
		 * immutably merges the properties of each object and returns result.
		 *
		 * When multiple objects contain the same key the later object in
		 * the arguments list will take precedence.
		 *
		 * Example:
		 *
		 * ```js
		 * var result = merge({foo: 123}, {foo: 456});
		 * console.log(result.foo); // outputs 456
		 * ```
		 *
		 * @param {Object} obj1 Object to merge
		 * @returns {Object} Result of all merge properties
		 */
		function merge( /* obj1, obj2, obj3, ... */ ) {
			var result = {};

			function assignValue(val, key) {
				if (isPlainObject(result[key]) && isPlainObject(val)) {
					result[key] = merge(result[key], val);
				} else if (isPlainObject(val)) {
					result[key] = merge({}, val);
				} else if (isArray(val)) {
					result[key] = val.slice();
				} else {
					result[key] = val;
				}
			}

			for (var i = 0, l = arguments.length; i < l; i++) {
				forEach(arguments[i], assignValue);
			}
			return result;
		}

		/**
		 * Extends object a by mutably adding to it the properties of object b.
		 *
		 * @param {Object} a The object to be extended
		 * @param {Object} b The object to copy properties from
		 * @param {Object} thisArg The object to bind function to
		 * @return {Object} The resulting value of object a
		 */
		function extend(a, b, thisArg) {
			forEach(b, function assignValue(val, key) {
				if (thisArg && typeof val === 'function') {
					a[key] = bind(val, thisArg);
				} else {
					a[key] = val;
				}
			});
			return a;
		}

		/**
		 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
		 *
		 * @param {string} content with BOM
		 * @return {string} content value without BOM
		 */
		function stripBOM(content) {
			if (content.charCodeAt(0) === 0xFEFF) {
				content = content.slice(1);
			}
			return content;
		}

		module.exports = {
			isArray: isArray,
			isArrayBuffer: isArrayBuffer,
			isBuffer: isBuffer,
			isFormData: isFormData,
			isArrayBufferView: isArrayBufferView,
			isString: isString,
			isNumber: isNumber,
			isObject: isObject,
			isPlainObject: isPlainObject,
			isUndefined: isUndefined,
			isDate: isDate,
			isFile: isFile,
			isBlob: isBlob,
			isFunction: isFunction,
			isStream: isStream,
			isURLSearchParams: isURLSearchParams,
			isStandardBrowserEnv: isStandardBrowserEnv,
			forEach: forEach,
			merge: merge,
			extend: extend,
			trim: trim,
			stripBOM: stripBOM
		};

	}, {
		"./helpers/bind": 42
	}],
	54: [function(require, module, exports) {
		// shim for using process in browser
		var process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		var cachedSetTimeout;
		var cachedClearTimeout;

		function defaultSetTimout() {
			throw new Error('setTimeout has not been defined');
		}

		function defaultClearTimeout() {
			throw new Error('clearTimeout has not been defined');
		}
		(function() {
			try {
				if (typeof setTimeout === 'function') {
					cachedSetTimeout = setTimeout;
				} else {
					cachedSetTimeout = defaultSetTimout;
				}
			} catch (e) {
				cachedSetTimeout = defaultSetTimout;
			}
			try {
				if (typeof clearTimeout === 'function') {
					cachedClearTimeout = clearTimeout;
				} else {
					cachedClearTimeout = defaultClearTimeout;
				}
			} catch (e) {
				cachedClearTimeout = defaultClearTimeout;
			}
		}())

		function runTimeout(fun) {
			if (cachedSetTimeout === setTimeout) {
				//normal enviroments in sane situations
				return setTimeout(fun, 0);
			}
			// if setTimeout wasn't available but was latter defined
			if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
				cachedSetTimeout = setTimeout;
				return setTimeout(fun, 0);
			}
			try {
				// when when somebody has screwed with setTimeout but no I.E. maddness
				return cachedSetTimeout(fun, 0);
			} catch (e) {
				try {
					// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
					return cachedSetTimeout.call(null, fun, 0);
				} catch (e) {
					// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
					return cachedSetTimeout.call(this, fun, 0);
				}
			}


		}

		function runClearTimeout(marker) {
			if (cachedClearTimeout === clearTimeout) {
				//normal enviroments in sane situations
				return clearTimeout(marker);
			}
			// if clearTimeout wasn't available but was latter defined
			if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
				cachedClearTimeout = clearTimeout;
				return clearTimeout(marker);
			}
			try {
				// when when somebody has screwed with setTimeout but no I.E. maddness
				return cachedClearTimeout(marker);
			} catch (e) {
				try {
					// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
					return cachedClearTimeout.call(null, marker);
				} catch (e) {
					// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
					// Some versions of I.E. have different rules for clearTimeout vs setTimeout
					return cachedClearTimeout.call(this, marker);
				}
			}



		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
			if (!draining || !currentQueue) {
				return;
			}
			draining = false;
			if (currentQueue.length) {
				queue = currentQueue.concat(queue);
			} else {
				queueIndex = -1;
			}
			if (queue.length) {
				drainQueue();
			}
		}

		function drainQueue() {
			if (draining) {
				return;
			}
			var timeout = runTimeout(cleanUpNextTick);
			draining = true;

			var len = queue.length;
			while (len) {
				currentQueue = queue;
				queue = [];
				while (++queueIndex < len) {
					if (currentQueue) {
						currentQueue[queueIndex].run();
					}
				}
				queueIndex = -1;
				len = queue.length;
			}
			currentQueue = null;
			draining = false;
			runClearTimeout(timeout);
		}

		process.nextTick = function(fun) {
			var args = new Array(arguments.length - 1);
			if (arguments.length > 1) {
				for (var i = 1; i < arguments.length; i++) {
					args[i - 1] = arguments[i];
				}
			}
			queue.push(new Item(fun, args));
			if (queue.length === 1 && !draining) {
				runTimeout(drainQueue);
			}
		};

		// v8 likes predictible objects
		function Item(fun, array) {
			this.fun = fun;
			this.array = array;
		}
		Item.prototype.run = function() {
			this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
		process.prependListener = noop;
		process.prependOnceListener = noop;

		process.listeners = function(name) {
			return []
		}

		process.binding = function(name) {
			throw new Error('process.binding is not supported');
		};

		process.cwd = function() {
			return '/'
		};
		process.chdir = function(dir) {
			throw new Error('process.chdir is not supported');
		};
		process.umask = function() {
			return 0;
		};

	}, {}],
	55: [function(require, module, exports) {
		"use strict";

		var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.productVariantFragment = exports.fetchVariantQuery = exports.fetchCheckoutQuery = exports.fetchCartQuery = exports["default"] = void 0;

		var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

		var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

		var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

		var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

		var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

		var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

		var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

		var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

		var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

		var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

		var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

		var _axios = _interopRequireDefault(require("axios"));

		function _createSuper(Derived) {
			var hasNativeReflectConstruct = _isNativeReflectConstruct();
			return function _createSuperInternal() {
				var Super = (0, _getPrototypeOf2["default"])(Derived),
					result;
				if (hasNativeReflectConstruct) {
					var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
					result = Reflect.construct(Super, arguments, NewTarget);
				} else {
					result = Super.apply(this, arguments);
				}
				return (0, _possibleConstructorReturn2["default"])(this, result);
			};
		}

		function _isNativeReflectConstruct() {
			if (typeof Reflect === "undefined" || !Reflect.construct) return false;
			if (Reflect.construct.sham) return false;
			if (typeof Proxy === "function") return true;
			try {
				Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
				return true;
			} catch (e) {
				return false;
			}
		}

		function ownKeys(object, enumerableOnly) {
			var keys = Object.keys(object);
			if (Object.getOwnPropertySymbols) {
				var symbols = Object.getOwnPropertySymbols(object);
				enumerableOnly && (symbols = symbols.filter(function(sym) {
					return Object.getOwnPropertyDescriptor(object, sym).enumerable;
				})), keys.push.apply(keys, symbols);
			}
			return keys;
		}

		function _objectSpread(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = null != arguments[i] ? arguments[i] : {};
				i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
					(0, _defineProperty2["default"])(target, key, source[key]);
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
					Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
				});
			}
			return target;
		}

		// Main class, which accepts configuration in it's constructor and exposes
		// helper methods
		var ShopifyGtmInstrumentor = /*#__PURE__*/ function() {
			// Save settings and hydrate vars
			function ShopifyGtmInstrumentor(param) {
				(0, _classCallCheck2["default"])(this, ShopifyGtmInstrumentor);

				if (param == null) {
					param = {};
				}

				var _param = param,
					_param$disableEcommer = _param.disableEcommerceProperty,
					disableEcommerceProperty = _param$disableEcommer === void 0 ? false : _param$disableEcommer,
					_param$enableCheckout = _param.enableCheckoutEcommerceProperty,
					enableCheckoutEcommerceProperty = _param$enableCheckout === void 0 ? true : _param$enableCheckout;
				this.debug = false;
				this.storeUrl = window.ct_gtm_settings.shop_url;
				this.SHOPIFY_URL = window.ct_gtm_settings.shop_url;
				this.storefrontToken = window.ct_gtm_settings.storefront_token;
				this.SHOPIFY_STOREFRONT_TOKEN = window.ct_gtm_settings.storefront_token;
				this.currencyCode = window.ct_gtm_settings.currency;
				this.disableEcommerceProperty = disableEcommerceProperty;
				this.enableCheckoutEcommerceProperty = enableCheckoutEcommerceProperty;
				this.occurances = [];
			} // API #######################################################################
			// A view of a product element


			(0, _createClass2["default"])(ShopifyGtmInstrumentor, [{
				key: "productImpression",
				value: function() {
					var _productImpression = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee(variantPayload) {
						var _this = this;

						var _ref,
							el,
							list,
							position,
							flatVariant,
							i,
							_i,
							eventPusher,
							_args = arguments;

						return _regenerator["default"].wrap(function _callee$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										_ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, el = _ref.el, list = _ref.list, position = _ref.position;
										flatVariant = [];

										if (!(typeof window === 'undefined' || window === null)) {
											_context.next = 4;
											break;
										}

										return _context.abrupt("return");

									case 4:
										if (!((0, _typeof2["default"])(variantPayload) === 'object' && typeof variantPayload.name === 'undefined')) {
											_context.next = 14;
											break;
										}

										i = 0;

									case 6:
										if (!(i < variantPayload.length)) {
											_context.next = 14;
											break;
										}

										_context.next = 9;
										return this.getFlatVariant(variantPayload[i]);

									case 9:
										if (flatVariant[flatVariant.length] = _context.sent) {
											_context.next = 11;
											break;
										}

										return _context.abrupt("return");

									case 11:
										i++;
										_context.next = 6;
										break;

									case 14:
										// Make defaults
										if (el && position == null) {
											position = getElPosition(el);
										}

										for (_i = 0; _i < flatVariant.length; _i++) {
											flatVariant[_i] = this.makeUaProductFieldObject(flatVariant[_i]);
										} // Fire event


										eventPusher = function eventPusher() {
											return _this.pushEvent('Product Impression', {
												listName: list,
												listPosition: position,
												ecommerce: {
													impressions: {
														items: flatVariant,
														list: list,
														position: position
													}
												}
											});
										};

										if (!el) {
											_context.next = 21;
											break;
										}

										return _context.abrupt("return", whenFirstInViewport(el, eventPusher));

									case 21:
										return _context.abrupt("return", eventPusher());

									case 22:
									case "end":
										return _context.stop();
								}
							}
						}, _callee, this);
					}));

					function productImpression(_x) {
						return _productImpression.apply(this, arguments);
					}

					return productImpression;
				}() // A click on a product

			}, {
				key: "productClick",
				value: function() {
					var _productClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee2(variantPayload) {
						var _ref2,
							el,
							list,
							position,
							clickEvent,
							clickUrl,
							flatVariant,
							_args2 = arguments;

						return _regenerator["default"].wrap(function _callee2$(_context2) {
							while (1) {
								switch (_context2.prev = _context2.next) {
									case 0:
										_ref2 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, el = _ref2.el, list = _ref2.list, position = _ref2.position, clickEvent = _ref2.clickEvent;

										if (!(typeof window === 'undefined' || window === null)) {
											_context2.next = 3;
											break;
										}

										return _context2.abrupt("return");

									case 3:
										// Prevent navigation
										if (clickUrl = __guard__(clickEvent != null ? clickEvent.currentTarget : undefined, function(x) {
												return x.href;
											})) {
											if (clickEvent != null) {
												clickEvent.preventDefault();
											}
										} // Get variant


										_context2.next = 6;
										return this.getFlatVariant(variantPayload);

									case 6:
										if (flatVariant = _context2.sent) {
											_context2.next = 8;
											break;
										}

										return _context2.abrupt("return");

									case 8:
										// Make defaults
										if (el && position == null) {
											position = getElPosition(el);
										} // Fire event


										this.pushEvent('Product Click', _objectSpread(_objectSpread({}, flatVariant), {}, {
											listName: list,
											listPosition: position,
											ecommerce: {
												click: _objectSpread(_objectSpread({}, !list ? {} : {
													actionField: {
														list: list
													}
												}), {}, {
													products: [_objectSpread(_objectSpread({}, this.makeUaProductFieldObject(flatVariant)), {}, {
														position: position
													})]
												})
											}
										})); // Finish navigation

										if (!clickUrl) {
											_context2.next = 12;
											break;
										}

										return _context2.abrupt("return", window.location = clickUrl);

									case 12:
									case "end":
										return _context2.stop();
								}
							}
						}, _callee2, this);
					}));

					function productClick(_x2) {
						return _productClick.apply(this, arguments);
					}

					return productClick;
				}() // Typically used for view of PDP page

			}, {
				key: "viewProductDetails",
				value: function() {
					var _viewProductDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee3(variantPayload) {
						var flatVariant;
						return _regenerator["default"].wrap(function _callee3$(_context3) {
							while (1) {
								switch (_context3.prev = _context3.next) {
									case 0:
										if (!(typeof window === 'undefined' || window === null)) {
											_context3.next = 2;
											break;
										}

										return _context3.abrupt("return");

									case 2:
										_context3.next = 4;
										return this.getFlatVariant(variantPayload);

									case 4:
										if (flatVariant = _context3.sent) {
											_context3.next = 6;
											break;
										}

										return _context3.abrupt("return");

									case 6:
										return _context3.abrupt("return", this.pushEvent('View Product Details', _objectSpread(_objectSpread({}, flatVariant), {}, {
											ecommerce: {
												detail: {
													products: [this.makeUaProductFieldObject(flatVariant)]
												}
											}
										})));

									case 7:
									case "end":
										return _context3.stop();
								}
							}
						}, _callee3, this);
					}));

					function viewProductDetails(_x3) {
						return _viewProductDetails.apply(this, arguments);
					}

					return viewProductDetails;
				}() // Used whenver there is a positive change in the quantity of a product in
				// the cart.

			}, {
				key: "addToCart",
				value: function addToCart(variantPayload, quantity) {
					return this.updateQuantity(variantPayload, quantity, 'Add to Cart', 'add');
				} // Used whenever there is a negative change in the quantity of a product in
				// the cart.

			}, {
				key: "removeFromCart",
				value: function removeFromCart(variantPayload, quantity) {
					return this.updateQuantity(variantPayload, quantity, 'Remove from Cart', 'remove');
				} // Used both fire the `Update Quantity` event but also as a helper for the
				// add and remove methods.

			}, {
				key: "updateQuantity",
				value: function() {
					var _updateQuantity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee4(variantPayload, quantity) {
						var gtmEvent,
							ecommerceAction,
							flatVariant,
							_args4 = arguments;
						return _regenerator["default"].wrap(function _callee4$(_context4) {
							while (1) {
								switch (_context4.prev = _context4.next) {
									case 0:
										gtmEvent = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 'Update Quantity';
										ecommerceAction = _args4.length > 3 ? _args4[3] : undefined;

										if (!(typeof window === 'undefined' || window === null)) {
											_context4.next = 4;
											break;
										}

										return _context4.abrupt("return");

									case 4:
										_context4.next = 6;
										return this.getFlatVariant(variantPayload);

									case 6:
										if (flatVariant = _context4.sent) {
											_context4.next = 8;
											break;
										}

										return _context4.abrupt("return");

									case 8:
										return _context4.abrupt("return", this.pushEvent(gtmEvent, _objectSpread(_objectSpread({}, flatVariant), {}, {
											quantity: quantity
										}, !ecommerceAction ? {} : {
											ecommerce: (0, _defineProperty2["default"])({
												currencyCode: this.currencyCode
											}, ecommerceAction, {
												products: [{
													items: this.makeUaProductFieldObject(flatVariant),
													quantity: quantity
												}]
											})
										})));

									case 9:
									case "end":
										return _context4.stop();
								}
							}
						}, _callee4, this);
					}));

					function updateQuantity(_x4, _x5) {
						return _updateQuantity.apply(this, arguments);
					}

					return updateQuantity;
				}() // Fire an event with the current state of the cart

			}, {
				key: "cartUpdated",
				value: function() {
					var _cartUpdated = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee5(checkoutOrCartPayload) {
						var simplifiedCheckout;
						return _regenerator["default"].wrap(function _callee5$(_context5) {
							while (1) {
								switch (_context5.prev = _context5.next) {
									case 0:
										if (!(typeof window === 'undefined' || window === null)) {
											_context5.next = 2;
											break;
										}

										return _context5.abrupt("return");

									case 2:
										_context5.next = 4;
										return this.getSimplifiedCheckout(checkoutOrCartPayload);

									case 4:
										if (!(simplifiedCheckout = _context5.sent)) {
											_context5.next = 6;
											break;
										}

										return _context5.abrupt("return", this.pushEvent('Cart Updated', simplifiedCheckout));

									case 6:
									case "end":
										return _context5.stop();
								}
							}
						}, _callee5, this);
					}));

					function cartUpdated(_x6) {
						return _cartUpdated.apply(this, arguments);
					}

					return cartUpdated;
				}() // Fire an event with the current step of the checkout process

			}, {
				key: "checkout",
				value: function() {
					var _checkout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee6(checkoutOrCartPayload, checkoutStep) {
						var simplifiedCheckout;
						return _regenerator["default"].wrap(function _callee6$(_context6) {
							while (1) {
								switch (_context6.prev = _context6.next) {
									case 0:
										if (!(typeof window === 'undefined' || window === null)) {
											_context6.next = 2;
											break;
										}

										return _context6.abrupt("return");

									case 2:
										_context6.next = 4;
										return this.getSimplifiedCheckout(checkoutOrCartPayload);

									case 4:
										if (!(simplifiedCheckout = _context6.sent)) {
											_context6.next = 6;
											break;
										}

										return _context6.abrupt("return", this.pushEvent('Checkout', _objectSpread(_objectSpread({
											checkoutStep: checkoutStep
										}, simplifiedCheckout), !this.enableCheckoutEcommerceProperty ? {} : {
											ecommerce: {
												currencyCode: this.currencyCode,
												checkout: {
													actionField: {
														step: checkoutStep
													},
													products: this.makeUaCheckoutProducts(simplifiedCheckout)
												}
											}
										})));

									case 6:
									case "end":
										return _context6.stop();
								}
							}
						}, _callee6, this);
					}));

					function checkout(_x7, _x8) {
						return _checkout.apply(this, arguments);
					}

					return checkout;
				}() // Notify of final checkout, using array of variant data from liquid

			}, {
				key: "purchase",
				value: function() {
					var _purchase = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee7(checkoutOrCartPayload) {
						var simplifiedCheckout;
						return _regenerator["default"].wrap(function _callee7$(_context7) {
							while (1) {
								switch (_context7.prev = _context7.next) {
									case 0:
										if (!(typeof window === 'undefined' || window === null)) {
											_context7.next = 2;
											break;
										}

										return _context7.abrupt("return");

									case 2:
										_context7.next = 4;
										return this.getSimplifiedCheckout(checkoutOrCartPayload);

									case 4:
										if (!(simplifiedCheckout = _context7.sent)) {
											_context7.next = 6;
											break;
										}

										return _context7.abrupt("return", this.pushEvent('Purchase', _objectSpread(_objectSpread({}, simplifiedCheckout), !this.enableCheckoutEcommerceProperty ? {} : {
											ecommerce: {
												currencyCode: this.currencyCode,
												purchase: {
													actionField: {
														id: '#' + simplifiedCheckout.orderNumber,
														// Matches Shopify
														revenue: simplifiedCheckout.totalPrice,
														tax: simplifiedCheckout.totalTax,
														shipping: simplifiedCheckout.totalShipping,
														coupon: simplifiedCheckout.discountCodes.join(',')
													},
													products: this.makeUaCheckoutProducts(simplifiedCheckout)
												}
											}
										})));

									case 6:
									case "end":
										return _context7.stop();
								}
							}
						}, _callee7, this);
					}));

					function purchase(_x9) {
						return _purchase.apply(this, arguments);
					}

					return purchase;
				}() // Customer information

			}, {
				key: "identifyCustomer",
				value: function identifyCustomer(customer) {
					if (typeof window === 'undefined' || window === null) {
						return;
					}

					return this.pushEvent('Identify Customer', {
						customerId: customer.id,
						customerZip: customer.zip,
						customerEmail: customer.email
					});
				} // VARIANT DATA ##############################################################
				// Take a variantPayload, which may be an id or an object, and return an
				// object that can be easily consumed by GTM.

			}, {
				key: "getFlatVariant",
				value: function() {
					var _getFlatVariant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee8(variantPayload) {
						var products, variant, i, _i2, _variantPayload;

						return _regenerator["default"].wrap(function _callee8$(_context8) {
							while (1) {
								switch (_context8.prev = _context8.next) {
									case 0:
										if (!((0, _typeof2["default"])(variantPayload) === 'object' || typeof variantPayload === 'array')) {
											_context8.next = 24;
											break;
										}

										for (i = 0; i < variantPayload.length; i++) {
											products.push(variantPayload[i]);
										}

										_i2 = 0;

									case 3:
										if (!(_i2 < products.length)) {
											_context8.next = 21;
											break;
										}

										_variantPayload = products[_i2]; // Conditioally fetch from storefront API

										if (!((0, _typeof2["default"])(_variantPayload) === 'object')) {
											_context8.next = 9;
											break;
										}

										_context8.t0 = _variantPayload;
										_context8.next = 12;
										break;

									case 9:
										_context8.next = 11;
										return this.fetchVariant(_variantPayload);

									case 11:
										_context8.t0 = _context8.sent;

									case 12:
										variant = _context8.t0;

										if (!variant) {
											_context8.next = 17;
											break;
										}

										products[_i2] = this.makeFlatVariant(variant);
										_context8.next = 18;
										break;

									case 17:
										return _context8.abrupt("return", console.error('Variant not found', _variantPayload));

									case 18:
										_i2++;
										_context8.next = 3;
										break;

									case 21:
										return _context8.abrupt("return", products);

									case 24:
										if (!((0, _typeof2["default"])(variantPayload) === 'object')) {
											_context8.next = 28;
											break;
										}

										_context8.t1 = variantPayload;
										_context8.next = 31;
										break;

									case 28:
										_context8.next = 30;
										return this.fetchVariant(variantPayload);

									case 30:
										_context8.t1 = _context8.sent;

									case 31:
										variant = _context8.t1;

										if (!variant) {
											_context8.next = 36;
											break;
										}

										return _context8.abrupt("return", this.makeFlatVariant(variant));

									case 36:
										return _context8.abrupt("return", console.error('Variant not found', variantPayload));

									case 37:
									case "end":
										return _context8.stop();
								}
							}
						}, _callee8, this);
					}));

					function getFlatVariant(_x10) {
						return _getFlatVariant.apply(this, arguments);
					}

					return getFlatVariant;
				}() // Lookup a product variant by id. Id may be a simple number or a
				// gid://shopify string

			}, {
				key: "fetchVariant",
				value: function() {
					var _fetchVariant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee9(variantId) {
						var result;
						return _regenerator["default"].wrap(function _callee9$(_context9) {
							while (1) {
								switch (_context9.prev = _context9.next) {
									case 0:
										if (variantId) {
											_context9.next = 2;
											break;
										}

										return _context9.abrupt("return");

									case 2:
										variantId = getShopifyId(variantId);
										_context9.next = 5;
										return this.queryStorefrontApi({
											variables: {
												id: btoa('gid://shopify/ProductVariant/' + variantId)
											},
											query: fetchVariantQuery
										});

									case 5:
										result = _context9.sent;
										return _context9.abrupt("return", result.node);

									case 7:
									case "end":
										return _context9.stop();
								}
							}
						}, _callee9, this);
					}));

					function fetchVariant(_x11) {
						return _fetchVariant.apply(this, arguments);
					}

					return fetchVariant;
				}() // Make flat object from a variant with nested product data

			}, {
				key: "makeFlatVariant",
				value: function makeFlatVariant(variant) {
					var productUrl, variantId;
					var product = variant.product; // Product level info

					return {
						productId: getShopifyId(product.id),
						productTitle: product.title,
						productVariantTitle: "".concat(product.title, " - ").concat(variant.title),
						productType: product.productType || product.type || product.collections.edges[0].node.title,
						productVendor: product.vendor,
						productUrl: productUrl = "".concat(this.storeUrl, "/products/").concat(product.handle),
						// Variant level data
						sku: variant.sku,
						price: variant.price,
						compareAtPrice: variant.compareAtPrice,
						variantId: variantId = getShopifyId(variant.id),
						variantTitle: variant.title,
						variantImage: (variant.image != null ? variant.image.originalSrc : undefined) || variant.image,
						variantUrl: "".concat(productUrl, "?variant=").concat(variantId)
					};
				} // Convert a Shopify variant object to a UA productFieldObject. I'm
				// combining the product and variant name because that's what Shopify does
				// with it's own events.
				// https://developers.google.com/analytics/devguides/collection/analyticsjs/enhanced-ecommerce#product-data

			}, {
				key: "makeUaProductFieldObject",
				value: function makeUaProductFieldObject(flatVariant) {
					return {
						id: flatVariant.sku,
						name: flatVariant.productVariantTitle,
						brand: flatVariant.productVendor,
						category: flatVariant.productType,
						variant: flatVariant.variantTitle,
						price: flatVariant.price
					};
				} // CHECKOUT DATA #############################################################
				// Take a checkoutPayload, which may be an id or an object, and return the
				// Shopify checkout object that has been simplified a bit.

			}, {
				key: "getSimplifiedCheckout",
				value: function() {
					var _getSimplifiedCheckout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee10(checkoutOrCartPayload) {
						var checkout;
						return _regenerator["default"].wrap(function _callee10$(_context10) {
							while (1) {
								switch (_context10.prev = _context10.next) {
									case 0:
										if (!((0, _typeof2["default"])(checkoutOrCartPayload) === 'object')) {
											_context10.next = 4;
											break;
										}

										_context10.t0 = checkoutOrCartPayload;
										_context10.next = 7;
										break;

									case 4:
										_context10.next = 6;
										return this.fetchCheckout(checkoutOrCartPayload);

									case 6:
										_context10.t0 = _context10.sent;

									case 7:
										checkout = _context10.t0;

										if (checkout) {
											_context10.next = 10;
											break;
										}

										return _context10.abrupt("return", console.error('Checkout or Cart not found', checkoutOrCartPayload));

									case 10:
										return _context10.abrupt("return", this.makeSimplifiedCheckout(checkout));

									case 11:
									case "end":
										return _context10.stop();
								}
							}
						}, _callee10, this);
					}));

					function getSimplifiedCheckout(_x12) {
						return _getSimplifiedCheckout.apply(this, arguments);
					}

					return getSimplifiedCheckout;
				}() // Lookup a checkout or cart by id. Id should be a gid://shopify string

			}, {
				key: "fetchCheckout",
				value: function() {
					var _fetchCheckout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee11(checkoutOrCartId) {
						var _atob$match, _atob$match2, all, type, _yield$this$queryStor, node;

						return _regenerator["default"].wrap(function _callee11$(_context11) {
							while (1) {
								switch (_context11.prev = _context11.next) {
									case 0:
										// Determine if cart of checkout request
										_atob$match = atob(checkoutOrCartId).match(/gid:\/\/shopify\/(\w+)/), _atob$match2 = (0, _slicedToArray2["default"])(_atob$match, 2), all = _atob$match2[0], type = _atob$match2[1]; // Get the data

										_context11.next = 3;
										return this.queryStorefrontApi({
											query: function() {
												switch (type) {
													case 'Cart':
														return fetchCartQuery;

													case 'Checkout':
														return fetchCheckoutQuery;

													default:
														throw "Unknown type: ".concat(type);
												}
											}(),
											variables: {
												id: checkoutOrCartId
											}
										});

									case 3:
										_yield$this$queryStor = _context11.sent;
										node = _yield$this$queryStor.node;

										// Final massage of Carts into Checkout
										if (node.estimatedCost) {
											node.subtotalPrice = node.estimatedCost.subtotalAmount.amount;
											node.totalPrice = node.estimatedCost.totalAmount.amount;
										} // Return "checkout" (which could be a Cart object)


										return _context11.abrupt("return", node);

									case 7:
									case "end":
										return _context11.stop();
								}
							}
						}, _callee11, this);
					}));

					function fetchCheckout(_x13) {
						return _fetchCheckout.apply(this, arguments);
					}

					return fetchCheckout;
				}() // Standardize checkout properties to something more easily used in dataLayer

			}, {
				key: "makeSimplifiedCheckout",
				value: function makeSimplifiedCheckout(checkout) {
					var _this2 = this;

					// Flatten nodes that contain line items
					if (checkout.lineItems.edges) {
						checkout.lineItems = checkout.lineItems.edges.map(function(_ref3) {
							var node = _ref3.node;
							return node;
						});
					} // Return the simplified object


					return {
						checkoutId: getShopifyId(checkout.id),
						checkoutUrl: checkout.webUrl,
						subtotalPrice: checkout.subtotalPrice,
						totalPrice: checkout.totalPrice,
						lineItems: checkout.lineItems.map(function(lineItem) {
							return _objectSpread({
								lineItemId: getShopifyId(lineItem.id),
								quantity: lineItem.quantity
							}, _this2.makeFlatVariant(lineItem.variant));
						}),
						// Properties that aren't present until purchase
						orderNumber: checkout.orderNumber,
						totalTax: checkout.totalTax,
						totalShipping: checkout.totalShipping,
						discountCodes: checkout.discountCodes || []
					};
				} // Get a simplifiedCheckout object and make the `products` array from the
				// lineItems.  Which is

			}, {
				key: "makeUaCheckoutProducts",
				value: function makeUaCheckoutProducts(simplifiedCheckout) {
					var _this3 = this;

					return simplifiedCheckout.lineItems.map(function(lineItem) {
						return _objectSpread({
							quantity: lineItem.quantity
						}, _this3.makeUaProductFieldObject(lineItem));
					});
				} // STOREFRONT API ############################################################
				// Query Storefront API

			}, {
				key: "queryStorefrontApi",
				value: function() {
					var _queryStorefrontApi = (0, _asyncToGenerator2["default"])( /*#__PURE__*/ _regenerator["default"].mark(function _callee12(payload) {
						var response;
						return _regenerator["default"].wrap(function _callee12$(_context12) {
							while (1) {
								switch (_context12.prev = _context12.next) {
									case 0:
										_context12.next = 2;
										return (0, _axios["default"])({
											url: "".concat(this.storeUrl, "/api/2021-10/graphql"),
											method: 'post',
											headers: {
												Accept: 'application/json',
												'Content-Type': 'application/json',
												'X-Shopify-Storefront-Access-Token': this.storefrontToken
											},
											data: payload
										});

									case 2:
										response = _context12.sent;

										if (!response.data.errors) {
											_context12.next = 5;
											break;
										}

										throw new StorefrontError(response.data.errors, payload);

									case 5:
										return _context12.abrupt("return", response.data.data);

									case 6:
									case "end":
										return _context12.stop();
								}
							}
						}, _callee12, this);
					}));

					function queryStorefrontApi(_x14) {
						return _queryStorefrontApi.apply(this, arguments);
					}

					return queryStorefrontApi;
				}() // DATALAYER WRITING #########################################################
				// Push GTM dataLayer event

			}, {
				key: "pushEvent",
				value: function pushEvent(name, payload) {
					if (this.debug) {
						console.debug("'".concat(name, "'"), payload);
					}

					if (!window.dataLayer) {
						window.dataLayer = [];
					} // Remove the ecommerce property, like if they are going to be created in
					// GTM manually.


					if (this.disableEcommerceProperty && payload.ecommerce) {
						payload = _objectSpread({}, payload);
						delete payload.ecommerce; // Clear previous ecommerce values
					} else {
						window.dataLayer.push({
							ecommerce: null
						});
					} // Add new event


					return window.dataLayer.push(_objectSpread({
						event: name,
						firstOccurance: this.isFirstOccurance(name)
					}, payload));
				} // Return whether this is the first time the event has fired. This can be
				// helpeful in conjunction to prevent double triggering from events that are
				// also fired in the intial page response from Shopify, like Page Views.

			}, {
				key: "isFirstOccurance",
				value: function isFirstOccurance(eventName) {
					if (Array.from(this.occurances).includes(eventName)) {
						return false;
					}

					this.occurances.push(eventName);
					return true;
				}
			}]);
			return ShopifyGtmInstrumentor;
		}(); // STOREFRONT QUERIES ##########################################################
		// Product Variant fragment


		exports["default"] = ShopifyGtmInstrumentor;
		var productVariantFragment = "fragment variant on ProductVariant {\n\tid\n\tsku\n\ttitle\n\tprice\n\tcompareAtPrice\n\timage { originalSrc }\n\tproduct {\n\t\tid\n\t\ttitle\n\t\thandle\n\t\tproductType\n\t\tvendor\n\t\tcollections(first: 1) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\ttitle\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}"; // Graphql query to fetch a variant by id

		exports.productVariantFragment = productVariantFragment;
		var fetchVariantQuery = "query($id: ID!) {\n\tnode(id: $id) {\n\t\t...variant\n\t}\n}\n".concat(productVariantFragment); // Graphql query to fetch a cart by id

		exports.fetchVariantQuery = fetchVariantQuery;
		var fetchCartQuery = "query($id: ID!) {\n\tnode: cart(id: $id) {\n\t\t... on Cart {\n\t\t\tid\n\t\t\twebUrl: checkoutUrl\n\t\t\testimatedCost {\n\t\t\t\tsubtotalAmount { amount }\n\t\t\t\ttotalAmount { amount }\n\t\t\t}\n\t\t\tlineItems: lines (first: 250) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t... on CartLine {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tquantity\n\t\t\t\t\t\t\tvariant: merchandise { ...variant }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n".concat(productVariantFragment); // Graphql query to fetch a checkout by id

		exports.fetchCartQuery = fetchCartQuery;
		var fetchCheckoutQuery = "query($id: ID!) {\n\tnode(id: $id) {\n\t\t... on Checkout {\n\t\t\tid\n\t\t\twebUrl\n\t\t\tsubtotalPrice\n\t\t\ttotalPrice\n\t\t\tlineItems (first: 250) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\t\t... on CheckoutLineItem {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tquantity\n\t\t\t\t\t\t\tvariant { ...variant }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n".concat(productVariantFragment); // NON-INSTANCE HELPERS ########################################################
		// Error object with custom handling

		exports.fetchCheckoutQuery = fetchCheckoutQuery;

		var StorefrontError = /*#__PURE__*/ function(_Error) {
			(0, _inherits2["default"])(StorefrontError, _Error);

			var _super = _createSuper(StorefrontError);

			function StorefrontError(errors, payload) {
				var _this4;

				(0, _classCallCheck2["default"])(this, StorefrontError);
				_this4 = _super.call(this, errors.map(function(e) {
					return e.debugMessage || e.message;
				}).join(', '));
				_this4.errors = errors.map(function(e) {
					return JSON.stringify(e);
				});
				_this4.payload = payload;
				return _this4;
			}

			(0, _createClass2["default"])(StorefrontError, null, [{
				key: "initClass",
				value: function initClass() {
					this.prototype.name = 'StorefrontError';
				}
			}]);
			return StorefrontError;
		}( /*#__PURE__*/ (0, _wrapNativeSuper2["default"])(Error));

		StorefrontError.initClass(); // Get the id from a Shopify gid:// style id.  This strips everything but the
		// last part of the string.  So gid://shopify/ProductVariant/34641879105581
		// becomes 34641879105581
		// https://regex101.com/r/3FIplL/1

		var getShopifyId = function getShopifyId(id) {
			if (String(id).match(/^\d+$/)) {
				return id;
			} // Already simple id


			if (!id.match(/^gid:\/\//)) {
				id = atob(id);
			} // De-base64


			return __guard__(id.match(/\/([^\/]+)$/), function(x) {
				return x[1];
			}); // Get the id from the gid
		}; // Get the position of an element with respect to it's parent
		// https://stackoverflow.com/a/5913984/59160


		var getElPosition = function getElPosition(el) {
			var i = 1; // The first position will be `1`

			while ((el = el.previousElementSibling) !== null) {
				i++;
			}

			return i;
		}; // Fire callback when in viewport. Not exposing a way to manually disconnect or
		// unobserve because it _should_ be garbage collected when el is removed.
		// https://stackoverflow.com/a/51106262/59160


		var whenFirstInViewport = function whenFirstInViewport(el, callback) {
			var observer = new IntersectionObserver(function(_ref4) {
				var _ref5 = (0, _slicedToArray2["default"])(_ref4, 1),
					isIntersecting = _ref5[0].isIntersecting;

				if (!isIntersecting) {
					return;
				}

				observer.disconnect();
				return callback();
			});
			return observer.observe(el);
		};

		function __guard__(value, transform) {
			return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
		}

		window.gtmEcomm = new ShopifyGtmInstrumentor({
			currencyCode: window.ct_gtm_settings.currency
		});

	}, {
		"@babel/runtime/helpers/asyncToGenerator": 4,
		"@babel/runtime/helpers/classCallCheck": 5,
		"@babel/runtime/helpers/createClass": 7,
		"@babel/runtime/helpers/defineProperty": 8,
		"@babel/runtime/helpers/getPrototypeOf": 9,
		"@babel/runtime/helpers/inherits": 10,
		"@babel/runtime/helpers/interopRequireDefault": 11,
		"@babel/runtime/helpers/possibleConstructorReturn": 16,
		"@babel/runtime/helpers/slicedToArray": 18,
		"@babel/runtime/helpers/typeof": 19,
		"@babel/runtime/helpers/wrapNativeSuper": 21,
		"@babel/runtime/regenerator": 23,
		"axios": 24
	}]
}, {}, [55])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlRnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlci5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9lbnYvZGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsInNyYy9jdC1ndG0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsdkJBO0FBQ0E7O0FDREE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ2pELE1BQUksUUFBUSxHQUFHLElBQUksb0JBQUosQ0FBeUIsaUJBQWdDO0FBQUE7QUFBQSxRQUFuQixjQUFtQixZQUFuQixjQUFtQjs7QUFDdkUsUUFBSSxDQUFDLGNBQUwsRUFBcUI7QUFDcEI7QUFDQTs7QUFDRCxJQUFBLFFBQVEsQ0FBQyxVQUFUO0FBQ0EsV0FBTyxRQUFRLEVBQWY7QUFDQSxHQU5jLENBQWY7QUFPQSxTQUFPLFFBQVEsQ0FBQyxPQUFULENBQWlCLEVBQWpCLENBQVA7QUFDQSxDQVREOztBQVdBLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQixTQUExQixFQUFxQztBQUNwQyxTQUFPLE9BQU8sS0FBUCxLQUFpQixXQUFqQixJQUFnQyxLQUFLLEtBQUssSUFBMUMsR0FDSixTQUFTLENBQUMsS0FBRCxDQURMLEdBRUosU0FGSDtBQUdBOztBQUVELE1BQU0sQ0FBQyxRQUFQLEdBQWtCLElBQUksc0JBQUosQ0FBMkI7QUFDNUMsRUFBQSxZQUFZLEVBQUUsTUFBTSxDQUFDLGVBQVAsQ0FBdUI7QUFETyxDQUEzQixDQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlRnVuY3Rpb24sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG52YXIgaXNOYXRpdmVGdW5jdGlvbiA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlRnVuY3Rpb24uanNcIik7XG5cbnZhciBjb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3QuanNcIik7XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlciwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgdHJhbnNpdGlvbmFsRGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cy90cmFuc2l0aW9uYWwnKTtcbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvQ2FuY2VsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgICB2YXIgcmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB2YXIgb25DYW5jZWxlZDtcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4udW5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCA/IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIDogJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgIHJlc3BvbnNlVHlwZSA9PT0gJ2pzb24nID9cbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKGZ1bmN0aW9uIF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCBmdW5jdGlvbiBfcmVqZWN0KGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHZhciB0aW1lb3V0RXJyb3JNZXNzYWdlID0gY29uZmlnLnRpbWVvdXQgPyAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnIDogJ3RpbWVvdXQgZXhjZWVkZWQnO1xuICAgICAgdmFyIHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gJ0VUSU1FRE9VVCcgOiAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gZnVuY3Rpb24oY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCAoY2FuY2VsICYmIGNhbmNlbC50eXBlKSA/IG5ldyBDYW5jZWwoJ2NhbmNlbGVkJykgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5heGlvcy5WRVJTSU9OID0gcmVxdWlyZSgnLi9lbnYvZGF0YScpLnZlcnNpb247XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0F4aW9zRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcblxuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbihmdW5jdGlvbihjYW5jZWwpIHtcbiAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgIHZhciBpO1xuICAgIHZhciBsID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgfVxuICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbiA9IGZ1bmN0aW9uKG9uZnVsZmlsbGVkKSB7XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gKi9cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICB9XG59O1xuXG4vKipcbiAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAqL1xuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG52YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgnLi4vaGVscGVycy92YWxpZGF0b3InKTtcblxudmFyIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgY29uZmlnLnVybCA9IGNvbmZpZ09yVXJsO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZ09yVXJsIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbDtcblxuICBpZiAodHJhbnNpdGlvbmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyh0cmFuc2l0aW9uYWwsIHtcbiAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgZm9yY2VkSlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICBjbGFyaWZ5VGltZW91dEVycm9yOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgLy8gZmlsdGVyIG91dCBza2lwcGVkIGludGVyY2VwdG9yc1xuICB2YXIgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgdmFyIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHRydWU7XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzICYmIGludGVyY2VwdG9yLnN5bmNocm9ub3VzO1xuXG4gICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdmFyIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB2YXIgcHJvbWlzZTtcblxuICBpZiAoIXN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycykge1xuICAgIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG5cbiAgICBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjaGFpbiwgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgIGNoYWluID0gY2hhaW4uY29uY2F0KHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbik7XG5cbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG5cbiAgdmFyIG5ld0NvbmZpZyA9IGNvbmZpZztcbiAgd2hpbGUgKHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLmxlbmd0aCkge1xuICAgIHZhciBvbkZ1bGZpbGxlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCk7XG4gICAgdmFyIG9uUmVqZWN0ZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpO1xuICAgIHRyeSB7XG4gICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZChuZXdDb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBvblJlamVjdGVkKGVycm9yKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgcHJvbWlzZSA9IGRpc3BhdGNoUmVxdWVzdChuZXdDb25maWcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cblxuICB3aGlsZSAocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4ocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCksIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkLCBvcHRpb25zKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxuICAgIHN5bmNocm9ub3VzOiBvcHRpb25zID8gb3B0aW9ucy5zeW5jaHJvbm91cyA6IGZhbHNlLFxuICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL0NhbmNlbCcpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaWduYWwgJiYgY29uZmlnLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IENhbmNlbCgnY2FuY2VsZWQnKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgY29uZmlnLFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICBjb25maWcsXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtZXJnZU1hcCA9IHtcbiAgICAndXJsJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnbWV0aG9kJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnZGF0YSc6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgJ2Jhc2VVUkwnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc2Zvcm1SZXF1ZXN0JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndHJhbnNmb3JtUmVzcG9uc2UnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdwYXJhbXNTZXJpYWxpemVyJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndGltZW91dCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RpbWVvdXRNZXNzYWdlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnd2l0aENyZWRlbnRpYWxzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnYWRhcHRlcic6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3Jlc3BvbnNlVHlwZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3hzcmZDb29raWVOYW1lJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAneHNyZkhlYWRlck5hbWUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdvblVwbG9hZFByb2dyZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnb25Eb3dubG9hZFByb2dyZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnZGVjb21wcmVzcyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdtYXhCb2R5TGVuZ3RoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndHJhbnNwb3J0JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnaHR0cEFnZW50JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnaHR0cHNBZ2VudCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ2NhbmNlbFRva2VuJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnc29ja2V0UGF0aCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3Jlc3BvbnNlRW5jb2RpbmcnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd2YWxpZGF0ZVN0YXR1cyc6IG1lcmdlRGlyZWN0S2V5c1xuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoY29uZmlnMSkuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICB2YXIgbWVyZ2UgPSBtZXJnZU1hcFtwcm9wXSB8fCBtZXJnZURlZXBQcm9wZXJ0aWVzO1xuICAgIHZhciBjb25maWdWYWx1ZSA9IG1lcmdlKHByb3ApO1xuICAgICh1dGlscy5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cykgfHwgKGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1ZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIHZhciBjb250ZXh0ID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb250ZXh0LCBkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2VuaGFuY2VFcnJvcicpO1xudmFyIHRyYW5zaXRpb25hbERlZmF1bHRzID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uYWwnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpIHx8IChoZWFkZXJzICYmIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbicpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICB2YXIgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIHZhciBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgdmFyIGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICB2YXIgc3RyaWN0SlNPTlBhcnNpbmcgPSAhc2lsZW50SlNPTlBhcnNpbmcgJiYgdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgIGlmIChzdHJpY3RKU09OUGFyc2luZyB8fCAoZm9yY2VkSlNPTlBhcnNpbmcgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgZGF0YS5sZW5ndGgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgZW5oYW5jZUVycm9yKGUsIHRoaXMsICdFX0pTT05fUEFSU0UnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidmVyc2lvblwiOiBcIjAuMjYuMVwiXG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXhpb3NFcnJvcihwYXlsb2FkKSB7XG4gIHJldHVybiB1dGlscy5pc09iamVjdChwYXlsb2FkKSAmJiAocGF5bG9hZC5pc0F4aW9zRXJyb3IgPT09IHRydWUpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2Vudi9kYXRhJykudmVyc2lvbjtcblxudmFyIHZhbGlkYXRvcnMgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblsnb2JqZWN0JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdzeW1ib2wnXS5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUsIGkpIHtcbiAgdmFsaWRhdG9yc1t0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5cbnZhciBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICogQHBhcmFtIHtmdW5jdGlvbnxib29sZWFuP30gdmFsaWRhdG9yIC0gc2V0IHRvIGZhbHNlIGlmIHRoZSB0cmFuc2l0aW9uYWwgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWRcbiAqIEBwYXJhbSB7c3RyaW5nP30gdmVyc2lvbiAtIGRlcHJlY2F0ZWQgdmVyc2lvbiAvIHJlbW92ZWQgc2luY2UgdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmc/fSBtZXNzYWdlIC0gc29tZSBtZXNzYWdlIHdpdGggYWRkaXRpb25hbCBpbmZvXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbnZhbGlkYXRvcnMudHJhbnNpdGlvbmFsID0gZnVuY3Rpb24gdHJhbnNpdGlvbmFsKHZhbGlkYXRvciwgdmVyc2lvbiwgbWVzc2FnZSkge1xuICBmdW5jdGlvbiBmb3JtYXRNZXNzYWdlKG9wdCwgZGVzYykge1xuICAgIHJldHVybiAnW0F4aW9zIHYnICsgVkVSU0lPTiArICddIFRyYW5zaXRpb25hbCBvcHRpb24gXFwnJyArIG9wdCArICdcXCcnICsgZGVzYyArIChtZXNzYWdlID8gJy4gJyArIG1lc3NhZ2UgOiAnJyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG9wdCwgb3B0cykge1xuICAgIGlmICh2YWxpZGF0b3IgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0TWVzc2FnZShvcHQsICcgaGFzIGJlZW4gcmVtb3ZlZCcgKyAodmVyc2lvbiA/ICcgaW4gJyArIHZlcnNpb24gOiAnJykpKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiAhZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0pIHtcbiAgICAgIGRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdID0gdHJ1ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBzaW5jZSB2JyArIHZlcnNpb24gKyAnIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5lYXIgZnV0dXJlJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtib29sZWFuP30gYWxsb3dVbmtub3duXG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICB9XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgdmFyIG9wdCA9IGtleXNbaV07XG4gICAgdmFyIHZhbGlkYXRvciA9IHNjaGVtYVtvcHRdO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbb3B0XTtcbiAgICAgIHZhciByZXN1bHQgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXNzZXJ0T3B0aW9uczogYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9yczogdmFsaWRhdG9yc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZvcm1EYXRhXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKGlzQXJyYXlCdWZmZXIodmFsLmJ1ZmZlcikpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBVUkxTZWFyY2hQYXJhbXNdJztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnRyaW0gPyBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvLyBEZXBzXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBNYWluIGNsYXNzLCB3aGljaCBhY2NlcHRzIGNvbmZpZ3VyYXRpb24gaW4gaXQncyBjb25zdHJ1Y3RvciBhbmQgZXhwb3Nlc1xuLy8gaGVscGVyIG1ldGhvZHNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BpZnlHdG1JbnN0cnVtZW50b3Ige1xuXHQvLyBTYXZlIHNldHRpbmdzIGFuZCBoeWRyYXRlIHZhcnNcblx0Y29uc3RydWN0b3IocGFyYW0pIHtcblx0XHRpZiAocGFyYW0gPT0gbnVsbCkge1xuXHRcdFx0cGFyYW0gPSB7fTtcblx0XHR9XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZUVjb21tZXJjZVByb3BlcnR5ID0gZmFsc2UsXG5cdFx0XHRlbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5ID0gdHJ1ZSxcblx0XHR9ID0gcGFyYW07XG5cdFx0dGhpcy5kZWJ1ZyA9IGZhbHNlO1xuXHRcdHRoaXMuc3RvcmVVcmwgPSB3aW5kb3cuY3RfZ3RtX3NldHRpbmdzLnNob3BfdXJsO1xuXHRcdHRoaXMuU0hPUElGWV9VUkwgPSB3aW5kb3cuY3RfZ3RtX3NldHRpbmdzLnNob3BfdXJsO1xuXHRcdHRoaXMuc3RvcmVmcm9udFRva2VuID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5zdG9yZWZyb250X3Rva2VuO1xuXHRcdHRoaXMuU0hPUElGWV9TVE9SRUZST05UX1RPS0VOID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5zdG9yZWZyb250X3Rva2VuO1xuXHRcdHRoaXMuY3VycmVuY3lDb2RlID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5jdXJyZW5jeTtcblx0XHR0aGlzLmRpc2FibGVFY29tbWVyY2VQcm9wZXJ0eSA9IGRpc2FibGVFY29tbWVyY2VQcm9wZXJ0eTtcblx0XHR0aGlzLmVuYWJsZUNoZWNrb3V0RWNvbW1lcmNlUHJvcGVydHkgPSBlbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5O1xuXHRcdHRoaXMub2NjdXJhbmNlcyA9IFtdO1xuXHR9XG5cblx0Ly8gQVBJICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gQSB2aWV3IG9mIGEgcHJvZHVjdCBlbGVtZW50XG5cdGFzeW5jIHByb2R1Y3RJbXByZXNzaW9uKHZhcmlhbnRQYXlsb2FkLCB7IGVsLCBsaXN0LCBwb3NpdGlvbiB9ID0ge30pIHtcblx0XHRsZXQgZmxhdFZhcmlhbnQgPSBbXTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgd2luZG93ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB2YXJpYW50UGF5bG9hZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhcmlhbnRQYXlsb2FkLm5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhbnRQYXlsb2FkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghKGZsYXRWYXJpYW50W2ZsYXRWYXJpYW50Lmxlbmd0aF0gPSBhd2FpdCB0aGlzLmdldEZsYXRWYXJpYW50KHZhcmlhbnRQYXlsb2FkW2ldKSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBNYWtlIGRlZmF1bHRzXG5cdFx0aWYgKGVsICYmIHBvc2l0aW9uID09IG51bGwpIHtcblx0XHRcdHBvc2l0aW9uID0gZ2V0RWxQb3NpdGlvbihlbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmbGF0VmFyaWFudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZmxhdFZhcmlhbnRbaV0gPSB0aGlzLm1ha2VVYVByb2R1Y3RGaWVsZE9iamVjdChmbGF0VmFyaWFudFtpXSk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBldmVudFxuXHRcdGNvbnN0IGV2ZW50UHVzaGVyID0gKCkgPT5cblx0XHRcdHRoaXMucHVzaEV2ZW50KCdQcm9kdWN0IEltcHJlc3Npb24nLCB7XG5cdFx0XHRcdGxpc3ROYW1lOiBsaXN0LFxuXHRcdFx0XHRsaXN0UG9zaXRpb246IHBvc2l0aW9uLFxuXHRcdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0XHRpbXByZXNzaW9uczoge1xuXHRcdFx0XHRcdFx0aXRlbXM6IGZsYXRWYXJpYW50LFxuXHRcdFx0XHRcdFx0bGlzdCxcblx0XHRcdFx0XHRcdHBvc2l0aW9uLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRpZiAoZWwpIHtcblx0XHRcdHJldHVybiB3aGVuRmlyc3RJblZpZXdwb3J0KGVsLCBldmVudFB1c2hlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBldmVudFB1c2hlcigpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEEgY2xpY2sgb24gYSBwcm9kdWN0XG5cdGFzeW5jIHByb2R1Y3RDbGljayhcblx0XHR2YXJpYW50UGF5bG9hZCxcblx0XHR7IGVsLCBsaXN0LCBwb3NpdGlvbiwgY2xpY2tFdmVudCB9ID0ge30sXG5cdCkge1xuXHRcdGxldCBjbGlja1VybCwgZmxhdFZhcmlhbnQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgbmF2aWdhdGlvblxuXHRcdGlmIChcblx0XHRcdChjbGlja1VybCA9IF9fZ3VhcmRfXyhcblx0XHRcdFx0Y2xpY2tFdmVudCAhPSBudWxsID8gY2xpY2tFdmVudC5jdXJyZW50VGFyZ2V0IDogdW5kZWZpbmVkLFxuXHRcdFx0XHQoeCkgPT4geC5ocmVmLFxuXHRcdFx0KSlcblx0XHQpIHtcblx0XHRcdGlmIChjbGlja0V2ZW50ICE9IG51bGwpIHtcblx0XHRcdFx0Y2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEdldCB2YXJpYW50XG5cdFx0aWYgKCEoZmxhdFZhcmlhbnQgPSBhd2FpdCB0aGlzLmdldEZsYXRWYXJpYW50KHZhcmlhbnRQYXlsb2FkKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBNYWtlIGRlZmF1bHRzXG5cdFx0aWYgKGVsICYmIHBvc2l0aW9uID09IG51bGwpIHtcblx0XHRcdHBvc2l0aW9uID0gZ2V0RWxQb3NpdGlvbihlbCk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBldmVudFxuXHRcdHRoaXMucHVzaEV2ZW50KCdQcm9kdWN0IENsaWNrJywge1xuXHRcdFx0Li4uZmxhdFZhcmlhbnQsXG5cdFx0XHRsaXN0TmFtZTogbGlzdCxcblx0XHRcdGxpc3RQb3NpdGlvbjogcG9zaXRpb24sXG5cdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0Y2xpY2s6IHtcblx0XHRcdFx0XHQuLi4oIWxpc3Rcblx0XHRcdFx0XHRcdD8ge31cblx0XHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbkZpZWxkOiB7IGxpc3QgfSxcblx0XHRcdFx0XHRcdCAgfSksXG5cdFx0XHRcdFx0cHJvZHVjdHM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Li4udGhpcy5tYWtlVWFQcm9kdWN0RmllbGRPYmplY3QoZmxhdFZhcmlhbnQpLFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHQvLyBGaW5pc2ggbmF2aWdhdGlvblxuXHRcdGlmIChjbGlja1VybCkge1xuXHRcdFx0cmV0dXJuICh3aW5kb3cubG9jYXRpb24gPSBjbGlja1VybCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVHlwaWNhbGx5IHVzZWQgZm9yIHZpZXcgb2YgUERQIHBhZ2Vcblx0YXN5bmMgdmlld1Byb2R1Y3REZXRhaWxzKHZhcmlhbnRQYXlsb2FkKSB7XG5cdFx0bGV0IGZsYXRWYXJpYW50O1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBHZXQgdmFyaWFudFxuXHRcdGlmICghKGZsYXRWYXJpYW50ID0gYXdhaXQgdGhpcy5nZXRGbGF0VmFyaWFudCh2YXJpYW50UGF5bG9hZCkpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBldmVudFxuXHRcdHJldHVybiB0aGlzLnB1c2hFdmVudCgnVmlldyBQcm9kdWN0IERldGFpbHMnLCB7XG5cdFx0XHQuLi5mbGF0VmFyaWFudCxcblx0XHRcdGVjb21tZXJjZToge1xuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRwcm9kdWN0czogW3RoaXMubWFrZVVhUHJvZHVjdEZpZWxkT2JqZWN0KGZsYXRWYXJpYW50KV0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gVXNlZCB3aGVudmVyIHRoZXJlIGlzIGEgcG9zaXRpdmUgY2hhbmdlIGluIHRoZSBxdWFudGl0eSBvZiBhIHByb2R1Y3QgaW5cblx0Ly8gdGhlIGNhcnQuXG5cdGFkZFRvQ2FydCh2YXJpYW50UGF5bG9hZCwgcXVhbnRpdHkpIHtcblx0XHRyZXR1cm4gdGhpcy51cGRhdGVRdWFudGl0eShcblx0XHRcdHZhcmlhbnRQYXlsb2FkLFxuXHRcdFx0cXVhbnRpdHksXG5cdFx0XHQnQWRkIHRvIENhcnQnLFxuXHRcdFx0J2FkZCcsXG5cdFx0KTtcblx0fVxuXG5cdC8vIFVzZWQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBuZWdhdGl2ZSBjaGFuZ2UgaW4gdGhlIHF1YW50aXR5IG9mIGEgcHJvZHVjdCBpblxuXHQvLyB0aGUgY2FydC5cblx0cmVtb3ZlRnJvbUNhcnQodmFyaWFudFBheWxvYWQsIHF1YW50aXR5KSB7XG5cdFx0cmV0dXJuIHRoaXMudXBkYXRlUXVhbnRpdHkoXG5cdFx0XHR2YXJpYW50UGF5bG9hZCxcblx0XHRcdHF1YW50aXR5LFxuXHRcdFx0J1JlbW92ZSBmcm9tIENhcnQnLFxuXHRcdFx0J3JlbW92ZScsXG5cdFx0KTtcblx0fVxuXG5cdC8vIFVzZWQgYm90aCBmaXJlIHRoZSBgVXBkYXRlIFF1YW50aXR5YCBldmVudCBidXQgYWxzbyBhcyBhIGhlbHBlciBmb3IgdGhlXG5cdC8vIGFkZCBhbmQgcmVtb3ZlIG1ldGhvZHMuXG5cdGFzeW5jIHVwZGF0ZVF1YW50aXR5KFxuXHRcdHZhcmlhbnRQYXlsb2FkLFxuXHRcdHF1YW50aXR5LFxuXHRcdGd0bUV2ZW50ID0gJ1VwZGF0ZSBRdWFudGl0eScsXG5cdFx0ZWNvbW1lcmNlQWN0aW9uLFxuXHQpIHtcblx0XHRsZXQgZmxhdFZhcmlhbnQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEdldCB2YXJpYW50XG5cdFx0aWYgKCEoZmxhdFZhcmlhbnQgPSBhd2FpdCB0aGlzLmdldEZsYXRWYXJpYW50KHZhcmlhbnRQYXlsb2FkKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBGaXJlIHRoZSBldmVudFxuXHRcdHJldHVybiB0aGlzLnB1c2hFdmVudChndG1FdmVudCwge1xuXHRcdFx0Li4uZmxhdFZhcmlhbnQsXG5cdFx0XHRxdWFudGl0eSxcblxuXHRcdFx0Ly8gQ29uZGl0aW9uYWxseSBhZGQgZW5oYW5jZWQgZWNvbW1lcmNlIGFjdGlvblxuXHRcdFx0Li4uKCFlY29tbWVyY2VBY3Rpb25cblx0XHRcdFx0PyB7fVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdGVjb21tZXJjZToge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW5jeUNvZGU6IHRoaXMuY3VycmVuY3lDb2RlLFxuXHRcdFx0XHRcdFx0XHRbZWNvbW1lcmNlQWN0aW9uXToge1xuXHRcdFx0XHRcdFx0XHRcdHByb2R1Y3RzOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1zOiB0aGlzLm1ha2VVYVByb2R1Y3RGaWVsZE9iamVjdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGF0VmFyaWFudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHQgIH0pLFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gRmlyZSBhbiBldmVudCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYXJ0XG5cdGFzeW5jIGNhcnRVcGRhdGVkKGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCkge1xuXHRcdGxldCBzaW1wbGlmaWVkQ2hlY2tvdXQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHQoc2ltcGxpZmllZENoZWNrb3V0ID0gYXdhaXQgdGhpcy5nZXRTaW1wbGlmaWVkQ2hlY2tvdXQoXG5cdFx0XHRcdGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCxcblx0XHRcdCkpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoRXZlbnQoJ0NhcnQgVXBkYXRlZCcsIHNpbXBsaWZpZWRDaGVja291dCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRmlyZSBhbiBldmVudCB3aXRoIHRoZSBjdXJyZW50IHN0ZXAgb2YgdGhlIGNoZWNrb3V0IHByb2Nlc3Ncblx0YXN5bmMgY2hlY2tvdXQoY2hlY2tvdXRPckNhcnRQYXlsb2FkLCBjaGVja291dFN0ZXApIHtcblx0XHRsZXQgc2ltcGxpZmllZENoZWNrb3V0O1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0KHNpbXBsaWZpZWRDaGVja291dCA9IGF3YWl0IHRoaXMuZ2V0U2ltcGxpZmllZENoZWNrb3V0KFxuXHRcdFx0XHRjaGVja291dE9yQ2FydFBheWxvYWQsXG5cdFx0XHQpKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaEV2ZW50KCdDaGVja291dCcsIHtcblx0XHRcdFx0Y2hlY2tvdXRTdGVwLFxuXHRcdFx0XHQuLi5zaW1wbGlmaWVkQ2hlY2tvdXQsXG5cdFx0XHRcdC4uLighdGhpcy5lbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5XG5cdFx0XHRcdFx0PyB7fVxuXHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeUNvZGU6IHRoaXMuY3VycmVuY3lDb2RlLFxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrb3V0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25GaWVsZDogeyBzdGVwOiBjaGVja291dFN0ZXAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHByb2R1Y3RzOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1ha2VVYUNoZWNrb3V0UHJvZHVjdHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2ltcGxpZmllZENoZWNrb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ICB9KSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vdGlmeSBvZiBmaW5hbCBjaGVja291dCwgdXNpbmcgYXJyYXkgb2YgdmFyaWFudCBkYXRhIGZyb20gbGlxdWlkXG5cdGFzeW5jIHB1cmNoYXNlKGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCkge1xuXHRcdGxldCBzaW1wbGlmaWVkQ2hlY2tvdXQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHQoc2ltcGxpZmllZENoZWNrb3V0ID0gYXdhaXQgdGhpcy5nZXRTaW1wbGlmaWVkQ2hlY2tvdXQoXG5cdFx0XHRcdGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCxcblx0XHRcdCkpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoRXZlbnQoJ1B1cmNoYXNlJywge1xuXHRcdFx0XHQuLi5zaW1wbGlmaWVkQ2hlY2tvdXQsXG5cdFx0XHRcdC4uLighdGhpcy5lbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5XG5cdFx0XHRcdFx0PyB7fVxuXHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeUNvZGU6IHRoaXMuY3VycmVuY3lDb2RlLFxuXHRcdFx0XHRcdFx0XHRcdHB1cmNoYXNlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25GaWVsZDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnIycgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpbXBsaWZpZWRDaGVja291dC5vcmRlck51bWJlciwgLy8gTWF0Y2hlcyBTaG9waWZ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVudWU6IHNpbXBsaWZpZWRDaGVja291dC50b3RhbFByaWNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXg6IHNpbXBsaWZpZWRDaGVja291dC50b3RhbFRheCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpcHBpbmc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2ltcGxpZmllZENoZWNrb3V0LnRvdGFsU2hpcHBpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvdXBvbjogc2ltcGxpZmllZENoZWNrb3V0LmRpc2NvdW50Q29kZXMuam9pbihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnLCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvZHVjdHM6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubWFrZVVhQ2hlY2tvdXRQcm9kdWN0cyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaW1wbGlmaWVkQ2hlY2tvdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQgIH0pLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ3VzdG9tZXIgaW5mb3JtYXRpb25cblx0aWRlbnRpZnlDdXN0b21lcihjdXN0b21lcikge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHVzaEV2ZW50KCdJZGVudGlmeSBDdXN0b21lcicsIHtcblx0XHRcdGN1c3RvbWVySWQ6IGN1c3RvbWVyLmlkLFxuXHRcdFx0Y3VzdG9tZXJaaXA6IGN1c3RvbWVyLnppcCxcblx0XHRcdGN1c3RvbWVyRW1haWw6IGN1c3RvbWVyLmVtYWlsLFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gVkFSSUFOVCBEQVRBICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gVGFrZSBhIHZhcmlhbnRQYXlsb2FkLCB3aGljaCBtYXkgYmUgYW4gaWQgb3IgYW4gb2JqZWN0LCBhbmQgcmV0dXJuIGFuXG5cdC8vIG9iamVjdCB0aGF0IGNhbiBiZSBlYXNpbHkgY29uc3VtZWQgYnkgR1RNLlxuXHRhc3luYyBnZXRGbGF0VmFyaWFudCAodmFyaWFudFBheWxvYWQpIHtcblxuXHRcdGxldCBwcm9kdWN0cywgdmFyaWFudDtcblxuXHRcdGlmICh0eXBlb2YgdmFyaWFudFBheWxvYWQgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YXJpYW50UGF5bG9hZCA9PT0gJ2FycmF5Jykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYW50UGF5bG9hZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwcm9kdWN0cy5wdXNoKHZhcmlhbnRQYXlsb2FkW2ldKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB2YXJpYW50UGF5bG9hZCA9IHByb2R1Y3RzW2ldO1xuXHRcdFx0XHQvLyBDb25kaXRpb2FsbHkgZmV0Y2ggZnJvbSBzdG9yZWZyb250IEFQSVxuXHRcdFx0XHR2YXJpYW50ID1cblx0XHRcdFx0XHR0eXBlb2YgdmFyaWFudFBheWxvYWQgPT09ICdvYmplY3QnXG5cdFx0XHRcdFx0XHQ/IHZhcmlhbnRQYXlsb2FkXG5cdFx0XHRcdFx0XHQ6IGF3YWl0IHRoaXMuZmV0Y2hWYXJpYW50KHZhcmlhbnRQYXlsb2FkKTtcblxuXHRcdFx0XHQvLyBWYWxpZGF0ZSB0aGUgdmFyaWFudCBhbmQgcmV0dXJuXG5cdFx0XHRcdGlmICh2YXJpYW50KSB7XG5cdFx0XHRcdFx0cHJvZHVjdHNbaV0gPSB0aGlzLm1ha2VGbGF0VmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignVmFyaWFudCBub3QgZm91bmQnLCB2YXJpYW50UGF5bG9hZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb2R1Y3RzO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENvbmRpdGlvYWxseSBmZXRjaCBmcm9tIHN0b3JlZnJvbnQgQVBJXG5cdFx0XHR2YXJpYW50ID1cblx0XHRcdFx0dHlwZW9mIHZhcmlhbnRQYXlsb2FkID09PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8gdmFyaWFudFBheWxvYWRcblx0XHRcdFx0XHQ6IGF3YWl0IHRoaXMuZmV0Y2hWYXJpYW50KHZhcmlhbnRQYXlsb2FkKTtcblxuXHRcdFx0Ly8gVmFsaWRhdGUgdGhlIHZhcmlhbnQgYW5kIHJldHVyblxuXHRcdFx0aWYgKHZhcmlhbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZUZsYXRWYXJpYW50KHZhcmlhbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1ZhcmlhbnQgbm90IGZvdW5kJywgdmFyaWFudFBheWxvYWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIExvb2t1cCBhIHByb2R1Y3QgdmFyaWFudCBieSBpZC4gSWQgbWF5IGJlIGEgc2ltcGxlIG51bWJlciBvciBhXG5cdC8vIGdpZDovL3Nob3BpZnkgc3RyaW5nXG5cdGFzeW5jIGZldGNoVmFyaWFudCh2YXJpYW50SWQpIHtcblx0XHRpZiAoIXZhcmlhbnRJZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXJpYW50SWQgPSBnZXRTaG9waWZ5SWQodmFyaWFudElkKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5U3RvcmVmcm9udEFwaSh7XG5cdFx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdFx0aWQ6IGJ0b2EoJ2dpZDovL3Nob3BpZnkvUHJvZHVjdFZhcmlhbnQvJyArIHZhcmlhbnRJZCksXG5cdFx0XHR9LFxuXHRcdFx0cXVlcnk6IGZldGNoVmFyaWFudFF1ZXJ5LFxuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQubm9kZTtcblx0fVxuXG5cdC8vIE1ha2UgZmxhdCBvYmplY3QgZnJvbSBhIHZhcmlhbnQgd2l0aCBuZXN0ZWQgcHJvZHVjdCBkYXRhXG5cdG1ha2VGbGF0VmFyaWFudCh2YXJpYW50KSB7XG5cdFx0bGV0IHByb2R1Y3RVcmwsIHZhcmlhbnRJZDtcblx0XHRjb25zdCB7IHByb2R1Y3QgfSA9IHZhcmlhbnQ7XG5cblx0XHQvLyBQcm9kdWN0IGxldmVsIGluZm9cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvZHVjdElkOiBnZXRTaG9waWZ5SWQocHJvZHVjdC5pZCksXG5cdFx0XHRwcm9kdWN0VGl0bGU6IHByb2R1Y3QudGl0bGUsXG5cdFx0XHRwcm9kdWN0VmFyaWFudFRpdGxlOiBgJHtwcm9kdWN0LnRpdGxlfSAtICR7dmFyaWFudC50aXRsZX1gLFxuXHRcdFx0cHJvZHVjdFR5cGU6XG5cdFx0XHRcdHByb2R1Y3QucHJvZHVjdFR5cGUgfHxcblx0XHRcdFx0cHJvZHVjdC50eXBlIHx8XG5cdFx0XHRcdHByb2R1Y3QuY29sbGVjdGlvbnMuZWRnZXNbMF0ubm9kZS50aXRsZSxcblx0XHRcdHByb2R1Y3RWZW5kb3I6IHByb2R1Y3QudmVuZG9yLFxuXHRcdFx0cHJvZHVjdFVybDpcblx0XHRcdFx0KHByb2R1Y3RVcmwgPSBgJHt0aGlzLnN0b3JlVXJsfS9wcm9kdWN0cy8ke3Byb2R1Y3QuaGFuZGxlfWApLFxuXG5cdFx0XHQvLyBWYXJpYW50IGxldmVsIGRhdGFcblx0XHRcdHNrdTogdmFyaWFudC5za3UsXG5cdFx0XHRwcmljZTogdmFyaWFudC5wcmljZSxcblx0XHRcdGNvbXBhcmVBdFByaWNlOiB2YXJpYW50LmNvbXBhcmVBdFByaWNlLFxuXHRcdFx0dmFyaWFudElkOiAodmFyaWFudElkID0gZ2V0U2hvcGlmeUlkKHZhcmlhbnQuaWQpKSxcblx0XHRcdHZhcmlhbnRUaXRsZTogdmFyaWFudC50aXRsZSxcblx0XHRcdHZhcmlhbnRJbWFnZTpcblx0XHRcdFx0KHZhcmlhbnQuaW1hZ2UgIT0gbnVsbFxuXHRcdFx0XHRcdD8gdmFyaWFudC5pbWFnZS5vcmlnaW5hbFNyY1xuXHRcdFx0XHRcdDogdW5kZWZpbmVkKSB8fCB2YXJpYW50LmltYWdlLFxuXHRcdFx0dmFyaWFudFVybDogYCR7cHJvZHVjdFVybH0/dmFyaWFudD0ke3ZhcmlhbnRJZH1gLFxuXHRcdH07XG5cdH1cblxuXHQvLyBDb252ZXJ0IGEgU2hvcGlmeSB2YXJpYW50IG9iamVjdCB0byBhIFVBIHByb2R1Y3RGaWVsZE9iamVjdC4gSSdtXG5cdC8vIGNvbWJpbmluZyB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBuYW1lIGJlY2F1c2UgdGhhdCdzIHdoYXQgU2hvcGlmeSBkb2VzXG5cdC8vIHdpdGggaXQncyBvd24gZXZlbnRzLlxuXHQvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZW5oYW5jZWQtZWNvbW1lcmNlI3Byb2R1Y3QtZGF0YVxuXHRtYWtlVWFQcm9kdWN0RmllbGRPYmplY3QoZmxhdFZhcmlhbnQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGZsYXRWYXJpYW50LnNrdSxcblx0XHRcdG5hbWU6IGZsYXRWYXJpYW50LnByb2R1Y3RWYXJpYW50VGl0bGUsXG5cdFx0XHRicmFuZDogZmxhdFZhcmlhbnQucHJvZHVjdFZlbmRvcixcblx0XHRcdGNhdGVnb3J5OiBmbGF0VmFyaWFudC5wcm9kdWN0VHlwZSxcblx0XHRcdHZhcmlhbnQ6IGZsYXRWYXJpYW50LnZhcmlhbnRUaXRsZSxcblx0XHRcdHByaWNlOiBmbGF0VmFyaWFudC5wcmljZSxcblx0XHR9O1xuXHR9XG5cblx0Ly8gQ0hFQ0tPVVQgREFUQSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gVGFrZSBhIGNoZWNrb3V0UGF5bG9hZCwgd2hpY2ggbWF5IGJlIGFuIGlkIG9yIGFuIG9iamVjdCwgYW5kIHJldHVybiB0aGVcblx0Ly8gU2hvcGlmeSBjaGVja291dCBvYmplY3QgdGhhdCBoYXMgYmVlbiBzaW1wbGlmaWVkIGEgYml0LlxuXHRhc3luYyBnZXRTaW1wbGlmaWVkQ2hlY2tvdXQoY2hlY2tvdXRPckNhcnRQYXlsb2FkKSB7XG5cdFx0Ly8gQ29uZGl0aW9hbGx5IGZldGNoIGZyb20gc3RvcmVmcm9udCBBUElcblx0XHRjb25zdCBjaGVja291dCA9XG5cdFx0XHR0eXBlb2YgY2hlY2tvdXRPckNhcnRQYXlsb2FkID09PSAnb2JqZWN0J1xuXHRcdFx0XHQ/IGNoZWNrb3V0T3JDYXJ0UGF5bG9hZFxuXHRcdFx0XHQ6IGF3YWl0IHRoaXMuZmV0Y2hDaGVja291dChjaGVja291dE9yQ2FydFBheWxvYWQpO1xuXG5cdFx0Ly8gVmFsaWRhdGUgdGhlIGNoZWNrb3V0IGFuZCByZXR1cm5cblx0XHRpZiAoIWNoZWNrb3V0KSB7XG5cdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcblx0XHRcdFx0J0NoZWNrb3V0IG9yIENhcnQgbm90IGZvdW5kJyxcblx0XHRcdFx0Y2hlY2tvdXRPckNhcnRQYXlsb2FkLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubWFrZVNpbXBsaWZpZWRDaGVja291dChjaGVja291dCk7XG5cdH1cblxuXHQvLyBMb29rdXAgYSBjaGVja291dCBvciBjYXJ0IGJ5IGlkLiBJZCBzaG91bGQgYmUgYSBnaWQ6Ly9zaG9waWZ5IHN0cmluZ1xuXHRhc3luYyBmZXRjaENoZWNrb3V0KGNoZWNrb3V0T3JDYXJ0SWQpIHtcblx0XHQvLyBEZXRlcm1pbmUgaWYgY2FydCBvZiBjaGVja291dCByZXF1ZXN0XG5cdFx0Y29uc3QgW2FsbCwgdHlwZV0gPSBhdG9iKGNoZWNrb3V0T3JDYXJ0SWQpLm1hdGNoKFxuXHRcdFx0L2dpZDpcXC9cXC9zaG9waWZ5XFwvKFxcdyspLyxcblx0XHQpO1xuXG5cdFx0Ly8gR2V0IHRoZSBkYXRhXG5cdFx0Y29uc3QgeyBub2RlIH0gPSBhd2FpdCB0aGlzLnF1ZXJ5U3RvcmVmcm9udEFwaSh7XG5cdFx0XHRxdWVyeTogKCgpID0+IHtcblx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnQ2FydCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmV0Y2hDYXJ0UXVlcnk7XG5cdFx0XHRcdFx0Y2FzZSAnQ2hlY2tvdXQnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGZldGNoQ2hlY2tvdXRRdWVyeTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgYFVua25vd24gdHlwZTogJHt0eXBlfWA7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCksXG5cdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IGNoZWNrb3V0T3JDYXJ0SWQgfSxcblx0XHR9KTtcblxuXHRcdC8vIEZpbmFsIG1hc3NhZ2Ugb2YgQ2FydHMgaW50byBDaGVja291dFxuXHRcdGlmIChub2RlLmVzdGltYXRlZENvc3QpIHtcblx0XHRcdG5vZGUuc3VidG90YWxQcmljZSA9IG5vZGUuZXN0aW1hdGVkQ29zdC5zdWJ0b3RhbEFtb3VudC5hbW91bnQ7XG5cdFx0XHRub2RlLnRvdGFsUHJpY2UgPSBub2RlLmVzdGltYXRlZENvc3QudG90YWxBbW91bnQuYW1vdW50O1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiBcImNoZWNrb3V0XCIgKHdoaWNoIGNvdWxkIGJlIGEgQ2FydCBvYmplY3QpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHQvLyBTdGFuZGFyZGl6ZSBjaGVja291dCBwcm9wZXJ0aWVzIHRvIHNvbWV0aGluZyBtb3JlIGVhc2lseSB1c2VkIGluIGRhdGFMYXllclxuXHRtYWtlU2ltcGxpZmllZENoZWNrb3V0KGNoZWNrb3V0KSB7XG5cdFx0Ly8gRmxhdHRlbiBub2RlcyB0aGF0IGNvbnRhaW4gbGluZSBpdGVtc1xuXHRcdGlmIChjaGVja291dC5saW5lSXRlbXMuZWRnZXMpIHtcblx0XHRcdGNoZWNrb3V0LmxpbmVJdGVtcyA9IGNoZWNrb3V0LmxpbmVJdGVtcy5lZGdlcy5tYXAoXG5cdFx0XHRcdCh7IG5vZGUgfSkgPT4gbm9kZSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBzaW1wbGlmaWVkIG9iamVjdFxuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja291dElkOiBnZXRTaG9waWZ5SWQoY2hlY2tvdXQuaWQpLFxuXHRcdFx0Y2hlY2tvdXRVcmw6IGNoZWNrb3V0LndlYlVybCxcblx0XHRcdHN1YnRvdGFsUHJpY2U6IGNoZWNrb3V0LnN1YnRvdGFsUHJpY2UsXG5cdFx0XHR0b3RhbFByaWNlOiBjaGVja291dC50b3RhbFByaWNlLFxuXHRcdFx0bGluZUl0ZW1zOiBjaGVja291dC5saW5lSXRlbXMubWFwKChsaW5lSXRlbSkgPT4gKHtcblx0XHRcdFx0bGluZUl0ZW1JZDogZ2V0U2hvcGlmeUlkKGxpbmVJdGVtLmlkKSxcblx0XHRcdFx0cXVhbnRpdHk6IGxpbmVJdGVtLnF1YW50aXR5LFxuXHRcdFx0XHQuLi50aGlzLm1ha2VGbGF0VmFyaWFudChsaW5lSXRlbS52YXJpYW50KSxcblx0XHRcdH0pKSxcblxuXHRcdFx0Ly8gUHJvcGVydGllcyB0aGF0IGFyZW4ndCBwcmVzZW50IHVudGlsIHB1cmNoYXNlXG5cdFx0XHRvcmRlck51bWJlcjogY2hlY2tvdXQub3JkZXJOdW1iZXIsXG5cdFx0XHR0b3RhbFRheDogY2hlY2tvdXQudG90YWxUYXgsXG5cdFx0XHR0b3RhbFNoaXBwaW5nOiBjaGVja291dC50b3RhbFNoaXBwaW5nLFxuXHRcdFx0ZGlzY291bnRDb2RlczogY2hlY2tvdXQuZGlzY291bnRDb2RlcyB8fCBbXSxcblx0XHR9O1xuXHR9XG5cblx0Ly8gR2V0IGEgc2ltcGxpZmllZENoZWNrb3V0IG9iamVjdCBhbmQgbWFrZSB0aGUgYHByb2R1Y3RzYCBhcnJheSBmcm9tIHRoZVxuXHQvLyBsaW5lSXRlbXMuICBXaGljaCBpc1xuXHRtYWtlVWFDaGVja291dFByb2R1Y3RzKHNpbXBsaWZpZWRDaGVja291dCkge1xuXHRcdHJldHVybiBzaW1wbGlmaWVkQ2hlY2tvdXQubGluZUl0ZW1zLm1hcCgobGluZUl0ZW0pID0+ICh7XG5cdFx0XHRxdWFudGl0eTogbGluZUl0ZW0ucXVhbnRpdHksXG5cdFx0XHQuLi50aGlzLm1ha2VVYVByb2R1Y3RGaWVsZE9iamVjdChsaW5lSXRlbSksXG5cdFx0fSkpO1xuXHR9XG5cblx0Ly8gU1RPUkVGUk9OVCBBUEkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gUXVlcnkgU3RvcmVmcm9udCBBUElcblx0YXN5bmMgcXVlcnlTdG9yZWZyb250QXBpKHBheWxvYWQpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcblx0XHRcdHVybDogYCR7dGhpcy5zdG9yZVVybH0vYXBpLzIwMjEtMTAvZ3JhcGhxbGAsXG5cdFx0XHRtZXRob2Q6ICdwb3N0Jyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdCdYLVNob3BpZnktU3RvcmVmcm9udC1BY2Nlc3MtVG9rZW4nOiB0aGlzLnN0b3JlZnJvbnRUb2tlbixcblx0XHRcdH0sXG5cdFx0XHRkYXRhOiBwYXlsb2FkLFxuXHRcdH0pO1xuXHRcdGlmIChyZXNwb25zZS5kYXRhLmVycm9ycykge1xuXHRcdFx0dGhyb3cgbmV3IFN0b3JlZnJvbnRFcnJvcihyZXNwb25zZS5kYXRhLmVycm9ycywgcGF5bG9hZCk7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG5cdH1cblxuXHQvLyBEQVRBTEFZRVIgV1JJVElORyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHQvLyBQdXNoIEdUTSBkYXRhTGF5ZXIgZXZlbnRcblx0cHVzaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcblx0XHRpZiAodGhpcy5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5kZWJ1ZyhgJyR7bmFtZX0nYCwgcGF5bG9hZCk7XG5cdFx0fVxuXHRcdGlmICghd2luZG93LmRhdGFMYXllcikge1xuXHRcdFx0d2luZG93LmRhdGFMYXllciA9IFtdO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgZWNvbW1lcmNlIHByb3BlcnR5LCBsaWtlIGlmIHRoZXkgYXJlIGdvaW5nIHRvIGJlIGNyZWF0ZWQgaW5cblx0XHQvLyBHVE0gbWFudWFsbHkuXG5cdFx0aWYgKHRoaXMuZGlzYWJsZUVjb21tZXJjZVByb3BlcnR5ICYmIHBheWxvYWQuZWNvbW1lcmNlKSB7XG5cdFx0XHRwYXlsb2FkID0geyAuLi5wYXlsb2FkIH07XG5cdFx0XHRkZWxldGUgcGF5bG9hZC5lY29tbWVyY2U7XG5cblx0XHRcdC8vIENsZWFyIHByZXZpb3VzIGVjb21tZXJjZSB2YWx1ZXNcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmRhdGFMYXllci5wdXNoKHsgZWNvbW1lcmNlOiBudWxsIH0pO1xuXHRcdH1cblxuXHRcdC8vIEFkZCBuZXcgZXZlbnRcblx0XHRyZXR1cm4gd2luZG93LmRhdGFMYXllci5wdXNoKHtcblx0XHRcdGV2ZW50OiBuYW1lLFxuXHRcdFx0Zmlyc3RPY2N1cmFuY2U6IHRoaXMuaXNGaXJzdE9jY3VyYW5jZShuYW1lKSxcblx0XHRcdC4uLnBheWxvYWQsXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBSZXR1cm4gd2hldGhlciB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBldmVudCBoYXMgZmlyZWQuIFRoaXMgY2FuIGJlXG5cdC8vIGhlbHBlZnVsIGluIGNvbmp1bmN0aW9uIHRvIHByZXZlbnQgZG91YmxlIHRyaWdnZXJpbmcgZnJvbSBldmVudHMgdGhhdCBhcmVcblx0Ly8gYWxzbyBmaXJlZCBpbiB0aGUgaW50aWFsIHBhZ2UgcmVzcG9uc2UgZnJvbSBTaG9waWZ5LCBsaWtlIFBhZ2UgVmlld3MuXG5cdGlzRmlyc3RPY2N1cmFuY2UoZXZlbnROYW1lKSB7XG5cdFx0aWYgKEFycmF5LmZyb20odGhpcy5vY2N1cmFuY2VzKS5pbmNsdWRlcyhldmVudE5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRoaXMub2NjdXJhbmNlcy5wdXNoKGV2ZW50TmFtZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuLy8gU1RPUkVGUk9OVCBRVUVSSUVTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuLy8gUHJvZHVjdCBWYXJpYW50IGZyYWdtZW50XG5leHBvcnQgdmFyIHByb2R1Y3RWYXJpYW50RnJhZ21lbnQgPSBgXFxcbmZyYWdtZW50IHZhcmlhbnQgb24gUHJvZHVjdFZhcmlhbnQge1xuXHRpZFxuXHRza3Vcblx0dGl0bGVcblx0cHJpY2Vcblx0Y29tcGFyZUF0UHJpY2Vcblx0aW1hZ2UgeyBvcmlnaW5hbFNyYyB9XG5cdHByb2R1Y3Qge1xuXHRcdGlkXG5cdFx0dGl0bGVcblx0XHRoYW5kbGVcblx0XHRwcm9kdWN0VHlwZVxuXHRcdHZlbmRvclxuXHRcdGNvbGxlY3Rpb25zKGZpcnN0OiAxKSB7XG5cdFx0XHRlZGdlcyB7XG5cdFx0XHRcdG5vZGUge1xuXHRcdFx0XHRcdHRpdGxlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cXFxuYDtcblxuLy8gR3JhcGhxbCBxdWVyeSB0byBmZXRjaCBhIHZhcmlhbnQgYnkgaWRcbmV4cG9ydCB2YXIgZmV0Y2hWYXJpYW50UXVlcnkgPSBgXFxcbnF1ZXJ5KCRpZDogSUQhKSB7XG5cdG5vZGUoaWQ6ICRpZCkge1xuXHRcdC4uLnZhcmlhbnRcblx0fVxufVxuJHtwcm9kdWN0VmFyaWFudEZyYWdtZW50fVxcXG5gO1xuXG4vLyBHcmFwaHFsIHF1ZXJ5IHRvIGZldGNoIGEgY2FydCBieSBpZFxuZXhwb3J0IHZhciBmZXRjaENhcnRRdWVyeSA9IGBcXFxucXVlcnkoJGlkOiBJRCEpIHtcblx0bm9kZTogY2FydChpZDogJGlkKSB7XG5cdFx0Li4uIG9uIENhcnQge1xuXHRcdFx0aWRcblx0XHRcdHdlYlVybDogY2hlY2tvdXRVcmxcblx0XHRcdGVzdGltYXRlZENvc3Qge1xuXHRcdFx0XHRzdWJ0b3RhbEFtb3VudCB7IGFtb3VudCB9XG5cdFx0XHRcdHRvdGFsQW1vdW50IHsgYW1vdW50IH1cblx0XHRcdH1cblx0XHRcdGxpbmVJdGVtczogbGluZXMgKGZpcnN0OiAyNTApIHtcblx0XHRcdFx0ZWRnZXMge1xuXHRcdFx0XHRcdG5vZGUge1xuXHRcdFx0XHRcdFx0Li4uIG9uIENhcnRMaW5lIHtcblx0XHRcdFx0XHRcdFx0aWRcblx0XHRcdFx0XHRcdFx0cXVhbnRpdHlcblx0XHRcdFx0XHRcdFx0dmFyaWFudDogbWVyY2hhbmRpc2UgeyAuLi52YXJpYW50IH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiR7cHJvZHVjdFZhcmlhbnRGcmFnbWVudH1cXFxuYDtcblxuLy8gR3JhcGhxbCBxdWVyeSB0byBmZXRjaCBhIGNoZWNrb3V0IGJ5IGlkXG5leHBvcnQgdmFyIGZldGNoQ2hlY2tvdXRRdWVyeSA9IGBcXFxucXVlcnkoJGlkOiBJRCEpIHtcblx0bm9kZShpZDogJGlkKSB7XG5cdFx0Li4uIG9uIENoZWNrb3V0IHtcblx0XHRcdGlkXG5cdFx0XHR3ZWJVcmxcblx0XHRcdHN1YnRvdGFsUHJpY2Vcblx0XHRcdHRvdGFsUHJpY2Vcblx0XHRcdGxpbmVJdGVtcyAoZmlyc3Q6IDI1MCkge1xuXHRcdFx0XHRlZGdlcyB7XG5cdFx0XHRcdFx0bm9kZSB7XG5cdFx0XHRcdFx0XHQuLi4gb24gQ2hlY2tvdXRMaW5lSXRlbSB7XG5cdFx0XHRcdFx0XHRcdGlkXG5cdFx0XHRcdFx0XHRcdHF1YW50aXR5XG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQgeyAuLi52YXJpYW50IH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiR7cHJvZHVjdFZhcmlhbnRGcmFnbWVudH1cXFxuYDtcblxuLy8gTk9OLUlOU1RBTkNFIEhFTFBFUlMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuLy8gRXJyb3Igb2JqZWN0IHdpdGggY3VzdG9tIGhhbmRsaW5nXG5jbGFzcyBTdG9yZWZyb250RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHN0YXRpYyBpbml0Q2xhc3MoKSB7XG5cdFx0dGhpcy5wcm90b3R5cGUubmFtZSA9ICdTdG9yZWZyb250RXJyb3InO1xuXHR9XG5cdGNvbnN0cnVjdG9yKGVycm9ycywgcGF5bG9hZCkge1xuXHRcdHN1cGVyKGVycm9ycy5tYXAoKGUpID0+IGUuZGVidWdNZXNzYWdlIHx8IGUubWVzc2FnZSkuam9pbignLCAnKSk7XG5cdFx0dGhpcy5lcnJvcnMgPSBlcnJvcnMubWFwKChlKSA9PiBKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxufVxuU3RvcmVmcm9udEVycm9yLmluaXRDbGFzcygpO1xuXG4vLyBHZXQgdGhlIGlkIGZyb20gYSBTaG9waWZ5IGdpZDovLyBzdHlsZSBpZC4gIFRoaXMgc3RyaXBzIGV2ZXJ5dGhpbmcgYnV0IHRoZVxuLy8gbGFzdCBwYXJ0IG9mIHRoZSBzdHJpbmcuICBTbyBnaWQ6Ly9zaG9waWZ5L1Byb2R1Y3RWYXJpYW50LzM0NjQxODc5MTA1NTgxXG4vLyBiZWNvbWVzIDM0NjQxODc5MTA1NTgxXG4vLyBodHRwczovL3JlZ2V4MTAxLmNvbS9yLzNGSXBsTC8xXG52YXIgZ2V0U2hvcGlmeUlkID0gZnVuY3Rpb24gKGlkKSB7XG5cdGlmIChTdHJpbmcoaWQpLm1hdGNoKC9eXFxkKyQvKSkge1xuXHRcdHJldHVybiBpZDtcblx0fSAvLyBBbHJlYWR5IHNpbXBsZSBpZFxuXHRpZiAoIWlkLm1hdGNoKC9eZ2lkOlxcL1xcLy8pKSB7XG5cdFx0aWQgPSBhdG9iKGlkKTtcblx0fSAvLyBEZS1iYXNlNjRcblx0cmV0dXJuIF9fZ3VhcmRfXyhpZC5tYXRjaCgvXFwvKFteXFwvXSspJC8pLCAoeCkgPT4geFsxXSk7IC8vIEdldCB0aGUgaWQgZnJvbSB0aGUgZ2lkXG59O1xuXG4vLyBHZXQgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgd2l0aCByZXNwZWN0IHRvIGl0J3MgcGFyZW50XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTkxMzk4NC81OTE2MFxudmFyIGdldEVsUG9zaXRpb24gPSBmdW5jdGlvbiAoZWwpIHtcblx0bGV0IGkgPSAxOyAvLyBUaGUgZmlyc3QgcG9zaXRpb24gd2lsbCBiZSBgMWBcblx0d2hpbGUgKChlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpICE9PSBudWxsKSB7XG5cdFx0aSsrO1xuXHR9XG5cdHJldHVybiBpO1xufTtcblxuLy8gRmlyZSBjYWxsYmFjayB3aGVuIGluIHZpZXdwb3J0LiBOb3QgZXhwb3NpbmcgYSB3YXkgdG8gbWFudWFsbHkgZGlzY29ubmVjdCBvclxuLy8gdW5vYnNlcnZlIGJlY2F1c2UgaXQgX3Nob3VsZF8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQgd2hlbiBlbCBpcyByZW1vdmVkLlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzUxMTA2MjYyLzU5MTYwXG52YXIgd2hlbkZpcnN0SW5WaWV3cG9ydCA9IGZ1bmN0aW9uIChlbCwgY2FsbGJhY2spIHtcblx0dmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChbeyBpc0ludGVyc2VjdGluZyB9XSkge1xuXHRcdGlmICghaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdHJldHVybiBjYWxsYmFjaygpO1xuXHR9KTtcblx0cmV0dXJuIG9ic2VydmVyLm9ic2VydmUoZWwpO1xufTtcblxuZnVuY3Rpb24gX19ndWFyZF9fKHZhbHVlLCB0cmFuc2Zvcm0pIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGxcblx0XHQ/IHRyYW5zZm9ybSh2YWx1ZSlcblx0XHQ6IHVuZGVmaW5lZDtcbn1cblxud2luZG93Lmd0bUVjb21tID0gbmV3IFNob3BpZnlHdG1JbnN0cnVtZW50b3Ioe1xuXHRjdXJyZW5jeUNvZGU6IHdpbmRvdy5jdF9ndG1fc2V0dGluZ3MuY3VycmVuY3ksXG59KTsiXX0=
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

		xhook.after(function(request, response) {
			let url = String(response.url);
			if (
				url.includes(window.routes.cart_add_url) ||
				url.includes(window.routes.cart_change_url) ||
				url.includes(window.routes.cart_update_url)
			) {
				jQuery.getJSON(
					`${settings.shop_url}/cart`,
					function(response) {
						let type,
							new_cart = {
								products: [],
							},
							old_cart = current_cart,
							cart = {
								products: response.items.map(function(
									line_item,
								) {
									return {
										id: line_item.id,
										quantity: line_item.quantity,
									};
								}),
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

						current_cart = {
							products: response.items.map(function(line_item) {
								return {
									id: line_item.id,
									quantity: line_item.quantity,
								};
							}),
						};
					},
				);
			}
		});
	});
}

document.addEventListener('DOMContentLoaded', ct_init_gtm_shopify);