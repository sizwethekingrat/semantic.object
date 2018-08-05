(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/my-view1.js":
/*!************************************!*\
  !*** ./src/components/my-view1.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! ./page-view-element.js */ "./src/components/page-view-element.js"), __webpack_require__(/*! ./shared-styles.js */ "./src/components/shared-styles.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _pageViewElement, _sharedStyles) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      ", "\n      <section>\n        <h2>Static page</h2>\n        <p>This is a text-only page.</p>\n        <p>It doesn't do anything other than display some static text.</p>\n      </section>\n      <section>\n        <h2>Welcome</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>\n      </section>\n      <section>\n        <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>\n      </section>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var MyView1 =
  /*#__PURE__*/
  function (_PageViewElement) {
    babelHelpers.inherits(MyView1, _PageViewElement);

    function MyView1() {
      babelHelpers.classCallCheck(this, MyView1);
      return babelHelpers.possibleConstructorReturn(this, (MyView1.__proto__ || Object.getPrototypeOf(MyView1)).apply(this, arguments));
    }

    babelHelpers.createClass(MyView1, [{
      key: "_render",
      value: function _render(props) {
        return (0, _litElement.html)(_templateObject(), _sharedStyles.SharedStyles);
      }
    }]);
    return MyView1;
  }(_pageViewElement.PageViewElement);

  window.customElements.define('my-view1', MyView1);
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
//# sourceMappingURL=1.js.map