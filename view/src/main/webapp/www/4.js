(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/my-view404.js":
/*!**************************************!*\
  !*** ./src/components/my-view404.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! ./page-view-element.js */ "./src/components/page-view-element.js"), __webpack_require__(/*! ./shared-styles.js */ "./src/components/shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _pageViewElement, _sharedStyles) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>The page you're looking for doesn't seem to exist. Head back\n           <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var MyView404 =
  /*#__PURE__*/
  function (_PageViewElement) {
    babelHelpers.inherits(MyView404, _PageViewElement);

    function MyView404() {
      babelHelpers.classCallCheck(this, MyView404);
      return babelHelpers.possibleConstructorReturn(this, (MyView404.__proto__ || Object.getPrototypeOf(MyView404)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView404, [{
      key: "_render",
      value: function _render(props) {
        return (0, _litElement.html)(_templateObject(), _sharedStyles.SharedStyles);
      }
    }]);
    return MyView404;
  }(_pageViewElement.PageViewElement);

  window.customElements.define('my-view404', MyView404);
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

/***/ })

}]);
//# sourceMappingURL=4.js.map