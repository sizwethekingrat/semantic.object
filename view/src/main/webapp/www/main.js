/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-drawer/app-drawer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_polymerLegacy, _ironFlexLayout, _polymerFn, _htmlTag, _renderStatus, _polymerDom) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"], ["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  (0, _polymerFn.Polymer)({
    _template: (0, _htmlTag.html)(_templateObject()),
    is: 'app-drawer',
    properties: {
      /**
       * The opened state of the drawer.
       */
      opened: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },

      /**
       * The drawer does not have a scrim and cannot be swiped close.
       */
      persistent: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The transition duration of the drawer in milliseconds.
       */
      transitionDuration: {
        type: Number,
        value: 200
      },

      /**
       * The alignment of the drawer on the screen ('left', 'right', 'start' or
       * 'end'). 'start' computes to left and 'end' to right in LTR layout and
       * vice versa in RTL layout.
       */
      align: {
        type: String,
        value: 'left'
      },

      /**
       * The computed, read-only position of the drawer on the screen ('left' or
       * 'right').
       */
      position: {
        type: String,
        readOnly: true,
        reflectToAttribute: true
      },

      /**
       * Create an area at the edge of the screen to swipe open the drawer.
       */
      swipeOpen: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * Trap keyboard focus when the drawer is opened and not persistent.
       */
      noFocusTrap: {
        type: Boolean,
        value: false
      },

      /**
       * Disables swiping on the drawer.
       */
      disableSwipe: {
        type: Boolean,
        value: false
      }
    },
    observers: ['resetLayout(position, isAttached)', '_resetPosition(align, isAttached)', '_styleTransitionDuration(transitionDuration)', '_openedPersistentChanged(opened, persistent)'],
    _translateOffset: 0,
    _trackDetails: null,
    _drawerState: 0,
    _boundEscKeydownHandler: null,
    _firstTabStop: null,
    _lastTabStop: null,
    attached: function attached() {
      (0, _renderStatus.afterNextRender)(this, function () {
        this._boundEscKeydownHandler = this._escKeydownHandler.bind(this);
        this.addEventListener('keydown', this._tabKeydownHandler.bind(this)); // Only listen for horizontal track so you can vertically scroll
        // inside the drawer.

        this.listen(this, 'track', '_track');
        this.setScrollDirection('y');
      });
      this.fire('app-reset-layout');
    },
    detached: function detached() {
      document.removeEventListener('keydown', this._boundEscKeydownHandler);
    },

    /**
     * Opens the drawer.
     */
    open: function open() {
      this.opened = true;
    },

    /**
     * Closes the drawer.
     */
    close: function close() {
      this.opened = false;
    },

    /**
     * Toggles the drawer open and close.
     */
    toggle: function toggle() {
      this.opened = !this.opened;
    },

    /**
     * Gets the width of the drawer.
     *
     * @return {number} The width of the drawer in pixels.
     */
    getWidth: function getWidth() {
      return this._savedWidth || this.$.contentContainer.offsetWidth;
    },
    _isRTL: function _isRTL() {
      return window.getComputedStyle(this).direction === 'rtl';
    },
    _resetPosition: function _resetPosition() {
      switch (this.align) {
        case 'start':
          this._setPosition(this._isRTL() ? 'right' : 'left');

          return;

        case 'end':
          this._setPosition(this._isRTL() ? 'left' : 'right');

          return;
      }

      this._setPosition(this.align);
    },
    _escKeydownHandler: function _escKeydownHandler(event) {
      var ESC_KEYCODE = 27;

      if (event.keyCode === ESC_KEYCODE) {
        // Prevent any side effects if app-drawer closes.
        event.preventDefault();
        this.close();
      }
    },
    _track: function _track(event) {
      if (this.persistent || this.disableSwipe) {
        return;
      } // Disable user selection on desktop.


      event.preventDefault();

      switch (event.detail.state) {
        case 'start':
          this._trackStart(event);

          break;

        case 'track':
          this._trackMove(event);

          break;

        case 'end':
          this._trackEnd(event);

          break;
      }
    },
    _trackStart: function _trackStart(event) {
      this._drawerState = this._DRAWER_STATE.TRACKING;
      var rect = this.$.contentContainer.getBoundingClientRect();
      this._savedWidth = rect.width;

      if (this.position === 'left') {
        this._translateOffset = rect.left;
      } else {
        this._translateOffset = rect.right - window.innerWidth;
      }

      this._trackDetails = []; // Disable transitions since style attributes will reflect user track
      // events.

      this._styleTransitionDuration(0);

      this.style.visibility = 'visible';
    },
    _trackMove: function _trackMove(event) {
      this._translateDrawer(event.detail.dx + this._translateOffset); // Use Date.now() since event.timeStamp is inconsistent across browsers
      // (e.g. most browsers use milliseconds but FF 44 uses microseconds).


      this._trackDetails.push({
        dx: event.detail.dx,
        timeStamp: Date.now()
      });
    },
    _trackEnd: function _trackEnd(event) {
      var x = event.detail.dx + this._translateOffset;
      var drawerWidth = this.getWidth();
      var isPositionLeft = this.position === 'left';
      var isInEndState = isPositionLeft ? x >= 0 || x <= -drawerWidth : x <= 0 || x >= drawerWidth;

      if (!isInEndState) {
        // No longer need the track events after this method returns - allow them
        // to be GC'd.
        var trackDetails = this._trackDetails;
        this._trackDetails = null;

        this._flingDrawer(event, trackDetails);

        if (this._drawerState === this._DRAWER_STATE.FLINGING) {
          return;
        }
      } // If the drawer is not flinging, toggle the opened state based on the
      // position of the drawer.


      var halfWidth = drawerWidth / 2;

      if (event.detail.dx < -halfWidth) {
        this.opened = this.position === 'right';
      } else if (event.detail.dx > halfWidth) {
        this.opened = this.position === 'left';
      }

      if (isInEndState) {
        this.debounce('_resetDrawerState', this._resetDrawerState);
      } else {
        this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration);
      }

      this._styleTransitionDuration(this.transitionDuration);

      this._resetDrawerTranslate();

      this.style.visibility = '';
    },
    _calculateVelocity: function _calculateVelocity(event, trackDetails) {
      // Find the oldest track event that is within 100ms using binary search.
      var now = Date.now();
      var timeLowerBound = now - 100;
      var trackDetail;
      var min = 0;
      var max = trackDetails.length - 1;

      while (min <= max) {
        // Floor of average of min and max.
        var mid = min + max >> 1;
        var d = trackDetails[mid];

        if (d.timeStamp >= timeLowerBound) {
          trackDetail = d;
          max = mid - 1;
        } else {
          min = mid + 1;
        }
      }

      if (trackDetail) {
        var dx = event.detail.dx - trackDetail.dx;
        var dt = now - trackDetail.timeStamp || 1;
        return dx / dt;
      }

      return 0;
    },
    _flingDrawer: function _flingDrawer(event, trackDetails) {
      var velocity = this._calculateVelocity(event, trackDetails); // Do not fling if velocity is not above a threshold.


      if (Math.abs(velocity) < this._MIN_FLING_THRESHOLD) {
        return;
      }

      this._drawerState = this._DRAWER_STATE.FLINGING;
      var x = event.detail.dx + this._translateOffset;
      var drawerWidth = this.getWidth();
      var isPositionLeft = this.position === 'left';
      var isVelocityPositive = velocity > 0;
      var isClosingLeft = !isVelocityPositive && isPositionLeft;
      var isClosingRight = isVelocityPositive && !isPositionLeft;
      var dx;

      if (isClosingLeft) {
        dx = -(x + drawerWidth);
      } else if (isClosingRight) {
        dx = drawerWidth - x;
      } else {
        dx = -x;
      } // Enforce a minimum transition velocity to make the drawer feel snappy.


      if (isVelocityPositive) {
        velocity = Math.max(velocity, this._MIN_TRANSITION_VELOCITY);
        this.opened = this.position === 'left';
      } else {
        velocity = Math.min(velocity, -this._MIN_TRANSITION_VELOCITY);
        this.opened = this.position === 'right';
      } // Calculate the amount of time needed to finish the transition based on the
      // initial slope of the timing function.


      var t = this._FLING_INITIAL_SLOPE * dx / velocity;

      this._styleTransitionDuration(t);

      this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);

      this._resetDrawerTranslate();

      this.debounce('_resetDrawerState', this._resetDrawerState, t);
    },
    _styleTransitionDuration: function _styleTransitionDuration(duration) {
      this.style.transitionDuration = duration + 'ms';
      this.$.contentContainer.style.transitionDuration = duration + 'ms';
      this.$.scrim.style.transitionDuration = duration + 'ms';
    },
    _styleTransitionTimingFunction: function _styleTransitionTimingFunction(timingFunction) {
      this.$.contentContainer.style.transitionTimingFunction = timingFunction;
      this.$.scrim.style.transitionTimingFunction = timingFunction;
    },
    _translateDrawer: function _translateDrawer(x) {
      var drawerWidth = this.getWidth();

      if (this.position === 'left') {
        x = Math.max(-drawerWidth, Math.min(x, 0));
        this.$.scrim.style.opacity = 1 + x / drawerWidth;
      } else {
        x = Math.max(0, Math.min(x, drawerWidth));
        this.$.scrim.style.opacity = 1 - x / drawerWidth;
      }

      this.translate3d(x + 'px', '0', '0', this.$.contentContainer);
    },
    _resetDrawerTranslate: function _resetDrawerTranslate() {
      this.$.scrim.style.opacity = '';
      this.transform('', this.$.contentContainer);
    },
    _resetDrawerState: function _resetDrawerState() {
      var oldState = this._drawerState; // If the drawer was flinging, we need to reset the style attributes.

      if (oldState === this._DRAWER_STATE.FLINGING) {
        this._styleTransitionDuration(this.transitionDuration);

        this._styleTransitionTimingFunction('');

        this.style.visibility = '';
      }

      this._savedWidth = null;

      if (this.opened) {
        this._drawerState = this.persistent ? this._DRAWER_STATE.OPENED_PERSISTENT : this._DRAWER_STATE.OPENED;
      } else {
        this._drawerState = this._DRAWER_STATE.CLOSED;
      }

      if (oldState !== this._drawerState) {
        if (this._drawerState === this._DRAWER_STATE.OPENED) {
          this._setKeyboardFocusTrap();

          document.addEventListener('keydown', this._boundEscKeydownHandler);
          document.body.style.overflow = 'hidden';
        } else {
          document.removeEventListener('keydown', this._boundEscKeydownHandler);
          document.body.style.overflow = '';
        } // Don't fire the event on initial load.


        if (oldState !== this._DRAWER_STATE.INIT) {
          this.fire('app-drawer-transitioned');
        }
      }
    },

    /**
     * Resets the layout.
     *
     * @method resetLayout
     */
    resetLayout: function resetLayout() {
      this.fire('app-reset-layout');
    },
    _setKeyboardFocusTrap: function _setKeyboardFocusTrap() {
      if (this.noFocusTrap) {
        return;
      } // NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
      // this will not select focusable elements inside shadow roots.


      var focusableElementsSelector = ['a[href]:not([tabindex="-1"])', 'area[href]:not([tabindex="-1"])', 'input:not([disabled]):not([tabindex="-1"])', 'select:not([disabled]):not([tabindex="-1"])', 'textarea:not([disabled]):not([tabindex="-1"])', 'button:not([disabled]):not([tabindex="-1"])', 'iframe:not([tabindex="-1"])', '[tabindex]:not([tabindex="-1"])', '[contentEditable=true]:not([tabindex="-1"])'].join(',');
      var focusableElements = (0, _polymerDom.dom)(this).querySelectorAll(focusableElementsSelector);

      if (focusableElements.length > 0) {
        this._firstTabStop = focusableElements[0];
        this._lastTabStop = focusableElements[focusableElements.length - 1];
      } else {
        // Reset saved tab stops when there are no focusable elements in the
        // drawer.
        this._firstTabStop = null;
        this._lastTabStop = null;
      } // Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
      // first focusable element in the drawer, if it exists. Use the tabindex
      // attribute since the this.tabIndex property in IE/Edge returns 0 (instead
      // of -1) when the attribute is not set.


      var tabindex = this.getAttribute('tabindex');

      if (tabindex && parseInt(tabindex, 10) > -1) {
        this.focus();
      } else if (this._firstTabStop) {
        this._firstTabStop.focus();
      }
    },
    _tabKeydownHandler: function _tabKeydownHandler(event) {
      if (this.noFocusTrap) {
        return;
      }

      var TAB_KEYCODE = 9;

      if (this._drawerState === this._DRAWER_STATE.OPENED && event.keyCode === TAB_KEYCODE) {
        if (event.shiftKey) {
          if (this._firstTabStop && (0, _polymerDom.dom)(event).localTarget === this._firstTabStop) {
            event.preventDefault();

            this._lastTabStop.focus();
          }
        } else {
          if (this._lastTabStop && (0, _polymerDom.dom)(event).localTarget === this._lastTabStop) {
            event.preventDefault();

            this._firstTabStop.focus();
          }
        }
      }
    },
    _openedPersistentChanged: function _openedPersistentChanged(opened, persistent) {
      this.toggleClass('visible', opened && !persistent, this.$.scrim); // Use a debounce timer instead of transitionend since transitionend won't
      // fire when app-drawer is display: none.

      this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration);
    },
    _MIN_FLING_THRESHOLD: 0.2,
    _MIN_TRANSITION_VELOCITY: 1.2,
    _FLING_TIMING_FUNCTION: 'cubic-bezier(0.667, 1, 0.667, 1)',
    _FLING_INITIAL_SLOPE: 1.5,
    _DRAWER_STATE: {
      INIT: 0,
      OPENED: 1,
      OPENED_PERSISTENT: 2,
      CLOSED: 3,
      TRACKING: 4,
      FLINGING: 5
      /**
       * Fired when the layout of app-drawer has changed.
       *
       * @event app-reset-layout
       */

      /**
       * Fired when app-drawer has finished transitioning.
       *
       * @event app-drawer-transitioned
       */

    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-header/app-header.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header/app-header.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"), __webpack_require__(/*! ../app-scroll-effects/app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js"), __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_polymerLegacy, _ironFlexLayout, _appScrollEffectsBehavior, _appLayoutBehavior, _polymerFn, _htmlTag, _polymerDom) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: \"\";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id=\"contentContainer\">\n      <slot id=\"slot\"></slot>\n    </div>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  (0, _polymerFn.Polymer)({
    _template: (0, _htmlTag.html)(_templateObject()),
    is: 'app-header',
    behaviors: [_appScrollEffectsBehavior.AppScrollEffectsBehavior, _appLayoutBehavior.AppLayoutBehavior],
    properties: {
      /**
       * If true, the header will automatically collapse when scrolling down.
       * That is, the `sticky` element remains visible when the header is fully
       *condensed whereas the rest of the elements will collapse below `sticky`
       *element.
       *
       * By default, the `sticky` element is the first toolbar in the light DOM:
       *
       *```html
       * <app-header condenses>
       *   <app-toolbar>This toolbar remains on top</app-toolbar>
       *   <app-toolbar></app-toolbar>
       *   <app-toolbar></app-toolbar>
       * </app-header>
       * ```
       *
       * Additionally, you can specify which toolbar or element remains visible in
       *condensed mode by adding the `sticky` attribute to that element. For
       *example: if we want the last toolbar to remain visible, we can add the
       *`sticky` attribute to it.
       *
       *```html
       * <app-header condenses>
       *   <app-toolbar></app-toolbar>
       *   <app-toolbar></app-toolbar>
       *   <app-toolbar sticky>This toolbar remains on top</app-toolbar>
       * </app-header>
       * ```
       *
       * Note the `sticky` element must be a direct child of `app-header`.
       */
      condenses: {
        type: Boolean,
        value: false
      },

      /**
       * Mantains the header fixed at the top so it never moves away.
       */
      fixed: {
        type: Boolean,
        value: false
      },

      /**
       * Slides back the header when scrolling back up.
       */
      reveals: {
        type: Boolean,
        value: false
      },

      /**
       * Displays a shadow below the header.
       */
      shadow: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      }
    },
    observers: ['_configChanged(isAttached, condenses, fixed)'],

    /**
     * A cached offsetHeight of the current element.
     *
     * @type {number}
     */
    _height: 0,

    /**
     * The distance in pixels the header will be translated to when scrolling.
     *
     * @type {number}
     */
    _dHeight: 0,

    /**
     * The offsetTop of `_stickyEl`
     *
     * @type {number}
     */
    _stickyElTop: 0,

    /**
     * A reference to the element that remains visible when the header condenses.
     *
     * @type {HTMLElement}
     */
    _stickyElRef: null,

    /**
     * The header's top value used for the `transformY`
     *
     * @type {number}
     */
    _top: 0,

    /**
     * The current scroll progress.
     *
     * @type {number}
     */
    _progress: 0,
    _wasScrollingDown: false,
    _initScrollTop: 0,
    _initTimestamp: 0,
    _lastTimestamp: 0,
    _lastScrollTop: 0,

    /**
     * The distance the header is allowed to move away.
     *
     * @type {number}
     */
    get _maxHeaderTop() {
      return this.fixed ? this._dHeight : this._height + 5;
    },

    /**
     * Returns a reference to the sticky element.
     *
     * @return {HTMLElement}?
     */
    get _stickyEl() {
      if (this._stickyElRef) {
        return this._stickyElRef;
      }

      var nodes = (0, _polymerDom.dom)(this.$.slot).getDistributedNodes(); // Get the element with the sticky attribute on it or the first element in
      // the light DOM.

      for (var i = 0, node; node =
      /** @type {!HTMLElement} */
      nodes[i]; i++) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.hasAttribute('sticky')) {
            this._stickyElRef = node;
            break;
          } else if (!this._stickyElRef) {
            this._stickyElRef = node;
          }
        }
      }

      return this._stickyElRef;
    },

    _configChanged: function _configChanged() {
      this.resetLayout();

      this._notifyLayoutChanged();
    },
    _updateLayoutStates: function _updateLayoutStates() {
      if (this.offsetWidth === 0 && this.offsetHeight === 0) {
        return;
      }

      var scrollTop = this._clampedScrollTop;
      var firstSetup = this._height === 0 || scrollTop === 0;
      var currentDisabled = this.disabled;
      this._height = this.offsetHeight;
      this._stickyElRef = null;
      this.disabled = true; // prepare for measurement

      if (!firstSetup) {
        this._updateScrollState(0, true);
      }

      if (this._mayMove()) {
        this._dHeight = this._stickyEl ? this._height - this._stickyEl.offsetHeight : 0;
      } else {
        this._dHeight = 0;
      }

      this._stickyElTop = this._stickyEl ? this._stickyEl.offsetTop : 0;

      this._setUpEffect();

      if (firstSetup) {
        this._updateScrollState(scrollTop, true);
      } else {
        this._updateScrollState(this._lastScrollTop, true);

        this._layoutIfDirty();
      } // restore no transition


      this.disabled = currentDisabled;
    },

    /**
     * Updates the scroll state.
     *
     * @param {number} scrollTop
     * @param {boolean=} forceUpdate (default: false)
     */
    _updateScrollState: function _updateScrollState(scrollTop, forceUpdate) {
      if (this._height === 0) {
        return;
      }

      var progress = 0;
      var top = 0;
      var lastTop = this._top;
      var lastScrollTop = this._lastScrollTop;
      var maxHeaderTop = this._maxHeaderTop;
      var dScrollTop = scrollTop - this._lastScrollTop;
      var absDScrollTop = Math.abs(dScrollTop);
      var isScrollingDown = scrollTop > this._lastScrollTop;
      var now = performance.now();

      if (this._mayMove()) {
        top = this._clamp(this.reveals ? lastTop + dScrollTop : scrollTop, 0, maxHeaderTop);
      }

      if (scrollTop >= this._dHeight) {
        top = this.condenses && !this.fixed ? Math.max(this._dHeight, top) : top;
        this.style.transitionDuration = '0ms';
      }

      if (this.reveals && !this.disabled && absDScrollTop < 100) {
        // set the initial scroll position
        if (now - this._initTimestamp > 300 || this._wasScrollingDown !== isScrollingDown) {
          this._initScrollTop = scrollTop;
          this._initTimestamp = now;
        }

        if (scrollTop >= maxHeaderTop) {
          // check if the header is allowed to snap
          if (Math.abs(this._initScrollTop - scrollTop) > 30 || absDScrollTop > 10) {
            if (isScrollingDown && scrollTop >= maxHeaderTop) {
              top = maxHeaderTop;
            } else if (!isScrollingDown && scrollTop >= this._dHeight) {
              top = this.condenses && !this.fixed ? this._dHeight : 0;
            }

            var scrollVelocity = dScrollTop / (now - this._lastTimestamp);
            this.style.transitionDuration = this._clamp((top - lastTop) / scrollVelocity, 0, 300) + 'ms';
          } else {
            top = this._top;
          }
        }
      }

      if (this._dHeight === 0) {
        progress = scrollTop > 0 ? 1 : 0;
      } else {
        progress = top / this._dHeight;
      }

      if (!forceUpdate) {
        this._lastScrollTop = scrollTop;
        this._top = top;
        this._wasScrollingDown = isScrollingDown;
        this._lastTimestamp = now;
      }

      if (forceUpdate || progress !== this._progress || lastTop !== top || scrollTop === 0) {
        this._progress = progress;

        this._runEffects(progress, top);

        this._transformHeader(top);
      }
    },

    /**
     * Returns true if the current header is allowed to move as the user scrolls.
     *
     * @return {boolean}
     */
    _mayMove: function _mayMove() {
      return this.condenses || !this.fixed;
    },

    /**
     * Returns true if the current header will condense based on the size of the
     * header and the `consenses` property.
     *
     * @return {boolean}
     */
    willCondense: function willCondense() {
      return this._dHeight > 0 && this.condenses;
    },

    /**
     * Returns true if the current element is on the screen.
     * That is, visible in the current viewport.
     *
     * @method isOnScreen
     * @return {boolean}
     */
    isOnScreen: function isOnScreen() {
      return this._height !== 0 && this._top < this._height;
    },

    /**
     * Returns true if there's content below the current element.
     *
     * @method isContentBelow
     * @return {boolean}
     */
    isContentBelow: function isContentBelow() {
      return this._top === 0 ? this._clampedScrollTop > 0 : this._clampedScrollTop - this._maxHeaderTop >= 0;
    },

    /**
     * Transforms the header.
     *
     * @param {number} y
     */
    _transformHeader: function _transformHeader(y) {
      this.translate3d(0, -y + 'px', 0);

      if (this._stickyEl) {
        this.translate3d(0, this.condenses && y >= this._stickyElTop ? Math.min(y, this._dHeight) - this._stickyElTop + 'px' : 0, 0, this._stickyEl);
      }
    },
    _clamp: function _clamp(v, min, max) {
      return Math.min(max, Math.max(min, v));
    },
    _ensureBgContainers: function _ensureBgContainers() {
      if (!this._bgContainer) {
        this._bgContainer = document.createElement('div');
        this._bgContainer.id = 'background';
        this._bgRear = document.createElement('div');
        this._bgRear.id = 'backgroundRearLayer';

        this._bgContainer.appendChild(this._bgRear);

        this._bgFront = document.createElement('div');
        this._bgFront.id = 'backgroundFrontLayer';

        this._bgContainer.appendChild(this._bgFront);

        (0, _polymerDom.dom)(this.root).insertBefore(this._bgContainer, this.$.contentContainer);
      }
    },
    _getDOMRef: function _getDOMRef(id) {
      switch (id) {
        case 'backgroundFrontLayer':
          this._ensureBgContainers();

          return this._bgFront;

        case 'backgroundRearLayer':
          this._ensureBgContainers();

          return this._bgRear;

        case 'background':
          this._ensureBgContainers();

          return this._bgContainer;

        case 'mainTitle':
          return (0, _polymerDom.dom)(this).querySelector('[main-title]');

        case 'condensedTitle':
          return (0, _polymerDom.dom)(this).querySelector('[condensed-title]');
      }

      return null;
    },

    /**
     * Returns an object containing the progress value of the scroll effects
     * and the top position of the header.
     *
     * @method getScrollState
     * @return {Object}
     */
    getScrollState: function getScrollState() {
      return {
        progress: this._progress,
        top: this._top
      };
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerLegacy, _ironResizableBehavior, _polymerDom, async, _debounce, _flush) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AppLayoutBehavior = void 0;
  async = babelHelpers.interopRequireWildcard(async);

  /**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @polymerBehavior Polymer.AppLayoutBehavior
   **/
  var AppLayoutBehavior = [_ironResizableBehavior.IronResizableBehavior, {
    listeners: {
      'app-reset-layout': '_appResetLayoutHandler',
      'iron-resize': 'resetLayout'
    },
    attached: function attached() {
      this.fire('app-reset-layout');
    },
    _appResetLayoutHandler: function _appResetLayoutHandler(e) {
      if ((0, _polymerDom.dom)(e).path[0] === this) {
        return;
      }

      this.resetLayout();
      e.stopPropagation();
    },
    _updateLayoutStates: function _updateLayoutStates() {
      console.error('unimplemented');
    },

    /**
     * Resets the layout. If you changed the size of this element via CSS
     * you can notify the changes by either firing the `iron-resize` event
     * or calling `resetLayout` directly.
     *
     * @method resetLayout
     */
    resetLayout: function resetLayout() {
      // Polymer v2.x
      var self = this;

      var cb = this._updateLayoutStates.bind(this);

      if (async && async.animationFrame) {
        this._layoutDebouncer = _debounce.Debouncer.debounce(this._layoutDebouncer, async.animationFrame, cb);
        (0, _flush.enqueueDebouncer)(this._layoutDebouncer);
      } // Polymer v1.x
      else {
          this.debounce('resetLayout', cb);
        }

      this._notifyDescendantResize();
    },
    _notifyLayoutChanged: function _notifyLayoutChanged() {
      var self = this; // TODO: the event `app-reset-layout` can be fired synchronously
      // as long as `_updateLayoutStates` waits for all the microtasks after
      // rAF. E.g. requestAnimationFrame(setTimeOut())

      requestAnimationFrame(function () {
        self.fire('app-reset-layout');
      });
    },
    _notifyDescendantResize: function _notifyDescendantResize() {
      if (!this.isAttached) {
        return;
      }

      this._interestedResizables.forEach(function (resizable) {
        if (this.resizerShouldNotify(resizable)) {
          this._notifyDescendant(resizable);
        }
      }, this);
    }
  }];
  _exports.AppLayoutBehavior = AppLayoutBehavior;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js"), __webpack_require__(/*! ../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerLegacy, _ironScrollTargetBehavior, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.AppScrollEffectsBehavior = void 0;

  /**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * `Polymer.AppScrollEffectsBehavior` provides an interface that allows an
   * element to use scrolls effects.
   *
   * ### Importing the app-layout effects
   *
   * app-layout provides a set of scroll effects that can be used by explicitly
   * importing `app-scroll-effects.html`:
   *
   * ```html
   * <link rel="import"
   * href="/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html">
   * ```
   *
   * The scroll effects can also be used by individually importing
   * `app-layout/app-scroll-effects/effects/[effectName].html`. For example:
   *
   * ```html
   *  <link rel="import"
   * href="/bower_components/app-layout/app-scroll-effects/effects/waterfall.html">
   * ```
   *
   * ### Consuming effects
   *
   * Effects can be consumed via the `effects` property. For example:
   *
   * ```html
   * <app-header effects="waterfall"></app-header>
   * ```
   *
   * ### Creating scroll effects
   *
   * You may want to create a custom scroll effect if you need to modify the CSS
   * of an element based on the scroll position.
   *
   * A scroll effect definition is an object with `setUp()`, `tearDown()` and
   * `run()` functions.
   *
   * To register the effect, you can use
   * `Polymer.AppLayout.registerEffect(effectName, effectDef)` For example, let's
   * define an effect that resizes the header's logo:
   *
   * ```js
   * Polymer.AppLayout.registerEffect('resizable-logo', {
   *   setUp: function(config) {
   *     // the effect's config is passed to the setUp.
   *     this._fxResizeLogo = { logo: Polymer.dom(this).querySelector('[logo]') };
   *   },
   *
   *   run: function(progress) {
   *      // the progress of the effect
   *      this.transform('scale3d(' + progress + ', '+ progress +', 1)',
   * this._fxResizeLogo.logo);
   *   },
   *
   *   tearDown: function() {
   *      // clean up and reset of states
   *      delete this._fxResizeLogo;
   *   }
   * });
   * ```
   * Now, you can consume the effect:
   *
   * ```html
   * <app-header id="appHeader" effects="resizable-logo">
   *   <img logo src="logo.svg">
   * </app-header>
   * ```
   *
   * ### Imperative API
   *
   * ```js
   * var logoEffect = appHeader.createEffect('resizable-logo', effectConfig);
   * // run the effect: logoEffect.run(progress);
   * // tear down the effect: logoEffect.tearDown();
   * ```
   *
   * ### Configuring effects
   *
   * For effects installed via the `effects` property, their configuration can be
   * set via the `effectsConfig` property. For example:
   *
   * ```html
   * <app-header effects="waterfall"
   *   effects-config='{"waterfall": {"startsAt": 0, "endsAt": 0.5}}'>
   * </app-header>
   * ```
   *
   * All effects have a `startsAt` and `endsAt` config property. They specify at
   * what point the effect should start and end. This value goes from 0 to 1
   * inclusive.
   *
   * @polymerBehavior
   */
  var AppScrollEffectsBehavior = [_ironScrollTargetBehavior.IronScrollTargetBehavior, {
    properties: {
      /**
       * A space-separated list of the effects names that will be triggered when
       * the user scrolls. e.g. `waterfall parallax-background` installs the
       * `waterfall` and `parallax-background`.
       */
      effects: {
        type: String
      },

      /**
       * An object that configurates the effects installed via the `effects`
       * property. e.g.
       * ```js
       *  element.effectsConfig = {
       *   "blend-background": {
       *     "startsAt": 0.5
       *   }
       * };
       * ```
       * Every effect has at least two config properties: `startsAt` and
       * `endsAt`. These properties indicate when the event should start and end
       * respectively and relative to the overall element progress. So for
       * example, if `blend-background` starts at `0.5`, the effect will only
       * start once the current element reaches 0.5 of its progress. In this
       * context, the progress is a value in the range of `[0, 1]` that
       * indicates where this element is on the screen relative to the viewport.
       */
      effectsConfig: {
        type: Object,
        value: function value() {
          return {};
        }
      },

      /**
       * Disables CSS transitions and scroll effects on the element.
       */
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
        value: false
      },

      /**
       * Allows to set a `scrollTop` threshold. When greater than 0,
       * `thresholdTriggered` is true only when the scroll target's `scrollTop`
       * has reached this value.
       *
       * For example, if `threshold = 100`, `thresholdTriggered` is true when
       * the `scrollTop` is at least `100`.
       */
      threshold: {
        type: Number,
        value: 0
      },

      /**
       * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
       * been reached.
       */
      thresholdTriggered: {
        type: Boolean,
        notify: true,
        readOnly: true,
        reflectToAttribute: true
      }
    },
    observers: ['_effectsChanged(effects, effectsConfig, isAttached)'],

    /**
     * Updates the scroll state. This method should be overridden
     * by the consumer of this behavior.
     *
     * @method _updateScrollState
     * @param {number} scrollTop
     */
    _updateScrollState: function _updateScrollState(scrollTop) {},

    /**
     * Returns true if the current element is on the screen.
     * That is, visible in the current viewport. This method should be
     * overridden by the consumer of this behavior.
     *
     * @method isOnScreen
     * @return {boolean}
     */
    isOnScreen: function isOnScreen() {
      return false;
    },

    /**
     * Returns true if there's content below the current element. This method
     * should be overridden by the consumer of this behavior.
     *
     * @method isContentBelow
     * @return {boolean}
     */
    isContentBelow: function isContentBelow() {
      return false;
    },

    /**
     * List of effects handlers that will take place during scroll.
     *
     * @type {Array<Function>}
     */
    _effectsRunFn: null,

    /**
     * List of the effects definitions installed via the `effects` property.
     *
     * @type {Array<Object>}
     */
    _effects: null,

    /**
     * The clamped value of `_scrollTop`.
     * @type number
     */
    get _clampedScrollTop() {
      return Math.max(0, this._scrollTop);
    },

    detached: function detached() {
      this._tearDownEffects();
    },

    /**
     * Creates an effect object from an effect's name that can be used to run
     * effects programmatically.
     *
     * @method createEffect
     * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
     * @param {Object=} effectConfig The effect config object. (Optional)
     * @return {Object} An effect object with the following functions:
     *
     *  * `effect.setUp()`, Sets up the requirements for the effect.
     *       This function is called automatically before the `effect` function
     * returns.
     *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
     *  * `effect.tearDown()`, Cleans up any DOM nodes or element references
     * used by the effect.
     *
     * Example:
     * ```js
     * var parallax = element.createEffect('parallax-background');
     * // runs the effect
     * parallax.run(0.5, 0);
     * ```
     */
    createEffect: function createEffect(effectName, effectConfig) {
      var effectDef = _helpers._scrollEffects[effectName];

      if (!effectDef) {
        throw new ReferenceError(this._getUndefinedMsg(effectName));
      }

      var prop = this._boundEffect(effectDef, effectConfig || {});

      prop.setUp();
      return prop;
    },

    /**
     * Called when `effects` or `effectsConfig` changes.
     */
    _effectsChanged: function _effectsChanged(effects, effectsConfig, isAttached) {
      this._tearDownEffects();

      if (!effects || !isAttached) {
        return;
      }

      effects.split(' ').forEach(function (effectName) {
        var effectDef;

        if (effectName !== '') {
          if (effectDef = _helpers._scrollEffects[effectName]) {
            this._effects.push(this._boundEffect(effectDef, effectsConfig[effectName]));
          } else {
            console.warn(this._getUndefinedMsg(effectName));
          }
        }
      }, this);

      this._setUpEffect();
    },

    /**
     * Forces layout
     */
    _layoutIfDirty: function _layoutIfDirty() {
      return this.offsetWidth;
    },

    /**
     * Returns an effect object bound to the current context.
     *
     * @param {Object} effectDef
     * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
     */
    _boundEffect: function _boundEffect(effectDef, effectsConfig) {
      effectsConfig = effectsConfig || {};
      var startsAt = parseFloat(effectsConfig.startsAt || 0);
      var endsAt = parseFloat(effectsConfig.endsAt || 1);
      var deltaS = endsAt - startsAt;

      var noop = function noop() {}; // fast path if possible


      var runFn = startsAt === 0 && endsAt === 1 ? effectDef.run : function (progress, y) {
        effectDef.run.call(this, Math.max(0, (progress - startsAt) / deltaS), y);
      };
      return {
        setUp: effectDef.setUp ? effectDef.setUp.bind(this, effectsConfig) : noop,
        run: effectDef.run ? runFn.bind(this) : noop,
        tearDown: effectDef.tearDown ? effectDef.tearDown.bind(this) : noop
      };
    },

    /**
     * Sets up the effects.
     */
    _setUpEffect: function _setUpEffect() {
      if (this.isAttached && this._effects) {
        this._effectsRunFn = [];

        this._effects.forEach(function (effectDef) {
          // install the effect only if no error was reported
          if (effectDef.setUp() !== false) {
            this._effectsRunFn.push(effectDef.run);
          }
        }, this);
      }
    },

    /**
     * Tears down the effects.
     */
    _tearDownEffects: function _tearDownEffects() {
      if (this._effects) {
        this._effects.forEach(function (effectDef) {
          effectDef.tearDown();
        });
      }

      this._effectsRunFn = [];
      this._effects = [];
    },

    /**
     * Runs the effects.
     *
     * @param {number} p The progress
     * @param {number} y The top position of the current element relative to the viewport.
     */
    _runEffects: function _runEffects(p, y) {
      if (this._effectsRunFn) {
        this._effectsRunFn.forEach(function (run) {
          run(p, y);
        });
      }
    },

    /**
     * Overrides the `_scrollHandler`.
     */
    _scrollHandler: function _scrollHandler() {
      if (!this.disabled) {
        var scrollTop = this._clampedScrollTop;

        this._updateScrollState(scrollTop);

        if (this.threshold > 0) {
          this._setThresholdTriggered(scrollTop >= this.threshold);
        }
      }
    },

    /**
     * Override this method to return a reference to a node in the local DOM.
     * The node is consumed by a scroll effect.
     *
     * @param {string} id The id for the node.
     */
    _getDOMRef: function _getDOMRef(id) {
      console.warn('_getDOMRef', '`' + id + '` is undefined');
    },
    _getUndefinedMsg: function _getUndefinedMsg(effectName) {
      return 'Scroll effect `' + effectName + '` is undefined. ' + 'Did you forget to import app-layout/app-scroll-effects/effects/' + effectName + '.html ?';
    }
  }];
  _exports.AppScrollEffectsBehavior = AppScrollEffectsBehavior;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js"), __webpack_require__(/*! ../../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_appScrollEffectsBehavior, _helpers) {
  "use strict";

  /**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Toggles the shadow property in app-header when content is scrolled to create
   * a sense of depth between the element and the content underneath.
   */
  (0, _helpers.registerEffect)('waterfall', {
    /**
     *  @this Polymer.AppLayout.ElementWithBackground
     */
    run: function run() {
      this.shadow = this.isOnScreen() && this.isContentBelow();
    }
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_polymerLegacy, _ironFlexLayout, _polymerFn, _htmlTag) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  (0, _polymerFn.Polymer)({
    _template: (0, _htmlTag.html)(_templateObject()),
    is: 'app-toolbar'
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/app-layout/helpers/helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/helpers/helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerLegacy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.scroll = _exports.queryAllRoot = _exports.registerEffect = _exports.scrollTimingFunction = _exports._scrollTimer = _exports._scrollEffects = void 0;

  /**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var _scrollEffects = {};
  _exports._scrollEffects = _scrollEffects;
  var _scrollTimer = null;
  _exports._scrollTimer = _scrollTimer;

  var scrollTimingFunction = function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  };
  /**
   * Registers a scroll effect to be used in elements that implement the
   * `Polymer.AppScrollEffectsBehavior` behavior.
   *
   * @param {string} effectName The effect name.
   * @param {Object} effectDef The effect definition.
   */


  _exports.scrollTimingFunction = scrollTimingFunction;

  var registerEffect = function registerEffect(effectName, effectDef) {
    if (_scrollEffects[effectName] != null) {
      throw new Error('effect `' + effectName + '` is already registered.');
    }

    _scrollEffects[effectName] = effectDef;
  };

  _exports.registerEffect = registerEffect;

  var queryAllRoot = function queryAllRoot(selector, root) {
    var queue = [root];
    var matches = [];

    while (queue.length > 0) {
      var node = queue.shift();
      matches.push.apply(matches, node.querySelectorAll(selector));

      for (var i = 0; node.children[i]; i++) {
        if (node.children[i].shadowRoot) {
          queue.push(node.children[i].shadowRoot);
        }
      }
    }

    return matches;
  };
  /**
   * Scrolls to a particular set of coordinates in a scroll target.
   * If the scroll target is not defined, then it would use the main document as
   * the target.
   *
   * To scroll in a smooth fashion, you can set the option `behavior: 'smooth'`.
   * e.g.
   *
   * ```js
   * Polymer.AppLayout.scroll({top: 0, behavior: 'smooth'});
   * ```
   *
   * To scroll in a silent mode, without notifying scroll changes to any
   * app-layout elements, you can set the option `behavior: 'silent'`. This is
   * particularly useful we you are using `app-header` and you desire to scroll to
   * the top of a scrolling region without running scroll effects. e.g.
   *
   * ```js
   * Polymer.AppLayout.scroll({top: 0, behavior: 'silent'});
   * ```
   *
   * @param {Object} options {top: Number, left: Number, behavior: String(smooth | silent)}
   */


  _exports.queryAllRoot = queryAllRoot;

  var scroll = function scroll(options) {
    options = options || {};
    var docEl = document.documentElement;
    var target = options.target || docEl;
    var hasNativeScrollBehavior = 'scrollBehavior' in target.style && target.scroll;
    var scrollClassName = 'app-layout-silent-scroll';
    var scrollTop = options.top || 0;
    var scrollLeft = options.left || 0;
    var scrollTo = target === docEl ? window.scrollTo : function scrollTo(scrollLeft, scrollTop) {
      target.scrollLeft = scrollLeft;
      target.scrollTop = scrollTop;
    };

    if (options.behavior === 'smooth') {
      if (hasNativeScrollBehavior) {
        target.scroll(options);
      } else {
        var timingFn = scrollTimingFunction;
        var startTime = Date.now();
        var currentScrollTop = target === docEl ? window.pageYOffset : target.scrollTop;
        var currentScrollLeft = target === docEl ? window.pageXOffset : target.scrollLeft;
        var deltaScrollTop = scrollTop - currentScrollTop;
        var deltaScrollLeft = scrollLeft - currentScrollLeft;
        var duration = 300;

        var updateFrame = function updateFrame() {
          var now = Date.now();
          var elapsedTime = now - startTime;

          if (elapsedTime < duration) {
            scrollTo(timingFn(elapsedTime, currentScrollLeft, deltaScrollLeft, duration), timingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration));
            requestAnimationFrame(updateFrame);
          } else {
            scrollTo(scrollLeft, scrollTop);
          }
        }.bind(this);

        updateFrame();
      }
    } else if (options.behavior === 'silent') {
      var headers = queryAllRoot('app-header', document.body);
      headers.forEach(function (header) {
        header.setAttribute('silent-scroll', '');
      }); // Browsers keep the scroll momentum even if the bottom of the scrolling
      // content was reached. This means that calling scroll({top: 0, behavior:
      // 'silent'}) when the momentum is still going will result in more scroll
      // events and thus scroll effects. This seems to only apply when using
      // document scrolling. Therefore, when should we remove the class from the
      // document element?

      if (_scrollTimer) {
        window.cancelAnimationFrame(_scrollTimer);
      }

      _exports._scrollTimer = _scrollTimer = window.requestAnimationFrame(function () {
        headers.forEach(function (header) {
          header.removeAttribute('silent-scroll');
        });
        _exports._scrollTimer = _scrollTimer = null;
      });
      scrollTo(scrollLeft, scrollTop);
    } else {
      scrollTo(scrollLeft, scrollTop);
    }
  };

  _exports.scroll = scroll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_polymerLegacy) {
  "use strict";

  /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
  The `<iron-flex-layout>` component provides simple ways to use
  [CSS flexible box layout](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes),
  also known as flexbox. This component provides two different ways to use flexbox:
  
  1. [Layout classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
  The layout class stylesheet provides a simple set of class-based flexbox rules, that
  let you specify layout properties directly in markup. You must include this file
  in every element that needs to use them.
  
      Sample use:
  
      ```
      <custom-element-demo>
        <template>
          <script src="../webcomponentsjs/webcomponents-lite.js"></script>
          <next-code-block></next-code-block>
        </template>
      </custom-element-demo>
      ```
  
      ```html
      <link rel="import" href="iron-flex-layout-classes.html">
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
      ```
  
  2. [Custom CSS mixins](https://github.com/PolymerElements/iron-flex-layout/blob/master/iron-flex-layout.html).
  The mixin stylesheet includes custom CSS mixins that can be applied inside a CSS rule using the `@apply` function.
  
  Please note that the old [/deep/ layout classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/classes)
  are deprecated, and should not be used. To continue using layout properties
  directly in markup, please switch to using the new `dom-module`-based
  [layout classes](https://github.com/PolymerElements/iron-flex-layout/tree/master/iron-flex-layout-classes.html).
  Please note that the new version does not use `/deep/`, and therefore requires you
  to import the `dom-modules` in every element that needs to use them.
  
  A complete [guide](https://elements.polymer-project.org/guides/flex-layout) to `<iron-flex-layout>` is available.
  
  @group Iron Elements
  @pseudoElement iron-flex-layout
  @demo demo/index.html
  */

  /*
    FIXME(polymer-modulizer): the above comments were extracted
    from HTML and may be out of place here. Review them and
    then delete this comment!
  */
  var $_documentContainer = document.createElement('template');
  $_documentContainer.setAttribute('style', 'display: none;');
  $_documentContainer.innerHTML = "<custom-style><style is=\"custom-style\">[hidden] { display: none !important; }</style></custom-style><custom-style><style is=\"custom-style\">html { --layout: { display: -ms-flexbox; display: -webkit-flex; display: flex; }; --layout-inline: { display: -ms-inline-flexbox; display: -webkit-inline-flex; display: inline-flex; }; --layout-horizontal: { @apply --layout; -ms-flex-direction: row; -webkit-flex-direction: row; flex-direction: row; }; --layout-horizontal-reverse: { @apply --layout; -ms-flex-direction: row-reverse; -webkit-flex-direction: row-reverse; flex-direction: row-reverse; }; --layout-vertical: { @apply --layout; -ms-flex-direction: column; -webkit-flex-direction: column; flex-direction: column; }; --layout-vertical-reverse: { @apply --layout; -ms-flex-direction: column-reverse; -webkit-flex-direction: column-reverse; flex-direction: column-reverse; }; --layout-wrap: { -ms-flex-wrap: wrap; -webkit-flex-wrap: wrap; flex-wrap: wrap; }; --layout-wrap-reverse: { -ms-flex-wrap: wrap-reverse; -webkit-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse; }; --layout-flex-auto: { -ms-flex: 1 1 auto; -webkit-flex: 1 1 auto; flex: 1 1 auto; }; --layout-flex-none: { -ms-flex: none; -webkit-flex: none; flex: none; }; --layout-flex: { -ms-flex: 1 1 0.000000001px; -webkit-flex: 1; flex: 1; -webkit-flex-basis: 0.000000001px; flex-basis: 0.000000001px; }; --layout-flex-2: { -ms-flex: 2; -webkit-flex: 2; flex: 2; }; --layout-flex-3: { -ms-flex: 3; -webkit-flex: 3; flex: 3; }; --layout-flex-4: { -ms-flex: 4; -webkit-flex: 4; flex: 4; }; --layout-flex-5: { -ms-flex: 5; -webkit-flex: 5; flex: 5; }; --layout-flex-6: { -ms-flex: 6; -webkit-flex: 6; flex: 6; }; --layout-flex-7: { -ms-flex: 7; -webkit-flex: 7; flex: 7; }; --layout-flex-8: { -ms-flex: 8; -webkit-flex: 8; flex: 8; }; --layout-flex-9: { -ms-flex: 9; -webkit-flex: 9; flex: 9; }; --layout-flex-10: { -ms-flex: 10; -webkit-flex: 10; flex: 10; }; --layout-flex-11: { -ms-flex: 11; -webkit-flex: 11; flex: 11; }; --layout-flex-12: { -ms-flex: 12; -webkit-flex: 12; flex: 12; }; /* alignment in cross axis */ --layout-start: { -ms-flex-align: start; -webkit-align-items: flex-start; align-items: flex-start; }; --layout-center: { -ms-flex-align: center; -webkit-align-items: center; align-items: center; }; --layout-end: { -ms-flex-align: end; -webkit-align-items: flex-end; align-items: flex-end; }; --layout-baseline: { -ms-flex-align: baseline; -webkit-align-items: baseline; align-items: baseline; }; /* alignment in main axis */ --layout-start-justified: { -ms-flex-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; }; --layout-center-justified: { -ms-flex-pack: center; -webkit-justify-content: center; justify-content: center; }; --layout-end-justified: { -ms-flex-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; }; --layout-around-justified: { -ms-flex-pack: distribute; -webkit-justify-content: space-around; justify-content: space-around; }; --layout-justified: { -ms-flex-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }; --layout-center-center: { @apply --layout-center; @apply --layout-center-justified; }; /* self alignment */ --layout-self-start: { -ms-align-self: flex-start; -webkit-align-self: flex-start; align-self: flex-start; }; --layout-self-center: { -ms-align-self: center; -webkit-align-self: center; align-self: center; }; --layout-self-end: { -ms-align-self: flex-end; -webkit-align-self: flex-end; align-self: flex-end; }; --layout-self-stretch: { -ms-align-self: stretch; -webkit-align-self: stretch; align-self: stretch; }; --layout-self-baseline: { -ms-align-self: baseline; -webkit-align-self: baseline; align-self: baseline; }; /* multi-line alignment in main axis */ --layout-start-aligned: { -ms-flex-line-pack: start; /* IE10 */ -ms-align-content: flex-start; -webkit-align-content: flex-start; align-content: flex-start; }; --layout-end-aligned: { -ms-flex-line-pack: end; /* IE10 */ -ms-align-content: flex-end; -webkit-align-content: flex-end; align-content: flex-end; }; --layout-center-aligned: { -ms-flex-line-pack: center; /* IE10 */ -ms-align-content: center; -webkit-align-content: center; align-content: center; }; --layout-between-aligned: { -ms-flex-line-pack: justify; /* IE10 */ -ms-align-content: space-between; -webkit-align-content: space-between; align-content: space-between; }; --layout-around-aligned: { -ms-flex-line-pack: distribute; /* IE10 */ -ms-align-content: space-around; -webkit-align-content: space-around; align-content: space-around; }; /******************************* Other Layout *******************************/ --layout-block: { display: block; }; --layout-invisible: { visibility: hidden !important; }; --layout-relative: { position: relative; }; --layout-fit: { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }; --layout-scroll: { -webkit-overflow-scrolling: touch; overflow: auto; }; --layout-fullbleed: { margin: 0; height: 100vh; }; /* fixed position */ --layout-fixed-top: { position: fixed; top: 0; left: 0; right: 0; }; --layout-fixed-right: { position: fixed; top: 0; right: 0; bottom: 0; }; --layout-fixed-bottom: { position: fixed; right: 0; bottom: 0; left: 0; }; --layout-fixed-left: { position: fixed; top: 0; bottom: 0; left: 0; }; }</style></custom-style>";
  document.head.appendChild($_documentContainer.content);
  var style = document.createElement('style');
  style.textContent = '[hidden] { display: none !important; }';
  document.head.appendChild(style);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerLegacy, _settings, _polymerDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IronResizableBehavior = void 0;

  /**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // Contains all connected resizables that do not have a parent.
  var ORPHANS = new Set();
  /**
   * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
   * coordinate the flow of resize events between "resizers" (elements that
   *control the size or hidden state of their children) and "resizables" (elements
   *that need to be notified when they are resized or un-hidden by their parents
   *in order to take action on their new measurements).
   *
   * Elements that perform measurement should add the `IronResizableBehavior`
   *behavior to their element definition and listen for the `iron-resize` event on
   *themselves. This event will be fired when they become showing after having
   *been hidden, when they are resized explicitly by another resizable, or when
   *the window has been resized.
   *
   * Note, the `iron-resize` event is non-bubbling.
   *
   * @polymerBehavior Polymer.IronResizableBehavior
   * @demo demo/index.html
   **/

  var IronResizableBehavior = {
    properties: {
      /**
       * The closest ancestor element that implements `IronResizableBehavior`.
       */
      _parentResizable: {
        type: Object,
        observer: '_parentResizableChanged'
      },

      /**
       * True if this element is currently notifying its descendant elements of
       * resize.
       */
      _notifyingDescendant: {
        type: Boolean,
        value: false
      }
    },
    listeners: {
      'iron-request-resize-notifications': '_onIronRequestResizeNotifications'
    },
    created: function created() {
      // We don't really need property effects on these, and also we want them
      // to be created before the `_parentResizable` observer fires:
      this._interestedResizables = [];
      this._boundNotifyResize = this.notifyResize.bind(this);
    },
    attached: function attached() {
      this._requestResizeNotifications();
    },
    detached: function detached() {
      if (this._parentResizable) {
        this._parentResizable.stopResizeNotificationsFor(this);
      } else {
        ORPHANS.delete(this);
        window.removeEventListener('resize', this._boundNotifyResize);
      }

      this._parentResizable = null;
    },

    /**
     * Can be called to manually notify a resizable and its descendant
     * resizables of a resize change.
     */
    notifyResize: function notifyResize() {
      if (!this.isAttached) {
        return;
      }

      this._interestedResizables.forEach(function (resizable) {
        if (this.resizerShouldNotify(resizable)) {
          this._notifyDescendant(resizable);
        }
      }, this);

      this._fireResize();
    },

    /**
     * Used to assign the closest resizable ancestor to this resizable
     * if the ancestor detects a request for notifications.
     */
    assignParentResizable: function assignParentResizable(parentResizable) {
      if (this._parentResizable) {
        this._parentResizable.stopResizeNotificationsFor(this);
      }

      this._parentResizable = parentResizable;

      if (parentResizable && parentResizable._interestedResizables.indexOf(this) === -1) {
        parentResizable._interestedResizables.push(this);

        parentResizable.listen(this, 'iron-resize', '_onDescendantIronResize');
      }
    },

    /**
     * Used to remove a resizable descendant from the list of descendants
     * that should be notified of a resize change.
     */
    stopResizeNotificationsFor: function stopResizeNotificationsFor(target) {
      var index = this._interestedResizables.indexOf(target);

      if (index > -1) {
        this._interestedResizables.splice(index, 1);

        this.unlisten(target, 'iron-resize', '_onDescendantIronResize');
      }
    },

    /**
     * This method can be overridden to filter nested elements that should or
     * should not be notified by the current element. Return true if an element
     * should be notified, or false if it should not be notified.
     *
     * @param {HTMLElement} element A candidate descendant element that
     * implements `IronResizableBehavior`.
     * @return {boolean} True if the `element` should be notified of resize.
     */
    resizerShouldNotify: function resizerShouldNotify(element) {
      return true;
    },
    _onDescendantIronResize: function _onDescendantIronResize(event) {
      if (this._notifyingDescendant) {
        event.stopPropagation();
        return;
      } // NOTE(cdata): In ShadowDOM, event retargeting makes echoing of the
      // otherwise non-bubbling event "just work." We do it manually here for
      // the case where Polymer is not using shadow roots for whatever reason:


      if (!_settings.useShadow) {
        this._fireResize();
      }
    },
    _fireResize: function _fireResize() {
      this.fire('iron-resize', null, {
        node: this,
        bubbles: false
      });
    },
    _onIronRequestResizeNotifications: function _onIronRequestResizeNotifications(event) {
      var target =
      /** @type {!EventTarget} */
      (0, _polymerDom.dom)(event).rootTarget;

      if (target === this) {
        return;
      }

      target.assignParentResizable(this);

      this._notifyDescendant(target);

      event.stopPropagation();
    },
    _parentResizableChanged: function _parentResizableChanged(parentResizable) {
      if (parentResizable) {
        window.removeEventListener('resize', this._boundNotifyResize);
      }
    },
    _notifyDescendant: function _notifyDescendant(descendant) {
      // NOTE(cdata): In IE10, attached is fired on children first, so it's
      // important not to notify them if the parent is not attached yet (or
      // else they will get redundantly notified when the parent attaches).
      if (!this.isAttached) {
        return;
      }

      this._notifyingDescendant = true;
      descendant.notifyResize();
      this._notifyingDescendant = false;
    },
    _requestResizeNotifications: function _requestResizeNotifications() {
      if (!this.isAttached) return; // NOTE(valdrin) In CustomElements v1 with native HTMLImports, the order
      // of imports affects the order of `attached` callbacks (see
      // webcomponents/custom-elements#15). This might cause a child to notify
      // parents too early (as the parent still has to be upgraded), resulting in
      // a parent not able to keep track of the `_interestedResizables`. To solve
      // this, we wait for the document to be done loading before firing the
      // event.

      if (document.readyState === 'loading') {
        var _requestResizeNotifications = this._requestResizeNotifications.bind(this);

        document.addEventListener('readystatechange', function readystatechanged() {
          document.removeEventListener('readystatechange', readystatechanged);

          _requestResizeNotifications();
        });
      } else {
        this._findParent();

        if (!this._parentResizable) {
          // If this resizable is an orphan, tell other orphans to try to find
          // their parent again, in case it's this resizable.
          ORPHANS.forEach(function (orphan) {
            if (orphan !== this) {
              orphan._findParent();
            }
          }, this);
          window.addEventListener('resize', this._boundNotifyResize);
          this.notifyResize();
        } else {
          // If this resizable has a parent, tell other child resizables of
          // that parent to try finding their parent again, in case it's this
          // resizable.
          this._parentResizable._interestedResizables.forEach(function (resizable) {
            if (resizable !== this) {
              resizable._findParent();
            }
          }, this);
        }
      }
    },
    _findParent: function _findParent() {
      this.assignParentResizable(null);
      this.fire('iron-request-resize-notifications', null, {
        node: this,
        bubbles: true,
        cancelable: true
      });

      if (!this._parentResizable) {
        ORPHANS.add(this);
      } else {
        ORPHANS.delete(this);
      }
    }
  };
  _exports.IronResizableBehavior = IronResizableBehavior;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js"), __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerLegacy, _polymerDom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.IronScrollTargetBehavior = void 0;

  /**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
   * events from a designated scroll target.
   *
   * Elements that consume this behavior can override the `_scrollHandler`
   * method to add logic on the scroll event.
   *
   * @demo demo/scrolling-region.html Scrolling Region
   * @demo demo/document.html Document Element
   * @polymerBehavior
   */
  var IronScrollTargetBehavior = {
    properties: {
      /**
       * Specifies the element that will handle the scroll event
       * on the behalf of the current element. This is typically a reference to an
       *element, but there are a few more posibilities:
       *
       * ### Elements id
       *
       *```html
       * <div id="scrollable-element" style="overflow: auto;">
       *  <x-element scroll-target="scrollable-element">
       *    <!-- Content-->
       *  </x-element>
       * </div>
       *```
       * In this case, the `scrollTarget` will point to the outer div element.
       *
       * ### Document scrolling
       *
       * For document scrolling, you can use the reserved word `document`:
       *
       *```html
       * <x-element scroll-target="document">
       *   <!-- Content -->
       * </x-element>
       *```
       *
       * ### Elements reference
       *
       *```js
       * appHeader.scrollTarget = document.querySelector('#scrollable-element');
       *```
       *
       * @type {HTMLElement}
       * @default document
       */
      scrollTarget: {
        type: HTMLElement,
        value: function value() {
          return this._defaultScrollTarget;
        }
      }
    },
    observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

    /**
     * True if the event listener should be installed.
     */
    _shouldHaveListener: true,
    _scrollTargetChanged: function _scrollTargetChanged(scrollTarget, isAttached) {
      var eventTarget;

      if (this._oldScrollTarget) {
        this._toggleScrollListener(false, this._oldScrollTarget);

        this._oldScrollTarget = null;
      }

      if (!isAttached) {
        return;
      } // Support element id references


      if (scrollTarget === 'document') {
        this.scrollTarget = this._doc;
      } else if (typeof scrollTarget === 'string') {
        var domHost = this.domHost;
        this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : (0, _polymerDom.dom)(this.ownerDocument).querySelector('#' + scrollTarget);
      } else if (this._isValidScrollTarget()) {
        this._oldScrollTarget = scrollTarget;

        this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
      }
    },

    /**
     * Runs on every scroll event. Consumer of this behavior may override this
     * method.
     *
     * @protected
     */
    _scrollHandler: function scrollHandler() {},

    /**
     * The default scroll target. Consumers of this behavior may want to customize
     * the default scroll target.
     *
     * @type {Element}
     */
    get _defaultScrollTarget() {
      return this._doc;
    },

    /**
     * Shortcut for the document element
     *
     * @type {Element}
     */
    get _doc() {
      return this.ownerDocument.documentElement;
    },

    /**
     * Gets the number of pixels that the content of an element is scrolled
     * upward.
     *
     * @type {number}
     */
    get _scrollTop() {
      if (this._isValidScrollTarget()) {
        return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
      }

      return 0;
    },

    /**
     * Gets the number of pixels that the content of an element is scrolled to the
     * left.
     *
     * @type {number}
     */
    get _scrollLeft() {
      if (this._isValidScrollTarget()) {
        return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
      }

      return 0;
    },

    /**
     * Sets the number of pixels that the content of an element is scrolled
     * upward.
     *
     * @type {number}
     */
    set _scrollTop(top) {
      if (this.scrollTarget === this._doc) {
        window.scrollTo(window.pageXOffset, top);
      } else if (this._isValidScrollTarget()) {
        this.scrollTarget.scrollTop = top;
      }
    },

    /**
     * Sets the number of pixels that the content of an element is scrolled to the
     * left.
     *
     * @type {number}
     */
    set _scrollLeft(left) {
      if (this.scrollTarget === this._doc) {
        window.scrollTo(left, window.pageYOffset);
      } else if (this._isValidScrollTarget()) {
        this.scrollTarget.scrollLeft = left;
      }
    },

    /**
     * Scrolls the content to a particular place.
     *
     * @method scroll
     * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
     * @param {number=} top The top position
     * @return {void}
     */
    scroll: function scroll(leftOrOptions, top) {
      var left;

      if (babelHelpers.typeof(leftOrOptions) === 'object') {
        left = leftOrOptions.left;
        top = leftOrOptions.top;
      } else {
        left = leftOrOptions;
      }

      left = left || 0;
      top = top || 0;

      if (this.scrollTarget === this._doc) {
        window.scrollTo(left, top);
      } else if (this._isValidScrollTarget()) {
        this.scrollTarget.scrollLeft = left;
        this.scrollTarget.scrollTop = top;
      }
    },

    /**
     * Gets the width of the scroll target.
     *
     * @type {number}
     */
    get _scrollTargetWidth() {
      if (this._isValidScrollTarget()) {
        return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
      }

      return 0;
    },

    /**
     * Gets the height of the scroll target.
     *
     * @type {number}
     */
    get _scrollTargetHeight() {
      if (this._isValidScrollTarget()) {
        return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
      }

      return 0;
    },

    /**
     * Returns true if the scroll target is a valid HTMLElement.
     *
     * @return {boolean}
     */
    _isValidScrollTarget: function _isValidScrollTarget() {
      return babelHelpers.instanceof(this.scrollTarget, HTMLElement);
    },
    _toggleScrollListener: function _toggleScrollListener(yes, scrollTarget) {
      var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

      if (yes) {
        if (!this._boundScrollHandler) {
          this._boundScrollHandler = this._scrollHandler.bind(this);
          eventTarget.addEventListener('scroll', this._boundScrollHandler);
        }
      } else {
        if (this._boundScrollHandler) {
          eventTarget.removeEventListener('scroll', this._boundScrollHandler);
          this._boundScrollHandler = null;
        }
      }
    },

    /**
     * Enables or disables the scroll event listener.
     *
     * @param {boolean} yes True to add the event, False to remove it.
     */
    toggleScrollListener: function toggleScrollListener(yes) {
      this._shouldHaveListener = yes;

      this._toggleScrollListener(yes, this.scrollTarget);
    }
  };
  _exports.IronScrollTargetBehavior = IronScrollTargetBehavior;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/lit-element/lit-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/lit-element/lit-element.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/polymer/lib/mixins/properties-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js"), __webpack_require__(/*! lit-html/lib/shady-render.js */ "./node_modules/lit-html/lib/shady-render.js"), __webpack_require__(/*! lit-html/lib/lit-extended.js */ "./node_modules/lit-html/lib/lit-extended.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _propertiesMixin, _caseMap, _shadyRender, _litExtended) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.renderAttributes = renderAttributes;
  _exports.classString = classString;
  _exports.styleString = styleString;
  Object.defineProperty(_exports, "html", {
    enumerable: true,
    get: function get() {
      return _litExtended.html;
    }
  });
  Object.defineProperty(_exports, "svg", {
    enumerable: true,
    get: function get() {
      return _litExtended.svg;
    }
  });
  _exports.LitElement = void 0;

  /**
   * Renders attributes to the given element based on the `attrInfo` object where
   * boolean values are added/removed as attributes.
   * @param element Element on which to set attributes.
   * @param attrInfo Object describing attributes.
   */
  function renderAttributes(element, attrInfo) {
    for (var a in attrInfo) {
      var v = attrInfo[a] === true ? '' : attrInfo[a];

      if (v || v === '' || v === 0) {
        if (element.getAttribute(a) !== v) {
          element.setAttribute(a, String(v));
        }
      } else if (element.hasAttribute(a)) {
        element.removeAttribute(a);
      }
    }
  }
  /**
   * Returns a string of css class names formed by taking the properties
   * in the `classInfo` object and appending the property name to the string of
   * class names if the property value is truthy.
   * @param classInfo
   */


  function classString(classInfo) {
    var o = [];

    for (var name in classInfo) {
      var v = classInfo[name];

      if (v) {
        o.push(name);
      }
    }

    return o.join(' ');
  }
  /**
   * Returns a css style string formed by taking the properties in the `styleInfo`
   * object and appending the property name (dash-cased) colon the
   * property value. Properties are separated by a semi-colon.
   * @param styleInfo
   */


  function styleString(styleInfo) {
    var o = [];

    for (var name in styleInfo) {
      var v = styleInfo[name];

      if (v || v === 0) {
        o.push("".concat((0, _caseMap.camelToDashCase)(name), ": ").concat(v));
      }
    }

    return o.join('; ');
  }

  var LitElement =
  /*#__PURE__*/
  function (_PropertiesMixin) {
    babelHelpers.inherits(LitElement, _PropertiesMixin);

    function LitElement() {
      var _this;

      babelHelpers.classCallCheck(this, LitElement);
      _this = babelHelpers.possibleConstructorReturn(this, (LitElement.__proto__ || Object.getPrototypeOf(LitElement)).apply(this, arguments));
      _this.__renderComplete = null;
      _this.__resolveRenderComplete = null;
      _this.__isInvalid = false;
      _this.__isChanging = false;
      return _this;
    }
    /**
     * Override which sets up element rendering by calling* `_createRoot`
     * and `_firstRendered`.
     */


    babelHelpers.createClass(LitElement, [{
      key: "ready",
      value: function ready() {
        this._root = this._createRoot();
        babelHelpers.get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), "ready", this).call(this);

        this._firstRendered();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        if (window.ShadyCSS && this._root) {
          window.ShadyCSS.styleElement(this);
        }

        babelHelpers.get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this);
      }
      /**
       * Called after the element DOM is rendered for the first time.
       * Implement to perform tasks after first rendering like capturing a
       * reference to a static node which must be directly manipulated.
       * This should not be commonly needed. For tasks which should be performed
       * before first render, use the element constructor.
       */

    }, {
      key: "_firstRendered",
      value: function _firstRendered() {}
      /**
       * Implement to customize where the element's template is rendered by
       * returning an element into which to render. By default this creates
       * a shadowRoot for the element. To render into the element's childNodes,
       * return `this`.
       * @returns {Element|DocumentFragment} Returns a node into which to render.
       */

    }, {
      key: "_createRoot",
      value: function _createRoot() {
        return this.attachShadow({
          mode: 'open'
        });
      }
      /**
       * Override which returns the value of `_shouldRender` which users
       * should implement to control rendering. If this method returns false,
       * _propertiesChanged will not be called and no rendering will occur even
       * if property values change or `requestRender` is called.
       * @param _props Current element properties
       * @param _changedProps Changing element properties
       * @param _prevProps Previous element properties
       * @returns {boolean} Default implementation always returns true.
       */

    }, {
      key: "_shouldPropertiesChange",
      value: function _shouldPropertiesChange(_props, _changedProps, _prevProps) {
        var shouldRender = this._shouldRender(_props, _changedProps, _prevProps);

        if (!shouldRender && this.__resolveRenderComplete) {
          this.__resolveRenderComplete(false);
        }

        return shouldRender;
      }
      /**
       * Implement to control if rendering should occur when property values
       * change or `requestRender` is called. By default, this method always
       * returns true, but this can be customized as an optimization to avoid
       * rendering work when changes occur which should not be rendered.
       * @param _props Current element properties
       * @param _changedProps Changing element properties
       * @param _prevProps Previous element properties
       * @returns {boolean} Default implementation always returns true.
       */

    }, {
      key: "_shouldRender",
      value: function _shouldRender(_props, _changedProps, _prevProps) {
        return true;
      }
      /**
       * Override which performs element rendering by calling
       * `_render`, `_applyRender`, and finally `_didRender`.
       * @param props Current element properties
       * @param changedProps Changing element properties
       * @param prevProps Previous element properties
       */

    }, {
      key: "_propertiesChanged",
      value: function _propertiesChanged(props, changedProps, prevProps) {
        babelHelpers.get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), "_propertiesChanged", this).call(this, props, changedProps, prevProps);

        var result = this._render(props);

        if (result && this._root !== undefined) {
          this._applyRender(result, this._root);
        }

        this._didRender(props, changedProps, prevProps);

        if (this.__resolveRenderComplete) {
          this.__resolveRenderComplete(true);
        }
      }
    }, {
      key: "_flushProperties",
      value: function _flushProperties() {
        this.__isChanging = true;
        this.__isInvalid = false;
        babelHelpers.get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), "_flushProperties", this).call(this);
        this.__isChanging = false;
      }
      /**
       * Override which warns when a user attempts to change a property during
       * the rendering lifecycle. This is an anti-pattern and should be avoided.
       * @param property {string}
       * @param value {any}
       * @param old {any}
       */
      // tslint:disable-next-line no-any

    }, {
      key: "_shouldPropertyChange",
      value: function _shouldPropertyChange(property, value, old) {
        var change = babelHelpers.get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), "_shouldPropertyChange", this).call(this, property, value, old);

        if (change && this.__isChanging) {
          console.trace("Setting properties in response to other properties changing " + "considered harmful. Setting '".concat(property, "' from ") + "'".concat(this._getProperty(property), "' to '").concat(value, "'."));
        }

        return change;
      }
      /**
       * Implement to describe the DOM which should be rendered in the element.
       * Ideally, the implementation is a pure function using only props to describe
       * the element template. The implementation must return a `lit-html`
       * TemplateResult. By default this template is rendered into the element's
       * shadowRoot. This can be customized by implementing `_createRoot`. This
       * method must be implemented.
       * @param {*} _props Current element properties
       * @returns {TemplateResult} Must return a lit-html TemplateResult.
       */

    }, {
      key: "_render",
      value: function _render(_props) {
        throw new Error('_render() not implemented');
      }
      /**
       * Renders the given lit-html template `result` into the given `node`.
       * Implement to customize the way rendering is applied. This is should not
       * typically be needed and is provided for advanced use cases.
       * @param result {TemplateResult} `lit-html` template result to render
       * @param node {Element|DocumentFragment} node into which to render
       */

    }, {
      key: "_applyRender",
      value: function _applyRender(result, node) {
        (0, _shadyRender.render)(result, node, this.localName);
      }
      /**
       * Called after element DOM has been rendered. Implement to
       * directly control rendered DOM. Typically this is not needed as `lit-html`
       * can be used in the `_render` method to set properties, attributes, and
       * event listeners. However, it is sometimes useful for calling methods on
       * rendered elements, like calling `focus()` on an element to focus it.
       * @param _props Current element properties
       * @param _changedProps Changing element properties
       * @param _prevProps Previous element properties
       */

    }, {
      key: "_didRender",
      value: function _didRender(_props, _changedProps, _prevProps) {}
      /**
       * Call to request the element to asynchronously re-render regardless
       * of whether or not any property changes are pending.
       */

    }, {
      key: "requestRender",
      value: function requestRender() {
        this._invalidateProperties();
      }
      /**
       * Override which provides tracking of invalidated state.
       */

    }, {
      key: "_invalidateProperties",
      value: function _invalidateProperties() {
        this.__isInvalid = true;
        babelHelpers.get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), "_invalidateProperties", this).call(this);
      }
      /**
       * Returns a promise which resolves after the element next renders.
       * The promise resolves to `true` if the element rendered and `false` if the
       * element did not render.
       * This is useful when users (e.g. tests) need to react to the rendered state
       * of the element after a change is made.
       * This can also be useful in event handlers if it is desireable to wait
       * to send an event until after rendering. If possible implement the
       * `_didRender` method to directly respond to rendering within the
       * rendering lifecycle.
       */

    }, {
      key: "renderComplete",
      get: function get() {
        var _this2 = this;

        if (!this.__renderComplete) {
          this.__renderComplete = new Promise(function (resolve) {
            _this2.__resolveRenderComplete = function (value) {
              _this2.__resolveRenderComplete = _this2.__renderComplete = null;
              resolve(value);
            };
          });

          if (!this.__isInvalid && this.__resolveRenderComplete) {
            Promise.resolve().then(function () {
              return _this2.__resolveRenderComplete(false);
            });
          }
        }

        return this.__renderComplete;
      }
    }]);
    return LitElement;
  }((0, _propertiesMixin.PropertiesMixin)(HTMLElement));

  _exports.LitElement = LitElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/elements/array-selector.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/elements/array-selector.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/array-splice.js */ "./node_modules/@polymer/polymer/lib/utils/array-splice.js"), __webpack_require__(/*! ../mixins/element-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerElement, _mixin, _arraySplice, _elementMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ArraySelector = _exports.ArraySelectorMixin = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array such that path changes to the
   * master array (at the host) element or elsewhere via data-binding) are
   * correctly propagated to items in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * @polymer
   * @mixinFunction
   * @appliesMixin ElementMixin
   * @summary Element mixin for recording dynamic associations between item paths in a
   * master `items` array and a `selected` array
   */
  var ArraySelectorMixin = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_ElementMixin}
     */
    var elementBase = (0, _elementMixin.ElementMixin)(superClass);
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_ArraySelectorMixin}
     * @unrestricted
     */

    var ArraySelectorMixin =
    /*#__PURE__*/
    function (_elementBase) {
      babelHelpers.inherits(ArraySelectorMixin, _elementBase);
      babelHelpers.createClass(ArraySelectorMixin, null, [{
        key: "properties",
        get: function get() {
          return {
            /**
             * An array containing items from which selection will be made.
             */
            items: {
              type: Array
            },

            /**
             * When `true`, multiple items may be selected at once (in this case,
             * `selected` is an array of currently selected items).  When `false`,
             * only one item may be selected at a time.
             */
            multi: {
              type: Boolean,
              value: false
            },

            /**
             * When `multi` is true, this is an array that contains any selected.
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?(Object|Array<!Object>)}
             */
            selected: {
              type: Object,
              notify: true
            },

            /**
             * When `multi` is false, this is the currently selected item, or `null`
             * if no item is selected.
             * @type {?Object}
             */
            selectedItem: {
              type: Object,
              notify: true
            },

            /**
             * When `true`, calling `select` on an item that is already selected
             * will deselect the item.
             */
            toggle: {
              type: Boolean,
              value: false
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['__updateSelection(multi, items.*)'];
        }
      }]);

      function ArraySelectorMixin() {
        var _this;

        babelHelpers.classCallCheck(this, ArraySelectorMixin);
        _this = babelHelpers.possibleConstructorReturn(this, (ArraySelectorMixin.__proto__ || Object.getPrototypeOf(ArraySelectorMixin)).call(this));
        _this.__lastItems = null;
        _this.__lastMulti = null;
        _this.__selectedMap = null;
        return _this;
      }

      babelHelpers.createClass(ArraySelectorMixin, [{
        key: "__updateSelection",
        value: function __updateSelection(multi, itemsInfo) {
          var path = itemsInfo.path;

          if (path == 'items') {
            // Case 1 - items array changed, so diff against previous array and
            // deselect any removed items and adjust selected indices
            var newItems = itemsInfo.base || [];
            var lastItems = this.__lastItems;
            var lastMulti = this.__lastMulti;

            if (multi !== lastMulti) {
              this.clearSelection();
            }

            if (lastItems) {
              var splices = (0, _arraySplice.calculateSplices)(newItems, lastItems);

              this.__applySplices(splices);
            }

            this.__lastItems = newItems;
            this.__lastMulti = multi;
          } else if (itemsInfo.path == 'items.splices') {
            // Case 2 - got specific splice information describing the array mutation:
            // deselect any removed items and adjust selected indices
            this.__applySplices(itemsInfo.value.indexSplices);
          } else {
            // Case 3 - an array element was changed, so deselect the previous
            // item for that index if it was previously selected
            var part = path.slice('items.'.length);
            var idx = parseInt(part, 10);

            if (part.indexOf('.') < 0 && part == idx) {
              this.__deselectChangedIdx(idx);
            }
          }
        }
      }, {
        key: "__applySplices",
        value: function __applySplices(splices) {
          var _this2 = this;

          var selected = this.__selectedMap; // Adjust selected indices and mark removals

          var _loop = function _loop(i) {
            var s = splices[i];
            selected.forEach(function (idx, item) {
              if (idx < s.index) {// no change
              } else if (idx >= s.index + s.removed.length) {
                // adjust index
                selected.set(item, idx + s.addedCount - s.removed.length);
              } else {
                // remove index
                selected.set(item, -1);
              }
            });

            for (var j = 0; j < s.addedCount; j++) {
              var idx = s.index + j;

              if (selected.has(_this2.items[idx])) {
                selected.set(_this2.items[idx], idx);
              }
            }
          };

          for (var i = 0; i < splices.length; i++) {
            _loop(i);
          } // Update linked paths


          this.__updateLinks(); // Remove selected items that were removed from the items array


          var sidx = 0;
          selected.forEach(function (idx, item) {
            if (idx < 0) {
              if (_this2.multi) {
                _this2.splice('selected', sidx, 1);
              } else {
                _this2.selected = _this2.selectedItem = null;
              }

              selected.delete(item);
            } else {
              sidx++;
            }
          });
        }
      }, {
        key: "__updateLinks",
        value: function __updateLinks() {
          var _this3 = this;

          this.__dataLinkedPaths = {};

          if (this.multi) {
            var sidx = 0;

            this.__selectedMap.forEach(function (idx) {
              if (idx >= 0) {
                _this3.linkPaths('items.' + idx, 'selected.' + sidx++);
              }
            });
          } else {
            this.__selectedMap.forEach(function (idx) {
              _this3.linkPaths('selected', 'items.' + idx);

              _this3.linkPaths('selectedItem', 'items.' + idx);
            });
          }
        }
        /**
         * Clears the selection state.
         * @return {void}
         */

      }, {
        key: "clearSelection",
        value: function clearSelection() {
          // Unbind previous selection
          this.__dataLinkedPaths = {}; // The selected map stores 3 pieces of information:
          // key: items array object
          // value: items array index
          // order: selected array index

          this.__selectedMap = new Map(); // Initialize selection

          this.selected = this.multi ? [] : null;
          this.selectedItem = null;
        }
        /**
         * Returns whether the item is currently selected.
         *
         * @param {*} item Item from `items` array to test
         * @return {boolean} Whether the item is selected
         */

      }, {
        key: "isSelected",
        value: function isSelected(item) {
          return this.__selectedMap.has(item);
        }
        /**
         * Returns whether the item is currently selected.
         *
         * @param {number} idx Index from `items` array to test
         * @return {boolean} Whether the item is selected
         */

      }, {
        key: "isIndexSelected",
        value: function isIndexSelected(idx) {
          return this.isSelected(this.items[idx]);
        }
      }, {
        key: "__deselectChangedIdx",
        value: function __deselectChangedIdx(idx) {
          var _this4 = this;

          var sidx = this.__selectedIndexForItemIndex(idx);

          if (sidx >= 0) {
            var i = 0;

            this.__selectedMap.forEach(function (idx, item) {
              if (sidx == i++) {
                _this4.deselect(item);
              }
            });
          }
        }
      }, {
        key: "__selectedIndexForItemIndex",
        value: function __selectedIndexForItemIndex(idx) {
          var selected = this.__dataLinkedPaths['items.' + idx];

          if (selected) {
            return parseInt(selected.slice('selected.'.length), 10);
          }
        }
        /**
         * Deselects the given item if it is already selected.
         *
         * @param {*} item Item from `items` array to deselect
         * @return {void}
         */

      }, {
        key: "deselect",
        value: function deselect(item) {
          var idx = this.__selectedMap.get(item);

          if (idx >= 0) {
            this.__selectedMap.delete(item);

            var sidx;

            if (this.multi) {
              sidx = this.__selectedIndexForItemIndex(idx);
            }

            this.__updateLinks();

            if (this.multi) {
              this.splice('selected', sidx, 1);
            } else {
              this.selected = this.selectedItem = null;
            }
          }
        }
        /**
         * Deselects the given index if it is already selected.
         *
         * @param {number} idx Index from `items` array to deselect
         * @return {void}
         */

      }, {
        key: "deselectIndex",
        value: function deselectIndex(idx) {
          this.deselect(this.items[idx]);
        }
        /**
         * Selects the given item.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @param {*} item Item from `items` array to select
         * @return {void}
         */

      }, {
        key: "select",
        value: function select(item) {
          this.selectIndex(this.items.indexOf(item));
        }
        /**
         * Selects the given index.  When `toggle` is true, this will automatically
         * deselect the item if already selected.
         *
         * @param {number} idx Index from `items` array to select
         * @return {void}
         */

      }, {
        key: "selectIndex",
        value: function selectIndex(idx) {
          var item = this.items[idx];

          if (!this.isSelected(item)) {
            if (!this.multi) {
              this.__selectedMap.clear();
            }

            this.__selectedMap.set(item, idx);

            this.__updateLinks();

            if (this.multi) {
              this.push('selected', item);
            } else {
              this.selected = this.selectedItem = item;
            }
          } else if (this.toggle) {
            this.deselectIndex(idx);
          }
        }
      }]);
      return ArraySelectorMixin;
    }(elementBase);

    return ArraySelectorMixin;
  }); // export mixin

  _exports.ArraySelectorMixin = ArraySelectorMixin;

  /**
   * @constructor
   * @extends {PolymerElement}
   * @implements {Polymer_ArraySelectorMixin}
   */
  var baseArraySelector = ArraySelectorMixin(_polymerElement.PolymerElement);
  /**
   * Element implementing the `ArraySelector` mixin, which records
   * dynamic associations between item paths in a master `items` array and a
   * `selected` array such that path changes to the master array (at the host)
   * element or elsewhere via data-binding) are correctly propagated to items
   * in the selected array and vice-versa.
   *
   * The `items` property accepts an array of user data, and via the
   * `select(item)` and `deselect(item)` API, updates the `selected` property
   * which may be bound to other parts of the application, and any changes to
   * sub-fields of `selected` item(s) will be kept in sync with items in the
   * `items` array.  When `multi` is false, `selected` is a property
   * representing the last selected item.  When `multi` is true, `selected`
   * is an array of multiply selected items.
   *
   * Example:
   *
   * ```js
   * import {PolymerElement} from '@polymer/polymer';
   * import '@polymer/polymer/lib/elements/array-selector.js';
   *
   * class EmployeeList extends PolymerElement {
   *   static get _template() {
   *     return html`
   *         <div> Employee list: </div>
   *         <dom-repeat id="employeeList" items="{{employees}}">
   *           <template>
   *             <div>First name: <span>{{item.first}}</span></div>
   *               <div>Last name: <span>{{item.last}}</span></div>
   *               <button on-click="toggleSelection">Select</button>
   *           </template>
   *         </dom-repeat>
   *
   *         <array-selector id="selector"
   *                         items="{{employees}}"
   *                         selected="{{selected}}"
   *                         multi toggle></array-selector>
   *
   *         <div> Selected employees: </div>
   *         <dom-repeat items="{{selected}}">
   *           <template>
   *             <div>First name: <span>{{item.first}}</span></div>
   *             <div>Last name: <span>{{item.last}}</span></div>
   *           </template>
   *         </dom-repeat>`;
   *   }
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   *   toggleSelection(e) {
   *     const item = this.$.employeeList.itemForElement(e.target);
   *     this.$.selector.select(item);
   *   }
   * }
   * ```
   *
   * @polymer
   * @customElement
   * @extends {baseArraySelector}
   * @appliesMixin ArraySelectorMixin
   * @summary Custom element that links paths between an input `items` array and
   *   an output `selected` item or array based on calls to its selection API.
   */

  var ArraySelector =
  /*#__PURE__*/
  function (_baseArraySelector) {
    babelHelpers.inherits(ArraySelector, _baseArraySelector);

    function ArraySelector() {
      babelHelpers.classCallCheck(this, ArraySelector);
      return babelHelpers.possibleConstructorReturn(this, (ArraySelector.__proto__ || Object.getPrototypeOf(ArraySelector)).apply(this, arguments));
    }

    babelHelpers.createClass(ArraySelector, null, [{
      key: "is",
      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'array-selector';
      }
    }]);
    return ArraySelector;
  }(baseArraySelector);

  _exports.ArraySelector = ArraySelector;
  customElements.define(ArraySelector.is, ArraySelector);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/elements/custom-style.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/elements/custom-style.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @webcomponents/shadycss/entrypoints/custom-style-interface.js */ "./node_modules/@webcomponents/shadycss/entrypoints/custom-style-interface.js"), __webpack_require__(/*! ../utils/style-gather.js */ "./node_modules/@polymer/polymer/lib/utils/style-gather.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _customStyleInterface, _styleGather) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomStyle = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var attr = 'include';
  var CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;
  /**
   * Custom element for defining styles in the main document that can take
   * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
   * for style encapsulation, custom properties, and custom mixins.
   *
   * - Document styles defined in a `<custom-style>` are shimmed to ensure they
   *   do not leak into local DOM when running on browsers without native
   *   Shadow DOM.
   * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
   *   to define custom properties that apply to all custom elements.
   * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
   *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
   *   (`shadycss/apply-shim.html`).
   *
   * To use:
   *
   * - Import `custom-style.html`.
   * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
   *   contains the CSS rules you want to shim.
   *
   * For example:
   *
   * ```html
   * <!-- import apply shim--only required if using mixins -->
   * <link rel="import" href="bower_components/shadycss/apply-shim.html">
   * <!-- import custom-style element -->
   * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
   *
   * <custom-style>
   *   <style>
   *     html {
   *       --custom-color: blue;
   *       --custom-mixin: {
   *         font-weight: bold;
   *         color: red;
   *       };
   *     }
   *   </style>
   * </custom-style>
   * ```
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element for defining styles in the main document that can
   *   take advantage of Polymer's style scoping and custom properties shims.
   */

  var CustomStyle =
  /*#__PURE__*/
  function (_HTMLElement) {
    babelHelpers.inherits(CustomStyle, _HTMLElement);

    function CustomStyle() {
      var _this;

      babelHelpers.classCallCheck(this, CustomStyle);
      _this = babelHelpers.possibleConstructorReturn(this, (CustomStyle.__proto__ || Object.getPrototypeOf(CustomStyle)).call(this));
      _this._style = null;
      CustomStyleInterface.addCustomStyle(babelHelpers.assertThisInitialized(_this));
      return _this;
    }
    /**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */


    babelHelpers.createClass(CustomStyle, [{
      key: "getStyle",
      value: function getStyle() {
        if (this._style) {
          return this._style;
        }

        var style =
        /** @type {HTMLStyleElement} */
        this.querySelector('style');

        if (!style) {
          return null;
        }

        this._style = style;
        var include = style.getAttribute(attr);

        if (include) {
          style.removeAttribute(attr);
          style.textContent = (0, _styleGather.cssFromModules)(include) + style.textContent;
        }
        /*
        HTML Imports styling the main document are deprecated in Chrome
        https://crbug.com/523952
         If this element is not in the main document, then it must be in an HTML Import document.
        In that case, move the custom style to the main document.
         The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
        cases of ordering w.r.t the main document styles.
        */


        if (this.ownerDocument !== window.document) {
          window.document.head.appendChild(this);
        }

        return this._style;
      }
    }]);
    return CustomStyle;
  }(HTMLElement);

  _exports.CustomStyle = CustomStyle;
  window.customElements.define('custom-style', CustomStyle);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/elements/dom-bind.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/elements/dom-bind.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../mixins/property-effects.js */ "./node_modules/@polymer/polymer/lib/mixins/property-effects.js"), __webpack_require__(/*! ../mixins/mutable-data.js */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js"), __webpack_require__(/*! ../mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _propertyEffects, _mutableData, _gestureEventListeners) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DomBind = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_OptionalMutableData}
   * @implements {Polymer_GestureEventListeners}
   */
  var domBindBase = (0, _gestureEventListeners.GestureEventListeners)((0, _mutableData.OptionalMutableData)((0, _propertyEffects.PropertyEffects)(HTMLElement)));
  /**
   * Custom element to allow using Polymer's template features (data binding,
   * declarative event listeners, etc.) in the main document without defining
   * a new custom element.
   *
   * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
   * element, which will immediately stamp the wrapped template into the main
   * document and bind elements to the `dom-bind` element itself as the
   * binding scope.
   *
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @appliesMixin OptionalMutableData
   * @appliesMixin GestureEventListeners
   * @extends {domBindBase}
   * @summary Custom element to allow using Polymer's template features (data
   *   binding, declarative event listeners, etc.) in the main document.
   */

  var DomBind =
  /*#__PURE__*/
  function (_domBindBase) {
    babelHelpers.inherits(DomBind, _domBindBase);
    babelHelpers.createClass(DomBind, null, [{
      key: "observedAttributes",
      get: function get() {
        return ['mutable-data'];
      }
    }]);

    function DomBind() {
      var _this;

      babelHelpers.classCallCheck(this, DomBind);
      _this = babelHelpers.possibleConstructorReturn(this, (DomBind.__proto__ || Object.getPrototypeOf(DomBind)).call(this));
      _this.root = null;
      _this.$ = null;
      _this.__children = null;
      return _this;
    }
    /** @return {void} */


    babelHelpers.createClass(DomBind, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback() {
        // assumes only one observed attribute
        this.mutableData = true;
      }
      /** @return {void} */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.style.display = 'none';
        this.render();
      }
      /** @return {void} */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.__removeChildren();
      }
    }, {
      key: "__insertChildren",
      value: function __insertChildren() {
        this.parentNode.insertBefore(this.root, this);
      }
    }, {
      key: "__removeChildren",
      value: function __removeChildren() {
        if (this.__children) {
          for (var i = 0; i < this.__children.length; i++) {
            this.root.appendChild(this.__children[i]);
          }
        }
      }
      /**
       * Forces the element to render its content. This is typically only
       * necessary to call if HTMLImports with the async attribute are used.
       * @return {void}
       */

    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var template;

        if (!this.__children) {
          template =
          /** @type {HTMLTemplateElement} */
          template || this.querySelector('template');

          if (!template) {
            // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              template =
              /** @type {HTMLTemplateElement} */
              _this2.querySelector('template');

              if (template) {
                observer.disconnect();

                _this2.render();
              } else {
                throw new Error('dom-bind requires a <template> child');
              }
            });
            observer.observe(this, {
              childList: true
            });
            return;
          }

          this.root = this._stampTemplate(template);
          this.$ = this.root.$;
          this.__children = [];

          for (var n = this.root.firstChild; n; n = n.nextSibling) {
            this.__children[this.__children.length] = n;
          }

          this._enableProperties();
        }

        this.__insertChildren();

        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
      }
    }]);
    return DomBind;
  }(domBindBase);

  _exports.DomBind = DomBind;
  customElements.define('dom-bind', DomBind);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/elements/dom-if.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/elements/dom-if.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js"), __webpack_require__(/*! ../utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js"), __webpack_require__(/*! ../utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"), __webpack_require__(/*! ../utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js"), __webpack_require__(/*! ../utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js"), __webpack_require__(/*! ../utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerElement, _templatize, _debounce, _flush, _async, _path) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DomIf = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * The `<dom-if>` element will stamp a light-dom `<template>` child when
   * the `if` property becomes truthy, and the template can use Polymer
   * data-binding and declarative event features when used in the context of
   * a Polymer element's template.
   *
   * When `if` becomes falsy, the stamped content is hidden but not
   * removed from dom. When `if` subsequently becomes truthy again, the content
   * is simply re-shown. This approach is used due to its favorable performance
   * characteristics: the expense of creating template content is paid only
   * once and lazily.
   *
   * Set the `restamp` property to true to force the stamped content to be
   * created / destroyed when the `if` condition changes.
   *
   * @customElement
   * @polymer
   * @extends PolymerElement
   * @summary Custom element that conditionally stamps and hides or removes
   *   template content based on a boolean flag.
   */
  var DomIf =
  /*#__PURE__*/
  function (_PolymerElement) {
    babelHelpers.inherits(DomIf, _PolymerElement);
    babelHelpers.createClass(DomIf, null, [{
      key: "is",
      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'dom-if';
      }
    }, {
      key: "template",
      get: function get() {
        return null;
      }
    }, {
      key: "properties",
      get: function get() {
        return {
          /**
           * Fired whenever DOM is added or removed/hidden by this template (by
           * default, rendering occurs lazily).  To force immediate rendering, call
           * `render`.
           *
           * @event dom-change
           */

          /**
           * A boolean indicating whether this template should stamp.
           */
          if: {
            type: Boolean,
            observer: '__debounceRender'
          },

          /**
           * When true, elements will be removed from DOM and discarded when `if`
           * becomes false and re-created and added back to the DOM when `if`
           * becomes true.  By default, stamped elements will be hidden but left
           * in the DOM when `if` becomes false, which is generally results
           * in better performance.
           */
          restamp: {
            type: Boolean,
            observer: '__debounceRender'
          }
        };
      }
    }]);

    function DomIf() {
      var _this;

      babelHelpers.classCallCheck(this, DomIf);
      _this = babelHelpers.possibleConstructorReturn(this, (DomIf.__proto__ || Object.getPrototypeOf(DomIf)).call(this));
      _this.__renderDebouncer = null;
      _this.__invalidProps = null;
      _this.__instance = null;
      _this._lastIf = false;
      _this.__ctor = null;
      return _this;
    }

    babelHelpers.createClass(DomIf, [{
      key: "__debounceRender",
      value: function __debounceRender() {
        var _this2 = this;

        // Render is async for 2 reasons:
        // 1. To eliminate dom creation trashing if user code thrashes `if` in the
        //    same turn. This was more common in 1.x where a compound computed
        //    property could result in the result changing multiple times, but is
        //    mitigated to a large extent by batched property processing in 2.x.
        // 2. To avoid double object propagation when a bag including values bound
        //    to the `if` property as well as one or more hostProps could enqueue
        //    the <dom-if> to flush before the <template>'s host property
        //    forwarding. In that scenario creating an instance would result in
        //    the host props being set once, and then the enqueued changes on the
        //    template would set properties a second time, potentially causing an
        //    object to be set to an instance more than once.  Creating the
        //    instance async from flushing data ensures this doesn't happen. If
        //    we wanted a sync option in the future, simply having <dom-if> flush
        //    (or clear) its template's pending host properties before creating
        //    the instance would also avoid the problem.
        this.__renderDebouncer = _debounce.Debouncer.debounce(this.__renderDebouncer, _async.microTask, function () {
          return _this2.__render();
        });
        (0, _flush.enqueueDebouncer)(this.__renderDebouncer);
      }
      /**
       * @return {void}
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), "disconnectedCallback", this).call(this);

        if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && !this.parentNode.host) {
          this.__teardownInstance();
        }
      }
      /**
       * @return {void}
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), "connectedCallback", this).call(this);
        this.style.display = 'none';

        if (this.if) {
          this.__debounceRender();
        }
      }
      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */

    }, {
      key: "render",
      value: function render() {
        (0, _flush.flush)();
      }
    }, {
      key: "__render",
      value: function __render() {
        if (this.if) {
          if (!this.__ensureInstance()) {
            // No template found yet
            return;
          }

          this._showHideChildren();
        } else if (this.restamp) {
          this.__teardownInstance();
        }

        if (!this.restamp && this.__instance) {
          this._showHideChildren();
        }

        if (this.if != this._lastIf) {
          this.dispatchEvent(new CustomEvent('dom-change', {
            bubbles: true,
            composed: true
          }));
          this._lastIf = this.if;
        }
      }
    }, {
      key: "__ensureInstance",
      value: function __ensureInstance() {
        var _this3 = this;

        var parentNode = this.parentNode; // Guard against element being detached while render was queued

        if (parentNode) {
          if (!this.__ctor) {
            var template =
            /** @type {HTMLTemplateElement} */
            this.querySelector('template');

            if (!template) {
              // Wait until childList changes and template should be there by then
              var observer = new MutationObserver(function () {
                if (_this3.querySelector('template')) {
                  observer.disconnect();

                  _this3.__render();
                } else {
                  throw new Error('dom-if requires a <template> child');
                }
              });
              observer.observe(this, {
                childList: true
              });
              return false;
            }

            this.__ctor = (0, _templatize.templatize)(template, this, {
              // dom-if templatizer instances require `mutable: true`, as
              // `__syncHostProperties` relies on that behavior to sync objects
              mutableData: true,

              /**
               * @param {string} prop Property to forward
               * @param {*} value Value of property
               * @this {this}
               */
              forwardHostProp: function forwardHostProp(prop, value) {
                if (this.__instance) {
                  if (this.if) {
                    this.__instance.forwardHostProp(prop, value);
                  } else {
                    // If we have an instance but are squelching host property
                    // forwarding due to if being false, note the invalidated
                    // properties so `__syncHostProperties` can sync them the next
                    // time `if` becomes true
                    this.__invalidProps = this.__invalidProps || Object.create(null);
                    this.__invalidProps[(0, _path.root)(prop)] = true;
                  }
                }
              }
            });
          }

          if (!this.__instance) {
            this.__instance = new this.__ctor();
            parentNode.insertBefore(this.__instance.root, this);
          } else {
            this.__syncHostProperties();

            var c$ = this.__instance.children;

            if (c$ && c$.length) {
              // Detect case where dom-if was re-attached in new position
              var lastChild = this.previousSibling;

              if (lastChild !== c$[c$.length - 1]) {
                for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
                  parentNode.insertBefore(n, this);
                }
              }
            }
          }
        }

        return true;
      }
    }, {
      key: "__syncHostProperties",
      value: function __syncHostProperties() {
        var props = this.__invalidProps;

        if (props) {
          for (var prop in props) {
            this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
          }

          this.__invalidProps = null;

          this.__instance._flushProperties();
        }
      }
    }, {
      key: "__teardownInstance",
      value: function __teardownInstance() {
        if (this.__instance) {
          var c$ = this.__instance.children;

          if (c$ && c$.length) {
            // use first child parent, for case when dom-if may have been detached
            var parent = c$[0].parentNode;

            for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
              parent.removeChild(n);
            }
          }

          this.__instance = null;
          this.__invalidProps = null;
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @return {void}
       * @protected
       */

    }, {
      key: "_showHideChildren",
      value: function _showHideChildren() {
        var hidden = this.__hideTemplateChildren__ || !this.if;

        if (this.__instance) {
          this.__instance._showHideChildren(hidden);
        }
      }
    }]);
    return DomIf;
  }(_polymerElement.PolymerElement);

  _exports.DomIf = DomIf;
  customElements.define(DomIf.is, DomIf);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/elements/dom-module.js":
/*!******************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/elements/dom-module.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _resolveUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DomModule = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var modules = {};
  var lcModules = {};

  function findModule(id) {
    return modules[id] || lcModules[id.toLowerCase()];
  }

  function styleOutsideTemplateCheck(inst) {
    if (inst.querySelector('style')) {
      console.warn('dom-module %s has style outside template', inst.id);
    }
  }
  /**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */


  var DomModule =
  /*#__PURE__*/
  function (_HTMLElement) {
    babelHelpers.inherits(DomModule, _HTMLElement);

    function DomModule() {
      babelHelpers.classCallCheck(this, DomModule);
      return babelHelpers.possibleConstructorReturn(this, (DomModule.__proto__ || Object.getPrototypeOf(DomModule)).apply(this, arguments));
    }

    babelHelpers.createClass(DomModule, [{
      key: "attributeChangedCallback",

      /* eslint-disable no-unused-vars */

      /**
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       */
      value: function attributeChangedCallback(name, old, value, namespace) {
        if (old !== value) {
          this.register();
        }
      }
      /* eslint-enable no-unused-args */

      /**
       * The absolute URL of the original location of this `dom-module`.
       *
       * This value will differ from this element's `ownerDocument` in the
       * following ways:
       * - Takes into account any `assetpath` attribute added during bundling
       *   to indicate the original location relative to the bundled location
       * - Uses the HTMLImports polyfill's `importForElement` API to ensure
       *   the path is relative to the import document's location since
       *   `ownerDocument` is not currently polyfilled
       */

    }, {
      key: "register",

      /**
       * Registers the dom-module at a given id. This method should only be called
       * when a dom-module is imperatively created. For
       * example, `document.createElement('dom-module').register('foo')`.
       * @param {string=} id The id at which to register the dom-module.
       * @return {void}
       */
      value: function register(id) {
        id = id || this.id;

        if (id) {
          this.id = id; // store id separate from lowercased id so that
          // in all cases mixedCase id will stored distinctly
          // and lowercase version is a fallback

          modules[id] = this;
          lcModules[id.toLowerCase()] = this;
          styleOutsideTemplateCheck(this);
        }
      }
    }, {
      key: "assetpath",
      get: function get() {
        // Don't override existing assetpath.
        if (!this.__assetpath) {
          // note: assetpath set via an attribute must be relative to this
          // element's location; accomodate polyfilled HTMLImports
          var owner = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument;
          var url = (0, _resolveUrl.resolveUrl)(this.getAttribute('assetpath') || '', owner.baseURI);
          this.__assetpath = (0, _resolveUrl.pathFromUrl)(url);
        }

        return this.__assetpath;
      }
    }], [{
      key: "import",

      /**
       * Retrieves the element specified by the css `selector` in the module
       * registered by `id`. For example, this.import('foo', 'img');
       * @param {string} id The id of the dom-module in which to search.
       * @param {string=} selector The css selector by which to find the element.
       * @return {Element} Returns the element which matches `selector` in the
       * module registered at the specified `id`.
       */
      value: function _import(id, selector) {
        if (id) {
          var m = findModule(id);

          if (m && selector) {
            return m.querySelector(selector);
          }

          return m;
        }

        return null;
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return ['id'];
      }
    }]);
    return DomModule;
  }(HTMLElement);

  _exports.DomModule = DomModule;
  DomModule.prototype['modules'] = modules;
  customElements.define('dom-module', DomModule);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/elements/dom-repeat.js":
/*!******************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/elements/dom-repeat.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../../polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js"), __webpack_require__(/*! ../utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js"), __webpack_require__(/*! ../utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"), __webpack_require__(/*! ../utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js"), __webpack_require__(/*! ../mixins/mutable-data.js */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js"), __webpack_require__(/*! ../utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js"), __webpack_require__(/*! ../utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _polymerElement, _templatize, _debounce, _flush, _mutableData, _path, _async) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DomRepeat = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var TemplateInstanceBase = _templatize.TemplateInstanceBase; // eslint-disable-line

  /**
   * @constructor
   * @implements {Polymer_OptionalMutableData}
   * @extends {PolymerElement}
   */

  var domRepeatBase = (0, _mutableData.OptionalMutableData)(_polymerElement.PolymerElement);
  /**
   * The `<dom-repeat>` element will automatically stamp and binds one instance
   * of template content to each object in a user-provided array.
   * `dom-repeat` accepts an `items` property, and one instance of the template
   * is stamped for each item into the DOM at the location of the `dom-repeat`
   * element.  The `item` property will be set on each instance's binding
   * scope, thus templates should bind to sub-properties of `item`.
   *
   * Example:
   *
   * ```html
   * <dom-module id="employee-list">
   *
   *   <template>
   *
   *     <div> Employee list: </div>
   *     <dom-repeat items="{{employees}}">
   *       <template>
   *         <div>First name: <span>{{item.first}}</span></div>
   *         <div>Last name: <span>{{item.last}}</span></div>
   *       </template>
   *     </dom-repeat>
   *
   *   </template>
   *
   * </dom-module>
   * ```
   *
   * With the following custom element definition:
   *
   * ```js
   * class EmployeeList extends PolymerElement {
   *   static get is() { return 'employee-list'; }
   *   static get properties() {
   *     return {
   *       employees: {
   *         value() {
   *           return [
   *             {first: 'Bob', last: 'Smith'},
   *             {first: 'Sally', last: 'Johnson'},
   *             ...
   *           ];
   *         }
   *       }
   *     };
   *   }
   * }
   * ```
   *
   * Notifications for changes to items sub-properties will be forwarded to template
   * instances, which will update via the normal structured data notification system.
   *
   * Mutations to the `items` array itself should be made using the Array
   * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
   * `shift`, `unshift`), and template instances will be kept in sync with the
   * data in the array.
   *
   * Events caught by event handlers within the `dom-repeat` template will be
   * decorated with a `model` property, which represents the binding scope for
   * each template instance.  The model should be used to manipulate data on the
   * instance, for example `event.model.set('item.checked', true);`.
   *
   * Alternatively, the model for a template instance for an element stamped by
   * a `dom-repeat` can be obtained using the `modelForElement` API on the
   * `dom-repeat` that stamped it, for example
   * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
   * This may be useful for manipulating instance data of event targets obtained
   * by event handlers on parents of the `dom-repeat` (event delegation).
   *
   * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
   * `filter` and/or `sort` property.  This may be a string that names a function on
   * the host, or a function may be assigned to the property directly.  The functions
   * should implemented following the standard `Array` filter/sort API.
   *
   * In order to re-run the filter or sort functions based on changes to sub-fields
   * of `items`, the `observe` property may be set as a space-separated list of
   * `item` sub-fields that should cause a re-filter/sort when modified.  If
   * the filter or sort function depends on properties not contained in `items`,
   * the user should observe changes to those properties and call `render` to update
   * the view based on the dependency change.
   *
   * For example, for an `dom-repeat` with a filter of the following:
   *
   * ```js
   * isEngineer(item) {
   *   return item.type == 'engineer' || item.manager.type == 'engineer';
   * }
   * ```
   *
   * Then the `observe` property should be configured as follows:
   *
   * ```html
   * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
   * ```
   *
   * @customElement
   * @polymer
   * @extends {domRepeatBase}
   * @appliesMixin OptionalMutableData
   * @summary Custom element for stamping instance of a template bound to
   *   items in an array.
   */

  var DomRepeat =
  /*#__PURE__*/
  function (_domRepeatBase) {
    babelHelpers.inherits(DomRepeat, _domRepeatBase);
    babelHelpers.createClass(DomRepeat, null, [{
      key: "is",
      // Not needed to find template; can be removed once the analyzer
      // can find the tag name from customElements.define call
      get: function get() {
        return 'dom-repeat';
      }
    }, {
      key: "template",
      get: function get() {
        return null;
      }
    }, {
      key: "properties",
      get: function get() {
        /**
         * Fired whenever DOM is added or removed by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */
        return {
          /**
           * An array containing items determining how many instances of the template
           * to stamp and that that each template instance should bind to.
           */
          items: {
            type: Array
          },

          /**
           * The name of the variable to add to the binding scope for the array
           * element associated with a given template instance.
           */
          as: {
            type: String,
            value: 'item'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the sorted and filtered list of rendered items.
           * Note, for the index in the `this.items` array, use the value of the
           * `itemsIndexAs` property.
           */
          indexAs: {
            type: String,
            value: 'index'
          },

          /**
           * The name of the variable to add to the binding scope with the index
           * of the instance in the `this.items` array. Note, for the index of
           * this instance in the sorted and filtered list of rendered items,
           * use the value of the `indexAs` property.
           */
          itemsIndexAs: {
            type: String,
            value: 'itemsIndex'
          },

          /**
           * A function that should determine the sort order of the items.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.sort`.
           * Using a sort function has no effect on the underlying `items` array.
           */
          sort: {
            type: Function,
            observer: '__sortChanged'
          },

          /**
           * A function that can be used to filter items out of the view.  This
           * property should either be provided as a string, indicating a method
           * name on the element's host, or else be an actual function.  The
           * function should match the sort function passed to `Array.filter`.
           * Using a filter function has no effect on the underlying `items` array.
           */
          filter: {
            type: Function,
            observer: '__filterChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `observe` property
           * should be set to a space-separated list of the names of item
           * sub-fields that should trigger a re-sort or re-filter when changed.
           * These should generally be fields of `item` that the sort or filter
           * function depends on.
           */
          observe: {
            type: String,
            observer: '__observeChanged'
          },

          /**
           * When using a `filter` or `sort` function, the `delay` property
           * determines a debounce time in ms after a change to observed item
           * properties that must pass before the filter or sort is re-run.
           * This is useful in rate-limiting shuffling of the view when
           * item changes may be frequent.
           */
          delay: Number,

          /**
           * Count of currently rendered items after `filter` (if any) has been applied.
           * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
           * set of template instances is rendered.
           *
           */
          renderedItemCount: {
            type: Number,
            notify: true,
            readOnly: true
          },

          /**
           * Defines an initial count of template instances to render after setting
           * the `items` array, before the next paint, and puts the `dom-repeat`
           * into "chunking mode".  The remaining items will be created and rendered
           * incrementally at each animation frame therof until all instances have
           * been rendered.
           */
          initialCount: {
            type: Number,
            observer: '__initializeChunking'
          },

          /**
           * When `initialCount` is used, this property defines a frame rate (in
           * fps) to target by throttling the number of instances rendered each
           * frame to not exceed the budget for the target frame rate.  The
           * framerate is effectively the number of `requestAnimationFrame`s that
           * it tries to allow to actually fire in a given second. It does this
           * by measuring the time between `rAF`s and continuously adjusting the
           * number of items created each `rAF` to maintain the target framerate.
           * Setting this to a higher number allows lower latency and higher
           * throughput for event handlers and other tasks, but results in a
           * longer time for the remaining items to complete rendering.
           */
          targetFramerate: {
            type: Number,
            value: 20
          },
          _targetFrameTime: {
            type: Number,
            computed: '__computeFrameTime(targetFramerate)'
          }
        };
      }
    }, {
      key: "observers",
      get: function get() {
        return ['__itemsChanged(items.*)'];
      }
    }]);

    function DomRepeat() {
      var _this;

      babelHelpers.classCallCheck(this, DomRepeat);
      _this = babelHelpers.possibleConstructorReturn(this, (DomRepeat.__proto__ || Object.getPrototypeOf(DomRepeat)).call(this));
      _this.__instances = [];
      _this.__limit = Infinity;
      _this.__pool = [];
      _this.__renderDebouncer = null;
      _this.__itemsIdxToInstIdx = {};
      _this.__chunkCount = null;
      _this.__lastChunkTime = null;
      _this.__sortFn = null;
      _this.__filterFn = null;
      _this.__observePaths = null;
      _this.__ctor = null;
      _this.__isDetached = true;
      _this.template = null;
      return _this;
    }
    /**
     * @return {void}
     */


    babelHelpers.createClass(DomRepeat, [{
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), "disconnectedCallback", this).call(this);
        this.__isDetached = true;

        for (var i = 0; i < this.__instances.length; i++) {
          this.__detachInstance(i);
        }
      }
      /**
       * @return {void}
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), "connectedCallback", this).call(this);
        this.style.display = 'none'; // only perform attachment if the element was previously detached.

        if (this.__isDetached) {
          this.__isDetached = false;
          var parent = this.parentNode;

          for (var i = 0; i < this.__instances.length; i++) {
            this.__attachInstance(i, parent);
          }
        }
      }
    }, {
      key: "__ensureTemplatized",
      value: function __ensureTemplatized() {
        var _this2 = this;

        // Templatizing (generating the instance constructor) needs to wait
        // until ready, since won't have its template content handed back to
        // it until then
        if (!this.__ctor) {
          var template = this.template =
          /** @type {HTMLTemplateElement} */
          this.querySelector('template');

          if (!template) {
            // // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              if (_this2.querySelector('template')) {
                observer.disconnect();

                _this2.__render();
              } else {
                throw new Error('dom-repeat requires a <template> child');
              }
            });
            observer.observe(this, {
              childList: true
            });
            return false;
          } // Template instance props that should be excluded from forwarding


          var instanceProps = {};
          instanceProps[this.as] = true;
          instanceProps[this.indexAs] = true;
          instanceProps[this.itemsIndexAs] = true;
          this.__ctor = (0, _templatize.templatize)(template, this, {
            mutableData: this.mutableData,
            parentModel: true,
            instanceProps: instanceProps,

            /**
             * @this {this}
             * @param {string} prop Property to set
             * @param {*} value Value to set property to
             */
            forwardHostProp: function forwardHostProp(prop, value) {
              var i$ = this.__instances;

              for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
                inst.forwardHostProp(prop, value);
              }
            },

            /**
             * @this {this}
             * @param {Object} inst Instance to notify
             * @param {string} prop Property to notify
             * @param {*} value Value to notify
             */
            notifyInstanceProp: function notifyInstanceProp(inst, prop, value) {
              if ((0, _path.matches)(this.as, prop)) {
                var idx = inst[this.itemsIndexAs];

                if (prop == this.as) {
                  this.items[idx] = value;
                }

                var path = (0, _path.translate)(this.as, 'items.' + idx, prop);
                this.notifyPath(path, value);
              }
            }
          });
        }

        return true;
      }
    }, {
      key: "__getMethodHost",
      value: function __getMethodHost() {
        // Technically this should be the owner of the outermost template.
        // In shadow dom, this is always getRootNode().host, but we can
        // approximate this via cooperation with our dataHost always setting
        // `_methodHost` as long as there were bindings (or id's) on this
        // instance causing it to get a dataHost.
        return this.__dataHost._methodHost || this.__dataHost;
      }
    }, {
      key: "__functionFromPropertyValue",
      value: function __functionFromPropertyValue(functionOrMethodName) {
        if (typeof functionOrMethodName === 'string') {
          var methodName = functionOrMethodName;

          var obj = this.__getMethodHost();

          return function () {
            return obj[methodName].apply(obj, arguments);
          };
        }

        return functionOrMethodName;
      }
    }, {
      key: "__sortChanged",
      value: function __sortChanged(sort) {
        this.__sortFn = this.__functionFromPropertyValue(sort);

        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: "__filterChanged",
      value: function __filterChanged(filter) {
        this.__filterFn = this.__functionFromPropertyValue(filter);

        if (this.items) {
          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: "__computeFrameTime",
      value: function __computeFrameTime(rate) {
        return Math.ceil(1000 / rate);
      }
    }, {
      key: "__initializeChunking",
      value: function __initializeChunking() {
        if (this.initialCount) {
          this.__limit = this.initialCount;
          this.__chunkCount = this.initialCount;
          this.__lastChunkTime = performance.now();
        }
      }
    }, {
      key: "__tryRenderChunk",
      value: function __tryRenderChunk() {
        // Debounced so that multiple calls through `_render` between animation
        // frames only queue one new rAF (e.g. array mutation & chunked render)
        if (this.items && this.__limit < this.items.length) {
          this.__debounceRender(this.__requestRenderChunk);
        }
      }
    }, {
      key: "__requestRenderChunk",
      value: function __requestRenderChunk() {
        var _this3 = this;

        requestAnimationFrame(function () {
          return _this3.__renderChunk();
        });
      }
    }, {
      key: "__renderChunk",
      value: function __renderChunk() {
        // Simple auto chunkSize throttling algorithm based on feedback loop:
        // measure actual time between frames and scale chunk count by ratio
        // of target/actual frame time
        var currChunkTime = performance.now();
        var ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
        this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
        this.__limit += this.__chunkCount;
        this.__lastChunkTime = currChunkTime;

        this.__debounceRender(this.__render);
      }
    }, {
      key: "__observeChanged",
      value: function __observeChanged() {
        this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
      }
    }, {
      key: "__itemsChanged",
      value: function __itemsChanged(change) {
        if (this.items && !Array.isArray(this.items)) {
          console.warn('dom-repeat expected array for `items`, found', this.items);
        } // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
        // path to that instance synchronously (returns false for non-item paths)


        if (!this.__handleItemPath(change.path, change.value)) {
          // Otherwise, the array was reset ('items') or spliced ('items.splices'),
          // so queue a full refresh
          this.__initializeChunking();

          this.__debounceRender(this.__render);
        }
      }
    }, {
      key: "__handleObservedPaths",
      value: function __handleObservedPaths(path) {
        // Handle cases where path changes should cause a re-sort/filter
        if (this.__sortFn || this.__filterFn) {
          if (!path) {
            // Always re-render if the item itself changed
            this.__debounceRender(this.__render, this.delay);
          } else if (this.__observePaths) {
            // Otherwise, re-render if the path changed matches an observed path
            var paths = this.__observePaths;

            for (var i = 0; i < paths.length; i++) {
              if (path.indexOf(paths[i]) === 0) {
                this.__debounceRender(this.__render, this.delay);
              }
            }
          }
        }
      }
      /**
       * @param {function(this:DomRepeat)} fn Function to debounce.
       * @param {number=} delay Delay in ms to debounce by.
       */

    }, {
      key: "__debounceRender",
      value: function __debounceRender(fn) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.__renderDebouncer = _debounce.Debouncer.debounce(this.__renderDebouncer, delay > 0 ? _async.timeOut.after(delay) : _async.microTask, fn.bind(this));
        (0, _flush.enqueueDebouncer)(this.__renderDebouncer);
      }
      /**
       * Forces the element to render its content. Normally rendering is
       * asynchronous to a provoking change. This is done for efficiency so
       * that multiple changes trigger only a single render. The render method
       * should be called if, for example, template rendering is required to
       * validate application state.
       * @return {void}
       */

    }, {
      key: "render",
      value: function render() {
        // Queue this repeater, then flush all in order
        this.__debounceRender(this.__render);

        (0, _flush.flush)();
      }
    }, {
      key: "__render",
      value: function __render() {
        if (!this.__ensureTemplatized()) {
          // No template found yet
          return;
        }

        this.__applyFullRefresh(); // Reset the pool
        // TODO(kschaaf): Reuse pool across turns and nested templates
        // Now that objects/arrays are re-evaluated when set, we can safely
        // reuse pooled instances across turns, however we still need to decide
        // semantics regarding how long to hold, how many to hold, etc.


        this.__pool.length = 0; // Set rendered item count

        this._setRenderedItemCount(this.__instances.length); // Notify users


        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        })); // Check to see if we need to render more items

        this.__tryRenderChunk();
      }
    }, {
      key: "__applyFullRefresh",
      value: function __applyFullRefresh() {
        var _this4 = this;

        var items = this.items || [];
        var isntIdxToItemsIdx = new Array(items.length);

        for (var i = 0; i < items.length; i++) {
          isntIdxToItemsIdx[i] = i;
        } // Apply user filter


        if (this.__filterFn) {
          isntIdxToItemsIdx = isntIdxToItemsIdx.filter(function (i, idx, array) {
            return _this4.__filterFn(items[i], idx, array);
          });
        } // Apply user sort


        if (this.__sortFn) {
          isntIdxToItemsIdx.sort(function (a, b) {
            return _this4.__sortFn(items[a], items[b]);
          });
        } // items->inst map kept for item path forwarding


        var itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
        var instIdx = 0; // Generate instances and assign items

        var limit = Math.min(isntIdxToItemsIdx.length, this.__limit);

        for (; instIdx < limit; instIdx++) {
          var inst = this.__instances[instIdx];
          var itemIdx = isntIdxToItemsIdx[instIdx];
          var item = items[itemIdx];
          itemsIdxToInstIdx[itemIdx] = instIdx;

          if (inst) {
            inst._setPendingProperty(this.as, item);

            inst._setPendingProperty(this.indexAs, instIdx);

            inst._setPendingProperty(this.itemsIndexAs, itemIdx);

            inst._flushProperties();
          } else {
            this.__insertInstance(item, instIdx, itemIdx);
          }
        } // Remove any extra instances from previous state


        for (var _i = this.__instances.length - 1; _i >= instIdx; _i--) {
          this.__detachAndRemoveInstance(_i);
        }
      }
    }, {
      key: "__detachInstance",
      value: function __detachInstance(idx) {
        var inst = this.__instances[idx];

        for (var i = 0; i < inst.children.length; i++) {
          var el = inst.children[i];
          inst.root.appendChild(el);
        }

        return inst;
      }
    }, {
      key: "__attachInstance",
      value: function __attachInstance(idx, parent) {
        var inst = this.__instances[idx];
        parent.insertBefore(inst.root, this);
      }
    }, {
      key: "__detachAndRemoveInstance",
      value: function __detachAndRemoveInstance(idx) {
        var inst = this.__detachInstance(idx);

        if (inst) {
          this.__pool.push(inst);
        }

        this.__instances.splice(idx, 1);
      }
    }, {
      key: "__stampInstance",
      value: function __stampInstance(item, instIdx, itemIdx) {
        var model = {};
        model[this.as] = item;
        model[this.indexAs] = instIdx;
        model[this.itemsIndexAs] = itemIdx;
        return new this.__ctor(model);
      }
    }, {
      key: "__insertInstance",
      value: function __insertInstance(item, instIdx, itemIdx) {
        var inst = this.__pool.pop();

        if (inst) {
          // TODO(kschaaf): If the pool is shared across turns, hostProps
          // need to be re-set to reused instances in addition to item
          inst._setPendingProperty(this.as, item);

          inst._setPendingProperty(this.indexAs, instIdx);

          inst._setPendingProperty(this.itemsIndexAs, itemIdx);

          inst._flushProperties();
        } else {
          inst = this.__stampInstance(item, instIdx, itemIdx);
        }

        var beforeRow = this.__instances[instIdx + 1];
        var beforeNode = beforeRow ? beforeRow.children[0] : this;
        this.parentNode.insertBefore(inst.root, beforeNode);
        this.__instances[instIdx] = inst;
        return inst;
      } // Implements extension point from Templatize mixin

      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hidden Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */

    }, {
      key: "_showHideChildren",
      value: function _showHideChildren(hidden) {
        for (var i = 0; i < this.__instances.length; i++) {
          this.__instances[i]._showHideChildren(hidden);
        }
      } // Called as a side effect of a host items.<key>.<path> path change,
      // responsible for notifying item.<path> changes to inst for key

    }, {
      key: "__handleItemPath",
      value: function __handleItemPath(path, value) {
        var itemsPath = path.slice(6); // 'items.'.length == 6

        var dot = itemsPath.indexOf('.');
        var itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot); // If path was index into array...

        if (itemsIdx == parseInt(itemsIdx, 10)) {
          var itemSubPath = dot < 0 ? '' : itemsPath.substring(dot + 1); // If the path is observed, it will trigger a full refresh

          this.__handleObservedPaths(itemSubPath); // Note, even if a rull refresh is triggered, always do the path
          // notification because unless mutableData is used for dom-repeat
          // and all elements in the instance subtree, a full refresh may
          // not trigger the proper update.


          var instIdx = this.__itemsIdxToInstIdx[itemsIdx];
          var inst = this.__instances[instIdx];

          if (inst) {
            var itemPath = this.as + (itemSubPath ? '.' + itemSubPath : ''); // This is effectively `notifyPath`, but avoids some of the overhead
            // of the public API

            inst._setPendingPropertyOrPath(itemPath, value, false, true);

            inst._flushProperties();
          }

          return true;
        }
      }
      /**
       * Returns the item associated with a given element stamped by
       * this `dom-repeat`.
       *
       * Note, to modify sub-properties of the item,
       * `modelForElement(el).set('item.<sub-prop>', value)`
       * should be used.
       *
       * @param {!HTMLElement} el Element for which to return the item.
       * @return {*} Item associated with the element.
       */

    }, {
      key: "itemForElement",
      value: function itemForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.as];
      }
      /**
       * Returns the inst index for a given element stamped by this `dom-repeat`.
       * If `sort` is provided, the index will reflect the sorted order (rather
       * than the original array order).
       *
       * @param {!HTMLElement} el Element for which to return the index.
       * @return {?number} Row index associated with the element (note this may
       *   not correspond to the array index if a user `sort` is applied).
       */

    }, {
      key: "indexForElement",
      value: function indexForElement(el) {
        var instance = this.modelForElement(el);
        return instance && instance[this.indexAs];
      }
      /**
       * Returns the template "model" associated with a given element, which
       * serves as the binding scope for the template instance the element is
       * contained in. A template model
       * should be used to manipulate data associated with this template instance.
       *
       * Example:
       *
       *   let model = modelForElement(el);
       *   if (model.index < 10) {
       *     model.set('item.checked', true);
       *   }
       *
       * @param {!HTMLElement} el Element for which to return a template model.
       * @return {TemplateInstanceBase} Model representing the binding scope for
       *   the element.
       */

    }, {
      key: "modelForElement",
      value: function modelForElement(el) {
        return (0, _templatize.modelForElement)(this.template, el);
      }
    }]);
    return DomRepeat;
  }(domRepeatBase);

  _exports.DomRepeat = DomRepeat;
  customElements.define(DomRepeat.is, DomRepeat);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/legacy/class.js":
/*!***********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/legacy/class.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./legacy-element-mixin.js */ "./node_modules/@polymer/polymer/lib/legacy/legacy-element-mixin.js"), __webpack_require__(/*! ../elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _legacyElementMixin, _domModule) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.mixinBehaviors = mixinBehaviors;
  _exports.Class = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var metaProps = {
    attached: true,
    detached: true,
    ready: true,
    created: true,
    beforeRegister: true,
    registered: true,
    attributeChanged: true,
    // meta objects
    behaviors: true
  };
  /**
   * Applies a "legacy" behavior or array of behaviors to the provided class.
   *
   * Note: this method will automatically also apply the `LegacyElementMixin`
   * to ensure that any legacy behaviors can rely on legacy Polymer API on
   * the underlying element.
   *
   * @function
   * @template T
   * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
   * @param {function(new:T)} klass Element class.
   * @return {function(new:T)} Returns a new Element class extended by the
   * passed in `behaviors` and also by `LegacyElementMixin`.
   * @suppress {invalidCasts, checkTypes}
   */

  function mixinBehaviors(behaviors, klass) {
    if (!behaviors) {
      klass =
      /** @type {HTMLElement} */
      klass; // eslint-disable-line no-self-assign

      return klass;
    } // NOTE: ensure the behavior is extending a class with
    // legacy element api. This is necessary since behaviors expect to be able
    // to access 1.x legacy api.


    klass = (0, _legacyElementMixin.LegacyElementMixin)(klass);

    if (!Array.isArray(behaviors)) {
      behaviors = [behaviors];
    }

    var superBehaviors = klass.prototype.behaviors; // get flattened, deduped list of behaviors *not* already on super class

    behaviors = flattenBehaviors(behaviors, null, superBehaviors); // mixin new behaviors

    klass = _mixinBehaviors(behaviors, klass);

    if (superBehaviors) {
      behaviors = superBehaviors.concat(behaviors);
    } // Set behaviors on prototype for BC...


    klass.prototype.behaviors = behaviors;
    return klass;
  } // NOTE:
  // 1.x
  // Behaviors were mixed in *in reverse order* and de-duped on the fly.
  // The rule was that behavior properties were copied onto the element
  // prototype if and only if the property did not already exist.
  // Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
  // (1), B, (2), A, (3) C. This means prototype properties win over
  // B properties win over A win over C. This mirrors what would happen
  // with inheritance if element extended B extended A extended C.
  //
  // Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
  // `behaviors` array was [C, A, B].
  // Behavior lifecycle methods were called in behavior array order
  // followed by the element, e.g. (1) C.created, (2) A.created,
  // (3) B.created, (4) element.created. There was no support for
  // super, and "super-behavior" methods were callable only by name).
  //
  // 2.x
  // Behaviors are made into proper mixins which live in the
  // element's prototype chain. Behaviors are placed in the element prototype
  // eldest to youngest and de-duped youngest to oldest:
  // So, first [A, B, C, A, B] becomes [C, A, B] then,
  // the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
  // (3) class(A), (4) class(B), (5) class(Polymer({...})).
  // Result:
  // This means element properties win over B properties win over A win
  // over C. (same as 1.x)
  // If lifecycle is called (super then me), order is
  // (1) C.created, (2) A.created, (3) B.created, (4) element.created
  // (again same as 1.x)


  function _mixinBehaviors(behaviors, klass) {
    for (var i = 0; i < behaviors.length; i++) {
      var b = behaviors[i];

      if (b) {
        klass = Array.isArray(b) ? _mixinBehaviors(b, klass) : GenerateClassFromInfo(b, klass);
      }
    }

    return klass;
  }
  /**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */


  function flattenBehaviors(behaviors, list, exclude) {
    list = list || [];

    for (var i = behaviors.length - 1; i >= 0; i--) {
      var b = behaviors[i];

      if (b) {
        if (Array.isArray(b)) {
          flattenBehaviors(b, list);
        } else {
          // dedup
          if (list.indexOf(b) < 0 && (!exclude || exclude.indexOf(b) < 0)) {
            list.unshift(b);
          }
        }
      } else {
        console.warn('behavior is null, check for missing or 404 import');
      }
    }

    return list;
  }
  /**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */


  function GenerateClassFromInfo(info, Base) {
    var PolymerGenerated =
    /*#__PURE__*/
    function (_Base) {
      babelHelpers.inherits(PolymerGenerated, _Base);

      function PolymerGenerated() {
        babelHelpers.classCallCheck(this, PolymerGenerated);
        return babelHelpers.possibleConstructorReturn(this, (PolymerGenerated.__proto__ || Object.getPrototypeOf(PolymerGenerated)).apply(this, arguments));
      }

      babelHelpers.createClass(PolymerGenerated, [{
        key: "created",

        /**
         * @return {void}
         */
        value: function created() {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "created", this).call(this);

          if (info.created) {
            info.created.call(this);
          }
        }
        /**
         * @return {void}
         */

      }, {
        key: "_registered",
        value: function _registered() {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "_registered", this).call(this);
          /* NOTE: `beforeRegister` is called here for bc, but the behavior
           is different than in 1.x. In 1.0, the method was called *after*
           mixing prototypes together but *before* processing of meta-objects.
           However, dynamic effects can still be set here and can be done either
           in `beforeRegister` or `registered`. It is no longer possible to set
           `is` in `beforeRegister` as you could in 1.x.
          */

          if (info.beforeRegister) {
            info.beforeRegister.call(Object.getPrototypeOf(this));
          }

          if (info.registered) {
            info.registered.call(Object.getPrototypeOf(this));
          }
        }
        /**
         * @return {void}
         */

      }, {
        key: "_applyListeners",
        value: function _applyListeners() {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "_applyListeners", this).call(this);

          if (info.listeners) {
            for (var l in info.listeners) {
              this._addMethodEventListenerToNode(this, l, info.listeners[l]);
            }
          }
        } // note: exception to "super then me" rule;
        // do work before calling super so that super attributes
        // only apply if not already set.

        /**
         * @return {void}
         */

      }, {
        key: "_ensureAttributes",
        value: function _ensureAttributes() {
          if (info.hostAttributes) {
            for (var a in info.hostAttributes) {
              this._ensureAttribute(a, info.hostAttributes[a]);
            }
          }

          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "_ensureAttributes", this).call(this);
        }
        /**
         * @return {void}
         */

      }, {
        key: "ready",
        value: function ready() {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "ready", this).call(this);

          if (info.ready) {
            info.ready.call(this);
          }
        }
        /**
         * @return {void}
         */

      }, {
        key: "attached",
        value: function attached() {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "attached", this).call(this);

          if (info.attached) {
            info.attached.call(this);
          }
        }
        /**
         * @return {void}
         */

      }, {
        key: "detached",
        value: function detached() {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "detached", this).call(this);

          if (info.detached) {
            info.detached.call(this);
          }
        }
        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @return {void}
         */

      }, {
        key: "attributeChanged",
        value: function attributeChanged(name, old, value) {
          babelHelpers.get(PolymerGenerated.prototype.__proto__ || Object.getPrototypeOf(PolymerGenerated.prototype), "attributeChanged", this).call(this, name, old, value);

          if (info.attributeChanged) {
            info.attributeChanged.call(this, name, old, value);
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return info.properties;
        }
      }, {
        key: "observers",
        get: function get() {
          return info.observers;
        }
        /**
         * @return {HTMLTemplateElement} template for this class
         */

      }, {
        key: "template",
        get: function get() {
          // get template first from any imperative set in `info._template`
          return info._template || // next look in dom-module associated with this element's is.
          _domModule.DomModule && _domModule.DomModule.import(this.is, 'template') || // next look for superclass template (note: use superclass symbol
          // to ensure correct `this.is`)
          Base.template || // finally fall back to `_template` in element's prototype.
          this.prototype._template || null;
        }
      }]);
      return PolymerGenerated;
    }(Base);

    PolymerGenerated.generatedFrom = info;

    for (var p in info) {
      // NOTE: cannot copy `metaProps` methods onto prototype at least because
      // `super.ready` must be called and is not included in the user fn.
      if (!(p in metaProps)) {
        var pd = Object.getOwnPropertyDescriptor(info, p);

        if (pd) {
          Object.defineProperty(PolymerGenerated.prototype, p, pd);
        }
      }
    }

    return PolymerGenerated;
  }
  /**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new:HTMLElement)} Generated class
   */


  var Class = function Class(info) {
    if (!info) {
      console.warn("Polymer's Class function requires `info` argument");
    }

    var klass = GenerateClassFromInfo(info, info.behaviors ? // note: mixinBehaviors ensures `LegacyElementMixin`.
    mixinBehaviors(info.behaviors, HTMLElement) : (0, _legacyElementMixin.LegacyElementMixin)(HTMLElement)); // decorate klass with registration info

    klass.is = info.is;
    return klass;
  };

  _exports.Class = Class;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/legacy/legacy-element-mixin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/legacy/legacy-element-mixin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @webcomponents/shadycss/entrypoints/apply-shim.js */ "./node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js"), __webpack_require__(/*! ../mixins/element-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js"), __webpack_require__(/*! ../mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js"), __webpack_require__(/*! ../mixins/dir-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/dir-mixin.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js"), __webpack_require__(/*! ../utils/unresolved.js */ "./node_modules/@polymer/polymer/lib/utils/unresolved.js"), __webpack_require__(/*! ./polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js"), __webpack_require__(/*! ../utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js"), __webpack_require__(/*! ../utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"), __webpack_require__(/*! ../utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js"), __webpack_require__(/*! ../utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _applyShim, _elementMixin, _gestureEventListeners, _dirMixin, _mixin, _renderStatus, _unresolved, _polymerDom, _gestures, _debounce, _async, _path) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LegacyElementMixin = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var styleInterface = window.ShadyCSS;
  /**
   * Element class mixin that provides Polymer's "legacy" API intended to be
   * backward-compatible to the greatest extent possible with the API
   * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
   * defined using the `Polymer({...})` function.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin Polymer.ElementMixin
   * @appliesMixin Polymer.GestureEventListeners
   * @property isAttached {boolean} Set to `true` in this element's
   *   `connectedCallback` and `false` in `disconnectedCallback`
   * @summary Element class mixin that provides Polymer's "legacy" API
   */

  var LegacyElementMixin = (0, _mixin.dedupingMixin)(function (base) {
    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_ElementMixin}
     * @implements {Polymer_GestureEventListeners}
     * @implements {Polymer_DirMixin}
     */
    var legacyElementBase = (0, _dirMixin.DirMixin)((0, _gestureEventListeners.GestureEventListeners)((0, _elementMixin.ElementMixin)(base)));
    /**
     * Map of simple names to touch action names
     * @dict
     */

    var DIRECTION_MAP = {
      'x': 'pan-x',
      'y': 'pan-y',
      'none': 'none',
      'all': 'auto'
    };
    /**
     * @polymer
     * @mixinClass
     * @extends {legacyElementBase}
     * @implements {Polymer_LegacyElementMixin}
     * @unrestricted
     */

    var LegacyElement =
    /*#__PURE__*/
    function (_legacyElementBase) {
      babelHelpers.inherits(LegacyElement, _legacyElementBase);

      function LegacyElement() {
        var _this;

        babelHelpers.classCallCheck(this, LegacyElement);
        _this = babelHelpers.possibleConstructorReturn(this, (LegacyElement.__proto__ || Object.getPrototypeOf(LegacyElement)).call(this));
        /** @type {boolean} */

        _this.isAttached;
        /** @type {WeakMap<!Element, !Object<string, !Function>>} */

        _this.__boundListeners;
        /** @type {Object<string, Function>} */

        _this._debouncers; // Ensure listeners are applied immediately so that they are
        // added before declarative event listeners. This allows an element to
        // decorate itself via an event prior to any declarative listeners
        // seeing the event. Note, this ensures compatibility with 1.x ordering.

        _this._applyListeners();

        return _this;
      }
      /**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       */


      babelHelpers.createClass(LegacyElement, [{
        key: "created",

        /**
         * Legacy callback called during the `constructor`, for overriding
         * by the user.
         * @return {void}
         */
        value: function created() {}
        /**
         * Provides an implementation of `connectedCallback`
         * which adds Polymer legacy API's `attached` method.
         * @return {void}
         * @override
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          babelHelpers.get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), "connectedCallback", this).call(this);
          this.isAttached = true;
          this.attached();
        }
        /**
         * Legacy callback called during `connectedCallback`, for overriding
         * by the user.
         * @return {void}
         */

      }, {
        key: "attached",
        value: function attached() {}
        /**
         * Provides an implementation of `disconnectedCallback`
         * which adds Polymer legacy API's `detached` method.
         * @return {void}
         * @override
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          babelHelpers.get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), "disconnectedCallback", this).call(this);
          this.isAttached = false;
          this.detached();
        }
        /**
         * Legacy callback called during `disconnectedCallback`, for overriding
         * by the user.
         * @return {void}
         */

      }, {
        key: "detached",
        value: function detached() {}
        /**
         * Provides an override implementation of `attributeChangedCallback`
         * which adds the Polymer legacy API's `attributeChanged` method.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @override
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            babelHelpers.get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), "attributeChangedCallback", this).call(this, name, old, value, namespace);
            this.attributeChanged(name, old, value);
          }
        }
        /**
         * Legacy callback called during `attributeChangedChallback`, for overriding
         * by the user.
         * @param {string} name Name of attribute.
         * @param {?string} old Old value of attribute.
         * @param {?string} value Current value of attribute.
         * @return {void}
         */

      }, {
        key: "attributeChanged",
        value: function attributeChanged(name, old, value) {} // eslint-disable-line no-unused-vars

        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for class initialization via the `_registered` callback.
         * This is called only when the first instance of the element is created.
         *
         * @return {void}
         * @override
         * @suppress {invalidCasts}
         */

      }, {
        key: "_initializeProperties",
        value: function _initializeProperties() {
          var proto = Object.getPrototypeOf(this);

          if (!proto.hasOwnProperty('__hasRegisterFinished')) {
            proto.__hasRegisterFinished = true;

            this._registered();
          }

          babelHelpers.get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), "_initializeProperties", this).call(this);
          this.root =
          /** @type {HTMLElement} */
          this;
          this.created();
        }
        /**
         * Called automatically when an element is initializing.
         * Users may override this method to perform class registration time
         * work. The implementation should ensure the work is performed
         * only once for the class.
         * @protected
         * @return {void}
         */

      }, {
        key: "_registered",
        value: function _registered() {}
        /**
         * Overrides the default `Polymer.PropertyEffects` implementation to
         * add support for installing `hostAttributes` and `listeners`.
         *
         * @return {void}
         * @override
         */

      }, {
        key: "ready",
        value: function ready() {
          this._ensureAttributes();

          babelHelpers.get(LegacyElement.prototype.__proto__ || Object.getPrototypeOf(LegacyElement.prototype), "ready", this).call(this);
        }
        /**
         * Ensures an element has required attributes. Called when the element
         * is being readied via `ready`. Users should override to set the
         * element's required attributes. The implementation should be sure
         * to check and not override existing attributes added by
         * the user of the element. Typically, setting attributes should be left
         * to the element user and not done here; reasonable exceptions include
         * setting aria roles and focusability.
         * @protected
         * @return {void}
         */

      }, {
        key: "_ensureAttributes",
        value: function _ensureAttributes() {}
        /**
         * Adds element event listeners. Called when the element
         * is being readied via `ready`. Users should override to
         * add any required element event listeners.
         * In performance critical elements, the work done here should be kept
         * to a minimum since it is done before the element is rendered. In
         * these elements, consider adding listeners asynchronously so as not to
         * block render.
         * @protected
         * @return {void}
         */

      }, {
        key: "_applyListeners",
        value: function _applyListeners() {}
        /**
         * Converts a typed JavaScript value to a string.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features. To customize
         * how properties are serialized to attributes for attribute bindings and
         * `reflectToAttribute: true` properties as well as this method, override
         * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
         *
         * @param {*} value Value to deserialize
         * @return {string | undefined} Serialized value
         */

      }, {
        key: "serialize",
        value: function serialize(value) {
          return this._serializeValue(value);
        }
        /**
         * Converts a string to a typed JavaScript value.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.  To customize
         * how attributes are deserialized to properties for in
         * `attributeChangedCallback`, override `_deserializeValue` method
         * provided by `Polymer.PropertyAccessors`.
         *
         * @param {string} value String to deserialize
         * @param {*} type Type to deserialize the string to
         * @return {*} Returns the deserialized value in the `type` given.
         */

      }, {
        key: "deserialize",
        value: function deserialize(value, type) {
          return this._deserializeValue(value, type);
        }
        /**
         * Serializes a property to its associated attribute.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect.
         * @param {*=} value Property value to reflect.
         * @return {void}
         */

      }, {
        key: "reflectPropertyToAttribute",
        value: function reflectPropertyToAttribute(property, attribute, value) {
          this._propertyToAttribute(property, attribute, value);
        }
        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         *
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @param {Element} node Element to set attribute to.
         * @return {void}
         */

      }, {
        key: "serializeValueToAttribute",
        value: function serializeValueToAttribute(value, attribute, node) {
          this._valueToNodeAttribute(
          /** @type {Element} */
          node || this, value, attribute);
        }
        /**
         * Copies own properties (including accessor descriptors) from a source
         * object to a target object.
         *
         * @param {Object} prototype Target object to copy properties to.
         * @param {Object} api Source object to copy properties from.
         * @return {Object} prototype object that was passed as first argument.
         */

      }, {
        key: "extend",
        value: function extend(prototype, api) {
          if (!(prototype && api)) {
            return prototype || api;
          }

          var n$ = Object.getOwnPropertyNames(api);

          for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
            var pd = Object.getOwnPropertyDescriptor(api, n);

            if (pd) {
              Object.defineProperty(prototype, n, pd);
            }
          }

          return prototype;
        }
        /**
         * Copies props from a source object to a target object.
         *
         * Note, this method uses a simple `for...in` strategy for enumerating
         * properties.  To ensure only `ownProperties` are copied from source
         * to target and that accessor implementations are copied, use `extend`.
         *
         * @param {!Object} target Target object to copy properties to.
         * @param {!Object} source Source object to copy properties from.
         * @return {!Object} Target object that was passed as first argument.
         */

      }, {
        key: "mixin",
        value: function mixin(target, source) {
          for (var i in source) {
            target[i] = source[i];
          }

          return target;
        }
        /**
         * Sets the prototype of an object.
         *
         * Note this method is provided as backward-compatible legacy API
         * only.  It is not directly called by any Polymer features.
         * @param {Object} object The object on which to set the prototype.
         * @param {Object} prototype The prototype that will be set on the given
         * `object`.
         * @return {Object} Returns the given `object` with its prototype set
         * to the given `prototype` object.
         */

      }, {
        key: "chainObject",
        value: function chainObject(object, prototype) {
          if (object && prototype && object !== prototype) {
            object.__proto__ = prototype;
          }

          return object;
        }
        /* **** Begin Template **** */

        /**
         * Calls `importNode` on the `content` of the `template` specified and
         * returns a document fragment containing the imported content.
         *
         * @param {HTMLTemplateElement} template HTML template element to instance.
         * @return {!DocumentFragment} Document fragment containing the imported
         *   template content.
        */

      }, {
        key: "instanceTemplate",
        value: function instanceTemplate(template) {
          var content = this.constructor._contentForTemplate(template);

          var dom =
          /** @type {!DocumentFragment} */
          document.importNode(content, true);
          return dom;
        }
        /* **** Begin Events **** */

        /**
         * Dispatches a custom event with an optional detail value.
         *
         * @param {string} type Name of event type.
         * @param {*=} detail Detail value containing event-specific
         *   payload.
         * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
         *  options Object specifying options.  These may include:
         *  `bubbles` (boolean, defaults to `true`),
         *  `cancelable` (boolean, defaults to false), and
         *  `node` on which to fire the event (HTMLElement, defaults to `this`).
         * @return {!Event} The new event that was fired.
         */

      }, {
        key: "fire",
        value: function fire(type, detail, options) {
          options = options || {};
          detail = detail === null || detail === undefined ? {} : detail;
          var event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true : options.composed
          });
          event.detail = detail;
          var node = options.node || this;
          node.dispatchEvent(event);
          return event;
        }
        /**
         * Convenience method to add an event listener on a given element,
         * late bound to a named method on this element.
         *
         * @param {Element} node Element to add event listener to.
         * @param {string} eventName Name of event to listen for.
         * @param {string} methodName Name of handler method on `this` to call.
         * @return {void}
         */

      }, {
        key: "listen",
        value: function listen(node, eventName, methodName) {
          node =
          /** @type {!Element} */
          node || this;
          var hbl = this.__boundListeners || (this.__boundListeners = new WeakMap());
          var bl = hbl.get(node);

          if (!bl) {
            bl = {};
            hbl.set(node, bl);
          }

          var key = eventName + methodName;

          if (!bl[key]) {
            bl[key] = this._addMethodEventListenerToNode(node, eventName, methodName, this);
          }
        }
        /**
         * Convenience method to remove an event listener from a given element,
         * late bound to a named method on this element.
         *
         * @param {Element} node Element to remove event listener from.
         * @param {string} eventName Name of event to stop listening to.
         * @param {string} methodName Name of handler method on `this` to not call
         anymore.
         * @return {void}
         */

      }, {
        key: "unlisten",
        value: function unlisten(node, eventName, methodName) {
          node =
          /** @type {!Element} */
          node || this;

          var bl = this.__boundListeners && this.__boundListeners.get(node);

          var key = eventName + methodName;
          var handler = bl && bl[key];

          if (handler) {
            this._removeEventListenerFromNode(node, eventName, handler);

            bl[key] = null;
          }
        }
        /**
         * Override scrolling behavior to all direction, one direction, or none.
         *
         * Valid scroll directions:
         *   - 'all': scroll in any direction
         *   - 'x': scroll only in the 'x' direction
         *   - 'y': scroll only in the 'y' direction
         *   - 'none': disable scrolling for this node
         *
         * @param {string=} direction Direction to allow scrolling
         * Defaults to `all`.
         * @param {Element=} node Element to apply scroll direction setting.
         * Defaults to `this`.
         * @return {void}
         */

      }, {
        key: "setScrollDirection",
        value: function setScrollDirection(direction, node) {
          (0, _gestures.setTouchAction)(node || this, DIRECTION_MAP[direction] || 'auto');
        }
        /* **** End Events **** */

        /**
         * Convenience method to run `querySelector` on this local DOM scope.
         *
         * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
         *
         * @param {string} slctr Selector to run on this local DOM scope
         * @return {Element} Element found by the selector, or null if not found.
         */

      }, {
        key: "$$",
        value: function $$(slctr) {
          return this.root.querySelector(slctr);
        }
        /**
         * Return the element whose local dom within which this element
         * is contained. This is a shorthand for
         * `this.getRootNode().host`.
         * @this {Element}
         */

      }, {
        key: "distributeContent",

        /**
         * Force this element to distribute its children to its local dom.
         * This should not be necessary as of Polymer 2.0.2 and is provided only
         * for backwards compatibility.
         * @return {void}
         */
        value: function distributeContent() {
          if (window.ShadyDOM && this.shadowRoot) {
            ShadyDOM.flush();
          }
        }
        /**
         * Returns a list of nodes that are the effective childNodes. The effective
         * childNodes list is the same as the element's childNodes except that
         * any `<content>` elements are replaced with the list of nodes distributed
         * to the `<content>`, the result of its `getDistributedNodes` method.
         * @return {!Array<!Node>} List of effective child nodes.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: "getEffectiveChildNodes",
        value: function getEffectiveChildNodes() {
          var thisEl =
          /** @type {Element} */
          this;
          var domApi =
          /** @type {Polymer.DomApi} */
          (0, _polymerDom.dom)(thisEl);
          return domApi.getEffectiveChildNodes();
        }
        /**
         * Returns a list of nodes distributed within this element that match
         * `selector`. These can be dom children or elements distributed to
         * children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {!Array<!Node>} List of distributed elements that match selector.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: "queryDistributedElements",
        value: function queryDistributedElements(selector) {
          var thisEl =
          /** @type {Element} */
          this;
          var domApi =
          /** @type {Polymer.DomApi} */
          (0, _polymerDom.dom)(thisEl);
          return domApi.queryDistributedElements(selector);
        }
        /**
         * Returns a list of elements that are the effective children. The effective
         * children list is the same as the element's children except that
         * any `<content>` elements are replaced with the list of elements
         * distributed to the `<content>`.
         *
         * @return {!Array<!Node>} List of effective children.
         */

      }, {
        key: "getEffectiveChildren",
        value: function getEffectiveChildren() {
          var list = this.getEffectiveChildNodes();
          return list.filter(function (
          /** @type {!Node} */
          n) {
            return n.nodeType === Node.ELEMENT_NODE;
          });
        }
        /**
         * Returns a string of text content that is the concatenation of the
         * text content's of the element's effective childNodes (the elements
         * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
         *
         * @return {string} List of effective children.
         */

      }, {
        key: "getEffectiveTextContent",
        value: function getEffectiveTextContent() {
          var cn = this.getEffectiveChildNodes();
          var tc = [];

          for (var i = 0, c; c = cn[i]; i++) {
            if (c.nodeType !== Node.COMMENT_NODE) {
              tc.push(c.textContent);
            }
          }

          return tc.join('');
        }
        /**
         * Returns the first effective childNode within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {Node} First effective child node that matches selector.
         */

      }, {
        key: "queryEffectiveChildren",
        value: function queryEffectiveChildren(selector) {
          var e$ = this.queryDistributedElements(selector);
          return e$ && e$[0];
        }
        /**
         * Returns a list of effective childNodes within this element that
         * match `selector`. These can be dom child nodes or elements distributed
         * to children that are insertion points.
         * @param {string} selector Selector to run.
         * @return {!Array<!Node>} List of effective child nodes that match selector.
         */

      }, {
        key: "queryAllEffectiveChildren",
        value: function queryAllEffectiveChildren(selector) {
          return this.queryDistributedElements(selector);
        }
        /**
         * Returns a list of nodes distributed to this element's `<slot>`.
         *
         * If this element contains more than one `<slot>` in its local DOM,
         * an optional selector may be passed to choose the desired content.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<slot>`.  Defaults to `content`.
         * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
         */

      }, {
        key: "getContentChildNodes",
        value: function getContentChildNodes(slctr) {
          var content = this.root.querySelector(slctr || 'slot');
          return content ?
          /** @type {Polymer.DomApi} */
          (0, _polymerDom.dom)(content).getDistributedNodes() : [];
        }
        /**
         * Returns a list of element children distributed to this element's
         * `<slot>`.
         *
         * If this element contains more than one `<slot>` in its
         * local DOM, an optional selector may be passed to choose the desired
         * content.  This method differs from `getContentChildNodes` in that only
         * elements are returned.
         *
         * @param {string=} slctr CSS selector to choose the desired
         *   `<content>`.  Defaults to `content`.
         * @return {!Array<!HTMLElement>} List of distributed nodes for the
         *   `<slot>`.
         * @suppress {invalidCasts}
         */

      }, {
        key: "getContentChildren",
        value: function getContentChildren(slctr) {
          var children =
          /** @type {!Array<!HTMLElement>} */
          this.getContentChildNodes(slctr).filter(function (n) {
            return n.nodeType === Node.ELEMENT_NODE;
          });
          return children;
        }
        /**
         * Checks whether an element is in this element's light DOM tree.
         *
         * @param {?Node} node The element to be checked.
         * @return {boolean} true if node is in this element's light DOM tree.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: "isLightDescendant",
        value: function isLightDescendant(node) {
          var thisNode =
          /** @type {Node} */
          this;
          return thisNode !== node && thisNode.contains(node) && thisNode.getRootNode() === node.getRootNode();
        }
        /**
         * Checks whether an element is in this element's local DOM tree.
         *
         * @param {!Element} node The element to be checked.
         * @return {boolean} true if node is in this element's local DOM tree.
         */

      }, {
        key: "isLocalDescendant",
        value: function isLocalDescendant(node) {
          return this.root === node.getRootNode();
        }
        /**
         * No-op for backwards compatibility. This should now be handled by
         * ShadyCss library.
         * @param  {*} container Unused
         * @param  {*} shouldObserve Unused
         * @return {void}
         */

      }, {
        key: "scopeSubtree",
        value: function scopeSubtree(container, shouldObserve) {} // eslint-disable-line no-unused-vars

        /**
         * Returns the computed style value for the given property.
         * @param {string} property The css property name.
         * @return {string} Returns the computed css property value for the given
         * `property`.
         * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
         */

      }, {
        key: "getComputedStyleValue",
        value: function getComputedStyleValue(property) {
          return styleInterface.getComputedStyleValue(
          /** @type {!Element} */
          this, property);
        } // debounce

        /**
         * Call `debounce` to collapse multiple requests for a named task into
         * one invocation which is made after the wait time has elapsed with
         * no new request.  If no wait time is given, the callback will be called
         * at microtask timing (guaranteed before paint).
         *
         *     debouncedClickAction(e) {
         *       // will not call `processClick` more than once per 100ms
         *       this.debounce('click', function() {
         *        this.processClick();
         *       } 100);
         *     }
         *
         * @param {string} jobName String to identify the debounce job.
         * @param {function():void} callback Function that is called (with `this`
         *   context) when the wait time elapses.
         * @param {number} wait Optional wait time in milliseconds (ms) after the
         *   last signal that must elapse before invoking `callback`
         * @return {!Object} Returns a debouncer object on which exists the
         * following methods: `isActive()` returns true if the debouncer is
         * active; `cancel()` cancels the debouncer if it is active;
         * `flush()` immediately invokes the debounced callback if the debouncer
         * is active.
         */

      }, {
        key: "debounce",
        value: function debounce(jobName, callback, wait) {
          this._debouncers = this._debouncers || {};
          return this._debouncers[jobName] = _debounce.Debouncer.debounce(this._debouncers[jobName], wait > 0 ? _async.timeOut.after(wait) : _async.microTask, callback.bind(this));
        }
        /**
         * Returns whether a named debouncer is active.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {boolean} Whether the debouncer is active (has not yet fired).
         */

      }, {
        key: "isDebouncerActive",
        value: function isDebouncerActive(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];
          return !!(debouncer && debouncer.isActive());
        }
        /**
         * Immediately calls the debouncer `callback` and inactivates it.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {void}
         */

      }, {
        key: "flushDebouncer",
        value: function flushDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];

          if (debouncer) {
            debouncer.flush();
          }
        }
        /**
         * Cancels an active debouncer.  The `callback` will not be called.
         *
         * @param {string} jobName The name of the debouncer started with `debounce`
         * @return {void}
         */

      }, {
        key: "cancelDebouncer",
        value: function cancelDebouncer(jobName) {
          this._debouncers = this._debouncers || {};
          var debouncer = this._debouncers[jobName];

          if (debouncer) {
            debouncer.cancel();
          }
        }
        /**
         * Runs a callback function asynchronously.
         *
         * By default (if no waitTime is specified), async callbacks are run at
         * microtask timing, which will occur before paint.
         *
         * @param {!Function} callback The callback function to run, bound to `this`.
         * @param {number=} waitTime Time to wait before calling the
         *   `callback`.  If unspecified or 0, the callback will be run at microtask
         *   timing (before paint).
         * @return {number} Handle that may be used to cancel the async job.
         */

      }, {
        key: "async",
        value: function async(callback, waitTime) {
          return waitTime > 0 ? _async.timeOut.run(callback.bind(this), waitTime) : ~_async.microTask.run(callback.bind(this));
        }
        /**
         * Cancels an async operation started with `async`.
         *
         * @param {number} handle Handle returned from original `async` call to
         *   cancel.
         * @return {void}
         */

      }, {
        key: "cancelAsync",
        value: function cancelAsync(handle) {
          handle < 0 ? _async.microTask.cancel(~handle) : _async.timeOut.cancel(handle);
        } // other

        /**
         * Convenience method for creating an element and configuring it.
         *
         * @param {string} tag HTML element tag to create.
         * @param {Object=} props Object of properties to configure on the
         *    instance.
         * @return {!Element} Newly created and configured element.
         */

      }, {
        key: "create",
        value: function create(tag, props) {
          var elt = document.createElement(tag);

          if (props) {
            if (elt.setProperties) {
              elt.setProperties(props);
            } else {
              for (var n in props) {
                elt[n] = props[n];
              }
            }
          }

          return elt;
        }
        /**
         * Polyfill for Element.prototype.matches, which is sometimes still
         * prefixed.
         *
         * @param {string} selector Selector to test.
         * @param {!Element=} node Element to test the selector against.
         * @return {boolean} Whether the element matches the selector.
         */

      }, {
        key: "elementMatches",
        value: function elementMatches(selector, node) {
          return (0, _polymerDom.matchesSelector)(node || this, selector);
        }
        /**
         * Toggles an HTML attribute on or off.
         *
         * @param {string} name HTML attribute name
         * @param {boolean=} bool Boolean to force the attribute on or off.
         *    When unspecified, the state of the attribute will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         * @return {void}
         */

      }, {
        key: "toggleAttribute",
        value: function toggleAttribute(name, bool, node) {
          node =
          /** @type {Element} */
          node || this;

          if (arguments.length == 1) {
            bool = !node.hasAttribute(name);
          }

          if (bool) {
            node.setAttribute(name, '');
          } else {
            node.removeAttribute(name);
          }
        }
        /**
         * Toggles a CSS class on or off.
         *
         * @param {string} name CSS class name
         * @param {boolean=} bool Boolean to force the class on or off.
         *    When unspecified, the state of the class will be reversed.
         * @param {Element=} node Node to target.  Defaults to `this`.
         * @return {void}
         */

      }, {
        key: "toggleClass",
        value: function toggleClass(name, bool, node) {
          node =
          /** @type {Element} */
          node || this;

          if (arguments.length == 1) {
            bool = !node.classList.contains(name);
          }

          if (bool) {
            node.classList.add(name);
          } else {
            node.classList.remove(name);
          }
        }
        /**
         * Cross-platform helper for setting an element's CSS `transform` property.
         *
         * @param {string} transformText Transform setting.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`
         * @return {void}
         */

      }, {
        key: "transform",
        value: function transform(transformText, node) {
          node =
          /** @type {Element} */
          node || this;
          node.style.webkitTransform = transformText;
          node.style.transform = transformText;
        }
        /**
         * Cross-platform helper for setting an element's CSS `translate3d`
         * property.
         *
         * @param {number} x X offset.
         * @param {number} y Y offset.
         * @param {number} z Z offset.
         * @param {Element=} node Element to apply the transform to.
         * Defaults to `this`.
         * @return {void}
         */

      }, {
        key: "translate3d",
        value: function translate3d(x, y, z, node) {
          node =
          /** @type {Element} */
          node || this;
          this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
        }
        /**
         * Removes an item from an array, if it exists.
         *
         * If the array is specified by path, a change notification is
         * generated, so that observers, data bindings and computed
         * properties watching that path can update.
         *
         * If the array is passed directly, **no change
         * notification is generated**.
         *
         * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
         *   (or the array itself).
         * @param {*} item Item to remove.
         * @return {Array} Array containing item removed.
         */

      }, {
        key: "arrayDelete",
        value: function arrayDelete(arrayOrPath, item) {
          var index;

          if (Array.isArray(arrayOrPath)) {
            index = arrayOrPath.indexOf(item);

            if (index >= 0) {
              return arrayOrPath.splice(index, 1);
            }
          } else {
            var arr = (0, _path.get)(this, arrayOrPath);
            index = arr.indexOf(item);

            if (index >= 0) {
              return this.splice(arrayOrPath, index, 1);
            }
          }

          return null;
        } // logging

        /**
         * Facades `console.log`/`warn`/`error` as override point.
         *
         * @param {string} level One of 'log', 'warn', 'error'
         * @param {Array} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: "_logger",
        value: function _logger(level, args) {
          var _console;

          // accept ['foo', 'bar'] and [['foo', 'bar']]
          if (Array.isArray(args) && args.length === 1 && Array.isArray(args[0])) {
            args = args[0];
          }

          switch (level) {
            case 'log':
            case 'warn':
            case 'error':
              (_console = console)[level].apply(_console, babelHelpers.toConsumableArray(args));

          }
        }
        /**
         * Facades `console.log` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: "_log",
        value: function _log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          this._logger('log', args);
        }
        /**
         * Facades `console.warn` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: "_warn",
        value: function _warn() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          this._logger('warn', args);
        }
        /**
         * Facades `console.error` as an override point.
         *
         * @param {...*} args Array of strings or objects to log
         * @return {void}
         */

      }, {
        key: "_error",
        value: function _error() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          this._logger('error', args);
        }
        /**
         * Formats a message using the element type an a method name.
         *
         * @param {string} methodName Method name to associate with message
         * @param {...*} args Array of strings or objects to log
         * @return {Array} Array with formatting information for `console`
         *   logging.
         */

      }, {
        key: "_logf",
        value: function _logf(methodName) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          return ['[%s::%s]', this.is, methodName].concat(args);
        }
      }, {
        key: "domHost",
        get: function get() {
          var root = this.getRootNode();
          return babelHelpers.instanceof(root, DocumentFragment) ?
          /** @type {ShadowRoot} */
          root.host : root;
        }
      }], [{
        key: "importMeta",
        get: function get() {
          return this.prototype.importMeta;
        }
      }]);
      return LegacyElement;
    }(legacyElementBase);

    LegacyElement.prototype.is = '';
    return LegacyElement;
  });
  _exports.LegacyElementMixin = LegacyElementMixin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../mixins/mutable-data.js */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _mutableData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.OptionalMutableDataBehavior = _exports.MutableDataBehavior = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var mutablePropertyChange;
  /** @suppress {missingProperties} */

  (function () {
    mutablePropertyChange = _mutableData.MutableData._mutablePropertyChange;
  })();
  /**
   * Legacy element behavior to skip strict dirty-checking for objects and arrays,
   * (always consider them to be "dirty") for use on legacy API Polymer elements.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this behavior or enable the
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * In order to make the dirty check strategy configurable, see
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @polymerBehavior
   * @summary Behavior to skip strict dirty-checking for objects and
   *   arrays
   */


  var MutableDataBehavior = {
    /**
     * Overrides `Polymer.PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */
    _shouldPropertyChange: function _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, true);
    }
  };
  /**
   * Legacy element behavior to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `Polymer.PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this behavior or apply the
   * `Polymer.OptionalMutableDataBehavior`.
   *
   * While this behavior adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @polymerBehavior
   * @summary Behavior to optionally skip strict dirty-checking for objects and
   *   arrays
   */

  _exports.MutableDataBehavior = MutableDataBehavior;
  var OptionalMutableDataBehavior = {
    properties: {
      /**
       * Instance-level flag for configuring the dirty-checking strategy
       * for this element.  When true, Objects and Arrays will skip dirty
       * checking, otherwise strict equality checking will be used.
       */
      mutableData: Boolean
    },

    /**
     * Overrides `Polymer.PropertyEffects` to skip strict equality checking
     * for Objects and Arrays.
     *
     * Pulls the value to dirty check against from the `__dataTemp` cache
     * (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @this {this}
     * @protected
     */
    _shouldPropertyChange: function _shouldPropertyChange(property, value, old) {
      return mutablePropertyChange(this, property, value, old, this.mutableData);
    }
  };
  _exports.OptionalMutableDataBehavior = OptionalMutableDataBehavior;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js"), __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _class, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Polymer = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Legacy class factory and registration helper for defining Polymer
   * elements.
   *
   * This method is equivalent to
   *
   *     import {Class} from '@polymer/polymer/lib/legacy/class.js';
   *     customElements.define(info.is, Class(info));
   *
   * See `Class` for details on valid legacy metadata format for `info`.
   *
   * @global
   * @override
   * @function
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @return {function(new: HTMLElement)} Generated class
   * @suppress {duplicate, invalidCasts, checkTypes}
   */
  var Polymer = function Polymer(info) {
    // if input is a `class` (aka a function with a prototype), use the prototype
    // remember that the `constructor` will never be called
    var klass;

    if (typeof info === 'function') {
      klass = info;
    } else {
      klass = Polymer.Class(info);
    }

    customElements.define(klass.is,
    /** @type {!HTMLElement} */
    klass);
    return klass;
  };

  _exports.Polymer = Polymer;
  Polymer.Class = _class.Class;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js"), __webpack_require__(/*! ../utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js"), __webpack_require__(/*! ../utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _settings, _flattenedNodesObserver, _flush) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "flush", {
    enumerable: true,
    get: function get() {
      return _flush.flush;
    }
  });
  Object.defineProperty(_exports, "addDebouncer", {
    enumerable: true,
    get: function get() {
      return _flush.enqueueDebouncer;
    }
  });
  _exports.dom = _exports.DomApi = _exports.matchesSelector = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var p = Element.prototype;
  /**
   * @const {function(this:Node, string): boolean}
   */

  var normalizedMatchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
  /**
   * Cross-platform `element.matches` shim.
   *
   * @function matchesSelector
   * @param {!Node} node Node to check selector against
   * @param {string} selector Selector to match
   * @return {boolean} True if node matched selector
   */

  var matchesSelector = function matchesSelector(node, selector) {
    return normalizedMatchesSelector.call(node, selector);
  };
  /**
   * Node API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is a `Node`.
   *
   */


  _exports.matchesSelector = matchesSelector;

  var DomApi =
  /*#__PURE__*/
  function () {
    /**
     * @param {Node} node Node for which to create a Polymer.dom helper object.
     */
    function DomApi(node) {
      babelHelpers.classCallCheck(this, DomApi);
      this.node = node;
    }
    /**
     * Returns an instance of `Polymer.FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(!Element, { target: !Element, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!Polymer.FlattenedNodesObserver} Observer instance
     */


    babelHelpers.createClass(DomApi, [{
      key: "observeNodes",
      value: function observeNodes(callback) {
        return new _flattenedNodesObserver.FlattenedNodesObserver(this.node, callback);
      }
      /**
       * Disconnects an observer previously created via `observeNodes`
       *
       * @param {!Polymer.FlattenedNodesObserver} observerHandle Observer instance
       *   to disconnect.
       * @return {void}
       */

    }, {
      key: "unobserveNodes",
      value: function unobserveNodes(observerHandle) {
        observerHandle.disconnect();
      }
      /**
       * Provided as a backwards-compatible API only.  This method does nothing.
       * @return {void}
       */

    }, {
      key: "notifyObserver",
      value: function notifyObserver() {}
      /**
       * Returns true if the provided node is contained with this element's
       * light-DOM children or shadow root, including any nested shadow roots
       * of children therein.
       *
       * @param {Node} node Node to test
       * @return {boolean} Returns true if the given `node` is contained within
       *   this element's light or shadow DOM.
       */

    }, {
      key: "deepContains",
      value: function deepContains(node) {
        if (this.node.contains(node)) {
          return true;
        }

        var n = node;
        var doc = node.ownerDocument; // walk from node to `this` or `document`

        while (n && n !== doc && n !== this.node) {
          // use logical parentnode, or native ShadowRoot host
          n = n.parentNode || n.host;
        }

        return n === this.node;
      }
      /**
       * Returns the root node of this node.  Equivalent to `getRoodNode()`.
       *
       * @return {Node} Top most element in the dom tree in which the node
       * exists. If the node is connected to a document this is either a
       * shadowRoot or the document; otherwise, it may be the node
       * itself or a node or document fragment containing it.
       */

    }, {
      key: "getOwnerRoot",
      value: function getOwnerRoot() {
        return this.node.getRootNode();
      }
      /**
       * For slot elements, returns the nodes assigned to the slot; otherwise
       * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
       *
       * @return {!Array<!Node>} Array of assigned nodes
       */

    }, {
      key: "getDistributedNodes",
      value: function getDistributedNodes() {
        return this.node.localName === 'slot' ? this.node.assignedNodes({
          flatten: true
        }) : [];
      }
      /**
       * Returns an array of all slots this element was distributed to.
       *
       * @return {!Array<!HTMLSlotElement>} Description
       */

    }, {
      key: "getDestinationInsertionPoints",
      value: function getDestinationInsertionPoints() {
        var ip$ = [];
        var n = this.node.assignedSlot;

        while (n) {
          ip$.push(n);
          n = n.assignedSlot;
        }

        return ip$;
      }
      /**
       * Calls `importNode` on the `ownerDocument` for this node.
       *
       * @param {!Node} node Node to import
       * @param {boolean} deep True if the node should be cloned deeply during
       *   import
       * @return {Node} Clone of given node imported to this owner document
       */

    }, {
      key: "importNode",
      value: function importNode(node, deep) {
        var doc = babelHelpers.instanceof(this.node, Document) ? this.node : this.node.ownerDocument;
        return doc.importNode(node, deep);
      }
      /**
       * @return {!Array<!Node>} Returns a flattened list of all child nodes and
       * nodes assigned to child slots.
       */

    }, {
      key: "getEffectiveChildNodes",
      value: function getEffectiveChildNodes() {
        return _flattenedNodesObserver.FlattenedNodesObserver.getFlattenedNodes(this.node);
      }
      /**
       * Returns a filtered list of flattened child elements for this element based
       * on the given selector.
       *
       * @param {string} selector Selector to filter nodes against
       * @return {!Array<!HTMLElement>} List of flattened child elements
       */

    }, {
      key: "queryDistributedElements",
      value: function queryDistributedElements(selector) {
        var c$ = this.getEffectiveChildNodes();
        var list = [];

        for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
          if (c.nodeType === Node.ELEMENT_NODE && matchesSelector(c, selector)) {
            list.push(c);
          }
        }

        return list;
      }
      /**
       * For shadow roots, returns the currently focused element within this
       * shadow root.
       *
       * @return {Node|undefined} Currently focused element
       */

    }, {
      key: "activeElement",
      get: function get() {
        var node = this.node;
        return node._activeElement !== undefined ? node._activeElement : node.activeElement;
      }
    }]);
    return DomApi;
  }();

  _exports.DomApi = DomApi;

  function forwardMethods(proto, methods) {
    var _loop = function _loop(i) {
      var method = methods[i];
      /* eslint-disable valid-jsdoc */

      proto[method] =
      /** @this {DomApi} */
      function () {
        return this.node[method].apply(this.node, arguments);
      };
      /* eslint-enable */

    };

    for (var i = 0; i < methods.length; i++) {
      _loop(i);
    }
  }

  function forwardReadOnlyProperties(proto, properties) {
    var _loop2 = function _loop2(i) {
      var name = properties[i];
      Object.defineProperty(proto, name, {
        get: function get() {
          var domApi =
          /** @type {DomApi} */
          this;
          return domApi.node[name];
        },
        configurable: true
      });
    };

    for (var i = 0; i < properties.length; i++) {
      _loop2(i);
    }
  }

  function forwardProperties(proto, properties) {
    var _loop3 = function _loop3(i) {
      var name = properties[i];
      Object.defineProperty(proto, name, {
        get: function get() {
          var domApi =
          /** @type {DomApi} */
          this;
          return domApi.node[name];
        },
        set: function set(value) {
          /** @type {DomApi} */
          this.node[name] = value;
        },
        configurable: true
      });
    };

    for (var i = 0; i < properties.length; i++) {
      _loop3(i);
    }
  }

  forwardMethods(DomApi.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll']);
  forwardReadOnlyProperties(DomApi.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']);
  forwardProperties(DomApi.prototype, ['textContent', 'innerHTML']);
  /**
   * Event API wrapper class returned from `Polymer.dom.(target)` when
   * `target` is an `Event`.
   */

  var EventApi =
  /*#__PURE__*/
  function () {
    function EventApi(event) {
      babelHelpers.classCallCheck(this, EventApi);
      this.event = event;
    }
    /**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */


    babelHelpers.createClass(EventApi, [{
      key: "rootTarget",
      get: function get() {
        return this.event.composedPath()[0];
      }
      /**
       * Returns the local (re-targeted) target for this event.
       *
       * @return {!EventTarget} The local (re-targeted) target for this event.
       */

    }, {
      key: "localTarget",
      get: function get() {
        return this.event.target;
      }
      /**
       * Returns the `composedPath` for this event.
       * @return {!Array<!EventTarget>} The nodes this event propagated through
       */

    }, {
      key: "path",
      get: function get() {
        return this.event.composedPath();
      }
    }]);
    return EventApi;
  }();
  /**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */


  DomApi.prototype.cloneNode;
  /**
   * @function
   * @param {!Node} node
   * @return {!Node}
   */

  DomApi.prototype.appendChild;
  /**
   * @function
   * @param {!Node} newChild
   * @param {Node} refChild
   * @return {!Node}
   */

  DomApi.prototype.insertBefore;
  /**
   * @function
   * @param {!Node} node
   * @return {!Node}
   */

  DomApi.prototype.removeChild;
  /**
   * @function
   * @param {!Node} oldChild
   * @param {!Node} newChild
   * @return {!Node}
   */

  DomApi.prototype.replaceChild;
  /**
   * @function
   * @param {string} name
   * @param {string} value
   * @return {void}
   */

  DomApi.prototype.setAttribute;
  /**
   * @function
   * @param {string} name
   * @return {void}
   */

  DomApi.prototype.removeAttribute;
  /**
   * @function
   * @param {string} selector
   * @return {?Element}
   */

  DomApi.prototype.querySelector;
  /**
   * @function
   * @param {string} selector
   * @return {!NodeList<!Element>}
   */

  DomApi.prototype.querySelectorAll;
  /**
   * Legacy DOM and Event manipulation API wrapper factory used to abstract
   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
   * older browsers.
   *
   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
   * in the majority of cases simply facades directly to the standard native
   * API.
   *
   * @summary Legacy DOM and Event manipulation API wrapper factory used to
   * abstract differences between native Shadow DOM and "Shady DOM."
   * @param {(Node|Event)=} obj Node or event to operate on
   * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
   */

  var dom = function dom(obj) {
    obj = obj || document;

    if (!obj.__domApi) {
      var helper;

      if (babelHelpers.instanceof(obj, Event)) {
        helper = new EventApi(obj);
      } else {
        helper = new DomApi(obj);
      }

      obj.__domApi = helper;
    }

    return obj.__domApi;
  };
  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `Polymer.enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * This method facades to `Polymer.flush`.
   *
   */


  _exports.dom = dom;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _templatize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Templatizer = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var TemplateInstanceBase = _templatize.TemplateInstanceBase; // eslint-disable-line

  /**
   * @typedef {{
   *   _templatizerTemplate: HTMLTemplateElement,
   *   _parentModel: boolean,
   *   _instanceProps: Object,
   *   _forwardHostPropV2: Function,
   *   _notifyInstancePropV2: Function,
   *   ctor: TemplateInstanceBase
   * }}
   */

  var TemplatizerUser; // eslint-disable-line

  /**
   * The `Templatizer` behavior adds methods to generate instances of
   * templates that are each managed by an anonymous `PropertyEffects`
   * instance where data-bindings in the stamped template content are bound to
   * accessors on itself.
   *
   * This behavior is provided in Polymer 2.x-3.x as a hybrid-element convenience
   * only.  For non-hybrid usage, the `Templatize` library
   * should be used instead.
   *
   * Example:
   *
   *     import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     this.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = this.stamp({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. light DOM
   *     dom(this).appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * Users of `Templatizer` may need to implement the following abstract
   * API's to determine how properties and paths from the host should be
   * forwarded into to instances:
   *
   *     _forwardHostPropV2: function(prop, value)
   *
   * Likewise, users may implement these additional abstract API's to determine
   * how instance-specific properties that change on the instance should be
   * forwarded out to the host, if necessary.
   *
   *     _notifyInstancePropV2: function(inst, prop, value)
   *
   * In order to determine which properties are instance-specific and require
   * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
   * object containing keys for each instance prop, for example:
   *
   *     _instanceProps: {
   *       item: true,
   *       index: true
   *     }
   *
   * Any properties used in the template that are not defined in _instanceProp
   * will be forwarded out to the Templatize `owner` automatically.
   *
   * Users may also implement the following abstract function to show or
   * hide any DOM generated using `stamp`:
   *
   *     _showHideChildren: function(shouldHide)
   *
   * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
   * as the implementations will need to differ from the callbacks required
   * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
   * between versions 1.x and 2.x.
   *
   * @polymerBehavior
   */

  var Templatizer = {
    /**
     * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
     * for the provided template.  This method should be called once per
     * template to prepare an element for stamping the template, followed
     * by `stamp` to create new instances of the template.
     *
     * @param {!HTMLTemplateElement} template Template to prepare
     * @param {boolean=} mutableData When `true`, the generated class will skip
     *   strict dirty-checking for objects and arrays (always consider them to
     *   be "dirty"). Defaults to false.
     * @return {void}
     * @this {TemplatizerUser}
     */
    templatize: function templatize(template, mutableData) {
      this._templatizerTemplate = template;
      this.ctor = (0, _templatize.templatize)(template, this, {
        mutableData: Boolean(mutableData),
        parentModel: this._parentModel,
        instanceProps: this._instanceProps,
        forwardHostProp: this._forwardHostPropV2,
        notifyInstanceProp: this._notifyInstancePropV2
      });
    },

    /**
     * Creates an instance of the template prepared by `templatize`.  The object
     * returned is an instance of the anonymous class generated by `templatize`
     * whose `root` property is a document fragment containing newly cloned
     * template content, and which has property accessors corresponding to
     * properties referenced in template bindings.
     *
     * @param {Object=} model Object containing initial property values to
     *   populate into the template bindings.
     * @return {TemplateInstanceBase} Returns the created instance of
     * the template prepared by `templatize`.
     * @this {TemplatizerUser}
     */
    stamp: function stamp(model) {
      return new this.ctor(model);
    },

    /**
     * Returns the template "model" (`TemplateInstance`) associated with
     * a given element, which serves as the binding scope for the template
     * instance the element is contained in.  A template model should be used
     * to manipulate data associated with this template instance.
     *
     * @param {HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     * @this {TemplatizerUser}
     */
    modelForElement: function modelForElement(el) {
      return (0, _templatize.modelForElement)(this._templatizerTemplate, el);
    }
  };
  _exports.Templatizer = Templatizer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/dir-mixin.js":
/*!***************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/dir-mixin.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./property-accessors.js */ "./node_modules/@polymer/polymer/lib/mixins/property-accessors.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _propertyAccessors, _mixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DirMixin = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var HOST_DIR = /:host\(:dir\((ltr|rtl)\)\)/g;
  var HOST_DIR_REPLACMENT = ':host([dir="$1"])';
  var EL_DIR = /([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g;
  var EL_DIR_REPLACMENT = ':host([dir="$2"]) $1';
  /**
   * @type {!Array<!Polymer_DirMixin>}
   */

  var DIR_INSTANCES = [];
  /** @type {MutationObserver} */

  var observer = null;
  var DOCUMENT_DIR = '';

  function getRTL() {
    DOCUMENT_DIR = document.documentElement.getAttribute('dir');
  }
  /**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */


  function setRTL(instance) {
    if (!instance.__autoDirOptOut) {
      var el =
      /** @type {!HTMLElement} */
      instance;
      el.setAttribute('dir', DOCUMENT_DIR);
    }
  }

  function updateDirection() {
    getRTL();
    DOCUMENT_DIR = document.documentElement.getAttribute('dir');

    for (var i = 0; i < DIR_INSTANCES.length; i++) {
      setRTL(DIR_INSTANCES[i]);
    }
  }

  function takeRecords() {
    if (observer && observer.takeRecords().length) {
      updateDirection();
    }
  }
  /**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   */


  var DirMixin = (0, _mixin.dedupingMixin)(function (base) {
    if (!observer) {
      getRTL();
      observer = new MutationObserver(updateDirection);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir']
      });
    }
    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     */


    var elementBase = (0, _propertyAccessors.PropertyAccessors)(base);
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_DirMixin}
     */

    var Dir =
    /*#__PURE__*/
    function (_elementBase) {
      babelHelpers.inherits(Dir, _elementBase);
      babelHelpers.createClass(Dir, null, [{
        key: "_processStyleText",

        /**
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        value: function _processStyleText(cssText, baseURI) {
          cssText = babelHelpers.get(Dir.__proto__ || Object.getPrototypeOf(Dir), "_processStyleText", this).call(this, cssText, baseURI);
          cssText = this._replaceDirInCssText(cssText);
          return cssText;
        }
        /**
         * Replace `:dir` in the given CSS text
         *
         * @param {string} text CSS text to replace DIR
         * @return {string} Modified CSS
         */

      }, {
        key: "_replaceDirInCssText",
        value: function _replaceDirInCssText(text) {
          var replacedText = text;
          replacedText = replacedText.replace(HOST_DIR, HOST_DIR_REPLACMENT);
          replacedText = replacedText.replace(EL_DIR, EL_DIR_REPLACMENT);

          if (text !== replacedText) {
            this.__activateDir = true;
          }

          return replacedText;
        }
      }]);

      function Dir() {
        var _this;

        babelHelpers.classCallCheck(this, Dir);
        _this = babelHelpers.possibleConstructorReturn(this, (Dir.__proto__ || Object.getPrototypeOf(Dir)).call(this));
        /** @type {boolean} */

        _this.__autoDirOptOut = false;
        return _this;
      }
      /**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */


      babelHelpers.createClass(Dir, [{
        key: "ready",
        value: function ready() {
          babelHelpers.get(Dir.prototype.__proto__ || Object.getPrototypeOf(Dir.prototype), "ready", this).call(this);
          this.__autoDirOptOut =
          /** @type {!HTMLElement} */
          this.hasAttribute('dir');
        }
        /**
         * @suppress {missingProperties} If it exists on elementBase, it can be super'd
         * @return {void}
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          if (elementBase.prototype.connectedCallback) {
            babelHelpers.get(Dir.prototype.__proto__ || Object.getPrototypeOf(Dir.prototype), "connectedCallback", this).call(this);
          }

          if (this.constructor.__activateDir) {
            takeRecords();
            DIR_INSTANCES.push(this);
            setRTL(this);
          }
        }
        /**
         * @suppress {missingProperties} If it exists on elementBase, it can be super'd
         * @return {void}
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (elementBase.prototype.disconnectedCallback) {
            babelHelpers.get(Dir.prototype.__proto__ || Object.getPrototypeOf(Dir.prototype), "disconnectedCallback", this).call(this);
          }

          if (this.constructor.__activateDir) {
            var idx = DIR_INSTANCES.indexOf(this);

            if (idx > -1) {
              DIR_INSTANCES.splice(idx, 1);
            }
          }
        }
      }]);
      return Dir;
    }(elementBase);

    Dir.__activateDir = false;
    return Dir;
  });
  _exports.DirMixin = DirMixin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/element-mixin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/style-gather.js */ "./node_modules/@polymer/polymer/lib/utils/style-gather.js"), __webpack_require__(/*! ../utils/resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js"), __webpack_require__(/*! ../elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js"), __webpack_require__(/*! ./property-effects.js */ "./node_modules/@polymer/polymer/lib/mixins/property-effects.js"), __webpack_require__(/*! ./properties-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _settings, _mixin, _styleGather, _resolveUrl, _domModule, _propertyEffects, _propertiesMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  _exports.dumpRegistrations = dumpRegistrations;
  _exports.updateStyles = _exports.registrations = _exports.instanceCount = _exports.ElementMixin = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Element class mixin that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * Subclassers may provide the following static getters to return metadata
   * used to configure Polymer's features for the class:
   *
   * - `static get is()`: When the template is provided via a `dom-module`,
   *   users should return the `dom-module` id from a static `is` getter.  If
   *   no template is needed or the template is provided directly via the
   *   `template` getter, there is no need to define `is` for the element.
   *
   * - `static get template()`: Users may provide the template directly (as
   *   opposed to via `dom-module`) by implementing a static `template` getter.
   *   The getter may return an `HTMLTemplateElement` or a string, which will
   *   automatically be parsed into a template.
   *
   * - `static get properties()`: Should return an object describing
   *   property-related metadata used by Polymer features (key: property name
   *   value: object containing property metadata). Valid keys in per-property
   *   metadata include:
   *   - `type` (String|Number|Object|Array|...): Used by
   *     `attributeChangedCallback` to determine how string-based attributes
   *     are deserialized to JavaScript property values.
   *   - `notify` (boolean): Causes a change in the property to fire a
   *     non-bubbling event called `<property>-changed`. Elements that have
   *     enabled two-way binding to the property use this event to observe changes.
   *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *     To set a read-only property, use the private setter method
   *     `_setProperty(property, value)`.
   *   - `observer` (string): Observer method name that will be called when
   *     the property changes. The arguments of the method are
   *     `(value, previousValue)`.
   *   - `computed` (string): String describing method and dependent properties
   *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *     Computed properties are read-only by default and can only be changed
   *     via the return value of the computing method.
   *
   * - `static get observers()`: Array of strings describing multi-property
   *   observer methods and their dependent properties (e.g.
   *   `'observeABC(a, b, c)'`).
   *
   * The base class provides default implementations for the following standard
   * custom element lifecycle callbacks; users may override these, but should
   * call the super method to ensure
   * - `constructor`: Run when the element is created or upgraded
   * - `connectedCallback`: Run each time the element is connected to the
   *   document
   * - `disconnectedCallback`: Run each time the element is disconnected from
   *   the document
   * - `attributeChangedCallback`: Run each time an attribute in
   *   `observedAttributes` is set or removed (note: this element's default
   *   `observedAttributes` implementation will automatically return an array
   *   of dash-cased attributes based on `properties`)
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyEffects
   * @appliesMixin PropertiesMixin
   * @property rootPath {string} Set to the value of `rootPath`,
   *   which defaults to the main document path
   * @property importPath {string} Set to the value of the class's static
   *   `importPath` property, which defaults to the path of this element's
   *   `dom-module` (when `is` is used), but can be overridden for other
   *   import strategies.
   * @summary Element class mixin that provides the core API for Polymer's
   * meta-programming features.
   */
  var ElementMixin = (0, _mixin.dedupingMixin)(function (base) {
    /**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyEffects}
     * @implements {Polymer_PropertiesMixin}
     */
    var polymerElementBase = (0, _propertiesMixin.PropertiesMixin)((0, _propertyEffects.PropertyEffects)(base));
    /**
     * Returns a list of properties with default values.
     * This list is created as an optimization since it is a subset of
     * the list returned from `_properties`.
     * This list is used in `_initializeProperties` to set property defaults.
     *
     * @param {PolymerElementConstructor} constructor Element class
     * @return {PolymerElementProperties} Flattened properties for this class
     *   that have default values
     * @private
     */

    function propertyDefaults(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__propertyDefaults', constructor))) {
        constructor.__propertyDefaults = null;
        var props = constructor._properties;

        for (var p in props) {
          var info = props[p];

          if ('value' in info) {
            constructor.__propertyDefaults = constructor.__propertyDefaults || {};
            constructor.__propertyDefaults[p] = info;
          }
        }
      }

      return constructor.__propertyDefaults;
    }
    /**
     * Returns a memoized version of the the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */


    function ownObservers(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownObservers', constructor))) {
        constructor.__ownObservers = constructor.hasOwnProperty(JSCompiler_renameProperty('observers', constructor)) ?
        /** @type {PolymerElementConstructor} */
        constructor.observers : null;
      }

      return constructor.__ownObservers;
    }
    /**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should may contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * also automatically is set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */


    function createPropertyFromConfig(proto, name, info, allProps) {
      // computed forces readOnly...
      if (info.computed) {
        info.readOnly = true;
      } // Note, since all computed properties are readOnly, this prevents
      // adding additional computed property effects (which leads to a confusing
      // setup where multiple triggers for setting a property)
      // While we do have `hasComputedEffect` this is set on the property's
      // dependencies rather than itself.


      if (info.computed && !proto._hasReadOnlyEffect(name)) {
        proto._createComputedProperty(name, info.computed, allProps);
      }

      if (info.readOnly && !proto._hasReadOnlyEffect(name)) {
        proto._createReadOnlyProperty(name, !info.computed);
      }

      if (info.reflectToAttribute && !proto._hasReflectEffect(name)) {
        proto._createReflectedProperty(name);
      }

      if (info.notify && !proto._hasNotifyEffect(name)) {
        proto._createNotifyingProperty(name);
      } // always add observer


      if (info.observer) {
        proto._createPropertyObserver(name, info.observer, allProps[info.observer]);
      } // always create the mapping from attribute back to property for deserialization.


      proto._addPropertyToAttributeMap(name);
    }
    /**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */


    function processElementStyles(klass, template, is, baseURI) {
      var templateStyles = template.content.querySelectorAll('style');
      var stylesWithImports = (0, _styleGather.stylesFromTemplate)(template); // insert styles from <link rel="import" type="css"> at the top of the template

      var linkedStyles = (0, _styleGather.stylesFromModuleImports)(is);
      var firstTemplateChild = template.content.firstElementChild;

      for (var idx = 0; idx < linkedStyles.length; idx++) {
        var s = linkedStyles[idx];
        s.textContent = klass._processStyleText(s.textContent, baseURI);
        template.content.insertBefore(s, firstTemplateChild);
      } // keep track of the last "concrete" style in the template we have encountered


      var templateStyleIndex = 0; // ensure all gathered styles are actually in this template.

      for (var i = 0; i < stylesWithImports.length; i++) {
        var _s = stylesWithImports[i];
        var templateStyle = templateStyles[templateStyleIndex]; // if the style is not in this template, it's been "included" and
        // we put a clone of it in the template before the style that included it

        if (templateStyle !== _s) {
          _s = _s.cloneNode(true);
          templateStyle.parentNode.insertBefore(_s, templateStyle);
        } else {
          templateStyleIndex++;
        }

        _s.textContent = klass._processStyleText(_s.textContent, baseURI);
      }

      if (window.ShadyCSS) {
        window.ShadyCSS.prepareTemplate(template, is);
      }
    }
    /**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */


    var PolymerElement =
    /*#__PURE__*/
    function (_polymerElementBase) {
      babelHelpers.inherits(PolymerElement, _polymerElementBase);
      babelHelpers.createClass(PolymerElement, null, [{
        key: "_finalizeClass",

        /**
         * Override of PropertiesMixin _finalizeClass to create observers and
         * find the template.
         * @return {void}
         * @protected
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        value: function _finalizeClass() {
          babelHelpers.get(PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement), "_finalizeClass", this).call(this);

          if (this.hasOwnProperty(JSCompiler_renameProperty('is', this)) && this.is) {
            register(this.prototype);
          }

          var observers = ownObservers(this);

          if (observers) {
            this.createObservers(observers, this._properties);
          } // note: create "working" template that is finalized at instance time


          var template =
          /** @type {PolymerElementConstructor} */
          this.template;

          if (template) {
            if (typeof template === 'string') {
              console.error('template getter must return HTMLTemplateElement');
              template = null;
            } else {
              template = template.cloneNode(true);
            }
          }

          this.prototype._template = template;
        }
        /**
         * Override of PropertiesChanged createProperties to create accessors
         * and property effects for all of the properties.
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: "createProperties",
        value: function createProperties(props) {
          for (var p in props) {
            createPropertyFromConfig(this.prototype, p, props[p], props);
          }
        }
        /**
         * Creates observers for the given `observers` array.
         * Leverages `PropertyEffects` to create observers.
         * @param {Object} observers Array of observer descriptors for
         *   this class
         * @param {Object} dynamicFns Object containing keys for any properties
         *   that are functions and should trigger the effect when the function
         *   reference is changed
         * @return {void}
         * @protected
         */

      }, {
        key: "createObservers",
        value: function createObservers(observers, dynamicFns) {
          var proto = this.prototype;

          for (var i = 0; i < observers.length; i++) {
            proto._createMethodObserver(observers[i], dynamicFns);
          }
        }
        /**
         * Returns the template that will be stamped into this element's shadow root.
         *
         * If a `static get is()` getter is defined, the default implementation
         * will return the first `<template>` in a `dom-module` whose `id`
         * matches this element's `is`.
         *
         * Users may override this getter to return an arbitrary template
         * (in which case the `is` getter is unnecessary). The template returned
         * may be either an `HTMLTemplateElement` or a string that will be
         * automatically parsed into a template.
         *
         * Note that when subclassing, if the super class overrode the default
         * implementation and the subclass would like to provide an alternate
         * template via a `dom-module`, it should override this getter and
         * return `DomModule.import(this.is, 'template')`.
         *
         * If a subclass would like to modify the super class template, it should
         * clone it rather than modify it in place.  If the getter does expensive
         * work such as cloning/modifying a template, it should memoize the
         * template for maximum performance:
         *
         *   let memoizedTemplate;
         *   class MySubClass extends MySuperClass {
         *     static get template() {
         *       if (!memoizedTemplate) {
         *         memoizedTemplate = super.template.cloneNode(true);
         *         let subContent = document.createElement('div');
         *         subContent.textContent = 'This came from MySubClass';
         *         memoizedTemplate.content.appendChild(subContent);
         *       }
         *       return memoizedTemplate;
         *     }
         *   }
         *
         * @return {HTMLTemplateElement|string} Template to be stamped
         */

      }, {
        key: "template",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_template', this))) {
            this._template = _domModule.DomModule && _domModule.DomModule.import(
            /** @type {PolymerElementConstructor}*/
            this.is, 'template') || // note: implemented so a subclass can retrieve the super
            // template; call the super impl this way so that `this` points
            // to the superclass.
            Object.getPrototypeOf(
            /** @type {PolymerElementConstructor}*/
            this.prototype).constructor.template;
          }

          return this._template;
        }
        /**
         * Path matching the url from which the element was imported.
         *
         * This path is used to resolve url's in template style cssText.
         * The `importPath` property is also set on element instances and can be
         * used to create bindings relative to the import path.
         *
         * For elements defined in ES modules, users should implement
         * `static get importMeta() { return import.meta; }`, and the default
         * implementation of `importPath` will  return `import.meta.url`'s path.
         * For elements defined in HTML imports, this getter will return the path
         * to the document containing a `dom-module` element matching this
         * element's static `is` property.
         *
         * Note, this path should contain a trailing `/`.
         *
         * @return {string} The import path for this element class
         * @suppress {missingProperties}
         */

      }, {
        key: "importPath",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
            var meta = this.importMeta;

            if (meta) {
              this._importPath = (0, _resolveUrl.pathFromUrl)(meta.url);
            } else {
              var module = _domModule.DomModule && _domModule.DomModule.import(
              /** @type {PolymerElementConstructor} */
              this.is);

              this._importPath = module && module.assetpath || Object.getPrototypeOf(
              /** @type {PolymerElementConstructor}*/
              this.prototype).constructor.importPath;
            }
          }

          return this._importPath;
        }
      }]);

      function PolymerElement() {
        var _this;

        babelHelpers.classCallCheck(this, PolymerElement);
        _this = babelHelpers.possibleConstructorReturn(this, (PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement)).call(this));
        /** @type {HTMLTemplateElement} */

        _this._template;
        /** @type {string} */

        _this._importPath;
        /** @type {string} */

        _this.rootPath;
        /** @type {string} */

        _this.importPath;
        /** @type {StampedTemplate | HTMLElement | ShadowRoot} */

        _this.root;
        /** @type {!Object<string, !Element>} */

        _this.$;
        return _this;
      }
      /**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */


      babelHelpers.createClass(PolymerElement, [{
        key: "_initializeProperties",
        value: function _initializeProperties() {
          _exports.instanceCount = instanceCount = instanceCount + 1;
          this.constructor.finalize(); // note: finalize template when we have access to `localName` to
          // avoid dependence on `is` for polyfilling styling.

          this.constructor._finalizeTemplate(
          /** @type {!HTMLElement} */
          this.localName);

          babelHelpers.get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), "_initializeProperties", this).call(this); // set path defaults

          this.rootPath = _settings.rootPath;
          this.importPath = this.constructor.importPath; // apply property defaults...

          var p$ = propertyDefaults(this.constructor);

          if (!p$) {
            return;
          }

          for (var p in p$) {
            var info = p$[p]; // Don't set default value if there is already an own property, which
            // happens when a `properties` property with default but no effects had
            // a property set (e.g. bound) by its host before upgrade

            if (!this.hasOwnProperty(p)) {
              var value = typeof info.value == 'function' ? info.value.call(this) : info.value; // Set via `_setProperty` if there is an accessor, to enable
              // initializing readOnly property defaults

              if (this._hasAccessor(p)) {
                this._setPendingProperty(p, value, true);
              } else {
                this[p] = value;
              }
            }
          }
        }
        /**
         * Gather style text for a style element in the template.
         *
         * @param {string} cssText Text containing styling to process
         * @param {string} baseURI Base URI to rebase CSS paths against
         * @return {string} The processed CSS text
         * @protected
         */

      }, {
        key: "connectedCallback",

        /**
         * Provides a default implementation of the standard Custom Elements
         * `connectedCallback`.
         *
         * The default implementation enables the property effects system and
         * flushes any pending properties, and updates shimmed CSS properties
         * when using the ShadyCSS scoping/custom properties polyfill.
         *
         * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
         * @return {void}
         */
        value: function connectedCallback() {
          if (window.ShadyCSS && this._template) {
            window.ShadyCSS.styleElement(
            /** @type {!HTMLElement} */
            this);
          }

          babelHelpers.get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), "connectedCallback", this).call(this);
        }
        /**
         * Stamps the element template.
         *
         * @return {void}
         * @override
         */

      }, {
        key: "ready",
        value: function ready() {
          if (this._template) {
            this.root = this._stampTemplate(this._template);
            this.$ = this.root.$;
          }

          babelHelpers.get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), "ready", this).call(this);
        }
        /**
         * Implements `PropertyEffects`'s `_readyClients` call. Attaches
         * element dom by calling `_attachDom` with the dom stamped from the
         * element's template via `_stampTemplate`. Note that this allows
         * client dom to be attached to the element prior to any observers
         * running.
         *
         * @return {void}
         * @override
         */

      }, {
        key: "_readyClients",
        value: function _readyClients() {
          if (this._template) {
            this.root = this._attachDom(
            /** @type {StampedTemplate} */
            this.root);
          } // The super._readyClients here sets the clients initialized flag.
          // We must wait to do this until after client dom is created/attached
          // so that this flag can be checked to prevent notifications fired
          // during this process from being handled before clients are ready.


          babelHelpers.get(PolymerElement.prototype.__proto__ || Object.getPrototypeOf(PolymerElement.prototype), "_readyClients", this).call(this);
        }
        /**
         * Attaches an element's stamped dom to itself. By default,
         * this method creates a `shadowRoot` and adds the dom to it.
         * However, this method may be overridden to allow an element
         * to put its dom in another location.
         *
         * @throws {Error}
         * @suppress {missingReturn}
         * @param {StampedTemplate} dom to attach to the element.
         * @return {ShadowRoot} node to which the dom has been attached.
         */

      }, {
        key: "_attachDom",
        value: function _attachDom(dom) {
          if (this.attachShadow) {
            if (dom) {
              if (!this.shadowRoot) {
                this.attachShadow({
                  mode: 'open'
                });
              }

              this.shadowRoot.appendChild(dom);
              return this.shadowRoot;
            }

            return null;
          } else {
            throw new Error('ShadowDOM not available. ' + // TODO(sorvell): move to compile-time conditional when supported
            'PolymerElement can create dom as children instead of in ' + 'ShadowDOM by setting `this.root = this;\` before \`ready\`.');
          }
        }
        /**
         * When using the ShadyCSS scoping and custom property shim, causes all
         * shimmed styles in this element (and its subtree) to be updated
         * based on current custom property values.
         *
         * The optional parameter overrides inline custom property styles with an
         * object of properties where the keys are CSS properties, and the values
         * are strings.
         *
         * Example: `this.updateStyles({'--color': 'blue'})`
         *
         * These properties are retained unless a value of `null` is set.
         *
         * Note: This function does not support updating CSS mixins.
         * You can not dynamically change the value of an `@apply`.
         *
         * @param {Object=} properties Bag of custom property key/values to
         *   apply to this element.
         * @return {void}
         * @suppress {invalidCasts}
         */

      }, {
        key: "updateStyles",
        value: function updateStyles(properties) {
          if (window.ShadyCSS) {
            window.ShadyCSS.styleSubtree(
            /** @type {!HTMLElement} */
            this, properties);
          }
        }
        /**
         * Rewrites a given URL relative to a base URL. The base URL defaults to
         * the original location of the document containing the `dom-module` for
         * this element. This method will return the same URL before and after
         * bundling.
         *
         * Note that this function performs no resolution for URLs that start
         * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
         * URL resolution, use `window.URL`.
         *
         * @param {string} url URL to resolve.
         * @param {string=} base Optional base URL to resolve against, defaults
         * to the element's `importPath`
         * @return {string} Rewritten URL relative to base
         */

      }, {
        key: "resolveUrl",
        value: function resolveUrl(url, base) {
          if (!base && this.importPath) {
            base = (0, _resolveUrl.resolveUrl)(this.importPath);
          }

          return (0, _resolveUrl.resolveUrl)(url, base);
        }
        /**
         * Overrides `PropertyAccessors` to add map of dynamic functions on
         * template info, for consumption by `PropertyEffects` template binding
         * code. This map determines which method templates should have accessors
         * created for them.
         *
         * @override
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }], [{
        key: "_processStyleText",
        value: function _processStyleText(cssText, baseURI) {
          return (0, _resolveUrl.resolveCss)(cssText, baseURI);
        }
        /**
        * Configures an element `proto` to function with a given `template`.
        * The element name `is` and extends `ext` must be specified for ShadyCSS
        * style scoping.
        *
        * @param {string} is Tag name (or type extension name) for this element
        * @return {void}
        * @protected
        */

      }, {
        key: "_finalizeTemplate",
        value: function _finalizeTemplate(is) {
          /** @const {HTMLTemplateElement} */
          var template = this.prototype._template;

          if (template && !template.__polymerFinalized) {
            template.__polymerFinalized = true;
            var importPath = this.importPath;
            var baseURI = importPath ? (0, _resolveUrl.resolveUrl)(importPath) : ''; // e.g. support `include="module-name"`, and ShadyCSS

            processElementStyles(this, template, is, baseURI);

            this.prototype._bindTemplate(template);
          }
        }
      }, {
        key: "_parseTemplateContent",
        value: function _parseTemplateContent(template, templateInfo, nodeInfo) {
          templateInfo.dynamicFns = templateInfo.dynamicFns || this._properties;
          return babelHelpers.get(PolymerElement.__proto__ || Object.getPrototypeOf(PolymerElement), "_parseTemplateContent", this).call(this, template, templateInfo, nodeInfo);
        }
      }]);
      return PolymerElement;
    }(polymerElementBase);

    return PolymerElement;
  });
  /**
   * Provides basic tracking of element definitions (registrations) and
   * instance counts.
   *
   * @summary Provides basic tracking of element definitions (registrations) and
   * instance counts.
   */

  _exports.ElementMixin = ElementMixin;
  "TODO(modulizer): A namespace named Polymer.telemetry was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  /**
   * Total number of Polymer element instances created.
   * @type {number}
   */

  var instanceCount = 0;
  /**
   * Array of Polymer element classes that have been finalized.
   * @type {Array<PolymerElement>}
   */

  _exports.instanceCount = instanceCount;
  var registrations = [];
  /**
   * @param {!PolymerElementConstructor} prototype Element prototype to log
   * @this {this}
   * @private
   */

  _exports.registrations = registrations;

  function _regLog(prototype) {
    console.log('[' + prototype.is + ']: registered');
  }
  /**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */


  function register(prototype) {
    registrations.push(prototype);
    undefined && _regLog(prototype);
  }
  /**
   * Logs all elements registered with an `is` to the console.
   * @public
   * @this {this}
   */


  function dumpRegistrations() {
    registrations.forEach(_regLog);
  }
  /**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   * @return {void}
   */


  var updateStyles = function updateStyles(props) {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleDocument(props);
    }
  };

  _exports.updateStyles = updateStyles;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin, gestures$0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.GestureEventListeners = void 0;
  gestures$0 = babelHelpers.interopRequireWildcard(gestures$0);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var gestures = gestures$0;
  /**
   * Element class mixin that provides API for adding Polymer's cross-platform
   * gesture events to nodes.
   *
   * The API is designed to be compatible with override points implemented
   * in `TemplateStamp` such that declarative event listeners in
   * templates will support gesture events when this mixin is applied along with
   * `TemplateStamp`.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides API for adding Polymer's
   *   cross-platform
   * gesture events to nodes
   */

  var GestureEventListeners = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_GestureEventListeners}
     */
    var GestureEventListeners =
    /*#__PURE__*/
    function (_superClass) {
      babelHelpers.inherits(GestureEventListeners, _superClass);

      function GestureEventListeners() {
        babelHelpers.classCallCheck(this, GestureEventListeners);
        return babelHelpers.possibleConstructorReturn(this, (GestureEventListeners.__proto__ || Object.getPrototypeOf(GestureEventListeners)).apply(this, arguments));
      }

      babelHelpers.createClass(GestureEventListeners, [{
        key: "_addEventListenerToNode",

        /**
         * Add the event listener to the node if it is a gestures event.
         *
         * @param {!Node} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         */
        value: function _addEventListenerToNode(node, eventName, handler) {
          if (!gestures.addListener(node, eventName, handler)) {
            babelHelpers.get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), "_addEventListenerToNode", this).call(this, node, eventName, handler);
          }
        }
        /**
         * Remove the event listener to the node if it is a gestures event.
         *
         * @param {!Node} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         */

      }, {
        key: "_removeEventListenerFromNode",
        value: function _removeEventListenerFromNode(node, eventName, handler) {
          if (!gestures.removeListener(node, eventName, handler)) {
            babelHelpers.get(GestureEventListeners.prototype.__proto__ || Object.getPrototypeOf(GestureEventListeners.prototype), "_removeEventListenerFromNode", this).call(this, node, eventName, handler);
          }
        }
      }]);
      return GestureEventListeners;
    }(superClass);

    return GestureEventListeners;
  });
  _exports.GestureEventListeners = GestureEventListeners;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js":
/*!******************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/mutable-data.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _mixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.OptionalMutableData = _exports.MutableData = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // Common implementation for mixin & behavior
  function mutablePropertyChange(inst, property, value, old, mutableData) {
    var isObject;

    if (mutableData) {
      isObject = babelHelpers.typeof(value) === 'object' && value !== null; // Pull `old` for Objects from temp cache, but treat `null` as a primitive

      if (isObject) {
        old = inst.__dataTemp[property];
      }
    } // Strict equality check, but return false for NaN===NaN


    var shouldChange = old !== value && (old === old || value === value); // Objects are stored in temporary cache (cleared at end of
    // turn), which is used for dirty-checking

    if (isObject && shouldChange) {
      inst.__dataTemp[property] = value;
    }

    return shouldChange;
  }
  /**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */


  var MutableData = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_MutableData}
     */
    var MutableData =
    /*#__PURE__*/
    function (_superClass) {
      babelHelpers.inherits(MutableData, _superClass);

      function MutableData() {
        babelHelpers.classCallCheck(this, MutableData);
        return babelHelpers.possibleConstructorReturn(this, (MutableData.__proto__ || Object.getPrototypeOf(MutableData)).apply(this, arguments));
      }

      babelHelpers.createClass(MutableData, [{
        key: "_shouldPropertyChange",

        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * This method pulls the value to dirty check against from the `__dataTemp`
         * cache (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, true);
        }
      }]);
      return MutableData;
    }(superClass);

    return MutableData;
  });
  /**
   * Element class mixin to add the optional ability to skip strict
   * dirty-checking for objects and arrays (always consider them to be
   * "dirty") by setting a `mutable-data` attribute on an element instance.
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will allow Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must enable this mixin or apply the
   * `MutableData` mixin.
   *
   * While this mixin adds the ability to forgo Object/Array dirty checking,
   * the `mutableData` flag defaults to false and must be set on the instance.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse by relying on `mutableData: true` as opposed to using
   * strict dirty checking with immutable patterns or Polymer's path notification
   * API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to optionally skip strict dirty-checking
   *   for objects and arrays
   */

  _exports.MutableData = MutableData;
  var OptionalMutableData = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @mixinClass
     * @polymer
     * @implements {Polymer_OptionalMutableData}
     */
    var OptionalMutableData =
    /*#__PURE__*/
    function (_superClass2) {
      babelHelpers.inherits(OptionalMutableData, _superClass2);

      function OptionalMutableData() {
        babelHelpers.classCallCheck(this, OptionalMutableData);
        return babelHelpers.possibleConstructorReturn(this, (OptionalMutableData.__proto__ || Object.getPrototypeOf(OptionalMutableData)).apply(this, arguments));
      }

      babelHelpers.createClass(OptionalMutableData, [{
        key: "_shouldPropertyChange",

        /**
         * Overrides `PropertyEffects` to provide option for skipping
         * strict equality checking for Objects and Arrays.
         *
         * When `this.mutableData` is true on this instance, this method
         * pulls the value to dirty check against from the `__dataTemp` cache
         * (rather than the normal `__data` cache) for Objects.  Since the temp
         * cache is cleared at the end of a turn, this implementation allows
         * side-effects of deep object changes to be processed by re-setting the
         * same object (using the temp cache as an in-turn backstop to prevent
         * cycles due to 2-way notification).
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         * @protected
         */
        value: function _shouldPropertyChange(property, value, old) {
          return mutablePropertyChange(this, property, value, old, this.mutableData);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Instance-level flag for configuring the dirty-checking strategy
             * for this element.  When true, Objects and Arrays will skip dirty
             * checking, otherwise strict equality checking will be used.
             */
            mutableData: Boolean
          };
        }
      }]);
      return OptionalMutableData;
    }(superClass);

    return OptionalMutableData;
  }); // Export for use by legacy behavior

  _exports.OptionalMutableData = OptionalMutableData;
  MutableData._mutablePropertyChange = mutablePropertyChange;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/properties-changed.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin, _async) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PropertiesChanged = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @const {!AsyncInterface} */
  var microtask = _async.microTask;
  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */

  var PropertiesChanged = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    var PropertiesChanged =
    /*#__PURE__*/
    function (_superClass) {
      babelHelpers.inherits(PropertiesChanged, _superClass);
      babelHelpers.createClass(PropertiesChanged, [{
        key: "_createPropertyAccessor",
        //eslint-disable-line no-unused-vars

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @return {void}
         * @protected
         */
        value: function _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);

          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }

          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;

            this._definePropertyAccessor(property, readOnly);
          }
        }
        /**
         * Adds the given `property` to a map matching attribute names
         * to property names, using `attributeNameForProperty`. This map is
         * used when deserializing attribute values to properties.
         *
         * @param {string} property Name of the property
         */

      }, {
        key: "_addPropertyToAttributeMap",
        value: function _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty('__dataAttributes')) {
            this.__dataAttributes = Object.assign({}, this.__dataAttributes);
          }

          if (!this.__dataAttributes[property]) {
            var attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
        }
        /**
         * Defines a property accessor for the given property.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         * @return {void}
         */

      }, {
        key: "_definePropertyAccessor",
        value: function _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */

            /** @this {PropertiesChanged} */
            get: function get() {
              return this._getProperty(property);
            },

            /** @this {PropertiesChanged} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */

          });
        }
      }], [{
        key: "createProperties",

        /**
         * Creates property accessors for the given property names.
         * @param {!Object} props Object whose keys are names of accessors.
         * @return {void}
         * @protected
         */
        value: function createProperties(props) {
          var proto = this.prototype;

          for (var prop in props) {
            // don't stomp an existing accessor
            if (!(prop in proto)) {
              proto._createPropertyAccessor(prop);
            }
          }
        }
        /**
         * Returns an attribute name that corresponds to the given property.
         * The attribute name is the lowercased property name. Override to
         * customize this mapping.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: "attributeNameForProperty",
        value: function attributeNameForProperty(property) {
          return property.toLowerCase();
        }
        /**
         * Override point to provide a type to which to deserialize a value to
         * a given property.
         * @param {string} name Name of property
         *
         * @protected
         */

      }, {
        key: "typeForProperty",
        value: function typeForProperty(name) {}
      }]);

      function PropertiesChanged() {
        var _this;

        babelHelpers.classCallCheck(this, PropertiesChanged);
        _this = babelHelpers.possibleConstructorReturn(this, (PropertiesChanged.__proto__ || Object.getPrototypeOf(PropertiesChanged)).call(this));
        _this.__dataEnabled = false;
        _this.__dataReady = false;
        _this.__dataInvalid = false;
        _this.__data = {};
        _this.__dataPending = null;
        _this.__dataOld = null;
        _this.__dataInstanceProps = null;
        _this.__serializing = false;

        _this._initializeProperties();

        return _this;
      }
      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       */


      babelHelpers.createClass(PropertiesChanged, [{
        key: "ready",
        value: function ready() {
          this.__dataReady = true;

          this._flushProperties();
        }
        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_initializeProperties",
        value: function _initializeProperties() {
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (var p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }
        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         */

      }, {
        key: "_initializeInstanceProperties",
        value: function _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }
        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         * @protected
         */

      }, {
        key: "_setProperty",
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }
        /**
         * Returns the value for the given property.
         * @param {string} property Name of property
         * @return {*} Value for the given property
         * @protected
         */

      }, {
        key: "_getProperty",
        value: function _getProperty(property) {
          return this.__data[property];
        }
        /* eslint-disable no-unused-vars */

        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} ext Not used here; affordance for closure
         * @return {boolean} Returns true if the property changed
         * @protected
         */

      }, {
        key: "_setPendingProperty",
        value: function _setPendingProperty(property, value, ext) {
          var old = this.__data[property];

          var changed = this._shouldPropertyChange(property, value, old);

          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            } // Ensure old is captured from the last turn


            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }

            this.__data[property] = value;
            this.__dataPending[property] = value;
          }

          return changed;
        }
        /* eslint-enable */

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_invalidateProperties",
        value: function _invalidateProperties() {
          var _this2 = this;

          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(function () {
              if (_this2.__dataInvalid) {
                _this2.__dataInvalid = false;

                _this2._flushProperties();
              }
            });
          }
        }
        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_enableProperties",
        value: function _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;

            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);

              this.__dataInstanceProps = null;
            }

            this.ready();
          }
        }
        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_flushProperties",
        value: function _flushProperties() {
          var props = this.__data;
          var changedProps = this.__dataPending;
          var old = this.__dataOld;

          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;

            this._propertiesChanged(props, changedProps, old);
          }
        }
        /**
         * Called in `_flushProperties` to determine if `_propertiesChanged`
         * should be called. The default implementation returns true if
         * properties are pending. Override to customize when
         * `_propertiesChanged` is called.
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {!Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {!Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {boolean} true if changedProps is truthy
         */

      }, {
        key: "_shouldPropertiesChange",
        value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
          // eslint-disable-line no-unused-vars
          return Boolean(changedProps);
        }
        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {!Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {!Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         * @protected
         */

      }, {
        key: "_propertiesChanged",
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars

        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` if a strict equality
         * check fails. The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         */

      }, {
        key: "_shouldPropertyChange",
        value: function _shouldPropertyChange(property, value, old) {
          return (// Strict equality check
            old !== value && ( // This ensures (old==NaN, value==NaN) always returns false
            old === old || value === value)
          );
        }
        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @suppress {missingProperties} Super may or may not implement the callback
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }

          if (babelHelpers.get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), "attributeChangedCallback", this)) {
            babelHelpers.get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), "attributeChangedCallback", this).call(this, name, old, value, namespace);
          }
        }
        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to, defaults to the value
         * returned from `typeForProperty`
         * @return {void}
         */

      }, {
        key: "_attributeToProperty",
        value: function _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            var map = this.__dataAttributes;
            var property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
          }
        }
        /**
         * Serializes a property to its associated attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is an element.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect to.
         * @param {*=} value Property value to refect.
         * @return {void}
         */

      }, {
        key: "_propertyToAttribute",
        value: function _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;

          this._valueToNodeAttribute(
          /** @type {!HTMLElement} */
          this, value, attribute || this.constructor.attributeNameForProperty(property));

          this.__serializing = false;
        }
        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @return {void}
         */

      }, {
        key: "_valueToNodeAttribute",
        value: function _valueToNodeAttribute(node, value, attribute) {
          var str = this._serializeValue(value);

          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }
        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called when setting JS property values to
         * HTML attributes.  Users may override this method to provide
         * serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided
         * property  value.
         */

      }, {
        key: "_serializeValue",
        value: function _serializeValue(value) {
          switch (babelHelpers.typeof(value)) {
            case 'boolean':
              return value ? '' : undefined;

            default:
              return value != null ? value.toString() : undefined;
          }
        }
        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called when reading HTML attribute values to
         * JS properties.  Users may override this method to provide
         * deserialization for custom `type`s. Types for `Boolean`, `String`,
         * and `Number` convert attributes to the expected types.
         *
         * @param {?string} value Value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         */

      }, {
        key: "_deserializeValue",
        value: function _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;

            case Number:
              return Number(value);

            default:
              return value;
          }
        }
      }]);
      return PropertiesChanged;
    }(superClass);

    return PropertiesChanged;
  });
  _exports.PropertiesChanged = PropertiesChanged;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/properties-mixin.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ./properties-changed.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin, _propertiesChanged) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PropertiesMixin = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {Object} props Properties to normalize
   * @return {Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */
  function normalizeProperties(props) {
    var output = {};

    for (var p in props) {
      var o = props[p];
      output[p] = typeof o === 'function' ? {
        type: o
      } : o;
    }

    return output;
  }
  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */


  var PropertiesMixin = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     */
    var base = (0, _propertiesChanged.PropertiesChanged)(superClass);
    /**
     * Returns the super class constructor for the given class, if it is an
     * instance of the PropertiesMixin.
     *
     * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {PropertiesMixinConstructor} Super class constructor
     */

    function superPropertiesClass(constructor) {
      var superCtor = Object.getPrototypeOf(constructor); // Note, the `PropertiesMixin` class below only refers to the class
      // generated by this call to the mixin; the instanceof test only works
      // because the mixin is deduped and guaranteed only to apply once, hence
      // all constructors in a proto chain will see the same `PropertiesMixin`

      return babelHelpers.instanceof(superCtor.prototype, PropertiesMixin) ?
      /** @type {PropertiesMixinConstructor} */
      superCtor : null;
    }
    /**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */


    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
        var props = null;

        if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
          props = normalizeProperties(constructor.properties);
        }

        constructor.__ownProperties = props;
      }

      return constructor.__ownProperties;
    }
    /**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */


    var PropertiesMixin =
    /*#__PURE__*/
    function (_base) {
      babelHelpers.inherits(PropertiesMixin, _base);

      function PropertiesMixin() {
        babelHelpers.classCallCheck(this, PropertiesMixin);
        return babelHelpers.possibleConstructorReturn(this, (PropertiesMixin.__proto__ || Object.getPrototypeOf(PropertiesMixin)).apply(this, arguments));
      }

      babelHelpers.createClass(PropertiesMixin, [{
        key: "_initializeProperties",

        /**
         * Overrides `PropertiesChanged` method and adds a call to
         * `finalize` which lazily configures the element's property accessors.
         * @override
         * @return {void}
         */
        value: function _initializeProperties() {
          this.constructor.finalize();
          babelHelpers.get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), "_initializeProperties", this).call(this);
        }
        /**
         * Called when the element is added to a document.
         * Calls `_enableProperties` to turn on property system from
         * `PropertiesChanged`.
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          if (babelHelpers.get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), "connectedCallback", this)) {
            babelHelpers.get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), "connectedCallback", this).call(this);
          }

          this._enableProperties();
        }
        /**
         * Called when the element is removed from a document
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (babelHelpers.get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), "disconnectedCallback", this)) {
            babelHelpers.get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), "disconnectedCallback", this).call(this);
          }
        }
      }], [{
        key: "finalize",

        /**
         * Finalizes an element definition, including ensuring any super classes
         * are also finalized. This includes ensuring property
         * accessors exist on the element prototype. This method calls
         * `_finalizeClass` to finalize each constructor in the prototype chain.
         * @return {void}
         */
        value: function finalize() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
            var superCtor = superPropertiesClass(
            /** @type {PropertiesMixinConstructor} */
            this);

            if (superCtor) {
              superCtor.finalize();
            }

            this.__finalized = true;

            this._finalizeClass();
          }
        }
        /**
         * Finalize an element class. This includes ensuring property
         * accessors exist on the element prototype. This method is called by
         * `finalize` and finalizes the class constructor.
         *
         * @protected
         */

      }, {
        key: "_finalizeClass",
        value: function _finalizeClass() {
          var props = ownProperties(
          /** @type {PropertiesMixinConstructor} */
          this);

          if (props) {
            this.createProperties(props);
          }
        }
        /**
         * Returns a memoized version of all properties, including those inherited
         * from super classes. Properties not in object format are converted to
         * at least {type}.
         *
         * @return {Object} Object containing properties for this class
         * @protected
         */

      }, {
        key: "typeForProperty",

        /**
         * Overrides `PropertiesChanged` method to return type specified in the
         * static `properties` object for the given property.
         * @param {string} name Name of property
         * @return {*} Type to which to deserialize attribute
         *
         * @protected
         */
        value: function typeForProperty(name) {
          var info = this._properties[name];
          return info && info.type;
        }
      }, {
        key: "observedAttributes",

        /**
         * Implements standard custom elements getter to observes the attributes
         * listed in `properties`.
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        get: function get() {
          var _this = this;

          var props = this._properties;
          return props ? Object.keys(props).map(function (p) {
            return _this.attributeNameForProperty(p);
          }) : [];
        }
      }, {
        key: "_properties",
        get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
            var superCtor = superPropertiesClass(
            /** @type {PropertiesMixinConstructor} */
            this);
            this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties(
            /** @type {PropertiesMixinConstructor} */
            this));
          }

          return this.__properties;
        }
      }]);
      return PropertiesMixin;
    }(base);

    return PropertiesMixin;
  });
  _exports.PropertiesMixin = PropertiesMixin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/property-accessors.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/property-accessors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js"), __webpack_require__(/*! ./properties-changed.js */ "./node_modules/@polymer/polymer/lib/mixins/properties-changed.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin, caseMap$0, _propertiesChanged) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PropertyAccessors = void 0;
  caseMap$0 = babelHelpers.interopRequireWildcard(caseMap$0);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var caseMap = caseMap$0; // Save map of native properties; this forms a blacklist or properties
  // that won't have their values "saved" by `saveAccessorValue`, since
  // reading from an HTMLElement accessor from the context of a prototype throws

  var nativeProperties = {};
  var proto = HTMLElement.prototype;

  while (proto) {
    var props = Object.getOwnPropertyNames(proto);

    for (var i = 0; i < props.length; i++) {
      nativeProperties[props[i]] = true;
    }

    proto = Object.getPrototypeOf(proto);
  }
  /**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */


  function saveAccessorValue(model, property) {
    // Don't read/store value for any native properties since they could throw
    if (!nativeProperties[property]) {
      var value = model[property];

      if (value !== undefined) {
        if (model.__data) {
          // Adding accessor to instance; update the property
          // It is the user's responsibility to call _flushProperties
          model._setPendingProperty(property, value);
        } else {
          // Adding accessor to proto; save proto's value for instance-time use
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }

          model.__dataProto[property] = value;
        }
      }
    }
  }
  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */


  var PropertyAccessors = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    var base = (0, _propertiesChanged.PropertiesChanged)(superClass);
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends {base}
     * @unrestricted
     */

    var PropertyAccessors =
    /*#__PURE__*/
    function (_base) {
      babelHelpers.inherits(PropertyAccessors, _base);

      function PropertyAccessors() {
        babelHelpers.classCallCheck(this, PropertyAccessors);
        return babelHelpers.possibleConstructorReturn(this, (PropertyAccessors.__proto__ || Object.getPrototypeOf(PropertyAccessors)).apply(this, arguments));
      }

      babelHelpers.createClass(PropertyAccessors, [{
        key: "_initializeProperties",

        /**
         * Overrides PropertiesChanged implementation to initialize values for
         * accessors created for values that already existed on the element
         * prototype.
         *
         * @return {void}
         * @protected
         */
        value: function _initializeProperties() {
          if (this.__dataProto) {
            this._initializeProtoProperties(this.__dataProto);

            this.__dataProto = null;
          }

          babelHelpers.get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), "_initializeProperties", this).call(this);
        }
        /**
         * Called at instance time with bag of properties that were overwritten
         * by accessors on the prototype when accessors were created.
         *
         * The default implementation sets these properties back into the
         * setter at instance time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         */

      }, {
        key: "_initializeProtoProperties",
        value: function _initializeProtoProperties(props) {
          for (var p in props) {
            this._setProperty(p, props[p]);
          }
        }
        /**
         * Ensures the element has the given attribute. If it does not,
         * assigns the given value to the attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
         *
         * @param {string} attribute Name of attribute to ensure is set.
         * @param {string} value of the attribute.
         * @return {void}
         */

      }, {
        key: "_ensureAttribute",
        value: function _ensureAttribute(attribute, value) {
          var el =
          /** @type {!HTMLElement} */
          this;

          if (!el.hasAttribute(attribute)) {
            this._valueToNodeAttribute(el, value, attribute);
          }
        }
        /**
         * Overrides PropertiesChanged implemention to serialize objects as JSON.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided property value.
         */

      }, {
        key: "_serializeValue",
        value: function _serializeValue(value) {
          /* eslint-disable no-fallthrough */
          switch (babelHelpers.typeof(value)) {
            case 'object':
              if (babelHelpers.instanceof(value, Date)) {
                return value.toString();
              } else if (value) {
                try {
                  return JSON.stringify(value);
                } catch (x) {
                  return '';
                }
              }

            default:
              return babelHelpers.get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), "_serializeValue", this).call(this, value);
          }
        }
        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called by Polymer when reading HTML attribute values to
         * JS properties.  Users may override this method on Polymer element
         * prototypes to provide deserialization for custom `type`s.  Note,
         * the `type` argument is the value of the `type` field provided in the
         * `properties` configuration object for a given property, and is
         * by convention the constructor for the type to deserialize.
         *
         *
         * @param {?string} value Attribute value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         */

      }, {
        key: "_deserializeValue",
        value: function _deserializeValue(value, type) {
          /**
           * @type {*}
           */
          var outValue;

          switch (type) {
            case Object:
              try {
                outValue = JSON.parse(
                /** @type {string} */
                value);
              } catch (x) {
                // allow non-JSON literals like Strings and Numbers
                outValue = value;
              }

              break;

            case Array:
              try {
                outValue = JSON.parse(
                /** @type {string} */
                value);
              } catch (x) {
                outValue = null;
                console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value));
              }

              break;

            case Date:
              outValue = isNaN(value) ? String(value) : Number(value);
              outValue = new Date(outValue);
              break;

            default:
              outValue = babelHelpers.get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), "_deserializeValue", this).call(this, value, type);
              break;
          }

          return outValue;
        }
        /* eslint-enable no-fallthrough */

        /**
         * Overrides PropertiesChanged implementation to save existing prototype
         * property value so that it can be reset.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         *
         * When calling on a prototype, any overwritten values are saved in
         * `__dataProto`, and it is up to the subclasser to decide how/when
         * to set those properties back into the accessor.  When calling on an
         * instance, the overwritten value is set via `_setPendingProperty`,
         * and the user should call `_invalidateProperties` or `_flushProperties`
         * for the values to take effect.
         * @protected
         * @return {void}
         */

      }, {
        key: "_definePropertyAccessor",
        value: function _definePropertyAccessor(property, readOnly) {
          saveAccessorValue(this, property);
          babelHelpers.get(PropertyAccessors.prototype.__proto__ || Object.getPrototypeOf(PropertyAccessors.prototype), "_definePropertyAccessor", this).call(this, property, readOnly);
        }
        /**
         * Returns true if this library created an accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if an accessor was created
         */

      }, {
        key: "_hasAccessor",
        value: function _hasAccessor(property) {
          return this.__dataHasAccessor && this.__dataHasAccessor[property];
        }
        /**
         * Returns true if the specified property has a pending change.
         *
         * @param {string} prop Property name
         * @return {boolean} True if property has a pending change
         * @protected
         */

      }, {
        key: "_isPropertyPending",
        value: function _isPropertyPending(prop) {
          return Boolean(this.__dataPending && prop in this.__dataPending);
        }
      }], [{
        key: "createPropertiesForAttributes",

        /**
         * Generates property accessors for all attributes in the standard
         * static `observedAttributes` array.
         *
         * Attribute names are mapped to property names using the `dash-case` to
         * `camelCase` convention
         *
         * @return {void}
         */
        value: function createPropertiesForAttributes() {
          var a$ = this.observedAttributes;

          for (var _i = 0; _i < a$.length; _i++) {
            this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[_i]));
          }
        }
        /**
         * Returns an attribute name that corresponds to the given property.
         * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: "attributeNameForProperty",
        value: function attributeNameForProperty(property) {
          return caseMap.camelToDashCase(property);
        }
      }]);
      return PropertyAccessors;
    }(base);

    return PropertyAccessors;
  });
  _exports.PropertyAccessors = PropertyAccessors;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/property-effects.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/property-effects.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ../utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js"), __webpack_require__(/*! ../utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js"), __webpack_require__(/*! ./property-accessors.js */ "./node_modules/@polymer/polymer/lib/mixins/property-accessors.js"), __webpack_require__(/*! ./template-stamp.js */ "./node_modules/@polymer/polymer/lib/mixins/template-stamp.js"), __webpack_require__(/*! ../utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin, _path, caseMap, _propertyAccessors, _templateStamp, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.PropertyEffects = void 0;
  caseMap = babelHelpers.interopRequireWildcard(caseMap);

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /* for notify, reflect */

  /* for annotated effects */

  /** @const {Object} */
  var CaseMap = caseMap; // Monotonically increasing unique ID used for de-duping effects triggered
  // from multiple properties in the same turn

  var dedupeId = 0;
  /**
   * Property effect types; effects are stored on the prototype using these keys
   * @enum {string}
   */

  var TYPES = {
    COMPUTE: '__computeEffects',
    REFLECT: '__reflectEffects',
    NOTIFY: '__notifyEffects',
    PROPAGATE: '__propagateEffects',
    OBSERVE: '__observeEffects',
    READ_ONLY: '__readOnly'
  };
  /** @const {RegExp} */

  var capitalAttributeRegex = /[A-Z]/;
  /**
   * @typedef {{
   * name: (string | undefined),
   * structured: (boolean | undefined),
   * wildcard: (boolean | undefined)
   * }}
   */

  var DataTrigger; //eslint-disable-line no-unused-vars

  /**
   * @typedef {{
   * info: ?,
   * trigger: (!DataTrigger | undefined),
   * fn: (!Function | undefined)
   * }}
   */

  var DataEffect; //eslint-disable-line no-unused-vars

  var PropertyEffectsType; //eslint-disable-line no-unused-vars

  /**
   * Ensures that the model has an own-property map of effects for the given type.
   * The model may be a prototype or an instance.
   *
   * Property effects are stored as arrays of effects by property in a map,
   * by named type on the model. e.g.
   *
   *   __computeEffects: {
   *     foo: [ ... ],
   *     bar: [ ... ]
   *   }
   *
   * If the model does not yet have an effect map for the type, one is created
   * and returned.  If it does, but it is not an own property (i.e. the
   * prototype had effects), the the map is deeply cloned and the copy is
   * set on the model and returned, ready for new effects to be added.
   *
   * @param {Object} model Prototype or instance
   * @param {string} type Property effect type
   * @return {Object} The own-property map of effects for the given type
   * @private
   */

  function ensureOwnEffectMap(model, type) {
    var effects = model[type];

    if (!effects) {
      effects = model[type] = {};
    } else if (!model.hasOwnProperty(type)) {
      effects = model[type] = Object.create(model[type]);

      for (var p in effects) {
        var protoFx = effects[p];
        var instFx = effects[p] = Array(protoFx.length);

        for (var i = 0; i < protoFx.length; i++) {
          instFx[i] = protoFx[i];
        }
      }
    }

    return effects;
  } // -- effects ----------------------------------------------

  /**
   * Runs all effects of a given type for the given set of property changes
   * on an instance.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {Object} props Bag of current property changes
   * @param {Object=} oldProps Bag of previous values for changed properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */


  function runEffects(inst, effects, props, oldProps, hasPaths, extraArgs) {
    if (effects) {
      var ran = false;
      var id = dedupeId++;

      for (var prop in props) {
        if (runEffectsForProperty(inst, effects, id, prop, props, oldProps, hasPaths, extraArgs)) {
          ran = true;
        }
      }

      return ran;
    }

    return false;
  }
  /**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */


  function runEffectsForProperty(inst, effects, dedupeId, prop, props, oldProps, hasPaths, extraArgs) {
    var ran = false;
    var rootProperty = hasPaths ? (0, _path.root)(prop) : prop;
    var fxs = effects[rootProperty];

    if (fxs) {
      for (var i = 0, l = fxs.length, fx; i < l && (fx = fxs[i]); i++) {
        if ((!fx.info || fx.info.lastRun !== dedupeId) && (!hasPaths || pathMatchesTrigger(prop, fx.trigger))) {
          if (fx.info) {
            fx.info.lastRun = dedupeId;
          }

          fx.fn(inst, prop, props, oldProps, fx.info, hasPaths, extraArgs);
          ran = true;
        }
      }
    }

    return ran;
  }
  /**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */


  function pathMatchesTrigger(path, trigger) {
    if (trigger) {
      var triggerPath = trigger.name;
      return triggerPath == path || trigger.structured && (0, _path.isAncestor)(triggerPath, path) || trigger.wildcard && (0, _path.isDescendant)(triggerPath, path);
    } else {
      return true;
    }
  }
  /**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */


  function runObserverEffect(inst, property, props, oldProps, info) {
    var fn = typeof info.method === "string" ? inst[info.method] : info.method;
    var changedProp = info.property;

    if (fn) {
      fn.call(inst, inst.__data[changedProp], oldProps[changedProp]);
    } else if (!info.dynamicFn) {
      console.warn('observer method `' + info.method + '` not defined');
    }
  }
  /**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */


  function runNotifyEffects(inst, notifyProps, props, oldProps, hasPaths) {
    // Notify
    var fxs = inst[TYPES.NOTIFY];
    var notified;
    var id = dedupeId++; // Try normal notify effects; if none, fall back to try path notification

    for (var prop in notifyProps) {
      if (notifyProps[prop]) {
        if (fxs && runEffectsForProperty(inst, fxs, id, prop, props, oldProps, hasPaths)) {
          notified = true;
        } else if (hasPaths && notifyPath(inst, prop, props)) {
          notified = true;
        }
      }
    } // Flush host if we actually notified and host was batching
    // And the host has already initialized clients; this prevents
    // an issue with a host observing data changes before clients are ready.


    var host;

    if (notified && (host = inst.__dataHost) && host._invalidateProperties) {
      host._invalidateProperties();
    }
  }
  /**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */


  function notifyPath(inst, path, props) {
    var rootProperty = (0, _path.root)(path);

    if (rootProperty !== path) {
      var eventName = (0, caseMap.camelToDashCase)(rootProperty) + '-changed';
      dispatchNotifyEvent(inst, eventName, props[path], path);
      return true;
    }

    return false;
  }
  /**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */


  function dispatchNotifyEvent(inst, eventName, value, path) {
    var detail = {
      value: value,
      queueProperty: true
    };

    if (path) {
      detail.path = path;
    }
    /** @type {!HTMLElement} */


    inst.dispatchEvent(new CustomEvent(eventName, {
      detail: detail
    }));
  }
  /**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */


  function runNotifyEffect(inst, property, props, oldProps, info, hasPaths) {
    var rootProperty = hasPaths ? (0, _path.root)(property) : property;
    var path = rootProperty != property ? property : null;
    var value = path ? (0, _path.get)(inst, path) : inst.__data[property];

    if (path && value === undefined) {
      value = props[property]; // specifically for .splices
    }

    dispatchNotifyEvent(inst, info.eventName, value, path);
  }
  /**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */


  function handleNotification(event, inst, fromProp, toPath, negate) {
    var value;
    var detail =
    /** @type {Object} */
    event.detail;
    var fromPath = detail && detail.path;

    if (fromPath) {
      toPath = (0, _path.translate)(fromProp, toPath, fromPath);
      value = detail && detail.value;
    } else {
      value = event.target[fromProp];
    }

    value = negate ? !value : value;

    if (!inst[TYPES.READ_ONLY] || !inst[TYPES.READ_ONLY][toPath]) {
      if (inst._setPendingPropertyOrPath(toPath, value, true, Boolean(fromPath)) && (!detail || !detail.queueProperty)) {
        inst._invalidateProperties();
      }
    }
  }
  /**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */


  function runReflectEffect(inst, property, props, oldProps, info) {
    var value = inst.__data[property];

    if (_settings.sanitizeDOMValue) {
      value = (0, _settings.sanitizeDOMValue)(value, info.attrName, 'attribute',
      /** @type {Node} */
      inst);
    }

    inst._propertyToAttribute(property, info.attrName, value);
  }
  /**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */


  function runComputedEffects(inst, changedProps, oldProps, hasPaths) {
    var computeEffects = inst[TYPES.COMPUTE];

    if (computeEffects) {
      var inputProps = changedProps;

      while (runEffects(inst, computeEffects, inputProps, oldProps, hasPaths)) {
        Object.assign(oldProps, inst.__dataOld);
        Object.assign(changedProps, inst.__dataPending);
        inputProps = inst.__dataPending;
        inst.__dataPending = null;
      }
    }
  }
  /**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */


  function runComputedEffect(inst, property, props, oldProps, info) {
    var result = runMethodEffect(inst, property, props, oldProps, info);
    var computedProp = info.methodInfo;

    if (inst.__dataHasAccessor && inst.__dataHasAccessor[computedProp]) {
      inst._setPendingProperty(computedProp, result, true);
    } else {
      inst[computedProp] = result;
    }
  }
  /**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */


  function computeLinkedPaths(inst, path, value) {
    var links = inst.__dataLinkedPaths;

    if (links) {
      var link;

      for (var a in links) {
        var b = links[a];

        if ((0, _path.isDescendant)(a, path)) {
          link = (0, _path.translate)(a, b, path);

          inst._setPendingPropertyOrPath(link, value, true, true);
        } else if ((0, _path.isDescendant)(b, path)) {
          link = (0, _path.translate)(b, a, path);

          inst._setPendingPropertyOrPath(link, value, true, true);
        }
      }
    }
  } // -- bindings ----------------------------------------------

  /**
   * Adds binding metadata to the current `nodeInfo`, and binding effects
   * for all part dependencies to `templateInfo`.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {NodeInfo} nodeInfo Node metadata for current template node
   * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
   * @param {string} target Target property name
   * @param {!Array<!BindingPart>} parts Array of binding part metadata
   * @param {string=} literal Literal text surrounding binding parts (specified
   *   only for 'property' bindings, since these must be initialized as part
   *   of boot-up)
   * @return {void}
   * @private
   */


  function addBinding(constructor, templateInfo, nodeInfo, kind, target, parts, literal) {
    // Create binding metadata and add to nodeInfo
    nodeInfo.bindings = nodeInfo.bindings || [];
    var
    /** Binding */
    binding = {
      kind: kind,
      target: target,
      parts: parts,
      literal: literal,
      isCompound: parts.length !== 1
    };
    nodeInfo.bindings.push(binding); // Add listener info to binding metadata

    if (shouldAddListener(binding)) {
      var _binding$parts$ = binding.parts[0],
          event = _binding$parts$.event,
          negate = _binding$parts$.negate;
      binding.listenerEvent = event || CaseMap.camelToDashCase(target) + '-changed';
      binding.listenerNegate = negate;
    } // Add "propagate" property effects to templateInfo


    var index = templateInfo.nodeInfoList.length;

    for (var i = 0; i < binding.parts.length; i++) {
      var part = binding.parts[i];
      part.compoundIndex = i;
      addEffectForBindingPart(constructor, templateInfo, binding, part, index);
    }
  }
  /**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */


  function addEffectForBindingPart(constructor, templateInfo, binding, part, index) {
    if (!part.literal) {
      if (binding.kind === 'attribute' && binding.target[0] === '-') {
        console.warn('Cannot set attribute ' + binding.target + ' because "-" is not a valid attribute starting character');
      } else {
        var dependencies = part.dependencies;
        var info = {
          index: index,
          binding: binding,
          part: part,
          evaluator: constructor
        };

        for (var j = 0; j < dependencies.length; j++) {
          var trigger = dependencies[j];

          if (typeof trigger == 'string') {
            trigger = parseArg(trigger);
            trigger.wildcard = true;
          }

          constructor._addTemplatePropertyEffect(templateInfo, trigger.rootProperty, {
            fn: runBindingEffect,
            info: info,
            trigger: trigger
          });
        }
      }
    }
  }
  /**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */


  function runBindingEffect(inst, path, props, oldProps, info, hasPaths, nodeList) {
    var node = nodeList[info.index];
    var binding = info.binding;
    var part = info.part; // Subpath notification: transform path and set to client
    // e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop

    if (hasPaths && part.source && path.length > part.source.length && binding.kind == 'property' && !binding.isCompound && node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[binding.target]) {
      var value = props[path];
      path = (0, _path.translate)(part.source, binding.target, path);

      if (node._setPendingPropertyOrPath(path, value, false, true)) {
        inst._enqueueClient(node);
      }
    } else {
      var _value = info.evaluator._evaluateBinding(inst, part, path, props, oldProps, hasPaths); // Propagate value to child


      applyBindingValue(inst, node, binding, part, _value);
    }
  }
  /**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */


  function applyBindingValue(inst, node, binding, part, value) {
    value = computeBindingValue(node, value, binding, part);

    if (_settings.sanitizeDOMValue) {
      value = (0, _settings.sanitizeDOMValue)(value, binding.target, binding.kind, node);
    }

    if (binding.kind == 'attribute') {
      // Attribute binding
      inst._valueToNodeAttribute(
      /** @type {Element} */
      node, value, binding.target);
    } else {
      // Property binding
      var prop = binding.target;

      if (node.__isPropertyEffectsClient && node.__dataHasAccessor && node.__dataHasAccessor[prop]) {
        if (!node[TYPES.READ_ONLY] || !node[TYPES.READ_ONLY][prop]) {
          if (node._setPendingProperty(prop, value)) {
            inst._enqueueClient(node);
          }
        }
      } else {
        inst._setUnmanagedPropertyToNode(node, prop, value);
      }
    }
  }
  /**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */


  function computeBindingValue(node, value, binding, part) {
    if (binding.isCompound) {
      var storage = node.__dataCompoundStorage[binding.target];
      storage[part.compoundIndex] = value;
      value = storage.join('');
    }

    if (binding.kind !== 'attribute') {
      // Some browsers serialize `undefined` to `"undefined"`
      if (binding.target === 'textContent' || binding.target === 'value' && (node.localName === 'input' || node.localName === 'textarea')) {
        value = value == undefined ? '' : value;
      }
    }

    return value;
  }
  /**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */


  function shouldAddListener(binding) {
    return Boolean(binding.target) && binding.kind != 'attribute' && binding.kind != 'text' && !binding.isCompound && binding.parts[0].mode === '{';
  }
  /**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */


  function setupBindings(inst, templateInfo) {
    // Setup compound storage, dataHost, and notify listeners
    var nodeList = templateInfo.nodeList,
        nodeInfoList = templateInfo.nodeInfoList;

    if (nodeInfoList.length) {
      for (var i = 0; i < nodeInfoList.length; i++) {
        var info = nodeInfoList[i];
        var node = nodeList[i];
        var bindings = info.bindings;

        if (bindings) {
          for (var _i = 0; _i < bindings.length; _i++) {
            var binding = bindings[_i];
            setupCompoundStorage(node, binding);
            addNotifyListener(node, inst, binding);
          }
        }

        node.__dataHost = inst;
      }
    }
  }
  /**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */


  function setupCompoundStorage(node, binding) {
    if (binding.isCompound) {
      // Create compound storage map
      var storage = node.__dataCompoundStorage || (node.__dataCompoundStorage = {});
      var parts = binding.parts; // Copy literals from parts into storage for this binding

      var literals = new Array(parts.length);

      for (var j = 0; j < parts.length; j++) {
        literals[j] = parts[j].literal;
      }

      var target = binding.target;
      storage[target] = literals; // Configure properties with their literal parts

      if (binding.literal && binding.kind == 'property') {
        node[target] = binding.literal;
      }
    }
  }
  /**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */


  function addNotifyListener(node, inst, binding) {
    if (binding.listenerEvent) {
      var part = binding.parts[0];
      node.addEventListener(binding.listenerEvent, function (e) {
        handleNotification(e, inst, binding.target, part.source, part.negate);
      });
    }
  } // -- for method-based effects (complexObserver & computed) --------------

  /**
   * Adds property effects for each argument in the method signature (and
   * optionally, for the method name if `dynamic` is true) that calls the
   * provided effect function.
   *
   * @param {Element | Object} model Prototype or instance
   * @param {!MethodSignature} sig Method signature metadata
   * @param {string} type Type of property effect to add
   * @param {Function} effectFn Function to run when arguments change
   * @param {*=} methodInfo Effect-specific information to be included in
   *   method effect metadata
   * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
   *   method names should be included as a dependency to the effect. Note,
   *   defaults to true if the signature is static (sig.static is true).
   * @return {void}
   * @private
   */


  function createMethodEffect(model, sig, type, effectFn, methodInfo, dynamicFn) {
    dynamicFn = sig.static || dynamicFn && (babelHelpers.typeof(dynamicFn) !== 'object' || dynamicFn[sig.methodName]);
    var info = {
      methodName: sig.methodName,
      args: sig.args,
      methodInfo: methodInfo,
      dynamicFn: dynamicFn
    };

    for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
      if (!arg.literal) {
        model._addPropertyEffect(arg.rootProperty, type, {
          fn: effectFn,
          info: info,
          trigger: arg
        });
      }
    }

    if (dynamicFn) {
      model._addPropertyEffect(sig.methodName, type, {
        fn: effectFn,
        info: info
      });
    }
  }
  /**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */


  function runMethodEffect(inst, property, props, oldProps, info) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    var context = inst._methodHost || inst;
    var fn = context[info.methodName];

    if (fn) {
      var args = marshalArgs(inst.__data, info.args, property, props);
      return fn.apply(context, args);
    } else if (!info.dynamicFn) {
      console.warn('method `' + info.methodName + '` not defined');
    }
  }

  var emptyArray = []; // Regular expressions used for binding

  var IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
  var NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
  var SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
  var DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
  var STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
  var ARGUMENT = '(?:(' + IDENT + '|' + NUMBER + '|' + STRING + ')\\s*' + ')';
  var ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
  var ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
  var BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')'; // Group 3

  var OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
  var CLOSE_BRACKET = '(?:]]|}})';
  var NEGATE = '(?:(!)\\s*)?'; // Group 2

  var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
  var bindingRegex = new RegExp(EXPRESSION, "g");
  /**
   * Create a string from binding parts of all the literal parts
   *
   * @param {!Array<BindingPart>} parts All parts to stringify
   * @return {string} String made from the literal parts
   */

  function literalFromParts(parts) {
    var s = '';

    for (var i = 0; i < parts.length; i++) {
      var literal = parts[i].literal;
      s += literal || '';
    }

    return s;
  }
  /**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */


  function parseMethod(expression) {
    // tries to match valid javascript property names
    var m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);

    if (m) {
      var methodName = m[1];
      var sig = {
        methodName: methodName,
        static: true,
        args: emptyArray
      };

      if (m[2].trim()) {
        // replace escaped commas with comma entity, split on un-escaped commas
        var args = m[2].replace(/\\,/g, '&comma;').split(',');
        return parseArgs(args, sig);
      } else {
        return sig;
      }
    }

    return null;
  }
  /**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */


  function parseArgs(argList, sig) {
    sig.args = argList.map(function (rawArg) {
      var arg = parseArg(rawArg);

      if (!arg.literal) {
        sig.static = false;
      }

      return arg;
    }, this);
    return sig;
  }
  /**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */


  function parseArg(rawArg) {
    // clean up whitespace
    var arg = rawArg.trim() // replace comma entity with comma
    .replace(/&comma;/g, ',') // repair extra escape sequences; note only commas strictly need
    // escaping, but we allow any other char to be escaped since its
    // likely users will do this
    .replace(/\\(.)/g, '\$1'); // basic argument descriptor

    var a = {
      name: arg,
      value: '',
      literal: false
    }; // detect literal value (must be String or Number)

    var fc = arg[0];

    if (fc === '-') {
      fc = arg[1];
    }

    if (fc >= '0' && fc <= '9') {
      fc = '#';
    }

    switch (fc) {
      case "'":
      case '"':
        a.value = arg.slice(1, -1);
        a.literal = true;
        break;

      case '#':
        a.value = Number(arg);
        a.literal = true;
        break;
    } // if not literal, look for structured path


    if (!a.literal) {
      a.rootProperty = (0, _path.root)(arg); // detect structured path (has dots)

      a.structured = (0, _path.isPath)(arg);

      if (a.structured) {
        a.wildcard = arg.slice(-2) == '.*';

        if (a.wildcard) {
          a.name = arg.slice(0, -2);
        }
      }
    }

    return a;
  }
  /**
   * Gather the argument values for a method specified in the provided array
   * of argument metadata.
   *
   * The `path` and `value` arguments are used to fill in wildcard descriptor
   * when the method is being called as a result of a path notification.
   *
   * @param {Object} data Instance data storage object to read properties from
   * @param {!Array<!MethodArg>} args Array of argument metadata
   * @param {string} path Property/path name that triggered the method effect
   * @param {Object} props Bag of current property changes
   * @return {Array<*>} Array of argument values
   * @private
   */


  function marshalArgs(data, args, path, props) {
    var values = [];

    for (var i = 0, l = args.length; i < l; i++) {
      var arg = args[i];
      var name = arg.name;
      var v = void 0;

      if (arg.literal) {
        v = arg.value;
      } else {
        if (arg.structured) {
          v = (0, _path.get)(data, name); // when data is not stored e.g. `splices`

          if (v === undefined) {
            v = props[name];
          }
        } else {
          v = data[name];
        }
      }

      if (arg.wildcard) {
        // Only send the actual path changed info if the change that
        // caused the observer to run matched the wildcard
        var baseChanged = name.indexOf(path + '.') === 0;
        var matches = path.indexOf(name) === 0 && !baseChanged;
        values[i] = {
          path: matches ? path : name,
          value: matches ? props[path] : v,
          base: v
        };
      } else {
        values[i] = v;
      }
    }

    return values;
  } // data api

  /**
   * Sends array splice notifications (`.splices` and `.length`)
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {Array} splices Array of splice records
   * @return {void}
   * @private
   */


  function _notifySplices(inst, array, path, splices) {
    var splicesPath = path + '.splices';
    inst.notifyPath(splicesPath, {
      indexSplices: splices
    });
    inst.notifyPath(path + '.length', array.length); // Null here to allow potentially large splice records to be GC'ed.

    inst.__data[splicesPath] = {
      indexSplices: null
    };
  }
  /**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */


  function notifySplice(inst, array, path, index, addedCount, removed) {
    _notifySplices(inst, array, path, [{
      index: index,
      addedCount: addedCount,
      removed: removed,
      object: array,
      type: 'splice'
    }]);
  }
  /**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */


  function upper(name) {
    return name[0].toUpperCase() + name.substring(1);
  }
  /**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */


  var PropertyEffects = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertyAccessors}
     * @implements {Polymer_TemplateStamp}
     * @unrestricted
     */
    var propertyEffectsBase = (0, _templateStamp.TemplateStamp)((0, _propertyAccessors.PropertyAccessors)(superClass));
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyEffects}
     * @extends {propertyEffectsBase}
     * @unrestricted
     */

    var PropertyEffects =
    /*#__PURE__*/
    function (_propertyEffectsBase) {
      babelHelpers.inherits(PropertyEffects, _propertyEffectsBase);

      function PropertyEffects() {
        var _this;

        babelHelpers.classCallCheck(this, PropertyEffects);
        _this = babelHelpers.possibleConstructorReturn(this, (PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects)).call(this));
        /** @type {boolean} */
        // Used to identify users of this mixin, ala instanceof

        _this.__isPropertyEffectsClient = true;
        /** @type {number} */
        // NOTE: used to track re-entrant calls to `_flushProperties`
        // path changes dirty check against `__dataTemp` only during one "turn"
        // and are cleared when `__dataCounter` returns to 0.

        _this.__dataCounter = 0;
        /** @type {boolean} */

        _this.__dataClientsReady;
        /** @type {Array} */

        _this.__dataPendingClients;
        /** @type {Object} */

        _this.__dataToNotify;
        /** @type {Object} */

        _this.__dataLinkedPaths;
        /** @type {boolean} */

        _this.__dataHasPaths;
        /** @type {Object} */

        _this.__dataCompoundStorage;
        /** @type {Polymer_PropertyEffects} */

        _this.__dataHost;
        /** @type {!Object} */

        _this.__dataTemp;
        /** @type {boolean} */

        _this.__dataClientsInitialized;
        /** @type {!Object} */

        _this.__data;
        /** @type {!Object} */

        _this.__dataPending;
        /** @type {!Object} */

        _this.__dataOld;
        /** @type {Object} */

        _this.__computeEffects;
        /** @type {Object} */

        _this.__reflectEffects;
        /** @type {Object} */

        _this.__notifyEffects;
        /** @type {Object} */

        _this.__propagateEffects;
        /** @type {Object} */

        _this.__observeEffects;
        /** @type {Object} */

        _this.__readOnly;
        /** @type {!TemplateInfo} */

        _this.__templateInfo;
        return _this;
      }

      babelHelpers.createClass(PropertyEffects, [{
        key: "_initializeProperties",

        /**
         * @return {void}
         */
        value: function _initializeProperties() {
          babelHelpers.get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), "_initializeProperties", this).call(this);
          hostStack.registerHost(this);
          this.__dataClientsReady = false;
          this.__dataPendingClients = null;
          this.__dataToNotify = null;
          this.__dataLinkedPaths = null;
          this.__dataHasPaths = false; // May be set on instance prior to upgrade

          this.__dataCompoundStorage = this.__dataCompoundStorage || null;
          this.__dataHost = this.__dataHost || null;
          this.__dataTemp = {};
          this.__dataClientsInitialized = false;
        }
        /**
         * Overrides `PropertyAccessors` implementation to provide a
         * more efficient implementation of initializing properties from
         * the prototype on the instance.
         *
         * @override
         * @param {Object} props Properties to initialize on the prototype
         * @return {void}
         */

      }, {
        key: "_initializeProtoProperties",
        value: function _initializeProtoProperties(props) {
          this.__data = Object.create(props);
          this.__dataPending = Object.create(props);
          this.__dataOld = {};
        }
        /**
         * Overrides `PropertyAccessors` implementation to avoid setting
         * `_setProperty`'s `shouldNotify: true`.
         *
         * @override
         * @param {Object} props Properties to initialize on the instance
         * @return {void}
         */

      }, {
        key: "_initializeInstanceProperties",
        value: function _initializeInstanceProperties(props) {
          var readOnly = this[TYPES.READ_ONLY];

          for (var prop in props) {
            if (!readOnly || !readOnly[prop]) {
              this.__dataPending = this.__dataPending || {};
              this.__dataOld = this.__dataOld || {};
              this.__data[prop] = this.__dataPending[prop] = props[prop];
            }
          }
        } // Prototype setup ----------------------------------------

        /**
         * Equivalent to static `addPropertyEffect` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: "_addPropertyEffect",
        value: function _addPropertyEffect(property, type, effect) {
          this._createPropertyAccessor(property, type == TYPES.READ_ONLY); // effects are accumulated into arrays per property based on type


          var effects = ensureOwnEffectMap(this, type)[property];

          if (!effects) {
            effects = this[type][property] = [];
          }

          effects.push(effect);
        }
        /**
         * Removes the given property effect.
         *
         * @param {string} property Property the effect was associated with
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object to remove
         * @return {void}
         */

      }, {
        key: "_removePropertyEffect",
        value: function _removePropertyEffect(property, type, effect) {
          var effects = ensureOwnEffectMap(this, type)[property];
          var idx = effects.indexOf(effect);

          if (idx >= 0) {
            effects.splice(idx, 1);
          }
        }
        /**
         * Returns whether the current prototype/instance has a property effect
         * of a certain type.
         *
         * @param {string} property Property name
         * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasPropertyEffect",
        value: function _hasPropertyEffect(property, type) {
          var effects = this[type];
          return Boolean(effects && effects[property]);
        }
        /**
         * Returns whether the current prototype/instance has a "read only"
         * accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasReadOnlyEffect",
        value: function _hasReadOnlyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.READ_ONLY);
        }
        /**
         * Returns whether the current prototype/instance has a "notify"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasNotifyEffect",
        value: function _hasNotifyEffect(property) {
          return this._hasPropertyEffect(property, TYPES.NOTIFY);
        }
        /**
         * Returns whether the current prototype/instance has a "reflect to attribute"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasReflectEffect",
        value: function _hasReflectEffect(property) {
          return this._hasPropertyEffect(property, TYPES.REFLECT);
        }
        /**
         * Returns whether the current prototype/instance has a "computed"
         * property effect for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if the prototype/instance has an effect of this type
         * @protected
         */

      }, {
        key: "_hasComputedEffect",
        value: function _hasComputedEffect(property) {
          return this._hasPropertyEffect(property, TYPES.COMPUTE);
        } // Runtime ----------------------------------------

        /**
         * Sets a pending property or path.  If the root property of the path in
         * question had no accessor, the path is set, otherwise it is enqueued
         * via `_setPendingProperty`.
         *
         * This function isolates relatively expensive functionality necessary
         * for the public API (`set`, `setProperties`, `notifyPath`, and property
         * change listeners via {{...}} bindings), such that it is only done
         * when paths enter the system, and not at every propagation step.  It
         * also sets a `__dataHasPaths` flag on the instance which is used to
         * fast-path slower path-matching code in the property effects host paths.
         *
         * `path` can be a path string or array of path parts as accepted by the
         * public API.
         *
         * @param {string | !Array<number|string>} path Path to set
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify Set to true if this change should
         *  cause a property notification event dispatch
         * @param {boolean=} isPathNotification If the path being set is a path
         *   notification of an already changed value, as opposed to a request
         *   to set and notify the change.  In the latter `false` case, a dirty
         *   check is performed and then the value is set to the path before
         *   enqueuing the pending property change.
         * @return {boolean} Returns true if the property/path was enqueued in
         *   the pending changes bag.
         * @protected
         */

      }, {
        key: "_setPendingPropertyOrPath",
        value: function _setPendingPropertyOrPath(path, value, shouldNotify, isPathNotification) {
          if (isPathNotification || (0, _path.root)(Array.isArray(path) ? path[0] : path) !== path) {
            // Dirty check changes being set to a path against the actual object,
            // since this is the entry point for paths into the system; from here
            // the only dirty checks are against the `__dataTemp` cache to prevent
            // duplicate work in the same turn only. Note, if this was a notification
            // of a change already set to a path (isPathNotification: true),
            // we always let the change through and skip the `set` since it was
            // already dirty checked at the point of entry and the underlying
            // object has already been updated
            if (!isPathNotification) {
              var old = (0, _path.get)(this, path);
              path =
              /** @type {string} */
              (0, _path.set)(this, path, value); // Use property-accessor's simpler dirty check

              if (!path || !babelHelpers.get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), "_shouldPropertyChange", this).call(this, path, value, old)) {
                return false;
              }
            }

            this.__dataHasPaths = true;

            if (this._setPendingProperty(
            /**@type{string}*/
            path, value, shouldNotify)) {
              computeLinkedPaths(this, path, value);
              return true;
            }
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[path]) {
              return this._setPendingProperty(
              /**@type{string}*/
              path, value, shouldNotify);
            } else {
              this[path] = value;
            }
          }

          return false;
        }
        /**
         * Applies a value to a non-Polymer element/node's property.
         *
         * The implementation makes a best-effort at binding interop:
         * Some native element properties have side-effects when
         * re-setting the same value (e.g. setting `<input>.value` resets the
         * cursor position), so we do a dirty-check before setting the value.
         * However, for better interop with non-Polymer custom elements that
         * accept objects, we explicitly re-set object changes coming from the
         * Polymer world (which may include deep object changes without the
         * top reference changing), erring on the side of providing more
         * information.
         *
         * Users may override this method to provide alternate approaches.
         *
         * @param {!Node} node The node to set a property on
         * @param {string} prop The property to set
         * @param {*} value The value to set
         * @return {void}
         * @protected
         */

      }, {
        key: "_setUnmanagedPropertyToNode",
        value: function _setUnmanagedPropertyToNode(node, prop, value) {
          // It is a judgment call that resetting primitives is
          // "bad" and resettings objects is also "good"; alternatively we could
          // implement a whitelist of tag & property values that should never
          // be reset (e.g. <input>.value && <select>.value)
          if (value !== node[prop] || babelHelpers.typeof(value) == 'object') {
            node[prop] = value;
          }
        }
        /**
         * Overrides the `PropertiesChanged` implementation to introduce special
         * dirty check logic depending on the property & value being set:
         *
         * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
         *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
         * 2. Object set to simple property (e.g. 'prop': {...})
         *    Stored in `__dataTemp` and `__data`, dirty checked against
         *    `__dataTemp` by default implementation of `_shouldPropertyChange`
         * 3. Primitive value set to simple property (e.g. 'prop': 42)
         *    Stored in `__data`, dirty checked against `__data`
         *
         * The dirty-check is important to prevent cycles due to two-way
         * notification, but paths and objects are only dirty checked against any
         * previous value set during this turn via a "temporary cache" that is
         * cleared when the last `_propertiesChanged` exits. This is so:
         * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
         *    due to array mutations like shift/unshift/splice; this is fine
         *    since path changes are dirty-checked at user entry points like `set`
         * b. dirty-checking for objects only lasts one turn to allow the user
         *    to mutate the object in-place and re-set it with the same identity
         *    and have all sub-properties re-propagated in a subsequent turn.
         *
         * The temp cache is not necessarily sufficient to prevent invalid array
         * paths, since a splice can happen during the same turn (with pathological
         * user code); we could introduce a "fixup" for temporarily cached array
         * paths if needed: https://github.com/Polymer/polymer/issues/4227
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} shouldNotify True if property should fire notification
         *   event (applies only for `notify: true` properties)
         * @return {boolean} Returns true if the property changed
         */

      }, {
        key: "_setPendingProperty",
        value: function _setPendingProperty(property, value, shouldNotify) {
          var isPath = this.__dataHasPaths && (0, _path.isPath)(property);
          var prevProps = isPath ? this.__dataTemp : this.__data;

          if (this._shouldPropertyChange(property, value, prevProps[property])) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            } // Ensure old is captured from the last turn


            if (!(property in this.__dataOld)) {
              this.__dataOld[property] = this.__data[property];
            } // Paths are stored in temporary cache (cleared at end of turn),
            // which is used for dirty-checking, all others stored in __data


            if (isPath) {
              this.__dataTemp[property] = value;
            } else {
              this.__data[property] = value;
            } // All changes go into pending property bag, passed to _propertiesChanged


            this.__dataPending[property] = value; // Track properties that should notify separately

            if (isPath || this[TYPES.NOTIFY] && this[TYPES.NOTIFY][property]) {
              this.__dataToNotify = this.__dataToNotify || {};
              this.__dataToNotify[property] = shouldNotify;
            }

            return true;
          }

          return false;
        }
        /**
         * Overrides base implementation to ensure all accessors set `shouldNotify`
         * to true, for per-property notification tracking.
         *
         * @override
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         */

      }, {
        key: "_setProperty",
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value, true)) {
            this._invalidateProperties();
          }
        }
        /**
         * Overrides `PropertyAccessor`'s default async queuing of
         * `_propertiesChanged`: if `__dataReady` is false (has not yet been
         * manually flushed), the function no-ops; otherwise flushes
         * `_propertiesChanged` synchronously.
         *
         * @override
         * @return {void}
         */

      }, {
        key: "_invalidateProperties",
        value: function _invalidateProperties() {
          if (this.__dataReady) {
            this._flushProperties();
          }
        }
        /**
         * Enqueues the given client on a list of pending clients, whose
         * pending property changes can later be flushed via a call to
         * `_flushClients`.
         *
         * @param {Object} client PropertyEffects client to enqueue
         * @return {void}
         * @protected
         */

      }, {
        key: "_enqueueClient",
        value: function _enqueueClient(client) {
          this.__dataPendingClients = this.__dataPendingClients || [];

          if (client !== this) {
            this.__dataPendingClients.push(client);
          }
        }
        /**
         * Overrides superclass implementation.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_flushProperties",
        value: function _flushProperties() {
          this.__dataCounter++;
          babelHelpers.get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), "_flushProperties", this).call(this);
          this.__dataCounter--;
        }
        /**
         * Flushes any clients previously enqueued via `_enqueueClient`, causing
         * their `_flushProperties` method to run.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_flushClients",
        value: function _flushClients() {
          if (!this.__dataClientsReady) {
            this.__dataClientsReady = true;

            this._readyClients(); // Override point where accessors are turned on; importantly,
            // this is after clients have fully readied, providing a guarantee
            // that any property effects occur only after all clients are ready.


            this.__dataReady = true;
          } else {
            this.__enableOrFlushClients();
          }
        } // NOTE: We ensure clients either enable or flush as appropriate. This
        // handles two corner cases:
        // (1) clients flush properly when connected/enabled before the host
        // enables; e.g.
        //   (a) Templatize stamps with no properties and does not flush and
        //   (b) the instance is inserted into dom and
        //   (c) then the instance flushes.
        // (2) clients enable properly when not connected/enabled when the host
        // flushes; e.g.
        //   (a) a template is runtime stamped and not yet connected/enabled
        //   (b) a host sets a property, causing stamped dom to flush
        //   (c) the stamped dom enables.

      }, {
        key: "__enableOrFlushClients",
        value: function __enableOrFlushClients() {
          var clients = this.__dataPendingClients;

          if (clients) {
            this.__dataPendingClients = null;

            for (var i = 0; i < clients.length; i++) {
              var client = clients[i];

              if (!client.__dataEnabled) {
                client._enableProperties();
              } else if (client.__dataPending) {
                client._flushProperties();
              }
            }
          }
        }
        /**
         * Perform any initial setup on client dom. Called before the first
         * `_flushProperties` call on client dom and before any element
         * observers are called.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_readyClients",
        value: function _readyClients() {
          this.__enableOrFlushClients();
        }
        /**
         * Sets a bag of property changes to this instance, and
         * synchronously processes all effects of the properties as a batch.
         *
         * Property names must be simple properties, not paths.  Batched
         * path propagation is not supported.
         *
         * @param {Object} props Bag of one or more key-value pairs whose key is
         *   a property and value is the new value to set for that property.
         * @param {boolean=} setReadOnly When true, any private values set in
         *   `props` will be set. By default, `setProperties` will not set
         *   `readOnly: true` root properties.
         * @return {void}
         * @public
         */

      }, {
        key: "setProperties",
        value: function setProperties(props, setReadOnly) {
          for (var path in props) {
            if (setReadOnly || !this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][path]) {
              //TODO(kschaaf): explicitly disallow paths in setProperty?
              // wildcard observers currently only pass the first changed path
              // in the `info` object, and you could do some odd things batching
              // paths, e.g. {'foo.bar': {...}, 'foo': null}
              this._setPendingPropertyOrPath(path, props[path], true);
            }
          }

          this._invalidateProperties();
        }
        /**
         * Overrides `PropertyAccessors` so that property accessor
         * side effects are not enabled until after client dom is fully ready.
         * Also calls `_flushClients` callback to ensure client dom is enabled
         * that was not enabled as a result of flushing properties.
         *
         * @override
         * @return {void}
         */

      }, {
        key: "ready",
        value: function ready() {
          // It is important that `super.ready()` is not called here as it
          // immediately turns on accessors. Instead, we wait until `readyClients`
          // to enable accessors to provide a guarantee that clients are ready
          // before processing any accessors side effects.
          this._flushProperties(); // If no data was pending, `_flushProperties` will not `flushClients`
          // so ensure this is done.


          if (!this.__dataClientsReady) {
            this._flushClients();
          } // Before ready, client notifications do not trigger _flushProperties.
          // Therefore a flush is necessary here if data has been set.


          if (this.__dataPending) {
            this._flushProperties();
          }
        }
        /**
         * Implements `PropertyAccessors`'s properties changed callback.
         *
         * Runs each class of effects for the batch of changed properties in
         * a specific order (compute, propagate, reflect, observe, notify).
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {!Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {!Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         */

      }, {
        key: "_propertiesChanged",
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {
          // ----------------------------
          // let c = Object.getOwnPropertyNames(changedProps || {});
          // window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
          // if (window.debug) { debugger; }
          // ----------------------------
          var hasPaths = this.__dataHasPaths;
          this.__dataHasPaths = false; // Compute properties

          runComputedEffects(this, changedProps, oldProps, hasPaths); // Clear notify properties prior to possible reentry (propagate, observe),
          // but after computing effects have a chance to add to them

          var notifyProps = this.__dataToNotify;
          this.__dataToNotify = null; // Propagate properties to clients

          this._propagatePropertyChanges(changedProps, oldProps, hasPaths); // Flush clients


          this._flushClients(); // Reflect properties


          runEffects(this, this[TYPES.REFLECT], changedProps, oldProps, hasPaths); // Observe properties

          runEffects(this, this[TYPES.OBSERVE], changedProps, oldProps, hasPaths); // Notify properties to host

          if (notifyProps) {
            runNotifyEffects(this, notifyProps, changedProps, oldProps, hasPaths);
          } // Clear temporary cache at end of turn


          if (this.__dataCounter == 1) {
            this.__dataTemp = {};
          } // ----------------------------
          // window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
          // ----------------------------

        }
        /**
         * Called to propagate any property changes to stamped template nodes
         * managed by this element.
         *
         * @param {Object} changedProps Bag of changed properties
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {void}
         * @protected
         */

      }, {
        key: "_propagatePropertyChanges",
        value: function _propagatePropertyChanges(changedProps, oldProps, hasPaths) {
          if (this[TYPES.PROPAGATE]) {
            runEffects(this, this[TYPES.PROPAGATE], changedProps, oldProps, hasPaths);
          }

          var templateInfo = this.__templateInfo;

          while (templateInfo) {
            runEffects(this, templateInfo.propertyEffects, changedProps, oldProps, hasPaths, templateInfo.nodeList);
            templateInfo = templateInfo.nextTemplateInfo;
          }
        }
        /**
         * Aliases one data path as another, such that path notifications from one
         * are routed to the other.
         *
         * @param {string | !Array<string|number>} to Target path to link.
         * @param {string | !Array<string|number>} from Source path to link.
         * @return {void}
         * @public
         */

      }, {
        key: "linkPaths",
        value: function linkPaths(to, from) {
          to = (0, _path.normalize)(to);
          from = (0, _path.normalize)(from);
          this.__dataLinkedPaths = this.__dataLinkedPaths || {};
          this.__dataLinkedPaths[to] = from;
        }
        /**
         * Removes a data path alias previously established with `_linkPaths`.
         *
         * Note, the path to unlink should be the target (`to`) used when
         * linking the paths.
         *
         * @param {string | !Array<string|number>} path Target path to unlink.
         * @return {void}
         * @public
         */

      }, {
        key: "unlinkPaths",
        value: function unlinkPaths(path) {
          path = (0, _path.normalize)(path);

          if (this.__dataLinkedPaths) {
            delete this.__dataLinkedPaths[path];
          }
        }
        /**
         * Notify that an array has changed.
         *
         * Example:
         *
         *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
         *     ...
         *     this.items.splice(1, 1, {name: 'Sam'});
         *     this.items.push({name: 'Bob'});
         *     this.notifySplices('items', [
         *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
         *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
         *     ]);
         *
         * @param {string} path Path that should be notified.
         * @param {Array} splices Array of splice records indicating ordered
         *   changes that occurred to the array. Each record should have the
         *   following fields:
         *    * index: index at which the change occurred
         *    * removed: array of items that were removed from this index
         *    * addedCount: number of new items added at this index
         *    * object: a reference to the array in question
         *    * type: the string literal 'splice'
         *
         *   Note that splice records _must_ be normalized such that they are
         *   reported in index order (raw results from `Object.observe` are not
         *   ordered and must be normalized/merged before notifying).
         * @return {void}
         * @public
        */

      }, {
        key: "notifySplices",
        value: function notifySplices(path, splices) {
          var info = {
            path: ''
          };
          var array =
          /** @type {Array} */
          (0, _path.get)(this, path, info);

          _notifySplices(this, array, info.path, splices);
        }
        /**
         * Convenience method for reading a value from a path.
         *
         * Note, if any part in the path is undefined, this method returns
         * `undefined` (this method does not throw when dereferencing undefined
         * paths).
         *
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `users.12.name` or `['users', 12, 'name']`).
         * @param {Object=} root Root object from which the path is evaluated.
         * @return {*} Value at the path, or `undefined` if any part of the path
         *   is undefined.
         * @public
         */

      }, {
        key: "get",
        value: function get(path, root) {
          return (0, _path.get)(root || this, path);
        }
        /**
         * Convenience method for setting a value to a path and notifying any
         * elements bound to the same path.
         *
         * Note, if any part in the path except for the last is undefined,
         * this method does nothing (this method does not throw when
         * dereferencing undefined paths).
         *
         * @param {(string|!Array<(string|number)>)} path Path to the value
         *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
         *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
         *   bracketed expressions are not supported; string-based path parts
         *   *must* be separated by dots.  Note that when dereferencing array
         *   indices, the index may be used as a dotted part directly
         *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
         * @param {*} value Value to set at the specified path.
         * @param {Object=} root Root object from which the path is evaluated.
         *   When specified, no notification will occur.
         * @return {void}
         * @public
        */

      }, {
        key: "set",
        value: function set(path, value, root) {
          if (root) {
            (0, _path.set)(root, path, value);
          } else {
            if (!this[TYPES.READ_ONLY] || !this[TYPES.READ_ONLY][
            /** @type {string} */
            path]) {
              if (this._setPendingPropertyOrPath(path, value, true)) {
                this._invalidateProperties();
              }
            }
          }
        }
        /**
         * Adds items onto the end of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to push onto array
         * @return {number} New length of the array.
         * @public
         */

      }, {
        key: "push",
        value: function push(path) {
          var info = {
            path: ''
          };
          var array =
          /** @type {Array}*/
          (0, _path.get)(this, path, info);
          var len = array.length;

          for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            items[_key - 1] = arguments[_key];
          }

          var ret = array.push.apply(array, items);

          if (items.length) {
            notifySplice(this, array, info.path, len, items.length, []);
          }

          return ret;
        }
        /**
         * Removes an item from the end of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */

      }, {
        key: "pop",
        value: function pop(path) {
          var info = {
            path: ''
          };
          var array =
          /** @type {Array} */
          (0, _path.get)(this, path, info);
          var hadLength = Boolean(array.length);
          var ret = array.pop();

          if (hadLength) {
            notifySplice(this, array, info.path, array.length, 0, [ret]);
          }

          return ret;
        }
        /**
         * Starting from the start index specified, removes 0 or more items
         * from the array and inserts 0 or more new items in their place.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.splice`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {number} start Index from which to start removing/inserting.
         * @param {number} deleteCount Number of items to remove.
         * @param {...*} items Items to insert into array.
         * @return {Array} Array of removed items.
         * @public
         */

      }, {
        key: "splice",
        value: function splice(path, start, deleteCount) {
          for (var _len2 = arguments.length, items = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
            items[_key2 - 3] = arguments[_key2];
          }

          var info = {
            path: ''
          };
          var array =
          /** @type {Array} */
          (0, _path.get)(this, path, info); // Normalize fancy native splice handling of crazy start values

          if (start < 0) {
            start = array.length - Math.floor(-start);
          } else if (start) {
            start = Math.floor(start);
          } // array.splice does different things based on the number of arguments
          // you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
          // do different things. In the former, the whole array is cleared. In the
          // latter, no items are removed.
          // This means that we need to detect whether 1. one of the arguments
          // is actually passed in and then 2. determine how many arguments
          // we should pass on to the native array.splice
          //


          var ret; // Omit any additional arguments if they were not passed in

          if (arguments.length === 2) {
            ret = array.splice(start); // Either start was undefined and the others were defined, but in this
            // case we can safely pass on all arguments
            //
            // Note: this includes the case where none of the arguments were passed in,
            // e.g. this.splice('array'). However, if both start and deleteCount
            // are undefined, array.splice will not modify the array (as expected)
          } else {
            ret = array.splice.apply(array, [start, deleteCount].concat(items));
          } // At the end, check whether any items were passed in (e.g. insertions)
          // or if the return array contains items (e.g. deletions).
          // Only notify if items were added or deleted.


          if (items.length || ret.length) {
            notifySplice(this, array, info.path, start, items.length, ret);
          }

          return ret;
        }
        /**
         * Removes an item from the beginning of array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.pop`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @return {*} Item that was removed.
         * @public
         */

      }, {
        key: "shift",
        value: function shift(path) {
          var info = {
            path: ''
          };
          var array =
          /** @type {Array} */
          (0, _path.get)(this, path, info);
          var hadLength = Boolean(array.length);
          var ret = array.shift();

          if (hadLength) {
            notifySplice(this, array, info.path, 0, 0, [ret]);
          }

          return ret;
        }
        /**
         * Adds items onto the beginning of the array at the path specified.
         *
         * The arguments after `path` and return value match that of
         * `Array.prototype.push`.
         *
         * This method notifies other paths to the same array that a
         * splice occurred to the array.
         *
         * @param {string | !Array<string|number>} path Path to array.
         * @param {...*} items Items to insert info array
         * @return {number} New length of the array.
         * @public
         */

      }, {
        key: "unshift",
        value: function unshift(path) {
          var info = {
            path: ''
          };
          var array =
          /** @type {Array} */
          (0, _path.get)(this, path, info);

          for (var _len3 = arguments.length, items = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            items[_key3 - 1] = arguments[_key3];
          }

          var ret = array.unshift.apply(array, items);

          if (items.length) {
            notifySplice(this, array, info.path, 0, items.length, []);
          }

          return ret;
        }
        /**
         * Notify that a path has changed.
         *
         * Example:
         *
         *     this.item.user.name = 'Bob';
         *     this.notifyPath('item.user.name');
         *
         * @param {string} path Path that should be notified.
         * @param {*=} value Value at the path (optional).
         * @return {void}
         * @public
        */

      }, {
        key: "notifyPath",
        value: function notifyPath(path, value) {
          /** @type {string} */
          var propPath;

          if (arguments.length == 1) {
            // Get value if not supplied
            var info = {
              path: ''
            };
            value = (0, _path.get)(this, path, info);
            propPath = info.path;
          } else if (Array.isArray(path)) {
            // Normalize path if needed
            propPath = (0, _path.normalize)(path);
          } else {
            propPath =
            /** @type{string} */
            path;
          }

          if (this._setPendingPropertyOrPath(propPath, value, true, true)) {
            this._invalidateProperties();
          }
        }
        /**
         * Equivalent to static `createReadOnlyProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createReadOnlyProperty",
        value: function _createReadOnlyProperty(property, protectedSetter) {
          this._addPropertyEffect(property, TYPES.READ_ONLY);

          if (protectedSetter) {
            this['_set' + upper(property)] =
            /** @this {PropertyEffects} */
            function (value) {
              this._setProperty(property, value);
            };
          }
        }
        /**
         * Equivalent to static `createPropertyObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createPropertyObserver",
        value: function _createPropertyObserver(property, method, dynamicFn) {
          var info = {
            property: property,
            method: method,
            dynamicFn: Boolean(dynamicFn)
          };

          this._addPropertyEffect(property, TYPES.OBSERVE, {
            fn: runObserverEffect,
            info: info,
            trigger: {
              name: property
            }
          });

          if (dynamicFn) {
            this._addPropertyEffect(
            /** @type {string} */
            method, TYPES.OBSERVE, {
              fn: runObserverEffect,
              info: info,
              trigger: {
                name: method
              }
            });
          }
        }
        /**
         * Equivalent to static `createMethodObserver` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createMethodObserver",
        value: function _createMethodObserver(expression, dynamicFn) {
          var sig = parseMethod(expression);

          if (!sig) {
            throw new Error("Malformed observer expression '" + expression + "'");
          }

          createMethodEffect(this, sig, TYPES.OBSERVE, runMethodEffect, null, dynamicFn);
        }
        /**
         * Equivalent to static `createNotifyingProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "_createNotifyingProperty",
        value: function _createNotifyingProperty(property) {
          this._addPropertyEffect(property, TYPES.NOTIFY, {
            fn: runNotifyEffect,
            info: {
              eventName: CaseMap.camelToDashCase(property) + '-changed',
              property: property
            }
          });
        }
        /**
         * Equivalent to static `createReflectedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "_createReflectedProperty",
        value: function _createReflectedProperty(property) {
          var attr = this.constructor.attributeNameForProperty(property);

          if (attr[0] === '-') {
            console.warn('Property ' + property + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.');
          } else {
            this._addPropertyEffect(property, TYPES.REFLECT, {
              fn: runReflectEffect,
              info: {
                attrName: attr
              }
            });
          }
        }
        /**
         * Equivalent to static `createComputedProperty` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         *   whether method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "_createComputedProperty",
        value: function _createComputedProperty(property, expression, dynamicFn) {
          var sig = parseMethod(expression);

          if (!sig) {
            throw new Error("Malformed computed expression '" + expression + "'");
          }

          createMethodEffect(this, sig, TYPES.COMPUTE, runComputedEffect, property, dynamicFn);
        } // -- static class methods ------------

        /**
         * Ensures an accessor exists for the specified property, and adds
         * to a list of "property effects" that will run when the accessor for
         * the specified property is set.  Effects are grouped by "type", which
         * roughly corresponds to a phase in effect processing.  The effect
         * metadata should be in the following form:
         *
         *     {
         *       fn: effectFunction, // Reference to function to call to perform effect
         *       info: { ... }       // Effect metadata passed to function
         *       trigger: {          // Optional triggering metadata; if not provided
         *         name: string      // the property is treated as a wildcard
         *         structured: boolean
         *         wildcard: boolean
         *       }
         *     }
         *
         * Effects are called from `_propertiesChanged` in the following order by
         * type:
         *
         * 1. COMPUTE
         * 2. PROPAGATE
         * 3. REFLECT
         * 4. OBSERVE
         * 5. NOTIFY
         *
         * Effect functions are called with the following signature:
         *
         *     effectFunction(inst, path, props, oldProps, info, hasPaths)
         *
         * @param {string} property Property that should trigger the effect
         * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: "_bindTemplate",
        // -- binding ----------------------------------------------

        /**
         * Equivalent to static `bindTemplate` API but can be called on
         * an instance to add effects at runtime.  See that method for
         * full API docs.
         *
         * This method may be called on the prototype (for prototypical template
         * binding, to avoid creating accessors every instance) once per prototype,
         * and will be called with `runtimeBinding: true` by `_stampTemplate` to
         * create and link an instance of the template metadata associated with a
         * particular stamping.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @param {boolean=} instanceBinding When false (default), performs
         *   "prototypical" binding of the template and overwrites any previously
         *   bound template for the class. When true (as passed from
         *   `_stampTemplate`), the template info is instanced and linked into
         *   the list of bound templates.
         * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
         *   this is an instance of the prototypical template info
         * @protected
         */
        value: function _bindTemplate(template, instanceBinding) {
          var templateInfo = this.constructor._parseTemplate(template);

          var wasPreBound = this.__templateInfo == templateInfo; // Optimization: since this is called twice for proto-bound templates,
          // don't attempt to recreate accessors if this template was pre-bound

          if (!wasPreBound) {
            for (var prop in templateInfo.propertyEffects) {
              this._createPropertyAccessor(prop);
            }
          }

          if (instanceBinding) {
            // For instance-time binding, create instance of template metadata
            // and link into list of templates if necessary
            templateInfo =
            /** @type {!TemplateInfo} */
            Object.create(templateInfo);
            templateInfo.wasPreBound = wasPreBound;

            if (!wasPreBound && this.__templateInfo) {
              var last = this.__templateInfoLast || this.__templateInfo;
              this.__templateInfoLast = last.nextTemplateInfo = templateInfo;
              templateInfo.previousTemplateInfo = last;
              return templateInfo;
            }
          }

          return this.__templateInfo = templateInfo;
        }
        /**
         * Adds a property effect to the given template metadata, which is run
         * at the "propagate" stage of `_propertiesChanged` when the template
         * has been bound to the element via `_bindTemplate`.
         *
         * The `effect` object should match the format in `_addPropertyEffect`.
         *
         * @param {Object} templateInfo Template metadata to add effect to
         * @param {string} prop Property that should trigger the effect
         * @param {Object=} effect Effect metadata object
         * @return {void}
         * @protected
         */

      }, {
        key: "_stampTemplate",

        /**
         * Stamps the provided template and performs instance-time setup for
         * Polymer template features, including data bindings, declarative event
         * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
         * is returned containing the stamped DOM, ready for insertion into the
         * DOM.
         *
         * This method may be called more than once; however note that due to
         * `shadycss` polyfill limitations, only styles from templates prepared
         * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
         * to the shadow root and support CSS custom properties), and note that
         * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
         * any styles required by in runtime-stamped templates must be included
         * in the main element template.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         * @override
         * @protected
         */
        value: function _stampTemplate(template) {
          // Ensures that created dom is `_enqueueClient`'d to this element so
          // that it can be flushed on next call to `_flushProperties`
          hostStack.beginHosting(this);
          var dom = babelHelpers.get(PropertyEffects.prototype.__proto__ || Object.getPrototypeOf(PropertyEffects.prototype), "_stampTemplate", this).call(this, template);
          hostStack.endHosting(this);

          var templateInfo =
          /** @type {!TemplateInfo} */
          this._bindTemplate(template, true); // Add template-instance-specific data to instanced templateInfo


          templateInfo.nodeList = dom.nodeList; // Capture child nodes to allow unstamping of non-prototypical templates

          if (!templateInfo.wasPreBound) {
            var nodes = templateInfo.childNodes = [];

            for (var n = dom.firstChild; n; n = n.nextSibling) {
              nodes.push(n);
            }
          }

          dom.templateInfo = templateInfo; // Setup compound storage, 2-way listeners, and dataHost for bindings

          setupBindings(this, templateInfo); // Flush properties into template nodes if already booted

          if (this.__dataReady) {
            runEffects(this, templateInfo.propertyEffects, this.__data, null, false, templateInfo.nodeList);
          }

          return dom;
        }
        /**
         * Removes and unbinds the nodes previously contained in the provided
         * DocumentFragment returned from `_stampTemplate`.
         *
         * @param {!StampedTemplate} dom DocumentFragment previously returned
         *   from `_stampTemplate` associated with the nodes to be removed
         * @return {void}
         * @protected
         */

      }, {
        key: "_removeBoundDom",
        value: function _removeBoundDom(dom) {
          // Unlink template info
          var templateInfo = dom.templateInfo;

          if (templateInfo.previousTemplateInfo) {
            templateInfo.previousTemplateInfo.nextTemplateInfo = templateInfo.nextTemplateInfo;
          }

          if (templateInfo.nextTemplateInfo) {
            templateInfo.nextTemplateInfo.previousTemplateInfo = templateInfo.previousTemplateInfo;
          }

          if (this.__templateInfoLast == templateInfo) {
            this.__templateInfoLast = templateInfo.previousTemplateInfo;
          }

          templateInfo.previousTemplateInfo = templateInfo.nextTemplateInfo = null; // Remove stamped nodes

          var nodes = templateInfo.childNodes;

          for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            node.parentNode.removeChild(node);
          }
        }
        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @override
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: "PROPERTY_EFFECT_TYPES",
        get: function get() {
          return TYPES;
        }
      }], [{
        key: "addPropertyEffect",
        value: function addPropertyEffect(property, type, effect) {
          this.prototype._addPropertyEffect(property, type, effect);
        }
        /**
         * Creates a single-property observer for the given property.
         *
         * @param {string} property Property name
         * @param {string|function(*,*)} method Function or name of observer method to call
         * @param {boolean=} dynamicFn Whether the method name should be included as
         *   a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "createPropertyObserver",
        value: function createPropertyObserver(property, method, dynamicFn) {
          this.prototype._createPropertyObserver(property, method, dynamicFn);
        }
        /**
         * Creates a multi-property "method observer" based on the provided
         * expression, which should be a string in the form of a normal JavaScript
         * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
         * should correspond to a property or path in the context of this
         * prototype (or instance), or may be a literal string or number.
         *
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating
         * @return {void}
         *   whether method names should be included as a dependency to the effect.
         * @protected
         */

      }, {
        key: "createMethodObserver",
        value: function createMethodObserver(expression, dynamicFn) {
          this.prototype._createMethodObserver(expression, dynamicFn);
        }
        /**
         * Causes the setter for the given property to dispatch `<property>-changed`
         * events to notify of changes to the property.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "createNotifyingProperty",
        value: function createNotifyingProperty(property) {
          this.prototype._createNotifyingProperty(property);
        }
        /**
         * Creates a read-only accessor for the given property.
         *
         * To set the property, use the protected `_setProperty` API.
         * To create a custom protected setter (e.g. `_setMyProp()` for
         * property `myProp`), pass `true` for `protectedSetter`.
         *
         * Note, if the property will have other property effects, this method
         * should be called first, before adding other effects.
         *
         * @param {string} property Property name
         * @param {boolean=} protectedSetter Creates a custom protected setter
         *   when `true`.
         * @return {void}
         * @protected
         */

      }, {
        key: "createReadOnlyProperty",
        value: function createReadOnlyProperty(property, protectedSetter) {
          this.prototype._createReadOnlyProperty(property, protectedSetter);
        }
        /**
         * Causes the setter for the given property to reflect the property value
         * to a (dash-cased) attribute of the same name.
         *
         * @param {string} property Property name
         * @return {void}
         * @protected
         */

      }, {
        key: "createReflectedProperty",
        value: function createReflectedProperty(property) {
          this.prototype._createReflectedProperty(property);
        }
        /**
         * Creates a computed property whose value is set to the result of the
         * method described by the given `expression` each time one or more
         * arguments to the method changes.  The expression should be a string
         * in the form of a normal JavaScript function signature:
         * `'methodName(arg1, [..., argn])'`
         *
         * @param {string} property Name of computed property to set
         * @param {string} expression Method expression
         * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
         *   method names should be included as a dependency to the effect.
         * @return {void}
         * @protected
         */

      }, {
        key: "createComputedProperty",
        value: function createComputedProperty(property, expression, dynamicFn) {
          this.prototype._createComputedProperty(property, expression, dynamicFn);
        }
        /**
         * Parses the provided template to ensure binding effects are created
         * for them, and then ensures property accessors are created for any
         * dependent properties in the template.  Binding effects for bound
         * templates are stored in a linked list on the instance so that
         * templates can be efficiently stamped and unstamped.
         *
         * @param {!HTMLTemplateElement} template Template containing binding
         *   bindings
         * @return {!TemplateInfo} Template metadata object
         * @protected
         */

      }, {
        key: "bindTemplate",
        value: function bindTemplate(template) {
          return this.prototype._bindTemplate(template);
        }
      }, {
        key: "_addTemplatePropertyEffect",
        value: function _addTemplatePropertyEffect(templateInfo, prop, effect) {
          var hostProps = templateInfo.hostProps = templateInfo.hostProps || {};
          hostProps[prop] = true;
          var effects = templateInfo.propertyEffects = templateInfo.propertyEffects || {};
          var propEffects = effects[prop] = effects[prop] || [];
          propEffects.push(effect);
        }
      }, {
        key: "_parseTemplateNode",
        value: function _parseTemplateNode(node, templateInfo, nodeInfo) {
          var noted = babelHelpers.get(PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects), "_parseTemplateNode", this).call(this, node, templateInfo, nodeInfo);

          if (node.nodeType === Node.TEXT_NODE) {
            var parts = this._parseBindings(node.textContent, templateInfo);

            if (parts) {
              // Initialize the textContent with any literal parts
              // NOTE: default to a space here so the textNode remains; some browsers
              // (IE) omit an empty textNode following cloneNode/importNode.
              node.textContent = literalFromParts(parts) || ' ';
              addBinding(this, templateInfo, nodeInfo, 'text', 'textContent', parts);
              noted = true;
            }
          }

          return noted;
        }
        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * parsing bindings from attributes.  A `bindings`
         * array is added to `nodeInfo` and populated with binding metadata
         * with information capturing the binding target, and a `parts` array
         * with one or more metadata objects capturing the source(s) of the
         * binding.
         *
         * @override
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: "_parseTemplateNodeAttribute",
        value: function _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          var parts = this._parseBindings(value, templateInfo);

          if (parts) {
            // Attribute or property
            var origName = name;
            var kind = 'property'; // The only way we see a capital letter here is if the attr has
            // a capital letter in it per spec. In this case, to make sure
            // this binding works, we go ahead and make the binding to the attribute.

            if (capitalAttributeRegex.test(name)) {
              kind = 'attribute';
            } else if (name[name.length - 1] == '$') {
              name = name.slice(0, -1);
              kind = 'attribute';
            } // Initialize attribute bindings with any literal parts


            var literal = literalFromParts(parts);

            if (literal && kind == 'attribute') {
              node.setAttribute(name, literal);
            } // Clear attribute before removing, since IE won't allow removing
            // `value` attribute if it previously had a value (can't
            // unconditionally set '' before removing since attributes with `$`
            // can't be set using setAttribute)


            if (node.localName === 'input' && origName === 'value') {
              node.setAttribute(origName, '');
            } // Remove annotation


            node.removeAttribute(origName); // Case hackery: attributes are lower-case, but bind targets
            // (properties) are case sensitive. Gambit is to map dash-case to
            // camel-case: `foo-bar` becomes `fooBar`.
            // Attribute bindings are excepted.

            if (kind === 'property') {
              name = (0, caseMap.dashToCamelCase)(name);
            }

            addBinding(this, templateInfo, nodeInfo, kind, name, parts, literal);
            return true;
          } else {
            return babelHelpers.get(PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects), "_parseTemplateNodeAttribute", this).call(this, node, templateInfo, nodeInfo, name, value);
          }
        }
        /**
         * Overrides default `TemplateStamp` implementation to add support for
         * binding the properties that a nested template depends on to the template
         * as `_host_<property>`.
         *
         * @override
         * @param {Node} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template node
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         * @protected
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */

      }, {
        key: "_parseTemplateNestedTemplate",
        value: function _parseTemplateNestedTemplate(node, templateInfo, nodeInfo) {
          var noted = babelHelpers.get(PropertyEffects.__proto__ || Object.getPrototypeOf(PropertyEffects), "_parseTemplateNestedTemplate", this).call(this, node, templateInfo, nodeInfo); // Merge host props into outer template and add bindings

          var hostProps = nodeInfo.templateInfo.hostProps;
          var mode = '{';

          for (var source in hostProps) {
            var parts = [{
              mode: mode,
              source: source,
              dependencies: [source]
            }];
            addBinding(this, templateInfo, nodeInfo, 'property', '_host_' + source, parts);
          }

          return noted;
        }
        /**
         * Called to parse text in a template (either attribute values or
         * textContent) into binding metadata.
         *
         * Any overrides of this method should return an array of binding part
         * metadata  representing one or more bindings found in the provided text
         * and any "literal" text in between.  Any non-literal parts will be passed
         * to `_evaluateBinding` when any dependencies change.  The only required
         * fields of each "part" in the returned array are as follows:
         *
         * - `dependencies` - Array containing trigger metadata for each property
         *   that should trigger the binding to update
         * - `literal` - String containing text if the part represents a literal;
         *   in this case no `dependencies` are needed
         *
         * Additional metadata for use by `_evaluateBinding` may be provided in
         * each part object as needed.
         *
         * The default implementation handles the following types of bindings
         * (one or more may be intermixed with literal strings):
         * - Property binding: `[[prop]]`
         * - Path binding: `[[object.prop]]`
         * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
         * - Two-way property or path bindings (supports negation):
         *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
         * - Inline computed method (supports negation):
         *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
         *
         * The default implementation uses a regular expression for best
         * performance. However, the regular expression uses a white-list of
         * allowed characters in a data-binding, which causes problems for
         * data-bindings that do use characters not in this white-list.
         *
         * Instead of updating the white-list with all allowed characters,
         * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
         * that uses a state machine instead. This state machine is able to handle
         * all characters. However, it is slightly less performant, therefore we
         * extracted it into a separate optional mixin.
         *
         * @param {string} text Text to parse from attribute or textContent
         * @param {Object} templateInfo Current template metadata
         * @return {Array<!BindingPart>} Array of binding part metadata
         * @protected
         */

      }, {
        key: "_parseBindings",
        value: function _parseBindings(text, templateInfo) {
          var parts = [];
          var lastIndex = 0;
          var m; // Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
          // Regex matches:
          //        Iteration 1:  Iteration 2:
          // m[1]: '{{'          '[['
          // m[2]: ''            '!'
          // m[3]: 'prop'        'compute(foo,bar)'

          while ((m = bindingRegex.exec(text)) !== null) {
            // Add literal part
            if (m.index > lastIndex) {
              parts.push({
                literal: text.slice(lastIndex, m.index)
              });
            } // Add binding part


            var mode = m[1][0];
            var negate = Boolean(m[2]);
            var source = m[3].trim();
            var customEvent = false,
                notifyEvent = '',
                colon = -1;

            if (mode == '{' && (colon = source.indexOf('::')) > 0) {
              notifyEvent = source.substring(colon + 2);
              source = source.substring(0, colon);
              customEvent = true;
            }

            var signature = parseMethod(source);
            var dependencies = [];

            if (signature) {
              // Inline computed function
              var args = signature.args,
                  methodName = signature.methodName;

              for (var i = 0; i < args.length; i++) {
                var arg = args[i];

                if (!arg.literal) {
                  dependencies.push(arg);
                }
              }

              var dynamicFns = templateInfo.dynamicFns;

              if (dynamicFns && dynamicFns[methodName] || signature.static) {
                dependencies.push(methodName);
                signature.dynamicFn = true;
              }
            } else {
              // Property or path
              dependencies.push(source);
            }

            parts.push({
              source: source,
              mode: mode,
              negate: negate,
              customEvent: customEvent,
              signature: signature,
              dependencies: dependencies,
              event: notifyEvent
            });
            lastIndex = bindingRegex.lastIndex;
          } // Add a final literal part


          if (lastIndex && lastIndex < text.length) {
            var literal = text.substring(lastIndex);

            if (literal) {
              parts.push({
                literal: literal
              });
            }
          }

          if (parts.length) {
            return parts;
          } else {
            return null;
          }
        }
        /**
         * Called to evaluate a previously parsed binding part based on a set of
         * one or more changed dependencies.
         *
         * @param {this} inst Element that should be used as scope for
         *   binding dependencies
         * @param {BindingPart} part Binding part metadata
         * @param {string} path Property/path that triggered this effect
         * @param {Object} props Bag of current property changes
         * @param {Object} oldProps Bag of previous values for changed properties
         * @param {boolean} hasPaths True with `props` contains one or more paths
         * @return {*} Value the binding part evaluated to
         * @protected
         */

      }, {
        key: "_evaluateBinding",
        value: function _evaluateBinding(inst, part, path, props, oldProps, hasPaths) {
          var value;

          if (part.signature) {
            value = runMethodEffect(inst, path, props, oldProps, part.signature);
          } else if (path != part.source) {
            value = (0, _path.get)(inst, part.source);
          } else {
            if (hasPaths && (0, _path.isPath)(path)) {
              value = (0, _path.get)(inst, path);
            } else {
              value = inst.__data[path];
            }
          }

          if (part.negate) {
            value = !value;
          }

          return value;
        }
      }]);
      return PropertyEffects;
    }(propertyEffectsBase); // make a typing for closure :P


    PropertyEffectsType = PropertyEffects;
    return PropertyEffects;
  });
  /**
   * Helper api for enqueuing client dom created by a host element.
   *
   * By default elements are flushed via `_flushProperties` when
   * `connectedCallback` is called. Elements attach their client dom to
   * themselves at `ready` time which results from this first flush.
   * This provides an ordering guarantee that the client dom an element
   * creates is flushed before the element itself (i.e. client `ready`
   * fires before host `ready`).
   *
   * However, if `_flushProperties` is called *before* an element is connected,
   * as for example `Templatize` does, this ordering guarantee cannot be
   * satisfied because no elements are connected. (Note: Bound elements that
   * receive data do become enqueued clients and are properly ordered but
   * unbound elements are not.)
   *
   * To maintain the desired "client before host" ordering guarantee for this
   * case we rely on the "host stack. Client nodes registers themselves with
   * the creating host element when created. This ensures that all client dom
   * is readied in the proper order, maintaining the desired guarantee.
   *
   * @private
   */

  _exports.PropertyEffects = PropertyEffects;
  var hostStack = {
    stack: [],

    /**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     * @this {hostStack}
     */
    registerHost: function registerHost(inst) {
      if (this.stack.length) {
        var host = this.stack[this.stack.length - 1];

        host._enqueueClient(inst);
      }
    },

    /**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     * @this {hostStack}
     */
    beginHosting: function beginHosting(inst) {
      this.stack.push(inst);
    },

    /**
     * @param {*} inst Instance to end hosting
     * @return {void}
     * @this {hostStack}
     */
    endHosting: function endHosting(inst) {
      var stackLen = this.stack.length;

      if (stackLen && this.stack[stackLen - 1] == inst) {
        this.stack.pop();
      }
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/mixins/template-stamp.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/template-stamp.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../utils/boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TemplateStamp = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // 1.x backwards-compatible auto-wrapper for template type extensions
  // This is a clear layering violation and gives favored-nation status to
  // dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
  // a.) to ease 1.x backwards-compatibility due to loss of `is`, and
  // b.) to maintain if/repeat capability in parser-constrained elements
  //     (e.g. table, select) in lieu of native CE type extensions without
  //     massive new invention in this space (e.g. directive system)
  var templateExtensions = {
    'dom-if': true,
    'dom-repeat': true
  };

  function wrapTemplateExtension(node) {
    var is = node.getAttribute('is');

    if (is && templateExtensions[is]) {
      var t = node;
      t.removeAttribute('is');
      node = t.ownerDocument.createElement(is);
      t.parentNode.replaceChild(node, t);
      node.appendChild(t);

      while (t.attributes.length) {
        node.setAttribute(t.attributes[0].name, t.attributes[0].value);
        t.removeAttribute(t.attributes[0].name);
      }
    }

    return node;
  }

  function findTemplateNode(root, nodeInfo) {
    // recursively ascend tree until we hit root
    var parent = nodeInfo.parentInfo && findTemplateNode(root, nodeInfo.parentInfo); // unwind the stack, returning the indexed node at each level

    if (parent) {
      // note: marginally faster than indexing via childNodes
      // (http://jsperf.com/childnodes-lookup)
      for (var n = parent.firstChild, i = 0; n; n = n.nextSibling) {
        if (nodeInfo.parentIndex === i++) {
          return n;
        }
      }
    } else {
      return root;
    }
  } // construct `$` map (from id annotations)


  function applyIdToMap(inst, map, node, nodeInfo) {
    if (nodeInfo.id) {
      map[nodeInfo.id] = node;
    }
  } // install event listeners (from event annotations)


  function applyEventListener(inst, node, nodeInfo) {
    if (nodeInfo.events && nodeInfo.events.length) {
      for (var j = 0, e$ = nodeInfo.events, e; j < e$.length && (e = e$[j]); j++) {
        inst._addMethodEventListenerToNode(node, e.name, e.value, inst);
      }
    }
  } // push configuration references at configure time


  function applyTemplateContent(inst, node, nodeInfo) {
    if (nodeInfo.templateInfo) {
      node._templateInfo = nodeInfo.templateInfo;
    }
  }

  function createNodeEventHandler(context, eventName, methodName) {
    // Instances can optionally have a _methodHost which allows redirecting where
    // to find methods. Currently used by `templatize`.
    context = context._methodHost || context;

    var handler = function handler(e) {
      if (context[methodName]) {
        context[methodName](e, e.detail);
      } else {
        console.warn('listener method `' + methodName + '` not defined');
      }
    };

    return handler;
  }
  /**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */


  var TemplateStamp = (0, _mixin.dedupingMixin)(function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_TemplateStamp}
     */
    var TemplateStamp =
    /*#__PURE__*/
    function (_superClass) {
      babelHelpers.inherits(TemplateStamp, _superClass);

      function TemplateStamp() {
        babelHelpers.classCallCheck(this, TemplateStamp);
        return babelHelpers.possibleConstructorReturn(this, (TemplateStamp.__proto__ || Object.getPrototypeOf(TemplateStamp)).apply(this, arguments));
      }

      babelHelpers.createClass(TemplateStamp, [{
        key: "_stampTemplate",

        /**
         * Clones the provided template content and returns a document fragment
         * containing the cloned dom.
         *
         * The template is parsed (once and memoized) using this library's
         * template parsing features, and provides the following value-added
         * features:
         * * Adds declarative event listeners for `on-event="handler"` attributes
         * * Generates an "id map" for all nodes with id's under `$` on returned
         *   document fragment
         * * Passes template info including `content` back to templates as
         *   `_templateInfo` (a performance optimization to avoid deep template
         *   cloning)
         *
         * Note that the memoized template parsing process is destructive to the
         * template: attributes for bindings and declarative event listeners are
         * removed after being noted in notes, and any nested `<template>.content`
         * is removed and stored in notes as well.
         *
         * @param {!HTMLTemplateElement} template Template to stamp
         * @return {!StampedTemplate} Cloned template content
         */
        value: function _stampTemplate(template) {
          // Polyfill support: bootstrap the template if it has not already been
          if (template && !template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
            HTMLTemplateElement.decorate(template);
          }

          var templateInfo = this.constructor._parseTemplate(template);

          var nodeInfo = templateInfo.nodeInfoList;
          var content = templateInfo.content || template.content;
          var dom =
          /** @type {DocumentFragment} */
          document.importNode(content, true); // NOTE: ShadyDom optimization indicating there is an insertion point

          dom.__noInsertionPoint = !templateInfo.hasInsertionPoint;
          var nodes = dom.nodeList = new Array(nodeInfo.length);
          dom.$ = {};

          for (var i = 0, l = nodeInfo.length, info; i < l && (info = nodeInfo[i]); i++) {
            var node = nodes[i] = findTemplateNode(dom, info);
            applyIdToMap(this, dom.$, node, info);
            applyTemplateContent(this, node, info);
            applyEventListener(this, node, info);
          }

          dom =
          /** @type {!StampedTemplate} */
          dom; // eslint-disable-line no-self-assign

          return dom;
        }
        /**
         * Adds an event listener by method name for the event provided.
         *
         * This method generates a handler function that looks up the method
         * name at handling time.
         *
         * @param {!Node} node Node to add listener on
         * @param {string} eventName Name of event
         * @param {string} methodName Name of method
         * @param {*=} context Context the method will be called on (defaults
         *   to `node`)
         * @return {Function} Generated handler function
         */

      }, {
        key: "_addMethodEventListenerToNode",
        value: function _addMethodEventListenerToNode(node, eventName, methodName, context) {
          context = context || node;
          var handler = createNodeEventHandler(context, eventName, methodName);

          this._addEventListenerToNode(node, eventName, handler);

          return handler;
        }
        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {!Node} node Node to add event listener to
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to add
         * @return {void}
         */

      }, {
        key: "_addEventListenerToNode",
        value: function _addEventListenerToNode(node, eventName, handler) {
          node.addEventListener(eventName, handler);
        }
        /**
         * Override point for adding custom or simulated event handling.
         *
         * @param {Node} node Node to remove event listener from
         * @param {string} eventName Name of event
         * @param {function(!Event):void} handler Listener function to remove
         * @return {void}
         */

      }, {
        key: "_removeEventListenerFromNode",
        value: function _removeEventListenerFromNode(node, eventName, handler) {
          node.removeEventListener(eventName, handler);
        }
      }], [{
        key: "_parseTemplate",

        /**
         * Scans a template to produce template metadata.
         *
         * Template-specific metadata are stored in the object returned, and node-
         * specific metadata are stored in objects in its flattened `nodeInfoList`
         * array.  Only nodes in the template that were parsed as nodes of
         * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
         * contains an `index` (`childNodes` index in parent) and optionally
         * `parent`, which points to node info of its parent (including its index).
         *
         * The template metadata object returned from this method has the following
         * structure (many fields optional):
         *
         * ```js
         *   {
         *     // Flattened list of node metadata (for nodes that generated metadata)
         *     nodeInfoList: [
         *       {
         *         // `id` attribute for any nodes with id's for generating `$` map
         *         id: {string},
         *         // `on-event="handler"` metadata
         *         events: [
         *           {
         *             name: {string},   // event name
         *             value: {string},  // handler method name
         *           }, ...
         *         ],
         *         // Notes when the template contained a `<slot>` for shady DOM
         *         // optimization purposes
         *         hasInsertionPoint: {boolean},
         *         // For nested `<template>`` nodes, nested template metadata
         *         templateInfo: {object}, // nested template metadata
         *         // Metadata to allow efficient retrieval of instanced node
         *         // corresponding to this metadata
         *         parentInfo: {number},   // reference to parent nodeInfo>
         *         parentIndex: {number},  // index in parent's `childNodes` collection
         *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
         *       },
         *       ...
         *     ],
         *     // When true, the template had the `strip-whitespace` attribute
         *     // or was nested in a template with that setting
         *     stripWhitespace: {boolean},
         *     // For nested templates, nested template content is moved into
         *     // a document fragment stored here; this is an optimization to
         *     // avoid the cost of nested template cloning
         *     content: {DocumentFragment}
         *   }
         * ```
         *
         * This method kicks off a recursive treewalk as follows:
         *
         * ```
         *    _parseTemplate <---------------------+
         *      _parseTemplateContent              |
         *        _parseTemplateNode  <------------|--+
         *          _parseTemplateNestedTemplate --+  |
         *          _parseTemplateChildNodes ---------+
         *          _parseTemplateNodeAttributes
         *            _parseTemplateNodeAttribute
         *
         * ```
         *
         * These methods may be overridden to add custom metadata about templates
         * to either `templateInfo` or `nodeInfo`.
         *
         * Note that this method may be destructive to the template, in that
         * e.g. event annotations may be removed after being noted in the
         * template metadata.
         *
         * @param {!HTMLTemplateElement} template Template to parse
         * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
         *   template, for parsing nested templates
         * @return {!TemplateInfo} Parsed template metadata
         */
        value: function _parseTemplate(template, outerTemplateInfo) {
          // since a template may be re-used, memo-ize metadata
          if (!template._templateInfo) {
            var templateInfo = template._templateInfo = {};
            templateInfo.nodeInfoList = [];
            templateInfo.stripWhiteSpace = outerTemplateInfo && outerTemplateInfo.stripWhiteSpace || template.hasAttribute('strip-whitespace');

            this._parseTemplateContent(template, templateInfo, {
              parent: null
            });
          }

          return template._templateInfo;
        }
      }, {
        key: "_parseTemplateContent",
        value: function _parseTemplateContent(template, templateInfo, nodeInfo) {
          return this._parseTemplateNode(template.content, templateInfo, nodeInfo);
        }
        /**
         * Parses template node and adds template and node metadata based on
         * the current node, and its `childNodes` and `attributes`.
         *
         * This method may be overridden to add custom node or template specific
         * metadata based on this node.
         *
         * @param {Node} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNode",
        value: function _parseTemplateNode(node, templateInfo, nodeInfo) {
          var noted;
          var element =
          /** @type {Element} */
          node;

          if (element.localName == 'template' && !element.hasAttribute('preserve-content')) {
            noted = this._parseTemplateNestedTemplate(element, templateInfo, nodeInfo) || noted;
          } else if (element.localName === 'slot') {
            // For ShadyDom optimization, indicating there is an insertion point
            templateInfo.hasInsertionPoint = true;
          }

          if (element.firstChild) {
            noted = this._parseTemplateChildNodes(element, templateInfo, nodeInfo) || noted;
          }

          if (element.hasAttributes && element.hasAttributes()) {
            noted = this._parseTemplateNodeAttributes(element, templateInfo, nodeInfo) || noted;
          }

          return noted;
        }
        /**
         * Parses template child nodes for the given root node.
         *
         * This method also wraps whitelisted legacy template extensions
         * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
         * wrappers, collapses text nodes, and strips whitespace from the template
         * if the `templateInfo.stripWhitespace` setting was provided.
         *
         * @param {Node} root Root node whose `childNodes` will be parsed
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {void}
         */

      }, {
        key: "_parseTemplateChildNodes",
        value: function _parseTemplateChildNodes(root, templateInfo, nodeInfo) {
          if (root.localName === 'script' || root.localName === 'style') {
            return;
          }

          for (var node = root.firstChild, parentIndex = 0, next; node; node = next) {
            // Wrap templates
            if (node.localName == 'template') {
              node = wrapTemplateExtension(node);
            } // collapse adjacent textNodes: fixes an IE issue that can cause
            // text nodes to be inexplicably split =(
            // note that root.normalize() should work but does not so we do this
            // manually.


            next = node.nextSibling;

            if (node.nodeType === Node.TEXT_NODE) {
              var
              /** Node */
              n = next;

              while (n && n.nodeType === Node.TEXT_NODE) {
                node.textContent += n.textContent;
                next = n.nextSibling;
                root.removeChild(n);
                n = next;
              } // optionally strip whitespace


              if (templateInfo.stripWhiteSpace && !node.textContent.trim()) {
                root.removeChild(node);
                continue;
              }
            }

            var childInfo = {
              parentIndex: parentIndex,
              parentInfo: nodeInfo
            };

            if (this._parseTemplateNode(node, templateInfo, childInfo)) {
              childInfo.infoIndex = templateInfo.nodeInfoList.push(
              /** @type {!NodeInfo} */
              childInfo) - 1;
            } // Increment if not removed


            if (node.parentNode) {
              parentIndex++;
            }
          }
        }
        /**
         * Parses template content for the given nested `<template>`.
         *
         * Nested template info is stored as `templateInfo` in the current node's
         * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
         * It will then be the responsibility of the host to set it back to the
         * template and for users stamping nested templates to use the
         * `_contentForTemplate` method to retrieve the content for this template
         * (an optimization to avoid the cost of cloning nested template content).
         *
         * @param {HTMLTemplateElement} node Node to parse (a <template>)
         * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
         *   that includes the template `node`
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNestedTemplate",
        value: function _parseTemplateNestedTemplate(node, outerTemplateInfo, nodeInfo) {
          var templateInfo = this._parseTemplate(node, outerTemplateInfo);

          var content = templateInfo.content = node.content.ownerDocument.createDocumentFragment();
          content.appendChild(node.content);
          nodeInfo.templateInfo = templateInfo;
          return true;
        }
        /**
         * Parses template node attributes and adds node metadata to `nodeInfo`
         * for nodes of interest.
         *
         * @param {Element} node Node to parse
         * @param {TemplateInfo} templateInfo Template metadata for current template
         * @param {NodeInfo} nodeInfo Node metadata for current template.
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNodeAttributes",
        value: function _parseTemplateNodeAttributes(node, templateInfo, nodeInfo) {
          // Make copy of original attribute list, since the order may change
          // as attributes are added and removed
          var noted = false;
          var attrs = Array.from(node.attributes);

          for (var i = attrs.length - 1, a; a = attrs[i]; i--) {
            noted = this._parseTemplateNodeAttribute(node, templateInfo, nodeInfo, a.name, a.value) || noted;
          }

          return noted;
        }
        /**
         * Parses a single template node attribute and adds node metadata to
         * `nodeInfo` for attributes of interest.
         *
         * This implementation adds metadata for `on-event="handler"` attributes
         * and `id` attributes.
         *
         * @param {Element} node Node to parse
         * @param {!TemplateInfo} templateInfo Template metadata for current template
         * @param {!NodeInfo} nodeInfo Node metadata for current template.
         * @param {string} name Attribute name
         * @param {string} value Attribute value
         * @return {boolean} `true` if the visited node added node-specific
         *   metadata to `nodeInfo`
         */

      }, {
        key: "_parseTemplateNodeAttribute",
        value: function _parseTemplateNodeAttribute(node, templateInfo, nodeInfo, name, value) {
          // events (on-*)
          if (name.slice(0, 3) === 'on-') {
            node.removeAttribute(name);
            nodeInfo.events = nodeInfo.events || [];
            nodeInfo.events.push({
              name: name.slice(3),
              value: value
            });
            return true;
          } // static id
          else if (name === 'id') {
              nodeInfo.id = value;
              return true;
            }

          return false;
        }
        /**
         * Returns the `content` document fragment for a given template.
         *
         * For nested templates, Polymer performs an optimization to cache nested
         * template content to avoid the cost of cloning deeply nested templates.
         * This method retrieves the cached content for a given template.
         *
         * @param {HTMLTemplateElement} template Template to retrieve `content` for
         * @return {DocumentFragment} Content fragment
         */

      }, {
        key: "_contentForTemplate",
        value: function _contentForTemplate(template) {
          var templateInfo =
          /** @type {HTMLTemplateElementWithInfo} */
          template._templateInfo;
          return templateInfo && templateInfo.content || template.content;
        }
      }]);
      return TemplateStamp;
    }(superClass);

    return TemplateStamp;
  });
  _exports.TemplateStamp = TemplateStamp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/array-splice.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/array-splice.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.calculateSplices = calculateSplices;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }

  var EDIT_LEAVE = 0;
  var EDIT_UPDATE = 1;
  var EDIT_ADD = 2;
  var EDIT_DELETE = 3; // Note: This function is *based* on the computation of the Levenshtein
  // "edit" distance. The one change is that "updates" are treated as two
  // edits - not one. With Array splices, an update is really a delete
  // followed by an add. By retaining this, we optimize for "keeping" the
  // maximum array items in the original array. For example:
  //
  //   'xxxx123' -> '123yyyy'
  //
  // With 1-edit updates, the shortest path would be just to update all seven
  // characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
  // leaves the substring '123' intact.

  function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    var rowCount = oldEnd - oldStart + 1;
    var columnCount = currentEnd - currentStart + 1;
    var distances = new Array(rowCount); // "Addition" rows. Initialize null column.

    for (var i = 0; i < rowCount; i++) {
      distances[i] = new Array(columnCount);
      distances[i][0] = i;
    } // Initialize null row


    for (var j = 0; j < columnCount; j++) {
      distances[0][j] = j;
    }

    for (var _i = 1; _i < rowCount; _i++) {
      for (var _j = 1; _j < columnCount; _j++) {
        if (equals(current[currentStart + _j - 1], old[oldStart + _i - 1])) distances[_i][_j] = distances[_i - 1][_j - 1];else {
          var north = distances[_i - 1][_j] + 1;
          var west = distances[_i][_j - 1] + 1;
          distances[_i][_j] = north < west ? north : west;
        }
      }
    }

    return distances;
  } // This starts at the final weight, and walks "backward" by finding
  // the minimum previous weight recursively until the origin of the weight
  // matrix.


  function spliceOperationsFromEditDistances(distances) {
    var i = distances.length - 1;
    var j = distances[0].length - 1;
    var current = distances[i][j];
    var edits = [];

    while (i > 0 || j > 0) {
      if (i == 0) {
        edits.push(EDIT_ADD);
        j--;
        continue;
      }

      if (j == 0) {
        edits.push(EDIT_DELETE);
        i--;
        continue;
      }

      var northWest = distances[i - 1][j - 1];
      var west = distances[i - 1][j];
      var north = distances[i][j - 1];
      var min = void 0;
      if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;

      if (min == northWest) {
        if (northWest == current) {
          edits.push(EDIT_LEAVE);
        } else {
          edits.push(EDIT_UPDATE);
          current = northWest;
        }

        i--;
        j--;
      } else if (min == west) {
        edits.push(EDIT_DELETE);
        i--;
        current = west;
      } else {
        edits.push(EDIT_ADD);
        j--;
        current = north;
      }
    }

    edits.reverse();
    return edits;
  }
  /**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */

  /**
   * Lacking individual splice mutation information, the minimal set of
   * splices can be synthesized given the previous state and final state of an
   * array. The basic approach is to calculate the edit distance matrix and
   * choose the shortest path through it.
   *
   * Complexity: O(l * p)
   *   l: The length of the current array
   *   p: The length of the old array
   *
   * @param {!Array} current The current "changed" array for which to
   * calculate splices.
   * @param {number} currentStart Starting index in the `current` array for
   * which splices are calculated.
   * @param {number} currentEnd Ending index in the `current` array for
   * which splices are calculated.
   * @param {!Array} old The original "unchanged" array to compare `current`
   * against to determine splices.
   * @param {number} oldStart Starting index in the `old` array for
   * which splices are calculated.
   * @param {number} oldEnd Ending index in the `old` array for
   * which splices are calculated.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */


  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    var prefixCount = 0;
    var suffixCount = 0;
    var splice;
    var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart == 0 && oldStart == 0) prefixCount = sharedPrefix(current, old, minLength);
    if (currentEnd == current.length && oldEnd == old.length) suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];

    if (currentStart == currentEnd) {
      splice = newSplice(currentStart, [], 0);

      while (oldStart < oldEnd) {
        splice.removed.push(old[oldStart++]);
      }

      return [splice];
    } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];

    var ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
    splice = undefined;
    var splices = [];
    var index = currentStart;
    var oldIndex = oldStart;

    for (var i = 0; i < ops.length; i++) {
      switch (ops[i]) {
        case EDIT_LEAVE:
          if (splice) {
            splices.push(splice);
            splice = undefined;
          }

          index++;
          oldIndex++;
          break;

        case EDIT_UPDATE:
          if (!splice) splice = newSplice(index, [], 0);
          splice.addedCount++;
          index++;
          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;

        case EDIT_ADD:
          if (!splice) splice = newSplice(index, [], 0);
          splice.addedCount++;
          index++;
          break;

        case EDIT_DELETE:
          if (!splice) splice = newSplice(index, [], 0);
          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
      }
    }

    if (splice) {
      splices.push(splice);
    }

    return splices;
  }

  function sharedPrefix(current, old, searchLength) {
    for (var i = 0; i < searchLength; i++) {
      if (!equals(current[i], old[i])) return i;
    }

    return searchLength;
  }

  function sharedSuffix(current, old, searchLength) {
    var index1 = current.length;
    var index2 = old.length;
    var count = 0;

    while (count < searchLength && equals(current[--index1], old[--index2])) {
      count++;
    }

    return count;
  }
  /**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */


  function calculateSplices(current, previous) {
    return calcSplices(current, 0, current.length, previous, 0, previous.length);
  }

  function equals(currentValue, previousValue) {
    return currentValue === previousValue;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/async.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/async.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.microTask = _exports.idlePeriod = _exports.animationFrame = _exports.timeOut = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @fileoverview
   *
   * This module provides a number of strategies for enqueuing asynchronous
   * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
   * handle, and a `cancel(handle)` interface for canceling async tasks before
   * they run.
   *
   * @summary Module that provides a number of strategies for enqueuing
   * asynchronous tasks.
   */
  // Microtask implemented using Mutation Observer
  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, {
    characterData: true
  });

  function microtaskFlush() {
    var len = microtaskCallbacks.length;

    for (var i = 0; i < len; i++) {
      var cb = microtaskCallbacks[i];

      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
    }

    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }
  /**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */


  var timeOut = {
    /**
     * Returns a sub-module with the async interface providing the provided
     * delay.
     *
     * @memberof timeOut
     * @param {number=} delay Time to wait before calling callbacks in ms
     * @return {!AsyncInterface} An async timeout interface
     */
    after: function after(delay) {
      return {
        run: function run(fn) {
          return window.setTimeout(fn, delay);
        },
        cancel: function cancel(handle) {
          window.clearTimeout(handle);
        }
      };
    },

    /**
     * Enqueues a function called in the next task.
     *
     * @memberof timeOut
     * @param {!Function} fn Callback to run
     * @param {number=} delay Delay in milliseconds
     * @return {number} Handle used for canceling task
     */
    run: function run(fn, delay) {
      return window.setTimeout(fn, delay);
    },

    /**
     * Cancels a previously enqueued `timeOut` callback.
     *
     * @memberof timeOut
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.clearTimeout(handle);
    }
  };
  _exports.timeOut = timeOut;

  /**
   * Async interface wrapper around `requestAnimationFrame`.
   *
   * @namespace
   * @summary Async interface wrapper around `requestAnimationFrame`.
   */
  var animationFrame = {
    /**
     * Enqueues a function called at `requestAnimationFrame` timing.
     *
     * @memberof animationFrame
     * @param {function(number):void} fn Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(fn) {
      return window.requestAnimationFrame(fn);
    },

    /**
     * Cancels a previously enqueued `animationFrame` callback.
     *
     * @memberof animationFrame
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.cancelAnimationFrame(handle);
    }
  };
  _exports.animationFrame = animationFrame;

  /**
   * Async interface wrapper around `requestIdleCallback`.  Falls back to
   * `setTimeout` on browsers that do not support `requestIdleCallback`.
   *
   * @namespace
   * @summary Async interface wrapper around `requestIdleCallback`.
   */
  var idlePeriod = {
    /**
     * Enqueues a function called at `requestIdleCallback` timing.
     *
     * @memberof idlePeriod
     * @param {function(!IdleDeadline):void} fn Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(fn) {
      return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
    },

    /**
     * Cancels a previously enqueued `idlePeriod` callback.
     *
     * @memberof idlePeriod
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
    }
  };
  _exports.idlePeriod = idlePeriod;

  /**
   * Async interface for enqueuing callbacks that run at microtask timing.
   *
   * Note that microtask timing is achieved via a single `MutationObserver`,
   * and thus callbacks enqueued with this API will all run in a single
   * batch, and not interleaved with other microtasks such as promises.
   * Promises are avoided as an implementation choice for the time being
   * due to Safari bugs that cause Promises to lack microtask guarantees.
   *
   * @namespace
   * @summary Async interface for enqueuing callbacks that run at microtask
   *   timing.
   */
  var microTask = {
    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(callback) {
      microtaskNode.textContent = microtaskNodeContent++;
      microtaskCallbacks.push(callback);
      return microtaskCurrHandle++;
    },

    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      var idx = handle - microtaskLastHandle;

      if (idx >= 0) {
        if (!microtaskCallbacks[idx]) {
          throw new Error('invalid async handle: ' + handle);
        }

        microtaskCallbacks[idx] = null;
      }
    }
  };
  _exports.microTask = microTask;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/boot.js":
/*!*********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/boot.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  window.JSCompiler_renameProperty = function (prop) {
    return prop;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/case-map.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/case-map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.dashToCamelCase = dashToCamelCase;
  _exports.camelToDashCase = camelToDashCase;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var caseMap = {};
  var DASH_TO_CAMEL = /-[a-z]/g;
  var CAMEL_TO_DASH = /([A-Z])/g;
  /**
   * Module with utilities for converting between "dash-case" and "camelCase"
   * identifiers.
   *
   * @summary Module that provides utilities for converting between "dash-case"
   *   and "camelCase".
   */

  "TODO(modulizer): A namespace named Polymer.CaseMap was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  /**
   * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
   * (e.g. `fooBarBaz`).
   *
   * @param {string} dash Dash-case identifier
   * @return {string} Camel-case representation of the identifier
   */

  function dashToCamelCase(dash) {
    return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
      return m[1].toUpperCase();
    }));
  }
  /**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */


  function camelToDashCase(camel) {
    return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/debounce.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/debounce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ./mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js"), __webpack_require__(/*! ./async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _mixin, _async) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Debouncer = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @summary Collapse multiple callbacks into one invocation after a timer.
   */
  var Debouncer =
  /*#__PURE__*/
  function () {
    function Debouncer() {
      babelHelpers.classCallCheck(this, Debouncer);
      this._asyncModule = null;
      this._callback = null;
      this._timer = null;
    }
    /**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */


    babelHelpers.createClass(Debouncer, [{
      key: "setConfig",
      value: function setConfig(asyncModule, callback) {
        var _this = this;

        this._asyncModule = asyncModule;
        this._callback = callback;
        this._timer = this._asyncModule.run(function () {
          _this._timer = null;

          _this._callback();
        });
      }
      /**
       * Cancels an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */

    }, {
      key: "cancel",
      value: function cancel() {
        if (this.isActive()) {
          this._asyncModule.cancel(this._timer);

          this._timer = null;
        }
      }
      /**
       * Flushes an active debouncer and returns a reference to itself.
       *
       * @return {void}
       */

    }, {
      key: "flush",
      value: function flush() {
        if (this.isActive()) {
          this.cancel();

          this._callback();
        }
      }
      /**
       * Returns true if the debouncer is active.
       *
       * @return {boolean} True if active.
       */

    }, {
      key: "isActive",
      value: function isActive() {
        return this._timer != null;
      }
      /**
       * Creates a debouncer if no debouncer is passed as a parameter
       * or it cancels an active debouncer otherwise. The following
       * example shows how a debouncer can be called multiple times within a
       * microtask and "debounced" such that the provided callback function is
       * called once. Add this method to a custom element:
       *
       * ```js
       * import {microtask} from '@polymer/polymer/lib/utils/async.js';
       * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
       * // ...
       *
       * _debounceWork() {
       *   this._debounceJob = Debouncer.debounce(this._debounceJob,
       *       microTask, () => this._doWork());
       * }
       * ```
       *
       * If the `_debounceWork` method is called multiple times within the same
       * microtask, the `_doWork` function will be called only once at the next
       * microtask checkpoint.
       *
       * Note: In testing it is often convenient to avoid asynchrony. To accomplish
       * this with a debouncer, you can use `enqueueDebouncer` and
       * `flush`. For example, extend the above example by adding
       * `enqueueDebouncer(this._debounceJob)` at the end of the
       * `_debounceWork` method. Then in a test, call `flush` to ensure
       * the debouncer has completed.
       *
       * @param {Debouncer?} debouncer Debouncer object.
       * @param {!AsyncInterface} asyncModule Object with Async interface
       * @param {function()} callback Callback to run.
       * @return {!Debouncer} Returns a debouncer object.
       */

    }], [{
      key: "debounce",
      value: function debounce(debouncer, asyncModule, callback) {
        if (babelHelpers.instanceof(debouncer, Debouncer)) {
          debouncer.cancel();
        } else {
          debouncer = new Debouncer();
        }

        debouncer.setConfig(asyncModule, callback);
        return debouncer;
      }
    }]);
    return Debouncer;
  }();

  _exports.Debouncer = Debouncer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ./array-splice.js */ "./node_modules/@polymer/polymer/lib/utils/array-splice.js"), __webpack_require__(/*! ./async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _arraySplice, _async) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.FlattenedNodesObserver = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Returns true if `node` is a slot element
   * @param {Node} node Node to test.
   * @return {boolean} Returns true if the given `node` is a slot
   * @private
   */
  function isSlot(node) {
    return node.localName === 'slot';
  }
  /**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */


  var FlattenedNodesObserver =
  /*#__PURE__*/
  function () {
    babelHelpers.createClass(FlattenedNodesObserver, null, [{
      key: "getFlattenedNodes",

      /**
       * Returns the list of flattened nodes for the given `node`.
       * This list consists of a node's children and, for any children
       * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
       * For example, if the observed node has children `<a></a><slot></slot><b></b>`
       * and the `<slot>` has one `<div>` assigned to it, then the flattened
       * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
       * `<slot>` elements assigned to it, these are flattened as well.
       *
       * @param {HTMLElement|HTMLSlotElement} node The node for which to return the list of flattened nodes.
       * @return {Array} The list of flattened nodes for the given `node`.
      */
      value: function getFlattenedNodes(node) {
        if (isSlot(node)) {
          node =
          /** @type {HTMLSlotElement} */
          node; // eslint-disable-line no-self-assign

          return node.assignedNodes({
            flatten: true
          });
        } else {
          return Array.from(node.childNodes).map(function (node) {
            if (isSlot(node)) {
              node =
              /** @type {HTMLSlotElement} */
              node; // eslint-disable-line no-self-assign

              return node.assignedNodes({
                flatten: true
              });
            } else {
              return [node];
            }
          }).reduce(function (a, b) {
            return a.concat(b);
          }, []);
        }
      }
      /**
       * @param {Element} target Node on which to listen for changes.
       * @param {?function(!Element, { target: !Element, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
       * or removals from the target's list of flattened nodes.
      */

    }]);

    function FlattenedNodesObserver(target, callback) {
      var _this = this;

      babelHelpers.classCallCheck(this, FlattenedNodesObserver);

      /**
       * @type {MutationObserver}
       * @private
       */
      this._shadyChildrenObserver = null;
      /**
       * @type {MutationObserver}
       * @private
       */

      this._nativeChildrenObserver = null;
      this._connected = false;
      /**
       * @type {Element}
       * @private
       */

      this._target = target;
      this.callback = callback;
      this._effectiveNodes = [];
      this._observer = null;
      this._scheduled = false;
      /**
       * @type {function()}
       * @private
       */

      this._boundSchedule = function () {
        _this._schedule();
      };

      this.connect();

      this._schedule();
    }
    /**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */


    babelHelpers.createClass(FlattenedNodesObserver, [{
      key: "connect",
      value: function connect() {
        var _this2 = this;

        if (isSlot(this._target)) {
          this._listenSlots([this._target]);
        } else if (this._target.children) {
          this._listenSlots(this._target.children);

          if (window.ShadyDOM) {
            this._shadyChildrenObserver = ShadyDOM.observeChildren(this._target, function (mutations) {
              _this2._processMutations(mutations);
            });
          } else {
            this._nativeChildrenObserver = new MutationObserver(function (mutations) {
              _this2._processMutations(mutations);
            });

            this._nativeChildrenObserver.observe(this._target, {
              childList: true
            });
          }
        }

        this._connected = true;
      }
      /**
       * Deactivates the flattened nodes observer. After calling this method
       * the observer callback will not be called when changes to flattened nodes
       * occur. The `connect` method may be subsequently called to reactivate
       * the observer.
       *
       * @return {void}
       */

    }, {
      key: "disconnect",
      value: function disconnect() {
        if (isSlot(this._target)) {
          this._unlistenSlots([this._target]);
        } else if (this._target.children) {
          this._unlistenSlots(this._target.children);

          if (window.ShadyDOM && this._shadyChildrenObserver) {
            ShadyDOM.unobserveChildren(this._shadyChildrenObserver);
            this._shadyChildrenObserver = null;
          } else if (this._nativeChildrenObserver) {
            this._nativeChildrenObserver.disconnect();

            this._nativeChildrenObserver = null;
          }
        }

        this._connected = false;
      }
      /**
       * @return {void}
       * @private
       */

    }, {
      key: "_schedule",
      value: function _schedule() {
        var _this3 = this;

        if (!this._scheduled) {
          this._scheduled = true;

          _async.microTask.run(function () {
            return _this3.flush();
          });
        }
      }
      /**
       * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
       * @return {void}
       * @private
       */

    }, {
      key: "_processMutations",
      value: function _processMutations(mutations) {
        this._processSlotMutations(mutations);

        this.flush();
      }
      /**
       * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
       * @return {void}
       * @private
       */

    }, {
      key: "_processSlotMutations",
      value: function _processSlotMutations(mutations) {
        if (mutations) {
          for (var i = 0; i < mutations.length; i++) {
            var mutation = mutations[i];

            if (mutation.addedNodes) {
              this._listenSlots(mutation.addedNodes);
            }

            if (mutation.removedNodes) {
              this._unlistenSlots(mutation.removedNodes);
            }
          }
        }
      }
      /**
       * Flushes the observer causing any pending changes to be immediately
       * delivered the observer callback. By default these changes are delivered
       * asynchronously at the next microtask checkpoint.
       *
       * @return {boolean} Returns true if any pending changes caused the observer
       * callback to run.
       */

    }, {
      key: "flush",
      value: function flush() {
        if (!this._connected) {
          return false;
        }

        if (window.ShadyDOM) {
          ShadyDOM.flush();
        }

        if (this._nativeChildrenObserver) {
          this._processSlotMutations(this._nativeChildrenObserver.takeRecords());
        } else if (this._shadyChildrenObserver) {
          this._processSlotMutations(this._shadyChildrenObserver.takeRecords());
        }

        this._scheduled = false;
        var info = {
          target: this._target,
          addedNodes: [],
          removedNodes: []
        };
        var newNodes = this.constructor.getFlattenedNodes(this._target);
        var splices = (0, _arraySplice.calculateSplices)(newNodes, this._effectiveNodes); // process removals

        for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
          for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
            info.removedNodes.push(n);
          }
        } // process adds


        for (var _i = 0, _s; _i < splices.length && (_s = splices[_i]); _i++) {
          for (var _j = _s.index; _j < _s.index + _s.addedCount; _j++) {
            info.addedNodes.push(newNodes[_j]);
          }
        } // update cache


        this._effectiveNodes = newNodes;
        var didFlush = false;

        if (info.addedNodes.length || info.removedNodes.length) {
          didFlush = true;
          this.callback.call(this._target, info);
        }

        return didFlush;
      }
      /**
       * @param {!Array<Element|Node>|!NodeList<Node>} nodeList Nodes that could change
       * @return {void}
       * @private
       */

    }, {
      key: "_listenSlots",
      value: function _listenSlots(nodeList) {
        for (var i = 0; i < nodeList.length; i++) {
          var n = nodeList[i];

          if (isSlot(n)) {
            n.addEventListener('slotchange', this._boundSchedule);
          }
        }
      }
      /**
       * @param {!Array<Element|Node>|!NodeList<Node>} nodeList Nodes that could change
       * @return {void}
       * @private
       */

    }, {
      key: "_unlistenSlots",
      value: function _unlistenSlots(nodeList) {
        for (var i = 0; i < nodeList.length; i++) {
          var n = nodeList[i];

          if (isSlot(n)) {
            n.removeEventListener('slotchange', this._boundSchedule);
          }
        }
      }
    }]);
    return FlattenedNodesObserver;
  }();

  _exports.FlattenedNodesObserver = FlattenedNodesObserver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/flush.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/flush.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.flush = _exports.enqueueDebouncer = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var debouncerQueue = [];
  /**
   * Adds a `Debouncer` to a list of globally flushable tasks.
   *
   * @param {!Debouncer} debouncer Debouncer to enqueue
   * @return {void}
   */

  var enqueueDebouncer = function enqueueDebouncer(debouncer) {
    debouncerQueue.push(debouncer);
  };

  _exports.enqueueDebouncer = enqueueDebouncer;

  function flushDebouncers() {
    var didFlush = Boolean(debouncerQueue.length);

    while (debouncerQueue.length) {
      try {
        debouncerQueue.shift().flush();
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    return didFlush;
  }
  /**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */


  var flush = function flush() {
    var shadyDOM, debouncers;

    do {
      shadyDOM = window.ShadyDOM && ShadyDOM.flush();

      if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
        window.ShadyCSS.ScopingShim.flush();
      }

      debouncers = flushDebouncers();
    } while (shadyDOM || debouncers);
  };

  _exports.flush = flush;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/gestures.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/gestures.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ./async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js"), __webpack_require__(/*! ./debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js"), __webpack_require__(/*! ./settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _async, _debounce, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.deepTargetFind = deepTargetFind;
  _exports.addListener = addListener;
  _exports.removeListener = removeListener;
  _exports.register = register;
  _exports.setTouchAction = setTouchAction;
  _exports.prevent = _prevent2;
  _exports.resetMouseCanceller = resetMouseCanceller;
  _exports.remove = _exports.add = _exports.findOriginalTarget = _exports.recognizers = _exports.gestures = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // detect native touch action support
  var HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
  var GESTURE_KEY = '__polymerGestures';
  var HANDLED_OBJ = '__polymerGesturesHandled';
  var TOUCH_ACTION = '__polymerGesturesTouchAction'; // radius for tap and track

  var TAP_DISTANCE = 25;
  var TRACK_DISTANCE = 5; // number of last N track positions to keep

  var TRACK_LENGTH = 2; // Disabling "mouse" handlers for 2500ms is enough

  var MOUSE_TIMEOUT = 2500;
  var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'click']; // an array of bitmask values for mapping MouseEvent.which to MouseEvent.buttons

  var MOUSE_WHICH_TO_BUTTONS = [0, 1, 4, 2];

  var MOUSE_HAS_BUTTONS = function () {
    try {
      return new MouseEvent('test', {
        buttons: 1
      }).buttons === 1;
    } catch (e) {
      return false;
    }
  }();
  /**
   * @param {string} name Possible mouse event name
   * @return {boolean} true if mouse event, false if not
   */


  function isMouseEvent(name) {
    return MOUSE_EVENTS.indexOf(name) > -1;
  }
  /* eslint no-empty: ["error", { "allowEmptyCatch": true }] */
  // check for passive event listeners


  var SUPPORTS_PASSIVE = false;

  (function () {
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          SUPPORTS_PASSIVE = true;
        }
      });
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}
  })();
  /**
   * Generate settings for event listeners, dependant on `passiveTouchGestures`
   *
   * @param {string} eventName Event name to determine if `{passive}` option is
   *   needed
   * @return {{passive: boolean} | undefined} Options to use for addEventListener
   *   and removeEventListener
   */


  function PASSIVE_TOUCH(eventName) {
    if (isMouseEvent(eventName) || eventName === 'touchend') {
      return;
    }

    if (HAS_NATIVE_TA && SUPPORTS_PASSIVE && _settings.passiveTouchGestures) {
      return {
        passive: true
      };
    } else {
      return;
    }
  } // Check for touch-only devices


  var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);

  var GestureRecognizer = function GestureRecognizer() {}; // eslint-disable-line no-unused-vars

  /** @type {function(): void} */


  GestureRecognizer.prototype.reset;
  /** @type {function(MouseEvent): void | undefined} */

  GestureRecognizer.prototype.mousedown;
  /** @type {(function(MouseEvent): void | undefined)} */

  GestureRecognizer.prototype.mousemove;
  /** @type {(function(MouseEvent): void | undefined)} */

  GestureRecognizer.prototype.mouseup;
  /** @type {(function(TouchEvent): void | undefined)} */

  GestureRecognizer.prototype.touchstart;
  /** @type {(function(TouchEvent): void | undefined)} */

  GestureRecognizer.prototype.touchmove;
  /** @type {(function(TouchEvent): void | undefined)} */

  GestureRecognizer.prototype.touchend;
  /** @type {(function(MouseEvent): void | undefined)} */

  GestureRecognizer.prototype.click; // keep track of any labels hit by the mouseCanceller

  /** @type {!Array<!HTMLLabelElement>} */

  var clickedLabels = [];
  /** @type {!Object<boolean>} */

  var labellable = {
    'button': true,
    'input': true,
    'keygen': true,
    'meter': true,
    'output': true,
    'textarea': true,
    'progress': true,
    'select': true
  };
  /**
   * @param {HTMLElement} el Element to check labelling status
   * @return {boolean} element can have labels
   */

  function canBeLabelled(el) {
    return labellable[el.localName] || false;
  }
  /**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */


  function matchingLabels(el) {
    var labels = Array.prototype.slice.call(
    /** @type {HTMLInputElement} */
    el.labels || []); // IE doesn't have `labels` and Safari doesn't populate `labels`
    // if element is in a shadowroot.
    // In this instance, finding the non-ancestor labels is enough,
    // as the mouseCancellor code will handle ancstor labels

    if (!labels.length) {
      labels = [];
      var root = el.getRootNode(); // if there is an id on `el`, check for all labels with a matching `for` attribute

      if (el.id) {
        var matching = root.querySelectorAll("label[for = ".concat(el.id, "]"));

        for (var i = 0; i < matching.length; i++) {
          labels.push(
          /** @type {!HTMLLabelElement} */
          matching[i]);
        }
      }
    }

    return labels;
  } // touch will make synthetic mouse events
  // `preventDefault` on touchend will cancel them,
  // but this breaks `<input>` focus and link clicks
  // disable mouse handlers for MOUSE_TIMEOUT ms after
  // a touchend to ignore synthetic mouse events


  var mouseCanceller = function mouseCanceller(mouseEvent) {
    // Check for sourceCapabilities, used to distinguish synthetic events
    // if mouseEvent did not come from a device that fires touch events,
    // it was made by a real mouse and should be counted
    // http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
    var sc = mouseEvent.sourceCapabilities;

    if (sc && !sc.firesTouchEvents) {
      return;
    } // skip synthetic mouse events


    mouseEvent[HANDLED_OBJ] = {
      skip: true
    }; // disable "ghost clicks"

    if (mouseEvent.type === 'click') {
      var clickFromLabel = false;
      var path = mouseEvent.composedPath && mouseEvent.composedPath();

      if (path) {
        for (var i = 0; i < path.length; i++) {
          if (path[i].nodeType === Node.ELEMENT_NODE) {
            if (path[i].localName === 'label') {
              clickedLabels.push(path[i]);
            } else if (canBeLabelled(path[i])) {
              var ownerLabels = matchingLabels(path[i]); // check if one of the clicked labels is labelling this element

              for (var j = 0; j < ownerLabels.length; j++) {
                clickFromLabel = clickFromLabel || clickedLabels.indexOf(ownerLabels[j]) > -1;
              }
            }
          }

          if (path[i] === POINTERSTATE.mouse.target) {
            return;
          }
        }
      } // if one of the clicked labels was labelling the target element,
      // this is not a ghost click


      if (clickFromLabel) {
        return;
      }

      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();
    }
  };
  /**
   * @param {boolean=} setup True to add, false to remove.
   * @return {void}
   */


  function setupTeardownMouseCanceller(setup) {
    var events = IS_TOUCH_ONLY ? ['click'] : MOUSE_EVENTS;

    for (var i = 0, en; i < events.length; i++) {
      en = events[i];

      if (setup) {
        // reset clickLabels array
        clickedLabels.length = 0;
        document.addEventListener(en, mouseCanceller, true);
      } else {
        document.removeEventListener(en, mouseCanceller, true);
      }
    }
  }

  function ignoreMouse(e) {
    if (!POINTERSTATE.mouse.mouseIgnoreJob) {
      setupTeardownMouseCanceller(true);
    }

    var unset = function unset() {
      setupTeardownMouseCanceller();
      POINTERSTATE.mouse.target = null;
      POINTERSTATE.mouse.mouseIgnoreJob = null;
    };

    POINTERSTATE.mouse.target = e.composedPath()[0];
    POINTERSTATE.mouse.mouseIgnoreJob = _debounce.Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob, _async.timeOut.after(MOUSE_TIMEOUT), unset);
  }
  /**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */


  function hasLeftMouseButton(ev) {
    var type = ev.type; // exit early if the event is not a mouse event

    if (!isMouseEvent(type)) {
      return false;
    } // ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
    // instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)


    if (type === 'mousemove') {
      // allow undefined for testing events
      var buttons = ev.buttons === undefined ? 1 : ev.buttons;

      if (babelHelpers.instanceof(ev, window.MouseEvent) && !MOUSE_HAS_BUTTONS) {
        buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
      } // buttons is a bitmask, check that the left button bit is set (1)


      return Boolean(buttons & 1);
    } else {
      // allow undefined for testing events
      var button = ev.button === undefined ? 0 : ev.button; // ev.button is 0 in mousedown/mouseup/click for left button activation

      return button === 0;
    }
  }

  function isSyntheticClick(ev) {
    if (ev.type === 'click') {
      // ev.detail is 0 for HTMLElement.click in most browsers
      if (ev.detail === 0) {
        return true;
      } // in the worst case, check that the x/y position of the click is within
      // the bounding box of the target of the event
      // Thanks IE 10 >:(


      var t = _findOriginalTarget(ev); // make sure the target of the event is an element so we can use getBoundingClientRect,
      // if not, just assume it is a synthetic click


      if (!t.nodeType ||
      /** @type {Element} */
      t.nodeType !== Node.ELEMENT_NODE) {
        return true;
      }

      var bcr =
      /** @type {Element} */
      t.getBoundingClientRect(); // use page x/y to account for scrolling

      var x = ev.pageX,
          y = ev.pageY; // ev is a synthetic click if the position is outside the bounding box of the target

      return !(x >= bcr.left && x <= bcr.right && y >= bcr.top && y <= bcr.bottom);
    }

    return false;
  }

  var POINTERSTATE = {
    mouse: {
      target: null,
      mouseIgnoreJob: null
    },
    touch: {
      x: 0,
      y: 0,
      id: -1,
      scrollDecided: false
    }
  };

  function firstTouchAction(ev) {
    var ta = 'auto';
    var path = ev.composedPath && ev.composedPath();

    if (path) {
      for (var i = 0, n; i < path.length; i++) {
        n = path[i];

        if (n[TOUCH_ACTION]) {
          ta = n[TOUCH_ACTION];
          break;
        }
      }
    }

    return ta;
  }

  function trackDocument(stateObj, movefn, upfn) {
    stateObj.movefn = movefn;
    stateObj.upfn = upfn;
    document.addEventListener('mousemove', movefn);
    document.addEventListener('mouseup', upfn);
  }

  function untrackDocument(stateObj) {
    document.removeEventListener('mousemove', stateObj.movefn);
    document.removeEventListener('mouseup', stateObj.upfn);
    stateObj.movefn = null;
    stateObj.upfn = null;
  } // use a document-wide touchend listener to start the ghost-click prevention mechanism
  // Use passive event listeners, if supported, to not affect scrolling performance


  document.addEventListener('touchend', ignoreMouse, SUPPORTS_PASSIVE ? {
    passive: true
  } : false);
  /**
   * Module for adding listeners to a node for the following normalized
   * cross-platform "gesture" events:
   * - `down` - mouse or touch went down
   * - `up` - mouse or touch went up
   * - `tap` - mouse click or finger tap
   * - `track` - mouse drag or touch move
   *
   * @summary Module for adding cross-platform gesture event listeners.
   */

  "TODO(modulizer): A namespace named Polymer.Gestures was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  var gestures = {};
  _exports.gestures = gestures;
  var recognizers = [];
  /**
   * Finds the element rendered on the screen at the provided coordinates.
   *
   * Similar to `document.elementFromPoint`, but pierces through
   * shadow roots.
   *
   * @param {number} x Horizontal pixel coordinate
   * @param {number} y Vertical pixel coordinate
   * @return {Element} Returns the deepest shadowRoot inclusive element
   * found at the screen position given.
   */

  _exports.recognizers = recognizers;

  function deepTargetFind(x, y) {
    var node = document.elementFromPoint(x, y);
    var next = node; // this code path is only taken when native ShadowDOM is used
    // if there is a shadowroot, it may have a node at x/y
    // if there is not a shadowroot, exit the loop

    while (next && next.shadowRoot && !window.ShadyDOM) {
      // if there is a node at x/y in the shadowroot, look deeper
      var oldNext = next;
      next = next.shadowRoot.elementFromPoint(x, y); // on Safari, elementFromPoint may return the shadowRoot host

      if (oldNext === next) {
        break;
      }

      if (next) {
        node = next;
      }
    }

    return node;
  }
  /**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event} ev Event.
   * @return {EventTarget} Returns the event target.
   */


  function _findOriginalTarget(ev) {
    // shadowdom
    if (ev.composedPath) {
      var targets =
      /** @type {!Array<!EventTarget>} */
      ev.composedPath(); // It shouldn't be, but sometimes targets is empty (window on Safari).

      return targets.length > 0 ? targets[0] : ev.target;
    } // shadydom


    return ev.target;
  }
  /**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */


  function _handleNative(ev) {
    var handled;
    var type = ev.type;
    var node = ev.currentTarget;
    var gobj = node[GESTURE_KEY];

    if (!gobj) {
      return;
    }

    var gs = gobj[type];

    if (!gs) {
      return;
    }

    if (!ev[HANDLED_OBJ]) {
      ev[HANDLED_OBJ] = {};

      if (type.slice(0, 5) === 'touch') {
        ev =
        /** @type {TouchEvent} */
        ev; // eslint-disable-line no-self-assign

        var t = ev.changedTouches[0];

        if (type === 'touchstart') {
          // only handle the first finger
          if (ev.touches.length === 1) {
            POINTERSTATE.touch.id = t.identifier;
          }
        }

        if (POINTERSTATE.touch.id !== t.identifier) {
          return;
        }

        if (!HAS_NATIVE_TA) {
          if (type === 'touchstart' || type === 'touchmove') {
            _handleTouchAction(ev);
          }
        }
      }
    }

    handled = ev[HANDLED_OBJ]; // used to ignore synthetic mouse events

    if (handled.skip) {
      return;
    } // reset recognizer state


    for (var i = 0, r; i < recognizers.length; i++) {
      r = recognizers[i];

      if (gs[r.name] && !handled[r.name]) {
        if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
          r.reset();
        }
      }
    } // enforce gesture recognizer order


    for (var _i = 0, _r; _i < recognizers.length; _i++) {
      _r = recognizers[_i];

      if (gs[_r.name] && !handled[_r.name]) {
        handled[_r.name] = true;

        _r[type](ev);
      }
    }
  }
  /**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */


  function _handleTouchAction(ev) {
    var t = ev.changedTouches[0];
    var type = ev.type;

    if (type === 'touchstart') {
      POINTERSTATE.touch.x = t.clientX;
      POINTERSTATE.touch.y = t.clientY;
      POINTERSTATE.touch.scrollDecided = false;
    } else if (type === 'touchmove') {
      if (POINTERSTATE.touch.scrollDecided) {
        return;
      }

      POINTERSTATE.touch.scrollDecided = true;
      var ta = firstTouchAction(ev);
      var _prevent = false;
      var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
      var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);

      if (!ev.cancelable) {// scrolling is happening
      } else if (ta === 'none') {
        _prevent = true;
      } else if (ta === 'pan-x') {
        _prevent = dy > dx;
      } else if (ta === 'pan-y') {
        _prevent = dx > dy;
      }

      if (_prevent) {
        ev.preventDefault();
      } else {
        _prevent('track');
      }
    }
  }
  /**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!Node} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   * @this {Gestures}
   */


  function addListener(node, evType, handler) {
    if (gestures[evType]) {
      _add(node, evType, handler);

      return true;
    }

    return false;
  }
  /**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!Node} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   * @this {Gestures}
   */


  function removeListener(node, evType, handler) {
    if (gestures[evType]) {
      _remove(node, evType, handler);

      return true;
    }

    return false;
  }
  /**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!HTMLElement} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   * @this {Gestures}
   */


  function _add(node, evType, handler) {
    var recognizer = gestures[evType];
    var deps = recognizer.deps;
    var name = recognizer.name;
    var gobj = node[GESTURE_KEY];

    if (!gobj) {
      node[GESTURE_KEY] = gobj = {};
    }

    for (var i = 0, dep, gd; i < deps.length; i++) {
      dep = deps[i]; // don't add mouse handlers on iOS because they cause gray selection overlays

      if (IS_TOUCH_ONLY && isMouseEvent(dep) && dep !== 'click') {
        continue;
      }

      gd = gobj[dep];

      if (!gd) {
        gobj[dep] = gd = {
          _count: 0
        };
      }

      if (gd._count === 0) {
        node.addEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
      }

      gd[name] = (gd[name] || 0) + 1;
      gd._count = (gd._count || 0) + 1;
    }

    node.addEventListener(evType, handler);

    if (recognizer.touchAction) {
      setTouchAction(node, recognizer.touchAction);
    }
  }
  /**
   * automate event listener removal for native events
   *
   * @private
   * @param {!HTMLElement} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(Event?)} handler Event handler function.
   * @return {void}
   * @this {Gestures}
   */


  function _remove(node, evType, handler) {
    var recognizer = gestures[evType];
    var deps = recognizer.deps;
    var name = recognizer.name;
    var gobj = node[GESTURE_KEY];

    if (gobj) {
      for (var i = 0, dep, gd; i < deps.length; i++) {
        dep = deps[i];
        gd = gobj[dep];

        if (gd && gd[name]) {
          gd[name] = (gd[name] || 1) - 1;
          gd._count = (gd._count || 1) - 1;

          if (gd._count === 0) {
            node.removeEventListener(dep, _handleNative, PASSIVE_TOUCH(dep));
          }
        }
      }
    }

    node.removeEventListener(evType, handler);
  }
  /**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   * @this {Gestures}
   */


  function register(recog) {
    recognizers.push(recog);

    for (var i = 0; i < recog.emits.length; i++) {
      gestures[recog.emits[i]] = recog;
    }
  }
  /**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   * @this {Gestures}
   */


  function _findRecognizerByEvent(evName) {
    for (var i = 0, r; i < recognizers.length; i++) {
      r = recognizers[i];

      for (var j = 0, n; j < r.emits.length; j++) {
        n = r.emits[j];

        if (n === evName) {
          return r;
        }
      }
    }

    return null;
  }
  /**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!Element} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */


  function setTouchAction(node, value) {
    if (HAS_NATIVE_TA) {
      // NOTE: add touchAction async so that events can be added in
      // custom element constructors. Otherwise we run afoul of custom
      // elements restriction against settings attributes (style) in the
      // constructor.
      _async.microTask.run(function () {
        node.style.touchAction = value;
      });
    }

    node[TOUCH_ACTION] = value;
  }
  /**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */


  function _fire2(target, type, detail) {
    var ev = new Event(type, {
      bubbles: true,
      cancelable: true,
      composed: true
    });
    ev.detail = detail;
    target.dispatchEvent(ev); // forward `preventDefault` in a clean way

    if (ev.defaultPrevented) {
      var preventer = detail.preventer || detail.sourceEvent;

      if (preventer && preventer.preventDefault) {
        preventer.preventDefault();
      }
    }
  }
  /**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   * @this {Gestures}
   */


  function _prevent2(evName) {
    var recognizer = _findRecognizerByEvent(evName);

    if (recognizer.info) {
      recognizer.info.prevent = true;
    }
  }
  /**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */


  function resetMouseCanceller() {
    if (POINTERSTATE.mouse.mouseIgnoreJob) {
      POINTERSTATE.mouse.mouseIgnoreJob.flush();
    }
  }
  /* eslint-disable valid-jsdoc */


  register({
    name: 'downup',
    deps: ['mousedown', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['down', 'up'],
    info: {
      movefn: null,
      upfn: null
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function reset() {
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function mousedown(e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }

      var t = _findOriginalTarget(e);

      var self = this;

      var movefn = function movefn(e) {
        if (!hasLeftMouseButton(e)) {
          self._fire('up', t, e);

          untrackDocument(self.info);
        }
      };

      var upfn = function upfn(e) {
        if (hasLeftMouseButton(e)) {
          self._fire('up', t, e);
        }

        untrackDocument(self.info);
      };

      trackDocument(this.info, movefn, upfn);

      this._fire('down', t, e);
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function touchstart(e) {
      this._fire('down', _findOriginalTarget(e), e.changedTouches[0], e);
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function touchend(e) {
      this._fire('up', _findOriginalTarget(e), e.changedTouches[0], e);
    },

    /**
     * @param {string} type
     * @param {!EventTarget} target
     * @param {Event} event
     * @param {Function} preventer
     * @return {void}
     */
    _fire: function _fire(type, target, event, preventer) {
      _fire2(target, type, {
        x: event.clientX,
        y: event.clientY,
        sourceEvent: event,
        preventer: preventer,
        prevent: function prevent(e) {
          return _prevent2(e);
        }
      });
    }
  });
  register({
    name: 'track',
    touchAction: 'none',
    deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['mouseup', 'touchend']
    },
    emits: ['track'],
    info: {
      x: 0,
      y: 0,
      state: 'start',
      started: false,
      moves: [],

      /** @this {GestureRecognizer} */
      addMove: function addMove(move) {
        if (this.moves.length > TRACK_LENGTH) {
          this.moves.shift();
        }

        this.moves.push(move);
      },
      movefn: null,
      upfn: null,
      prevent: false
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function reset() {
      this.info.state = 'start';
      this.info.started = false;
      this.info.moves = [];
      this.info.x = 0;
      this.info.y = 0;
      this.info.prevent = false;
      untrackDocument(this.info);
    },

    /**
     * @this {GestureRecognizer}
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    hasMovedEnough: function hasMovedEnough(x, y) {
      if (this.info.prevent) {
        return false;
      }

      if (this.info.started) {
        return true;
      }

      var dx = Math.abs(this.info.x - x);
      var dy = Math.abs(this.info.y - y);
      return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function mousedown(e) {
      if (!hasLeftMouseButton(e)) {
        return;
      }

      var t = _findOriginalTarget(e);

      var self = this;

      var movefn = function movefn(e) {
        var x = e.clientX,
            y = e.clientY;

        if (self.hasMovedEnough(x, y)) {
          // first move is 'start', subsequent moves are 'move', mouseup is 'end'
          self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';

          if (self.info.state === 'start') {
            // if and only if tracking, always prevent tap
            _prevent2('tap');
          }

          self.info.addMove({
            x: x,
            y: y
          });

          if (!hasLeftMouseButton(e)) {
            // always _fire "end"
            self.info.state = 'end';
            untrackDocument(self.info);
          }

          self._fire(t, e);

          self.info.started = true;
        }
      };

      var upfn = function upfn(e) {
        if (self.info.started) {
          movefn(e);
        } // remove the temporary listeners


        untrackDocument(self.info);
      }; // add temporary document listeners as mouse retargets


      trackDocument(this.info, movefn, upfn);
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function touchstart(e) {
      var ct = e.changedTouches[0];
      this.info.x = ct.clientX;
      this.info.y = ct.clientY;
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchmove: function touchmove(e) {
      var t = _findOriginalTarget(e);

      var ct = e.changedTouches[0];
      var x = ct.clientX,
          y = ct.clientY;

      if (this.hasMovedEnough(x, y)) {
        if (this.info.state === 'start') {
          // if and only if tracking, always prevent tap
          _prevent2('tap');
        }

        this.info.addMove({
          x: x,
          y: y
        });

        this._fire(t, ct);

        this.info.state = 'track';
        this.info.started = true;
      }
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function touchend(e) {
      var t = _findOriginalTarget(e);

      var ct = e.changedTouches[0]; // only trackend if track was started and not aborted

      if (this.info.started) {
        // reset started state on up
        this.info.state = 'end';
        this.info.addMove({
          x: ct.clientX,
          y: ct.clientY
        });

        this._fire(t, ct, e);
      }
    },

    /**
     * @this {GestureRecognizer}
     * @param {!EventTarget} target
     * @param {Touch} touch
     * @return {void}
     */
    _fire: function _fire(target, touch) {
      var secondlast = this.info.moves[this.info.moves.length - 2];
      var lastmove = this.info.moves[this.info.moves.length - 1];
      var dx = lastmove.x - this.info.x;
      var dy = lastmove.y - this.info.y;
      var ddx,
          ddy = 0;

      if (secondlast) {
        ddx = lastmove.x - secondlast.x;
        ddy = lastmove.y - secondlast.y;
      }

      _fire2(target, 'track', {
        state: this.info.state,
        x: touch.clientX,
        y: touch.clientY,
        dx: dx,
        dy: dy,
        ddx: ddx,
        ddy: ddy,
        sourceEvent: touch,
        hover: function hover() {
          return deepTargetFind(touch.clientX, touch.clientY);
        }
      });
    }
  });
  register({
    name: 'tap',
    deps: ['mousedown', 'click', 'touchstart', 'touchend'],
    flow: {
      start: ['mousedown', 'touchstart'],
      end: ['click', 'touchend']
    },
    emits: ['tap'],
    info: {
      x: NaN,
      y: NaN,
      prevent: false
    },

    /**
     * @this {GestureRecognizer}
     * @return {void}
     */
    reset: function reset() {
      this.info.x = NaN;
      this.info.y = NaN;
      this.info.prevent = false;
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    save: function save(e) {
      this.info.x = e.clientX;
      this.info.y = e.clientY;
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    mousedown: function mousedown(e) {
      if (hasLeftMouseButton(e)) {
        this.save(e);
      }
    },

    /**
     * @this {GestureRecognizer}
     * @param {MouseEvent} e
     * @return {void}
     */
    click: function click(e) {
      if (hasLeftMouseButton(e)) {
        this.forward(e);
      }
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchstart: function touchstart(e) {
      this.save(e.changedTouches[0], e);
    },

    /**
     * @this {GestureRecognizer}
     * @param {TouchEvent} e
     * @return {void}
     */
    touchend: function touchend(e) {
      this.forward(e.changedTouches[0], e);
    },

    /**
     * @this {GestureRecognizer}
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */
    forward: function forward(e, preventer) {
      var dx = Math.abs(e.clientX - this.info.x);
      var dy = Math.abs(e.clientY - this.info.y); // find original target from `preventer` for TouchEvents, or `e` for MouseEvents

      var t = _findOriginalTarget(preventer || e);

      if (!t || t.disabled) {
        return;
      } // dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`


      if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
        // prevent taps from being generated if an event has canceled them
        if (!this.info.prevent) {
          _fire2(t, 'tap', {
            x: e.clientX,
            y: e.clientY,
            sourceEvent: e,
            preventer: preventer
          });
        }
      }
    }
  });
  /* eslint-enable valid-jsdoc */

  /** @deprecated */

  var findOriginalTarget = _findOriginalTarget;
  /** @deprecated */

  _exports.findOriginalTarget = findOriginalTarget;
  var add = addListener;
  /** @deprecated */

  _exports.add = add;
  var remove = removeListener;
  _exports.remove = remove;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/html-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/html-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.htmlLiteral = _exports.html = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Class representing a static string value which can be used to filter
   * strings by asseting that they have been created via this class. The
   * `value` property returns the string passed to the constructor.
   */
  var LiteralString =
  /*#__PURE__*/
  function () {
    function LiteralString(string) {
      babelHelpers.classCallCheck(this, LiteralString);

      /** @type {string} */
      this.value = string.toString();
    }
    /**
     * @return {string} LiteralString string value
     */


    babelHelpers.createClass(LiteralString, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }]);
    return LiteralString;
  }();
  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */


  function literalValue(value) {
    if (babelHelpers.instanceof(value, LiteralString)) {
      return (
        /** @type {!LiteralString} */
        value.value
      );
    } else {
      throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value));
    }
  }
  /**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */


  function htmlValue(value) {
    if (babelHelpers.instanceof(value, HTMLTemplateElement)) {
      return (
        /** @type {!HTMLTemplateElement } */
        value.innerHTML
      );
    } else if (babelHelpers.instanceof(value, LiteralString)) {
      return literalValue(value);
    } else {
      throw new Error("non-template value passed to Polymer's html function: ".concat(value));
    }
  }
  /**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */


  var html = function html(strings) {
    var template =
    /** @type {!HTMLTemplateElement} */
    document.createElement('template');

    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    template.innerHTML = values.reduce(function (acc, v, idx) {
      return acc + htmlValue(v) + strings[idx + 1];
    }, strings[0]);
    return template;
  };
  /**
   * An html literal tag that can be used with `html` to compose.
   * a literal string.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>
   *           :host { display: block; }
   *           ${this.styleTemplate()}
   *         </style>
   *         <div class="shadowed">${staticValue}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get styleTemplate() {
   *        return htmlLiteral`.shadowed { background: gray; }`;
   *     }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!LiteralString} Constructed literal string
   */


  _exports.html = html;

  var htmlLiteral = function htmlLiteral(strings) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new LiteralString(values.reduce(function (acc, v, idx) {
      return acc + literalValue(v) + strings[idx + 1];
    }, strings[0]));
  };

  _exports.htmlLiteral = htmlLiteral;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/mixin.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/mixin.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.dedupingMixin = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // unique global id for deduping mixins.
  var dedupeId = 0;
  /**
   * @constructor
   * @extends {Function}
   */

  function MixinFunction() {}
  /** @type {(WeakMap | undefined)} */


  MixinFunction.prototype.__mixinApplications;
  /** @type {(Object | undefined)} */

  MixinFunction.prototype.__mixinSet;
  /* eslint-disable valid-jsdoc */

  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */

  var dedupingMixin = function dedupingMixin(mixin) {
    var mixinApplications =
    /** @type {!MixinFunction} */
    mixin.__mixinApplications;

    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */

      mixin.__mixinApplications = mixinApplications;
    } // maintain a unique id for each mixin


    var mixinDedupeId = dedupeId++;

    function dedupingMixin(base) {
      var baseSet =
      /** @type {!MixinFunction} */
      base.__mixinSet;

      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }

      var map = mixinApplications;
      var extended = map.get(base);

      if (!extended) {
        extended =
        /** @type {!Function} */
        mixin(base);
        map.set(base, extended);
      } // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.


      var mixinSet = Object.create(
      /** @type {!MixinFunction} */
      extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */

      extended.__mixinSet = mixinSet;
      return extended;
    }

    return (
      /** @type {T} */
      dedupingMixin
    );
  };
  /* eslint-enable valid-jsdoc */


  _exports.dedupingMixin = dedupingMixin;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/path.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isPath = isPath;
  _exports.root = root;
  _exports.isAncestor = isAncestor;
  _exports.isDescendant = isDescendant;
  _exports.translate = translate;
  _exports.matches = matches;
  _exports.normalize = normalize;
  _exports.split = split;
  _exports.get = get;
  _exports.set = set;
  _exports.isDeep = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Module with utilities for manipulating structured data path strings.
   *
   * @summary Module with utilities for manipulating structured data path strings.
   */
  "TODO(modulizer): A namespace named Polymer.Path was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * Example:
   *
   * ```
   * isPath('foo.bar.baz') // true
   * isPath('foo')         // false
   * ```
   *
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */

  function isPath(path) {
    return path.indexOf('.') >= 0;
  }
  /**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */


  function root(path) {
    var dotIndex = path.indexOf('.');

    if (dotIndex === -1) {
      return path;
    }

    return path.slice(0, dotIndex);
  }
  /**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */


  function isAncestor(base, path) {
    //     base.startsWith(path + '.');
    return base.indexOf(path + '.') === 0;
  }
  /**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */


  function isDescendant(base, path) {
    //     path.startsWith(base + '.');
    return path.indexOf(base + '.') === 0;
  }
  /**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */


  function translate(base, newBase, path) {
    return newBase + path.slice(base.length);
  }
  /**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   * @this {Path}
   */


  function matches(base, path) {
    return base === path || isAncestor(base, path) || isDescendant(base, path);
  }
  /**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */


  function normalize(path) {
    if (Array.isArray(path)) {
      var parts = [];

      for (var i = 0; i < path.length; i++) {
        var args = path[i].toString().split('.');

        for (var j = 0; j < args.length; j++) {
          parts.push(args[j]);
        }
      }

      return parts.join('.');
    } else {
      return path;
    }
  }
  /**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @this {Path}
   * @suppress {checkTypes}
   */


  function split(path) {
    if (Array.isArray(path)) {
      return normalize(path).split('.');
    }

    return path.toString().split('.');
  }
  /**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   * @this {Path}
   */


  function get(root, path, info) {
    var prop = root;
    var parts = split(path); // Loop over path parts[0..n-1] and dereference

    for (var i = 0; i < parts.length; i++) {
      if (!prop) {
        return;
      }

      var part = parts[i];
      prop = prop[part];
    }

    if (info) {
      info.path = parts.join('.');
    }

    return prop;
  }
  /**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   * @this {Path}
   */


  function set(root, path, value) {
    var prop = root;
    var parts = split(path);
    var last = parts[parts.length - 1];

    if (parts.length > 1) {
      // Loop over path parts[0..n-2] and dereference
      for (var i = 0; i < parts.length - 1; i++) {
        var part = parts[i];
        prop = prop[part];

        if (!prop) {
          return;
        }
      } // Set value to object at end of path


      prop[last] = value;
    } else {
      // Simple property set
      prop[path] = value;
    }

    return parts.join('.');
  }
  /**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */


  var isDeep = isPath;
  _exports.isDeep = isDeep;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/render-status.js":
/*!******************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/render-status.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.beforeNextRender = beforeNextRender;
  _exports.afterNextRender = afterNextRender;
  _exports.flush = flush;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var scheduled = false;
  var beforeRenderQueue = [];
  var afterRenderQueue = [];

  function schedule() {
    scheduled = true; // before next render

    requestAnimationFrame(function () {
      scheduled = false;
      flushQueue(beforeRenderQueue); // after the render

      setTimeout(function () {
        runQueue(afterRenderQueue);
      });
    });
  }

  function flushQueue(queue) {
    while (queue.length) {
      callMethod(queue.shift());
    }
  }

  function runQueue(queue) {
    for (var i = 0, l = queue.length; i < l; i++) {
      callMethod(queue.shift());
    }
  }

  function callMethod(info) {
    var context = info[0];
    var callback = info[1];
    var args = info[2];

    try {
      callback.apply(context, args);
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }

  function flush() {
    while (beforeRenderQueue.length || afterRenderQueue.length) {
      flushQueue(beforeRenderQueue);
      flushQueue(afterRenderQueue);
    }

    scheduled = false;
  }
  /**
   * Module for scheduling flushable pre-render and post-render tasks.
   *
   * @summary Module for scheduling flushable pre-render and post-render tasks.
   */


  "TODO(modulizer): A namespace named Polymer.RenderStatus was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  /**
   * Enqueues a callback which will be run before the next render, at
   * `requestAnimationFrame` timing.
   *
   * This method is useful for enqueuing work that requires DOM measurement,
   * since measurement may not be reliable in custom element callbacks before
   * the first render, as well as for batching measurement tasks in general.
   *
   * Tasks in this queue may be flushed by calling `flush()`.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */

  function beforeNextRender(context, callback, args) {
    if (!scheduled) {
      schedule();
    }

    beforeRenderQueue.push([context, callback, args]);
  }
  /**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */


  function afterNextRender(context, callback, args) {
    if (!scheduled) {
      schedule();
    }

    afterRenderQueue.push([context, callback, args]);
  }
  /**
   * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
   * tasks.
   *
   * @return {void}
   */

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/resolve-url.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.resolveUrl = resolveUrl;
  _exports.resolveCss = resolveCss;
  _exports.pathFromUrl = pathFromUrl;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var CSS_URL_RX = /(url\()([^)]*)(\))/g;
  var ABS_URL = /(^\/)|(^#)|(^[\w-\d]*:)/;
  var workingURL;
  var resolveDoc;
  /**
   * Resolves the given URL against the provided `baseUri'.
   *
   * Note that this function performs no resolution for URLs that start
   * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
   * URL resolution, use `window.URL`.
   *
   * @param {string} url Input URL to resolve
   * @param {?string=} baseURI Base URI to resolve the URL against
   * @return {string} resolved URL
   */

  function resolveUrl(url, baseURI) {
    if (url && ABS_URL.test(url)) {
      return url;
    } // Lazy feature detection.


    if (workingURL === undefined) {
      workingURL = false;

      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        workingURL = u.href === 'http://a/c%20d';
      } catch (e) {// silently fail
      }
    }

    if (!baseURI) {
      baseURI = document.baseURI || window.location.href;
    }

    if (workingURL) {
      return new URL(url, baseURI).href;
    } // Fallback to creating an anchor into a disconnected document.


    if (!resolveDoc) {
      resolveDoc = document.implementation.createHTMLDocument('temp');
      resolveDoc.base = resolveDoc.createElement('base');
      resolveDoc.head.appendChild(resolveDoc.base);
      resolveDoc.anchor = resolveDoc.createElement('a');
      resolveDoc.body.appendChild(resolveDoc.anchor);
    }

    resolveDoc.base.href = baseURI;
    resolveDoc.anchor.href = url;
    return resolveDoc.anchor.href || url;
  }
  /**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */


  function resolveCss(cssText, baseURI) {
    return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
      return pre + '\'' + resolveUrl(url.replace(/["']/g, ''), baseURI) + '\'' + post;
    });
  }
  /**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */


  function pathFromUrl(url) {
    return url.substring(0, url.lastIndexOf('/') + 1);
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/settings.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/settings.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ./resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _resolveUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setPassiveTouchGestures = _exports.passiveTouchGestures = _exports.setSanitizeDOMValue = _exports.sanitizeDOMValue = _exports.setRootPath = _exports.rootPath = _exports.useNativeCustomElements = _exports.useNativeCSSProperties = _exports.useShadow = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var useShadow = !window.ShadyDOM;
  _exports.useShadow = useShadow;
  var useNativeCSSProperties = Boolean(!window.ShadyCSS || window.ShadyCSS.nativeCss);
  _exports.useNativeCSSProperties = useNativeCSSProperties;
  var useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback;
  /**
   * Globally settable property that is automatically assigned to
   * `ElementMixin` instances, useful for binding in templates to
   * make URL's relative to an application's root.  Defaults to the main
   * document URL, but can be overridden by users.  It may be useful to set
   * `rootPath` to provide a stable application mount path when
   * using client side routing.
   */

  _exports.useNativeCustomElements = useNativeCustomElements;
  var rootPath = undefined || (0, _resolveUrl.pathFromUrl)(document.baseURI || window.location.href);
  /**
   * Sets the global rootPath property used by `ElementMixin` and
   * available via `rootPath`.
   *
   * @param {string} path The new root path
   * @return {void}
   */

  _exports.rootPath = rootPath;

  var setRootPath = function setRootPath(path) {
    _exports.rootPath = rootPath = path;
  };
  /**
   * A global callback used to sanitize any value before inserting it into the DOM. The callback signature is:
   *
   *     Polymer = {
   *       sanitizeDOMValue: function(value, name, type, node) { ... }
   *     }
   *
   * Where:
   *
   * `value` is the value to sanitize.
   * `name` is the name of an attribute or property (for example, href).
   * `type` indicates where the value is being inserted: one of property, attribute, or text.
   * `node` is the node where the value is being inserted.
   *
   * @type {(function(*,string,string,Node):*)|undefined}
   */


  _exports.setRootPath = setRootPath;
  var sanitizeDOMValue = undefined;
  /**
   * Sets the global sanitizeDOMValue available via this module's exported
   * `sanitizeDOMValue` variable.
   *
   * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
   * @return {void}
   */

  _exports.sanitizeDOMValue = sanitizeDOMValue;

  var setSanitizeDOMValue = function setSanitizeDOMValue(newSanitizeDOMValue) {
    _exports.sanitizeDOMValue = sanitizeDOMValue = newSanitizeDOMValue;
  };
  /**
   * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
   * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
   * scrolling performance.
   * Defaults to `false` for backwards compatibility.
   */


  _exports.setSanitizeDOMValue = setSanitizeDOMValue;
  var passiveTouchGestures = false;
  /**
   * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
   *
   * @param {boolean} usePassive enable or disable passive touch gestures globally
   * @return {void}
   */

  _exports.passiveTouchGestures = passiveTouchGestures;

  var setPassiveTouchGestures = function setPassiveTouchGestures(usePassive) {
    _exports.passiveTouchGestures = passiveTouchGestures = usePassive;
  };

  _exports.setPassiveTouchGestures = setPassiveTouchGestures;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/style-gather.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/style-gather.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _resolveUrl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.stylesFromModules = stylesFromModules;
  _exports.stylesFromModule = stylesFromModule;
  _exports.stylesFromTemplate = stylesFromTemplate;
  _exports.stylesFromModuleImports = stylesFromModuleImports;
  _exports.cssFromModules = cssFromModules;
  _exports.cssFromModule = cssFromModule;
  _exports.cssFromTemplate = cssFromTemplate;
  _exports.cssFromModuleImports = cssFromModuleImports;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var MODULE_STYLE_LINK_SELECTOR = 'link[rel=import][type~=css]';
  var INCLUDE_ATTR = 'include';
  var SHADY_UNSCOPED_ATTR = 'shady-unscoped';

  function importModule(moduleId) {
    var
    /** DomModule */
    PolymerDomModule = customElements.get('dom-module');

    if (!PolymerDomModule) {
      return null;
    }

    return PolymerDomModule.import(moduleId);
  }

  function styleForImport(importDoc) {
    // NOTE: polyfill affordance.
    // under the HTMLImports polyfill, there will be no 'body',
    // but the import pseudo-doc can be used directly.
    var container = importDoc.body ? importDoc.body : importDoc;
    var importCss = (0, _resolveUrl.resolveCss)(container.textContent, importDoc.baseURI);
    var style = document.createElement('style');
    style.textContent = importCss;
    return style;
  }
  /** @typedef {{assetpath: string}} */


  var templateWithAssetPath; // eslint-disable-line no-unused-vars

  /**
   * Module with utilities for collection CSS text from `<templates>`, external
   * stylesheets, and `dom-module`s.
   *
   * @summary Module with utilities for collection CSS text from various sources.
   */

  "TODO(modulizer): A namespace named Polymer.StyleGather was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  /**
   * Returns a list of <style> elements in a space-separated list of `dom-module`s.
   *
   * @function
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
   * @this {StyleGather}
   */

  function stylesFromModules(moduleIds) {
    var modules = moduleIds.trim().split(/\s+/);
    var styles = [];

    for (var i = 0; i < modules.length; i++) {
      styles.push.apply(styles, babelHelpers.toConsumableArray(stylesFromModule(modules[i])));
    }

    return styles;
  }
  /**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   * @this {StyleGather}
   */


  function stylesFromModule(moduleId) {
    var m = importModule(moduleId);

    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
      return [];
    }

    if (m._styles === undefined) {
      var styles = []; // module imports: <link rel="import" type="css">

      styles.push.apply(styles, babelHelpers.toConsumableArray(_stylesFromModuleImports(m))); // include css from the first template in the module

      var template = m.querySelector('template');

      if (template) {
        styles.push.apply(styles, babelHelpers.toConsumableArray(stylesFromTemplate(template,
        /** @type {templateWithAssetPath} */
        m.assetpath)));
      }

      m._styles = styles;
    }

    return m._styles;
  }
  /**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   * @this {StyleGather}
   */


  function stylesFromTemplate(template, baseURI) {
    if (!template._styles) {
      var styles = []; // if element is a template, get content from its .content

      var e$ = template.content.querySelectorAll('style');

      for (var i = 0; i < e$.length; i++) {
        var e = e$[i]; // support style sharing by allowing styles to "include"
        // other dom-modules that contain styling

        var include = e.getAttribute(INCLUDE_ATTR);

        if (include) {
          styles.push.apply(styles, babelHelpers.toConsumableArray(stylesFromModules(include).filter(function (item, index, self) {
            return self.indexOf(item) === index;
          })));
        }

        if (baseURI) {
          e.textContent = (0, _resolveUrl.resolveCss)(e.textContent, baseURI);
        }

        styles.push(e);
      }

      template._styles = styles;
    }

    return template._styles;
  }
  /**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   * @this {StyleGather}
   */


  function stylesFromModuleImports(moduleId) {
    var m = importModule(moduleId);
    return m ? _stylesFromModuleImports(m) : [];
  }
  /**
   * @this {StyleGather}
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */


  function _stylesFromModuleImports(module) {
    var styles = [];
    var p$ = module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);

    for (var i = 0; i < p$.length; i++) {
      var p = p$[i];

      if (p.import) {
        var importDoc = p.import;
        var unscoped = p.hasAttribute(SHADY_UNSCOPED_ATTR);

        if (unscoped && !importDoc._unscopedStyle) {
          var style = styleForImport(importDoc);
          style.setAttribute(SHADY_UNSCOPED_ATTR, '');
          importDoc._unscopedStyle = style;
        } else if (!importDoc._style) {
          importDoc._style = styleForImport(importDoc);
        }

        styles.push(unscoped ? importDoc._unscopedStyle : importDoc._style);
      }
    }

    return styles;
  }
  /**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   * @this {StyleGather}
   */


  function cssFromModules(moduleIds) {
    var modules = moduleIds.trim().split(/\s+/);
    var cssText = '';

    for (var i = 0; i < modules.length; i++) {
      cssText += cssFromModule(modules[i]);
    }

    return cssText;
  }
  /**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   * @this {StyleGather}
   */


  function cssFromModule(moduleId) {
    var m = importModule(moduleId);

    if (m && m._cssText === undefined) {
      // module imports: <link rel="import" type="css">
      var cssText = _cssFromModuleImports(m); // include css from the first template in the module


      var t = m.querySelector('template');

      if (t) {
        cssText += cssFromTemplate(t,
        /** @type {templateWithAssetPath} */
        m.assetpath);
      }

      m._cssText = cssText || null;
    }

    if (!m) {
      console.warn('Could not find style data in module named', moduleId);
    }

    return m && m._cssText || '';
  }
  /**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   * @this {StyleGather}
   */


  function cssFromTemplate(template, baseURI) {
    var cssText = '';
    var e$ = stylesFromTemplate(template, baseURI); // if element is a template, get content from its .content

    for (var i = 0; i < e$.length; i++) {
      var e = e$[i];

      if (e.parentNode) {
        e.parentNode.removeChild(e);
      }

      cssText += e.textContent;
    }

    return cssText;
  }
  /**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   * @this {StyleGather}
   */


  function cssFromModuleImports(moduleId) {
    var m = importModule(moduleId);
    return m ? _cssFromModuleImports(m) : '';
  }
  /**
   * @deprecated
   * @this {StyleGather}
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */


  function _cssFromModuleImports(module) {
    var cssText = '';

    var styles = _stylesFromModuleImports(module);

    for (var i = 0; i < styles.length; i++) {
      cssText += styles[i].textContent;
    }

    return cssText;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/templatize.js":
/*!***************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/templatize.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./boot.js */ "./node_modules/@polymer/polymer/lib/utils/boot.js"), __webpack_require__(/*! ../mixins/property-effects.js */ "./node_modules/@polymer/polymer/lib/mixins/property-effects.js"), __webpack_require__(/*! ../mixins/mutable-data.js */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _boot, _propertyEffects, _mutableData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.templatize = templatize;
  _exports.modelForElement = modelForElement;
  _exports.TemplateInstanceBase = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // Base class for HTMLTemplateElement extension that has property effects
  // machinery for propagating host properties to children. This is an ES5
  // class only because Babel (incorrectly) requires super() in the class
  // constructor even though no `this` is used and it returns an instance.
  var newInstance = null;
  /**
   * @constructor
   * @extends {HTMLTemplateElement}
   */

  function HTMLTemplateElementExtension() {
    return newInstance;
  }

  HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
      value: HTMLTemplateElementExtension,
      writable: true
    }
  });
  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @extends {HTMLTemplateElementExtension}
   */

  var DataTemplate = (0, _propertyEffects.PropertyEffects)(HTMLTemplateElementExtension);
  /**
   * @constructor
   * @implements {Polymer_MutableData}
   * @extends {DataTemplate}
   */

  var MutableDataTemplate = (0, _mutableData.MutableData)(DataTemplate); // Applies a DataTemplate subclass to a <template> instance

  function upgradeTemplate(template, constructor) {
    newInstance = template;
    Object.setPrototypeOf(template, constructor.prototype);
    new constructor();
    newInstance = null;
  } // Base class for TemplateInstance's

  /**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   */


  var base = (0, _propertyEffects.PropertyEffects)(
  /*#__PURE__*/
  function () {
    function _class() {
      babelHelpers.classCallCheck(this, _class);
    }

    return _class;
  }());
  /**
   * @polymer
   * @customElement
   * @appliesMixin PropertyEffects
   * @unrestricted
   */

  var TemplateInstanceBase =
  /*#__PURE__*/
  function (_base) {
    babelHelpers.inherits(TemplateInstanceBase, _base);

    function TemplateInstanceBase(props) {
      var _this;

      babelHelpers.classCallCheck(this, TemplateInstanceBase);
      _this = babelHelpers.possibleConstructorReturn(this, (TemplateInstanceBase.__proto__ || Object.getPrototypeOf(TemplateInstanceBase)).call(this));

      _this._configureProperties(props);

      _this.root = _this._stampTemplate(_this.__dataHost); // Save list of stamped children

      var children = _this.children = [];

      for (var n = _this.root.firstChild; n; n = n.nextSibling) {
        children.push(n);
        n.__templatizeInstance = babelHelpers.assertThisInitialized(_this);
      }

      if (_this.__templatizeOwner && _this.__templatizeOwner.__hideTemplateChildren__) {
        _this._showHideChildren(true);
      } // Flush props only when props are passed if instance props exist
      // or when there isn't instance props.


      var options = _this.__templatizeOptions;

      if (props && options.instanceProps || !options.instanceProps) {
        _this._enableProperties();
      }

      return _this;
    }
    /**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */


    babelHelpers.createClass(TemplateInstanceBase, [{
      key: "_configureProperties",
      value: function _configureProperties(props) {
        var options = this.__templatizeOptions;

        if (options.forwardHostProp) {
          for (var hprop in this.__hostProps) {
            this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
          }
        } // Any instance props passed in the constructor will overwrite host props;
        // normally this would be a user error but we don't specifically filter them


        for (var iprop in props) {
          this._setPendingProperty(iprop, props[iprop]);
        }
      }
      /**
       * Forwards a host property to this instance.  This method should be
       * called on instances from the `options.forwardHostProp` callback
       * to propagate changes of host properties to each instance.
       *
       * Note this method enqueues the change, which are flushed as a batch.
       *
       * @param {string} prop Property or path name
       * @param {*} value Value of the property to forward
       * @return {void}
       */

    }, {
      key: "forwardHostProp",
      value: function forwardHostProp(prop, value) {
        if (this._setPendingPropertyOrPath(prop, value, false, true)) {
          this.__dataHost._enqueueClient(this);
        }
      }
      /**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!Node} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       */

    }, {
      key: "_addEventListenerToNode",
      value: function _addEventListenerToNode(node, eventName, handler) {
        var _this2 = this;

        if (this._methodHost && this.__templatizeOptions.parentModel) {
          // If this instance should be considered a parent model, decorate
          // events this template instance as `model`
          this._methodHost._addEventListenerToNode(node, eventName, function (e) {
            e.model = _this2;
            handler(e);
          });
        } else {
          // Otherwise delegate to the template's host (which could be)
          // another template instance
          var templateHost = this.__dataHost.__dataHost;

          if (templateHost) {
            templateHost._addEventListenerToNode(node, eventName, handler);
          }
        }
      }
      /**
       * Shows or hides the template instance top level child elements. For
       * text nodes, `textContent` is removed while "hidden" and replaced when
       * "shown."
       * @param {boolean} hide Set to true to hide the children;
       * set to false to show them.
       * @return {void}
       * @protected
       */

    }, {
      key: "_showHideChildren",
      value: function _showHideChildren(hide) {
        var c = this.children;

        for (var i = 0; i < c.length; i++) {
          var n = c[i]; // Ignore non-changes

          if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
            if (n.nodeType === Node.TEXT_NODE) {
              if (hide) {
                n.__polymerTextContent__ = n.textContent;
                n.textContent = '';
              } else {
                n.textContent = n.__polymerTextContent__;
              } // remove and replace slot

            } else if (n.localName === 'slot') {
              if (hide) {
                n.__polymerReplaced__ = document.createComment('hidden-slot');
                n.parentNode.replaceChild(n.__polymerReplaced__, n);
              } else {
                var replace = n.__polymerReplaced__;

                if (replace) {
                  replace.parentNode.replaceChild(n, replace);
                }
              }
            } else if (n.style) {
              if (hide) {
                n.__polymerDisplay__ = n.style.display;
                n.style.display = 'none';
              } else {
                n.style.display = n.__polymerDisplay__;
              }
            }
          }

          n.__hideTemplateChildren__ = hide;

          if (n._showHideChildren) {
            n._showHideChildren(hide);
          }
        }
      }
      /**
       * Overrides default property-effects implementation to intercept
       * textContent bindings while children are "hidden" and cache in
       * private storage for later retrieval.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */

    }, {
      key: "_setUnmanagedPropertyToNode",
      value: function _setUnmanagedPropertyToNode(node, prop, value) {
        if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
          node.__polymerTextContent__ = value;
        } else {
          babelHelpers.get(TemplateInstanceBase.prototype.__proto__ || Object.getPrototypeOf(TemplateInstanceBase.prototype), "_setUnmanagedPropertyToNode", this).call(this, node, prop, value);
        }
      }
      /**
       * Find the parent model of this template instance.  The parent model
       * is either another templatize instance that had option `parentModel: true`,
       * or else the host element.
       *
       * @return {!Polymer_PropertyEffects} The parent model of this instance
       */

    }, {
      key: "dispatchEvent",

      /**
       * Stub of HTMLElement's `dispatchEvent`, so that effects that may
       * dispatch events safely no-op.
       *
       * @param {Event} event Event to dispatch
       * @return {boolean} Always true.
       */
      value: function dispatchEvent(event) {
        // eslint-disable-line no-unused-vars
        return true;
      }
    }, {
      key: "parentModel",
      get: function get() {
        var model = this.__parentModel;

        if (!model) {
          var options;
          model = this;

          do {
            // A template instance's `__dataHost` is a <template>
            // `model.__dataHost.__dataHost` is the template's host
            model = model.__dataHost.__dataHost;
          } while ((options = model.__templatizeOptions) && !options.parentModel);

          this.__parentModel = model;
        }

        return model;
      }
    }]);
    return TemplateInstanceBase;
  }(base);
  /** @type {!DataTemplate} */


  _exports.TemplateInstanceBase = TemplateInstanceBase;
  TemplateInstanceBase.prototype.__dataHost;
  /** @type {!TemplatizeOptions} */

  TemplateInstanceBase.prototype.__templatizeOptions;
  /** @type {!Polymer_PropertyEffects} */

  TemplateInstanceBase.prototype._methodHost;
  /** @type {!Object} */

  TemplateInstanceBase.prototype.__templatizeOwner;
  /** @type {!Object} */

  TemplateInstanceBase.prototype.__hostProps;
  /**
   * @constructor
   * @extends {TemplateInstanceBase}
   * @implements {Polymer_MutableData}
   */

  var MutableTemplateInstanceBase = (0, _mutableData.MutableData)(TemplateInstanceBase);

  function findMethodHost(template) {
    // Technically this should be the owner of the outermost template.
    // In shadow dom, this is always getRootNode().host, but we can
    // approximate this via cooperation with our dataHost always setting
    // `_methodHost` as long as there were bindings (or id's) on this
    // instance causing it to get a dataHost.
    var templateHost = template.__dataHost;
    return templateHost && templateHost._methodHost || templateHost;
  }
  /* eslint-disable valid-jsdoc */

  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */


  function createTemplatizerClass(template, templateInfo, options) {
    // Anonymous class created by the templatize
    var base = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
    /**
     * @constructor
     * @extends {base}
     * @private
     */

    var klass =
    /*#__PURE__*/
    function (_base2) {
      babelHelpers.inherits(klass, _base2);

      function klass() {
        babelHelpers.classCallCheck(this, klass);
        return babelHelpers.possibleConstructorReturn(this, (klass.__proto__ || Object.getPrototypeOf(klass)).apply(this, arguments));
      }

      return klass;
    }(base);

    klass.prototype.__templatizeOptions = options;

    klass.prototype._bindTemplate(template);

    addNotifyEffects(klass, template, templateInfo, options);
    return klass;
  }
  /**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */


  function addPropagateEffects(template, templateInfo, options) {
    var userForwardHostProp = options.forwardHostProp;

    if (userForwardHostProp) {
      // Provide data API and property effects on memoized template class
      var klass = templateInfo.templatizeTemplateClass;

      if (!klass) {
        var _base3 = options.mutableData ? MutableDataTemplate : DataTemplate;

        klass = templateInfo.templatizeTemplateClass =
        /*#__PURE__*/
        function (_base4) {
          babelHelpers.inherits(TemplatizedTemplate, _base4);

          function TemplatizedTemplate() {
            babelHelpers.classCallCheck(this, TemplatizedTemplate);
            return babelHelpers.possibleConstructorReturn(this, (TemplatizedTemplate.__proto__ || Object.getPrototypeOf(TemplatizedTemplate)).apply(this, arguments));
          }

          return TemplatizedTemplate;
        }(_base3); // Add template - >instances effects
        // and host <- template effects


        var hostProps = templateInfo.hostProps;

        for (var prop in hostProps) {
          klass.prototype._addPropertyEffect('_host_' + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, {
            fn: createForwardHostPropEffect(prop, userForwardHostProp)
          });

          klass.prototype._createNotifyingProperty('_host_' + prop);
        }
      }

      upgradeTemplate(template, klass); // Mix any pre-bound data into __data; no need to flush this to
      // instances since they pull from the template at instance-time

      if (template.__dataProto) {
        // Note, generally `__dataProto` could be chained, but it's guaranteed
        // to not be since this is a vanilla template we just added effects to
        Object.assign(template.__data, template.__dataProto);
      } // Clear any pending data for performance


      template.__dataTemp = {};
      template.__dataPending = null;
      template.__dataOld = null;

      template._enableProperties();
    }
  }
  /* eslint-enable valid-jsdoc */


  function createForwardHostPropEffect(hostProp, userForwardHostProp) {
    return function forwardHostProp(template, prop, props) {
      userForwardHostProp.call(template.__templatizeOwner, prop.substring('_host_'.length), props[prop]);
    };
  }

  function addNotifyEffects(klass, template, templateInfo, options) {
    var hostProps = templateInfo.hostProps || {};

    for (var iprop in options.instanceProps) {
      delete hostProps[iprop];
      var userNotifyInstanceProp = options.notifyInstanceProp;

      if (userNotifyInstanceProp) {
        klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
          fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp)
        });
      }
    }

    if (options.forwardHostProp && template.__dataHost) {
      for (var hprop in hostProps) {
        klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
          fn: createNotifyHostPropEffect()
        });
      }
    }
  }

  function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
    return function notifyInstanceProp(inst, prop, props) {
      userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
    };
  }

  function createNotifyHostPropEffect() {
    return function notifyHostProp(inst, prop, props) {
      inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
    };
  }
  /**
   * Module for preparing and stamping instances of templates that utilize
   * Polymer's data-binding and declarative event listener features.
   *
   * Example:
   *
   *     // Get a template from somewhere, e.g. light DOM
   *     let template = this.querySelector('template');
   *     // Prepare the template
   *     let TemplateClass = Templatize.templatize(template);
   *     // Instance the template with an initial data model
   *     let instance = new TemplateClass({myProp: 'initial'});
   *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
   *     this.shadowRoot.appendChild(instance.root);
   *     // Changing a property on the instance will propagate to bindings
   *     // in the template
   *     instance.myProp = 'new value';
   *
   * The `options` dictionary passed to `templatize` allows for customizing
   * features of the generated template class, including how outer-scope host
   * properties should be forwarded into template instances, how any instance
   * properties added into the template's scope should be notified out to
   * the host, and whether the instance should be decorated as a "parent model"
   * of any event handlers.
   *
   *     // Customize property forwarding and event model decoration
   *     let TemplateClass = Templatize.templatize(template, this, {
   *       parentModel: true,
   *       forwardHostProp(property, value) {...},
   *       instanceProps: {...},
   *       notifyInstanceProp(instance, property, value) {...},
   *     });
   *
   * @summary Module for preparing and stamping instances of templates
   *   utilizing Polymer templating features.
   */


  "TODO(modulizer): A namespace named Polymer.Templatize was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
  /**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */

  function templatize(template, owner, options) {
    options =
    /** @type {!TemplatizeOptions} */
    options || {};

    if (template.__templatizeOwner) {
      throw new Error('A <template> can only be templatized once');
    }

    template.__templatizeOwner = owner;
    var ctor = owner ? owner.constructor : TemplateInstanceBase;

    var templateInfo = ctor._parseTemplate(template); // Get memoized base class for the prototypical template, which
    // includes property effects for binding template & forwarding


    var baseClass = templateInfo.templatizeInstanceClass;

    if (!baseClass) {
      baseClass = createTemplatizerClass(template, templateInfo, options);
      templateInfo.templatizeInstanceClass = baseClass;
    } // Host property forwarding must be installed onto template instance


    addPropagateEffects(template, templateInfo, options); // Subclass base class and add reference for this specific template

    /** @private */

    var klass =
    /*#__PURE__*/
    function (_baseClass) {
      babelHelpers.inherits(TemplateInstance, _baseClass);

      function TemplateInstance() {
        babelHelpers.classCallCheck(this, TemplateInstance);
        return babelHelpers.possibleConstructorReturn(this, (TemplateInstance.__proto__ || Object.getPrototypeOf(TemplateInstance)).apply(this, arguments));
      }

      return TemplateInstance;
    }(baseClass);

    klass.prototype._methodHost = findMethodHost(template);
    klass.prototype.__dataHost = template;
    klass.prototype.__templatizeOwner = owner;
    klass.prototype.__hostProps = templateInfo.hostProps;
    klass =
    /** @type {function(new:TemplateInstanceBase)} */
    klass; //eslint-disable-line no-self-assign

    return klass;
  }
  /**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */


  function modelForElement(template, node) {
    var model;

    while (node) {
      // An element with a __templatizeInstance marks the top boundary
      // of a scope; walk up until we find one, and then ensure that
      // its __dataHost matches `this`, meaning this dom-repeat stamped it
      if (model = node.__templatizeInstance) {
        // Found an element stamped by another template; keep walking up
        // from its __dataHost
        if (model.__dataHost != template) {
          node = model.__dataHost;
        } else {
          return model;
        }
      } else {
        // Still in a template scope, keep going up until
        // a __templatizeInstance is found
        node = node.parentNode;
      }
    }

    return null;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/lib/utils/unresolved.js":
/*!***************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/utils/unresolved.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function resolve() {
    document.body.removeAttribute('unresolved');
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    resolve();
  } else {
    window.addEventListener('DOMContentLoaded', resolve);
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/polymer-element.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/polymer/polymer-element.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./lib/mixins/element-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js"), __webpack_require__(/*! ./lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _elementMixin, _htmlTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "html", {
    enumerable: true,
    get: function get() {
      return _htmlTag.html;
    }
  });
  _exports.PolymerElement = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Base class that provides the core API for Polymer's meta-programming
   * features including template stamping, data-binding, attribute deserialization,
   * and property change observation.
   *
   * @customElement
   * @polymer
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends HTMLElement
   * @appliesMixin ElementMixin
   * @summary Custom element base class that provides the core API for Polymer's
   *   key meta-programming features including template stamping, data-binding,
   *   attribute deserialization, and property change observation
   */
  var PolymerElement = (0, _elementMixin.ElementMixin)(HTMLElement);
  _exports.PolymerElement = PolymerElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@polymer/polymer/polymer-legacy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@polymer/polymer/polymer-legacy.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./lib/legacy/legacy-element-mixin.js */ "./node_modules/@polymer/polymer/lib/legacy/legacy-element-mixin.js"), __webpack_require__(/*! ./lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"), __webpack_require__(/*! ./lib/legacy/templatizer-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js"), __webpack_require__(/*! ./lib/elements/dom-bind.js */ "./node_modules/@polymer/polymer/lib/elements/dom-bind.js"), __webpack_require__(/*! ./lib/elements/dom-repeat.js */ "./node_modules/@polymer/polymer/lib/elements/dom-repeat.js"), __webpack_require__(/*! ./lib/elements/dom-if.js */ "./node_modules/@polymer/polymer/lib/elements/dom-if.js"), __webpack_require__(/*! ./lib/elements/array-selector.js */ "./node_modules/@polymer/polymer/lib/elements/array-selector.js"), __webpack_require__(/*! ./lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js"), __webpack_require__(/*! ./lib/legacy/mutable-data-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js"), __webpack_require__(/*! ./lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _legacyElementMixin, _polymerFn, _templatizerBehavior, _domBind, _domRepeat, _domIf, _arraySelector, _customStyle, _mutableDataBehavior, _htmlTag) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Polymer", {
    enumerable: true,
    get: function get() {
      return _polymerFn.Polymer;
    }
  });
  Object.defineProperty(_exports, "html", {
    enumerable: true,
    get: function get() {
      return _htmlTag.html;
    }
  });
  _exports.Base = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /* template elements */

  /* custom-style */

  /* bc behaviors */

  /* import html-tag to export html */
  // bc
  var Base = (0, _legacyElementMixin.LegacyElementMixin)(HTMLElement).prototype;
  _exports.Base = Base;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js":
/*!************************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/entrypoints/apply-shim.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../src/apply-shim.js */ "./node_modules/@webcomponents/shadycss/src/apply-shim.js"), __webpack_require__(/*! ../src/template-map.js */ "./node_modules/@webcomponents/shadycss/src/template-map.js"), __webpack_require__(/*! ../src/style-util.js */ "./node_modules/@webcomponents/shadycss/src/style-util.js"), __webpack_require__(/*! ../src/apply-shim-utils.js */ "./node_modules/@webcomponents/shadycss/src/apply-shim-utils.js"), __webpack_require__(/*! ../src/common-utils.js */ "./node_modules/@webcomponents/shadycss/src/common-utils.js"), __webpack_require__(/*! ../src/custom-style-interface.js */ "./node_modules/@webcomponents/shadycss/src/custom-style-interface.js"), __webpack_require__(/*! ../src/style-settings.js */ "./node_modules/@webcomponents/shadycss/src/style-settings.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_applyShim, _templateMap, _styleUtil, ApplyShimUtils, _commonUtils, _customStyleInterface, _styleSettings) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  _applyShim = babelHelpers.interopRequireDefault(_applyShim);
  _templateMap = babelHelpers.interopRequireDefault(_templateMap);
  ApplyShimUtils = babelHelpers.interopRequireWildcard(ApplyShimUtils);
  // eslint-disable-line no-unused-vars

  /** @const {ApplyShim} */
  var applyShim = new _applyShim.default();

  var ApplyShimInterface =
  /*#__PURE__*/
  function () {
    function ApplyShimInterface() {
      babelHelpers.classCallCheck(this, ApplyShimInterface);

      /** @type {?CustomStyleInterfaceInterface} */
      this.customStyleInterface = null;
      applyShim['invalidCallback'] = ApplyShimUtils.invalidate;
    }

    babelHelpers.createClass(ApplyShimInterface, [{
      key: "ensure",
      value: function ensure() {
        var _this = this;

        if (this.customStyleInterface) {
          return;
        }

        this.customStyleInterface = window.ShadyCSS.CustomStyleInterface;

        if (this.customStyleInterface) {
          this.customStyleInterface['transformCallback'] = function (style) {
            applyShim.transformCustomStyle(style);
          };

          this.customStyleInterface['validateCallback'] = function () {
            requestAnimationFrame(function () {
              if (_this.customStyleInterface['enqueued']) {
                _this.flushCustomStyles();
              }
            });
          };
        }
      }
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       */

    }, {
      key: "prepareTemplate",
      value: function prepareTemplate(template, elementName) {
        this.ensure();
        _templateMap.default[elementName] = template;
        var ast = applyShim.transformTemplate(template, elementName); // save original style ast to use for revalidating instances

        template['_styleAst'] = ast;
      }
    }, {
      key: "flushCustomStyles",
      value: function flushCustomStyles() {
        this.ensure();

        if (!this.customStyleInterface) {
          return;
        }

        var styles = this.customStyleInterface['processStyles']();

        if (!this.customStyleInterface['enqueued']) {
          return;
        }

        for (var i = 0; i < styles.length; i++) {
          var cs = styles[i];
          var style = this.customStyleInterface['getStyleForCustomStyle'](cs);

          if (style) {
            applyShim.transformCustomStyle(style);
          }
        }

        this.customStyleInterface['enqueued'] = false;
      }
      /**
       * @param {HTMLElement} element
       * @param {Object=} properties
       */

    }, {
      key: "styleSubtree",
      value: function styleSubtree(element, properties) {
        this.ensure();

        if (properties) {
          (0, _commonUtils.updateNativeProperties)(element, properties);
        }

        if (element.shadowRoot) {
          this.styleElement(element);
          var shadowChildren = element.shadowRoot.children || element.shadowRoot.childNodes;

          for (var i = 0; i < shadowChildren.length; i++) {
            this.styleSubtree(
            /** @type {HTMLElement} */
            shadowChildren[i]);
          }
        } else {
          var children = element.children || element.childNodes;

          for (var _i = 0; _i < children.length; _i++) {
            this.styleSubtree(
            /** @type {HTMLElement} */
            children[_i]);
          }
        }
      }
      /**
       * @param {HTMLElement} element
       */

    }, {
      key: "styleElement",
      value: function styleElement(element) {
        this.ensure();

        var _getIsExtends = (0, _styleUtil.getIsExtends)(element),
            is = _getIsExtends.is;

        var template = _templateMap.default[is];

        if (template && !ApplyShimUtils.templateIsValid(template)) {
          // only revalidate template once
          if (!ApplyShimUtils.templateIsValidating(template)) {
            this.prepareTemplate(template, is);
            ApplyShimUtils.startValidatingTemplate(template);
          } // update this element instance


          var root = element.shadowRoot;

          if (root) {
            var style =
            /** @type {HTMLStyleElement} */
            root.querySelector('style');

            if (style) {
              // reuse the template's style ast, it has all the original css text
              style['__cssRules'] = template['_styleAst'];
              style.textContent = (0, _styleUtil.toCssText)(template['_styleAst']);
            }
          }
        }
      }
      /**
       * @param {Object=} properties
       */

    }, {
      key: "styleDocument",
      value: function styleDocument(properties) {
        this.ensure();
        this.styleSubtree(document.body, properties);
      }
    }]);
    return ApplyShimInterface;
  }();

  if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var applyShimInterface = new ApplyShimInterface();
    var CustomStyleInterface = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;
    /** @suppress {duplicate} */

    window.ShadyCSS = {
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplate: function prepareTemplate(template, elementName, elementExtends) {
        // eslint-disable-line no-unused-vars
        applyShimInterface.flushCustomStyles();
        applyShimInterface.prepareTemplate(template, elementName);
      },

      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplateStyles: function prepareTemplateStyles(template, elementName, elementExtends) {
        this.prepareTemplate(template, elementName, elementExtends);
      },

      /**
       * @param {HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplateDom: function prepareTemplateDom(template, elementName) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {!HTMLElement} element
       * @param {Object=} properties
       */
      styleSubtree: function styleSubtree(element, properties) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleSubtree(element, properties);
      },

      /**
       * @param {!HTMLElement} element
       */
      styleElement: function styleElement(element) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleElement(element);
      },

      /**
       * @param {Object=} properties
       */
      styleDocument: function styleDocument(properties) {
        applyShimInterface.flushCustomStyles();
        applyShimInterface.styleDocument(properties);
      },

      /**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */
      getComputedStyleValue: function getComputedStyleValue(element, property) {
        return (0, _commonUtils.getComputedStyleValue)(element, property);
      },
      flushCustomStyles: function flushCustomStyles() {
        applyShimInterface.flushCustomStyles();
      },
      nativeCss: _styleSettings.nativeCssVariables,
      nativeShadow: _styleSettings.nativeShadow
    };

    if (CustomStyleInterface) {
      window.ShadyCSS.CustomStyleInterface = CustomStyleInterface;
    }
  }

  window.ShadyCSS.ApplyShim = applyShim;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/entrypoints/custom-style-interface.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/entrypoints/custom-style-interface.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../src/custom-style-interface.js */ "./node_modules/@webcomponents/shadycss/src/custom-style-interface.js"), __webpack_require__(/*! ../src/common-utils.js */ "./node_modules/@webcomponents/shadycss/src/common-utils.js"), __webpack_require__(/*! ../src/style-settings.js */ "./node_modules/@webcomponents/shadycss/src/style-settings.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_customStyleInterface, _commonUtils, _styleSettings) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  _customStyleInterface = babelHelpers.interopRequireDefault(_customStyleInterface);
  var customStyleInterface = new _customStyleInterface.default();

  if (!window.ShadyCSS) {
    window.ShadyCSS = {
      /**
       * @param {HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplate: function prepareTemplate(template, elementName, elementExtends) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {HTMLTemplateElement} template
       * @param {string} elementName
       */
      prepareTemplateDom: function prepareTemplateDom(template, elementName) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {HTMLTemplateElement} template
       * @param {string} elementName
       * @param {string=} elementExtends
       */
      prepareTemplateStyles: function prepareTemplateStyles(template, elementName, elementExtends) {},
      // eslint-disable-line no-unused-vars

      /**
       * @param {Element} element
       * @param {Object=} properties
       */
      styleSubtree: function styleSubtree(element, properties) {
        customStyleInterface.processStyles();
        (0, _commonUtils.updateNativeProperties)(element, properties);
      },

      /**
       * @param {Element} element
       */
      styleElement: function styleElement(element) {
        // eslint-disable-line no-unused-vars
        customStyleInterface.processStyles();
      },

      /**
       * @param {Object=} properties
       */
      styleDocument: function styleDocument(properties) {
        customStyleInterface.processStyles();
        (0, _commonUtils.updateNativeProperties)(document.body, properties);
      },

      /**
       * @param {Element} element
       * @param {string} property
       * @return {string}
       */
      getComputedStyleValue: function getComputedStyleValue(element, property) {
        return (0, _commonUtils.getComputedStyleValue)(element, property);
      },
      flushCustomStyles: function flushCustomStyles() {},
      nativeCss: _styleSettings.nativeCssVariables,
      nativeShadow: _styleSettings.nativeShadow
    };
  }

  window.ShadyCSS.CustomStyleInterface = customStyleInterface;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/apply-shim-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/apply-shim-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./template-map.js */ "./node_modules/@webcomponents/shadycss/src/template-map.js"), __webpack_require__(/*! ./css-parse.js */ "./node_modules/@webcomponents/shadycss/src/css-parse.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _templateMap, _cssParse) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.invalidate = invalidate;
  _exports.invalidateTemplate = invalidateTemplate;
  _exports.isValid = isValid;
  _exports.templateIsValid = templateIsValid;
  _exports.isValidating = isValidating;
  _exports.templateIsValidating = templateIsValidating;
  _exports.startValidating = startValidating;
  _exports.startValidatingTemplate = startValidatingTemplate;
  _exports.elementsAreInvalid = elementsAreInvalid;
  _templateMap = babelHelpers.interopRequireDefault(_templateMap);
  // eslint-disable-line no-unused-vars

  /*
   * Utilities for handling invalidating apply-shim mixins for a given template.
   *
   * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
   * The template
   */

  /** @const {string} */
  var CURRENT_VERSION = '_applyShimCurrentVersion';
  /** @const {string} */

  var NEXT_VERSION = '_applyShimNextVersion';
  /** @const {string} */

  var VALIDATING_VERSION = '_applyShimValidatingVersion';
  /**
   * @const {Promise<void>}
   */

  var promise = Promise.resolve();
  /**
   * @param {string} elementName
   */

  function invalidate(elementName) {
    var template = _templateMap.default[elementName];

    if (template) {
      invalidateTemplate(template);
    }
  }
  /**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */


  function invalidateTemplate(template) {
    // default the current version to 0
    template[CURRENT_VERSION] = template[CURRENT_VERSION] || 0; // ensure the "validating for" flag exists

    template[VALIDATING_VERSION] = template[VALIDATING_VERSION] || 0; // increment the next version

    template[NEXT_VERSION] = (template[NEXT_VERSION] || 0) + 1;
  }
  /**
   * @param {string} elementName
   * @return {boolean}
   */


  function isValid(elementName) {
    var template = _templateMap.default[elementName];

    if (template) {
      return templateIsValid(template);
    }

    return true;
  }
  /**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */


  function templateIsValid(template) {
    return template[CURRENT_VERSION] === template[NEXT_VERSION];
  }
  /**
   * @param {string} elementName
   * @return {boolean}
   */


  function isValidating(elementName) {
    var template = _templateMap.default[elementName];

    if (template) {
      return templateIsValidating(template);
    }

    return false;
  }
  /**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */


  function templateIsValidating(template) {
    return !templateIsValid(template) && template[VALIDATING_VERSION] === template[NEXT_VERSION];
  }
  /**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */


  function startValidating(elementName) {
    var template = _templateMap.default[elementName];
    startValidatingTemplate(template);
  }
  /**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */


  function startValidatingTemplate(template) {
    // remember that the current "next version" is the reason for this validation cycle
    template[VALIDATING_VERSION] = template[NEXT_VERSION]; // however, there only needs to be one async task to clear the counters

    if (!template._validating) {
      template._validating = true;
      promise.then(function () {
        // sync the current version to let future invalidations cause a refresh cycle
        template[CURRENT_VERSION] = template[NEXT_VERSION];
        template._validating = false;
      });
    }
  }
  /**
   * @return {boolean}
   */


  function elementsAreInvalid() {
    for (var elementName in _templateMap.default) {
      var template = _templateMap.default[elementName];

      if (!templateIsValid(template)) {
        return true;
      }
    }

    return false;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/apply-shim.js":
/*!****************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/apply-shim.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./style-util.js */ "./node_modules/@webcomponents/shadycss/src/style-util.js"), __webpack_require__(/*! ./common-regex.js */ "./node_modules/@webcomponents/shadycss/src/common-regex.js"), __webpack_require__(/*! ./common-utils.js */ "./node_modules/@webcomponents/shadycss/src/common-utils.js"), __webpack_require__(/*! ./css-parse.js */ "./node_modules/@webcomponents/shadycss/src/css-parse.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _styleUtil, _commonRegex, _commonUtils, _cssParse) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
   * The apply shim simulates the behavior of `@apply` proposed at
   * https://tabatkins.github.io/specs/css-apply-rule/.
   * The approach is to convert a property like this:
   *
   *    --foo: {color: red; background: blue;}
   *
   * to this:
   *
   *    --foo_-_color: red;
   *    --foo_-_background: blue;
   *
   * Then where `@apply --foo` is used, that is converted to:
   *
   *    color: var(--foo_-_color);
   *    background: var(--foo_-_background);
   *
   * This approach generally works but there are some issues and limitations.
   * Consider, for example, that somewhere *between* where `--foo` is set and used,
   * another element sets it to:
   *
   *    --foo: { border: 2px solid red; }
   *
   * We must now ensure that the color and background from the previous setting
   * do not apply. This is accomplished by changing the property set to this:
   *
   *    --foo_-_border: 2px solid red;
   *    --foo_-_color: initial;
   *    --foo_-_background: initial;
   *
   * This works but introduces one new issue.
   * Consider this setup at the point where the `@apply` is used:
   *
   *    background: orange;
   *    `@apply` --foo;
   *
   * In this case the background will be unset (initial) rather than the desired
   * `orange`. We address this by altering the property set to use a fallback
   * value like this:
   *
   *    color: var(--foo_-_color);
   *    background: var(--foo_-_background, orange);
   *    border: var(--foo_-_border);
   *
   * Note that the default is retained in the property set and the `background` is
   * the desired `orange`. This leads us to a limitation.
   *
   * Limitation 1:
  
   * Only properties in the rule where the `@apply`
   * is used are considered as default values.
   * If another rule matches the element and sets `background` with
   * less specificity than the rule in which `@apply` appears,
   * the `background` will not be set.
   *
   * Limitation 2:
   *
   * When using Polymer's `updateStyles` api, new properties may not be set for
   * `@apply` properties.
  
  */
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // eslint-disable-line no-unused-vars
  var APPLY_NAME_CLEAN = /;\s*/m;
  var INITIAL_INHERIT = /^\s*(initial)|(inherit)\s*$/;
  var IMPORTANT = /\s*!important/; // separator used between mixin-name and mixin-property-name when producing properties
  // NOTE: plain '-' may cause collisions in user styles

  var MIXIN_VAR_SEP = '_-_';
  /**
   * @typedef {!Object<string, string>}
   */

  var PropertyEntry; // eslint-disable-line no-unused-vars

  /**
   * @typedef {!Object<string, boolean>}
   */

  var DependantsEntry; // eslint-disable-line no-unused-vars

  /** @typedef {{
   *    properties: PropertyEntry,
   *    dependants: DependantsEntry
   * }}
   */

  var MixinMapEntry; // eslint-disable-line no-unused-vars
  // map of mixin to property names
  // --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}

  var MixinMap =
  /*#__PURE__*/
  function () {
    function MixinMap() {
      babelHelpers.classCallCheck(this, MixinMap);

      /** @type {!Object<string, !MixinMapEntry>} */
      this._map = {};
    }
    /**
     * @param {string} name
     * @param {!PropertyEntry} props
     */


    babelHelpers.createClass(MixinMap, [{
      key: "set",
      value: function set(name, props) {
        name = name.trim();
        this._map[name] = {
          properties: props,
          dependants: {}
        };
      }
      /**
       * @param {string} name
       * @return {MixinMapEntry}
       */

    }, {
      key: "get",
      value: function get(name) {
        name = name.trim();
        return this._map[name] || null;
      }
    }]);
    return MixinMap;
  }();
  /**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */


  var invalidCallback = null;
  /** @unrestricted */

  var ApplyShim =
  /*#__PURE__*/
  function () {
    function ApplyShim() {
      babelHelpers.classCallCheck(this, ApplyShim);

      /** @type {?string} */
      this._currentElement = null;
      /** @type {HTMLMetaElement} */

      this._measureElement = null;
      this._map = new MixinMap();
    }
    /**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */


    babelHelpers.createClass(ApplyShim, [{
      key: "detectMixin",
      value: function detectMixin(cssText) {
        return (0, _commonUtils.detectMixin)(cssText);
      }
      /**
       * Gather styles into one style for easier processing
       * @param {!HTMLTemplateElement} template
       * @return {HTMLStyleElement}
       */

    }, {
      key: "gatherStyles",
      value: function gatherStyles(template) {
        var styleText = (0, _styleUtil.gatherStyleText)(template.content);

        if (styleText) {
          var style =
          /** @type {!HTMLStyleElement} */
          document.createElement('style');
          style.textContent = styleText;
          template.content.insertBefore(style, template.content.firstChild);
          return style;
        }

        return null;
      }
      /**
       * @param {!HTMLTemplateElement} template
       * @param {string} elementName
       * @return {StyleNode}
       */

    }, {
      key: "transformTemplate",
      value: function transformTemplate(template, elementName) {
        if (template._gatheredStyle === undefined) {
          template._gatheredStyle = this.gatherStyles(template);
        }
        /** @type {HTMLStyleElement} */


        var style = template._gatheredStyle;
        return style ? this.transformStyle(style, elementName) : null;
      }
      /**
       * @param {!HTMLStyleElement} style
       * @param {string} elementName
       * @return {StyleNode}
       */

    }, {
      key: "transformStyle",
      value: function transformStyle(style) {
        var elementName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var ast = (0, _styleUtil.rulesForStyle)(style);
        this.transformRules(ast, elementName);
        style.textContent = (0, _styleUtil.toCssText)(ast);
        return ast;
      }
      /**
       * @param {!HTMLStyleElement} style
       * @return {StyleNode}
       */

    }, {
      key: "transformCustomStyle",
      value: function transformCustomStyle(style) {
        var _this = this;

        var ast = (0, _styleUtil.rulesForStyle)(style);
        (0, _styleUtil.forEachRule)(ast, function (rule) {
          if (rule['selector'] === ':root') {
            rule['selector'] = 'html';
          }

          _this.transformRule(rule);
        });
        style.textContent = (0, _styleUtil.toCssText)(ast);
        return ast;
      }
      /**
       * @param {StyleNode} rules
       * @param {string} elementName
       */

    }, {
      key: "transformRules",
      value: function transformRules(rules, elementName) {
        var _this2 = this;

        this._currentElement = elementName;
        (0, _styleUtil.forEachRule)(rules, function (r) {
          _this2.transformRule(r);
        });
        this._currentElement = null;
      }
      /**
       * @param {!StyleNode} rule
       */

    }, {
      key: "transformRule",
      value: function transformRule(rule) {
        rule['cssText'] = this.transformCssText(rule['parsedCssText']); // :root was only used for variable assignment in property shim,
        // but generates invalid selectors with real properties.
        // replace with `:host > *`, which serves the same effect

        if (rule['selector'] === ':root') {
          rule['selector'] = ':host > *';
        }
      }
      /**
       * @param {string} cssText
       * @return {string}
       */

    }, {
      key: "transformCssText",
      value: function transformCssText(cssText) {
        var _this3 = this;

        // produce variables
        cssText = cssText.replace(_commonRegex.VAR_ASSIGN, function (matchText, propertyName, valueProperty, valueMixin) {
          return _this3._produceCssProperties(matchText, propertyName, valueProperty, valueMixin);
        }); // consume mixins

        return this._consumeCssProperties(cssText);
      }
      /**
       * @param {string} property
       * @return {string}
       */

    }, {
      key: "_getInitialValueForProperty",
      value: function _getInitialValueForProperty(property) {
        if (!this._measureElement) {
          this._measureElement =
          /** @type {HTMLMetaElement} */
          document.createElement('meta');

          this._measureElement.setAttribute('apply-shim-measure', '');

          this._measureElement.style.all = 'initial';
          document.head.appendChild(this._measureElement);
        }

        return window.getComputedStyle(this._measureElement).getPropertyValue(property);
      }
      /**
       * replace mixin consumption with variable consumption
       * @param {string} text
       * @return {string}
       */

    }, {
      key: "_consumeCssProperties",
      value: function _consumeCssProperties(text) {
        /** @type {Array} */
        var m = null; // loop over text until all mixins with defintions have been applied

        while (m = _commonRegex.MIXIN_MATCH.exec(text)) {
          var matchText = m[0];
          var mixinName = m[1];
          var idx = m.index; // collect properties before apply to be "defaults" if mixin might override them
          // match includes a "prefix", so find the start and end positions of @apply

          var applyPos = idx + matchText.indexOf('@apply');
          var afterApplyPos = idx + matchText.length; // find props defined before this @apply

          var textBeforeApply = text.slice(0, applyPos);
          var textAfterApply = text.slice(afterApplyPos);

          var defaults = this._cssTextToMap(textBeforeApply);

          var replacement = this._atApplyToCssProperties(mixinName, defaults); // use regex match position to replace mixin, keep linear processing time


          text = "".concat(textBeforeApply).concat(replacement).concat(textAfterApply); // move regex search to _after_ replacement

          _commonRegex.MIXIN_MATCH.lastIndex = idx + replacement.length;
        }

        return text;
      }
      /**
       * produce variable consumption at the site of mixin consumption
       * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
       * Example:
       *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
       *
       * @param {string} mixinName
       * @param {Object} fallbacks
       * @return {string}
       */

    }, {
      key: "_atApplyToCssProperties",
      value: function _atApplyToCssProperties(mixinName, fallbacks) {
        mixinName = mixinName.replace(APPLY_NAME_CLEAN, '');
        var vars = [];

        var mixinEntry = this._map.get(mixinName); // if we depend on a mixin before it is created
        // make a sentinel entry in the map to add this element as a dependency for when it is defined.


        if (!mixinEntry) {
          this._map.set(mixinName, {});

          mixinEntry = this._map.get(mixinName);
        }

        if (mixinEntry) {
          if (this._currentElement) {
            mixinEntry.dependants[this._currentElement] = true;
          }

          var p, parts, f;
          var properties = mixinEntry.properties;

          for (p in properties) {
            f = fallbacks && fallbacks[p];
            parts = [p, ': var(', mixinName, MIXIN_VAR_SEP, p];

            if (f) {
              parts.push(',', f.replace(IMPORTANT, ''));
            }

            parts.push(')');

            if (IMPORTANT.test(properties[p])) {
              parts.push(' !important');
            }

            vars.push(parts.join(''));
          }
        }

        return vars.join('; ');
      }
      /**
       * @param {string} property
       * @param {string} value
       * @return {string}
       */

    }, {
      key: "_replaceInitialOrInherit",
      value: function _replaceInitialOrInherit(property, value) {
        var match = INITIAL_INHERIT.exec(value);

        if (match) {
          if (match[1]) {
            // initial
            // replace `initial` with the concrete initial value for this property
            value = this._getInitialValueForProperty(property);
          } else {
            // inherit
            // with this purposfully illegal value, the variable will be invalid at
            // compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
            // and for inheriting values, will behave similarly
            // we cannot support the same behavior for non inheriting values like 'border'
            value = 'apply-shim-inherit';
          }
        }

        return value;
      }
      /**
       * "parse" a mixin definition into a map of properties and values
       * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
       * @param {string} text
       * @return {!Object<string, string>}
       */

    }, {
      key: "_cssTextToMap",
      value: function _cssTextToMap(text) {
        var props = text.split(';');
        var property, value;
        var out = {};

        for (var i = 0, p, sp; i < props.length; i++) {
          p = props[i];

          if (p) {
            sp = p.split(':'); // ignore lines that aren't definitions like @media

            if (sp.length > 1) {
              property = sp[0].trim(); // some properties may have ':' in the value, like data urls

              value = this._replaceInitialOrInherit(property, sp.slice(1).join(':'));
              out[property] = value;
            }
          }
        }

        return out;
      }
      /**
       * @param {MixinMapEntry} mixinEntry
       */

    }, {
      key: "_invalidateMixinEntry",
      value: function _invalidateMixinEntry(mixinEntry) {
        if (!invalidCallback) {
          return;
        }

        for (var elementName in mixinEntry.dependants) {
          if (elementName !== this._currentElement) {
            invalidCallback(elementName);
          }
        }
      }
      /**
       * @param {string} matchText
       * @param {string} propertyName
       * @param {?string} valueProperty
       * @param {?string} valueMixin
       * @return {string}
       */

    }, {
      key: "_produceCssProperties",
      value: function _produceCssProperties(matchText, propertyName, valueProperty, valueMixin) {
        var _this4 = this;

        // handle case where property value is a mixin
        if (valueProperty) {
          // form: --mixin2: var(--mixin1), where --mixin1 is in the map
          (0, _styleUtil.processVariableAndFallback)(valueProperty, function (prefix, value) {
            if (value && _this4._map.get(value)) {
              valueMixin = "@apply ".concat(value, ";");
            }
          });
        }

        if (!valueMixin) {
          return matchText;
        }

        var mixinAsProperties = this._consumeCssProperties('' + valueMixin);

        var prefix = matchText.slice(0, matchText.indexOf('--'));

        var mixinValues = this._cssTextToMap(mixinAsProperties);

        var combinedProps = mixinValues;

        var mixinEntry = this._map.get(propertyName);

        var oldProps = mixinEntry && mixinEntry.properties;

        if (oldProps) {
          // NOTE: since we use mixin, the map of properties is updated here
          // and this is what we want.
          combinedProps = Object.assign(Object.create(oldProps), mixinValues);
        } else {
          this._map.set(propertyName, combinedProps);
        }

        var out = [];
        var p, v; // set variables defined by current mixin

        var needToInvalidate = false;

        for (p in combinedProps) {
          v = mixinValues[p]; // if property not defined by current mixin, set initial

          if (v === undefined) {
            v = 'initial';
          }

          if (oldProps && !(p in oldProps)) {
            needToInvalidate = true;
          }

          out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p, ": ").concat(v));
        }

        if (needToInvalidate) {
          this._invalidateMixinEntry(mixinEntry);
        }

        if (mixinEntry) {
          mixinEntry.properties = combinedProps;
        } // because the mixinMap is global, the mixin might conflict with
        // a different scope's simple variable definition:
        // Example:
        // some style somewhere:
        // --mixin1:{ ... }
        // --mixin2: var(--mixin1);
        // some other element:
        // --mixin1: 10px solid red;
        // --foo: var(--mixin1);
        // In this case, we leave the original variable definition in place.


        if (valueProperty) {
          prefix = "".concat(matchText, ";").concat(prefix);
        }

        return "".concat(prefix).concat(out.join('; '), ";");
      }
    }]);
    return ApplyShim;
  }();
  /* exports */


  ApplyShim.prototype['detectMixin'] = ApplyShim.prototype.detectMixin;
  ApplyShim.prototype['transformStyle'] = ApplyShim.prototype.transformStyle;
  ApplyShim.prototype['transformCustomStyle'] = ApplyShim.prototype.transformCustomStyle;
  ApplyShim.prototype['transformRules'] = ApplyShim.prototype.transformRules;
  ApplyShim.prototype['transformRule'] = ApplyShim.prototype.transformRule;
  ApplyShim.prototype['transformTemplate'] = ApplyShim.prototype.transformTemplate;
  ApplyShim.prototype['_separator'] = MIXIN_VAR_SEP;
  Object.defineProperty(ApplyShim.prototype, 'invalidCallback', {
    /** @return {?function(string)} */
    get: function get() {
      return invalidCallback;
    },

    /** @param {?function(string)} cb */
    set: function set(cb) {
      invalidCallback = cb;
    }
  });
  var _default = ApplyShim;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/common-regex.js":
/*!******************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/common-regex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.HOST_SUFFIX = _exports.HOST_PREFIX = _exports.BRACKETED = _exports.IS_VAR = _exports.MEDIA_MATCH = _exports.ANIMATION_MATCH = _exports.VAR_CONSUMED = _exports.MIXIN_MATCH = _exports.VAR_ASSIGN = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var VAR_ASSIGN = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
  _exports.VAR_ASSIGN = VAR_ASSIGN;
  var MIXIN_MATCH = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
  _exports.MIXIN_MATCH = MIXIN_MATCH;
  var VAR_CONSUMED = /(--[\w-]+)\s*([:,;)]|$)/gi;
  _exports.VAR_CONSUMED = VAR_CONSUMED;
  var ANIMATION_MATCH = /(animation\s*:)|(animation-name\s*:)/;
  _exports.ANIMATION_MATCH = ANIMATION_MATCH;
  var MEDIA_MATCH = /@media\s(.*)/;
  _exports.MEDIA_MATCH = MEDIA_MATCH;
  var IS_VAR = /^--/;
  _exports.IS_VAR = IS_VAR;
  var BRACKETED = /\{[^}]*\}/g;
  _exports.BRACKETED = BRACKETED;
  var HOST_PREFIX = '(?:^|[^.#[:])';
  _exports.HOST_PREFIX = HOST_PREFIX;
  var HOST_SUFFIX = '($|[.:[\\s>+~])';
  _exports.HOST_SUFFIX = HOST_SUFFIX;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/common-utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/common-utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./common-regex.js */ "./node_modules/@webcomponents/shadycss/src/common-regex.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _commonRegex) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.updateNativeProperties = updateNativeProperties;
  _exports.getComputedStyleValue = getComputedStyleValue;
  _exports.detectMixin = detectMixin;

  /**
   * @param {Element} element
   * @param {Object=} properties
   */
  function updateNativeProperties(element, properties) {
    // remove previous properties
    for (var p in properties) {
      // NOTE: for bc with shim, don't apply null values.
      if (p === null) {
        element.style.removeProperty(p);
      } else {
        element.style.setProperty(p, properties[p]);
      }
    }
  }
  /**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */


  function getComputedStyleValue(element, property) {
    /**
     * @const {string}
     */
    var value = window.getComputedStyle(element).getPropertyValue(property);

    if (!value) {
      return '';
    } else {
      return value.trim();
    }
  }
  /**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */


  function detectMixin(cssText) {
    var has = _commonRegex.MIXIN_MATCH.test(cssText) || _commonRegex.VAR_ASSIGN.test(cssText); // reset state of the regexes


    _commonRegex.MIXIN_MATCH.lastIndex = 0;
    _commonRegex.VAR_ASSIGN.lastIndex = 0;
    return has;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/css-parse.js":
/*!***************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/css-parse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
  Extremely simple css parser. Intended to be not more than what we need
  and definitely not necessarily correct =).
  */
  'use strict';
  /** @unrestricted */

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.parse = parse;
  _exports.stringify = stringify;
  _exports.removeCustomPropAssignment = removeCustomPropAssignment;
  _exports.types = _exports.StyleNode = void 0;

  var StyleNode = function StyleNode() {
    babelHelpers.classCallCheck(this, StyleNode);

    /** @type {number} */
    this['start'] = 0;
    /** @type {number} */

    this['end'] = 0;
    /** @type {StyleNode} */

    this['previous'] = null;
    /** @type {StyleNode} */

    this['parent'] = null;
    /** @type {Array<StyleNode>} */

    this['rules'] = null;
    /** @type {string} */

    this['parsedCssText'] = '';
    /** @type {string} */

    this['cssText'] = '';
    /** @type {boolean} */

    this['atRule'] = false;
    /** @type {number} */

    this['type'] = 0;
    /** @type {string} */

    this['keyframesName'] = '';
    /** @type {string} */

    this['selector'] = '';
    /** @type {string} */

    this['parsedSelector'] = '';
  };

  _exports.StyleNode = StyleNode;

  // given a string of css, return a simple rule tree

  /**
   * @param {string} text
   * @return {StyleNode}
   */
  function parse(text) {
    text = clean(text);
    return parseCss(lex(text), text);
  } // remove stuff we don't care about that may hinder parsing

  /**
   * @param {string} cssText
   * @return {string}
   */


  function clean(cssText) {
    return cssText.replace(RX.comments, '').replace(RX.port, '');
  } // super simple {...} lexer that returns a node tree

  /**
   * @param {string} text
   * @return {StyleNode}
   */


  function lex(text) {
    var root = new StyleNode();
    root['start'] = 0;
    root['end'] = text.length;
    var n = root;

    for (var i = 0, l = text.length; i < l; i++) {
      if (text[i] === OPEN_BRACE) {
        if (!n['rules']) {
          n['rules'] = [];
        }

        var p = n;
        var previous = p['rules'][p['rules'].length - 1] || null;
        n = new StyleNode();
        n['start'] = i + 1;
        n['parent'] = p;
        n['previous'] = previous;
        p['rules'].push(n);
      } else if (text[i] === CLOSE_BRACE) {
        n['end'] = i + 1;
        n = n['parent'] || root;
      }
    }

    return root;
  } // add selectors/cssText to node tree

  /**
   * @param {StyleNode} node
   * @param {string} text
   * @return {StyleNode}
   */


  function parseCss(node, text) {
    var t = text.substring(node['start'], node['end'] - 1);
    node['parsedCssText'] = node['cssText'] = t.trim();

    if (node['parent']) {
      var ss = node['previous'] ? node['previous']['end'] : node['parent']['start'];
      t = text.substring(ss, node['start'] - 1);
      t = _expandUnicodeEscapes(t);
      t = t.replace(RX.multipleSpaces, ' '); // TODO(sorvell): ad hoc; make selector include only after last ;
      // helps with mixin syntax

      t = t.substring(t.lastIndexOf(';') + 1);
      var s = node['parsedSelector'] = node['selector'] = t.trim();
      node['atRule'] = s.indexOf(AT_START) === 0; // note, support a subset of rule types...

      if (node['atRule']) {
        if (s.indexOf(MEDIA_START) === 0) {
          node['type'] = types.MEDIA_RULE;
        } else if (s.match(RX.keyframesRule)) {
          node['type'] = types.KEYFRAMES_RULE;
          node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
        }
      } else {
        if (s.indexOf(VAR_START) === 0) {
          node['type'] = types.MIXIN_RULE;
        } else {
          node['type'] = types.STYLE_RULE;
        }
      }
    }

    var r$ = node['rules'];

    if (r$) {
      for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
        parseCss(r, text);
      }
    }

    return node;
  }
  /**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */


  function _expandUnicodeEscapes(s) {
    return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
      var code = arguments[1],
          repeat = 6 - code.length;

      while (repeat--) {
        code = '0' + code;
      }

      return '\\' + code;
    });
  }
  /**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */


  function stringify(node, preserveProperties) {
    var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    // calc rule cssText
    var cssText = '';

    if (node['cssText'] || node['rules']) {
      var r$ = node['rules'];

      if (r$ && !_hasMixinRules(r$)) {
        for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
          cssText = stringify(r, preserveProperties, cssText);
        }
      } else {
        cssText = preserveProperties ? node['cssText'] : removeCustomProps(node['cssText']);
        cssText = cssText.trim();

        if (cssText) {
          cssText = '  ' + cssText + '\n';
        }
      }
    } // emit rule if there is cssText


    if (cssText) {
      if (node['selector']) {
        text += node['selector'] + ' ' + OPEN_BRACE + '\n';
      }

      text += cssText;

      if (node['selector']) {
        text += CLOSE_BRACE + '\n\n';
      }
    }

    return text;
  }
  /**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */


  function _hasMixinRules(rules) {
    var r = rules[0];
    return Boolean(r) && Boolean(r['selector']) && r['selector'].indexOf(VAR_START) === 0;
  }
  /**
   * @param {string} cssText
   * @return {string}
   */


  function removeCustomProps(cssText) {
    cssText = removeCustomPropAssignment(cssText);
    return removeCustomPropApply(cssText);
  }
  /**
   * @param {string} cssText
   * @return {string}
   */


  function removeCustomPropAssignment(cssText) {
    return cssText.replace(RX.customProp, '').replace(RX.mixinProp, '');
  }
  /**
   * @param {string} cssText
   * @return {string}
   */


  function removeCustomPropApply(cssText) {
    return cssText.replace(RX.mixinApply, '').replace(RX.varApply, '');
  }
  /** @enum {number} */


  var types = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7,
    MEDIA_RULE: 4,
    MIXIN_RULE: 1000
  };
  _exports.types = types;
  var OPEN_BRACE = '{';
  var CLOSE_BRACE = '}'; // helper regexp's

  var RX = {
    comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
  };
  var VAR_START = '--';
  var MEDIA_START = '@media';
  var AT_START = '@';
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/custom-style-interface.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/custom-style-interface.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./document-wait.js */ "./node_modules/@webcomponents/shadycss/src/document-wait.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _documentWait) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CustomStyleInterfaceInterface = _exports.default = _exports.CustomStyleProvider = void 0;
  _documentWait = babelHelpers.interopRequireDefault(_documentWait);

  /**
   * @typedef {HTMLStyleElement | {getStyle: function():HTMLStyleElement}}
   */
  var CustomStyleProvider;
  _exports.CustomStyleProvider = CustomStyleProvider;
  var SEEN_MARKER = '__seenByShadyCSS';
  var CACHED_STYLE = '__shadyCSSCachedStyle';
  /** @type {?function(!HTMLStyleElement)} */

  var transformFn = null;
  /** @type {?function()} */

  var validateFn = null;
  /**
  This interface is provided to add document-level <style> elements to ShadyCSS for processing.
  These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
  In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties
  
  To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`
  
  In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
  This function will be called when calculating styles.
  
  An example usage of the document-level styling api can be found in `examples/document-style-lib.js`
  
  @unrestricted
  */

  var CustomStyleInterface =
  /*#__PURE__*/
  function () {
    function CustomStyleInterface() {
      babelHelpers.classCallCheck(this, CustomStyleInterface);

      /** @type {!Array<!CustomStyleProvider>} */
      this['customStyles'] = [];
      this['enqueued'] = false; // NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;

      (0, _documentWait.default)(function () {
        if (window['ShadyCSS']['flushCustomStyles']) {
          window['ShadyCSS']['flushCustomStyles']();
        }
      });
    }
    /**
     * Queue a validation for new custom styles to batch style recalculations
     */


    babelHelpers.createClass(CustomStyleInterface, [{
      key: "enqueueDocumentValidation",
      value: function enqueueDocumentValidation() {
        if (this['enqueued'] || !validateFn) {
          return;
        }

        this['enqueued'] = true;
        (0, _documentWait.default)(validateFn);
      }
      /**
       * @param {!HTMLStyleElement} style
       */

    }, {
      key: "addCustomStyle",
      value: function addCustomStyle(style) {
        if (!style[SEEN_MARKER]) {
          style[SEEN_MARKER] = true;
          this['customStyles'].push(style);
          this.enqueueDocumentValidation();
        }
      }
      /**
       * @param {!CustomStyleProvider} customStyle
       * @return {HTMLStyleElement}
       */

    }, {
      key: "getStyleForCustomStyle",
      value: function getStyleForCustomStyle(customStyle) {
        if (customStyle[CACHED_STYLE]) {
          return customStyle[CACHED_STYLE];
        }

        var style;

        if (customStyle['getStyle']) {
          style = customStyle['getStyle']();
        } else {
          style = customStyle;
        }

        return style;
      }
      /**
       * @return {!Array<!CustomStyleProvider>}
       */

    }, {
      key: "processStyles",
      value: function processStyles() {
        var cs = this['customStyles'];

        for (var i = 0; i < cs.length; i++) {
          var customStyle = cs[i];

          if (customStyle[CACHED_STYLE]) {
            continue;
          }

          var style = this.getStyleForCustomStyle(customStyle);

          if (style) {
            // HTMLImports polyfill may have cloned the style into the main document,
            // which is referenced with __appliedElement.
            var styleToTransform =
            /** @type {!HTMLStyleElement} */
            style['__appliedElement'] || style;

            if (transformFn) {
              transformFn(styleToTransform);
            }

            customStyle[CACHED_STYLE] = styleToTransform;
          }
        }

        return cs;
      }
    }]);
    return CustomStyleInterface;
  }();

  _exports.default = CustomStyleInterface;
  CustomStyleInterface.prototype['addCustomStyle'] = CustomStyleInterface.prototype.addCustomStyle;
  CustomStyleInterface.prototype['getStyleForCustomStyle'] = CustomStyleInterface.prototype.getStyleForCustomStyle;
  CustomStyleInterface.prototype['processStyles'] = CustomStyleInterface.prototype.processStyles;
  Object.defineProperties(CustomStyleInterface.prototype, {
    'transformCallback': {
      /** @return {?function(!HTMLStyleElement)} */
      get: function get() {
        return transformFn;
      },

      /** @param {?function(!HTMLStyleElement)} fn */
      set: function set(fn) {
        transformFn = fn;
      }
    },
    'validateCallback': {
      /** @return {?function()} */
      get: function get() {
        return validateFn;
      },

      /**
       * @param {?function()} fn
       * @this {CustomStyleInterface}
       */
      set: function set(fn) {
        var needsEnqueue = false;

        if (!validateFn) {
          needsEnqueue = true;
        }

        validateFn = fn;

        if (needsEnqueue) {
          this.enqueueDocumentValidation();
        }
      }
    }
  });
  /** @typedef {{
   * customStyles: !Array<!CustomStyleProvider>,
   * addCustomStyle: function(!CustomStyleProvider),
   * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
   * findStyles: function(),
   * transformCallback: ?function(!HTMLStyleElement),
   * validateCallback: ?function()
   * }}
   */

  var CustomStyleInterfaceInterface;
  _exports.CustomStyleInterfaceInterface = CustomStyleInterfaceInterface;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/document-wait.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/document-wait.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  /** @type {Promise<void>} */

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = documentWait;
  var readyPromise = null;
  /** @type {?function(?function())} */

  var whenReady = window['HTMLImports'] && window['HTMLImports']['whenReady'] || null;
  /** @type {function()} */

  var resolveFn;
  /**
   * @param {?function()} callback
   */

  function documentWait(callback) {
    requestAnimationFrame(function () {
      if (whenReady) {
        whenReady(callback);
      } else {
        if (!readyPromise) {
          readyPromise = new Promise(function (resolve) {
            resolveFn = resolve;
          });

          if (document.readyState === 'complete') {
            resolveFn();
          } else {
            document.addEventListener('readystatechange', function () {
              if (document.readyState === 'complete') {
                resolveFn();
              }
            });
          }
        }

        readyPromise.then(function () {
          callback && callback();
        });
      }
    });
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/style-settings.js":
/*!********************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/style-settings.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.nativeCssVariables = _exports.nativeShadow = void 0;
  var nativeShadow = !(window['ShadyDOM'] && window['ShadyDOM']['inUse']);
  _exports.nativeShadow = nativeShadow;
  var nativeCssVariables_;
  /**
   * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
   */

  function calcCssVariables(settings) {
    if (settings && settings['shimcssproperties']) {
      nativeCssVariables_ = false;
    } else {
      // chrome 49 has semi-working css vars, check if box-shadow works
      // safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
      // However, shim css custom properties are only supported with ShadyDOM enabled,
      // so fall back on native if we do not detect ShadyDOM
      // Edge 15: custom properties used in ::before and ::after will also be used in the parent element
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
      nativeCssVariables_ = nativeShadow || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'));
    }
  }

  if (window.ShadyCSS && window.ShadyCSS.nativeCss !== undefined) {
    nativeCssVariables_ = window.ShadyCSS.nativeCss;
  } else if (window.ShadyCSS) {
    calcCssVariables(window.ShadyCSS); // reset window variable to let ShadyCSS API take its place

    window.ShadyCSS = undefined;
  } else {
    calcCssVariables(window['WebComponents'] && window['WebComponents']['flags']);
  } // Hack for type error under new type inference which doesn't like that
  // nativeCssVariables is updated in a function and assigns the type
  // `function(): ?` instead of `boolean`.


  var nativeCssVariables =
  /** @type {boolean} */
  nativeCssVariables_;
  _exports.nativeCssVariables = nativeCssVariables;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/style-util.js":
/*!****************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/style-util.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./style-settings.js */ "./node_modules/@webcomponents/shadycss/src/style-settings.js"), __webpack_require__(/*! ./css-parse.js */ "./node_modules/@webcomponents/shadycss/src/css-parse.js"), __webpack_require__(/*! ./common-regex.js */ "./node_modules/@webcomponents/shadycss/src/common-regex.js"), __webpack_require__(/*! ./unscoped-style-handler.js */ "./node_modules/@webcomponents/shadycss/src/unscoped-style-handler.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _styleSettings, _cssParse, _commonRegex, _unscopedStyleHandler) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.toCssText = toCssText;
  _exports.rulesForStyle = rulesForStyle;
  _exports.isKeyframesSelector = isKeyframesSelector;
  _exports.forEachRule = forEachRule;
  _exports.applyCss = applyCss;
  _exports.createScopeStyle = createScopeStyle;
  _exports.applyStylePlaceHolder = applyStylePlaceHolder;
  _exports.applyStyle = applyStyle;
  _exports.isTargetedBuild = isTargetedBuild;
  _exports.getCssBuildType = getCssBuildType;
  _exports.processVariableAndFallback = processVariableAndFallback;
  _exports.setElementClassRaw = setElementClassRaw;
  _exports.getIsExtends = getIsExtends;
  _exports.gatherStyleText = gatherStyleText;

  // eslint-disable-line no-unused-vars

  /**
   * @param {string|StyleNode} rules
   * @param {function(StyleNode)=} callback
   * @return {string}
   */
  function toCssText(rules, callback) {
    if (!rules) {
      return '';
    }

    if (typeof rules === 'string') {
      rules = (0, _cssParse.parse)(rules);
    }

    if (callback) {
      forEachRule(rules, callback);
    }

    return (0, _cssParse.stringify)(rules, _styleSettings.nativeCssVariables);
  }
  /**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */


  function rulesForStyle(style) {
    if (!style['__cssRules'] && style.textContent) {
      style['__cssRules'] = (0, _cssParse.parse)(style.textContent);
    }

    return style['__cssRules'] || null;
  } // Tests if a rule is a keyframes selector, which looks almost exactly
  // like a normal selector but is not (it has nothing to do with scoping
  // for example).

  /**
   * @param {StyleNode} rule
   * @return {boolean}
   */


  function isKeyframesSelector(rule) {
    return Boolean(rule['parent']) && rule['parent']['type'] === _cssParse.types.KEYFRAMES_RULE;
  }
  /**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */


  function forEachRule(node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
    if (!node) {
      return;
    }

    var skipRules = false;
    var type = node['type'];

    if (onlyActiveRules) {
      if (type === _cssParse.types.MEDIA_RULE) {
        var matchMedia = node['selector'].match(_commonRegex.MEDIA_MATCH);

        if (matchMedia) {
          // if rule is a non matching @media rule, skip subrules
          if (!window.matchMedia(matchMedia[1]).matches) {
            skipRules = true;
          }
        }
      }
    }

    if (type === _cssParse.types.STYLE_RULE) {
      styleRuleCallback(node);
    } else if (keyframesRuleCallback && type === _cssParse.types.KEYFRAMES_RULE) {
      keyframesRuleCallback(node);
    } else if (type === _cssParse.types.MIXIN_RULE) {
      skipRules = true;
    }

    var r$ = node['rules'];

    if (r$ && !skipRules) {
      for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
        forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
      }
    }
  } // add a string of cssText to the document.

  /**
   * @param {string} cssText
   * @param {string} moniker
   * @param {Node} target
   * @param {Node} contextNode
   * @return {HTMLStyleElement}
   */


  function applyCss(cssText, moniker, target, contextNode) {
    var style = createScopeStyle(cssText, moniker);
    applyStyle(style, target, contextNode);
    return style;
  }
  /**
   * @param {string} cssText
   * @param {string} moniker
   * @return {HTMLStyleElement}
   */


  function createScopeStyle(cssText, moniker) {
    var style =
    /** @type {HTMLStyleElement} */
    document.createElement('style');

    if (moniker) {
      style.setAttribute('scope', moniker);
    }

    style.textContent = cssText;
    return style;
  }
  /**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */


  var lastHeadApplyNode = null; // insert a comment node as a styling position placeholder.

  /**
   * @param {string} moniker
   * @return {!Comment}
   */

  function applyStylePlaceHolder(moniker) {
    var placeHolder = document.createComment(' Shady DOM styles for ' + moniker + ' ');
    var after = lastHeadApplyNode ? lastHeadApplyNode['nextSibling'] : null;
    var scope = document.head;
    scope.insertBefore(placeHolder, after || scope.firstChild);
    lastHeadApplyNode = placeHolder;
    return placeHolder;
  }
  /**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */


  function applyStyle(style, target, contextNode) {
    target = target || document.head;
    var after = contextNode && contextNode.nextSibling || target.firstChild;
    target.insertBefore(style, after);

    if (!lastHeadApplyNode) {
      lastHeadApplyNode = style;
    } else {
      // only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
      var position = style.compareDocumentPosition(lastHeadApplyNode);

      if (position === Node.DOCUMENT_POSITION_PRECEDING) {
        lastHeadApplyNode = style;
      }
    }
  }
  /**
   * @param {string} buildType
   * @return {boolean}
   */


  function isTargetedBuild(buildType) {
    return _styleSettings.nativeShadow ? buildType === 'shadow' : buildType === 'shady';
  }
  /**
   * @param {Element} element
   * @return {?string}
   */


  function getCssBuildType(element) {
    return element.getAttribute('css-build');
  }
  /**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */


  function findMatchingParen(text, start) {
    var level = 0;

    for (var i = start, l = text.length; i < l; i++) {
      if (text[i] === '(') {
        level++;
      } else if (text[i] === ')') {
        if (--level === 0) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */


  function processVariableAndFallback(str, callback) {
    // find 'var('
    var start = str.indexOf('var(');

    if (start === -1) {
      // no var?, everything is prefix
      return callback(str, '', '', '');
    } //${prefix}var(${inner})${suffix}


    var end = findMatchingParen(str, start + 3);
    var inner = str.substring(start + 4, end);
    var prefix = str.substring(0, start); // suffix may have other variables

    var suffix = processVariableAndFallback(str.substring(end + 1), callback);
    var comma = inner.indexOf(','); // value and fallback args should be trimmed to match in property lookup

    if (comma === -1) {
      // variable, no fallback
      return callback(prefix, inner.trim(), '', suffix);
    } // var(${value},${fallback})


    var value = inner.substring(0, comma).trim();
    var fallback = inner.substring(comma + 1).trim();
    return callback(prefix, value, fallback, suffix);
  }
  /**
   * @param {Element} element
   * @param {string} value
   */


  function setElementClassRaw(element, value) {
    // use native setAttribute provided by ShadyDOM when setAttribute is patched
    if (_styleSettings.nativeShadow) {
      element.setAttribute('class', value);
    } else {
      window['ShadyDOM']['nativeMethods']['setAttribute'].call(element, 'class', value);
    }
  }
  /**
   * @param {Element | {is: string, extends: string}} element
   * @return {{is: string, typeExtension: string}}
   */


  function getIsExtends(element) {
    var localName = element['localName'];
    var is = '',
        typeExtension = '';
    /*
    NOTE: technically, this can be wrong for certain svg elements
    with `-` in the name like `<font-face>`
    */

    if (localName) {
      if (localName.indexOf('-') > -1) {
        is = localName;
      } else {
        typeExtension = localName;
        is = element.getAttribute && element.getAttribute('is') || '';
      }
    } else {
      is =
      /** @type {?} */
      element.is;
      typeExtension =
      /** @type {?} */
      element.extends;
    }

    return {
      is: is,
      typeExtension: typeExtension
    };
  }
  /**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */


  function gatherStyleText(element) {
    /** @type {!Array<string>} */
    var styleTextParts = [];
    var styles =
    /** @type {!NodeList<!HTMLStyleElement>} */
    element.querySelectorAll('style');

    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];

      if ((0, _unscopedStyleHandler.isUnscopedStyle)(style)) {
        if (!_styleSettings.nativeShadow) {
          (0, _unscopedStyleHandler.processUnscopedStyle)(style);
          style.parentNode.removeChild(style);
        }
      } else {
        styleTextParts.push(style.textContent);
        style.parentNode.removeChild(style);
      }
    }

    return styleTextParts.join('').trim();
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/template-map.js":
/*!******************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/template-map.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  /**
   * @const {!Object<string, !HTMLTemplateElement>}
   */

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var templateMap = {};
  var _default = templateMap;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@webcomponents/shadycss/src/unscoped-style-handler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/shadycss/src/unscoped-style-handler.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  /** @type {!Set<string>} */

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.processUnscopedStyle = processUnscopedStyle;
  _exports.isUnscopedStyle = isUnscopedStyle;
  _exports.scopingAttribute = void 0;
  var styleTextSet = new Set();
  var scopingAttribute = 'shady-unscoped';
  /**
   * Add a specifically-marked style to the document directly, and only one copy of that style.
   *
   * @param {!HTMLStyleElement} style
   * @return {undefined}
   */

  _exports.scopingAttribute = scopingAttribute;

  function processUnscopedStyle(style) {
    var text = style.textContent;

    if (!styleTextSet.has(text)) {
      styleTextSet.add(text);
      var newStyle = style.cloneNode(true);
      document.head.appendChild(newStyle);
    }
  }
  /**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */


  function isUnscopedStyle(style) {
    return style.hasAttribute(scopingAttribute);
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lit-html/lib/lit-extended.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/lit-extended.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "render", {
    enumerable: true,
    get: function get() {
      return _litHtml.render;
    }
  });
  _exports.EventPart = _exports.PropertyPart = _exports.BooleanAttributePart = _exports.extendedPartCallback = _exports.svg = _exports.html = void 0;

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * Interprets a template literal as a lit-extended HTML template.
   */
  var html = function html(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return new _litHtml.TemplateResult(strings, values, 'html', extendedPartCallback);
  };
  /**
   * Interprets a template literal as a lit-extended SVG template.
   */


  _exports.html = html;

  var svg = function svg(strings) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new _litHtml.SVGTemplateResult(strings, values, 'svg', extendedPartCallback);
  };
  /**
   * A PartCallback which allows templates to set properties and declarative
   * event handlers.
   *
   * Properties are set by default, instead of attributes. Attribute names in
   * lit-html templates preserve case, so properties are case sensitive. If an
   * expression takes up an entire attribute value, then the property is set to
   * that value. If an expression is interpolated with a string or other
   * expressions then the property is set to the string result of the
   * interpolation.
   *
   * To set an attribute instead of a property, append a `$` suffix to the
   * attribute name.
   *
   * Example:
   *
   *     html`<button class$="primary">Buy Now</button>`
   *
   * To set an event handler, prefix the attribute name with `on-`:
   *
   * Example:
   *
   *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
   *
   */


  _exports.svg = svg;

  var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
      if (templatePart.rawName.substr(0, 3) === 'on-') {
        var eventName = templatePart.rawName.slice(3);
        return new EventPart(instance, node, eventName);
      }

      var lastChar = templatePart.name.substr(templatePart.name.length - 1);

      if (lastChar === '$') {
        var name = templatePart.name.slice(0, -1);
        return new _litHtml.AttributePart(instance, node, name, templatePart.strings);
      }

      if (lastChar === '?') {
        var _name = templatePart.name.slice(0, -1);

        return new BooleanAttributePart(instance, node, _name, templatePart.strings);
      }

      return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
    }

    return (0, _litHtml.defaultPartCallback)(instance, templatePart, node);
  };
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */


  _exports.extendedPartCallback = extendedPartCallback;

  var BooleanAttributePart =
  /*#__PURE__*/
  function (_AttributePart) {
    babelHelpers.inherits(BooleanAttributePart, _AttributePart);

    function BooleanAttributePart() {
      babelHelpers.classCallCheck(this, BooleanAttributePart);
      return babelHelpers.possibleConstructorReturn(this, (BooleanAttributePart.__proto__ || Object.getPrototypeOf(BooleanAttributePart)).apply(this, arguments));
    }

    babelHelpers.createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(values, startIndex) {
        var s = this.strings;

        if (s.length === 2 && s[0] === '' && s[1] === '') {
          var value = (0, _litHtml.getValue)(this, values[startIndex]);

          if (value === _litHtml.noChange) {
            return;
          }

          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }
        } else {
          throw new Error('boolean attributes can only contain a single expression');
        }
      }
    }]);
    return BooleanAttributePart;
  }(_litHtml.AttributePart);

  _exports.BooleanAttributePart = BooleanAttributePart;

  var PropertyPart =
  /*#__PURE__*/
  function (_AttributePart2) {
    babelHelpers.inherits(PropertyPart, _AttributePart2);

    function PropertyPart() {
      babelHelpers.classCallCheck(this, PropertyPart);
      return babelHelpers.possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
    }

    babelHelpers.createClass(PropertyPart, [{
      key: "setValue",
      value: function setValue(values, startIndex) {
        var s = this.strings;
        var value;

        if (this._equalToPreviousValues(values, startIndex)) {
          return;
        }

        if (s.length === 2 && s[0] === '' && s[1] === '') {
          // An expression that occupies the whole attribute value will leave
          // leading and trailing empty strings.
          value = (0, _litHtml.getValue)(this, values[startIndex]);
        } else {
          // Interpolation, so interpolate
          value = this._interpolate(values, startIndex);
        }

        if (value !== _litHtml.noChange) {
          this.element[this.name] = value;
        }

        this._previousValues = values;
      }
    }]);
    return PropertyPart;
  }(_litHtml.AttributePart);

  _exports.PropertyPart = PropertyPart;

  var EventPart =
  /*#__PURE__*/
  function () {
    function EventPart(instance, element, eventName) {
      babelHelpers.classCallCheck(this, EventPart);
      this.instance = instance;
      this.element = element;
      this.eventName = eventName;
    }

    babelHelpers.createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        var listener = (0, _litHtml.getValue)(this, value);

        if (listener === this._listener) {
          return;
        }

        if (listener == null) {
          this.element.removeEventListener(this.eventName, this);
        } else if (this._listener == null) {
          this.element.addEventListener(this.eventName, this);
        }

        this._listener = listener;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this._listener === 'function') {
          this._listener.call(this.element, event);
        } else if (typeof this._listener.handleEvent === 'function') {
          this._listener.handleEvent(event);
        }
      }
    }]);
    return EventPart;
  }();

  _exports.EventPart = EventPart;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lit-html/lib/modify-template.js":
/*!******************************************************!*\
  !*** ./node_modules/lit-html/lib/modify-template.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.removeNodesFromTemplate = removeNodesFromTemplate;
  _exports.insertNodeIntoTemplate = insertNodeIntoTemplate;

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
   */

  function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
        parts = template.parts;
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = 0;
    var part = parts[0];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;

    while (walker.nextNode()) {
      nodeIndex++;
      var node = walker.currentNode; // End removal if stepped past the removing node

      if (node.previousSibling === currentRemovingNode) {
        currentRemovingNode = null;
      } // A node to remove was found in the template


      if (nodesToRemove.has(node)) {
        nodesToRemoveInTemplate.push(node); // Track node we're removing

        if (currentRemovingNode === null) {
          currentRemovingNode = node;
        }
      } // When removing, increment count by which to adjust subsequent part indices


      if (currentRemovingNode !== null) {
        removeCount++;
      }

      while (part !== undefined && part.index === nodeIndex) {
        // If part is in a removed node deactivate it by setting index to -1 or
        // adjust the index as needed.
        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
        part = parts[++partIndex];
      }
    }

    nodesToRemoveInTemplate.forEach(function (n) {
      return n.parentNode.removeChild(n);
    });
  }

  var countNodes = function countNodes(node) {
    var count = 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

    while (walker.nextNode()) {
      count++;
    }

    return count;
  };

  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var i = startIndex + 1; i < parts.length; i++) {
      var part = parts[i];

      if ((0, _litHtml.isTemplatePartActive)(part)) {
        return i;
      }
    }

    return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */


  function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
        parts = template.parts; // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.

    if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
    }

    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;

    while (walker.nextNode()) {
      walkerIndex++;
      var walkerNode = walker.currentNode;

      if (walkerNode === refNode) {
        refNode.parentNode.insertBefore(node, refNode);
        insertCount = countNodes(node);
      }

      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
        // If we've inserted the node, simply adjust all subsequent parts
        if (insertCount > 0) {
          while (partIndex !== -1) {
            parts[partIndex].index += insertCount;
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }

          return;
        }

        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
    }
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lit-html/lib/shady-render.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/lib/shady-render.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js"), __webpack_require__(/*! ./modify-template.js */ "./node_modules/lit-html/lib/modify-template.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litHtml, _modifyTemplate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.render = render;
  Object.defineProperty(_exports, "html", {
    enumerable: true,
    get: function get() {
      return _litHtml.html;
    }
  });
  Object.defineProperty(_exports, "svg", {
    enumerable: true,
    get: function get() {
      return _litHtml.svg;
    }
  });
  Object.defineProperty(_exports, "TemplateResult", {
    enumerable: true,
    get: function get() {
      return _litHtml.TemplateResult;
    }
  });

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // Get a key to lookup in `templateCaches`.
  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return "".concat(type, "--").concat(scopeName);
  };
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */


  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
      var cacheKey = getTemplateCacheKey(result.type, scopeName);

      var templateCache = _litHtml.templateCaches.get(cacheKey);

      if (templateCache === undefined) {
        templateCache = new Map();

        _litHtml.templateCaches.set(cacheKey, templateCache);
      }

      var template = templateCache.get(result.strings);

      if (template === undefined) {
        var element = result.getTemplateElement();

        if (babelHelpers.typeof(window.ShadyCSS) === 'object') {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }

        template = new _litHtml.Template(result, element);
        templateCache.set(result.strings, template);
      }

      return template;
    };
  };

  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */

  function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
      var templates = _litHtml.templateCaches.get(getTemplateCacheKey(type, scopeName));

      if (templates !== undefined) {
        templates.forEach(function (template) {
          var content = template.element.content;
          var styles = content.querySelectorAll('style');
          (0, _modifyTemplate.removeNodesFromTemplate)(template, new Set(Array.from(styles)));
        });
      }
    });
  }

  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered output.
   */

  var ensureStylesScoped = function ensureStylesScoped(fragment, template, scopeName) {
    // only scope element template once per scope name
    if (!shadyRenderSet.has(scopeName)) {
      shadyRenderSet.add(scopeName);
      var styleTemplate = document.createElement('template');
      Array.from(fragment.querySelectorAll('style')).forEach(function (s) {
        styleTemplate.content.appendChild(s);
      });
      window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName); // Fix templates: note the expectation here is that the given `fragment`
      // has been generated from the given `template` which contains
      // the set of templates rendered into this scope.
      // It is only from this set of initial templates from which styles
      // will be scoped and removed.

      removeStylesFromLitTemplates(scopeName); // ApplyShim case

      if (window.ShadyCSS.nativeShadow) {
        var style = styleTemplate.content.querySelector('style');

        if (style !== null) {
          // Insert style into rendered fragment
          fragment.insertBefore(style, fragment.firstChild); // Insert into lit-template (for subsequent renders)

          (0, _modifyTemplate.insertNodeIntoTemplate)(template, style.cloneNode(true), template.element.content.firstChild);
        }
      }
    }
  }; // NOTE: We're copying code from lit-html's `render` method here.
  // We're doing this explicitly because the API for rendering templates is likely
  // to change in the near term.


  function render(result, container, scopeName) {
    var templateFactory = shadyTemplateFactory(scopeName);
    var template = templateFactory(result);
    var instance = container.__templateInstance; // Repeat render, just call update()

    if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
      instance.update(result.values);
      return;
    } // First render, create a new TemplateInstance and append it


    instance = new _litHtml.TemplateInstance(template, result.partCallback, templateFactory);
    container.__templateInstance = instance;

    var fragment = instance._clone();

    instance.update(result.values);
    var host = babelHelpers.instanceof(container, ShadowRoot) ? container.host : undefined; // If there's a shadow host, do ShadyCSS scoping...

    if (host !== undefined && babelHelpers.typeof(window.ShadyCSS) === 'object') {
      ensureStylesScoped(fragment, template, scopeName);
      window.ShadyCSS.styleElement(host);
    }

    (0, _litHtml.removeNodes)(container, container.firstChild);
    container.appendChild(fragment);
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.defaultTemplateFactory = defaultTemplateFactory;
  _exports.render = render;
  _exports.removeNodes = _exports.reparentNodes = _exports.TemplateInstance = _exports.defaultPartCallback = _exports.NodePart = _exports.AttributePart = _exports.directiveValue = _exports.noChange = _exports.directive = _exports.getValue = _exports.Template = _exports.isTemplatePartActive = _exports.TemplatePart = _exports.SVGTemplateResult = _exports.TemplateResult = _exports.svg = _exports.html = _exports.templateCaches = void 0;

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // The first argument to JS template tags retain identity across multiple
  // calls to a tag for the same literal, so we can cache work done per literal
  // in a Map.
  var templateCaches = new Map();
  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */

  _exports.templateCaches = templateCaches;

  var html = function html(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(strings, values, 'html');
  };
  /**
   * Interprets a template literal as an SVG template that can efficiently
   * render to and update a container.
   */


  _exports.html = html;

  var svg = function svg(strings) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new SVGTemplateResult(strings, values, 'svg');
  };
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */


  _exports.svg = svg;

  var TemplateResult =
  /*#__PURE__*/
  function () {
    function TemplateResult(strings, values, type) {
      var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;
      babelHelpers.classCallCheck(this, TemplateResult);
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.partCallback = partCallback;
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */


    babelHelpers.createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var l = this.strings.length - 1;
        var html = '';
        var isTextBinding = true;

        for (var i = 0; i < l; i++) {
          var s = this.strings[i];
          html += s; // We're in a text position if the previous string closed its tags.
          // If it doesn't have any tags, then we use the previous text position
          // state.

          var closing = findTagClose(s);
          isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
          html += isTextBinding ? nodeMarker : marker;
        }

        html += this.strings[l];
        return html;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
      }
    }]);
    return TemplateResult;
  }();
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an <svg> tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the <svg> tag so that
   * clones only container the original fragment.
   */


  _exports.TemplateResult = TemplateResult;

  var SVGTemplateResult =
  /*#__PURE__*/
  function (_TemplateResult) {
    babelHelpers.inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
      babelHelpers.classCallCheck(this, SVGTemplateResult);
      return babelHelpers.possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
    }

    babelHelpers.createClass(SVGTemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        return "<svg>".concat(babelHelpers.get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = babelHelpers.get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);
        var content = template.content;
        var svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
      }
    }]);
    return SVGTemplateResult;
  }(TemplateResult);
  /**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */


  _exports.SVGTemplateResult = SVGTemplateResult;

  function defaultTemplateFactory(result) {
    var templateCache = templateCaches.get(result.type);

    if (templateCache === undefined) {
      templateCache = new Map();
      templateCaches.set(result.type, templateCache);
    }

    var template = templateCache.get(result.strings);

    if (template === undefined) {
      template = new Template(result, result.getTemplateElement());
      templateCache.set(result.strings, template);
    }

    return template;
  }
  /**
   * Renders a template to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   *
   * @param result a TemplateResult created by evaluating a template tag like
   *     `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   *     replaced, or efficiently updated if the same result type was previous
   *     rendered there.
   * @param templateFactory a function to create a Template or retreive one from
   *     cache.
   */


  function render(result, container) {
    var templateFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultTemplateFactory;
    var template = templateFactory(result);
    var instance = container.__templateInstance; // Repeat render, just call update()

    if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
      instance.update(result.values);
      return;
    } // First render, create a new TemplateInstance and append it


    instance = new TemplateInstance(template, result.partCallback, templateFactory);
    container.__templateInstance = instance;

    var fragment = instance._clone();

    instance.update(result.values);
    removeNodes(container, container.firstChild);
    container.appendChild(fragment);
  }
  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */


  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
   * An expression marker used text-positions, not attribute positions,
   * in template.
   */

  var nodeMarker = "<!--".concat(marker, "-->");
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#attributes-0
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-character
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */

  var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
  /**
   * Finds the closing index of the last closed HTML tag.
   * This has 3 possible return values:
   *   - `-1`, meaning there is no tag in str.
   *   - `string.length`, meaning the last opened tag is unclosed.
   *   - Some positive number < str.length, meaning the index of the closing '>'.
   */

  function findTagClose(str) {
    var close = str.lastIndexOf('>');
    var open = str.indexOf('<', close + 1);
    return open > -1 ? str.length : close;
  }
  /**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */


  var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
    babelHelpers.classCallCheck(this, TemplatePart);
    this.type = type;
    this.index = index;
    this.name = name;
    this.rawName = rawName;
    this.strings = strings;
  };

  _exports.TemplatePart = TemplatePart;

  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  };
  /**
   * An updateable Template that tracks the location of dynamic parts.
   */


  _exports.isTemplatePartActive = isTemplatePartActive;

  var Template = function Template(result, element) {
    babelHelpers.classCallCheck(this, Template);
    this.parts = [];
    this.element = element;
    var content = this.element.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    var walker = document.createTreeWalker(content, 133
    /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
    NodeFilter.SHOW_TEXT */
    , null, false);
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = []; // The actual previous node, accounting for removals: if a node is removed
    // it will never be the previousNode.

    var previousNode; // Used to set previousNode at the top of the loop.

    var currentNode;

    while (walker.nextNode()) {
      index++;
      previousNode = currentNode;
      var node = currentNode = walker.currentNode;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (!node.hasAttributes()) {
            continue;
          }

          var attributes = node.attributes; // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order. In
          // particular, Edge/IE can return them out of order, so we cannot assume
          // a correspondance between part index and attribute index.

          var count = 0;

          for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].value.indexOf(marker) >= 0) {
              count++;
            }
          }

          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = result.strings[partIndex]; // Find the attribute name

            var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1]; // Find the corresponding attribute
            // TODO(justinfagnani): remove non-null assertion

            var attribute = attributes.getNamedItem(attributeNameInPart);
            var stringsForAttributeValue = attribute.value.split(markerRegex);
            this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
            node.removeAttribute(attribute.name);
            partIndex += stringsForAttributeValue.length - 1;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var nodeValue = node.nodeValue;

          if (nodeValue.indexOf(marker) < 0) {
            continue;
          }

          var parent = node.parentNode;
          var strings = nodeValue.split(markerRegex);
          var lastIndex = strings.length - 1; // We have a part for each match found

          partIndex += lastIndex; // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts

          for (var _i = 0; _i < lastIndex; _i++) {
            parent.insertBefore(strings[_i] === '' ? document.createComment('') : document.createTextNode(strings[_i]), node);
            this.parts.push(new TemplatePart('node', index++));
          }

          parent.insertBefore(strings[lastIndex] === '' ? document.createComment('') : document.createTextNode(strings[lastIndex]), node);
          nodesToRemove.push(node);
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      && node.nodeValue === marker) {
        var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of the
        // following are true:
        //  * We don't have a previousSibling
        //  * previousSibling is being removed (thus it's not the
        //    `previousNode`)
        //  * previousSibling is not a Text node
        //
        // TODO(justinfagnani): We should be able to use the previousNode here
        // as the marker node and reduce the number of extra nodes we add to a
        // template. See https://github.com/PolymerLabs/lit-html/issues/147

        var previousSibling = node.previousSibling;

        if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
          _parent.insertBefore(document.createComment(''), node);
        } else {
          index--;
        }

        this.parts.push(new TemplatePart('node', index++));
        nodesToRemove.push(node); // If we don't have a nextSibling add a marker node.
        // We don't have to check if the next node is going to be removed,
        // because that node will induce a new marker if so.

        if (node.nextSibling === null) {
          _parent.insertBefore(document.createComment(''), node);
        } else {
          index--;
        }

        currentNode = previousNode;
        partIndex++;
      }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (var _i2 = 0; _i2 < nodesToRemove.length; _i2++) {
      var n = nodesToRemove[_i2];
      n.parentNode.removeChild(n);
    }
  };
  /**
   * Returns a value ready to be inserted into a Part from a user-provided value.
   *
   * If the user value is a directive, this invokes the directive with the given
   * part. If the value is null, it's converted to undefined to work better
   * with certain DOM APIs, like textContent.
   */


  _exports.Template = Template;

  var getValue = function getValue(part, value) {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (isDirective(value)) {
      value = value(part);
      return noChange;
    }

    return value === null ? undefined : value;
  };

  _exports.getValue = getValue;

  var directive = function directive(f) {
    f.__litDirective = true;
    return f;
  };

  _exports.directive = directive;

  var isDirective = function isDirective(o) {
    return typeof o === 'function' && o.__litDirective === true;
  };
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */


  var noChange = {};
  /**
   * @deprecated Use `noChange` instead.
   */

  _exports.directiveValue = _exports.noChange = noChange;

  var isPrimitiveValue = function isPrimitiveValue(value) {
    return value === null || !(babelHelpers.typeof(value) === 'object' || typeof value === 'function');
  };

  var AttributePart =
  /*#__PURE__*/
  function () {
    function AttributePart(instance, element, name, strings) {
      babelHelpers.classCallCheck(this, AttributePart);
      this.instance = instance;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.size = strings.length - 1;
      this._previousValues = [];
    }

    babelHelpers.createClass(AttributePart, [{
      key: "_interpolate",
      value: function _interpolate(values, startIndex) {
        var strings = this.strings;
        var l = strings.length - 1;
        var text = '';

        for (var i = 0; i < l; i++) {
          text += strings[i];
          var v = getValue(this, values[startIndex + i]);

          if (v && v !== noChange && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _t = _step.value;
                // TODO: we need to recursively call getValue into iterables...
                text += _t;
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
          } else {
            text += v;
          }
        }

        return text + strings[l];
      }
    }, {
      key: "_equalToPreviousValues",
      value: function _equalToPreviousValues(values, startIndex) {
        for (var i = startIndex; i < startIndex + this.size; i++) {
          if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
            return false;
          }
        }

        return true;
      }
    }, {
      key: "setValue",
      value: function setValue(values, startIndex) {
        if (this._equalToPreviousValues(values, startIndex)) {
          return;
        }

        var s = this.strings;
        var value;

        if (s.length === 2 && s[0] === '' && s[1] === '') {
          // An expression that occupies the whole attribute value will leave
          // leading and trailing empty strings.
          value = getValue(this, values[startIndex]);

          if (Array.isArray(value)) {
            value = value.join('');
          }
        } else {
          value = this._interpolate(values, startIndex);
        }

        if (value !== noChange) {
          this.element.setAttribute(this.name, value);
        }

        this._previousValues = values;
      }
    }]);
    return AttributePart;
  }();

  _exports.AttributePart = AttributePart;

  var NodePart =
  /*#__PURE__*/
  function () {
    function NodePart(instance, startNode, endNode) {
      babelHelpers.classCallCheck(this, NodePart);
      this.instance = instance;
      this.startNode = startNode;
      this.endNode = endNode;
      this._previousValue = undefined;
    }

    babelHelpers.createClass(NodePart, [{
      key: "setValue",
      value: function setValue(value) {
        value = getValue(this, value);

        if (value === noChange) {
          return;
        }

        if (isPrimitiveValue(value)) {
          // Handle primitive values
          // If the value didn't change, do nothing
          if (value === this._previousValue) {
            return;
          }

          this._setText(value);
        } else if (babelHelpers.instanceof(value, TemplateResult)) {
          this._setTemplateResult(value);
        } else if (Array.isArray(value) || value[Symbol.iterator]) {
          this._setIterable(value);
        } else if (babelHelpers.instanceof(value, Node)) {
          this._setNode(value);
        } else if (value.then !== undefined) {
          this._setPromise(value);
        } else {
          // Fallback, will render the string representation
          this._setText(value);
        }
      }
    }, {
      key: "_insert",
      value: function _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "_setNode",
      value: function _setNode(value) {
        if (this._previousValue === value) {
          return;
        }

        this.clear();

        this._insert(value);

        this._previousValue = value;
      }
    }, {
      key: "_setText",
      value: function _setText(value) {
        var node = this.startNode.nextSibling;
        value = value === undefined ? '' : value;

        if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if _previousValue is
          // primitive?
          node.textContent = value;
        } else {
          this._setNode(document.createTextNode(value));
        }

        this._previousValue = value;
      }
    }, {
      key: "_setTemplateResult",
      value: function _setTemplateResult(value) {
        var template = this.instance._getTemplate(value);

        var instance;

        if (this._previousValue && this._previousValue.template === template) {
          instance = this._previousValue;
        } else {
          instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);

          this._setNode(instance._clone());

          this._previousValue = instance;
        }

        instance.update(value.values);
      }
    }, {
      key: "_setIterable",
      value: function _setIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _previousValue is an array, then the previous render was of an
        // iterable and _previousValue will contain the NodeParts from the previous
        // render. If _previousValue is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this._previousValue)) {
          this.clear();
          this._previousValue = [];
        } // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render


        var itemParts = this._previousValue;
        var partIndex = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _item = _step2.value;
            // Try to reuse an existing part
            var itemPart = itemParts[partIndex]; // If no existing part, create a new one

            if (itemPart === undefined) {
              // If we're creating the first item part, it's startNode should be the
              // container's startNode
              var itemStart = this.startNode; // If we're not creating the first part, create a new separator marker
              // node, and fix up the previous part's endNode to point to it

              if (partIndex > 0) {
                var previousPart = itemParts[partIndex - 1];
                itemStart = previousPart.endNode = document.createTextNode('');

                this._insert(itemStart);
              }

              itemPart = new NodePart(this.instance, itemStart, this.endNode);
              itemParts.push(itemPart);
            }

            itemPart.setValue(_item);
            partIndex++;
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

        if (partIndex === 0) {
          this.clear();
          this._previousValue = undefined;
        } else if (partIndex < itemParts.length) {
          var lastPart = itemParts[partIndex - 1]; // Truncate the parts array so _previousValue reflects the current state

          itemParts.length = partIndex;
          this.clear(lastPart.endNode.previousSibling);
          lastPart.endNode = this.endNode;
        }
      }
    }, {
      key: "_setPromise",
      value: function _setPromise(value) {
        var _this = this;

        this._previousValue = value;
        value.then(function (v) {
          if (_this._previousValue === value) {
            _this.setValue(v);
          }
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);
    return NodePart;
  }();

  _exports.NodePart = NodePart;

  var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
      return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    } else if (templatePart.type === 'node') {
      return new NodePart(instance, node, node.nextSibling);
    }

    throw new Error("Unknown part type ".concat(templatePart.type));
  };
  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */


  _exports.defaultPartCallback = defaultPartCallback;

  var TemplateInstance =
  /*#__PURE__*/
  function () {
    function TemplateInstance(template, partCallback, getTemplate) {
      babelHelpers.classCallCheck(this, TemplateInstance);
      this._parts = [];
      this.template = template;
      this._partCallback = partCallback;
      this._getTemplate = getTemplate;
    }

    babelHelpers.createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var valueIndex = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this._parts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _part = _step3.value;

            if (!_part) {
              valueIndex++;
            } else if (_part.size === undefined) {
              _part.setValue(values[valueIndex]);

              valueIndex++;
            } else {
              _part.setValue(values, valueIndex);

              valueIndex += _part.size;
            }
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
      }
    }, {
      key: "_clone",
      value: function _clone() {
        // Clone the node, rather than importing it, to keep the fragment in the
        // template's document. This leaves the fragment inert so custom elements
        // won't upgrade until after the main document adopts the node.
        var fragment = this.template.element.content.cloneNode(true);
        var parts = this.template.parts;

        if (parts.length > 0) {
          // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
          // null
          var _walker = document.createTreeWalker(fragment, 133
          /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
          NodeFilter.SHOW_TEXT */
          , null, false);

          var _index = -1;

          for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            var partActive = isTemplatePartActive(part); // An inactive part has no coresponding Template node.

            if (partActive) {
              while (_index < part.index) {
                _index++;

                _walker.nextNode();
              }
            }

            this._parts.push(partActive ? this._partCallback(this, part, _walker.currentNode) : undefined);
          }
        }

        return fragment;
      }
    }]);
    return TemplateInstance;
  }();
  /**
   * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), into another container (could be the same container), before
   * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
   * container.
   */


  _exports.TemplateInstance = TemplateInstance;

  var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var node = start;

    while (node !== end) {
      var n = node.nextSibling;
      container.insertBefore(node, before);
      node = n;
    }
  };
  /**
   * Removes nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), from `container`.
   */


  _exports.reparentNodes = reparentNodes;

  var removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var node = startNode;

    while (node !== endNode) {
      var n = node.nextSibling;
      container.removeChild(node);
      node = n;
    }
  };

  _exports.removeNodes = removeNodes;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _root) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _root = babelHelpers.interopRequireDefault(_root);

  /** Built-in value references. */
  var _Symbol = _root.default.Symbol;
  var _default = _Symbol;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js"), __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js"), __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _Symbol2, _getRawTag, _objectToString) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Symbol2 = babelHelpers.interopRequireDefault(_Symbol2);
  _getRawTag = babelHelpers.interopRequireDefault(_getRawTag);
  _objectToString = babelHelpers.interopRequireDefault(_objectToString);

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag = _Symbol2.default ? _Symbol2.default.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag.default)(value) : (0, _objectToString.default)(value);
  }

  var _default = baseGetTag;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = (typeof global === "undefined" ? "undefined" : babelHelpers.typeof(global)) == 'object' && global && global.Object === Object && global;
  var _default = freeGlobal;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _overArg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _overArg = babelHelpers.interopRequireDefault(_overArg);

  /** Built-in value references. */
  var getPrototype = (0, _overArg.default)(Object.getPrototypeOf, Object);
  var _default = getPrototype;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _Symbol2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Symbol2 = babelHelpers.interopRequireDefault(_Symbol2);

  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = _Symbol2.default ? _Symbol2.default.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _default = getRawTag;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  var _default = objectToString;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _default = overArg;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _freeGlobal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _freeGlobal = babelHelpers.interopRequireDefault(_freeGlobal);

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === "undefined" ? "undefined" : babelHelpers.typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = _freeGlobal.default || freeSelf || Function('return this')();
  var _default = root;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && babelHelpers.typeof(value) == 'object';
  }

  var _default = isObjectLike;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/lodash-es/isPlainObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js"), __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js"), __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _baseGetTag, _getPrototype, _isObjectLike) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseGetTag = babelHelpers.interopRequireDefault(_baseGetTag);
  _getPrototype = babelHelpers.interopRequireDefault(_getPrototype);
  _isObjectLike = babelHelpers.interopRequireDefault(_isObjectLike);

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';
  /** Used for built-in method references. */

  var funcProto = Function.prototype,
      objectProto = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /** Used to infer the `Object` constructor. */

  var objectCtorString = funcToString.call(Object);
  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */

  function isPlainObject(value) {
    if (!(0, _isObjectLike.default)(value) || (0, _baseGetTag.default)(value) != objectTag) {
      return false;
    }

    var proto = (0, _getPrototype.default)(value);

    if (proto === null) {
      return true;
    }

    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && babelHelpers.instanceof(Ctor, Ctor) && funcToString.call(Ctor) == objectCtorString;
  }

  var _default = isPlainObject;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/pwa-helpers/connect-mixin.js":
/*!***************************************************!*\
  !*** ./node_modules/pwa-helpers/connect-mixin.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.connect = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
    Mixin for connecting an element to the Redux store; implements the
    basic store-connection boilerplate.
  
    Sample use:
    import { connect } from '../node_modules/pwa-helpers/connect-mixin.js';
  
    class MyElement extends connect(store)(HTMLElement) {
      // ...
  
      _stateChanged(state) {
        this.count = state.data.count;
      }
    }
  */
  var connect = function connect(store) {
    return function (baseElement) {
      return (
        /*#__PURE__*/
        function (_baseElement) {
          babelHelpers.inherits(_class, _baseElement);

          function _class() {
            babelHelpers.classCallCheck(this, _class);
            return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
          }

          babelHelpers.createClass(_class, [{
            key: "connectedCallback",
            value: function connectedCallback() {
              var _this = this;

              // Connect the element to the store.
              this.__storeUnsubscribe = store.subscribe(function () {
                return _this._stateChanged(store.getState());
              });

              this._stateChanged(store.getState());

              if (babelHelpers.get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "connectedCallback", this)) {
                babelHelpers.get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "connectedCallback", this).call(this);
              }
            }
          }, {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
              this.__storeUnsubscribe();

              if (babelHelpers.get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "disconnectedCallback", this)) {
                babelHelpers.get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "disconnectedCallback", this).call(this);
              }
            } // This is called every time something is updated in the store.

          }, {
            key: "_stateChanged",
            value: function _stateChanged(state) {
              throw new Error('_stateChanged() not implemented', this);
            }
          }]);
          return _class;
        }(baseElement)
      );
    };
  };

  _exports.connect = connect;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/pwa-helpers/lazy-reducer-enhancer.js":
/*!***********************************************************!*\
  !*** ./node_modules/pwa-helpers/lazy-reducer-enhancer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.lazyReducerEnhancer = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
    If you are lazy loading any connected elements, then these elements must be
    able to lazily install their reducers. This is a store enhancer that
    enables that.
  
    Sample use (where you define your redux store, in store.js):
  
    import lazyReducerEnhancer from '../node_modules/pwa-helpers/lazy-reducer-enhancer.js';
    import someReducer from './reducers/someReducer.js';
  
    export const store = createStore(
      (state, action) => state,
      compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
    );
  
    Then, in your page/element, you can lazy load a specific reducer with:
    store.addReducers({
      someReducer
    });
  */
  var lazyReducerEnhancer = function lazyReducerEnhancer(combineReducers) {
    return function (nextCreator) {
      return function (origReducer, preloadedState) {
        var lazyReducers = {};
        var nextStore = nextCreator(origReducer, preloadedState);

        function addReducers(newReducers) {
          this.replaceReducer(combineReducers(lazyReducers = Object.assign({}, lazyReducers, newReducers)));
        }

        ;
        return Object.assign({}, nextStore, {
          addReducers: addReducers
        });
      };
    };
  };

  _exports.lazyReducerEnhancer = lazyReducerEnhancer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/pwa-helpers/media-query.js":
/*!*************************************************!*\
  !*** ./node_modules/pwa-helpers/media-query.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.installMediaQueryWatcher = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
    Utility method that calls a callback whenever a media-query matches in response
    to the viewport size changing. The callback should take a boolean parameter
    (with "true" meaning the media query is matched)
  
    Sample use:
    import { installMediaQueryWatcher } from '../node_modules/pwa-helpers/media-query.js';
  
    installMediaQueryWatcher(`(min-width: 600px)`, (matches) => {
      someTextSpan.textContent = matches ? 'wide screen' : 'narrow sreen';
      // Here you can run any code as a response to the layout changing, like
      // closing any mobile/small screen drawers, etc.
    });
  
  */
  var installMediaQueryWatcher = function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function (e) {
      return layoutChangedCallback(e.matches);
    });
    layoutChangedCallback(mql.matches);
  };

  _exports.installMediaQueryWatcher = installMediaQueryWatcher;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/pwa-helpers/metadata.js":
/*!**********************************************!*\
  !*** ./node_modules/pwa-helpers/metadata.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.updateMetadata = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
    Utility method that updates the page's open graph and Twitter card metadata.
    It takes an object as a parameter with the following properties:
    title | description | url | image.
  
    If the `url` is not specified, `document.location.href` will be used; for
    all other properties, if they aren't specified, then that metadata field will not
    be set.
  
    Sample use:
    import { updateMetadata } from '../node_modules/pwa-helpers/metadata.js';
  
    updateMetadata({
        title: 'My App - view 1',
        description: 'This is my sample app',
        url: document.location.href,
        image: '/assets/view1-hero.png'
    });
  
  */
  var updateMetadata = function updateMetadata(_ref) {
    var title = _ref.title,
        description = _ref.description,
        url = _ref.url,
        image = _ref.image;

    if (title) {
      document.title = title;

      _setMeta('property', 'og:title', document.title);

      _setMeta('property', 'twitter:title', document.title);
    }

    if (description) {
      _setMeta('name', 'description', description);

      _setMeta('property', 'og:description', description);

      _setMeta('property', 'twitter:description', description);
    }

    if (image) {
      _setMeta('property', 'og:image', image);

      _setMeta('property', 'twitter:image:src', image);
    }

    url = url || document.location.href;

    _setMeta('property', 'og:url', url);

    _setMeta('property', 'twitter:url', url);
  };

  _exports.updateMetadata = updateMetadata;

  function _setMeta(attrName, attrValue, content) {
    var element = document.head.querySelector("meta[".concat(attrName, "=\"").concat(attrValue, "\"]"));

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content || '');
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/pwa-helpers/network.js":
/*!*********************************************!*\
  !*** ./node_modules/pwa-helpers/network.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.installOfflineWatcher = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
    Utility method that calls a callback whenever the network connectivity of the app changes.
    The callback should take a boolean parameter (with "true" meaning
    the network is offline, and "false" meaning online)
  
    Sample use:
    import { installOfflineWatcher } from '../node_modules/pwa-helpers/network.js';
  
    installOfflineWatcher((offline) => {
      console.log('You are ' + offline ? ' offline' : 'online');
    });
  
  */
  var installOfflineWatcher = function installOfflineWatcher(offlineUpdatedCallback) {
    window.addEventListener('online', function () {
      return offlineUpdatedCallback(false);
    });
    window.addEventListener('offline', function () {
      return offlineUpdatedCallback(true);
    });
    offlineUpdatedCallback(navigator.onLine === false);
  };

  _exports.installOfflineWatcher = installOfflineWatcher;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/pwa-helpers/router.js":
/*!********************************************!*\
  !*** ./node_modules/pwa-helpers/router.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.installRouter = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /*
    Basic router that calls a callback whenever the location is updated.
  
    Sample use:
  
      import { installRouter } from '../node_modules/pwa-helpers/router.js';
      //...
      installRouter((location) => _locationChanged(location));
  
    For example, if you're using this router in a Redux-connected component,
    you could dispatch an action in the callback:
  
      import { installRouter } from '../node_modules/pwa-helpers/router.js';
      import { navigate } from '../actions/app.js';
      //...
      installRouter((location) => store.dispatch(navigate(location)))
  
  
    If you need to force a navigation to a new location programmatically, you can
    do so by pushing a new state using the History API, and then manually
    calling the callback with the new location:
  
      window.history.pushState({}, '', '/new-route');
      _locationChanged(window.location);
  
    Optionally, you can use the second argument to read the event that caused the
    navigation. For example, you may want to scroll to top only after a link click.
  
      installRouter((location, event) => {
        // Only scroll to top on link clicks, not popstate events.
        if (event && event.type === 'click') {
          window.scrollTo(0, 0);
        }
        store.dispatch(navigate(location));
      });
  */
  var installRouter = function installRouter(locationUpdatedCallback) {
    document.body.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var anchor = e.composedPath().filter(function (n) {
        return n.tagName === 'A';
      })[0];
      if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.getAttribute('rel') === 'external') return;
      var href = anchor.href;
      if (!href || href.indexOf('mailto:') !== -1) return;
      var location = window.location;
      var origin = location.origin || location.protocol + '//' + location.host;
      if (href.indexOf(origin) !== 0) return;
      e.preventDefault();

      if (href !== location.href) {
        window.history.pushState({}, '', href);
        locationUpdatedCallback(location, e);
      }
    });
    window.addEventListener('popstate', function (e) {
      return locationUpdatedCallback(window.location, e);
    });
    locationUpdatedCallback(window.location, null
    /* event */
    );
  };

  _exports.installRouter = installRouter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function createThunkMiddleware(extraArgument) {
    return function (_ref) {
      var dispatch = _ref.dispatch,
          getState = _ref.getState;
      return function (next) {
        return function (action) {
          if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
          }

          return next(action);
        };
      };
    };
  }

  var thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;
  var _default = thunk;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/applyMiddleware.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/applyMiddleware.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _compose) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = applyMiddleware;
  _compose = babelHelpers.interopRequireDefault(_compose);

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
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */
  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }

    return function (createStore) {
      return function (reducer, preloadedState, enhancer) {
        var store = createStore(reducer, preloadedState, enhancer);
        var _dispatch = store.dispatch;
        var chain = [];
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch(action) {
            return _dispatch(action);
          }
        };
        chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = _compose.default.apply(undefined, chain)(store.dispatch);
        return _extends({}, store, {
          dispatch: _dispatch
        });
      };
    };
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/bindActionCreators.js":
/*!*****************************************************!*\
  !*** ./node_modules/redux/es/bindActionCreators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = bindActionCreators;

  function bindActionCreator(actionCreator, dispatch) {
    return function () {
      return dispatch(actionCreator.apply(undefined, arguments));
    };
  }
  /**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass a single function as the first argument,
   * and get a function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */


  function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch);
    }

    if (babelHelpers.typeof(actionCreators) !== 'object' || actionCreators === null) {
      throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : babelHelpers.typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    }

    var keys = Object.keys(actionCreators);
    var boundActionCreators = {};

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var actionCreator = actionCreators[key];

      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }

    return boundActionCreators;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/combineReducers.js":
/*!**************************************************!*\
  !*** ./node_modules/redux/es/combineReducers.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js"), __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js"), __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _createStore, _isPlainObject, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = combineReducers;
  _isPlainObject = babelHelpers.interopRequireDefault(_isPlainObject);
  _warning = babelHelpers.interopRequireDefault(_warning);

  function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
    return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
  }

  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

    if (reducerKeys.length === 0) {
      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }

    if (!(0, _isPlainObject.default)(inputState)) {
      return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
    }

    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function (key) {
      unexpectedKeyCache[key] = true;
    });

    if (unexpectedKeys.length > 0) {
      return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
    }
  }

  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, {
        type: _createStore.ActionTypes.INIT
      });

      if (typeof initialState === 'undefined') {
        throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
      }

      var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');

      if (typeof reducer(undefined, {
        type: type
      }) === 'undefined') {
        throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
      }
    });
  }
  /**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */


  function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};

    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i];

      if (true) {
        if (typeof reducers[key] === 'undefined') {
          (0, _warning.default)('No reducer provided for key "' + key + '"');
        }
      }

      if (typeof reducers[key] === 'function') {
        finalReducers[key] = reducers[key];
      }
    }

    var finalReducerKeys = Object.keys(finalReducers);
    var unexpectedKeyCache = void 0;

    if (true) {
      unexpectedKeyCache = {};
    }

    var shapeAssertionError = void 0;

    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }

    return function combination() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments[1];

      if (shapeAssertionError) {
        throw shapeAssertionError;
      }

      if (true) {
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

        if (warningMessage) {
          (0, _warning.default)(warningMessage);
        }
      }

      var hasChanged = false;
      var nextState = {};

      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state[_key];
        var nextStateForKey = reducer(previousStateForKey, action);

        if (typeof nextStateForKey === 'undefined') {
          var errorMessage = getUndefinedStateErrorMessage(_key, action);
          throw new Error(errorMessage);
        }

        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }

      return hasChanged ? nextState : state;
    };
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/compose.js":
/*!******************************************!*\
  !*** ./node_modules/redux/es/compose.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = compose;

  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(undefined, arguments));
      };
    });
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/createStore.js":
/*!**********************************************!*\
  !*** ./node_modules/redux/es/createStore.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! lodash-es/isPlainObject */ "./node_modules/lodash-es/isPlainObject.js"), __webpack_require__(/*! symbol-observable */ "./node_modules/redux/node_modules/symbol-observable/es/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _isPlainObject, _symbolObservable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createStore;
  _exports.ActionTypes = void 0;
  _isPlainObject = babelHelpers.interopRequireDefault(_isPlainObject);
  _symbolObservable = babelHelpers.interopRequireDefault(_symbolObservable);

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var ActionTypes = {
    INIT: '@@redux/INIT'
    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */

  };
  _exports.ActionTypes = ActionTypes;

  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }

    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }

      return enhancer(createStore)(reducer, preloadedState);
    }

    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }

    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */


    function getState() {
      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */


    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected listener to be a function.');
      }

      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */


    function dispatch(action) {
      if (!(0, _isPlainObject.default)(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }

      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }

      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }

      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }

      var listeners = currentListeners = nextListeners;

      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }

      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */


    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }

      currentReducer = nextReducer;
      dispatch({
        type: ActionTypes.INIT
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */


    function observable() {
      var _ref;

      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if (babelHelpers.typeof(observer) !== 'object') {
            throw new TypeError('Expected the observer to be an object.');
          }

          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }

          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[_symbolObservable.default] = function () {
        return this;
      }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.


    dispatch({
      type: ActionTypes.INIT
    });
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[_symbolObservable.default] = observable, _ref2;
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./createStore */ "./node_modules/redux/es/createStore.js"), __webpack_require__(/*! ./combineReducers */ "./node_modules/redux/es/combineReducers.js"), __webpack_require__(/*! ./bindActionCreators */ "./node_modules/redux/es/bindActionCreators.js"), __webpack_require__(/*! ./applyMiddleware */ "./node_modules/redux/es/applyMiddleware.js"), __webpack_require__(/*! ./compose */ "./node_modules/redux/es/compose.js"), __webpack_require__(/*! ./utils/warning */ "./node_modules/redux/es/utils/warning.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _createStore, _combineReducers, _bindActionCreators, _applyMiddleware, _compose, _warning) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "createStore", {
    enumerable: true,
    get: function get() {
      return _createStore.default;
    }
  });
  Object.defineProperty(_exports, "combineReducers", {
    enumerable: true,
    get: function get() {
      return _combineReducers.default;
    }
  });
  Object.defineProperty(_exports, "bindActionCreators", {
    enumerable: true,
    get: function get() {
      return _bindActionCreators.default;
    }
  });
  Object.defineProperty(_exports, "applyMiddleware", {
    enumerable: true,
    get: function get() {
      return _applyMiddleware.default;
    }
  });
  Object.defineProperty(_exports, "compose", {
    enumerable: true,
    get: function get() {
      return _compose.default;
    }
  });
  _createStore = babelHelpers.interopRequireDefault(_createStore);
  _combineReducers = babelHelpers.interopRequireDefault(_combineReducers);
  _bindActionCreators = babelHelpers.interopRequireDefault(_bindActionCreators);
  _applyMiddleware = babelHelpers.interopRequireDefault(_applyMiddleware);
  _compose = babelHelpers.interopRequireDefault(_compose);
  _warning = babelHelpers.interopRequireDefault(_warning);

  /*
  * This is a dummy function to check if the function name has been altered by minification.
  * If the function has been minified and NODE_ENV !== 'production', warn the user.
  */
  function isCrushed() {}

  if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
    (0, _warning.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/es/utils/warning.js":
/*!************************************************!*\
  !*** ./node_modules/redux/es/utils/warning.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = warning;

  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */


    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
      /* eslint-disable no-empty */
    } catch (e) {}
    /* eslint-enable no-empty */

  }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/redux/node_modules/symbol-observable/es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux/node_modules/symbol-observable/es/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./ponyfill.js */ "./node_modules/redux/node_modules/symbol-observable/es/ponyfill.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _ponyfill) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ponyfill = babelHelpers.interopRequireDefault(_ponyfill);

  /* global window */
  var root;

  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (true) {
    root = module;
  } else {}

  var result = (0, _ponyfill.default)(root);
  var _default = result;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/redux/node_modules/symbol-observable/es/ponyfill.js":
/*!**************************************************************************!*\
  !*** ./node_modules/redux/node_modules/symbol-observable/es/ponyfill.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = symbolObservablePonyfill;

  function symbolObservablePonyfill(root) {
    var result;
    var _Symbol = root.Symbol;

    if (typeof _Symbol === 'function') {
      if (_Symbol.observable) {
        result = _Symbol.observable;
      } else {
        result = _Symbol('observable');
        _Symbol.observable = result;
      }
    } else {
      result = '@@observable';
    }

    return result;
  }

  ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  var g; // This works in non-strict mode

  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : babelHelpers.typeof(window)) === "object") g = window;
  } // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}


  module.exports = g;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  "use strict";

  module.exports = function (module) {
    if (!module.webpackPolyfill) {
      module.deprecate = function () {};

      module.paths = []; // module.parent = undefined by default

      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function get() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function get() {
          return module.i;
        }
      });
      module.webpackPolyfill = 1;
    }

    return module;
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/actions/app.js":
/*!****************************!*\
  !*** ./src/actions/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.updateDrawerState = _exports.updateLayout = _exports.updateOffline = _exports.showSnackbar = _exports.navigate = _exports.CLOSE_SNACKBAR = _exports.OPEN_SNACKBAR = _exports.UPDATE_DRAWER_STATE = _exports.UPDATE_OFFLINE = _exports.UPDATE_PAGE = void 0;

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var UPDATE_PAGE = 'UPDATE_PAGE';
  _exports.UPDATE_PAGE = UPDATE_PAGE;
  var UPDATE_OFFLINE = 'UPDATE_OFFLINE';
  _exports.UPDATE_OFFLINE = UPDATE_OFFLINE;
  var UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
  _exports.UPDATE_DRAWER_STATE = UPDATE_DRAWER_STATE;
  var OPEN_SNACKBAR = 'OPEN_SNACKBAR';
  _exports.OPEN_SNACKBAR = OPEN_SNACKBAR;
  var CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
  _exports.CLOSE_SNACKBAR = CLOSE_SNACKBAR;

  var navigate = function navigate(path) {
    return function (dispatch) {
      __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./login.js */ "./src/actions/login.js", 7)); // Extract the page name from path.

      var page = path === '/' || path.includes('index') ? 'view3' : path.slice(1);
      console.info(path);
      console.info(page); // Any other info you might want to extract from the path (like page type),
      // you can do here

      dispatch(loadPage('view1'));
      dispatch(loadPage('view2'));
      dispatch(loadPage(page)); // Close the drawer - in case the *path* change came from a link in the drawer.

      dispatch(updateDrawerState(false));
    };
  };

  _exports.navigate = navigate;

  var loadPage = function loadPage(page) {
    return function (dispatch) {
      switch (page) {
        case 'view1':
          __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../components/my-view1.js */ "./src/components/my-view1.js", 7)).then(function (module) {// Put code in here that you want to run every time when
            // navigating to view1 after my-view1.js is loaded.
          });
          break;

        case 'view2':
          __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../components/my-view2.js */ "./src/components/my-view2.js", 7));
          break;

        case 'view3':
          __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ../components/my-view3.js */ "./src/components/my-view3.js", 7));
          break;

        default:
          page = 'view404';
          __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../components/my-view404.js */ "./src/components/my-view404.js", 7));
      }

      dispatch(updatePage(page));
    };
  };

  var updatePage = function updatePage(page) {
    return {
      type: UPDATE_PAGE,
      page: page
    };
  };

  var snackbarTimer;

  var showSnackbar = function showSnackbar() {
    return function (dispatch) {
      dispatch({
        type: OPEN_SNACKBAR
      });
      clearTimeout(snackbarTimer);
      snackbarTimer = setTimeout(function () {
        return dispatch({
          type: CLOSE_SNACKBAR
        });
      }, 3000);
    };
  };

  _exports.showSnackbar = showSnackbar;

  var updateOffline = function updateOffline(offline) {
    return function (dispatch, getState) {
      // Show the snackbar, unless this is the first load of the page.
      if (getState().app.offline !== undefined) {
        dispatch(showSnackbar());
      }

      dispatch({
        type: UPDATE_OFFLINE,
        offline: offline
      });
    };
  };

  _exports.updateOffline = updateOffline;

  var updateLayout = function updateLayout(wide) {
    return function (dispatch, getState) {
      if (getState().app.drawerOpened) {
        dispatch(updateDrawerState(false));
      }
    };
  };

  _exports.updateLayout = updateLayout;

  var updateDrawerState = function updateDrawerState(opened) {
    return function (dispatch, getState) {
      if (getState().app.drawerOpened !== opened) {
        dispatch({
          type: UPDATE_DRAWER_STATE,
          opened: opened
        });
      }
    };
  };

  _exports.updateDrawerState = updateDrawerState;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/my-app.js":
/*!**********************************!*\
  !*** ./src/components/my-app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js"), __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js"), __webpack_require__(/*! pwa-helpers/connect-mixin.js */ "./node_modules/pwa-helpers/connect-mixin.js"), __webpack_require__(/*! pwa-helpers/media-query.js */ "./node_modules/pwa-helpers/media-query.js"), __webpack_require__(/*! pwa-helpers/network.js */ "./node_modules/pwa-helpers/network.js"), __webpack_require__(/*! pwa-helpers/router.js */ "./node_modules/pwa-helpers/router.js"), __webpack_require__(/*! pwa-helpers/metadata.js */ "./node_modules/pwa-helpers/metadata.js"), __webpack_require__(/*! ../store.js */ "./src/store.js"), __webpack_require__(/*! ../actions/app.js */ "./src/actions/app.js"), __webpack_require__(/*! @polymer/app-layout/app-drawer/app-drawer.js */ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js"), __webpack_require__(/*! @polymer/app-layout/app-header/app-header.js */ "./node_modules/@polymer/app-layout/app-header/app-header.js"), __webpack_require__(/*! @polymer/app-layout/app-scroll-effects/effects/waterfall.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js"), __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar.js */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js"), __webpack_require__(/*! ./my-icons.js */ "./src/components/my-icons.js"), __webpack_require__(/*! ./snack-bar.js */ "./src/components/snack-bar.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement, _settings, _connectMixin, _mediaQuery, _network, _router, _metadata, _store, _app, _appDrawer, _appHeader, _waterfall, _appToolbar, _myIcons, _snackBar) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        --app-drawer-width: 256px;\n        display: block;\n\n        --app-primary-color: #1e73e9;\n        --app-secondary-color: #1e1e1e;\n        --app-dark-text-color: var(--app-secondary-color);\n        --app-light-text-color: #bcdaf7;\n        --app-section-even-color: #bcdaf7;\n        --app-section-odd-color: #f1f6ff;\n\n        --app-header-background-color: #7dbaff;\n        --app-header-text-color: var(--app-dark-text-color);\n        --app-header-selected-color: var(--app-primary-color);\n\n        --app-drawer-background-color: var(--app-secondary-color);\n        --app-drawer-text-color: var(--app-light-text-color);\n        --app-drawer-selected-color: #78909C;\n      }\n\n      app-header {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        background-color: var(--app-header-background-color);\n        color: var(--app-header-text-color);\n        border-bottom: 1px solid #f1f6ff;\n      }\n\n      .toolbar-top {\n        background-color: var(--app-header-background-color);\n      }\n\n      [main-title] {\n        font-family: 'Pacifico';\n        text-transform: lowercase;\n        font-size: 30px;\n        /* In the narrow layout, the toolbar is offset by the width of the\n        drawer button, and the text looks not centered. Add a padding to\n        match that button */\n        padding-right: 44px;\n      }\n\n      .toolbar-list {\n        display: none;\n      }\n\n      .toolbar-list > a {\n        display: inline-block;\n        color: var(--app-header-text-color);\n        text-decoration: none;\n        line-height: 30px;\n        padding: 4px 24px;\n      }\n\n      .toolbar-list > a[selected] {\n        color: var(--app-header-selected-color);\n        border-bottom: 4px solid var(--app-header-selected-color);\n      }\n\n      .menu-btn {\n        background: none;\n        border: none;\n        fill: var(--app-header-text-color);\n        cursor: pointer;\n        height: 44px;\n        width: 44px;\n      }\n\n      .drawer-list {\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        padding: 24px;\n        background: var(--app-drawer-background-color);\n        position: relative;\n      }\n\n      .drawer-list > a {\n        display: block;\n        text-decoration: none;\n        color: var(--app-drawer-text-color);\n        line-height: 40px;\n        padding: 0 24px;\n      }\n\n      .drawer-list > a[selected] {\n        color: var(--app-drawer-selected-color);\n      }\n\n      /* Workaround for IE11 displaying <main> as inline */\n      main {\n        display: block;\n      }\n\n      .main-content {\n        padding-top: 64px;\n        min-height: 100vh;\n      }\n\n      .page {\n        display: none;\n      }\n\n      .page[active] {\n        display: block;\n      }\n\n      footer {\n        padding: 24px;\n        background: var(--app-drawer-background-color);\n        color: var(--app-drawer-text-color);\n        text-align: center;\n      }\n\n      /* Wide layout: when the viewport width is bigger than 460px, layout\n      changes to a wide layout. */\n      @media (min-width: 460px) {\n        .toolbar-list {\n          display: block;\n        }\n\n        .menu-btn {\n          display: none;\n        }\n\n        .main-content {\n          padding-top: 107px;\n        }\n\n        /* The drawer button isn't shown in the wide layout, so we don't\n        need to offset the title */\n        [main-title] {\n          padding-right: 0px;\n        }\n      }\n    </style>\n\n    <!-- Header -->\n    <app-header condenses reveals effects=\"waterfall\">\n      <app-toolbar class=\"toolbar-top\">\n        <button class=\"menu-btn\" title=\"Menu\" on-click=\"", "\">", "</button>\n        <div main-title>", "</div>\n      </app-toolbar>\n\n      <!-- This gets hidden on a small screen-->\n      <nav class=\"toolbar-list\">\n        <a selected?=\"", "\" href=\"/view1\">View One</a>\n        <a selected?=\"", "\" href=\"/view2\">View Two</a>\n        <a selected?=\"", "\" href=\"/view3\">View Three</a>\n      </nav>\n    </app-header>\n\n    <!-- Drawer content -->\n    <app-drawer opened=\"", "\"\n        on-opened-changed=\"", "\">\n      <nav class=\"drawer-list\">\n        <a selected?=\"", "\" href=\"/view1\">View One</a>\n        <a selected?=\"", "\" href=\"/view2\">View Two</a>\n        <a selected?=\"", "\" href=\"/view3\">View Three</a>\n      </nav>\n    </app-drawer>\n\n    <!-- Main content -->\n    <main role=\"main\" class=\"main-content\">\n      <my-view1 class=\"page\" active?=\"", "\"></my-view1>\n      <my-view2 class=\"page\" active?=\"", "\"></my-view2>\n      <my-view3 class=\"page\" active?=\"", "\"></my-view3>\n      <my-view404 class=\"page\" active?=\"", "\"></my-view404>\n    </main>\n\n    <footer>\n      <p>Made with &hearts; by the Polymer team.</p>\n    </footer>\n\n    <snack-bar active?=\"", "\">\n        You are now ", ".</snack-bar>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var MyApp =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(MyApp, _connect);
    babelHelpers.createClass(MyApp, [{
      key: "_render",
      value: function _render(_ref) {
        var appTitle = _ref.appTitle,
            _page = _ref._page,
            _drawerOpened = _ref._drawerOpened,
            _snackbarOpened = _ref._snackbarOpened,
            _offline = _ref._offline;
        // Anything that's related to rendering should be done in here.
        return (0, _litElement.html)(_templateObject(), function (_) {
          return _store.store.dispatch((0, _app.updateDrawerState)(true));
        }, _myIcons.menuIcon, appTitle, _page === 'view1', _page === 'view2', _page === 'view3', _drawerOpened, function (e) {
          return _store.store.dispatch((0, _app.updateDrawerState)(e.target.opened));
        }, _page === 'view1', _page === 'view2', _page === 'view3', _page === 'view1', _page === 'view2', _page === 'view3', _page === 'view404', _snackbarOpened, _offline ? 'offline' : 'online');
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          appTitle: String,
          _page: String,
          _drawerOpened: Boolean,
          _snackbarOpened: Boolean,
          _offline: Boolean
        };
      }
    }]);

    function MyApp() {
      var _this;

      babelHelpers.classCallCheck(this, MyApp);
      _this = babelHelpers.possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this)); // To force all event listeners for gestures to be passive.
      // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners

      (0, _settings.setPassiveTouchGestures)(true);
      return _this;
    }

    babelHelpers.createClass(MyApp, [{
      key: "_firstRendered",
      value: function _firstRendered() {
        (0, _router.installRouter)(function (location) {
          return _store.store.dispatch((0, _app.navigate)(window.decodeURIComponent(location.pathname)));
        });
        (0, _network.installOfflineWatcher)(function (offline) {
          return _store.store.dispatch((0, _app.updateOffline)(offline));
        });
        (0, _mediaQuery.installMediaQueryWatcher)("(min-width: 460px)", function (matches) {
          return _store.store.dispatch((0, _app.updateLayout)(matches));
        });
      }
    }, {
      key: "_didRender",
      value: function _didRender(properties, changeList) {
        if ('_page' in changeList) {
          var pageTitle = properties.appTitle + ' - ' + changeList._page;
          (0, _metadata.updateMetadata)({
            title: pageTitle,
            description: pageTitle // This object also takes an image property, that points to an img src.

          });
        }
      }
    }, {
      key: "_stateChanged",
      value: function _stateChanged(state) {
        this._page = state.app.page;
        this._offline = state.app.offline;
        this._snackbarOpened = state.app.snackbarOpened;
        this._drawerOpened = state.app.drawerOpened;
      }
    }]);
    return MyApp;
  }((0, _connectMixin.connect)(_store.store)(_litElement.LitElement));

  window.customElements.define('my-app', MyApp);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/my-icons.js":
/*!************************************!*\
  !*** ./src/components/my-icons.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _litElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.plusIcon = _exports.minusIcon = _exports.removeFromCartIcon = _exports.addToCartIcon = _exports.menuIcon = void 0;

  function _templateObject5() {
    var data = babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/></svg>"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    var data = babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/></svg>"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0zm18.31 6l-2.76 5z\" fill=\"none\"/><path d=\"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z\"/></svg>"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></svg>"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var menuIcon = (0, _litElement.html)(_templateObject());
  _exports.menuIcon = menuIcon;
  var addToCartIcon = (0, _litElement.html)(_templateObject2());
  _exports.addToCartIcon = addToCartIcon;
  var removeFromCartIcon = (0, _litElement.html)(_templateObject3());
  _exports.removeFromCartIcon = removeFromCartIcon;
  var minusIcon = (0, _litElement.html)(_templateObject4());
  _exports.minusIcon = minusIcon;
  var plusIcon = (0, _litElement.html)(_templateObject5());
  _exports.plusIcon = plusIcon;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/components/snack-bar.js":
/*!*************************************!*\
  !*** ./src/components/snack-bar.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! @polymer/lit-element */ "./node_modules/@polymer/lit-element/lit-element.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_litElement) {
  "use strict";

  function _templateObject() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n      :host {\n        display: block;\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        padding: 12px;\n        background-color: var(--app-secondary-color);\n        color: white;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n        text-align: center;\n        will-change: transform;\n        transform: translate3d(0, 100%, 0);\n        transition-property: visibility, transform;\n        transition-duration: 0.2s;\n        visibility: hidden;\n      }\n      :host([active]) {\n        visibility: visible;\n        transform: translate3d(0, 0, 0);\n      }\n      @media (min-width: 460px) {\n        :host {\n          width: 320px;\n          margin: auto;\n        }\n      }\n    </style>\n    <slot></slot>\n    "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var SnackBar =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(SnackBar, _LitElement);

    function SnackBar() {
      babelHelpers.classCallCheck(this, SnackBar);
      return babelHelpers.possibleConstructorReturn(this, (SnackBar.__proto__ || Object.getPrototypeOf(SnackBar)).apply(this, arguments));
    }

    babelHelpers.createClass(SnackBar, [{
      key: "_render",
      value: function _render(props) {
        return (0, _litElement.html)(_templateObject());
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          active: Boolean
        };
      }
    }]);
    return SnackBar;
  }(_litElement.LitElement);

  window.customElements.define('snack-bar', SnackBar);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  'use strict';
  /* Import WebpackApp */
  // import './app/starter-app';

  __webpack_require__(/*! ./components/my-app.js */ "./src/components/my-app.js");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/reducers/app.js":
/*!*****************************!*\
  !*** ./src/reducers/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ../actions/app.js */ "./src/actions/app.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _app) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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


  var app = function app() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      drawerOpened: false
    };
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _app.UPDATE_PAGE:
        return _extends({}, state, {
          page: action.page
        });

      case _app.UPDATE_OFFLINE:
        return _extends({}, state, {
          offline: action.offline
        });

      case _app.UPDATE_DRAWER_STATE:
        return _extends({}, state, {
          drawerOpened: action.opened
        });

      case _app.OPEN_SNACKBAR:
        return _extends({}, state, {
          snackbarOpened: true
        });

      case _app.CLOSE_SNACKBAR:
        return _extends({}, state, {
          snackbarOpened: false
        });

      default:
        return state;
    }
  };

  var _default = app;
  _exports.default = _default;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js"), __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"), __webpack_require__(/*! pwa-helpers/lazy-reducer-enhancer.js */ "./node_modules/pwa-helpers/lazy-reducer-enhancer.js"), __webpack_require__(/*! ./reducers/app.js */ "./src/reducers/app.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _redux, _reduxThunk, _lazyReducerEnhancer, _app) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.store = void 0;
  _reduxThunk = babelHelpers.interopRequireDefault(_reduxThunk);
  _app = babelHelpers.interopRequireDefault(_app);

  /**
  @license
  Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  // Sets up a Chrome extension for time travel debugging.
  // See https://github.com/zalmoxisus/redux-devtools-extension for more information.
  var compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose; // Initializes the Redux store with a lazyReducerEnhancer (so that you can
  // lazily add reducers after the store has been created) and redux-thunk (so
  // that you can dispatch async actions). See the "Redux and state management"
  // section of the wiki for more details:
  // https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management

  var store = (0, _redux.createStore)(function (state, action) {
    return state;
  }, compose((0, _lazyReducerEnhancer.lazyReducerEnhancer)(_redux.combineReducers), (0, _redux.applyMiddleware)(_reduxThunk.default))); // Initially loaded reducers.

  _exports.store = store;
  store.addReducers({
    app: _app.default
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

/******/ });
//# sourceMappingURL=main.js.map