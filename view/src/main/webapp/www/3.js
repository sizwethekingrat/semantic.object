(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/reselect/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/reselect/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  'use strict';

  exports.__esModule = true;
  exports.defaultMemoize = defaultMemoize;
  exports.createSelectorCreator = createSelectorCreator;
  exports.createStructuredSelector = createStructuredSelector;

  function defaultEqualityCheck(a, b) {
    return a === b;
  }

  function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  }

  function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
    var lastArgs = null;
    var lastResult = null; // we reference arguments instead of spreading them for performance reasons

    return function () {
      if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
        // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
      }

      lastArgs = arguments;
      return lastResult;
    };
  }

  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return babelHelpers.typeof(dep);
      }).join(', ');
      throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }

    return dependencies;
  }

  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptions[_key - 1] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }

      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = getDependencies(funcs);
      var memoizedResultFunc = memoize.apply(undefined, [function () {
        recomputations++; // apply arguments instead of spreading for performance.

        return resultFunc.apply(null, arguments);
      }].concat(memoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

      var selector = defaultMemoize(function () {
        var params = [];
        var length = dependencies.length;

        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          params.push(dependencies[i].apply(null, arguments));
        } // apply arguments instead of spreading for performance.


        return memoizedResultFunc.apply(null, params);
      });
      selector.resultFunc = resultFunc;

      selector.recomputations = function () {
        return recomputations;
      };

      selector.resetRecomputations = function () {
        return recomputations = 0;
      };

      return selector;
    };
  }

  var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

  function createStructuredSelector(selectors) {
    var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

    if (babelHelpers.typeof(selectors) !== 'object') {
      throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + babelHelpers.typeof(selectors)));
    }

    var objectKeys = Object.keys(selectors);
    return selectorCreator(objectKeys.map(function (key) {
      return selectors[key];
    }), function () {
      for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }

      return values.reduce(function (composition, value, index) {
        composition[objectKeys[index]] = value;
        return composition;
      }, {});
    });
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/actions/shop.js":
/*!*****************************!*\
  !*** ./src/actions/shop.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.addToCartUnsafe = _exports.removeFromCart = _exports.addToCart = _exports.checkout = _exports.getAllProducts = _exports.dieselIcon = _exports.petrolIcon = _exports.CHECKOUT_FAILURE = _exports.CHECKOUT_SUCCESS = _exports.REMOVE_FROM_CART = _exports.ADD_TO_CART = _exports.GET_PRODUCTS = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var GET_PRODUCTS = 'GET_PRODUCTS';
  _exports.GET_PRODUCTS = GET_PRODUCTS;
  var ADD_TO_CART = 'ADD_TO_CART';
  _exports.ADD_TO_CART = ADD_TO_CART;
  var REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  _exports.REMOVE_FROM_CART = REMOVE_FROM_CART;
  var CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
  _exports.CHECKOUT_SUCCESS = CHECKOUT_SUCCESS;
  var CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';
  _exports.CHECKOUT_FAILURE = CHECKOUT_FAILURE;
  var petrol = 'petrol';
  var diesel = 'diesel';

  var petrolIcon = __webpack_require__(/*! ../assets/images/live/petrol-300x300.png?{"outputs":["thumbnail"]} */ "./src/assets/images/live/petrol-300x300.png?{\"outputs\":[\"thumbnail\"]}");

  _exports.petrolIcon = petrolIcon;

  var dieselIcon = __webpack_require__(/*! ../assets/images/live/diesel-300x300.png?{"outputs":["thumbnail"]} */ "./src/assets/images/live/diesel-300x300.png?{\"outputs\":[\"thumbnail\"]}");

  _exports.dieselIcon = dieselIcon;
  var PRODUCT_LIST = [{
    "id": 1,
    "title": petrol,
    "icon": petrolIcon,
    "price": 50,
    "inventory": 10
  }, {
    "id": 2,
    "title": diesel,
    "icon": dieselIcon,
    "price": 50,
    "inventory": 1000
  }];

  var getAllProducts = function getAllProducts() {
    return function (dispatch, getState) {
      // Here you would normally get the data from the server. We're simulating
      // that by dispatching an async action (that you would dispatch when you
      // succesfully got the data back)
      console.log(petrolIcon[0].format); // 'image/jpeg'

      console.log(petrolIcon[0].url); // url to image

      console.log(petrolIcon[0].name);
      console.log(dieselIcon[0].format); // 'image/jpeg'

      console.log(dieselIcon[0].url); // url to image

      console.log(petrolIcon[0].name); // You could reformat the data in the right format as well:

      var products = PRODUCT_LIST.reduce(function (obj, product) {
        obj[product.id] = product;
        return obj;
      }, {});
      dispatch({
        type: GET_PRODUCTS,
        products: products
      });
    };
  };

  _exports.getAllProducts = getAllProducts;

  var checkout = function checkout(productId) {
    return function (dispatch) {
      // Here you could do things like credit card validation, etc.
      // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
      // by flipping a coin :)
      var flip = Math.floor(Math.random() * 2);

      if (flip === 0) {
        dispatch({
          type: CHECKOUT_FAILURE
        });
      } else {
        dispatch({
          type: CHECKOUT_SUCCESS
        });
      }
    };
  };

  _exports.checkout = checkout;

  var addToCart = function addToCart(productId) {
    return function (dispatch, getState) {
      var state = getState(); // Just because the UI thinks you can add this to the cart
      // doesn't mean it's in the inventory (user could've fixed it);

      if (state.shop.products[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId));
      }
    };
  };

  _exports.addToCart = addToCart;

  var removeFromCart = function removeFromCart(productId) {
    return {
      type: REMOVE_FROM_CART,
      productId: productId
    };
  };

  _exports.removeFromCart = removeFromCart;

  var addToCartUnsafe = function addToCartUnsafe(productId) {
    return {
      type: ADD_TO_CART,
      productId: productId
    };
  };

  _exports.addToCartUnsafe = addToCartUnsafe;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/assets/images/live/diesel-300x300.png?{\"outputs\":[\"thumbnail\"]}":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/live/diesel-300x300.png?{"outputs":["thumbnail"]} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [{"name": "diesel-300x300.png","width": 50,"format": "png","preset": "thumbnail","height": 50,"type": "image\u002Fpng","url": __webpack_require__.p + "diesel-300x300.png"}];

/***/ }),

/***/ "./src/assets/images/live/petrol-300x300.png?{\"outputs\":[\"thumbnail\"]}":
/*!*****************************************************************************!*\
  !*** ./src/assets/images/live/petrol-300x300.png?{"outputs":["thumbnail"]} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [{"name": "petrol-300x300.png","width": 50,"format": "png","preset": "thumbnail","height": 50,"type": "image\u002Fpng","url": __webpack_require__.p + "petrol-300x300.png"}];

/***/ }),

/***/ "./src/components/button-shared-styles.js":
/*!************************************************!*\
  !*** ./src/components/button-shared-styles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ButtonSharedStyles = void 0;

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style>\n  button {\n    font-size: inherit;\n    vertical-align: middle;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n  }\n  button:hover svg {\n    fill: var(--app-primary-color);\n  }\n</style>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var ButtonSharedStyles = (0, _litElement.html)(_templateObject());
  _exports.ButtonSharedStyles = ButtonSharedStyles;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/my-view3.js":
/*!************************************!*\
  !*** ./src/components/my-view3.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! ./page-view-element.js */ "./src/components/page-view-element.js"), __webpack_require__(/*! pwa-helpers/connect-mixin.js */ "./node_modules/pwa-helpers/connect-mixin.js"), __webpack_require__(/*! ../store.js */ "./src/store.js"), __webpack_require__(/*! ../actions/shop.js */ "./src/actions/shop.js"), __webpack_require__(/*! ../reducers/shop.js */ "./src/reducers/shop.js"), __webpack_require__(/*! ./shop-products.js */ "./src/components/shop-products.js"), __webpack_require__(/*! ./shop-cart.js */ "./src/components/shop-cart.js"), __webpack_require__(/*! ./shared-styles.js */ "./src/components/shared-styles.js"), __webpack_require__(/*! ./button-shared-styles.js */ "./src/components/button-shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _pageViewElement, _connectMixin, _store, _shop, _shop2, _shopProducts, _shopCart, _sharedStyles, _buttonSharedStyles) {
  "use strict";

  _shop2 = babelHelpers.interopRequireWildcard(_shop2);

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      ", "\n      <style>\n        /* Add more specificity (.checkout) to workaround an issue in lit-element:\n           https://github.com/PolymerLabs/lit-element/issues/34 */\n        button.checkout {\n          border: 2px solid var(--app-dark-text-color);\n          border-radius: 3px;\n          padding: 8px 16px;\n        }\n        button.checkout:hover {\n          border-color: var(--app-primary-color);\n          color: var(--app-primary-color);\n        }\n      </style>\n\n      <section>\n        <h2>Redux example: shopping cart</h2>\n        <div class=\"circle\">", "</div>\n\n        <p>This is a slightly more advanced Redux example, that simulates a\n          shopping cart: getting the products, adding/removing items to the\n          cart, and a checkout action, that can sometimes randomly fail (to\n          simulate where you would add failure handling). </p>\n        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and\n        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>\n      </section>\n      <section>\n        <h3>Products</h3>\n        <shop-products></shop-products>\n\n        <br>\n        <h3>Your Cart</h3>\n        <shop-cart></shop-cart>\n\n        <div>", "</div>\n        <br>\n        <p>\n          <button class=\"checkout\" hidden=\"", "\"\n              on-click=\"", "\">\n            Checkout\n          </button>\n        </p>\n      </section>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  _store.store.addReducers({
    shop: _shop2.default
  }); // These are the elements needed by this element.


  var MyView3 =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(MyView3, _connect);

    function MyView3() {
      babelHelpers.classCallCheck(this, MyView3);
      return babelHelpers.possibleConstructorReturn(this, (MyView3.__proto__ || Object.getPrototypeOf(MyView3)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView3, [{
      key: "_render",
      value: function _render(_ref) {
        var _quantity = _ref._quantity,
            _error = _ref._error;
        return (0, _litElement.html)(_templateObject(), _sharedStyles.SharedStyles, _buttonSharedStyles.ButtonSharedStyles, _quantity, _error, _quantity == 0, function () {
          return _store.store.dispatch((0, _shop.checkout)());
        });
      }
    }, {
      key: "_stateChanged",
      // This is called every time something is updated in the store.
      value: function _stateChanged(state) {
        this._quantity = (0, _shop2.cartQuantitySelector)(state);
        this._error = state.shop.error;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          // This is the data from the store.
          _quantity: Number,
          _error: String
        };
      }
    }]);
    return MyView3;
  }((0, _connectMixin.connect)(_store.store)(_pageViewElement.PageViewElement));

  window.customElements.define('my-view3', MyView3);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/page-view-element.js":
/*!*********************************************!*\
  !*** ./src/components/page-view-element.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PageViewElement = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var PageViewElement =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(PageViewElement, _LitElement);

    function PageViewElement() {
      babelHelpers.classCallCheck(this, PageViewElement);
      return babelHelpers.possibleConstructorReturn(this, (PageViewElement.__proto__ || Object.getPrototypeOf(PageViewElement)).apply(this, arguments));
    }

    babelHelpers.createClass(PageViewElement, [{
      key: "_shouldRender",
      // Only render this page if it's actually visible.
      value: function _shouldRender(props, changedProps, old) {
        return props.active;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          active: Boolean
        };
      }
    }]);
    return PageViewElement;
  }(_litElement.LitElement);

  _exports.PageViewElement = PageViewElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/shared-styles.js":
/*!*****************************************!*\
  !*** ./src/components/shared-styles.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SharedStyles = void 0;

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n<style>\n  :host {\n    display: block;\n    box-sizing: border-box;\n  }\n\n  section {\n    padding: 24px;\n    background: var(--app-section-odd-color);\n  }\n\n  section > * {\n    max-width: 600px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n  section:nth-of-type(even) {\n    background: var(--app-section-even-color);\n  }\n\n  h2 {\n    font-size: 24px;\n    text-align: center;\n    color: var(--app-dark-text-color);\n  }\n\n  @media (min-width: 460px) {\n    h2 {\n      font-size: 36px;\n    }\n  }\n\n  .circle {\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 50%;\n    background: var(--app-primary-color);\n    color: var(--app-light-text-color);\n    font-size: 30px;\n    line-height: 64px;\n  }\n</style>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var SharedStyles = (0, _litElement.html)(_templateObject());
  _exports.SharedStyles = SharedStyles;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/shop-cart.js":
/*!*************************************!*\
  !*** ./src/components/shop-cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! pwa-helpers/connect-mixin.js */ "./node_modules/pwa-helpers/connect-mixin.js"), __webpack_require__(/*! ../store.js */ "./src/store.js"), __webpack_require__(/*! ./my-icons.js */ "./src/components/my-icons.js"), __webpack_require__(/*! ./shop-item.js */ "./src/components/shop-item.js"), __webpack_require__(/*! ../actions/shop.js */ "./src/actions/shop.js"), __webpack_require__(/*! ../reducers/shop.js */ "./src/reducers/shop.js"), __webpack_require__(/*! ./button-shared-styles.js */ "./src/components/button-shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _connectMixin, _store, _myIcons, _shopItem, _shop, _shop2, _buttonSharedStyles) {
  "use strict";

  function _templateObject2() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <div>\n            <shop-item name=\"", "\" amount=\"", "\" price=\"", "\"></shop-item>\n            <button\n                on-click=\"", "\"\n                data-index$=\"", "\"\n                title=\"Remove from cart\">\n              ", "\n            </button>\n          </div>\n        "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      <style>\n        :host { display: block; }\n      </style>\n      <p hidden=\"", "\">Please add some products to cart.</p>\n      ", "\n      <p hidden=\"", "\"><b>Total:</b> ", "</p>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var ShopCart =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(ShopCart, _connect);

    function ShopCart() {
      babelHelpers.classCallCheck(this, ShopCart);
      return babelHelpers.possibleConstructorReturn(this, (ShopCart.__proto__ || Object.getPrototypeOf(ShopCart)).apply(this, arguments));
    }

    babelHelpers.createClass(ShopCart, [{
      key: "_render",
      value: function _render(_ref) {
        var _items = _ref._items,
            _total = _ref._total;
        return (0, _litElement.html)(_templateObject(), _buttonSharedStyles.ButtonSharedStyles, _items.length !== 0, _items.map(function (item) {
          return (0, _litElement.html)(_templateObject2(), item.title, item.amount, item.price, function (e) {
            return _store.store.dispatch((0, _shop.removeFromCart)(e.currentTarget.dataset['index']));
          }, item.id, _myIcons.removeFromCartIcon);
        }), !_items.length, _total);
      }
    }, {
      key: "_stateChanged",
      // This is called every time something is updated in the store.
      value: function _stateChanged(state) {
        this._items = (0, _shop2.cartItemsSelector)(state);
        this._total = (0, _shop2.cartTotalSelector)(state);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          _items: Array,
          _total: Number
        };
      }
    }]);
    return ShopCart;
  }((0, _connectMixin.connect)(_store.store)(_litElement.LitElement));

  window.customElements.define('shop-cart', ShopCart);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/shop-item.js":
/*!*************************************!*\
  !*** ./src/components/shop-item.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", ":\n      <span hidden=\"", "\">", " * </span>\n      $", "\n      </span>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  // This element is *not* connected to the Redux store.
  var ShopItem =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(ShopItem, _LitElement);

    function ShopItem() {
      babelHelpers.classCallCheck(this, ShopItem);
      return babelHelpers.possibleConstructorReturn(this, (ShopItem.__proto__ || Object.getPrototypeOf(ShopItem)).apply(this, arguments));
    }

    babelHelpers.createClass(ShopItem, [{
      key: "_render",
      value: function _render(props) {
        return (0, _litElement.html)(_templateObject(), props.name, props.amount === 0, props.amount, props.price);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          name: String,
          amount: String,
          price: String
        };
      }
    }]);
    return ShopItem;
  }(_litElement.LitElement);

  window.customElements.define('shop-item', ShopItem);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/shop-products.js":
/*!*****************************************!*\
  !*** ./src/components/shop-products.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! pwa-helpers/connect-mixin.js */ "./node_modules/pwa-helpers/connect-mixin.js"), __webpack_require__(/*! ../store.js */ "./src/store.js"), __webpack_require__(/*! ../actions/shop.js */ "./src/actions/shop.js"), __webpack_require__(/*! ./my-icons.js */ "./src/components/my-icons.js"), __webpack_require__(/*! ./button-shared-styles.js */ "./src/components/button-shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _connectMixin, _store, _shop, _myIcons, _buttonSharedStyles) {
  "use strict";

  function _templateObject2() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <div>\n            <shop-item name=\"", "\" amount=\"", "\" price=\"", "\"></shop-item>\n            <button\n                disabled=\"", "\"\n                on-click=\"", "\"\n                data-index$=\"", "\"\n                title=\"", "\"       \n                > \n              <!--<img src.bind=\"img\">-->\n              <img src=\"", "\">\n            </button>\n          </div>\n        "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      <style>\n        :host { display: block; }\n      </style>\n      ", "\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var ShopProducts =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(ShopProducts, _connect);

    function ShopProducts() {
      babelHelpers.classCallCheck(this, ShopProducts);
      return babelHelpers.possibleConstructorReturn(this, (ShopProducts.__proto__ || Object.getPrototypeOf(ShopProducts)).apply(this, arguments));
    }

    babelHelpers.createClass(ShopProducts, [{
      key: "_render",
      value: function _render(_ref) {
        var _this = this;

        var _products = _ref._products;
        return (0, _litElement.html)(_templateObject(), _buttonSharedStyles.ButtonSharedStyles, Object.keys(_products).map(function (key) {
          var item = _products[key];
          _this.img = item.icon[0];
          return (0, _litElement.html)(_templateObject2(), item.title, item.inventory, item.price, item.inventory === 0, function (e) {
            return _store.store.dispatch((0, _shop.addToCart)(e.currentTarget.dataset['index']));
          }, item.id, item.inventory === 0 ? 'Sold out' : 'Add to cart', item.icon[0].url);
        }));
      }
    }, {
      key: "_firstRendered",
      value: function _firstRendered() {
        _store.store.dispatch((0, _shop.getAllProducts)());
      } // This is called every time something is updated in the store.

    }, {
      key: "_stateChanged",
      value: function _stateChanged(state) {
        this._products = state.shop.products;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          _products: Object
        };
      }
    }]);
    return ShopProducts;
  }((0, _connectMixin.connect)(_store.store)(_litElement.LitElement));

  window.customElements.define('shop-products', ShopProducts);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/reducers/shop.js":
/*!******************************!*\
  !*** ./src/reducers/shop.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../actions/shop.js */ "./src/actions/shop.js"), __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _shop, _reselect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.cartQuantitySelector = _exports.cartTotalSelector = _exports.cartItemsSelector = _exports.default = void 0;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */


  var INITIAL_CART = {
    addedIds: [],
    quantityById: {}
  };
  var UPDATED_CART = {
    addedIds: ['1'],
    quantityById: {
      '1': 1
    }
  };

  var shop = function shop() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      products: {},
      cart: INITIAL_CART
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _shop.GET_PRODUCTS:
        return _extends({}, state, {
          products: action.products
        });

      case _shop.ADD_TO_CART:
      case _shop.REMOVE_FROM_CART:
      case _shop.CHECKOUT_SUCCESS:
        return _extends({}, state, {
          products: products(state.products, action),
          cart: cart(state.cart, action),
          error: ''
        });

      case _shop.CHECKOUT_FAILURE:
        return _extends({}, state, {
          error: 'Checkout failed. Please try again'
        });

      default:
        return state;
    }
  }; // Slice reducer: it only reduces the bit of the state it's concerned about.


  var products = function products(state, action) {
    switch (action.type) {
      case _shop.ADD_TO_CART:
      case _shop.REMOVE_FROM_CART:
        var productId = action.productId;
        return _extends({}, state, babelHelpers.defineProperty({}, productId, product(state[productId], action)));

      default:
        return state;
    }
  };

  var product = function product(state, action) {
    switch (action.type) {
      case _shop.ADD_TO_CART:
        return _extends({}, state, {
          inventory: state.inventory - 1
        });

      case _shop.REMOVE_FROM_CART:
        return _extends({}, state, {
          inventory: state.inventory + 1
        });

      default:
        return state;
    }
  };

  var cart = function cart() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _shop.ADD_TO_CART:
      case _shop.REMOVE_FROM_CART:
        return {
          addedIds: addedIds(state.addedIds, state.quantityById, action),
          quantityById: quantityById(state.quantityById, action)
        };

      case _shop.CHECKOUT_SUCCESS:
        return INITIAL_CART;

      default:
        return state;
    }
  };

  var addedIds = function addedIds() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART.addedIds;
    var quantityById = arguments.length > 1 ? arguments[1] : undefined;
    var action = arguments.length > 2 ? arguments[2] : undefined;
    var productId = action.productId;

    switch (action.type) {
      case _shop.ADD_TO_CART:
        if (state.indexOf(productId) !== -1) {
          return state;
        }

        return babelHelpers.toConsumableArray(state).concat([action.productId]);

      case _shop.REMOVE_FROM_CART:
        // This is called before the state is updated, so if you have 1 item in the
        // cart during the remove action, you'll have 0.
        if (quantityById[productId] <= 1) {
          // This removes all items in this array equal to productId.
          return state.filter(function (e) {
            return e !== productId;
          });
        }

        return state;

      default:
        return state;
    }
  };

  var quantityById = function quantityById() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART.quantityById;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var productId = action.productId;

    switch (action.type) {
      case _shop.ADD_TO_CART:
        return _extends({}, state, babelHelpers.defineProperty({}, productId, (state[productId] || 0) + 1));

      case _shop.REMOVE_FROM_CART:
        return _extends({}, state, babelHelpers.defineProperty({}, productId, (state[productId] || 0) - 1));

      default:
        return state;
    }
  };

  var _default = shop; // Per Redux best practices, the shop data in our store is structured
  // for efficiency (small size and fast updates).
  //
  // The _selectors_ below transform store data into specific forms that
  // are tailored for presentation. Putting this logic here keeps the
  // layers of our app loosely coupled and easier to maintain, since
  // views don't need to know about the store's internal data structures.
  //
  // We use a tiny library called `reselect` to create efficient
  // selectors. More info: https://github.com/reduxjs/reselect.

  _exports.default = _default;

  var cartSelector = function cartSelector(state) {
    return state.shop.cart;
  };

  var productsSelector = function productsSelector(state) {
    return state.shop.products;
  }; // Return a flattened array representation of the items in the cart


  var cartItemsSelector = (0, _reselect.createSelector)(cartSelector, productsSelector, function (cart, products) {
    var items = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cart.addedIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _id = _step.value;
        var item = products[_id];
        items.push({
          id: item.id,
          title: item.title,
          amount: cart.quantityById[_id],
          price: item.price
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return items;
  }); // Return the total cost of the items in the cart

  _exports.cartItemsSelector = cartItemsSelector;
  var cartTotalSelector = (0, _reselect.createSelector)(cartSelector, productsSelector, function (cart, products) {
    var total = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = cart.addedIds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _id2 = _step2.value;
        var item = products[_id2];
        total += item.price * cart.quantityById[_id2];
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return parseFloat(Math.round(total * 100) / 100).toFixed(2);
  }); // Return the number of items in the cart

  _exports.cartTotalSelector = cartTotalSelector;
  var cartQuantitySelector = (0, _reselect.createSelector)(cartSelector, function (cart) {
    var num = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = cart.addedIds[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _id3 = _step3.value;
        num += cart.quantityById[_id3];
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return num;
  });
  _exports.cartQuantitySelector = cartQuantitySelector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=3.js.map