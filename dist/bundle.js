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
				this.storeUrl = window.ct_gtm_settings.shop_url || "".concat(window.location.protocol, "//").concat(window.location.host);
				this.SHOPIFY_URL = window.ct_gtm_settings.shop_url || "".concat(window.location.protocol, "//").concat(window.location.host);
				this.storefrontToken = window.ct_gtm_settings.storefront_token;
				this.SHOPIFY_STOREFRONT_TOKEN = window.ct_gtm_settings.storefront_token;
				this.currencyCode = window.ct_gtm_settings.currency || 'USD';
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
					var productUrl, variantId, prodFallback;
					var product = variant.product;

					if (typeof product.collections !== 'undefined' && product.collections.length) {
						prodFallback = product.collections.edges[0].node.title;
					} else {
						prodFallback = '';
					} // Product level info


					return {
						productId: getShopifyId(product.id),
						productTitle: product.title,
						productVariantTitle: "".concat(product.title, " - ").concat(variant.title),
						productType: product.productType || product.type || prodFallback,
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
						var myHeaders, response;
						return _regenerator["default"].wrap(function _callee12$(_context12) {
							while (1) {
								switch (_context12.prev = _context12.next) {
									case 0:
										window.testpayload = payload;
										myHeaders = new Headers();
										myHeaders.append('Accept', 'application/json');
										myHeaders.append('Content-Type', 'application/json');
										myHeaders.append('X-Shopify-Storefront-Access-Token', this.storefrontToken);
										_context12.next = 7;
										return fetch("".concat(this.storeUrl, "/api/2021-10/graphql"), {
											method: 'POST',
											headers: myHeaders,
											body: JSON.stringify(payload),
											redirect: 'follow'
										}).then(function(response) {
											return response.json();
										}).then(function(json) {
											return json;
										})["catch"](function(error) {
											console.log('error', error);
											throw new StorefrontError(response.data.errors, payload);
										});

									case 7:
										response = _context12.sent;
										return _context12.abrupt("return", response.data);

									case 9:
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

		if (window.Shopify && window.Shopify.Checkout) {
			sessionStorage.removeItem('ct-cart-content');
		}

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
		"@babel/runtime/regenerator": 23
	}]
}, {}, [24])
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

	if (
		typeof window.routes.cart_add_url === 'undefined' ||
		typeof window.routes.cart_change_url === 'undefined' ||
		typeof window.routes.cart_update_url === 'undefined'
	) {
		window.routes = {
			cart_add_url: '/cart/add',
			cart_change_url: '/cart/change',
			cart_update_url: '/cart/update',
		};
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