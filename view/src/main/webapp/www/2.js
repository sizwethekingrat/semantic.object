(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/actions/counter.js":
/*!********************************!*\
  !*** ./src/actions/counter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.decrement = _exports.increment = _exports.DECREMENT = _exports.INCREMENT = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var INCREMENT = 'INCREMENT';
  _exports.INCREMENT = INCREMENT;
  var DECREMENT = 'DECREMENT';
  _exports.DECREMENT = DECREMENT;

  var increment = function increment() {
    return {
      type: INCREMENT
    };
  };

  _exports.increment = increment;

  var decrement = function decrement() {
    return {
      type: DECREMENT
    };
  };

  _exports.decrement = decrement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

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

/***/ "./src/components/counter-element.js":
/*!*******************************************!*\
  !*** ./src/components/counter-element.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! ./my-icons.js */ "./src/components/my-icons.js"), __webpack_require__(/*! ./button-shared-styles.js */ "./src/components/button-shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _myIcons, _buttonSharedStyles) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      <style>\n        span { width: 20px; display: inline-block; text-align: center; font-weight: bold;}\n      </style>\n      <div>\n        <p>\n          Clicked: <span>", "</span> times.\n          Value is <span>", "</span>.\n          <button on-click=\"", "\" title=\"Add 1\">", "</button>\n          <button on-click=\"", "\" title=\"Minus 1\">", "</button>\n        </p>\n      </div>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  // This is a reusable element. It is not connected to the store. You can
  // imagine that it could just as well be a third-party element that you
  // got from someone else.
  var CounterElement =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(CounterElement, _LitElement);
    babelHelpers.createClass(CounterElement, [{
      key: "_render",
      value: function _render(props) {
        var _this2 = this;

        return (0, _litElement.html)(_templateObject(), _buttonSharedStyles.ButtonSharedStyles, props.clicks, props.value, function () {
          return _this2._onIncrement();
        }, _myIcons.plusIcon, function () {
          return _this2._onDecrement();
        }, _myIcons.minusIcon);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          /* The total number of clicks you've done. */
          clicks: Number,

          /* The current value of the counter. */
          value: Number
        };
      }
    }]);

    function CounterElement() {
      var _this;

      babelHelpers.classCallCheck(this, CounterElement);
      _this = babelHelpers.possibleConstructorReturn(this, (CounterElement.__proto__ || Object.getPrototypeOf(CounterElement)).call(this));
      _this.clicks = 0;
      _this.value = 0;
      return _this;
    }

    babelHelpers.createClass(CounterElement, [{
      key: "_onIncrement",
      value: function _onIncrement() {
        this.value++;
        this.clicks++;
        this.dispatchEvent(new CustomEvent('counter-incremented'));
      }
    }, {
      key: "_onDecrement",
      value: function _onDecrement() {
        this.value--;
        this.clicks++;
        this.dispatchEvent(new CustomEvent('counter-decremented'));
      }
    }]);
    return CounterElement;
  }(_litElement.LitElement);

  window.customElements.define('counter-element', CounterElement);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/my-view2.js":
/*!************************************!*\
  !*** ./src/components/my-view2.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! ./page-view-element.js */ "./src/components/page-view-element.js"), __webpack_require__(/*! pwa-helpers/connect-mixin.js */ "./node_modules/pwa-helpers/connect-mixin.js"), __webpack_require__(/*! ../store.js */ "./src/store.js"), __webpack_require__(/*! ../actions/counter.js */ "./src/actions/counter.js"), __webpack_require__(/*! ../reducers/counter.js */ "./src/reducers/counter.js"), __webpack_require__(/*! ./counter-element.js */ "./src/components/counter-element.js"), __webpack_require__(/*! ./shared-styles.js */ "./src/components/shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _pageViewElement, _connectMixin, _store, _counter, _counter2, _counterElement, _sharedStyles) {
  "use strict";

  _counter2 = babelHelpers.interopRequireDefault(_counter2);

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      <section>\n        <h2>Redux example: simple counter</h2>\n        <div class=\"circle\">", "</div>\n        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The\n        element is not built in a Redux-y way (you can think of it as being a\n        third-party element you got from someone else), but this page is connected to the\n        Redux store. When the element updates its counter, this page updates the values\n        in the Redux store, and you can see the current value of the counter reflected in\n        the bubble above.</p>\n        <br><br>\n      </section>\n      <section>\n        <p>\n          <counter-element value=\"", "\" clicks=\"", "\"\n              on-counter-incremented=\"", "\"\n              on-counter-decremented=\"", "\">\n          </counter-element>\n        </p>\n      </section>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  _store.store.addReducers({
    counter: _counter2.default
  }); // These are the elements needed by this element.


  var MyView2 =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(MyView2, _connect);

    function MyView2() {
      babelHelpers.classCallCheck(this, MyView2);
      return babelHelpers.possibleConstructorReturn(this, (MyView2.__proto__ || Object.getPrototypeOf(MyView2)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView2, [{
      key: "_render",
      value: function _render(props) {
        return (0, _litElement.html)(_templateObject(), _sharedStyles.SharedStyles, props._value, props._value, props._clicks, function () {
          return _store.store.dispatch((0, _counter.increment)());
        }, function () {
          return _store.store.dispatch((0, _counter.decrement)());
        });
      }
    }, {
      key: "_stateChanged",
      // This is called every time something is updated in the store.
      value: function _stateChanged(state) {
        this._clicks = state.counter.clicks;
        this._value = state.counter.value;
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          // This is the data from the store.
          _clicks: Number,
          _value: Number
        };
      }
    }]);
    return MyView2;
  }((0, _connectMixin.connect)(_store.store)(_pageViewElement.PageViewElement));

  window.customElements.define('my-view2', MyView2);
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

/***/ "./src/reducers/counter.js":
/*!*********************************!*\
  !*** ./src/reducers/counter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../actions/counter.js */ "./src/actions/counter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _counter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var counter = function counter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      clicks: 0,
      value: 0
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _counter.INCREMENT:
        return {
          'clicks': state.clicks + 1,
          'value': state.value + 1
        };

      case _counter.DECREMENT:
        return {
          'clicks': state.clicks + 1,
          'value': state.value - 1
        };

      default:
        return state;
    }
  };

  var _default = counter;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=2.js.map