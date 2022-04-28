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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlRnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlci5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwic3JjL2N0LWd0bS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0FBaUIsRUFBakIsQ0FBUDtBQUNBLENBVEQ7O0FBV0EsU0FBUyxTQUFULENBQW1CLEtBQW5CLEVBQTBCLFNBQTFCLEVBQXFDO0FBQ3BDLFNBQU8sT0FBTyxLQUFQLEtBQWlCLFdBQWpCLElBQWdDLEtBQUssS0FBSyxJQUExQyxHQUNKLFNBQVMsQ0FBQyxLQUFELENBREwsR0FFSixTQUZIO0FBR0E7O0FBRUQsTUFBTSxDQUFDLFFBQVAsR0FBa0IsSUFBSSxzQkFBSixDQUEyQjtBQUM1QyxFQUFBLFlBQVksRUFBRSxNQUFNLENBQUMsZUFBUCxDQUF1QjtBQURPLENBQTNCLENBQWxCOztBQUdBLElBQUksTUFBTSxDQUFDLE9BQVAsSUFBa0IsTUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFyQyxFQUErQztBQUM5QyxFQUFBLGNBQWMsQ0FBQyxVQUFmLENBQTBCLGlCQUExQjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2ssIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3MsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVGdW5jdGlvbiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBpc05hdGl2ZUZ1bmN0aW9uID0gcmVxdWlyZShcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiKTtcblxudmFyIGNvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdC5qc1wiKTtcblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfd3JhcE5hdGl2ZVN1cGVyLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8vIE1haW4gY2xhc3MsIHdoaWNoIGFjY2VwdHMgY29uZmlndXJhdGlvbiBpbiBpdCdzIGNvbnN0cnVjdG9yIGFuZCBleHBvc2VzXG4vLyBoZWxwZXIgbWV0aG9kc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcGlmeUd0bUluc3RydW1lbnRvciB7XG5cdC8vIFNhdmUgc2V0dGluZ3MgYW5kIGh5ZHJhdGUgdmFyc1xuXHRjb25zdHJ1Y3RvcihwYXJhbSkge1xuXHRcdGlmIChwYXJhbSA9PSBudWxsKSB7XG5cdFx0XHRwYXJhbSA9IHt9O1xuXHRcdH1cblx0XHRjb25zdCB7XG5cdFx0XHRkaXNhYmxlRWNvbW1lcmNlUHJvcGVydHkgPSBmYWxzZSxcblx0XHRcdGVuYWJsZUNoZWNrb3V0RWNvbW1lcmNlUHJvcGVydHkgPSB0cnVlLFxuXHRcdH0gPSBwYXJhbTtcblx0XHR0aGlzLmRlYnVnID0gZmFsc2U7XG5cdFx0dGhpcy5zdG9yZVVybCA9IHdpbmRvdy5jdF9ndG1fc2V0dGluZ3Muc2hvcF91cmwgfHwgYCR7IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCB9Ly8keyB3aW5kb3cubG9jYXRpb24uaG9zdCB9YDtcblx0XHR0aGlzLlNIT1BJRllfVVJMID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5zaG9wX3VybCB8fCBgJHsgd2luZG93LmxvY2F0aW9uLnByb3RvY29sIH0vLyR7IHdpbmRvdy5sb2NhdGlvbi5ob3N0IH1gO1xuXHRcdHRoaXMuc3RvcmVmcm9udFRva2VuID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5zdG9yZWZyb250X3Rva2VuO1xuXHRcdHRoaXMuU0hPUElGWV9TVE9SRUZST05UX1RPS0VOID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5zdG9yZWZyb250X3Rva2VuO1xuXHRcdHRoaXMuY3VycmVuY3lDb2RlID0gd2luZG93LmN0X2d0bV9zZXR0aW5ncy5jdXJyZW5jeSB8fCAnVVNEJztcblx0XHR0aGlzLmRpc2FibGVFY29tbWVyY2VQcm9wZXJ0eSA9IGRpc2FibGVFY29tbWVyY2VQcm9wZXJ0eTtcblx0XHR0aGlzLmVuYWJsZUNoZWNrb3V0RWNvbW1lcmNlUHJvcGVydHkgPSBlbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5O1xuXHRcdHRoaXMub2NjdXJhbmNlcyA9IFtdO1xuXHR9XG5cblx0Ly8gQVBJICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gQSB2aWV3IG9mIGEgcHJvZHVjdCBlbGVtZW50XG5cdGFzeW5jIHByb2R1Y3RJbXByZXNzaW9uKHZhcmlhbnRQYXlsb2FkLCB7IGVsLCBsaXN0LCBwb3NpdGlvbiB9ID0ge30pIHtcblx0XHRsZXQgZmxhdFZhcmlhbnQgPSBbXTtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgd2luZG93ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB2YXJpYW50UGF5bG9hZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhcmlhbnRQYXlsb2FkLm5hbWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhbnRQYXlsb2FkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghKGZsYXRWYXJpYW50W2ZsYXRWYXJpYW50Lmxlbmd0aF0gPSBhd2FpdCB0aGlzLmdldEZsYXRWYXJpYW50KHZhcmlhbnRQYXlsb2FkW2ldKSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBNYWtlIGRlZmF1bHRzXG5cdFx0aWYgKGVsICYmIHBvc2l0aW9uID09IG51bGwpIHtcblx0XHRcdHBvc2l0aW9uID0gZ2V0RWxQb3NpdGlvbihlbCk7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmbGF0VmFyaWFudC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZmxhdFZhcmlhbnRbaV0gPSB0aGlzLm1ha2VVYVByb2R1Y3RGaWVsZE9iamVjdChmbGF0VmFyaWFudFtpXSk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBldmVudFxuXHRcdGNvbnN0IGV2ZW50UHVzaGVyID0gKCkgPT5cblx0XHRcdHRoaXMucHVzaEV2ZW50KCdQcm9kdWN0IEltcHJlc3Npb24nLCB7XG5cdFx0XHRcdGxpc3ROYW1lOiBsaXN0LFxuXHRcdFx0XHRsaXN0UG9zaXRpb246IHBvc2l0aW9uLFxuXHRcdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0XHRpbXByZXNzaW9uczoge1xuXHRcdFx0XHRcdFx0aXRlbXM6IGZsYXRWYXJpYW50LFxuXHRcdFx0XHRcdFx0bGlzdCxcblx0XHRcdFx0XHRcdHBvc2l0aW9uLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRpZiAoZWwpIHtcblx0XHRcdHJldHVybiB3aGVuRmlyc3RJblZpZXdwb3J0KGVsLCBldmVudFB1c2hlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBldmVudFB1c2hlcigpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEEgY2xpY2sgb24gYSBwcm9kdWN0XG5cdGFzeW5jIHByb2R1Y3RDbGljayhcblx0XHR2YXJpYW50UGF5bG9hZCxcblx0XHR7IGVsLCBsaXN0LCBwb3NpdGlvbiwgY2xpY2tFdmVudCB9ID0ge30sXG5cdCkge1xuXHRcdGxldCBjbGlja1VybCwgZmxhdFZhcmlhbnQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFByZXZlbnQgbmF2aWdhdGlvblxuXHRcdGlmIChcblx0XHRcdChjbGlja1VybCA9IF9fZ3VhcmRfXyhcblx0XHRcdFx0Y2xpY2tFdmVudCAhPSBudWxsID8gY2xpY2tFdmVudC5jdXJyZW50VGFyZ2V0IDogdW5kZWZpbmVkLFxuXHRcdFx0XHQoeCkgPT4geC5ocmVmLFxuXHRcdFx0KSlcblx0XHQpIHtcblx0XHRcdGlmIChjbGlja0V2ZW50ICE9IG51bGwpIHtcblx0XHRcdFx0Y2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEdldCB2YXJpYW50XG5cdFx0aWYgKCEoZmxhdFZhcmlhbnQgPSBhd2FpdCB0aGlzLmdldEZsYXRWYXJpYW50KHZhcmlhbnRQYXlsb2FkKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBNYWtlIGRlZmF1bHRzXG5cdFx0aWYgKGVsICYmIHBvc2l0aW9uID09IG51bGwpIHtcblx0XHRcdHBvc2l0aW9uID0gZ2V0RWxQb3NpdGlvbihlbCk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBldmVudFxuXHRcdHRoaXMucHVzaEV2ZW50KCdQcm9kdWN0IENsaWNrJywge1xuXHRcdFx0Li4uZmxhdFZhcmlhbnQsXG5cdFx0XHRsaXN0TmFtZTogbGlzdCxcblx0XHRcdGxpc3RQb3NpdGlvbjogcG9zaXRpb24sXG5cdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0Y2xpY2s6IHtcblx0XHRcdFx0XHQuLi4oIWxpc3Rcblx0XHRcdFx0XHRcdD8ge31cblx0XHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbkZpZWxkOiB7IGxpc3QgfSxcblx0XHRcdFx0XHRcdCAgfSksXG5cdFx0XHRcdFx0cHJvZHVjdHM6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0Li4udGhpcy5tYWtlVWFQcm9kdWN0RmllbGRPYmplY3QoZmxhdFZhcmlhbnQpLFxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHQvLyBGaW5pc2ggbmF2aWdhdGlvblxuXHRcdGlmIChjbGlja1VybCkge1xuXHRcdFx0cmV0dXJuICh3aW5kb3cubG9jYXRpb24gPSBjbGlja1VybCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVHlwaWNhbGx5IHVzZWQgZm9yIHZpZXcgb2YgUERQIHBhZ2Vcblx0YXN5bmMgdmlld1Byb2R1Y3REZXRhaWxzKHZhcmlhbnRQYXlsb2FkKSB7XG5cdFx0bGV0IGZsYXRWYXJpYW50O1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBHZXQgdmFyaWFudFxuXHRcdGlmICghKGZsYXRWYXJpYW50ID0gYXdhaXQgdGhpcy5nZXRGbGF0VmFyaWFudCh2YXJpYW50UGF5bG9hZCkpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBldmVudFxuXHRcdHJldHVybiB0aGlzLnB1c2hFdmVudCgnVmlldyBQcm9kdWN0IERldGFpbHMnLCB7XG5cdFx0XHQuLi5mbGF0VmFyaWFudCxcblx0XHRcdGVjb21tZXJjZToge1xuXHRcdFx0XHRkZXRhaWw6IHtcblx0XHRcdFx0XHRwcm9kdWN0czogW3RoaXMubWFrZVVhUHJvZHVjdEZpZWxkT2JqZWN0KGZsYXRWYXJpYW50KV0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gVXNlZCB3aGVudmVyIHRoZXJlIGlzIGEgcG9zaXRpdmUgY2hhbmdlIGluIHRoZSBxdWFudGl0eSBvZiBhIHByb2R1Y3QgaW5cblx0Ly8gdGhlIGNhcnQuXG5cdGFkZFRvQ2FydCh2YXJpYW50UGF5bG9hZCwgcXVhbnRpdHkpIHtcblx0XHRyZXR1cm4gdGhpcy51cGRhdGVRdWFudGl0eShcblx0XHRcdHZhcmlhbnRQYXlsb2FkLFxuXHRcdFx0cXVhbnRpdHksXG5cdFx0XHQnQWRkIHRvIENhcnQnLFxuXHRcdFx0J2FkZCcsXG5cdFx0KTtcblx0fVxuXG5cdC8vIFVzZWQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBuZWdhdGl2ZSBjaGFuZ2UgaW4gdGhlIHF1YW50aXR5IG9mIGEgcHJvZHVjdCBpblxuXHQvLyB0aGUgY2FydC5cblx0cmVtb3ZlRnJvbUNhcnQodmFyaWFudFBheWxvYWQsIHF1YW50aXR5KSB7XG5cdFx0cmV0dXJuIHRoaXMudXBkYXRlUXVhbnRpdHkoXG5cdFx0XHR2YXJpYW50UGF5bG9hZCxcblx0XHRcdHF1YW50aXR5LFxuXHRcdFx0J1JlbW92ZSBmcm9tIENhcnQnLFxuXHRcdFx0J3JlbW92ZScsXG5cdFx0KTtcblx0fVxuXG5cdC8vIFVzZWQgYm90aCBmaXJlIHRoZSBgVXBkYXRlIFF1YW50aXR5YCBldmVudCBidXQgYWxzbyBhcyBhIGhlbHBlciBmb3IgdGhlXG5cdC8vIGFkZCBhbmQgcmVtb3ZlIG1ldGhvZHMuXG5cdGFzeW5jIHVwZGF0ZVF1YW50aXR5KFxuXHRcdHZhcmlhbnRQYXlsb2FkLFxuXHRcdHF1YW50aXR5LFxuXHRcdGd0bUV2ZW50ID0gJ1VwZGF0ZSBRdWFudGl0eScsXG5cdFx0ZWNvbW1lcmNlQWN0aW9uLFxuXHQpIHtcblx0XHRsZXQgZmxhdFZhcmlhbnQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEdldCB2YXJpYW50XG5cdFx0aWYgKCEoZmxhdFZhcmlhbnQgPSBhd2FpdCB0aGlzLmdldEZsYXRWYXJpYW50KHZhcmlhbnRQYXlsb2FkKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBGaXJlIHRoZSBldmVudFxuXHRcdHJldHVybiB0aGlzLnB1c2hFdmVudChndG1FdmVudCwge1xuXHRcdFx0Li4uZmxhdFZhcmlhbnQsXG5cdFx0XHRxdWFudGl0eSxcblxuXHRcdFx0Ly8gQ29uZGl0aW9uYWxseSBhZGQgZW5oYW5jZWQgZWNvbW1lcmNlIGFjdGlvblxuXHRcdFx0Li4uKCFlY29tbWVyY2VBY3Rpb25cblx0XHRcdFx0PyB7fVxuXHRcdFx0XHQ6IHtcblx0XHRcdFx0XHRcdGVjb21tZXJjZToge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW5jeUNvZGU6IHRoaXMuY3VycmVuY3lDb2RlLFxuXHRcdFx0XHRcdFx0XHRbZWNvbW1lcmNlQWN0aW9uXToge1xuXHRcdFx0XHRcdFx0XHRcdHByb2R1Y3RzOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW1zOiB0aGlzLm1ha2VVYVByb2R1Y3RGaWVsZE9iamVjdChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGF0VmFyaWFudCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0cXVhbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHQgIH0pLFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gRmlyZSBhbiBldmVudCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjYXJ0XG5cdGFzeW5jIGNhcnRVcGRhdGVkKGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCkge1xuXHRcdGxldCBzaW1wbGlmaWVkQ2hlY2tvdXQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHQoc2ltcGxpZmllZENoZWNrb3V0ID0gYXdhaXQgdGhpcy5nZXRTaW1wbGlmaWVkQ2hlY2tvdXQoXG5cdFx0XHRcdGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCxcblx0XHRcdCkpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoRXZlbnQoJ0NhcnQgVXBkYXRlZCcsIHNpbXBsaWZpZWRDaGVja291dCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRmlyZSBhbiBldmVudCB3aXRoIHRoZSBjdXJyZW50IHN0ZXAgb2YgdGhlIGNoZWNrb3V0IHByb2Nlc3Ncblx0YXN5bmMgY2hlY2tvdXQoY2hlY2tvdXRPckNhcnRQYXlsb2FkLCBjaGVja291dFN0ZXApIHtcblx0XHRsZXQgc2ltcGxpZmllZENoZWNrb3V0O1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0KHNpbXBsaWZpZWRDaGVja291dCA9IGF3YWl0IHRoaXMuZ2V0U2ltcGxpZmllZENoZWNrb3V0KFxuXHRcdFx0XHRjaGVja291dE9yQ2FydFBheWxvYWQsXG5cdFx0XHQpKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaEV2ZW50KCdDaGVja291dCcsIHtcblx0XHRcdFx0Y2hlY2tvdXRTdGVwLFxuXHRcdFx0XHQuLi5zaW1wbGlmaWVkQ2hlY2tvdXQsXG5cdFx0XHRcdC4uLighdGhpcy5lbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5XG5cdFx0XHRcdFx0PyB7fVxuXHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeUNvZGU6IHRoaXMuY3VycmVuY3lDb2RlLFxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrb3V0OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25GaWVsZDogeyBzdGVwOiBjaGVja291dFN0ZXAgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHByb2R1Y3RzOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1ha2VVYUNoZWNrb3V0UHJvZHVjdHMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2ltcGxpZmllZENoZWNrb3V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ICB9KSxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vdGlmeSBvZiBmaW5hbCBjaGVja291dCwgdXNpbmcgYXJyYXkgb2YgdmFyaWFudCBkYXRhIGZyb20gbGlxdWlkXG5cdGFzeW5jIHB1cmNoYXNlKGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCkge1xuXHRcdGxldCBzaW1wbGlmaWVkQ2hlY2tvdXQ7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHdpbmRvdyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHQoc2ltcGxpZmllZENoZWNrb3V0ID0gYXdhaXQgdGhpcy5nZXRTaW1wbGlmaWVkQ2hlY2tvdXQoXG5cdFx0XHRcdGNoZWNrb3V0T3JDYXJ0UGF5bG9hZCxcblx0XHRcdCkpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoRXZlbnQoJ1B1cmNoYXNlJywge1xuXHRcdFx0XHQuLi5zaW1wbGlmaWVkQ2hlY2tvdXQsXG5cdFx0XHRcdC4uLighdGhpcy5lbmFibGVDaGVja291dEVjb21tZXJjZVByb3BlcnR5XG5cdFx0XHRcdFx0PyB7fVxuXHRcdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0XHRlY29tbWVyY2U6IHtcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW5jeUNvZGU6IHRoaXMuY3VycmVuY3lDb2RlLFxuXHRcdFx0XHRcdFx0XHRcdHB1cmNoYXNlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25GaWVsZDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnIycgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpbXBsaWZpZWRDaGVja291dC5vcmRlck51bWJlciwgLy8gTWF0Y2hlcyBTaG9waWZ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldmVudWU6IHNpbXBsaWZpZWRDaGVja291dC50b3RhbFByaWNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXg6IHNpbXBsaWZpZWRDaGVja291dC50b3RhbFRheCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpcHBpbmc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2ltcGxpZmllZENoZWNrb3V0LnRvdGFsU2hpcHBpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvdXBvbjogc2ltcGxpZmllZENoZWNrb3V0LmRpc2NvdW50Q29kZXMuam9pbihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnLCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvZHVjdHM6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubWFrZVVhQ2hlY2tvdXRQcm9kdWN0cyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaW1wbGlmaWVkQ2hlY2tvdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQgIH0pLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ3VzdG9tZXIgaW5mb3JtYXRpb25cblx0aWRlbnRpZnlDdXN0b21lcihjdXN0b21lcikge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB3aW5kb3cgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMucHVzaEV2ZW50KCdJZGVudGlmeSBDdXN0b21lcicsIHtcblx0XHRcdGN1c3RvbWVySWQ6IGN1c3RvbWVyLmlkLFxuXHRcdFx0Y3VzdG9tZXJaaXA6IGN1c3RvbWVyLnppcCxcblx0XHRcdGN1c3RvbWVyRW1haWw6IGN1c3RvbWVyLmVtYWlsLFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gVkFSSUFOVCBEQVRBICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gVGFrZSBhIHZhcmlhbnRQYXlsb2FkLCB3aGljaCBtYXkgYmUgYW4gaWQgb3IgYW4gb2JqZWN0LCBhbmQgcmV0dXJuIGFuXG5cdC8vIG9iamVjdCB0aGF0IGNhbiBiZSBlYXNpbHkgY29uc3VtZWQgYnkgR1RNLlxuXHRhc3luYyBnZXRGbGF0VmFyaWFudCAodmFyaWFudFBheWxvYWQpIHtcblxuXHRcdGxldCBwcm9kdWN0cywgdmFyaWFudDtcblxuXHRcdGlmICh0eXBlb2YgdmFyaWFudFBheWxvYWQgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YXJpYW50UGF5bG9hZCA9PT0gJ2FycmF5Jykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYW50UGF5bG9hZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRwcm9kdWN0cy5wdXNoKHZhcmlhbnRQYXlsb2FkW2ldKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB2YXJpYW50UGF5bG9hZCA9IHByb2R1Y3RzW2ldO1xuXHRcdFx0XHQvLyBDb25kaXRpb2FsbHkgZmV0Y2ggZnJvbSBzdG9yZWZyb250IEFQSVxuXHRcdFx0XHR2YXJpYW50ID1cblx0XHRcdFx0XHR0eXBlb2YgdmFyaWFudFBheWxvYWQgPT09ICdvYmplY3QnXG5cdFx0XHRcdFx0XHQ/IHZhcmlhbnRQYXlsb2FkXG5cdFx0XHRcdFx0XHQ6IGF3YWl0IHRoaXMuZmV0Y2hWYXJpYW50KHZhcmlhbnRQYXlsb2FkKTtcblxuXHRcdFx0XHQvLyBWYWxpZGF0ZSB0aGUgdmFyaWFudCBhbmQgcmV0dXJuXG5cdFx0XHRcdGlmICh2YXJpYW50KSB7XG5cdFx0XHRcdFx0cHJvZHVjdHNbaV0gPSB0aGlzLm1ha2VGbGF0VmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignVmFyaWFudCBub3QgZm91bmQnLCB2YXJpYW50UGF5bG9hZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb2R1Y3RzO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENvbmRpdGlvYWxseSBmZXRjaCBmcm9tIHN0b3JlZnJvbnQgQVBJXG5cdFx0XHR2YXJpYW50ID1cblx0XHRcdFx0dHlwZW9mIHZhcmlhbnRQYXlsb2FkID09PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8gdmFyaWFudFBheWxvYWRcblx0XHRcdFx0XHQ6IGF3YWl0IHRoaXMuZmV0Y2hWYXJpYW50KHZhcmlhbnRQYXlsb2FkKTtcblxuXHRcdFx0Ly8gVmFsaWRhdGUgdGhlIHZhcmlhbnQgYW5kIHJldHVyblxuXHRcdFx0aWYgKHZhcmlhbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubWFrZUZsYXRWYXJpYW50KHZhcmlhbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1ZhcmlhbnQgbm90IGZvdW5kJywgdmFyaWFudFBheWxvYWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIExvb2t1cCBhIHByb2R1Y3QgdmFyaWFudCBieSBpZC4gSWQgbWF5IGJlIGEgc2ltcGxlIG51bWJlciBvciBhXG5cdC8vIGdpZDovL3Nob3BpZnkgc3RyaW5nXG5cdGFzeW5jIGZldGNoVmFyaWFudCh2YXJpYW50SWQpIHtcblx0XHRpZiAoIXZhcmlhbnRJZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXJpYW50SWQgPSBnZXRTaG9waWZ5SWQodmFyaWFudElkKTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5U3RvcmVmcm9udEFwaSh7XG5cdFx0XHR2YXJpYWJsZXM6IHtcblx0XHRcdFx0aWQ6IGJ0b2EoJ2dpZDovL3Nob3BpZnkvUHJvZHVjdFZhcmlhbnQvJyArIHZhcmlhbnRJZCksXG5cdFx0XHR9LFxuXHRcdFx0cXVlcnk6IGZldGNoVmFyaWFudFF1ZXJ5LFxuXHRcdH0pO1xuXHRcdHJldHVybiByZXN1bHQubm9kZTtcblx0fVxuXG5cdC8vIE1ha2UgZmxhdCBvYmplY3QgZnJvbSBhIHZhcmlhbnQgd2l0aCBuZXN0ZWQgcHJvZHVjdCBkYXRhXG5cdG1ha2VGbGF0VmFyaWFudCh2YXJpYW50KSB7XG5cdFx0bGV0IHByb2R1Y3RVcmwsIHZhcmlhbnRJZCwgcHJvZEZhbGxiYWNrO1xuXHRcdGNvbnN0IHsgcHJvZHVjdCB9ID0gdmFyaWFudDtcblxuXHRcdGlmICh0eXBlb2YgcHJvZHVjdC5jb2xsZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvZHVjdC5jb2xsZWN0aW9ucy5sZW5ndGgpIHtcblx0XHRcdHByb2RGYWxsYmFjayA9IHByb2R1Y3QuY29sbGVjdGlvbnMuZWRnZXNbIDAgXS5ub2RlLnRpdGxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcm9kRmFsbGJhY2sgPSAnJztcblx0XHR9XG5cblx0XHQvLyBQcm9kdWN0IGxldmVsIGluZm9cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvZHVjdElkOiBnZXRTaG9waWZ5SWQocHJvZHVjdC5pZCksXG5cdFx0XHRwcm9kdWN0VGl0bGU6IHByb2R1Y3QudGl0bGUsXG5cdFx0XHRwcm9kdWN0VmFyaWFudFRpdGxlOiBgJHtwcm9kdWN0LnRpdGxlfSAtICR7dmFyaWFudC50aXRsZX1gLFxuXHRcdFx0cHJvZHVjdFR5cGU6XG5cdFx0XHRcdHByb2R1Y3QucHJvZHVjdFR5cGUgfHxcblx0XHRcdFx0cHJvZHVjdC50eXBlIHx8XG5cdFx0XHRcdHByb2RGYWxsYmFjayxcblx0XHRcdHByb2R1Y3RWZW5kb3I6IHByb2R1Y3QudmVuZG9yLFxuXHRcdFx0cHJvZHVjdFVybDpcblx0XHRcdFx0KHByb2R1Y3RVcmwgPSBgJHt0aGlzLnN0b3JlVXJsfS9wcm9kdWN0cy8ke3Byb2R1Y3QuaGFuZGxlfWApLFxuXG5cdFx0XHQvLyBWYXJpYW50IGxldmVsIGRhdGFcblx0XHRcdHNrdTogdmFyaWFudC5za3UsXG5cdFx0XHRwcmljZTogdmFyaWFudC5wcmljZSxcblx0XHRcdGNvbXBhcmVBdFByaWNlOiB2YXJpYW50LmNvbXBhcmVBdFByaWNlLFxuXHRcdFx0dmFyaWFudElkOiAodmFyaWFudElkID0gZ2V0U2hvcGlmeUlkKHZhcmlhbnQuaWQpKSxcblx0XHRcdHZhcmlhbnRUaXRsZTogdmFyaWFudC50aXRsZSxcblx0XHRcdHZhcmlhbnRJbWFnZTpcblx0XHRcdFx0KHZhcmlhbnQuaW1hZ2UgIT0gbnVsbFxuXHRcdFx0XHRcdD8gdmFyaWFudC5pbWFnZS5vcmlnaW5hbFNyY1xuXHRcdFx0XHRcdDogdW5kZWZpbmVkKSB8fCB2YXJpYW50LmltYWdlLFxuXHRcdFx0dmFyaWFudFVybDogYCR7cHJvZHVjdFVybH0/dmFyaWFudD0ke3ZhcmlhbnRJZH1gLFxuXHRcdH07XG5cdH1cblxuXHQvLyBDb252ZXJ0IGEgU2hvcGlmeSB2YXJpYW50IG9iamVjdCB0byBhIFVBIHByb2R1Y3RGaWVsZE9iamVjdC4gSSdtXG5cdC8vIGNvbWJpbmluZyB0aGUgcHJvZHVjdCBhbmQgdmFyaWFudCBuYW1lIGJlY2F1c2UgdGhhdCdzIHdoYXQgU2hvcGlmeSBkb2VzXG5cdC8vIHdpdGggaXQncyBvd24gZXZlbnRzLlxuXHQvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZW5oYW5jZWQtZWNvbW1lcmNlI3Byb2R1Y3QtZGF0YVxuXHRtYWtlVWFQcm9kdWN0RmllbGRPYmplY3QoZmxhdFZhcmlhbnQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IGZsYXRWYXJpYW50LnNrdSxcblx0XHRcdG5hbWU6IGZsYXRWYXJpYW50LnByb2R1Y3RWYXJpYW50VGl0bGUsXG5cdFx0XHRicmFuZDogZmxhdFZhcmlhbnQucHJvZHVjdFZlbmRvcixcblx0XHRcdGNhdGVnb3J5OiBmbGF0VmFyaWFudC5wcm9kdWN0VHlwZSxcblx0XHRcdHZhcmlhbnQ6IGZsYXRWYXJpYW50LnZhcmlhbnRUaXRsZSxcblx0XHRcdHByaWNlOiBmbGF0VmFyaWFudC5wcmljZSxcblx0XHR9O1xuXHR9XG5cblx0Ly8gQ0hFQ0tPVVQgREFUQSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gVGFrZSBhIGNoZWNrb3V0UGF5bG9hZCwgd2hpY2ggbWF5IGJlIGFuIGlkIG9yIGFuIG9iamVjdCwgYW5kIHJldHVybiB0aGVcblx0Ly8gU2hvcGlmeSBjaGVja291dCBvYmplY3QgdGhhdCBoYXMgYmVlbiBzaW1wbGlmaWVkIGEgYml0LlxuXHRhc3luYyBnZXRTaW1wbGlmaWVkQ2hlY2tvdXQoY2hlY2tvdXRPckNhcnRQYXlsb2FkKSB7XG5cdFx0Ly8gQ29uZGl0aW9hbGx5IGZldGNoIGZyb20gc3RvcmVmcm9udCBBUElcblx0XHRjb25zdCBjaGVja291dCA9XG5cdFx0XHR0eXBlb2YgY2hlY2tvdXRPckNhcnRQYXlsb2FkID09PSAnb2JqZWN0J1xuXHRcdFx0XHQ/IGNoZWNrb3V0T3JDYXJ0UGF5bG9hZFxuXHRcdFx0XHQ6IGF3YWl0IHRoaXMuZmV0Y2hDaGVja291dChjaGVja291dE9yQ2FydFBheWxvYWQpO1xuXG5cdFx0Ly8gVmFsaWRhdGUgdGhlIGNoZWNrb3V0IGFuZCByZXR1cm5cblx0XHRpZiAoIWNoZWNrb3V0KSB7XG5cdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcblx0XHRcdFx0J0NoZWNrb3V0IG9yIENhcnQgbm90IGZvdW5kJyxcblx0XHRcdFx0Y2hlY2tvdXRPckNhcnRQYXlsb2FkLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubWFrZVNpbXBsaWZpZWRDaGVja291dChjaGVja291dCk7XG5cdH1cblxuXHQvLyBMb29rdXAgYSBjaGVja291dCBvciBjYXJ0IGJ5IGlkLiBJZCBzaG91bGQgYmUgYSBnaWQ6Ly9zaG9waWZ5IHN0cmluZ1xuXHRhc3luYyBmZXRjaENoZWNrb3V0KGNoZWNrb3V0T3JDYXJ0SWQpIHtcblx0XHQvLyBEZXRlcm1pbmUgaWYgY2FydCBvZiBjaGVja291dCByZXF1ZXN0XG5cdFx0Y29uc3QgW2FsbCwgdHlwZV0gPSBhdG9iKGNoZWNrb3V0T3JDYXJ0SWQpLm1hdGNoKFxuXHRcdFx0L2dpZDpcXC9cXC9zaG9waWZ5XFwvKFxcdyspLyxcblx0XHQpO1xuXG5cdFx0Ly8gR2V0IHRoZSBkYXRhXG5cdFx0Y29uc3QgeyBub2RlIH0gPSBhd2FpdCB0aGlzLnF1ZXJ5U3RvcmVmcm9udEFwaSh7XG5cdFx0XHRxdWVyeTogKCgpID0+IHtcblx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnQ2FydCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmV0Y2hDYXJ0UXVlcnk7XG5cdFx0XHRcdFx0Y2FzZSAnQ2hlY2tvdXQnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGZldGNoQ2hlY2tvdXRRdWVyeTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgYFVua25vd24gdHlwZTogJHt0eXBlfWA7XG5cdFx0XHRcdH1cblx0XHRcdH0pKCksXG5cdFx0XHR2YXJpYWJsZXM6IHsgaWQ6IGNoZWNrb3V0T3JDYXJ0SWQgfSxcblx0XHR9KTtcblxuXHRcdC8vIEZpbmFsIG1hc3NhZ2Ugb2YgQ2FydHMgaW50byBDaGVja291dFxuXHRcdGlmIChub2RlLmVzdGltYXRlZENvc3QpIHtcblx0XHRcdG5vZGUuc3VidG90YWxQcmljZSA9IG5vZGUuZXN0aW1hdGVkQ29zdC5zdWJ0b3RhbEFtb3VudC5hbW91bnQ7XG5cdFx0XHRub2RlLnRvdGFsUHJpY2UgPSBub2RlLmVzdGltYXRlZENvc3QudG90YWxBbW91bnQuYW1vdW50O1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiBcImNoZWNrb3V0XCIgKHdoaWNoIGNvdWxkIGJlIGEgQ2FydCBvYmplY3QpXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHQvLyBTdGFuZGFyZGl6ZSBjaGVja291dCBwcm9wZXJ0aWVzIHRvIHNvbWV0aGluZyBtb3JlIGVhc2lseSB1c2VkIGluIGRhdGFMYXllclxuXHRtYWtlU2ltcGxpZmllZENoZWNrb3V0KGNoZWNrb3V0KSB7XG5cdFx0Ly8gRmxhdHRlbiBub2RlcyB0aGF0IGNvbnRhaW4gbGluZSBpdGVtc1xuXHRcdGlmIChjaGVja291dC5saW5lSXRlbXMuZWRnZXMpIHtcblx0XHRcdGNoZWNrb3V0LmxpbmVJdGVtcyA9IGNoZWNrb3V0LmxpbmVJdGVtcy5lZGdlcy5tYXAoXG5cdFx0XHRcdCh7IG5vZGUgfSkgPT4gbm9kZSxcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBzaW1wbGlmaWVkIG9iamVjdFxuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja291dElkOiBnZXRTaG9waWZ5SWQoY2hlY2tvdXQuaWQpLFxuXHRcdFx0Y2hlY2tvdXRVcmw6IGNoZWNrb3V0LndlYlVybCxcblx0XHRcdHN1YnRvdGFsUHJpY2U6IGNoZWNrb3V0LnN1YnRvdGFsUHJpY2UsXG5cdFx0XHR0b3RhbFByaWNlOiBjaGVja291dC50b3RhbFByaWNlLFxuXHRcdFx0bGluZUl0ZW1zOiBjaGVja291dC5saW5lSXRlbXMubWFwKChsaW5lSXRlbSkgPT4gKHtcblx0XHRcdFx0bGluZUl0ZW1JZDogZ2V0U2hvcGlmeUlkKGxpbmVJdGVtLmlkKSxcblx0XHRcdFx0cXVhbnRpdHk6IGxpbmVJdGVtLnF1YW50aXR5LFxuXHRcdFx0XHQuLi50aGlzLm1ha2VGbGF0VmFyaWFudChsaW5lSXRlbS52YXJpYW50KSxcblx0XHRcdH0pKSxcblxuXHRcdFx0Ly8gUHJvcGVydGllcyB0aGF0IGFyZW4ndCBwcmVzZW50IHVudGlsIHB1cmNoYXNlXG5cdFx0XHRvcmRlck51bWJlcjogY2hlY2tvdXQub3JkZXJOdW1iZXIsXG5cdFx0XHR0b3RhbFRheDogY2hlY2tvdXQudG90YWxUYXgsXG5cdFx0XHR0b3RhbFNoaXBwaW5nOiBjaGVja291dC50b3RhbFNoaXBwaW5nLFxuXHRcdFx0ZGlzY291bnRDb2RlczogY2hlY2tvdXQuZGlzY291bnRDb2RlcyB8fCBbXSxcblx0XHR9O1xuXHR9XG5cblx0Ly8gR2V0IGEgc2ltcGxpZmllZENoZWNrb3V0IG9iamVjdCBhbmQgbWFrZSB0aGUgYHByb2R1Y3RzYCBhcnJheSBmcm9tIHRoZVxuXHQvLyBsaW5lSXRlbXMuICBXaGljaCBpc1xuXHRtYWtlVWFDaGVja291dFByb2R1Y3RzKHNpbXBsaWZpZWRDaGVja291dCkge1xuXHRcdHJldHVybiBzaW1wbGlmaWVkQ2hlY2tvdXQubGluZUl0ZW1zLm1hcCgobGluZUl0ZW0pID0+ICh7XG5cdFx0XHRxdWFudGl0eTogbGluZUl0ZW0ucXVhbnRpdHksXG5cdFx0XHQuLi50aGlzLm1ha2VVYVByb2R1Y3RGaWVsZE9iamVjdChsaW5lSXRlbSksXG5cdFx0fSkpO1xuXHR9XG5cblx0Ly8gU1RPUkVGUk9OVCBBUEkgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cblx0Ly8gUXVlcnkgU3RvcmVmcm9udCBBUElcblx0YXN5bmMgcXVlcnlTdG9yZWZyb250QXBpIChwYXlsb2FkKSB7XG5cdFx0d2luZG93LnRlc3RwYXlsb2FkID0gcGF5bG9hZDtcblx0XHR2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRteUhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0bXlIZWFkZXJzLmFwcGVuZCgnWC1TaG9waWZ5LVN0b3JlZnJvbnQtQWNjZXNzLVRva2VuJywgdGhpcy5zdG9yZWZyb250VG9rZW4pO1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnN0b3JlVXJsfS9hcGkvMjAyMS0xMC9ncmFwaHFsYCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiBteUhlYWRlcnMsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcblx0XHRcdHJlZGlyZWN0OiAnZm9sbG93J1xuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0XHQudGhlbihqc29uID0+IHtcblx0XHRcdFx0cmV0dXJuIGpzb247XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yJyxlcnJvcik7XG5cdFx0XHRcdHRocm93IG5ldyBTdG9yZWZyb250RXJyb3IocmVzcG9uc2UuZGF0YS5lcnJvcnMsIHBheWxvYWQpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0fVxuXG5cdC8vIERBVEFMQVlFUiBXUklUSU5HICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cdC8vIFB1c2ggR1RNIGRhdGFMYXllciBldmVudFxuXHRwdXNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuXHRcdGlmICh0aGlzLmRlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmRlYnVnKGAnJHtuYW1lfSdgLCBwYXlsb2FkKTtcblx0XHR9XG5cdFx0aWYgKCF3aW5kb3cuZGF0YUxheWVyKSB7XG5cdFx0XHR3aW5kb3cuZGF0YUxheWVyID0gW107XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBlY29tbWVyY2UgcHJvcGVydHksIGxpa2UgaWYgdGhleSBhcmUgZ29pbmcgdG8gYmUgY3JlYXRlZCBpblxuXHRcdC8vIEdUTSBtYW51YWxseS5cblx0XHRpZiAodGhpcy5kaXNhYmxlRWNvbW1lcmNlUHJvcGVydHkgJiYgcGF5bG9hZC5lY29tbWVyY2UpIHtcblx0XHRcdHBheWxvYWQgPSB7IC4uLnBheWxvYWQgfTtcblx0XHRcdGRlbGV0ZSBwYXlsb2FkLmVjb21tZXJjZTtcblxuXHRcdFx0Ly8gQ2xlYXIgcHJldmlvdXMgZWNvbW1lcmNlIHZhbHVlc1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuZGF0YUxheWVyLnB1c2goeyBlY29tbWVyY2U6IG51bGwgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIG5ldyBldmVudFxuXHRcdHJldHVybiB3aW5kb3cuZGF0YUxheWVyLnB1c2goe1xuXHRcdFx0ZXZlbnQ6IG5hbWUsXG5cdFx0XHRmaXJzdE9jY3VyYW5jZTogdGhpcy5pc0ZpcnN0T2NjdXJhbmNlKG5hbWUpLFxuXHRcdFx0Li4ucGF5bG9hZCxcblx0XHR9KTtcblx0fVxuXG5cdC8vIFJldHVybiB3aGV0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIGV2ZW50IGhhcyBmaXJlZC4gVGhpcyBjYW4gYmVcblx0Ly8gaGVscGVmdWwgaW4gY29uanVuY3Rpb24gdG8gcHJldmVudCBkb3VibGUgdHJpZ2dlcmluZyBmcm9tIGV2ZW50cyB0aGF0IGFyZVxuXHQvLyBhbHNvIGZpcmVkIGluIHRoZSBpbnRpYWwgcGFnZSByZXNwb25zZSBmcm9tIFNob3BpZnksIGxpa2UgUGFnZSBWaWV3cy5cblx0aXNGaXJzdE9jY3VyYW5jZShldmVudE5hbWUpIHtcblx0XHRpZiAoQXJyYXkuZnJvbSh0aGlzLm9jY3VyYW5jZXMpLmluY2x1ZGVzKGV2ZW50TmFtZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dGhpcy5vY2N1cmFuY2VzLnB1c2goZXZlbnROYW1lKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vLyBTVE9SRUZST05UIFFVRVJJRVMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4vLyBQcm9kdWN0IFZhcmlhbnQgZnJhZ21lbnRcbmV4cG9ydCB2YXIgcHJvZHVjdFZhcmlhbnRGcmFnbWVudCA9IGBcXFxuZnJhZ21lbnQgdmFyaWFudCBvbiBQcm9kdWN0VmFyaWFudCB7XG5cdGlkXG5cdHNrdVxuXHR0aXRsZVxuXHRwcmljZVxuXHRjb21wYXJlQXRQcmljZVxuXHRpbWFnZSB7IG9yaWdpbmFsU3JjIH1cblx0cHJvZHVjdCB7XG5cdFx0aWRcblx0XHR0aXRsZVxuXHRcdGhhbmRsZVxuXHRcdHByb2R1Y3RUeXBlXG5cdFx0dmVuZG9yXG5cdFx0Y29sbGVjdGlvbnMoZmlyc3Q6IDEpIHtcblx0XHRcdGVkZ2VzIHtcblx0XHRcdFx0bm9kZSB7XG5cdFx0XHRcdFx0dGl0bGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxcXG5gO1xuXG4vLyBHcmFwaHFsIHF1ZXJ5IHRvIGZldGNoIGEgdmFyaWFudCBieSBpZFxuZXhwb3J0IHZhciBmZXRjaFZhcmlhbnRRdWVyeSA9IGBcXFxucXVlcnkoJGlkOiBJRCEpIHtcblx0bm9kZShpZDogJGlkKSB7XG5cdFx0Li4udmFyaWFudFxuXHR9XG59XG4ke3Byb2R1Y3RWYXJpYW50RnJhZ21lbnR9XFxcbmA7XG5cbi8vIEdyYXBocWwgcXVlcnkgdG8gZmV0Y2ggYSBjYXJ0IGJ5IGlkXG5leHBvcnQgdmFyIGZldGNoQ2FydFF1ZXJ5ID0gYFxcXG5xdWVyeSgkaWQ6IElEISkge1xuXHRub2RlOiBjYXJ0KGlkOiAkaWQpIHtcblx0XHQuLi4gb24gQ2FydCB7XG5cdFx0XHRpZFxuXHRcdFx0d2ViVXJsOiBjaGVja291dFVybFxuXHRcdFx0ZXN0aW1hdGVkQ29zdCB7XG5cdFx0XHRcdHN1YnRvdGFsQW1vdW50IHsgYW1vdW50IH1cblx0XHRcdFx0dG90YWxBbW91bnQgeyBhbW91bnQgfVxuXHRcdFx0fVxuXHRcdFx0bGluZUl0ZW1zOiBsaW5lcyAoZmlyc3Q6IDI1MCkge1xuXHRcdFx0XHRlZGdlcyB7XG5cdFx0XHRcdFx0bm9kZSB7XG5cdFx0XHRcdFx0XHQuLi4gb24gQ2FydExpbmUge1xuXHRcdFx0XHRcdFx0XHRpZFxuXHRcdFx0XHRcdFx0XHRxdWFudGl0eVxuXHRcdFx0XHRcdFx0XHR2YXJpYW50OiBtZXJjaGFuZGlzZSB7IC4uLnZhcmlhbnQgfVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuJHtwcm9kdWN0VmFyaWFudEZyYWdtZW50fVxcXG5gO1xuXG4vLyBHcmFwaHFsIHF1ZXJ5IHRvIGZldGNoIGEgY2hlY2tvdXQgYnkgaWRcbmV4cG9ydCB2YXIgZmV0Y2hDaGVja291dFF1ZXJ5ID0gYFxcXG5xdWVyeSgkaWQ6IElEISkge1xuXHRub2RlKGlkOiAkaWQpIHtcblx0XHQuLi4gb24gQ2hlY2tvdXQge1xuXHRcdFx0aWRcblx0XHRcdHdlYlVybFxuXHRcdFx0c3VidG90YWxQcmljZVxuXHRcdFx0dG90YWxQcmljZVxuXHRcdFx0bGluZUl0ZW1zIChmaXJzdDogMjUwKSB7XG5cdFx0XHRcdGVkZ2VzIHtcblx0XHRcdFx0XHRub2RlIHtcblx0XHRcdFx0XHRcdC4uLiBvbiBDaGVja291dExpbmVJdGVtIHtcblx0XHRcdFx0XHRcdFx0aWRcblx0XHRcdFx0XHRcdFx0cXVhbnRpdHlcblx0XHRcdFx0XHRcdFx0dmFyaWFudCB7IC4uLnZhcmlhbnQgfVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuJHtwcm9kdWN0VmFyaWFudEZyYWdtZW50fVxcXG5gO1xuXG4vLyBOT04tSU5TVEFOQ0UgSEVMUEVSUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG4vLyBFcnJvciBvYmplY3Qgd2l0aCBjdXN0b20gaGFuZGxpbmdcbmNsYXNzIFN0b3JlZnJvbnRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0c3RhdGljIGluaXRDbGFzcygpIHtcblx0XHR0aGlzLnByb3RvdHlwZS5uYW1lID0gJ1N0b3JlZnJvbnRFcnJvcic7XG5cdH1cblx0Y29uc3RydWN0b3IoZXJyb3JzLCBwYXlsb2FkKSB7XG5cdFx0c3VwZXIoZXJyb3JzLm1hcCgoZSkgPT4gZS5kZWJ1Z01lc3NhZ2UgfHwgZS5tZXNzYWdlKS5qb2luKCcsICcpKTtcblx0XHR0aGlzLmVycm9ycyA9IGVycm9ycy5tYXAoKGUpID0+IEpTT04uc3RyaW5naWZ5KGUpKTtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG59XG5TdG9yZWZyb250RXJyb3IuaW5pdENsYXNzKCk7XG5cbi8vIEdldCB0aGUgaWQgZnJvbSBhIFNob3BpZnkgZ2lkOi8vIHN0eWxlIGlkLiAgVGhpcyBzdHJpcHMgZXZlcnl0aGluZyBidXQgdGhlXG4vLyBsYXN0IHBhcnQgb2YgdGhlIHN0cmluZy4gIFNvIGdpZDovL3Nob3BpZnkvUHJvZHVjdFZhcmlhbnQvMzQ2NDE4NzkxMDU1ODFcbi8vIGJlY29tZXMgMzQ2NDE4NzkxMDU1ODFcbi8vIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvM0ZJcGxMLzFcbnZhciBnZXRTaG9waWZ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcblx0aWYgKFN0cmluZyhpZCkubWF0Y2goL15cXGQrJC8pKSB7XG5cdFx0cmV0dXJuIGlkO1xuXHR9IC8vIEFscmVhZHkgc2ltcGxlIGlkXG5cdGlmICghaWQubWF0Y2goL15naWQ6XFwvXFwvLykpIHtcblx0XHRpZCA9IGF0b2IoaWQpO1xuXHR9IC8vIERlLWJhc2U2NFxuXHRyZXR1cm4gX19ndWFyZF9fKGlkLm1hdGNoKC9cXC8oW15cXC9dKykkLyksICh4KSA9PiB4WzFdKTsgLy8gR2V0IHRoZSBpZCBmcm9tIHRoZSBnaWRcbn07XG5cbi8vIEdldCB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoIHJlc3BlY3QgdG8gaXQncyBwYXJlbnRcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81OTEzOTg0LzU5MTYwXG52YXIgZ2V0RWxQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbCkge1xuXHRsZXQgaSA9IDE7IC8vIFRoZSBmaXJzdCBwb3NpdGlvbiB3aWxsIGJlIGAxYFxuXHR3aGlsZSAoKGVsID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZykgIT09IG51bGwpIHtcblx0XHRpKys7XG5cdH1cblx0cmV0dXJuIGk7XG59O1xuXG4vLyBGaXJlIGNhbGxiYWNrIHdoZW4gaW4gdmlld3BvcnQuIE5vdCBleHBvc2luZyBhIHdheSB0byBtYW51YWxseSBkaXNjb25uZWN0IG9yXG4vLyB1bm9ic2VydmUgYmVjYXVzZSBpdCBfc2hvdWxkXyBiZSBnYXJiYWdlIGNvbGxlY3RlZCB3aGVuIGVsIGlzIHJlbW92ZWQuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTExMDYyNjIvNTkxNjBcbnZhciB3aGVuRmlyc3RJblZpZXdwb3J0ID0gZnVuY3Rpb24gKGVsLCBjYWxsYmFjaykge1xuXHR2YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKFt7IGlzSW50ZXJzZWN0aW5nIH1dKSB7XG5cdFx0aWYgKCFpc0ludGVyc2VjdGluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKCk7XG5cdH0pO1xuXHRyZXR1cm4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG59O1xuXG5mdW5jdGlvbiBfX2d1YXJkX18odmFsdWUsIHRyYW5zZm9ybSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbFxuXHRcdD8gdHJhbnNmb3JtKHZhbHVlKVxuXHRcdDogdW5kZWZpbmVkO1xufVxuXG53aW5kb3cuZ3RtRWNvbW0gPSBuZXcgU2hvcGlmeUd0bUluc3RydW1lbnRvcih7XG5cdGN1cnJlbmN5Q29kZTogd2luZG93LmN0X2d0bV9zZXR0aW5ncy5jdXJyZW5jeSxcbn0pO1xuaWYgKHdpbmRvdy5TaG9waWZ5ICYmIHdpbmRvdy5TaG9waWZ5LkNoZWNrb3V0KSB7XG5cdHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2N0LWNhcnQtY29udGVudCcpO1xufSJdfQ==