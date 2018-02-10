/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["d"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["b"] = __decorate;
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK", function() { return DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVE", function() { return ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINIMAL", function() { return MINIMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLED", function() { return DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMALL", function() { return SMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGE", function() { return LARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERACTIVE", function() { return INTERACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGN_LEFT", function() { return ALIGN_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGN_RIGHT", function() { return ALIGN_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INLINE", function() { return INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILL", function() { return FILL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIXED", function() { return FIXED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIXED_TOP", function() { return FIXED_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL", function() { return VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUND", function() { return ROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_MUTED", function() { return TEXT_MUTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_OVERFLOW_ELLIPSIS", function() { return TEXT_OVERFLOW_ELLIPSIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_TEXT_LARGE", function() { return UI_TEXT_LARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT", function() { return ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_BODY", function() { return ALERT_BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_CONTENTS", function() { return ALERT_CONTENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_FOOTER", function() { return ALERT_FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB", function() { return BREADCRUMB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMB_CURRENT", function() { return BREADCRUMB_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMBS", function() { return BREADCRUMBS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREADCRUMBS_COLLAPSED", function() { return BREADCRUMBS_COLLAPSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON", function() { return BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_GROUP", function() { return BUTTON_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALLOUT", function() { return CALLOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD", function() { return CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLAPSE", function() { return COLLAPSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLAPSIBLE_LIST", function() { return COLLAPSIBLE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU_POPOVER_TARGET", function() { return CONTEXT_MENU_POPOVER_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_GROUP", function() { return CONTROL_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_INDICATOR", function() { return CONTROL_INDICATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG", function() { return DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_CONTAINER", function() { return DIALOG_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_BODY", function() { return DIALOG_BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_CLOSE_BUTTON", function() { return DIALOG_CLOSE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_FOOTER", function() { return DIALOG_FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_FOOTER_ACTIONS", function() { return DIALOG_FOOTER_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_HEADER", function() { return DIALOG_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITABLE_TEXT", function() { return EDITABLE_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_0", function() { return ELEVATION_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_1", function() { return ELEVATION_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_2", function() { return ELEVATION_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_3", function() { return ELEVATION_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEVATION_4", function() { return ELEVATION_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT", function() { return INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_GROUP", function() { return INPUT_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX", function() { return CHECKBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIO", function() { return RADIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH", function() { return SWITCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_UPLOAD", function() { return FILE_UPLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_UPLOAD_INPUT", function() { return FILE_UPLOAD_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTENT_PRIMARY", function() { return INTENT_PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTENT_SUCCESS", function() { return INTENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTENT_WARNING", function() { return INTENT_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTENT_DANGER", function() { return INTENT_DANGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL", function() { return LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_GROUP", function() { return FORM_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_CONTENT", function() { return FORM_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_HELPER_TEXT", function() { return FORM_HELPER_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEM", function() { return MENU_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEM_LABEL", function() { return MENU_ITEM_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_SUBMENU", function() { return MENU_SUBMENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_DIVIDER", function() { return MENU_DIVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_HEADER", function() { return MENU_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR", function() { return NAVBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_GROUP", function() { return NAVBAR_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_HEADING", function() { return NAVBAR_HEADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVBAR_DIVIDER", function() { return NAVBAR_DIVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_IDEAL_STATE", function() { return NON_IDEAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_IDEAL_STATE_ACTION", function() { return NON_IDEAL_STATE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_IDEAL_STATE_DESCRIPTION", function() { return NON_IDEAL_STATE_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_IDEAL_STATE_ICON", function() { return NON_IDEAL_STATE_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_IDEAL_STATE_TITLE", function() { return NON_IDEAL_STATE_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_IDEAL_STATE_VISUAL", function() { return NON_IDEAL_STATE_VISUAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_INPUT", function() { return NUMERIC_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY", function() { return OVERLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_BACKDROP", function() { return OVERLAY_BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_CONTENT", function() { return OVERLAY_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_INLINE", function() { return OVERLAY_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_OPEN", function() { return OVERLAY_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_SCROLL_CONTAINER", function() { return OVERLAY_SCROLL_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER", function() { return POPOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_ARROW", function() { return POPOVER_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_BACKDROP", function() { return POPOVER_BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_CONTENT", function() { return POPOVER_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_DISMISS", function() { return POPOVER_DISMISS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_DISMISS_OVERRIDE", function() { return POPOVER_DISMISS_OVERRIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_OPEN", function() { return POPOVER_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPOVER_TARGET", function() { return POPOVER_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION_CONTAINER", function() { return TRANSITION_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_BAR", function() { return PROGRESS_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_METER", function() { return PROGRESS_METER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_NO_STRIPES", function() { return PROGRESS_NO_STRIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRESS_NO_ANIMATION", function() { return PROGRESS_NO_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTAL", function() { return PORTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKELETON", function() { return SKELETON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER", function() { return SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER_HANDLE", function() { return SLIDER_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDER_LABEL", function() { return SLIDER_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANGE_SLIDER", function() { return RANGE_SLIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER", function() { return SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG_SPINNER", function() { return SVG_SPINNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_LIST", function() { return TAB_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_PANEL", function() { return TAB_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABS", function() { return TABS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE", function() { return TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_CONDENSED", function() { return TABLE_CONDENSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_STRIPED", function() { return TABLE_STRIPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_BORDERED", function() { return TABLE_BORDERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAG", function() { return TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAG_REMOVABLE", function() { return TAG_REMOVABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAG_REMOVE", function() { return TAG_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST", function() { return TOAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONTAINER", function() { return TOAST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_MESSAGE", function() { return TOAST_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP", function() { return TOOLTIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE", function() { return TREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE", function() { return TREE_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_CARET", function() { return TREE_NODE_CARET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_CARET_CLOSED", function() { return TREE_NODE_CARET_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_CARET_NONE", function() { return TREE_NODE_CARET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_CARET_OPEN", function() { return TREE_NODE_CARET_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_CONTENT", function() { return TREE_NODE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_EXPANDED", function() { return TREE_NODE_EXPANDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_ICON", function() { return TREE_NODE_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_LABEL", function() { return TREE_NODE_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_LIST", function() { return TREE_NODE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_SECONDARY_LABEL", function() { return TREE_NODE_SECONDARY_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_NODE_SELECTED", function() { return TREE_NODE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TREE_ROOT", function() { return TREE_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON", function() { return ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_STANDARD", function() { return ICON_STANDARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_LARGE", function() { return ICON_LARGE; });
/* harmony export (immutable) */ __webpack_exports__["iconClass"] = iconClass;
/* harmony export (immutable) */ __webpack_exports__["intentClass"] = intentClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intent__ = __webpack_require__(29);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

// modifiers
var DARK = "pt-dark";
var ACTIVE = "pt-active";
var MINIMAL = "pt-minimal";
var DISABLED = "pt-disabled";
var SMALL = "pt-small";
var LARGE = "pt-large";
var LOADING = "pt-loading";
var INTERACTIVE = "pt-interactive";
var ALIGN_LEFT = "pt-align-left";
var ALIGN_RIGHT = "pt-align-right";
var INLINE = "pt-inline";
var FILL = "pt-fill";
var FIXED = "pt-fixed";
var FIXED_TOP = "pt-fixed-top";
var VERTICAL = "pt-vertical";
var ROUND = "pt-round";
// text utilities
var TEXT_MUTED = "pt-text-muted";
var TEXT_OVERFLOW_ELLIPSIS = "pt-text-overflow-ellipsis";
var UI_TEXT_LARGE = "pt-ui-text-large";
// components
var ALERT = "pt-alert";
var ALERT_BODY = "pt-alert-body";
var ALERT_CONTENTS = "pt-alert-contents";
var ALERT_FOOTER = "pt-alert-footer";
var BREADCRUMB = "pt-breadcrumb";
var BREADCRUMB_CURRENT = "pt-breadcrumb-current";
var BREADCRUMBS = "pt-breadcrumbs";
var BREADCRUMBS_COLLAPSED = "pt-breadcrumbs-collapsed";
var BUTTON = "pt-button";
var BUTTON_GROUP = "pt-button-group";
var CALLOUT = "pt-callout";
var CARD = "pt-card";
var COLLAPSE = "pt-collapse";
var COLLAPSIBLE_LIST = "pt-collapse-list";
var CONTEXT_MENU = "pt-context-menu";
var CONTEXT_MENU_POPOVER_TARGET = "pt-context-menu-popover-target";
var CONTROL = "pt-control";
var CONTROL_GROUP = "pt-control-group";
var CONTROL_INDICATOR = "pt-control-indicator";
var DIALOG = "pt-dialog";
var DIALOG_CONTAINER = "pt-dialog-container";
var DIALOG_BODY = "pt-dialog-body";
var DIALOG_CLOSE_BUTTON = "pt-dialog-close-button";
var DIALOG_FOOTER = "pt-dialog-footer";
var DIALOG_FOOTER_ACTIONS = "pt-dialog-footer-actions";
var DIALOG_HEADER = "pt-dialog-header";
var EDITABLE_TEXT = "pt-editable-text";
var ELEVATION_0 = "pt-elevation-0";
var ELEVATION_1 = "pt-elevation-1";
var ELEVATION_2 = "pt-elevation-2";
var ELEVATION_3 = "pt-elevation-3";
var ELEVATION_4 = "pt-elevation-4";
var INPUT = "pt-input";
var INPUT_GROUP = "pt-input-group";
var CHECKBOX = "pt-checkbox";
var RADIO = "pt-radio";
var SWITCH = "pt-switch";
var FILE_UPLOAD = "pt-file-upload";
var FILE_UPLOAD_INPUT = "pt-file-upload-input";
var INTENT_PRIMARY = "pt-intent-primary";
var INTENT_SUCCESS = "pt-intent-success";
var INTENT_WARNING = "pt-intent-warning";
var INTENT_DANGER = "pt-intent-danger";
var LABEL = "pt-label";
var FORM_GROUP = "pt-form-group";
var FORM_CONTENT = "pt-form-content";
var FORM_HELPER_TEXT = "pt-form-helper-text";
var MENU = "pt-menu";
var MENU_ITEM = "pt-menu-item";
var MENU_ITEM_LABEL = "pt-menu-item-label";
var MENU_SUBMENU = "pt-submenu";
var MENU_DIVIDER = "pt-menu-divider";
var MENU_HEADER = "pt-menu-header";
var NAVBAR = "pt-navbar";
var NAVBAR_GROUP = "pt-navbar-group";
var NAVBAR_HEADING = "pt-navbar-heading";
var NAVBAR_DIVIDER = "pt-navbar-divider";
var NON_IDEAL_STATE = "pt-non-ideal-state";
var NON_IDEAL_STATE_ACTION = "pt-non-ideal-state-action";
var NON_IDEAL_STATE_DESCRIPTION = "pt-non-ideal-state-description";
var NON_IDEAL_STATE_ICON = "pt-non-ideal-state-icon";
var NON_IDEAL_STATE_TITLE = "pt-non-ideal-state-title";
var NON_IDEAL_STATE_VISUAL = "pt-non-ideal-state-visual";
var NUMERIC_INPUT = "pt-numeric-input";
var OVERLAY = "pt-overlay";
var OVERLAY_BACKDROP = "pt-overlay-backdrop";
var OVERLAY_CONTENT = "pt-overlay-content";
var OVERLAY_INLINE = "pt-overlay-inline";
var OVERLAY_OPEN = "pt-overlay-open";
var OVERLAY_SCROLL_CONTAINER = "pt-overlay-scroll-container";
var POPOVER = "pt-popover";
var POPOVER_ARROW = "pt-popover-arrow";
var POPOVER_BACKDROP = "pt-popover-backdrop";
var POPOVER_CONTENT = "pt-popover-content";
var POPOVER_DISMISS = "pt-popover-dismiss";
var POPOVER_DISMISS_OVERRIDE = "pt-popover-dismiss-override";
var POPOVER_OPEN = "pt-popover-open";
var POPOVER_TARGET = "pt-popover-target";
var TRANSITION_CONTAINER = "pt-transition-container";
var PROGRESS_BAR = "pt-progress-bar";
var PROGRESS_METER = "pt-progress-meter";
var PROGRESS_NO_STRIPES = "pt-no-stripes";
var PROGRESS_NO_ANIMATION = "pt-no-animation";
var PORTAL = "pt-portal";
var SELECT = "pt-select";
var SKELETON = "pt-skeleton";
var SLIDER = "pt-slider";
var SLIDER_HANDLE = SLIDER + "-handle";
var SLIDER_LABEL = SLIDER + "-label";
var RANGE_SLIDER = "pt-range-slider";
var SPINNER = "pt-spinner";
var SVG_SPINNER = "pt-svg-spinner";
var TAB = "pt-tab";
var TAB_LIST = "pt-tab-list";
var TAB_PANEL = "pt-tab-panel";
var TABS = "pt-tabs";
var TABLE = "pt-table";
var TABLE_CONDENSED = "pt-condensed";
var TABLE_STRIPED = "pt-striped";
var TABLE_BORDERED = "pt-bordered";
var TAG = "pt-tag";
var TAG_REMOVABLE = "pt-tag-removable";
var TAG_REMOVE = "pt-tag-remove";
var TOAST = "pt-toast";
var TOAST_CONTAINER = "pt-toast-container";
var TOAST_MESSAGE = "pt-toast-message";
var TOOLTIP = "pt-tooltip";
var TREE = "pt-tree";
var TREE_NODE = "pt-tree-node";
var TREE_NODE_CARET = "pt-tree-node-caret";
var TREE_NODE_CARET_CLOSED = "pt-tree-node-caret-closed";
var TREE_NODE_CARET_NONE = "pt-tree-node-caret-none";
var TREE_NODE_CARET_OPEN = "pt-tree-node-caret-open";
var TREE_NODE_CONTENT = "pt-tree-node-content";
var TREE_NODE_EXPANDED = "pt-tree-node-expanded";
var TREE_NODE_ICON = "pt-tree-node-icon";
var TREE_NODE_LABEL = "pt-tree-node-label";
var TREE_NODE_LIST = "pt-tree-node-list";
var TREE_NODE_SECONDARY_LABEL = "pt-tree-node-secondary-label";
var TREE_NODE_SELECTED = "pt-tree-node-selected";
var TREE_ROOT = "pt-tree-root";
var ICON = "pt-icon";
var ICON_STANDARD = "pt-icon-standard";
var ICON_LARGE = "pt-icon-large";
/** Return CSS class for icon, whether or not 'pt-icon-' prefix is included */
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("pt-icon-") === 0 ? iconName : "pt-icon-" + iconName;
}
function intentClass(intent) {
    if (intent === void 0) { intent = __WEBPACK_IMPORTED_MODULE_0__intent__["a" /* Intent */].NONE; }
    if (intent === __WEBPACK_IMPORTED_MODULE_0__intent__["a" /* Intent */].NONE || __WEBPACK_IMPORTED_MODULE_0__intent__["a" /* Intent */][intent] == null) {
        return undefined;
    }
    return "pt-intent-" + __WEBPACK_IMPORTED_MODULE_0__intent__["a" /* Intent */][intent].toLowerCase();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Félix Girault <felix.girault@gmail.com>
 * @license MIT
 */


var warning = __webpack_require__(20);
var shallowEqual = __webpack_require__(66);



/**
 * Tells if a component should update given it's next props
 * and state.
 *
 * @param object nextProps Next props.
 * @param object nextState Next state.
 */
function shouldComponentUpdate(nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
}

/**
 * Returns a text description of the component that can be
 * used to identify it in error messages.
 *
 * @see https://github.com/facebook/react/blob/v15.4.0-rc.3/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js#L1143
 * @param {function} component The component.
 * @return {string} The name of the component.
 */
function getComponentName(component) {
  var constructor = component.prototype && component.prototype.constructor;

  return (
    component.displayName
    || (constructor && constructor.displayName)
    || component.name
    || (constructor && constructor.name)
    || 'a component'
  );
}

/**
 * Makes the given component "pure".
 *
 * @param object component Component.
 */
function pureRenderDecorator(component) {
  if (component.prototype.shouldComponentUpdate !== undefined) {
    // We're not using the condition mecanism of warning()
    // here to avoid useless calls to getComponentName().
    warning(
      false,
      'Cannot decorate `%s` with @pureRenderDecorator, '
      + 'because it already implements `shouldComponentUpdate().',
      getComponentName(component)
    )
  }

  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;
}



module.exports = pureRenderDecorator;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["isNodeEnv"] = isNodeEnv;
/* harmony export (immutable) */ __webpack_exports__["isFunction"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["safeInvoke"] = safeInvoke;
/* harmony export (immutable) */ __webpack_exports__["safeInvokeOrValue"] = safeInvokeOrValue;
/* harmony export (immutable) */ __webpack_exports__["elementIsOrContains"] = elementIsOrContains;
/* harmony export (immutable) */ __webpack_exports__["arrayLengthCompare"] = arrayLengthCompare;
/* harmony export (immutable) */ __webpack_exports__["approxEqual"] = approxEqual;
/* harmony export (immutable) */ __webpack_exports__["clamp"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["countDecimalPlaces"] = countDecimalPlaces;
/* harmony export (immutable) */ __webpack_exports__["throttleEvent"] = throttleEvent;
/* harmony export (immutable) */ __webpack_exports__["throttleReactEventCallback"] = throttleReactEventCallback;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_compareUtils__ = __webpack_require__(61);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_compareUtils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shallowCompareKeys", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_compareUtils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deepCompareKeys", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_compareUtils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getShallowUnequalKeyValues", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_compareUtils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getDeepUnequalKeyValues", function() { return __WEBPACK_IMPORTED_MODULE_1__utils_compareUtils__["c"]; });
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */


/** Returns whether `process.env.NODE_ENV` exists and equals `env`. */
function isNodeEnv(env) {
    return typeof process !== "undefined" && process.env && process.env.NODE_ENV === env;
}
/** Returns whether the value is a function. Acts as a type guard. */
// tslint:disable-next-line:ban-types
function isFunction(value) {
    return typeof value === "function";
}
// tslint:disable-next-line:ban-types
function safeInvoke(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
}
// tslint:disable-next-line:ban-types
function safeInvokeOrValue(funcOrValue) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return isFunction(funcOrValue) ? funcOrValue.apply(void 0, args) : funcOrValue;
}
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
/**
 * Returns the difference in length between two arrays. A `null` argument is
 * considered an empty list. The return value will be positive if `a` is longer
 * than `b`, negative if the opposite is true, and zero if their lengths are
 * equal.
 */
function arrayLengthCompare(a, b) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    return a.length - b.length;
}
/**
 * Returns true if the two numbers are within the given tolerance of each other.
 * This is useful to correct for floating point precision issues, less useful
 * for integers.
 */
function approxEqual(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 0.00001; }
    return Math.abs(a - b) <= tolerance;
}
/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
function clamp(val, min, max) {
    if (val == null) {
        return val;
    }
    if (max < min) {
        throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["b" /* CLAMP_MIN_MAX */]);
    }
    return Math.min(Math.max(val, min), max);
}
/** Returns the number of decimal places in the given number. */
function countDecimalPlaces(num) {
    if (typeof num !== "number" || Math.floor(num) === num) {
        return 0;
    }
    return num.toString().split(".")[1].length;
}
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
function throttleEvent(target, eventName, newEventName) {
    var throttledFunc = _throttleHelper(undefined, undefined, function (event) {
        target.dispatchEvent(new CustomEvent(newEventName, event));
    });
    target.addEventListener(eventName, throttledFunc);
    return throttledFunc;
}
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
function throttleReactEventCallback(callback, options) {
    if (options === void 0) { options = {}; }
    var throttledFunc = _throttleHelper(function (event2) {
        if (options.preventDefault) {
            event2.preventDefault();
        }
    }, function (event2) {
        // prevent React from reclaiming the event object before we
        // reference it
        event2.persist();
    }, function (event2) {
        var otherArgs2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherArgs2[_i - 1] = arguments[_i];
        }
        callback.apply(void 0, [event2].concat(otherArgs2));
    });
    return throttledFunc;
}
function _throttleHelper(onBeforeIsRunningCheck, onAfterIsRunningCheck, onAnimationFrameRequested) {
    var isRunning = false;
    var func = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't use safeInvoke, because we might have more than its max number
        // of typed params
        if (isFunction(onBeforeIsRunningCheck)) {
            onBeforeIsRunningCheck.apply(void 0, args);
        }
        if (isRunning) {
            return;
        }
        isRunning = true;
        if (isFunction(onAfterIsRunningCheck)) {
            onAfterIsRunningCheck.apply(void 0, args);
        }
        requestAnimationFrame(function () {
            if (isFunction(onAnimationFrameRequested)) {
                onAnimationFrameRequested.apply(void 0, args);
            }
            isRunning = false;
        });
    };
    return func;
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(10)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(5);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
var AbstractComponent = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AbstractComponent, _super);
    function AbstractComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        _this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    window.clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["isNodeEnv"])("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["isNodeEnv"])("production")) {
            this.validateProps(nextProps);
        }
    };
    AbstractComponent.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractComponent.prototype.setTimeout = function (callback, timeout) {
        var handle = window.setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return function () { return window.clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * In contrast to propTypes, these runtime checks are _always_ run, not just in development mode.
     */
    AbstractComponent.prototype.validateProps = function (_) {
        // implement in subclass
    };
    return AbstractComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLAMP_MIN_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_WARN_CANCEL_PROPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COLLAPSIBLE_LIST_INVALID_CHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CONTEXTMENU_WARN_DECORATOR_NO_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HOTKEYS_HOTKEY_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MENU_WARN_CHILDREN_SUBMENU_MUTEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return NUMERIC_INPUT_MIN_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return NUMERIC_INPUT_STEP_SIZE_NULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return POPOVER_REQUIRES_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return POPOVER_MODAL_INTERACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return POPOVER_WARN_TOO_MANY_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return POPOVER_WARN_DOUBLE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return POPOVER_WARN_DOUBLE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return POPOVER_WARN_EMPTY_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return POPOVER_WARN_MODAL_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return POPOVER_WARN_DEPRECATED_CONSTRAINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return POPOVER_WARN_INLINE_NO_TETHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return POPOVER_WARN_UNCONTROLLED_ONINTERACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return PORTAL_CONTEXT_CLASS_NAME_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SLIDER_ZERO_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SLIDER_ZERO_LABEL_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RANGESLIDER_NULL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return TABS_FIRST_CHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TABS_MISMATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return TABS_WARN_DEPRECATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return TOASTER_WARN_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return TOASTER_WARN_LEFT_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DIALOG_WARN_NO_HEADER_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DIALOG_WARN_NO_HEADER_CLOSE_BUTTON; });
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var ns = "[Blueprint]";
var deprec = ns + " DEPRECATION:";
var CLAMP_MIN_MAX = ns + " clamp: max cannot be less than min";
var ALERT_WARN_CANCEL_PROPS = ns + " <Alert> cancelButtonText and onCancel should be set together.";
var COLLAPSIBLE_LIST_INVALID_CHILD = ns + " <CollapsibleList> children must be <MenuItem>s";
var CONTEXTMENU_WARN_DECORATOR_NO_METHOD = ns + " @ContextMenuTarget-decorated class should implement renderContextMenu.";
var HOTKEYS_HOTKEY_CHILDREN = ns + " <Hotkeys> only accepts <Hotkey> children.";
var MENU_WARN_CHILDREN_SUBMENU_MUTEX = ns + " <MenuItem> children and submenu props are mutually exclusive, with children taking priority.";
var NUMERIC_INPUT_MIN_MAX = ns + " <NumericInput> requires min to be strictly less than max if both are defined.";
var NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires minorStepSize to be strictly less than stepSize.";
var NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires majorStepSize to be strictly greater than stepSize.";
var NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires minorStepSize to be strictly greater than zero.";
var NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires majorStepSize to be strictly greater than zero.";
var NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires stepSize to be strictly greater than zero.";
var NUMERIC_INPUT_STEP_SIZE_NULL = ns + " <NumericInput> requires stepSize to be defined.";
var POPOVER_REQUIRES_TARGET = ns + " <Popover> requires target prop or at least one child element.";
var POPOVER_MODAL_INTERACTION = ns + " <Popover isModal={true}> requires interactionKind={PopoverInteractionKind.CLICK}.";
var POPOVER_WARN_TOO_MANY_CHILDREN = ns +
    " <Popover> supports one or two children; additional children are ignored." +
    " First child is the target, second child is the content. You may instead supply these two as props.";
var POPOVER_WARN_DOUBLE_CONTENT = ns + " <Popover> with two children ignores content prop; use either prop or children.";
var POPOVER_WARN_DOUBLE_TARGET = ns + " <Popover> with children ignores target prop; use either prop or children.";
var POPOVER_WARN_EMPTY_CONTENT = ns + " Disabling <Popover> with empty/whitespace content...";
var POPOVER_WARN_MODAL_INLINE = ns + " <Popover inline={true}> ignores isModal";
var POPOVER_WARN_DEPRECATED_CONSTRAINTS = ns + " <Popover> constraints and useSmartPositioning are deprecated. Use tetherOptions directly.";
var POPOVER_WARN_INLINE_NO_TETHER = ns + " <Popover inline={true}> ignores tetherOptions, constraints, and useSmartPositioning.";
var POPOVER_WARN_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled.";
var PORTAL_CONTEXT_CLASS_NAME_STRING = ns + " <Portal> context blueprintPortalClassName must be string";
var RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX = ns + " <RadioGroup> children and options prop are mutually exclusive, with options taking priority.";
var SLIDER_ZERO_STEP = ns + " <Slider> stepSize must be greater than zero.";
var SLIDER_ZERO_LABEL_STEP = ns + " <Slider> labelStepSize must be greater than zero.";
var RANGESLIDER_NULL_VALUE = ns + " <RangeSlider> value prop must be an array of two non-null numbers.";
var TABS_FIRST_CHILD = ns + " First child of <Tabs> component must be a <TabList>";
var TABS_MISMATCH = ns + " Number of <Tab> components must equal number of <TabPanel> components";
var TABS_WARN_DEPRECATED = deprec +
    " <Tabs> is deprecated since v1.11.0; consider upgrading to <Tabs2>." +
    " https://blueprintjs.com/#components.tabs.js";
var TOASTER_WARN_INLINE = ns + " Toaster.create() ignores inline prop as it always creates a new element.";
var TOASTER_WARN_LEFT_RIGHT = ns + " Toaster does not support LEFT or RIGHT positions.";
var DIALOG_WARN_NO_HEADER_ICON = ns + " <Dialog> iconName is ignored if title is omitted.";
var DIALOG_WARN_NO_HEADER_CLOSE_BUTTON = ns + " <Dialog> isCloseButtonShown prop is ignored if title is omitted.";


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractComponent__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__abstractComponent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colors__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__colors__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intent__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__intent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__position__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__position__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_3__position__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__props__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tetherUtils__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__tetherUtils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__tetherUtils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__tetherUtils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__tetherUtils__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generated_iconClasses__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__generated_iconClasses__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__generated_iconStrings__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__generated_iconStrings__["a"]; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var Classes = __WEBPACK_IMPORTED_MODULE_6__classes__;
var Keys = __WEBPACK_IMPORTED_MODULE_7__keys__;
var Utils = __WEBPACK_IMPORTED_MODULE_8__utils__;
// NOTE: Errors is not exported in public API




/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.nextTick = function (fun) {
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
Item.prototype.run = function () {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isPositionHorizontal;
/* harmony export (immutable) */ __webpack_exports__["c"] = isPositionVertical;
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var Position;
(function (Position) {
    Position[Position["TOP_LEFT"] = 0] = "TOP_LEFT";
    Position[Position["TOP"] = 1] = "TOP";
    Position[Position["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Position[Position["RIGHT_TOP"] = 3] = "RIGHT_TOP";
    Position[Position["RIGHT"] = 4] = "RIGHT";
    Position[Position["RIGHT_BOTTOM"] = 5] = "RIGHT_BOTTOM";
    Position[Position["BOTTOM_RIGHT"] = 6] = "BOTTOM_RIGHT";
    Position[Position["BOTTOM"] = 7] = "BOTTOM";
    Position[Position["BOTTOM_LEFT"] = 8] = "BOTTOM_LEFT";
    Position[Position["LEFT_BOTTOM"] = 9] = "LEFT_BOTTOM";
    Position[Position["LEFT"] = 10] = "LEFT";
    Position[Position["LEFT_TOP"] = 11] = "LEFT_TOP";
})(Position || (Position = {}));
function isPositionHorizontal(position) {
    /* istanbul ignore next */
    return (position === Position.TOP ||
        position === Position.TOP_LEFT ||
        position === Position.TOP_RIGHT ||
        position === Position.BOTTOM ||
        position === Position.BOTTOM_LEFT ||
        position === Position.BOTTOM_RIGHT);
}
function isPositionVertical(position) {
    /* istanbul ignore next */
    return (position === Position.LEFT ||
        position === Position.LEFT_TOP ||
        position === Position.LEFT_BOTTOM ||
        position === Position.RIGHT ||
        position === Position.RIGHT_TOP ||
        position === Position.RIGHT_BOTTOM);
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_LEFT", function() { return ARROW_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_UP", function() { return ARROW_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_RIGHT", function() { return ARROW_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_DOWN", function() { return ARROW_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var BACKSPACE = 8;
var TAB = 9;
var ENTER = 13;
var SHIFT = 16;
var ESCAPE = 27;
var SPACE = 32;
var ARROW_LEFT = 37;
var ARROW_UP = 38;
var ARROW_RIGHT = 39;
var ARROW_DOWN = 40;
var DELETE = 46;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(8);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Icon = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon_1 = Icon;
    Icon.prototype.render = function () {
        if (this.props.iconName == null) {
            return null;
        }
        var _a = this.props, className = _a.className, iconName = _a.iconName, intent = _a.intent, _b = _a.iconSize, iconSize = _b === void 0 ? Icon_1.SIZE_STANDARD : _b, restProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["className", "iconName", "intent", "iconSize"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(getSizeClass(iconSize), __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].iconClass(iconName), __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].intentClass(intent), className);
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: classes }, restProps));
    };
    Icon.displayName = "Blueprint.Icon";
    Icon.SIZE_STANDARD = 16;
    Icon.SIZE_LARGE = 20;
    Icon.SIZE_INHERIT = "inherit";
    Icon = Icon_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Icon);
    return Icon;
    var Icon_1;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

// NOTE: not using a type alias here so the full union will appear in the interface docs
function getSizeClass(size) {
    switch (size) {
        case Icon.SIZE_STANDARD:
            return __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].ICON_STANDARD;
        case Icon.SIZE_LARGE:
            return __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].ICON_LARGE;
        default:
            return __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].ICON;
    }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeNonHTMLProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
var INVALID_PROPS = [
    "active",
    "containerRef",
    "elementRef",
    "iconName",
    "inputRef",
    "intent",
    "inline",
    "loading",
    "leftIconName",
    "onChildrenMount",
    "onRemove",
    "popoverProps",
    "rightElement",
    "rightIconName",
    "text",
];
/**
 * Typically applied to HTMLElements to filter out blacklisted props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the blacklist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default blacklist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and blacklist together.
 */
function removeNonHTMLProps(props, invalidProps, shouldMerge) {
    if (invalidProps === void 0) { invalidProps = INVALID_PROPS; }
    if (shouldMerge === void 0) { shouldMerge = false; }
    if (shouldMerge) {
        invalidProps = invalidProps.concat(INVALID_PROPS);
    }
    return invalidProps.reduce(function (prev, curr) {
        if (prev.hasOwnProperty(curr)) {
            delete prev[curr];
        }
        return prev;
    }, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, props));
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PopoverInteractionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tether__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tether___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tether__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_position__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_tetherUtils__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_utils_isDarkTheme__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__overlay_overlay__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tooltip_tooltip__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__arrows__ = __webpack_require__(84);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
















var SVG_SHADOW_PATH = "M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378" +
    "-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z";
var SVG_ARROW_PATH = "M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005" +
    "c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z";
var SMART_POSITIONING = {
    attachment: "together",
    to: "scrollParent",
};
var PopoverInteractionKind;
(function (PopoverInteractionKind) {
    PopoverInteractionKind[PopoverInteractionKind["CLICK"] = 0] = "CLICK";
    PopoverInteractionKind[PopoverInteractionKind["CLICK_TARGET_ONLY"] = 1] = "CLICK_TARGET_ONLY";
    PopoverInteractionKind[PopoverInteractionKind["HOVER"] = 2] = "HOVER";
    PopoverInteractionKind[PopoverInteractionKind["HOVER_TARGET_ONLY"] = 3] = "HOVER_TARGET_ONLY";
})(PopoverInteractionKind || (PopoverInteractionKind = {}));
var Popover = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Popover, _super);
    function Popover(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasDarkParent = false;
        // a flag that is set to true while we are waiting for the underlying Portal to complete rendering
        _this.isContentMounting = false;
        _this.refHandlers = {
            popover: function (ref) {
                _this.popoverElement = ref;
                _this.updateTether();
                _this.updateArrowPosition();
            },
            target: function (ref) {
                _this.targetElement = ref;
            },
        };
        _this.handleContentMount = function () {
            if (__WEBPACK_IMPORTED_MODULE_11__common_utils__["isFunction"](_this.props.popoverDidOpen) && _this.isContentMounting) {
                _this.props.popoverDidOpen();
                _this.isContentMounting = false;
            }
        };
        _this.handleTargetFocus = function (e) {
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                _this.handleMouseEnter(e);
            }
        };
        _this.handleTargetBlur = function (e) {
            if (_this.props.openOnTargetFocus && _this.isHoverInteractionKind()) {
                // if the next element to receive focus is within the popover, we'll want to leave the
                // popover open. we must do this check *after* the next element focuses, so we use a
                // timeout of 0 to flush the rest of the event queue before proceeding.
                requestAnimationFrame(function () {
                    if (_this.popoverElement == null || !_this.popoverElement.contains(document.activeElement)) {
                        _this.handleMouseLeave(e);
                    }
                });
            }
        };
        _this.handleMouseEnter = function (e) {
            // if we're entering the popover, and the mode is set to be HOVER_TARGET_ONLY, we want to manually
            // trigger the mouse leave event, as hovering over the popover shouldn't count.
            if (_this.props.inline &&
                _this.isElementInPopover(e.target) &&
                _this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY &&
                !_this.props.openOnTargetFocus) {
                _this.handleMouseLeave(e);
            }
            else if (!_this.props.isDisabled) {
                // only begin opening popover when it is enabled
                _this.setOpenStateByPropCallback(true, e, _this.props.hoverOpenDelay);
            }
        };
        _this.handleMouseLeave = function (e) {
            // user-configurable closing delay is helpful when moving mouse from target to popover
            _this.setOpenStateByPropCallback(false, e, _this.props.hoverCloseDelay);
        };
        _this.handlePopoverClick = function (e) {
            var eventTarget = e.target;
            var shouldDismiss = eventTarget.closest("." + __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_DISMISS"]) != null;
            var overrideDismiss = eventTarget.closest("." + __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_DISMISS_OVERRIDE"]) != null;
            if (shouldDismiss && !overrideDismiss) {
                _this.setOpenStateByPropCallback(false, e);
            }
        };
        _this.handleOverlayClose = function (e) {
            var eventTarget = e.target;
            // if click was in target, target event listener will handle things, so don't close
            if (!__WEBPACK_IMPORTED_MODULE_11__common_utils__["elementIsOrContains"](_this.targetElement, eventTarget) || e.nativeEvent instanceof KeyboardEvent) {
                _this.setOpenStateByPropCallback(false, e);
            }
        };
        _this.handleTargetClick = function (e) {
            // ensure click did not originate from within inline popover before closing
            if (!_this.props.isDisabled && !_this.isElementInPopover(e.target)) {
                if (_this.props.isOpen == null) {
                    _this.setOpenStateDirectly(function (previousIsOpen) { return !previousIsOpen; });
                }
                else {
                    _this.setOpenStateByPropCallback(!_this.props.isOpen, e);
                }
            }
        };
        var isOpen = props.defaultIsOpen && !props.isDisabled;
        if (props.isOpen != null) {
            isOpen = props.isOpen;
        }
        _this.state = {
            ignoreTargetDimensions: false,
            isOpen: isOpen,
            targetHeight: 0,
            targetWidth: 0,
        };
        return _this;
    }
    Popover.prototype.render = function () {
        var className = this.props.className;
        var isOpen = this.state.isOpen;
        var targetProps;
        if (this.isHoverInteractionKind()) {
            targetProps = {
                onBlur: this.handleTargetBlur,
                onFocus: this.handleTargetFocus,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            };
            // any one of the CLICK* values
        }
        else {
            targetProps = {
                onClick: this.handleTargetClick,
            };
        }
        targetProps.className = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_TARGET"], (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_OPEN"]] = isOpen,
            _a), className);
        targetProps.ref = this.refHandlers.target;
        var children = this.understandChildren();
        var targetTabIndex = this.props.openOnTargetFocus && this.isHoverInteractionKind() ? 0 : undefined;
        var target = __WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"](children.target, 
        // force disable single Tooltip child when popover is open (BLUEPRINT-552)
        isOpen && children.target.type === __WEBPACK_IMPORTED_MODULE_14__tooltip_tooltip__["a" /* Tooltip */]
            ? { isDisabled: true, tabIndex: targetTabIndex }
            : { tabIndex: targetTabIndex });
        var isContentEmpty = children.content == null;
        if (isContentEmpty && !this.props.isDisabled && isOpen !== false && !__WEBPACK_IMPORTED_MODULE_11__common_utils__["isNodeEnv"]("production")) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["u" /* POPOVER_WARN_EMPTY_CONTENT */]);
        }
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](this.props.rootElementTag, targetProps, target, __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__overlay_overlay__["a" /* Overlay */], { autoFocus: this.props.autoFocus, backdropClassName: __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_BACKDROP"], backdropProps: this.props.backdropProps, canEscapeKeyClose: this.props.canEscapeKeyClose, canOutsideClickClose: this.props.interactionKind === PopoverInteractionKind.CLICK, className: this.props.portalClassName, didOpen: this.handleContentMount, enforceFocus: this.props.enforceFocus, hasBackdrop: this.props.isModal, inline: this.props.inline, isOpen: isOpen && !isContentEmpty, lazy: this.props.lazy, onClose: this.handleOverlayClose, transitionDuration: this.props.transitionDuration, transitionName: __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER"] }, this.renderPopover(children.content)));
        var _a;
    };
    Popover.prototype.componentDidMount = function () {
        this.componentDOMChange();
    };
    Popover.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        if (nextProps.isOpen == null && nextProps.isDisabled && !this.props.isDisabled) {
            // ok to use setOpenState here because isDisabled and isOpen are mutex.
            this.setOpenStateByPropCallback(false);
        }
        else if (nextProps.isOpen !== this.props.isOpen) {
            // propagate isOpen prop directly to state, circumventing onInteraction callback
            // (which would be invoked if this went through setOpenState)
            this.setOpenStateDirectly(nextProps.isOpen);
        }
    };
    Popover.prototype.componentWillUpdate = function (_, nextState) {
        if (!this.state.isOpen && nextState.isOpen) {
            this.isContentMounting = true;
            __WEBPACK_IMPORTED_MODULE_11__common_utils__["safeInvoke"](this.props.popoverWillOpen);
        }
        else if (this.state.isOpen && !nextState.isOpen) {
            __WEBPACK_IMPORTED_MODULE_11__common_utils__["safeInvoke"](this.props.popoverWillClose);
        }
    };
    Popover.prototype.componentDidUpdate = function () {
        this.componentDOMChange();
    };
    Popover.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.destroyTether();
    };
    Popover.prototype.validateProps = function (props) {
        if (props.useSmartPositioning || props.constraints != null) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["r" /* POPOVER_WARN_DEPRECATED_CONSTRAINTS */]);
        }
        if (props.isOpen == null && props.onInteraction != null) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["y" /* POPOVER_WARN_UNCONTROLLED_ONINTERACTION */]);
        }
        if (props.inline && (props.useSmartPositioning || props.constraints != null || props.tetherOptions != null)) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["v" /* POPOVER_WARN_INLINE_NO_TETHER */]);
        }
        if (props.isModal && props.inline) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["w" /* POPOVER_WARN_MODAL_INLINE */]);
        }
        if (props.isModal && props.interactionKind !== PopoverInteractionKind.CLICK) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_8__common_errors__["p" /* POPOVER_MODAL_INTERACTION */]);
        }
        var childrenCount = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].count(props.children);
        var hasContentProp = props.content !== undefined;
        var hasTargetProp = props.target !== undefined;
        if (childrenCount === 0 && !hasTargetProp) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_8__common_errors__["q" /* POPOVER_REQUIRES_TARGET */]);
        }
        if (childrenCount > 2) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["x" /* POPOVER_WARN_TOO_MANY_CHILDREN */]);
        }
        if (childrenCount > 0 && hasTargetProp) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["t" /* POPOVER_WARN_DOUBLE_TARGET */]);
        }
        if (childrenCount === 2 && hasContentProp) {
            console.warn(__WEBPACK_IMPORTED_MODULE_8__common_errors__["s" /* POPOVER_WARN_DOUBLE_CONTENT */]);
        }
    };
    Popover.prototype.componentDOMChange = function () {
        if (this.targetElement == null) {
            return;
        }
        if (this.props.useSmartArrowPositioning) {
            this.setState({
                targetHeight: this.targetElement.clientHeight,
                targetWidth: this.targetElement.clientWidth,
            });
        }
        if (!this.props.inline) {
            this.updateTether();
        }
        if (!this.props.inline && this.state.isOpen) {
            this.checkDOMForDarkTheme();
        }
    };
    Popover.prototype.renderPopover = function (content) {
        var _a = this.props, inline = _a.inline, interactionKind = _a.interactionKind;
        var popoverHandlers = {
            // always check popover clicks for dismiss class
            onClick: this.handlePopoverClick,
        };
        if (interactionKind === PopoverInteractionKind.HOVER ||
            (inline && interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY)) {
            popoverHandlers.onMouseEnter = this.handleMouseEnter;
            popoverHandlers.onMouseLeave = this.handleMouseLeave;
        }
        var positionClasses = __WEBPACK_IMPORTED_MODULE_10__common_tetherUtils__["b" /* getAttachmentClasses */](this.props.position).join(" ");
        var containerClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_7__common_classes__["TRANSITION_CONTAINER"], (_b = {}, _b[positionClasses] = inline, _b));
        var popoverClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER"], (_c = {},
            _c[__WEBPACK_IMPORTED_MODULE_7__common_classes__["DARK"]] = this.props.inheritDarkTheme && this.hasDarkParent && !inline,
            _c), this.props.popoverClassName);
        var styles = this.getArrowPositionStyles();
        var transform = { transformOrigin: this.getPopoverTransformOrigin() };
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: containerClasses, ref: this.refHandlers.popover, style: styles.container },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: popoverClasses, style: transform }, popoverHandlers),
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_ARROW"], style: styles.arrow },
                    __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("svg", { viewBox: "0 0 30 30" },
                        __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("path", { className: __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_ARROW"] + "-border", d: SVG_SHADOW_PATH }),
                        __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("path", { className: __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_ARROW"] + "-fill", d: SVG_ARROW_PATH }))),
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_CONTENT"] }, content))));
        var _b, _c;
    };
    // content and target can be specified as props or as children.
    // this method normalizes the two approaches, preferring child over prop.
    Popover.prototype.understandChildren = function () {
        var _a = this.props, children = _a.children, contentProp = _a.content, targetProp = _a.target;
        // #validateProps asserts that 1 <= children.length <= 2 so content is optional
        var _b = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].toArray(children), targetChild = _b[0], contentChild = _b[1];
        return {
            content: ensureElement(contentChild == null ? contentProp : contentChild),
            target: ensureElement(targetChild == null ? targetProp : targetChild),
        };
    };
    Popover.prototype.getArrowPositionStyles = function () {
        if (this.props.useSmartArrowPositioning) {
            var dimensions = { height: this.state.targetHeight, width: this.state.targetWidth };
            return __WEBPACK_IMPORTED_MODULE_15__arrows__["a" /* getArrowPositionStyles */](this.props.position, this.props.arrowSize, this.state.ignoreTargetDimensions, dimensions, this.props.inline);
        }
        else {
            return {};
        }
    };
    Popover.prototype.getPopoverTransformOrigin = function () {
        // if smart positioning is enabled then we must rely on CSS classes to put transform origin
        // on the correct side and cannot override it in JS. (https://github.com/HubSpot/tether/issues/154)
        if (this.props.useSmartArrowPositioning && !this.props.useSmartPositioning) {
            var dimensions = { height: this.state.targetHeight, width: this.state.targetWidth };
            return __WEBPACK_IMPORTED_MODULE_15__arrows__["b" /* getPopoverTransformOrigin */](this.props.position, this.props.arrowSize, dimensions);
        }
        else {
            return undefined;
        }
    };
    Popover.prototype.updateArrowPosition = function () {
        if (this.popoverElement != null) {
            var arrow = this.popoverElement.getElementsByClassName(__WEBPACK_IMPORTED_MODULE_7__common_classes__["POPOVER_ARROW"])[0];
            var centerWidth = (this.state.targetWidth + arrow.clientWidth) / 2;
            var centerHeight = (this.state.targetHeight + arrow.clientHeight) / 2;
            var ignoreWidth = centerWidth > this.popoverElement.clientWidth && __WEBPACK_IMPORTED_MODULE_9__common_position__["b" /* isPositionHorizontal */](this.props.position);
            var ignoreHeight = centerHeight > this.popoverElement.clientHeight && __WEBPACK_IMPORTED_MODULE_9__common_position__["c" /* isPositionVertical */](this.props.position);
            if (!this.state.ignoreTargetDimensions && (ignoreWidth || ignoreHeight)) {
                this.setState({ ignoreTargetDimensions: true });
            }
            else if (this.state.ignoreTargetDimensions && !ignoreWidth && !ignoreHeight) {
                this.setState({ ignoreTargetDimensions: false });
            }
        }
    };
    Popover.prototype.updateTether = function () {
        var _this = this;
        if (this.state.isOpen && !this.props.inline && this.popoverElement != null) {
            var _a = this.props, constraints = _a.constraints, position = _a.position, _b = _a.tetherOptions, tetherOptions = _b === void 0 ? {} : _b, useSmartPositioning = _a.useSmartPositioning;
            // the .pt-popover-target span we wrap the children in won't always be as big as its children
            // so instead, we'll position tether based off of its first child.
            // NOTE: use findDOMNode(this) directly because this.targetElement may not exist yet
            var target = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this).childNodes[0];
            // constraints is deprecated but must still be supported through tetherOptions until v2.0
            var options = constraints == null && !useSmartPositioning
                ? tetherOptions
                : __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, tetherOptions, { constraints: useSmartPositioning ? [SMART_POSITIONING] : constraints });
            var finalTetherOptions = __WEBPACK_IMPORTED_MODULE_10__common_tetherUtils__["a" /* createTetherOptions */](this.popoverElement, target, position, options);
            if (this.tether == null) {
                this.tether = new __WEBPACK_IMPORTED_MODULE_5_tether__(finalTetherOptions);
            }
            else {
                this.tether.setOptions(finalTetherOptions);
            }
            // if props.position has just changed, Tether unfortunately positions the popover based
            // on the margins from the previous position. delay a frame for styles to catch up.
            setTimeout(function () { return _this.tether.position(); });
        }
        else {
            this.destroyTether();
        }
    };
    Popover.prototype.destroyTether = function () {
        if (this.tether != null) {
            this.tether.destroy();
        }
    };
    // a wrapper around setState({isOpen}) that will call props.onInteraction instead when in controlled mode.
    // starts a timeout to delay changing the state if a non-zero duration is provided.
    Popover.prototype.setOpenStateByPropCallback = function (isOpen, e, timeout) {
        var _this = this;
        // cancel any existing timeout because we have new state
        __WEBPACK_IMPORTED_MODULE_11__common_utils__["safeInvoke"](this.cancelOpenTimeout);
        if (timeout > 0) {
            this.cancelOpenTimeout = this.setTimeout(function () { return _this.setOpenStateByPropCallback(isOpen, e); }, timeout);
        }
        else {
            if (this.props.isOpen == null) {
                this.setOpenStateDirectly(isOpen);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_11__common_utils__["safeInvoke"](this.props.onInteraction, isOpen);
            }
            if (!isOpen) {
                __WEBPACK_IMPORTED_MODULE_11__common_utils__["safeInvoke"](this.props.onClose, e);
            }
        }
    };
    Popover.prototype.setOpenStateDirectly = function (isOpen) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_11__common_utils__["isFunction"](isOpen)) {
            this.setState(function (previousState) {
                var nextIsOpen = isOpen(previousState.isOpen);
                if (nextIsOpen) {
                    _this.checkDOMForDarkTheme();
                }
                return { isOpen: nextIsOpen };
            });
        }
        else {
            if (isOpen) {
                this.checkDOMForDarkTheme();
            }
            this.setState({ isOpen: isOpen });
        }
    };
    Popover.prototype.isElementInPopover = function (element) {
        return this.popoverElement != null && this.popoverElement.contains(element);
    };
    Popover.prototype.isHoverInteractionKind = function () {
        return (this.props.interactionKind === PopoverInteractionKind.HOVER ||
            this.props.interactionKind === PopoverInteractionKind.HOVER_TARGET_ONLY);
    };
    // This may cause a preemptive DOM reflow so should be avoided when the tether is not present
    Popover.prototype.checkDOMForDarkTheme = function () {
        this.hasDarkParent = Object(__WEBPACK_IMPORTED_MODULE_12__common_utils_isDarkTheme__["a" /* isDarkTheme */])(this.targetElement);
    };
    Popover.defaultProps = {
        arrowSize: 30,
        className: "",
        defaultIsOpen: false,
        hoverCloseDelay: 300,
        hoverOpenDelay: 150,
        inheritDarkTheme: true,
        inline: false,
        interactionKind: PopoverInteractionKind.CLICK,
        isDisabled: false,
        isModal: false,
        openOnTargetFocus: true,
        popoverClassName: "",
        position: __WEBPACK_IMPORTED_MODULE_9__common_position__["a" /* Position */].RIGHT,
        rootElementTag: "span",
        transitionDuration: 300,
        useSmartArrowPositioning: true,
        useSmartPositioning: false,
    };
    Popover.displayName = "Blueprint.Popover";
    Popover = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Popover);
    return Popover;
}(__WEBPACK_IMPORTED_MODULE_6__common_abstractComponent__["a" /* AbstractComponent */]));

/**
 * Converts a react child to an element: non-empty strings or numbers are wrapped in `<span>`;
 * empty strings are discarded.
 */
function ensureElement(child) {
    // wrap text in a <span> so children are always elements
    if (typeof child === "string") {
        // cull whitespace strings
        return child.trim().length > 0 ? __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", null, child) : undefined;
    }
    else if (typeof child === "number") {
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", null, child);
    }
    else {
        return child;
    }
}
var PopoverFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Popover);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OverlayFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portal_portal__ = __webpack_require__(36);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var Overlay = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Overlay, _super);
    function Overlay(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            container: function (ref) { return (_this.containerElement = ref); },
        };
        _this.handleBackdropMouseDown = function (e) {
            var _a = _this.props, backdropProps = _a.backdropProps, canOutsideClickClose = _a.canOutsideClickClose, enforceFocus = _a.enforceFocus, onClose = _a.onClose;
            if (canOutsideClickClose) {
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(onClose, e);
            }
            if (enforceFocus) {
                // make sure document.activeElement is updated before bringing the focus back
                _this.bringFocusInsideOverlay();
            }
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(backdropProps.onMouseDown, e);
        };
        _this.handleDocumentClick = function (e) {
            var _a = _this.props, isOpen = _a.isOpen, onClose = _a.onClose;
            var eventTarget = e.target;
            var isClickInOverlay = _this.containerElement != null && _this.containerElement.contains(eventTarget);
            if (isOpen && _this.props.canOutsideClickClose && !isClickInOverlay) {
                // casting to any because this is a native event
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(onClose, e);
            }
        };
        _this.handleContentMount = function () {
            if (_this.props.isOpen) {
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(_this.props.didOpen);
            }
            if (_this.props.autoFocus) {
                _this.bringFocusInsideOverlay();
            }
        };
        _this.handleDocumentFocus = function (e) {
            if (_this.props.enforceFocus &&
                _this.containerElement != null &&
                !_this.containerElement.contains(e.target)) {
                // prevent default focus behavior (sometimes auto-scrolls the page)
                e.preventDefault();
                e.stopImmediatePropagation();
                _this.bringFocusInsideOverlay();
            }
        };
        _this.handleKeyDown = function (e) {
            var _a = _this.props, canEscapeKeyClose = _a.canEscapeKeyClose, onClose = _a.onClose;
            if (e.which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ESCAPE"] && canEscapeKeyClose) {
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(onClose, e);
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                e.preventDefault();
            }
        };
        _this.state = { hasEverOpened: props.isOpen };
        return _this;
    }
    Overlay_1 = Overlay;
    Overlay.prototype.render = function () {
        // oh snap! no reason to render anything at all if we're being truly lazy
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        var _a = this.props, children = _a.children, className = _a.className, inline = _a.inline, isOpen = _a.isOpen, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        // add a special class to each child that will automatically set the appropriate
        // CSS position mode under the hood. also, make the container focusable so we can
        // trap focus inside it (via `enforceFocus`).
        var decoratedChildren = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].map(children, function (child) {
            return __WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"](child, {
                className: __WEBPACK_IMPORTED_MODULE_1_classnames__(child.props.className, __WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY_CONTENT"]),
                tabIndex: 0,
            });
        });
        var transitionGroup = (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_addons_css_transition_group__, { transitionAppear: true, transitionAppearTimeout: transitionDuration, transitionEnterTimeout: transitionDuration, transitionLeaveTimeout: transitionDuration, transitionName: transitionName },
            this.maybeRenderBackdrop(),
            isOpen ? decoratedChildren : null));
        var mergedClassName = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY"], (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY_OPEN"]] = isOpen,
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY_INLINE"]] = inline,
            _b), className);
        var elementProps = {
            className: mergedClassName,
            onKeyDown: this.handleKeyDown,
        };
        if (inline) {
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, elementProps, { ref: this.refHandlers.container }), transitionGroup));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__portal_portal__["a" /* Portal */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, elementProps, { containerRef: this.refHandlers.container, onChildrenMount: this.handleContentMount }), transitionGroup));
        }
        var _b;
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ hasEverOpened: this.state.hasEverOpened || nextProps.isOpen });
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.overlayWillClose();
    };
    /**
     * @public for testing
     * @internal
     */
    Overlay.prototype.bringFocusInsideOverlay = function () {
        var _this = this;
        // always delay focus manipulation to just before repaint to prevent scroll jumping
        return requestAnimationFrame(function () {
            // container ref may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            if (_this.containerElement == null || document.activeElement == null || !_this.props.isOpen) {
                return;
            }
            var isFocusOutsideModal = !_this.containerElement.contains(document.activeElement);
            if (isFocusOutsideModal) {
                // element marked autofocus has higher priority than the other clowns
                var autofocusElement = _this.containerElement.query("[autofocus]");
                var wrapperElement = _this.containerElement.query("[tabindex]");
                if (autofocusElement != null) {
                    autofocusElement.focus();
                }
                else if (wrapperElement != null) {
                    wrapperElement.focus();
                }
            }
        });
    };
    Overlay.prototype.maybeRenderBackdrop = function () {
        var _a = this.props, backdropClassName = _a.backdropClassName, backdropProps = _a.backdropProps, hasBackdrop = _a.hasBackdrop, isOpen = _a.isOpen;
        if (hasBackdrop && isOpen) {
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, backdropProps, { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY_BACKDROP"], backdropClassName, backdropProps.className), onMouseDown: this.handleBackdropMouseDown, tabIndex: this.props.canOutsideClickClose ? 0 : null })));
        }
        else {
            return undefined;
        }
    };
    Overlay.prototype.overlayWillClose = function () {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
        var openStack = Overlay_1.openStack;
        var stackIndex = openStack.indexOf(this);
        if (stackIndex !== -1) {
            openStack.splice(stackIndex, 1);
            if (openStack.length > 0) {
                var lastOpenedOverlay = Overlay_1.getLastOpened();
                if (lastOpenedOverlay.props.enforceFocus) {
                    document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
                }
            }
            if (openStack.filter(function (o) { return !o.props.inline && o.props.hasBackdrop; }).length === 0) {
                document.body.classList.remove(__WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY_OPEN"]);
            }
        }
    };
    Overlay.prototype.overlayWillOpen = function () {
        var openStack = Overlay_1.openStack;
        if (openStack.length > 0) {
            document.removeEventListener("focus", Overlay_1.getLastOpened().handleDocumentFocus, /* useCapture */ true);
        }
        openStack.push(this);
        if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
        if (this.props.enforceFocus) {
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (this.props.inline) {
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(this.props.didOpen);
            if (this.props.autoFocus) {
                this.bringFocusInsideOverlay();
            }
        }
        else if (this.props.hasBackdrop) {
            // add a class to the body to prevent scrolling of content below the overlay
            document.body.classList.add(__WEBPACK_IMPORTED_MODULE_5__common_classes__["OVERLAY_OPEN"]);
        }
    };
    Overlay.displayName = "Blueprint.Overlay";
    Overlay.defaultProps = {
        autoFocus: true,
        backdropProps: {},
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        inline: false,
        isOpen: false,
        lazy: true,
        transitionDuration: 300,
        transitionName: "pt-overlay",
    };
    Overlay.openStack = [];
    Overlay.getLastOpened = function () { return Overlay_1.openStack[Overlay_1.openStack.length - 1]; };
    Overlay = Overlay_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Overlay);
    return Overlay;
    var Overlay_1;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var OverlayFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Overlay);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(70)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(73)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ButtonFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnchorButtonFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_props__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstractButton__ = __webpack_require__(86);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file



var Button = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("button", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ type: "button" }, Object(__WEBPACK_IMPORTED_MODULE_2__common_props__["a" /* removeNonHTMLProps */])(this.props), this.getCommonButtonProps()), this.renderChildren()));
    };
    Button.displayName = "Blueprint.Button";
    return Button;
}(__WEBPACK_IMPORTED_MODULE_3__abstractButton__["a" /* AbstractButton */]));

var ButtonFactory = __WEBPACK_IMPORTED_MODULE_1_react__["createFactory"](Button);
var AnchorButton = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnchorButton, _super);
    function AnchorButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnchorButton.prototype.render = function () {
        var _a = this.props, href = _a.href, _b = _a.tabIndex, tabIndex = _b === void 0 ? 0 : _b;
        var commonProps = this.getCommonButtonProps();
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ role: "button" }, Object(__WEBPACK_IMPORTED_MODULE_2__common_props__["a" /* removeNonHTMLProps */])(this.props), commonProps, { href: commonProps.disabled ? undefined : href, tabIndex: commonProps.disabled ? undefined : tabIndex }), this.renderChildren()));
    };
    AnchorButton.displayName = "Blueprint.AnchorButton";
    return AnchorButton;
}(__WEBPACK_IMPORTED_MODULE_3__abstractButton__["a" /* AbstractButton */]));

var AnchorButtonFactory = __WEBPACK_IMPORTED_MODULE_1_react__["createFactory"](AnchorButton);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotkey; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keyCombo__ = __webpack_require__(43);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




var Hotkey = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Hotkey, _super);
    function Hotkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkey.isInstance = function (element) {
        return element != null && element.type === Hotkey;
    };
    Hotkey.prototype.render = function () {
        var _a = this.props, label = _a.label, spreadableProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["label"]);
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "pt-hotkey" },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "pt-hotkey-label" }, label),
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__keyCombo__["a" /* KeyCombo */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, spreadableProps))));
    };
    Hotkey.prototype.validateProps = function (props) {
        if (props.global !== true && props.group == null) {
            throw new Error("non-global <Hotkey>s must define a group");
        }
    };
    Hotkey.defaultProps = {
        allowInInput: false,
        disabled: false,
        global: false,
        preventDefault: false,
        stopPropagation: false,
    };
    return Hotkey;
}(__WEBPACK_IMPORTED_MODULE_2__common__["a" /* AbstractComponent */]));



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(21);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TooltipFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_position__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popover_popover__ = __webpack_require__(15);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







var Tooltip = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, children = _a.children, intent = _a.intent, openOnTargetFocus = _a.openOnTargetFocus, tooltipClassName = _a.tooltipClassName;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["TOOLTIP"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["intentClass"](intent), tooltipClassName);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__popover_popover__["a" /* Popover */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.props, { arrowSize: 22, autoFocus: false, canEscapeKeyClose: false, enforceFocus: false, interactionKind: __WEBPACK_IMPORTED_MODULE_6__popover_popover__["c" /* PopoverInteractionKind */].HOVER_TARGET_ONLY, lazy: true, openOnTargetFocus: openOnTargetFocus, popoverClassName: classes }), children));
    };
    Tooltip.defaultProps = {
        hoverCloseDelay: 0,
        hoverOpenDelay: 100,
        isDisabled: false,
        openOnTargetFocus: true,
        position: __WEBPACK_IMPORTED_MODULE_5__common_position__["a" /* Position */].TOP,
        rootElementTag: "span",
        transitionDuration: 100,
        useSmartArrowPositioning: true,
        useSmartPositioning: false,
    };
    Tooltip.displayName = "Blueprint.Tooltip";
    Tooltip = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Tooltip);
    return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var TooltipFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Tooltip);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpinnerFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utils__ = __webpack_require__(5);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






// see http://stackoverflow.com/a/18473154/3124288 for calculating arc path
var SPINNER_TRACK = "M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89";
// unitless total length of SVG path, to which stroke-dash* properties are relative.
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength
// this value is the result of `<path d={SPINNER_TRACK} />.getTotalLength()` and works in all browsers:
var PATH_LENGTH = 280;
var Spinner = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["SPINNER"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["intentClass"](intent), {
            "pt-no-spin": value != null,
        }, className);
        var style = {
            strokeDasharray: PATH_LENGTH + " " + PATH_LENGTH,
            // default to quarter-circle when indeterminate
            // IE11: CSS transitions on SVG elements are Not Supported :(
            strokeDashoffset: PATH_LENGTH - PATH_LENGTH * (value == null ? 0.25 : Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["clamp"])(value, 0, 1)),
        };
        // HACKHACK to squash error regarding React.SVGProps missing prop pathLength
        var svgPathAttributes = {
            className: "pt-spinner-head",
            d: SPINNER_TRACK,
            pathLength: PATH_LENGTH,
            style: style,
        };
        return this.renderContainer(classes, __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("svg", { viewBox: classes.indexOf(__WEBPACK_IMPORTED_MODULE_4__common_classes__["SMALL"]) >= 0 ? "-15 -15 130 130" : "0 0 100 100" },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("path", { className: "pt-spinner-track", d: SPINNER_TRACK }),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("path", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, svgPathAttributes))));
    };
    // abstract away the container elements so SVGSpinner can do its own thing
    Spinner.prototype.renderContainer = function (classes, content) {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "pt-spinner-svg-container" }, content)));
    };
    Spinner.displayName = "Blueprint.Spinner";
    Spinner = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Spinner);
    return Spinner;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var SpinnerFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Spinner);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




var Menu = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("ul", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["MENU"], this.props.className), ref: this.props.ulRef }, this.props.children));
    };
    Menu.displayName = "Blueprint.Menu";
    return Menu;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var MenuFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](Menu);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeyCodes */
/* unused harmony export Modifiers */
/* unused harmony export ModifierBitMasks */
/* unused harmony export Aliases */
/* unused harmony export ShiftKeys */
/* harmony export (immutable) */ __webpack_exports__["a"] = comboMatches;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return parseKeyCombo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getKeyComboString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getKeyCombo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return normalizeKeyCombo; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var KeyCodes = {
    8: "backspace",
    9: "tab",
    13: "enter",
    20: "capslock",
    27: "esc",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "ins",
    46: "del",
    // number keys
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    // alphabet
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    // punctuation
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
};
var Modifiers = {
    16: "shift",
    17: "ctrl",
    18: "alt",
    91: "meta",
    93: "meta",
    224: "meta",
};
var ModifierBitMasks = {
    alt: 1,
    ctrl: 2,
    meta: 4,
    shift: 8,
};
var Aliases = {
    cmd: "meta",
    command: "meta",
    escape: "esc",
    minus: "-",
    mod: isMac() ? "meta" : "ctrl",
    option: "alt",
    plus: "+",
    return: "enter",
    win: "meta",
};
// alph sorting is unintuitive here
// tslint:disable object-literal-sort-keys
var ShiftKeys = {
    "~": "`",
    "!": "1",
    "@": "2",
    "#": "3",
    $: "4",
    "%": "5",
    "^": "6",
    "&": "7",
    "*": "8",
    "(": "9",
    ")": "0",
    _: "-",
    "+": "=",
    "{": "[",
    "}": "]",
    "|": "\\",
    ":": ";",
    '"': "'",
    "<": ",",
    ">": ".",
    "?": "/",
};
// tslint:enable object-literal-sort-keys
// Function keys
for (var i = 1; i <= 12; ++i) {
    KeyCodes[111 + i] = "f" + i;
}
// Numpad
for (var i = 0; i <= 9; ++i) {
    KeyCodes[96 + i] = "num" + i.toString();
}
function comboMatches(a, b) {
    return a.modifiers === b.modifiers && a.key === b.key;
}
/**
 * Converts a key combo string into a key combo object. Key combos include
 * zero or more modifier keys, such as `shift` or `alt`, and exactly one
 * action key, such as `A`, `enter`, or `left`.
 *
 * For action keys that require a shift, e.g. `@` or `|`, we inlude the
 * necessary `shift` modifier and automatically convert the action key to the
 * unshifted version. For example, `@` is equivalent to `shift+2`.
 */
var parseKeyCombo = function (combo) {
    var pieces = combo
        .replace(/\s/g, "")
        .toLowerCase()
        .split("+");
    var modifiers = 0;
    var key = null;
    for (var _i = 0, pieces_1 = pieces; _i < pieces_1.length; _i++) {
        var piece = pieces_1[_i];
        if (piece === "") {
            throw new Error("Failed to parse key combo \"" + combo + "\".\n                Valid key combos look like \"cmd + plus\", \"shift+p\", or \"!\"");
        }
        if (Aliases[piece] != null) {
            piece = Aliases[piece];
        }
        if (ModifierBitMasks[piece] != null) {
            modifiers += ModifierBitMasks[piece];
        }
        else if (ShiftKeys[piece] != null) {
            // tslint:disable-next-line no-string-literal
            modifiers += ModifierBitMasks["shift"];
            key = ShiftKeys[piece];
        }
        else {
            key = piece.toLowerCase();
        }
    }
    return { modifiers: modifiers, key: key };
};
/**
 * PhantomJS's webkit totally messes up keyboard events, so we have do this
 * fancy little dance with the event data to determine which key was pressed
 * for unit tests.
 */
var normalizeKeyCode = function (e) {
    return e.which === 0 && e.key != null ? e.key.charCodeAt(0) : e.which;
};
/**
 * Converts a keyboard event into a valid combo prop string
 */
var getKeyComboString = function (e) {
    var keys = [];
    // modifiers first
    if (e.ctrlKey) {
        keys.push("ctrl");
    }
    if (e.altKey) {
        keys.push("alt");
    }
    if (e.shiftKey) {
        keys.push("shift");
    }
    if (e.metaKey) {
        keys.push("meta");
    }
    var which = normalizeKeyCode(e);
    if (Modifiers[which] != null) {
        // no action key
    }
    else if (KeyCodes[which] != null) {
        keys.push(KeyCodes[which]);
    }
    else {
        keys.push(String.fromCharCode(which).toLowerCase());
    }
    // join keys with plusses
    return keys.join(" + ");
};
/**
 * Determines the key combo object from the given keyboard event. Again, a key
 * combo includes zero or more modifiers (represented by a bitmask) and one
 * action key, which we determine from the `e.which` property of the keyboard
 * event.
 */
var getKeyCombo = function (e) {
    var key = null;
    var which = normalizeKeyCode(e);
    if (Modifiers[which] != null) {
        // keep key null
    }
    else if (KeyCodes[which] != null) {
        key = KeyCodes[which];
    }
    else {
        key = String.fromCharCode(which).toLowerCase();
    }
    var modifiers = 0;
    // tslint:disable no-string-literal
    if (e.altKey) {
        modifiers += ModifierBitMasks["alt"];
    }
    if (e.ctrlKey) {
        modifiers += ModifierBitMasks["ctrl"];
    }
    if (e.metaKey) {
        modifiers += ModifierBitMasks["meta"];
    }
    if (e.shiftKey) {
        modifiers += ModifierBitMasks["shift"];
    }
    // tslint:enable
    return { modifiers: modifiers, key: key };
};
/**
 * Splits a key combo string into its constituent key values and looks up
 * aliases, such as `return` -> `enter`.
 *
 * Unlike the parseKeyCombo method, this method does NOT convert shifted
 * action keys. So `"@"` will NOT be converted to `["shift", "2"]`).
 */
var normalizeKeyCombo = function (combo, platformOverride) {
    var keys = combo.replace(/\s/g, "").split("+");
    return keys.map(function (key) {
        var keyName = Aliases[key] != null ? Aliases[key] : key;
        return keyName === "meta" ? (isMac(platformOverride) ? "cmd" : "ctrl") : keyName;
    });
};
/* tslint:enable:no-string-literal */
function isMac(platformOverride) {
    var platform = platformOverride != null ? platformOverride : typeof navigator !== "undefined" ? navigator.platform : undefined;
    return platform == null ? false : /Mac|iPod|iPhone|iPad/.test(platform);
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accessibility__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FOCUS_DISABLED_CLASS", function() { return __WEBPACK_IMPORTED_MODULE_0__accessibility__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FocusStyleManager", function() { return __WEBPACK_IMPORTED_MODULE_0__accessibility__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Classes", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IconClasses", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IconContents", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Intent", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPositionHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPositionVertical", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeNonHTMLProps", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createTetherOptions", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTargetAttachment", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getPopoverAttachment", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getAttachmentClasses", function() { return __WEBPACK_IMPORTED_MODULE_1__common__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ButtonFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnchorButton", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnchorButtonFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Elevation", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnimationStates", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollapseFrom", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollapsibleList", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollapsibleListFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTarget", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DialogFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditableText", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EditableTextFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ControlGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ControlGroupFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Control", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_24"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CheckboxFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SwitchFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_25"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FileUploadFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "InputGroupFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LabelFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumericInputFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_41"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextAreaFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_42"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Hotkey", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KeyCombo", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HotkeysTarget", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "comboMatches", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_51"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getKeyCombo", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_52"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getKeyComboString", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_53"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parseKeyCombo", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_55"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hideHotkeysDialog", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_54"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setHotkeysDialogProps", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_57"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Hotkeys", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuDivider", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuDividerFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "renderMenuItem", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_56"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MenuItemFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavbarDivider", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavbarGroup", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavbarHeading", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NonIdealState", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NonIdealStateFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "OverlayFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_40"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PopoverInteractionKind", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PopoverFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVGPopover", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVGPopoverFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProgressBarFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVGTooltip", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_18"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVGTooltipFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_19"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RangeSlider", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RangeSliderFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_20"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SliderFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_21"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_22"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SpinnerFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_23"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVGSpinner", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVGSpinnerFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_26"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_29"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_34"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabsFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_37"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_30"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabListFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_31"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_32"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TabPanelFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_33"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tab2", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_27"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tab2Factory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_28"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Expander", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tabs2", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_35"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tabs2Factory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_36"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_38"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_39"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_43"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_44"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Toaster", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_45"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_46"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TooltipFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_47"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_48"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_49"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return __WEBPACK_IMPORTED_MODULE_2__components__["_50"]; });
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intent; });
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/**
 * The four basic intents.
 */
var Intent;
(function (Intent) {
    Intent[Intent["NONE"] = -1] = "NONE";
    Intent[Intent["PRIMARY"] = 0] = "PRIMARY";
    Intent[Intent["SUCCESS"] = 1] = "SUCCESS";
    Intent[Intent["WARNING"] = 2] = "WARNING";
    Intent[Intent["DANGER"] = 3] = "DANGER";
})(Intent || (Intent = {}));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTetherOptions;
/* harmony export (immutable) */ __webpack_exports__["d"] = getTargetAttachment;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPopoverAttachment;
/* harmony export (immutable) */ __webpack_exports__["b"] = getAttachmentClasses;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__position__ = __webpack_require__(11);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */


// per https://github.com/HubSpot/tether/pull/204, Tether now exposes a `bodyElement` option that,
// when present, gets the tethered element injected into *it* instead of into the document body.
// but both approaches still cause React to freak out, because it loses its handle on the DOM
// element. thus, we pass a fake HTML bodyElement to Tether, with a no-op `appendChild` function
// (the only function the library uses from bodyElement).
var fakeHtmlElement = {
    appendChild: function () {
        /* No-op */
    },
};
/** @internal */
function createTetherOptions(element, target, position, tetherOptions) {
    if (tetherOptions === void 0) { tetherOptions = {}; }
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, tetherOptions, { attachment: getPopoverAttachment(position), bodyElement: fakeHtmlElement, classPrefix: "pt-tether", element: element,
        target: target, targetAttachment: getTargetAttachment(position) });
}
/** @internal */
function getTargetAttachment(position) {
    var attachments = (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].TOP_LEFT] = "top left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].TOP] = "top center",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].TOP_RIGHT] = "top right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].RIGHT_TOP] = "top right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].RIGHT] = "middle right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].RIGHT_BOTTOM] = "bottom right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].BOTTOM_RIGHT] = "bottom right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].BOTTOM] = "bottom center",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].BOTTOM_LEFT] = "bottom left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].LEFT_BOTTOM] = "bottom left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].LEFT] = "middle left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].LEFT_TOP] = "top left",
        _a);
    return attachments[position];
    var _a;
}
/** @internal */
function getPopoverAttachment(position) {
    var attachments = (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].TOP_LEFT] = "bottom left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].TOP] = "bottom center",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].TOP_RIGHT] = "bottom right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].RIGHT_TOP] = "top left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].RIGHT] = "middle left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].RIGHT_BOTTOM] = "bottom left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].BOTTOM_RIGHT] = "top right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].BOTTOM] = "top center",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].BOTTOM_LEFT] = "top left",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].LEFT_BOTTOM] = "bottom right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].LEFT] = "middle right",
        _a[__WEBPACK_IMPORTED_MODULE_1__position__["a" /* Position */].LEFT_TOP] = "top right",
        _a);
    return attachments[position];
    var _a;
}
/** @internal */
function getAttachmentClasses(position) {
    // this essentially reimplements the Tether logic for attachment classes so the same styles
    // can be reused outside of Tether-based popovers.
    return expandAttachmentClasses(getPopoverAttachment(position), "pt-tether-element-attached").concat(expandAttachmentClasses(getTargetAttachment(position), "pt-tether-target-attached"));
}
function expandAttachmentClasses(attachments, prefix) {
    var _a = attachments.split(" "), verticalAlign = _a[0], horizontalAlign = _a[1];
    return [prefix + "-" + verticalAlign, prefix + "-" + horizontalAlign];
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ContextMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context_menu_contextMenu__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_alert__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__alert_alert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumbs_breadcrumb__ = __webpack_require__(87);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__breadcrumbs_breadcrumb__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_buttons__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__button_buttons__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__button_buttons__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__button_buttons__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__button_buttons__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_buttonGroup__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__button_buttonGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__callout_callout__ = __webpack_require__(89);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__callout_callout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__card_card__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_6__card_card__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collapse_collapse__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__collapse_collapse__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_7__collapse_collapse__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__collapsible_list_collapsibleList__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_8__collapsible_list_collapsibleList__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_8__collapsible_list_collapsibleList__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_8__collapsible_list_collapsibleList__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__context_menu_contextMenuTarget__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_9__context_menu_contextMenuTarget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialog_dialog__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_10__dialog_dialog__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_10__dialog_dialog__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editable_text_editableText__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__editable_text_editableText__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_11__editable_text_editableText__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forms_controlGroup__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__forms_controlGroup__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__forms_controlGroup__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forms_controls__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_13__forms_controls__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forms_fileUpload__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_14__forms_fileUpload__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_14__forms_fileUpload__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forms_formGroup__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_15__forms_formGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forms_inputGroup__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_16__forms_inputGroup__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_16__forms_inputGroup__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__forms_label__ = __webpack_require__(99);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_17__forms_label__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_17__forms_label__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_numericInput__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_18__forms_numericInput__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_18__forms_numericInput__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__forms_radioGroup__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_19__forms_radioGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__forms_textArea__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return __WEBPACK_IMPORTED_MODULE_20__forms_textArea__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return __WEBPACK_IMPORTED_MODULE_20__forms_textArea__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_52", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_53", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_54", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_55", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_57", function() { return __WEBPACK_IMPORTED_MODULE_21__hotkeys_hotkeys__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__icon_icon__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_22__icon_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__menu_menu__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_23__menu_menu__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_23__menu_menu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__menu_menuDivider__ = __webpack_require__(105);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_24__menu_menuDivider__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_24__menu_menuDivider__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__menu_menuItem__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_25__menu_menuItem__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_25__menu_menuItem__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_56", function() { return __WEBPACK_IMPORTED_MODULE_25__menu_menuItem__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__navbar_navbar__ = __webpack_require__(106);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_26__navbar_navbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__navbar_navbarDivider__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_27__navbar_navbarDivider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__navbar_navbarGroup__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_28__navbar_navbarGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__navbar_navbarHeading__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_29__navbar_navbarHeading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__non_ideal_state_nonIdealState__ = __webpack_require__(107);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_30__non_ideal_state_nonIdealState__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_30__non_ideal_state_nonIdealState__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__overlay_overlay__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_31__overlay_overlay__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_31__overlay_overlay__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__text_text__ = __webpack_require__(108);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return __WEBPACK_IMPORTED_MODULE_32__text_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__popover_popover__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_33__popover_popover__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_33__popover_popover__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_33__popover_popover__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__popover_svgPopover__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_34__popover_svgPopover__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_34__popover_svgPopover__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__portal_portal__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_35__portal_portal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__progress_progressBar__ = __webpack_require__(110);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_36__progress_progressBar__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_36__progress_progressBar__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__tooltip_svgTooltip__ = __webpack_require__(111);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_37__tooltip_svgTooltip__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_37__tooltip_svgTooltip__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__slider_rangeSlider__ = __webpack_require__(112);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_38__slider_rangeSlider__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_38__slider_rangeSlider__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__slider_slider__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_39__slider_slider__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_39__slider_slider__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__spinner_spinner__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_40__spinner_spinner__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_40__spinner_spinner__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__spinner_svgSpinner__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_41__spinner_svgSpinner__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_41__spinner_svgSpinner__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__tabs_tab__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_42__tabs_tab__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_42__tabs_tab__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__tabs_tabs__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return __WEBPACK_IMPORTED_MODULE_43__tabs_tabs__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return __WEBPACK_IMPORTED_MODULE_43__tabs_tabs__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__tabs_tabList__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_44__tabs_tabList__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_44__tabs_tabList__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__tabs_tabPanel__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return __WEBPACK_IMPORTED_MODULE_45__tabs_tabPanel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return __WEBPACK_IMPORTED_MODULE_45__tabs_tabPanel__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__tabs2_tab2__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_46__tabs2_tab2__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_46__tabs2_tab2__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__tabs2_tabs2__ = __webpack_require__(116);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_47__tabs2_tabs2__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return __WEBPACK_IMPORTED_MODULE_47__tabs2_tabs2__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return __WEBPACK_IMPORTED_MODULE_47__tabs2_tabs2__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__tag_tag__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return __WEBPACK_IMPORTED_MODULE_48__tag_tag__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return __WEBPACK_IMPORTED_MODULE_48__tag_tag__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__toast_toast__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return __WEBPACK_IMPORTED_MODULE_49__toast_toast__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return __WEBPACK_IMPORTED_MODULE_49__toast_toast__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__toast_toaster__ = __webpack_require__(119);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return __WEBPACK_IMPORTED_MODULE_50__toast_toaster__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__tooltip_tooltip__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return __WEBPACK_IMPORTED_MODULE_51__tooltip_tooltip__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return __WEBPACK_IMPORTED_MODULE_51__tooltip_tooltip__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__tree_tree__ = __webpack_require__(120);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return __WEBPACK_IMPORTED_MODULE_52__tree_tree__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return __WEBPACK_IMPORTED_MODULE_52__tree_tree__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__tree_treeNode__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return __WEBPACK_IMPORTED_MODULE_53__tree_treeNode__["a"]; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // we're in browser
    // tslint:disable-next-line:no-var-requires
    __webpack_require__(65); // only import actual dom4 if we're in the browser (not server-compatible)
    // we'll still need dom4 types for the TypeScript to compile, these are included in package.json
}

var ContextMenu = __WEBPACK_IMPORTED_MODULE_0__context_menu_contextMenu__;























































/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["show"] = show;
/* harmony export (immutable) */ __webpack_exports__["hide"] = hide;
/* harmony export (immutable) */ __webpack_exports__["isOpen"] = isOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_position__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popover_popover__ = __webpack_require__(15);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var TETHER_OPTIONS = {
    constraints: [{ attachment: "together", pin: true, to: "window" }],
};
var TRANSITION_DURATION = 100;
/* istanbul ignore next */
var ContextMenu = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        _this.cancelContextMenu = function (e) { return e.preventDefault(); };
        _this.handleBackdropContextMenu = function (e) {
            // React function to remove from the event pool, useful when using a event within a callback
            e.persist();
            e.preventDefault();
            // wait for backdrop to disappear so we can find the "real" element at event coordinates.
            // timeout duration is equivalent to transition duration so we know it's animated out.
            _this.setTimeout(function () {
                // retrigger context menu event at the element beneath the backdrop.
                // if it has a `contextmenu` event handler then it'll be invoked.
                // if it doesn't, no native menu will show (at least on OSX) :(
                var newTarget = document.elementFromPoint(e.clientX, e.clientY);
                newTarget.dispatchEvent(new MouseEvent("contextmenu", e));
            }, TRANSITION_DURATION);
        };
        _this.handlePopoverInteraction = function (nextOpenState) {
            if (!nextOpenState) {
                // delay the actual hiding till the event queue clears
                // to avoid flicker of opening twice
                requestAnimationFrame(function () { return _this.hide(); });
            }
        };
        return _this;
    }
    ContextMenu.prototype.render = function () {
        // prevent right-clicking in a context menu
        var content = __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { onContextMenu: this.cancelContextMenu }, this.state.menu);
        var popoverClassName = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["MINIMAL"], (_a = {}, _a[__WEBPACK_IMPORTED_MODULE_5__common_classes__["DARK"]] = this.state.isDarkTheme, _a));
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__popover_popover__["a" /* Popover */], { backdropProps: { onContextMenu: this.handleBackdropContextMenu }, content: content, enforceFocus: false, isModal: true, isOpen: this.state.isOpen, onInteraction: this.handlePopoverInteraction, position: __WEBPACK_IMPORTED_MODULE_6__common_position__["a" /* Position */].RIGHT_TOP, popoverClassName: popoverClassName, useSmartArrowPositioning: false, tetherOptions: TETHER_OPTIONS, transitionDuration: TRANSITION_DURATION },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["CONTEXT_MENU_POPOVER_TARGET"], style: this.state.offset })));
        var _a;
    };
    ContextMenu.prototype.show = function (menu, offset, onClose, isDarkTheme) {
        this.setState({ isOpen: true, menu: menu, offset: offset, onClose: onClose, isDarkTheme: isDarkTheme });
    };
    ContextMenu.prototype.hide = function () {
        Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(this.state.onClose);
        this.setState({ isOpen: false, onClose: undefined });
    };
    return ContextMenu;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));
var contextMenu;
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 */
function show(menu, offset, onClose, isDarkTheme) {
    if (contextMenu == null) {
        var contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(__WEBPACK_IMPORTED_MODULE_5__common_classes__["CONTEXT_MENU"]);
        document.body.appendChild(contextMenuElement);
        contextMenu = __WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](ContextMenu, null), contextMenuElement);
    }
    contextMenu.show(menu, offset, onClose, isDarkTheme);
}
/** Hide the open context menu. */
function hide() {
    if (contextMenu != null) {
        contextMenu.hide();
    }
}
/** Return whether a context menu is currently open. */
function isOpen() {
    return contextMenu != null && contextMenu.state.isOpen;
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDarkTheme;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(8);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

function isDarkTheme(element) {
    return element.closest("." + __WEBPACK_IMPORTED_MODULE_0____["b" /* Classes */].DARK) != null;
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_props__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utils__ = __webpack_require__(5);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







var REACT_CONTEXT_TYPES = {
    blueprintPortalClassName: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "string") {
            return new Error(__WEBPACK_IMPORTED_MODULE_4__common_errors__["z" /* PORTAL_CONTEXT_CLASS_NAME_STRING */]);
        }
        return undefined;
    },
};
/**
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 */
var Portal = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Portal, _super);
    function Portal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Portal.prototype.render = function () {
        return null;
    };
    Portal.prototype.componentDidMount = function () {
        var targetElement = document.createElement("div");
        targetElement.classList.add(__WEBPACK_IMPORTED_MODULE_3__common_classes__["PORTAL"]);
        if (this.context.blueprintPortalClassName != null) {
            targetElement.classList.add(this.context.blueprintPortalClassName);
        }
        document.body.appendChild(targetElement);
        this.targetElement = targetElement;
        this.componentDidUpdate();
    };
    Portal.prototype.componentDidUpdate = function () {
        var _this = this;
        // use special render function to preserve React context, in case children need it
        __WEBPACK_IMPORTED_MODULE_2_react_dom__["unstable_renderSubtreeIntoContainer"](
        /* parentComponent */ this, __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, Object(__WEBPACK_IMPORTED_MODULE_5__common_props__["a" /* removeNonHTMLProps */])(this.props), { ref: this.props.containerRef }), this.props.children), this.targetElement, function () { return Object(__WEBPACK_IMPORTED_MODULE_6__common_utils__["safeInvoke"])(_this.props.onChildrenMount); });
    };
    Portal.prototype.componentWillUnmount = function () {
        __WEBPACK_IMPORTED_MODULE_2_react_dom__["unmountComponentAtNode"](this.targetElement);
        this.targetElement.remove();
    };
    Portal.displayName = "Blueprint.Portal";
    Portal.contextTypes = REACT_CONTEXT_TYPES;
    return Portal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icon_icon__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__overlay_overlay__ = __webpack_require__(16);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var Dialog = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleContainerMouseDown = function (evt) {
            // quick re-implementation of canOutsideClickClose because .pt-dialog-container covers the backdrop
            var isClickOutsideDialog = evt.target.closest("." + __WEBPACK_IMPORTED_MODULE_4__common_classes__["DIALOG"]) == null;
            if (isClickOutsideDialog && _this.props.canOutsideClickClose) {
                Object(__WEBPACK_IMPORTED_MODULE_6__common_utils__["safeInvoke"])(_this.props.onClose, evt);
            }
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__overlay_overlay__["a" /* Overlay */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.props, { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["OVERLAY_SCROLL_CONTAINER"], hasBackdrop: true }),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["DIALOG_CONTAINER"], onMouseDown: this.handleContainerMouseDown },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["DIALOG"], this.props.className), style: this.props.style },
                    this.maybeRenderHeader(),
                    this.props.children))));
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.iconName != null) {
                console.warn(__WEBPACK_IMPORTED_MODULE_5__common_errors__["f" /* DIALOG_WARN_NO_HEADER_ICON */]);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(__WEBPACK_IMPORTED_MODULE_5__common_errors__["e" /* DIALOG_WARN_NO_HEADER_CLOSE_BUTTON */]);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // for now, show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["DIALOG_CLOSE_BUTTON"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["iconClass"]("small-cross"));
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("button", { "aria-label": "Close", className: classes, onClick: this.props.onClose });
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        var _a = this.props, iconName = _a.iconName, title = _a.title;
        if (title == null) {
            return undefined;
        }
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["DIALOG_HEADER"] },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__icon_icon__["a" /* Icon */], { iconName: iconName, iconSize: 20 }),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h5", null, title),
            this.maybeRenderCloseButton()));
    };
    Dialog.defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
    };
    Dialog.displayName = "Blueprint.Dialog";
    return Dialog;
}(__WEBPACK_IMPORTED_MODULE_3__common_abstractComponent__["a" /* AbstractComponent */]));

var DialogFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](Dialog);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Collapse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var AnimationStates;
(function (AnimationStates) {
    AnimationStates[AnimationStates["CLOSED"] = 0] = "CLOSED";
    AnimationStates[AnimationStates["OPENING"] = 1] = "OPENING";
    AnimationStates[AnimationStates["OPEN"] = 2] = "OPEN";
    AnimationStates[AnimationStates["CLOSING_START"] = 3] = "CLOSING_START";
    AnimationStates[AnimationStates["CLOSING_END"] = 4] = "CLOSING_END";
})(AnimationStates || (AnimationStates = {}));
/*
 * A collapse can be in one of 5 states:
 * CLOSED
 * When in this state, the contents of the collapse is not rendered, the collapse height is 0,
 * and the body Y is at -height (so that the bottom of the body is at Y=0).
 *
 * OPEN
 * When in this state, the collapse height is set to auto, and the body Y is set to 0 (so the element can be seen
 * as normal).
 *
 * CLOSING_START
 * When in this state, height has been changed from auto to the measured height of the body to prepare for the
 * closing animation in CLOSING_END.
 *
 * CLOSING_END
 * When in this state, the height is set to 0 and the body Y is at -height. Both of these properties are transformed,
 * and then after the animation is complete, the state changes to CLOSED.
 *
 * OPENING
 * When in this state, the body is re-rendered, height is set to the measured body height and the body Y is set to 0.
 * This is all animated, and on complete, the state changes to OPEN.
 *
 * When changing the isOpen prop, the following happens to the states:
 * isOpen = true : CLOSED -> OPENING -> OPEN
 * isOpen = false: OPEN -> CLOSING_START -> CLOSING_END -> CLOSED
 * These are all animated.
 */
var Collapse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Collapse, _super);
    function Collapse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animationState: AnimationStates.OPEN,
            height: "0px",
        };
        // The most recent non-0 height (once a height has been measured - is 0 until then)
        _this.height = 0;
        _this.contentsRefHandler = function (el) {
            _this.contents = el;
            if (el != null) {
                _this.height = _this.contents.clientHeight;
                _this.setState({
                    animationState: _this.props.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED,
                    height: _this.height + "px",
                });
            }
        };
        return _this;
    }
    Collapse.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.contents != null && this.contents.clientHeight !== 0) {
            this.height = this.contents.clientHeight;
        }
        if (this.props.isOpen !== nextProps.isOpen) {
            this.clearTimeouts();
            if (this.state.animationState !== AnimationStates.CLOSED && !nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.CLOSING_START,
                    height: this.height + "px",
                });
            }
            else if (this.state.animationState !== AnimationStates.OPEN && nextProps.isOpen) {
                this.setState({
                    animationState: AnimationStates.OPENING,
                    height: this.height + "px",
                });
                this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
            }
        }
    };
    Collapse.prototype.render = function () {
        var isContentVisible = this.state.animationState !== AnimationStates.CLOSED;
        var shouldRenderChildren = isContentVisible || this.props.keepChildrenMounted;
        var displayWithTransform = isContentVisible && this.state.animationState !== AnimationStates.CLOSING_END;
        var isAutoHeight = this.state.height === "auto";
        var containerStyle = {
            height: isContentVisible ? this.state.height : undefined,
            overflowY: (isAutoHeight ? "visible" : undefined),
            transition: isAutoHeight ? "none" : undefined,
        };
        var contentsStyle = {
            transform: displayWithTransform ? "translateY(0)" : "translateY(-" + this.height + "px)",
            transition: isAutoHeight ? "none" : undefined,
        };
        // HACKHACK: type cast because there's no single overload that supports all
        // three ReactTypes (string | ComponentClass | StatelessComponent)
        return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](this.props.component, {
            className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["COLLAPSE"], this.props.className),
            style: containerStyle,
        }, __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: "pt-collapse-body", ref: this.contentsRefHandler, style: contentsStyle, "aria-hidden": !isContentVisible && this.props.keepChildrenMounted }, shouldRenderChildren ? this.props.children : null));
    };
    Collapse.prototype.componentDidMount = function () {
        this.forceUpdate();
        if (this.props.isOpen) {
            this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
        }
        else {
            this.setState({ animationState: AnimationStates.CLOSED });
        }
    };
    Collapse.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.animationState === AnimationStates.CLOSING_START) {
            this.setTimeout(function () {
                return _this.setState({
                    animationState: AnimationStates.CLOSING_END,
                    height: "0px",
                });
            });
            this.setTimeout(function () { return _this.onDelayedStateChange(); }, this.props.transitionDuration);
        }
    };
    Collapse.prototype.onDelayedStateChange = function () {
        switch (this.state.animationState) {
            case AnimationStates.OPENING:
                this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
                break;
            case AnimationStates.CLOSING_END:
                this.setState({ animationState: AnimationStates.CLOSED });
                break;
            default:
                break;
        }
    };
    Collapse.displayName = "Blueprint.Collapse";
    Collapse.defaultProps = {
        component: "div",
        isOpen: false,
        keepChildrenMounted: false,
        transitionDuration: 200,
    };
    return Collapse;
}(__WEBPACK_IMPORTED_MODULE_3__common_abstractComponent__["a" /* AbstractComponent */]));



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
/* harmony export (immutable) */ __webpack_exports__["c"] = renderMenuItem;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuItemFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_position__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popover_popover__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu__ = __webpack_require__(26);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */










var REACT_CONTEXT_TYPES = {
    alignLeft: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "boolean") {
            return new Error("[Blueprint] MenuItem context alignLeft must be boolean");
        }
        return undefined;
    },
};
var MenuItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            alignLeft: false,
        };
        _this.liRefHandler = function (r) { return (_this.liElement = r); };
        _this.measureSubmenu = function (el) {
            if (el != null) {
                var submenuRect = __WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"](el).getBoundingClientRect();
                var parentWidth = _this.liElement.parentElement.getBoundingClientRect().width;
                var adjustmentWidth = submenuRect.width + parentWidth;
                // this ensures that the left and right measurements represent a submenu opened to the right
                var submenuLeft = submenuRect.left;
                var submenuRight = submenuRect.right;
                if (_this.state.alignLeft) {
                    submenuLeft += adjustmentWidth;
                    submenuRight += adjustmentWidth;
                }
                var _a = _this.props.submenuViewportMargin.left, left = _a === void 0 ? 0 : _a;
                var _b = _this.props.submenuViewportMargin.right, right = _b === void 0 ? 0 : _b;
                if (typeof document !== "undefined" &&
                    typeof document.documentElement !== "undefined" &&
                    Number(document.documentElement.clientWidth)) {
                    // we're in a browser context and the clientWidth is available,
                    // use it to set calculate 'right'
                    right = document.documentElement.clientWidth - right;
                }
                // uses context to prioritize the previous positioning
                var alignLeft = _this.context.alignLeft || false;
                if (alignLeft) {
                    if (submenuLeft - adjustmentWidth <= left) {
                        alignLeft = false;
                    }
                }
                else {
                    if (submenuRight >= right) {
                        alignLeft = true;
                    }
                }
                _this.setState({ alignLeft: alignLeft });
            }
        };
        _this.renderChildren = function () {
            var _a = _this.props, children = _a.children, submenu = _a.submenu;
            if (children != null) {
                var childProps_1 = _this.cascadeProps();
                if (Object.keys(childProps_1).length === 0) {
                    return children;
                }
                else {
                    return __WEBPACK_IMPORTED_MODULE_2_react__["Children"].map(children, function (child) {
                        return __WEBPACK_IMPORTED_MODULE_2_react__["cloneElement"](child, childProps_1);
                    });
                }
            }
            else if (submenu != null) {
                return submenu.map(_this.cascadeProps).map(renderMenuItem);
            }
            else {
                return undefined;
            }
        };
        /**
         * Evalutes this.props and cascades prop values into new props when:
         * - submenuViewportMargin is defined, but is undefined for the supplied input.
         * - useSmartPositioning is false, but is undefined for the supplied input.
         * @param {IMenuItemProps} newProps If supplied, object will be modified, otherwise, defaults to an empty object.
         * @returns An object to be used as child props.
         */
        _this.cascadeProps = function (newProps) {
            if (newProps === void 0) { newProps = {}; }
            var _a = _this.props, submenuViewportMargin = _a.submenuViewportMargin, useSmartPositioning = _a.useSmartPositioning;
            if (submenuViewportMargin != null && newProps.submenuViewportMargin == null) {
                newProps.submenuViewportMargin = submenuViewportMargin;
            }
            if (useSmartPositioning === false && newProps.useSmartPositioning == null) {
                newProps.useSmartPositioning = useSmartPositioning;
            }
            return newProps;
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, label = _a.label, submenu = _a.submenu, popoverProps = _a.popoverProps;
        var hasSubmenu = children != null || submenu != null;
        var liClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__((_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["MENU_SUBMENU"]] = hasSubmenu,
            _b));
        var anchorClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["MENU_ITEM"], __WEBPACK_IMPORTED_MODULE_5__common_classes__["intentClass"](this.props.intent), (_c = {},
            _c[__WEBPACK_IMPORTED_MODULE_5__common_classes__["DISABLED"]] = disabled,
            // prevent popover from closing when clicking on submenu trigger or disabled item
            _c[__WEBPACK_IMPORTED_MODULE_5__common_classes__["POPOVER_DISMISS"]] = this.props.shouldDismissPopover && !disabled && !hasSubmenu,
            _c), __WEBPACK_IMPORTED_MODULE_5__common_classes__["iconClass"](this.props.iconName), this.props.className);
        var labelElement;
        if (label != null) {
            labelElement = __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: "pt-menu-item-label" }, label);
        }
        var content = (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("a", { className: anchorClasses, href: disabled ? undefined : this.props.href, onClick: disabled ? undefined : this.props.onClick, tabIndex: disabled ? undefined : 0, target: this.props.target },
            labelElement,
            this.props.text));
        if (hasSubmenu) {
            var measureSubmenu = this.props.useSmartPositioning ? this.measureSubmenu : null;
            var submenuElement = __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__menu__["a" /* Menu */], { ref: measureSubmenu }, this.renderChildren());
            var popoverClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["MINIMAL"], __WEBPACK_IMPORTED_MODULE_5__common_classes__["MENU_SUBMENU"], popoverProps.popoverClassName, (_d = {},
                _d[__WEBPACK_IMPORTED_MODULE_5__common_classes__["ALIGN_LEFT"]] = this.state.alignLeft,
                _d));
            content = (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__popover_popover__["a" /* Popover */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ isDisabled: disabled, enforceFocus: false, hoverCloseDelay: 0, inline: true, interactionKind: __WEBPACK_IMPORTED_MODULE_8__popover_popover__["c" /* PopoverInteractionKind */].HOVER, position: this.state.alignLeft ? __WEBPACK_IMPORTED_MODULE_7__common_position__["a" /* Position */].LEFT_TOP : __WEBPACK_IMPORTED_MODULE_7__common_position__["a" /* Position */].RIGHT_TOP, useSmartArrowPositioning: false }, popoverProps, { content: submenuElement, popoverClassName: popoverClasses }), content));
        }
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { className: liClasses, ref: this.liRefHandler }, content));
        var _b, _c, _d;
    };
    MenuItem.prototype.getChildContext = function () {
        return { alignLeft: this.state.alignLeft };
    };
    MenuItem.prototype.validateProps = function (props) {
        if (props.children != null && props.submenu != null) {
            console.warn(__WEBPACK_IMPORTED_MODULE_6__common_errors__["h" /* MENU_WARN_CHILDREN_SUBMENU_MUTEX */]);
        }
    };
    MenuItem.defaultProps = {
        disabled: false,
        popoverProps: {},
        shouldDismissPopover: true,
        submenuViewportMargin: {},
        text: "",
        useSmartPositioning: true,
    };
    MenuItem.displayName = "Blueprint.MenuItem";
    MenuItem.contextTypes = REACT_CONTEXT_TYPES;
    MenuItem.childContextTypes = REACT_CONTEXT_TYPES;
    return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));

function renderMenuItem(props, key) {
    return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](MenuItem, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ key: key }, props));
}
var MenuItemFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](MenuItem);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CheckboxFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SwitchFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RadioFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_props__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utils__ = __webpack_require__(5);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

// HACKHACK: these components should go in separate files
// tslint:disable max-classes-per-file
// we need some empty interfaces to show up in docs
// tslint:disable no-empty-interface





var INVALID_PROPS = [
    // we spread props to `<input>` but render `children` as its sibling
    "children",
    "defaultIndeterminate",
    "indeterminate",
    "labelElement",
];
/** Base Component class for all Controls */
var Control = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // generates control markup for given input type.
    // optional inputRef in case the component needs reference for itself (don't forget to invoke the prop!).
    Control.prototype.renderControl = function (type, typeClassName, inputRef) {
        if (inputRef === void 0) { inputRef = this.props.inputRef; }
        var className = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["CONTROL"], typeClassName, (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_3__common_classes__["DISABLED"]] = this.props.disabled,
            _a[__WEBPACK_IMPORTED_MODULE_3__common_classes__["INLINE"]] = this.props.inline,
            _a), this.props.className);
        var inputProps = Object(__WEBPACK_IMPORTED_MODULE_4__common_props__["a" /* removeNonHTMLProps */])(this.props, INVALID_PROPS, true);
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("label", { className: className, style: this.props.style },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("input", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, inputProps, { ref: inputRef, type: type })),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["CONTROL_INDICATOR"] }),
            this.props.label,
            this.props.labelElement,
            this.props.children));
        var _a;
    };
    return Control;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var Checkbox = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInputRef = function (ref) {
            _this.input = ref;
            Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["safeInvoke"])(_this.props.inputRef, ref);
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        return this.renderControl("checkbox", "pt-checkbox", this.handleInputRef);
    };
    Checkbox.prototype.componentDidMount = function () {
        if (this.props.defaultIndeterminate != null) {
            this.input.indeterminate = this.props.defaultIndeterminate;
        }
        this.updateIndeterminate();
    };
    Checkbox.prototype.componentDidUpdate = function () {
        this.updateIndeterminate();
    };
    Checkbox.prototype.updateIndeterminate = function () {
        if (this.props.indeterminate != null) {
            this.input.indeterminate = this.props.indeterminate;
        }
    };
    Checkbox.displayName = "Blueprint.Checkbox";
    return Checkbox;
}(Control));

var Switch = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Switch, _super);
    function Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Switch.prototype.render = function () {
        return this.renderControl("checkbox", "pt-switch");
    };
    Switch.displayName = "Blueprint.Switch";
    return Switch;
}(Control));

var Radio = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        return this.renderControl("radio", "pt-radio");
    };
    Radio.displayName = "Blueprint.Radio";
    return Radio;
}(Control));

var CheckboxFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](Checkbox);
var SwitchFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](Switch);
var RadioFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](Radio);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputGroupFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_props__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_icon__ = __webpack_require__(13);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







var InputGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](InputGroup, _super);
    function InputGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            rightElementWidth: 30,
        };
        _this.refHandlers = {
            rightElement: function (ref) { return (_this.rightElement = ref); },
        };
        return _this;
    }
    InputGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, leftIconName = _a.leftIconName;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["INPUT_GROUP"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["intentClass"](intent), (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["DISABLED"]] = this.props.disabled,
            _b), className);
        var style = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.props.style, { paddingRight: this.state.rightElementWidth });
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__icon_icon__["a" /* Icon */], { iconName: leftIconName, iconSize: "inherit" }),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("input", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ type: "text" }, Object(__WEBPACK_IMPORTED_MODULE_5__common_props__["a" /* removeNonHTMLProps */])(this.props), { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["INPUT"], ref: this.props.inputRef, style: style })),
            this.maybeRenderRightElement()));
        var _b;
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: "pt-input-action", ref: this.refHandlers.rightElement }, rightElement));
    };
    InputGroup.prototype.updateInputWidth = function () {
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (Math.abs(clientWidth - this.state.rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ rightElementWidth: 0 });
        }
    };
    InputGroup.displayName = "Blueprint.InputGroup";
    InputGroup = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], InputGroup);
    return InputGroup;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var InputGroupFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](InputGroup);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Hotkeys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotkey__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__hotkey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keyCombo__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__keyCombo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotkeysTarget__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__hotkeysTarget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hotkeyParser__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__hotkeyParser__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__hotkeyParser__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__hotkeyParser__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__hotkeyParser__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hotkeysDialog__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__hotkeysDialog__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__hotkeysDialog__["d"]; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */










var Hotkeys = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Hotkeys, _super);
    function Hotkeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hotkeys.prototype.render = function () {
        var hotkeys = __WEBPACK_IMPORTED_MODULE_1_react__["Children"].map(this.props.children, function (child) { return child.props; });
        // sort by group label alphabetically, globals first
        hotkeys.sort(function (a, b) {
            if (a.global) {
                return b.global ? 0 : -1;
            }
            if (b.global) {
                return 1;
            }
            return a.group.localeCompare(b.group);
        });
        var lastGroup = null;
        var elems = [];
        for (var _i = 0, hotkeys_1 = hotkeys; _i < hotkeys_1.length; _i++) {
            var hotkey = hotkeys_1[_i];
            var groupLabel = hotkey.group;
            if (groupLabel !== lastGroup) {
                elems.push(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("h4", { key: "group-" + elems.length, className: "pt-hotkey-group" }, groupLabel));
                lastGroup = groupLabel;
            }
            elems.push(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__hotkey__["a" /* Hotkey */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ key: elems.length }, hotkey)));
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: "pt-hotkey-column" }, elems);
    };
    Hotkeys.prototype.validateProps = function (props) {
        __WEBPACK_IMPORTED_MODULE_1_react__["Children"].forEach(props.children, function (child) {
            if (!__WEBPACK_IMPORTED_MODULE_4__hotkey__["a" /* Hotkey */].isInstance(child)) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_3__common_errors__["g" /* HOTKEYS_HOTKEY_CHILDREN */]);
            }
        });
    };
    Hotkeys.defaultProps = {
        tabIndex: 0,
    };
    return Hotkeys;
}(__WEBPACK_IMPORTED_MODULE_2__common__["a" /* AbstractComponent */]));



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyCombo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotkeyParser__ = __webpack_require__(27);
/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var KeyIcons = {
    alt: "pt-icon-key-option",
    cmd: "pt-icon-key-command",
    ctrl: "pt-icon-key-control",
    delete: "pt-icon-key-delete",
    down: "pt-icon-arrow-down",
    enter: "pt-icon-key-enter",
    left: "pt-icon-arrow-left",
    meta: "pt-icon-key-command",
    right: "pt-icon-arrow-right",
    shift: "pt-icon-key-shift",
    up: "pt-icon-arrow-up",
};
var KeyCombo = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](KeyCombo, _super);
    function KeyCombo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyCombo.prototype.render = function () {
        var keys = Object(__WEBPACK_IMPORTED_MODULE_2__hotkeyParser__["d" /* normalizeKeyCombo */])(this.props.combo);
        var components = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var icon = KeyIcons[key];
            if (icon != null) {
                components.push(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("kbd", { className: "pt-key pt-modifier-key", key: "key-" + i },
                    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "pt-icon-standard " + icon }),
                    key));
            }
            else {
                if (key.length === 1) {
                    key = key.toUpperCase();
                }
                components.push(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("kbd", { className: "pt-key", key: "key-" + i }, key));
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("span", { className: "pt-key-combo" }, components);
    };
    return KeyCombo;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = isHotkeysDialogShowing;
/* harmony export (immutable) */ __webpack_exports__["d"] = setHotkeysDialogProps;
/* harmony export (immutable) */ __webpack_exports__["e"] = showHotkeysDialog;
/* harmony export (immutable) */ __webpack_exports__["a"] = hideHotkeysDialog;
/* harmony export (immutable) */ __webpack_exports__["b"] = hideHotkeysDialogAfterDelay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotkey__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hotkeys__ = __webpack_require__(42);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








/**
 * The delay before showing or hiding the dialog. Should be long enough to
 * allow all registered hotkey listeners to execute first.
 */
var DELAY_IN_MS = 10;
var HotkeysDialog = (function () {
    function HotkeysDialog() {
        var _this = this;
        this.componentProps = {
            globalHotkeysGroup: "Global hotkeys",
        };
        this.hotkeysQueue = [];
        this.isDialogShowing = false;
        this.show = function () {
            _this.isDialogShowing = true;
            _this.render();
        };
        this.hide = function () {
            _this.isDialogShowing = false;
            _this.render();
        };
    }
    HotkeysDialog.prototype.render = function () {
        if (this.container == null) {
            this.container = this.getContainer();
        }
        __WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](this.renderComponent(), this.container);
    };
    HotkeysDialog.prototype.unmount = function () {
        if (this.container != null) {
            __WEBPACK_IMPORTED_MODULE_3_react_dom__["unmountComponentAtNode"](this.container);
            this.container.remove();
            delete this.container;
        }
    };
    /**
     * Because hotkeys can be registered globally and locally and because
     * event ordering cannot be guaranteed, we use this debouncing method to
     * allow all hotkey listeners to fire and add their hotkeys to the dialog.
     *
     * 10msec after the last listener adds their hotkeys, we render the dialog
     * and clear the queue.
     */
    HotkeysDialog.prototype.enqueueHotkeysForDisplay = function (hotkeys) {
        this.hotkeysQueue.push(hotkeys);
        // reset timeout for debounce
        window.clearTimeout(this.showTimeoutToken);
        this.showTimeoutToken = window.setTimeout(this.show, DELAY_IN_MS);
    };
    HotkeysDialog.prototype.hideAfterDelay = function () {
        window.clearTimeout(this.hideTimeoutToken);
        this.hideTimeoutToken = window.setTimeout(this.hide, DELAY_IN_MS);
    };
    HotkeysDialog.prototype.isShowing = function () {
        return this.isDialogShowing;
    };
    HotkeysDialog.prototype.getContainer = function () {
        if (this.container == null) {
            this.container = document.createElement("div");
            this.container.classList.add(__WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].PORTAL);
            document.body.appendChild(this.container);
        }
        return this.container;
    };
    HotkeysDialog.prototype.renderComponent = function () {
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components__["v" /* Dialog */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.componentProps, { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(this.componentProps.className, "pt-hotkey-dialog"), isOpen: this.isDialogShowing, onClose: this.hide }),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].DIALOG_BODY }, this.renderHotkeys())));
    };
    HotkeysDialog.prototype.renderHotkeys = function () {
        var _this = this;
        var hotkeys = this.emptyHotkeyQueue();
        var elements = hotkeys.map(function (hotkey, index) {
            var group = hotkey.global === true && hotkey.group == null ? _this.componentProps.globalHotkeysGroup : hotkey.group;
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__hotkey__["a" /* Hotkey */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ key: index }, hotkey, { group: group }));
        });
        return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__hotkeys__["b" /* Hotkeys */], null, elements);
    };
    HotkeysDialog.prototype.emptyHotkeyQueue = function () {
        // flatten then empty the hotkeys queue
        var hotkeys = this.hotkeysQueue.reduce(function (arr, queued) { return arr.concat(queued); }, []);
        this.hotkeysQueue.length = 0;
        return hotkeys;
    };
    return HotkeysDialog;
}());
// singleton instance
var HOTKEYS_DIALOG = new HotkeysDialog();
function isHotkeysDialogShowing() {
    return HOTKEYS_DIALOG.isShowing();
}
function setHotkeysDialogProps(props) {
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            HOTKEYS_DIALOG.componentProps[key] = props[key];
        }
    }
}
function showHotkeysDialog(hotkeys) {
    HOTKEYS_DIALOG.enqueueHotkeysForDisplay(hotkeys);
}
function hideHotkeysDialog() {
    HOTKEYS_DIALOG.hide();
}
/**
 * Use this function instead of `hideHotkeysDialog` if you need to ensure that all hotkey listeners
 * have time to execute with the dialog in a consistent open state. This can avoid flickering the
 * dialog between open and closed states as successive listeners fire.
 */
function hideHotkeysDialogAfterDelay() {
    HOTKEYS_DIALOG.hideAfterDelay();
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarDivider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var NavbarDivider = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](NavbarDivider, _super);
    function NavbarDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["className"]);
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["NAVBAR_DIVIDER"], className) }, htmlProps));
    };
    NavbarDivider.displayName = "Blueprint.NavbarDivider";
    NavbarDivider = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], NavbarDivider);
    return NavbarDivider;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var NavbarGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](NavbarGroup, _super);
    function NavbarGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarGroup.prototype.render = function () {
        var _a = this.props, align = _a.align, children = _a.children, propsClassName = _a.className, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["align", "children", "className"]);
        var className = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["NAVBAR_GROUP"], (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["ALIGN_LEFT"]] = align === "left",
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["ALIGN_RIGHT"]] = align === "right",
            _b), propsClassName);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: className }, htmlProps), children));
        var _b;
    };
    NavbarGroup.displayName = "Blueprint.NavbarGroup";
    NavbarGroup.defaultProps = {
        align: "left",
    };
    NavbarGroup = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], NavbarGroup);
    return NavbarGroup;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarHeading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var NavbarHeading = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](NavbarHeading, _super);
    function NavbarHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarHeading.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["children", "className"]);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["NAVBAR_HEADING"], className) }, htmlProps), children));
    };
    NavbarHeading.displayName = "Blueprint.NavbarHeading";
    NavbarHeading = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], NavbarHeading);
    return NavbarHeading;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreSlider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__(5);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var CoreSlider = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](CoreSlider, _super);
    function CoreSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.className = __WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER"];
        _this.refHandlers = {
            track: function (el) { return (_this.trackElement = el); },
        };
        _this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackClick(event);
            }
        };
        _this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                _this.handleTrackTouch(event);
            }
        };
        _this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest("." + __WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER_HANDLE"]) == null;
        };
        _this.state = {
            labelPrecision: _this.getLabelPrecision(props),
            tickSize: 0,
        };
        return _this;
    }
    CoreSlider.prototype.render = function () {
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(this.className, (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_5__common_classes__["DISABLED"]] = this.props.disabled,
            _a[__WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER"] + "-unlabeled"] = this.props.renderLabel === false,
            _a[__WEBPACK_IMPORTED_MODULE_5__common_classes__["VERTICAL"]] = this.props.vertical,
            _a), this.props.className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER"] + "-track", ref: this.refHandlers.track }),
            this.maybeRenderFill(),
            this.maybeRenderAxis(),
            this.renderHandles()));
        var _a;
    };
    CoreSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentDidUpdate = function () {
        this.updateTickSize();
    };
    CoreSlider.prototype.componentWillReceiveProps = function (props) {
        _super.prototype.componentWillReceiveProps.call(this, props);
        this.setState({ labelPrecision: this.getLabelPrecision(props) });
    };
    CoreSlider.prototype.formatLabel = function (value) {
        var renderLabel = this.props.renderLabel;
        if (renderLabel === false) {
            return undefined;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["isFunction"])(renderLabel)) {
            return renderLabel(value);
        }
        else {
            return value.toFixed(this.state.labelPrecision);
        }
    };
    CoreSlider.prototype.validateProps = function (props) {
        if (props.stepSize <= 0) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_6__common_errors__["D" /* SLIDER_ZERO_STEP */]);
        }
        if (props.labelStepSize <= 0) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_6__common_errors__["C" /* SLIDER_ZERO_LABEL_STEP */]);
        }
    };
    CoreSlider.prototype.getTrackInitialPixel = function () {
        if (this.trackElement == null) {
            return undefined;
        }
        var trackRect = this.trackElement.getBoundingClientRect();
        // for vertical tracks, the initial (lowest-`value`) pixel is on the bottom.
        return this.props.vertical ? trackRect.top + trackRect.height : trackRect.left;
    };
    CoreSlider.prototype.maybeRenderAxis = function () {
        // explicit typedefs are required because tsc (rightly) assumes that props might be overriden with different
        // types in subclasses
        var max = this.props.max;
        var min = this.props.min;
        var labelStepSize = this.props.labelStepSize;
        if (this.props.renderLabel === false) {
            return undefined;
        }
        var stepSize = Math.round(this.state.tickSize * labelStepSize);
        var labels = [];
        // tslint:disable-next-line:one-variable-per-declaration ban-comma-operator
        for (var i = min, offset = 0; i < max || Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["approxEqual"])(i, max); i += labelStepSize, offset += stepSize) {
            var style = this.props.vertical ? { bottom: offset } : { left: offset };
            labels.push(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER"] + "-label", key: i, style: style }, this.formatLabel(i)));
        }
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER"] + "-axis" }, labels);
    };
    CoreSlider.prototype.maybeRenderFill = function () {
        if (this.props.showTrackFill && this.trackElement != null) {
            return this.renderFill();
        }
        return undefined;
    };
    CoreSlider.prototype.getLabelPrecision = function (_a) {
        var labelPrecision = _a.labelPrecision, stepSize = _a.stepSize;
        // infer default label precision from stepSize because that's how much the handle moves.
        return labelPrecision == null ? Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["countDecimalPlaces"])(stepSize) : labelPrecision;
    };
    CoreSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var trackSize = this.props.vertical ? this.trackElement.clientHeight : this.trackElement.clientWidth;
            var tickSize = trackSize / (this.props.max - this.props.min);
            this.setState({ tickSize: tickSize });
        }
    };
    CoreSlider = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], CoreSlider);
    return CoreSlider;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Handle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__(5);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








// props that require number values, for validation
var NUMBER_PROPS = ["max", "min", "stepSize", "tickSize", "value"];
var Handle = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Handle, _super);
    function Handle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isMoving: false,
        };
        _this.refHandlers = {
            handle: function (el) { return (_this.handleElement = el); },
        };
        _this.beginHandleMovement = function (event) {
            document.addEventListener("mousemove", _this.handleHandleMovement);
            document.addEventListener("mouseup", _this.endHandleMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(_this.mouseEventClientOffset(event)));
        };
        _this.beginHandleTouchMovement = function (event) {
            document.addEventListener("touchmove", _this.handleHandleTouchMovement);
            document.addEventListener("touchend", _this.endHandleTouchMovement);
            document.addEventListener("touchcancel", _this.endHandleTouchMovement);
            _this.setState({ isMoving: true });
            _this.changeValue(_this.clientToValue(_this.touchEventClientOffset(event)));
        };
        _this.endHandleMovement = function (event) {
            _this.handleMoveEndedAt(_this.mouseEventClientOffset(event));
        };
        _this.endHandleTouchMovement = function (event) {
            _this.handleMoveEndedAt(_this.touchEventClientOffset(event));
        };
        _this.handleMoveEndedAt = function (clientPixel) {
            _this.removeDocumentEventListeners();
            _this.setState({ isMoving: false });
            // not using changeValue because we want to invoke the handler regardless of current prop value
            var onRelease = _this.props.onRelease;
            var finalValue = _this.clamp(_this.clientToValue(clientPixel));
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(onRelease, finalValue);
        };
        _this.handleHandleMovement = function (event) {
            _this.handleMovedTo(_this.mouseEventClientOffset(event));
        };
        _this.handleHandleTouchMovement = function (event) {
            _this.handleMovedTo(_this.touchEventClientOffset(event));
        };
        _this.handleMovedTo = function (clientPixel) {
            if (_this.state.isMoving && !_this.props.disabled) {
                _this.changeValue(_this.clientToValue(clientPixel));
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, stepSize = _a.stepSize, value = _a.value;
            var which = event.which;
            if (which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_DOWN"] || which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_LEFT"]) {
                _this.changeValue(value - stepSize);
                // this key event has been handled! prevent browser scroll on up/down
                event.preventDefault();
            }
            else if (which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_UP"] || which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_RIGHT"]) {
                _this.changeValue(value + stepSize);
                event.preventDefault();
            }
        };
        _this.handleKeyUp = function (event) {
            if ([__WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_UP"], __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_DOWN"], __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_LEFT"], __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_RIGHT"]].indexOf(event.which) >= 0) {
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(_this.props.onRelease, _this.props.value);
            }
        };
        return _this;
    }
    Handle.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, label = _a.label, min = _a.min, tickSize = _a.tickSize, value = _a.value, vertical = _a.vertical;
        var isMoving = this.state.isMoving;
        var handleMidpoint = this.getHandleMidpointAndOffset(this.handleElement, true).handleMidpoint;
        var offset = Math.round((value - min) * tickSize - handleMidpoint);
        var style = vertical ? { bottom: offset } : { left: offset };
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER_HANDLE"], (_b = {}, _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["ACTIVE"]] = isMoving, _b), className), onKeyDown: disabled ? null : this.handleKeyDown, onKeyUp: disabled ? null : this.handleKeyUp, onMouseDown: disabled ? null : this.beginHandleMovement, onTouchStart: disabled ? null : this.beginHandleTouchMovement, ref: this.refHandlers.handle, style: style, tabIndex: 0 }, label == null ? null : __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["SLIDER_LABEL"] }, label)));
        var _b;
    };
    Handle.prototype.componentWillUnmount = function () {
        this.removeDocumentEventListeners();
    };
    /** Convert client pixel to value between min and max. */
    Handle.prototype.clientToValue = function (clientPixel) {
        var _a = this.props, stepSize = _a.stepSize, tickSize = _a.tickSize, value = _a.value, vertical = _a.vertical;
        if (this.handleElement == null) {
            return value;
        }
        // #1769: this logic doesn't work perfectly when the tick size is
        // smaller than the handle size; it may be off by a tick or two.
        var clientPixelNormalized = vertical ? window.innerHeight - clientPixel : clientPixel;
        var handleCenterPixel = this.getHandleElementCenterPixel(this.handleElement);
        var pixelDelta = clientPixelNormalized - handleCenterPixel;
        // convert pixels to range value in increments of `stepSize`
        var valueDelta = Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
        return value + valueDelta;
    };
    Handle.prototype.mouseEventClientOffset = function (event) {
        return this.props.vertical ? event.clientY : event.clientX;
    };
    Handle.prototype.touchEventClientOffset = function (event) {
        var touch = event.changedTouches[0];
        return this.props.vertical ? touch.clientY : touch.clientX;
    };
    Handle.prototype.validateProps = function (props) {
        for (var _i = 0, NUMBER_PROPS_1 = NUMBER_PROPS; _i < NUMBER_PROPS_1.length; _i++) {
            var prop = NUMBER_PROPS_1[_i];
            if (typeof props[prop] !== "number") {
                throw new Error("[Blueprint] <Handle> requires number value for " + prop + " prop");
            }
        }
    };
    /** Clamp value and invoke callback if it differs from current value */
    Handle.prototype.changeValue = function (newValue, callback) {
        if (callback === void 0) { callback = this.props.onChange; }
        newValue = this.clamp(newValue);
        if (!isNaN(newValue) && this.props.value !== newValue) {
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(callback, newValue);
        }
    };
    /** Clamp value between min and max props */
    Handle.prototype.clamp = function (value) {
        return Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["clamp"])(value, this.props.min, this.props.max);
    };
    Handle.prototype.getHandleElementCenterPixel = function (handleElement) {
        var _a = this.getHandleMidpointAndOffset(handleElement), handleMidpoint = _a.handleMidpoint, handleOffset = _a.handleOffset;
        return handleOffset + handleMidpoint;
    };
    Handle.prototype.getHandleMidpointAndOffset = function (handleElement, useOppositeDimension) {
        if (useOppositeDimension === void 0) { useOppositeDimension = false; }
        if (handleElement == null) {
            return { handleMidpoint: 0, handleOffset: 0 };
        }
        var vertical = this.props.vertical;
        // getBoundingClientRect().height includes border size; clientHeight does not.
        var handleRect = handleElement.getBoundingClientRect();
        var sizeKey = vertical
            ? useOppositeDimension ? "width" : "height"
            : useOppositeDimension ? "height" : "width";
        // "bottom" value seems to be consistently incorrect, so explicitly
        // calculate it using the window offset instead.
        var handleOffset = vertical ? window.innerHeight - (handleRect.top + handleRect[sizeKey]) : handleRect.left;
        return { handleMidpoint: handleRect[sizeKey] / 2, handleOffset: handleOffset };
    };
    Handle.prototype.removeDocumentEventListeners = function () {
        document.removeEventListener("mousemove", this.handleHandleMovement);
        document.removeEventListener("mouseup", this.endHandleMovement);
        document.removeEventListener("touchmove", this.handleHandleTouchMovement);
        document.removeEventListener("touchend", this.endHandleTouchMovement);
        document.removeEventListener("touchcancel", this.endHandleTouchMovement);
    };
    Handle.displayName = "Blueprint.SliderHandle";
    Handle = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Handle);
    return Handle;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Tab = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("li", { "aria-controls": this.props.panelId, "aria-disabled": this.props.isDisabled, "aria-expanded": this.props.isSelected, "aria-selected": this.props.isSelected, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["TAB"], this.props.className), id: this.props.id, role: "tab", tabIndex: this.props.isDisabled ? null : 0 }, this.props.children));
    };
    Tab.defaultProps = {
        isDisabled: false,
        isSelected: false,
    };
    Tab.displayName = "Blueprint.Tab";
    Tab = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Tab);
    return Tab;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var TabFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Tab);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabListFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var TabList = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TabList, _super);
    function TabList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            shouldAnimate: false,
        };
        return _this;
    }
    TabList.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("ul", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["TAB_LIST"], this.props.className), role: "tablist" },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__("pt-tab-indicator-wrapper", { "pt-no-animation": !this.state.shouldAnimate }), style: this.props.indicatorWrapperStyle },
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "pt-tab-indicator" })),
            this.props.children));
    };
    TabList.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.indicatorWrapperStyle == null) {
            this.setTimeout(function () { return _this.setState({ shouldAnimate: true }); });
        }
    };
    TabList.displayName = "Blueprint.TabList";
    TabList = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], TabList);
    return TabList;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));

var TabListFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](TabList);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabPanelFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var TabPanel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TabPanel, _super);
    function TabPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabPanel.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { "aria-labelledby": this.props._tabId, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["TAB_PANEL"], this.props.className), id: this.props._id, role: "tabpanel" }, this.props.children));
    };
    TabPanel.displayName = "Blueprint.TabPanel";
    TabPanel = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], TabPanel);
    return TabPanel;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var TabPanelFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](TabPanel);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab2Factory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Tab2 = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tab2, _super);
    function Tab2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // this component is never rendered directly; see Tabs2#renderTabPanel()
    /* istanbul ignore next */
    Tab2.prototype.render = function () {
        var _a = this.props, className = _a.className, panel = _a.panel;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["TAB_PANEL"], className), role: "tablist" }, panel));
    };
    Tab2.defaultProps = {
        disabled: false,
        id: undefined,
    };
    Tab2.displayName = "Blueprint.Tab2";
    Tab2 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Tab2);
    return Tab2;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var Tab2Factory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Tab2);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__button_buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icon_icon__ = __webpack_require__(13);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var Toast = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleActionClick = function (e) {
            Object(__WEBPACK_IMPORTED_MODULE_6__common_utils__["safeInvoke"])(_this.props.action.onClick, e);
            _this.triggerDismiss(false);
        };
        _this.handleCloseClick = function () { return _this.triggerDismiss(false); };
        _this.startTimeout = function () {
            if (_this.props.timeout > 0) {
                _this.setTimeout(function () { return _this.triggerDismiss(true); }, _this.props.timeout);
            }
        };
        return _this;
    }
    Toast.prototype.render = function () {
        var _a = this.props, className = _a.className, iconName = _a.iconName, intent = _a.intent, message = _a.message;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["TOAST"], __WEBPACK_IMPORTED_MODULE_5__common_classes__["intentClass"](intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout, tabIndex: 0 },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__icon_icon__["a" /* Icon */], { iconName: iconName }),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["TOAST_MESSAGE"] }, message),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["BUTTON_GROUP"], __WEBPACK_IMPORTED_MODULE_5__common_classes__["MINIMAL"]) },
                this.maybeRenderActionButton(),
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__button_buttons__["c" /* Button */], { iconName: "cross", onClick: this.handleCloseClick }))));
    };
    Toast.prototype.componentDidMount = function () {
        this.startTimeout();
    };
    Toast.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.timeout <= 0 && this.props.timeout > 0) {
            this.startTimeout();
        }
        else if (prevProps.timeout > 0 && this.props.timeout <= 0) {
            this.clearTimeouts();
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    Toast.prototype.maybeRenderActionButton = function () {
        var action = this.props.action;
        if (action == null) {
            return undefined;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__button_buttons__["a" /* AnchorButton */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, action, { intent: undefined, onClick: this.handleActionClick }));
        }
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        Object(__WEBPACK_IMPORTED_MODULE_6__common_utils__["safeInvoke"])(this.props.onDismiss, didTimeoutExpire);
        this.clearTimeouts();
    };
    Toast.defaultProps = {
        className: "",
        message: "",
        timeout: 5000,
    };
    Toast.displayName = "Blueprint.Toast";
    Toast = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Toast);
    return Toast;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));

var ToastFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Toast);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collapse_collapse__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_icon__ = __webpack_require__(13);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







var TreeNode = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TreeNode, _super);
    function TreeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCaretClick = function (e) {
            e.stopPropagation();
            var _a = _this.props, isExpanded = _a.isExpanded, onCollapse = _a.onCollapse, onExpand = _a.onExpand;
            Object(__WEBPACK_IMPORTED_MODULE_4__common_utils__["safeInvoke"])(isExpanded ? onCollapse : onExpand, _this, e);
        };
        _this.handleClick = function (e) {
            Object(__WEBPACK_IMPORTED_MODULE_4__common_utils__["safeInvoke"])(_this.props.onClick, _this, e);
        };
        _this.handleContentRef = function (element) {
            Object(__WEBPACK_IMPORTED_MODULE_4__common_utils__["safeInvoke"])(_this.props.contentRef, _this, element);
        };
        _this.handleContextMenu = function (e) {
            Object(__WEBPACK_IMPORTED_MODULE_4__common_utils__["safeInvoke"])(_this.props.onContextMenu, _this, e);
        };
        _this.handleDoubleClick = function (e) {
            Object(__WEBPACK_IMPORTED_MODULE_4__common_utils__["safeInvoke"])(_this.props.onDoubleClick, _this, e);
        };
        return _this;
    }
    TreeNode.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasCaret = _a.hasCaret, iconName = _a.iconName, isExpanded = _a.isExpanded, isSelected = _a.isSelected, label = _a.label;
        var showCaret = hasCaret == null ? __WEBPACK_IMPORTED_MODULE_2_react__["Children"].count(children) > 0 : hasCaret;
        var caretClass = showCaret ? __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_CARET"] : __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_CARET_NONE"];
        var caretStateClass = isExpanded ? __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_CARET_OPEN"] : __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_CARET_CLOSED"];
        var caretClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(caretClass, __WEBPACK_IMPORTED_MODULE_3__common_classes__["ICON_STANDARD"], (_b = {},
            _b[caretStateClass] = showCaret,
            _b));
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE"], (_c = {},
            _c[__WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_SELECTED"]] = isSelected,
            _c[__WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_EXPANDED"]] = isExpanded,
            _c), className);
        var contentClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_CONTENT"], "pt-tree-node-content-" + this.props.depth);
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { className: classes },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: contentClasses, onClick: this.handleClick, onContextMenu: this.handleContextMenu, onDoubleClick: this.handleDoubleClick, ref: this.handleContentRef },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: caretClasses, onClick: showCaret ? this.handleCaretClick : null }),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__icon_icon__["a" /* Icon */], { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_ICON"], iconName: iconName }),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_LABEL"] }, label),
                this.maybeRenderSecondaryLabel()),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__collapse_collapse__["b" /* Collapse */], { isOpen: isExpanded }, children)));
        var _b, _c;
    };
    TreeNode.prototype.maybeRenderSecondaryLabel = function () {
        if (this.props.secondaryLabel != null) {
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_SECONDARY_LABEL"] }, this.props.secondaryLabel);
        }
        else {
            return undefined;
        }
    };
    return TreeNode;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));



/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(9);
var Showcase_1 = __webpack_require__(57);
ReactDOM.render(React.createElement(Showcase_1.Showcase, { compiler: "TypeScript", framework: "React" }), document.getElementById("example"));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var core_1 = __webpack_require__(28);
var BaseComponent_1 = __webpack_require__(121);
var InputTextareaShowcase_1 = __webpack_require__(127);
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Showcase = /** @class */ (function (_super) {
    __extends(Showcase, _super);
    function Showcase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Showcase.prototype.render = function () {
        return (React.createElement(core_1.Tabs2, { id: "Tabs2Example", vertical: true },
            React.createElement(core_1.Tab2, { id: "rx", title: "React", panel: this.renderBaseComponent('React jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact js') }),
            React.createElement(core_1.Tab2, { id: "ng", title: "Angular", panel: this.renderBaseComponent('Angular js') }),
            React.createElement(core_1.Tab2, { id: "mb", title: "Ember", panel: this.renderBaseComponent('Ember js') }),
            React.createElement(core_1.Tab2, { id: "bb", title: "Backbone", panel: this.renderBaseComponent('Backbone js') }),
            React.createElement(core_1.Tab2, { id: "textarea", title: "TextArea", panel: this.renderBaseComponent(React.createElement(InputTextareaShowcase_1.InputTextareaShowcase, null)) })));
    };
    Showcase.prototype.renderBaseComponent = function (children) {
        return React.createElement(BaseComponent_1.BaseComponent, { children: children });
    };
    return Showcase;
}(React.Component));
exports.Showcase = Showcase;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focusStyleManager__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__focusStyleManager__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__focusStyleManager__["b"]; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FOCUS_DISABLED_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FocusStyleManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_interactionMode__ = __webpack_require__(60);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

var FOCUS_DISABLED_CLASS = "pt-focus-disabled";
var fakeFocusEngine = {
    isActive: function () { return true; },
    start: function () { return true; },
    stop: function () { return true; },
};
var focusEngine = typeof document !== "undefined"
    ? new __WEBPACK_IMPORTED_MODULE_0__common_interactionMode__["a" /* InteractionModeEngine */](document.documentElement, FOCUS_DISABLED_CLASS)
    : fakeFocusEngine;
var FocusStyleManager = {
    alwaysShowFocus: function () { return focusEngine.stop(); },
    isActive: function () { return focusEngine.isActive(); },
    onlyShowFocusOnTabs: function () { return focusEngine.start(); },
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionModeEngine; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var TAB_KEY_CODE = 9;
/* istanbul ignore next */
/**
 * A nifty little class that maintains event handlers to add a class to the container element
 * when entering "mouse mode" (on a `mousedown` event) and remove it when entering "keyboard mode"
 * (on a `tab` key `keydown` event).
 */
var InteractionModeEngine = (function () {
    // tslint:disable-next-line:no-constructor-vars
    function InteractionModeEngine(container, className) {
        var _this = this;
        this.container = container;
        this.className = className;
        this.isRunning = false;
        this.handleKeyDown = function (e) {
            if (e.which === TAB_KEY_CODE) {
                _this.reset();
                _this.container.addEventListener("mousedown", _this.handleMouseDown);
            }
        };
        this.handleMouseDown = function () {
            _this.reset();
            _this.container.classList.add(_this.className);
            _this.container.addEventListener("keydown", _this.handleKeyDown);
        };
    }
    /** Returns whether the engine is currently running. */
    InteractionModeEngine.prototype.isActive = function () {
        return this.isRunning;
    };
    /** Enable behavior which applies the given className when in mouse mode. */
    InteractionModeEngine.prototype.start = function () {
        this.container.addEventListener("mousedown", this.handleMouseDown);
        this.isRunning = true;
    };
    /** Disable interaction mode behavior and remove className from container. */
    InteractionModeEngine.prototype.stop = function () {
        this.reset();
        this.isRunning = false;
    };
    InteractionModeEngine.prototype.reset = function () {
        this.container.classList.remove(this.className);
        this.container.removeEventListener("keydown", this.handleKeyDown);
        this.container.removeEventListener("mousedown", this.handleMouseDown);
    };
    return InteractionModeEngine;
}());



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arraysEqual;
/* harmony export (immutable) */ __webpack_exports__["e"] = shallowCompareKeys;
/* harmony export (immutable) */ __webpack_exports__["b"] = deepCompareKeys;
/* harmony export (immutable) */ __webpack_exports__["d"] = getShallowUnequalKeyValues;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDeepUnequalKeyValues;
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/**
 * Returns true if the arrays are equal. Elements will be shallowly compared by
 * default, or they will be compared using the custom `compare` function if one
 * is provided.
 */
function arraysEqual(arrA, arrB, compare) {
    if (compare === void 0) { compare = function (a, b) { return a === b; }; }
    // treat `null` and `undefined` as the same
    if (arrA == null && arrB == null) {
        return true;
    }
    else if (arrA == null || arrB == null || arrA.length !== arrB.length) {
        return false;
    }
    else {
        return arrA.every(function (a, i) { return compare(a, arrB[i]); });
    }
}
/**
 * Shallow comparison between objects. If `keys` is provided, just that subset
 * of keys will be compared; otherwise, all keys will be compared.
 */
function shallowCompareKeys(objA, objB, keys) {
    // treat `null` and `undefined` as the same
    if (objA == null && objB == null) {
        return true;
    }
    else if (objA == null || objB == null) {
        return false;
    }
    else if (Array.isArray(objA) || Array.isArray(objB)) {
        return false;
    }
    else if (keys != null) {
        return _shallowCompareKeys(objA, objB, keys);
    }
    else {
        // shallowly compare all keys from both objects
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        return (_shallowCompareKeys(objA, objB, { include: keysA }) && _shallowCompareKeys(objA, objB, { include: keysB }));
    }
}
/**
 * Deep comparison between objects. If `keys` is provided, just that subset of
 * keys will be compared; otherwise, all keys will be compared.
 */
function deepCompareKeys(objA, objB, keys) {
    if (objA === objB) {
        return true;
    }
    else if (objA == null && objB == null) {
        // treat `null` and `undefined` as the same
        return true;
    }
    else if (objA == null || objB == null) {
        return false;
    }
    else if (Array.isArray(objA) || Array.isArray(objB)) {
        return arraysEqual(objA, objB, deepCompareKeys);
    }
    else if (_isSimplePrimitiveType(objA) || _isSimplePrimitiveType(objB)) {
        return objA === objB;
    }
    else if (keys != null) {
        return _deepCompareKeys(objA, objB, keys);
    }
    else if (objA.constructor !== objB.constructor) {
        return false;
    }
    else {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA == null || keysB == null) {
            return false;
        }
        if (keysA.length === 0 && keysB.length === 0) {
            return true;
        }
        return arraysEqual(keysA, keysB) && _deepCompareKeys(objA, objB, keysA);
    }
}
/**
 * Returns a descriptive object for each key whose values are shallowly unequal
 * between two provided objects. Useful for debugging shouldComponentUpdate.
 */
function getShallowUnequalKeyValues(objA, objB, keys) {
    // default param values let null values pass through, so we have to take
    // this more thorough approach
    var definedObjA = objA == null ? {} : objA;
    var definedObjB = objB == null ? {} : objB;
    var filteredKeys = _filterKeys(definedObjA, definedObjB, keys == null ? { exclude: [] } : keys);
    return _getUnequalKeyValues(definedObjA, definedObjB, filteredKeys, function (a, b, key) {
        return shallowCompareKeys(a, b, { include: [key] });
    });
}
/**
 * Returns a descriptive object for each key whose values are deeply unequal
 * between two provided objects. Useful for debugging shouldComponentUpdate.
 */
function getDeepUnequalKeyValues(objA, objB, keys) {
    if (objA === void 0) { objA = {}; }
    if (objB === void 0) { objB = {}; }
    var filteredKeys = keys == null ? _unionKeys(objA, objB) : keys;
    return _getUnequalKeyValues(objA, objB, filteredKeys, function (a, b, key) {
        return deepCompareKeys(a, b, [key]);
    });
}
// Private helpers
// ===============
/**
 * Partial shallow comparison between objects using the given list of keys.
 */
function _shallowCompareKeys(objA, objB, keys) {
    return _filterKeys(objA, objB, keys).every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && objA[key] === objB[key];
    });
}
/**
 * Partial deep comparison between objects using the given list of keys.
 */
function _deepCompareKeys(objA, objB, keys) {
    return keys.every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && deepCompareKeys(objA[key], objB[key]);
    });
}
function _isSimplePrimitiveType(value) {
    return typeof value === "number" || typeof value === "string" || typeof value === "boolean";
}
function _filterKeys(objA, objB, keys) {
    if (_isWhitelist(keys)) {
        return keys.include;
    }
    else {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        // merge keys from both objects into a big set for quick access
        var keySet_1 = _arrayToObject(keysA.concat(keysB));
        // delete blacklisted keys from the key set
        keys.exclude.forEach(function (key) { return delete keySet_1[key]; });
        // return the remaining keys as an array
        return Object.keys(keySet_1);
    }
}
function _isWhitelist(keys) {
    return keys != null && keys.include != null;
}
function _arrayToObject(arr) {
    return arr.reduce(function (obj, element) {
        obj[element] = true;
        return obj;
    }, {});
}
function _getUnequalKeyValues(objA, objB, keys, compareFn) {
    var unequalKeys = keys.filter(function (key) { return !compareFn(objA, objB, key); });
    var unequalKeyValues = unequalKeys.map(function (key) { return ({
        key: key,
        valueA: objA[key],
        valueB: objB[key],
    }); });
    return unequalKeyValues;
}
function _unionKeys(objA, objB) {
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    var concatKeys = keysA.concat(keysB);
    var keySet = _arrayToObject(concatKeys);
    return Object.keys(keySet);
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var Colors = {
    BLACK: "#10161A",
    BLUE1: "#0E5A8A",
    BLUE2: "#106BA3",
    BLUE3: "#137CBD",
    BLUE4: "#2B95D6",
    BLUE5: "#48AFF0",
    COBALT1: "#1F4B99",
    COBALT2: "#2458B3",
    COBALT3: "#2965CC",
    COBALT4: "#4580E6",
    COBALT5: "#669EFF",
    DARK_GRAY1: "#182026",
    DARK_GRAY2: "#202B33",
    DARK_GRAY3: "#293742",
    DARK_GRAY4: "#30404D",
    DARK_GRAY5: "#394B59",
    FOREST1: "#1D7324",
    FOREST2: "#238C2C",
    FOREST3: "#29A634",
    FOREST4: "#43BF4D",
    FOREST5: "#62D96B",
    GOLD1: "#A67908",
    GOLD2: "#BF8C0A",
    GOLD3: "#D99E0B",
    GOLD4: "#F2B824",
    GOLD5: "#FFC940",
    GRAY1: "#5C7080",
    GRAY2: "#738694",
    GRAY3: "#8A9BA8",
    GRAY4: "#A7B6C2",
    GRAY5: "#BFCCD6",
    GREEN1: "#0A6640",
    GREEN2: "#0D8050",
    GREEN3: "#0F9960",
    GREEN4: "#15B371",
    GREEN5: "#3DCC91",
    INDIGO1: "#5642A6",
    INDIGO2: "#634DBF",
    INDIGO3: "#7157D9",
    INDIGO4: "#9179F2",
    INDIGO5: "#AD99FF",
    LIGHT_GRAY1: "#CED9E0",
    LIGHT_GRAY2: "#D8E1E8",
    LIGHT_GRAY3: "#E1E8ED",
    LIGHT_GRAY4: "#EBF1F5",
    LIGHT_GRAY5: "#F5F8FA",
    LIME1: "#728C23",
    LIME2: "#87A629",
    LIME3: "#9BBF30",
    LIME4: "#B6D94C",
    LIME5: "#D1F26D",
    ORANGE1: "#A66321",
    ORANGE2: "#BF7326",
    ORANGE3: "#D9822B",
    ORANGE4: "#F29D49",
    ORANGE5: "#FFB366",
    RED1: "#A82A2A",
    RED2: "#C23030",
    RED3: "#DB3737",
    RED4: "#F55656",
    RED5: "#FF7373",
    ROSE1: "#A82255",
    ROSE2: "#C22762",
    ROSE3: "#DB2C6F",
    ROSE4: "#F5498B",
    ROSE5: "#FF66A1",
    SEPIA1: "#63411E",
    SEPIA2: "#7D5125",
    SEPIA3: "#96622D",
    SEPIA4: "#B07B46",
    SEPIA5: "#C99765",
    TURQUOISE1: "#008075",
    TURQUOISE2: "#00998C",
    TURQUOISE3: "#00B3A4",
    TURQUOISE4: "#14CCBD",
    TURQUOISE5: "#2EE6D6",
    VERMILION1: "#9E2B0E",
    VERMILION2: "#B83211",
    VERMILION3: "#D13913",
    VERMILION4: "#EB532D",
    VERMILION5: "#FF6E4A",
    VIOLET1: "#5C255C",
    VIOLET2: "#752F75",
    VIOLET3: "#8F398F",
    VIOLET4: "#A854A8",
    VIOLET5: "#C274C2",
    WHITE: "#FFFFFF",
};


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconClasses; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */
// tslint:disable:object-literal-sort-keys
var IconClasses = {
    BLANK: "pt-icon-blank",
    STYLE: "pt-icon-style",
    ALIGN_LEFT: "pt-icon-align-left",
    ALIGN_CENTER: "pt-icon-align-center",
    ALIGN_RIGHT: "pt-icon-align-right",
    ALIGN_JUSTIFY: "pt-icon-align-justify",
    BOLD: "pt-icon-bold",
    ITALIC: "pt-icon-italic",
    UNDERLINE: "pt-icon-underline",
    SEARCH_AROUND: "pt-icon-search-around",
    GRAPH_REMOVE: "pt-icon-graph-remove",
    GROUP_OBJECTS: "pt-icon-group-objects",
    MERGE_LINKS: "pt-icon-merge-links",
    LAYOUT: "pt-icon-layout",
    LAYOUT_AUTO: "pt-icon-layout-auto",
    LAYOUT_CIRCLE: "pt-icon-layout-circle",
    LAYOUT_HIERARCHY: "pt-icon-layout-hierarchy",
    LAYOUT_GRID: "pt-icon-layout-grid",
    LAYOUT_GROUP_BY: "pt-icon-layout-group-by",
    LAYOUT_SKEW_GRID: "pt-icon-layout-skew-grid",
    GEOSEARCH: "pt-icon-geosearch",
    HEATMAP: "pt-icon-heatmap",
    DRIVE_TIME: "pt-icon-drive-time",
    SELECT: "pt-icon-select",
    PREDICTIVE_ANALYSIS: "pt-icon-predictive-analysis",
    LAYERS: "pt-icon-layers",
    LOCATE: "pt-icon-locate",
    BOOKMARK: "pt-icon-bookmark",
    CITATION: "pt-icon-citation",
    TAG: "pt-icon-tag",
    CLIPBOARD: "pt-icon-clipboard",
    SELECTION: "pt-icon-selection",
    TIMELINE_EVENTS: "pt-icon-timeline-events",
    TIMELINE_LINE_CHART: "pt-icon-timeline-line-chart",
    TIMELINE_BAR_CHART: "pt-icon-timeline-bar-chart",
    APPLICATIONS: "pt-icon-applications",
    PROJECTS: "pt-icon-projects",
    CHANGES: "pt-icon-changes",
    NOTIFICATIONS: "pt-icon-notifications",
    LOCK: "pt-icon-lock",
    UNLOCK: "pt-icon-unlock",
    USER: "pt-icon-user",
    SEARCH_TEMPLATE: "pt-icon-search-template",
    INBOX: "pt-icon-inbox",
    MORE: "pt-icon-more",
    HELP: "pt-icon-help",
    CALENDAR: "pt-icon-calendar",
    MEDIA: "pt-icon-media",
    LINK: "pt-icon-link",
    SHARE: "pt-icon-share",
    DOWNLOAD: "pt-icon-download",
    DOCUMENT: "pt-icon-document",
    PROPERTIES: "pt-icon-properties",
    IMPORT: "pt-icon-import",
    EXPORT: "pt-icon-export",
    MINIMIZE: "pt-icon-minimize",
    MAXIMIZE: "pt-icon-maximize",
    TICK: "pt-icon-tick",
    CROSS: "pt-icon-cross",
    PLUS: "pt-icon-plus",
    MINUS: "pt-icon-minus",
    ARROW_LEFT: "pt-icon-arrow-left",
    ARROW_RIGHT: "pt-icon-arrow-right",
    EXCHANGE: "pt-icon-exchange",
    COMPARISON: "pt-icon-comparison",
    LIST: "pt-icon-list",
    FILTER: "pt-icon-filter",
    CONFIRM: "pt-icon-confirm",
    FORK: "pt-icon-fork",
    TRASH: "pt-icon-trash",
    PERSON: "pt-icon-person",
    PEOPLE: "pt-icon-people",
    ADD: "pt-icon-add",
    REMOVE: "pt-icon-remove",
    GEOLOCATION: "pt-icon-geolocation",
    ZOOM_IN: "pt-icon-zoom-in",
    ZOOM_OUT: "pt-icon-zoom-out",
    REFRESH: "pt-icon-refresh",
    DELETE: "pt-icon-delete",
    COG: "pt-icon-cog",
    FLAG: "pt-icon-flag",
    PIN: "pt-icon-pin",
    WARNING_SIGN: "pt-icon-warning-sign",
    ERROR: "pt-icon-error",
    INFO_SIGN: "pt-icon-info-sign",
    CREDIT_CARD: "pt-icon-credit-card",
    EDIT: "pt-icon-edit",
    HISTORY: "pt-icon-history",
    SEARCH: "pt-icon-search",
    LOG_OUT: "pt-icon-log-out",
    STAR: "pt-icon-star",
    STAR_EMPTY: "pt-icon-star-empty",
    SORT_ALPHABETICAL: "pt-icon-sort-alphabetical",
    SORT_NUMERICAL: "pt-icon-sort-numerical",
    SORT: "pt-icon-sort",
    FOLDER_OPEN: "pt-icon-folder-open",
    FOLDER_CLOSE: "pt-icon-folder-close",
    FOLDER_SHARED: "pt-icon-folder-shared",
    CARET_UP: "pt-icon-caret-up",
    CARET_RIGHT: "pt-icon-caret-right",
    CARET_DOWN: "pt-icon-caret-down",
    CARET_LEFT: "pt-icon-caret-left",
    MENU_OPEN: "pt-icon-menu-open",
    MENU_CLOSED: "pt-icon-menu-closed",
    FEED: "pt-icon-feed",
    TWO_COLUMNS: "pt-icon-two-columns",
    ONE_COLUMN: "pt-icon-one-column",
    DOT: "pt-icon-dot",
    PROPERTY: "pt-icon-property",
    TIME: "pt-icon-time",
    DISABLE: "pt-icon-disable",
    UNPIN: "pt-icon-unpin",
    FLOWS: "pt-icon-flows",
    NEW_TEXT_BOX: "pt-icon-new-text-box",
    NEW_LINK: "pt-icon-new-link",
    NEW_OBJECT: "pt-icon-new-object",
    PATH_SEARCH: "pt-icon-path-search",
    AUTOMATIC_UPDATES: "pt-icon-automatic-updates",
    PAGE_LAYOUT: "pt-icon-page-layout",
    CODE: "pt-icon-code",
    MAP: "pt-icon-map",
    SEARCH_TEXT: "pt-icon-search-text",
    ENVELOPE: "pt-icon-envelope",
    PAPERCLIP: "pt-icon-paperclip",
    LABEL: "pt-icon-label",
    GLOBE: "pt-icon-globe",
    HOME: "pt-icon-home",
    TH: "pt-icon-th",
    TH_LIST: "pt-icon-th-list",
    TH_DERIVED: "pt-icon-th-derived",
    CIRCLE: "pt-icon-circle",
    DRAW: "pt-icon-draw",
    INSERT: "pt-icon-insert",
    HELPER_MANAGEMENT: "pt-icon-helper-management",
    SEND_TO: "pt-icon-send-to",
    EYE_OPEN: "pt-icon-eye-open",
    FOLDER_SHARED_OPEN: "pt-icon-folder-shared-open",
    SOCIAL_MEDIA: "pt-icon-social-media",
    ARROW_UP: "pt-icon-arrow-up",
    ARROW_DOWN: "pt-icon-arrow-down",
    ARROWS_HORIZONTAL: "pt-icon-arrows-horizontal",
    ARROWS_VERTICAL: "pt-icon-arrows-vertical",
    RESOLVE: "pt-icon-resolve",
    GRAPH: "pt-icon-graph",
    BRIEFCASE: "pt-icon-briefcase",
    DOLLAR: "pt-icon-dollar",
    NINJA: "pt-icon-ninja",
    DELTA: "pt-icon-delta",
    BARCODE: "pt-icon-barcode",
    TORCH: "pt-icon-torch",
    WIDGET: "pt-icon-widget",
    UNRESOLVE: "pt-icon-unresolve",
    OFFLINE: "pt-icon-offline",
    ZOOM_TO_FIT: "pt-icon-zoom-to-fit",
    ADD_TO_ARTIFACT: "pt-icon-add-to-artifact",
    MAP_MARKER: "pt-icon-map-marker",
    CHART: "pt-icon-chart",
    CONTROL: "pt-icon-control",
    MULTI_SELECT: "pt-icon-multi-select",
    DIRECTION_LEFT: "pt-icon-direction-left",
    DIRECTION_RIGHT: "pt-icon-direction-right",
    DATABASE: "pt-icon-database",
    PIE_CHART: "pt-icon-pie-chart",
    FULL_CIRCLE: "pt-icon-full-circle",
    SQUARE: "pt-icon-square",
    PRINT: "pt-icon-print",
    PRESENTATION: "pt-icon-presentation",
    UNGROUP_OBJECTS: "pt-icon-ungroup-objects",
    CHAT: "pt-icon-chat",
    COMMENT: "pt-icon-comment",
    CIRCLE_ARROW_RIGHT: "pt-icon-circle-arrow-right",
    CIRCLE_ARROW_LEFT: "pt-icon-circle-arrow-left",
    CIRCLE_ARROW_UP: "pt-icon-circle-arrow-up",
    CIRCLE_ARROW_DOWN: "pt-icon-circle-arrow-down",
    UPLOAD: "pt-icon-upload",
    ASTERISK: "pt-icon-asterisk",
    CLOUD: "pt-icon-cloud",
    CLOUD_DOWNLOAD: "pt-icon-cloud-download",
    CLOUD_UPLOAD: "pt-icon-cloud-upload",
    REPEAT: "pt-icon-repeat",
    MOVE: "pt-icon-move",
    CHEVRON_LEFT: "pt-icon-chevron-left",
    CHEVRON_RIGHT: "pt-icon-chevron-right",
    CHEVRON_UP: "pt-icon-chevron-up",
    CHEVRON_DOWN: "pt-icon-chevron-down",
    RANDOM: "pt-icon-random",
    FULLSCREEN: "pt-icon-fullscreen",
    LOG_IN: "pt-icon-log-in",
    HEART: "pt-icon-heart",
    OFFICE: "pt-icon-office",
    DUPLICATE: "pt-icon-duplicate",
    BAN_CIRCLE: "pt-icon-ban-circle",
    CAMERA: "pt-icon-camera",
    MOBILE_VIDEO: "pt-icon-mobile-video",
    VIDEO: "pt-icon-video",
    FILM: "pt-icon-film",
    SETTINGS: "pt-icon-settings",
    VOLUME_OFF: "pt-icon-volume-off",
    VOLUME_DOWN: "pt-icon-volume-down",
    VOLUME_UP: "pt-icon-volume-up",
    MUSIC: "pt-icon-music",
    STEP_BACKWARD: "pt-icon-step-backward",
    FAST_BACKWARD: "pt-icon-fast-backward",
    PAUSE: "pt-icon-pause",
    STOP: "pt-icon-stop",
    PLAY: "pt-icon-play",
    FAST_FORWARD: "pt-icon-fast-forward",
    STEP_FORWARD: "pt-icon-step-forward",
    EJECT: "pt-icon-eject",
    RECORD: "pt-icon-record",
    DESKTOP: "pt-icon-desktop",
    PHONE: "pt-icon-phone",
    LIGHTBULB: "pt-icon-lightbulb",
    GLASS: "pt-icon-glass",
    TINT: "pt-icon-tint",
    FLASH: "pt-icon-flash",
    FONT: "pt-icon-font",
    HEADER: "pt-icon-header",
    SAVED: "pt-icon-saved",
    FLOPPY_DISK: "pt-icon-floppy-disk",
    BOOK: "pt-icon-book",
    HAND_RIGHT: "pt-icon-hand-right",
    HAND_UP: "pt-icon-hand-up",
    HAND_DOWN: "pt-icon-hand-down",
    HAND_LEFT: "pt-icon-hand-left",
    THUMBS_UP: "pt-icon-thumbs-up",
    THUMBS_DOWN: "pt-icon-thumbs-down",
    BOX: "pt-icon-box",
    COMPRESSED: "pt-icon-compressed",
    SHOPPING_CART: "pt-icon-shopping-cart",
    SHOP: "pt-icon-shop",
    LAYOUT_LINEAR: "pt-icon-layout-linear",
    UNDO: "pt-icon-undo",
    REDO: "pt-icon-redo",
    CODE_BLOCK: "pt-icon-code-block",
    DOUBLE_CARET_VERTICAL: "pt-icon-double-caret-vertical",
    DOUBLE_CARET_HORIZONTAL: "pt-icon-double-caret-horizontal",
    SORT_ALPHABETICAL_DESC: "pt-icon-sort-alphabetical-desc",
    SORT_NUMERICAL_DESC: "pt-icon-sort-numerical-desc",
    TAKE_ACTION: "pt-icon-take-action",
    CONTRAST: "pt-icon-contrast",
    EYE_OFF: "pt-icon-eye-off",
    TIMELINE_AREA_CHART: "pt-icon-timeline-area-chart",
    DOUGHNUT_CHART: "pt-icon-doughnut-chart",
    LAYER: "pt-icon-layer",
    GRID: "pt-icon-grid",
    POLYGON_FILTER: "pt-icon-polygon-filter",
    ADD_TO_FOLDER: "pt-icon-add-to-folder",
    LAYOUT_BALLOON: "pt-icon-layout-balloon",
    LAYOUT_SORTED_CLUSTERS: "pt-icon-layout-sorted-clusters",
    SORT_ASC: "pt-icon-sort-asc",
    SORT_DESC: "pt-icon-sort-desc",
    SMALL_CROSS: "pt-icon-small-cross",
    SMALL_TICK: "pt-icon-small-tick",
    POWER: "pt-icon-power",
    COLUMN_LAYOUT: "pt-icon-column-layout",
    ARROW_TOP_LEFT: "pt-icon-arrow-top-left",
    ARROW_TOP_RIGHT: "pt-icon-arrow-top-right",
    ARROW_BOTTOM_RIGHT: "pt-icon-arrow-bottom-right",
    ARROW_BOTTOM_LEFT: "pt-icon-arrow-bottom-left",
    MUGSHOT: "pt-icon-mugshot",
    HEADSET: "pt-icon-headset",
    TEXT_HIGHLIGHT: "pt-icon-text-highlight",
    HAND: "pt-icon-hand",
    CHEVRON_BACKWARD: "pt-icon-chevron-backward",
    CHEVRON_FORWARD: "pt-icon-chevron-forward",
    ROTATE_DOCUMENT: "pt-icon-rotate-document",
    ROTATE_PAGE: "pt-icon-rotate-page",
    BADGE: "pt-icon-badge",
    GRID_VIEW: "pt-icon-grid-view",
    FUNCTION: "pt-icon-function",
    WATERFALL_CHART: "pt-icon-waterfall-chart",
    STACKED_CHART: "pt-icon-stacked-chart",
    PULSE: "pt-icon-pulse",
    NEW_PERSON: "pt-icon-new-person",
    EXCLUDE_ROW: "pt-icon-exclude-row",
    PIVOT_TABLE: "pt-icon-pivot-table",
    SEGMENTED_CONTROL: "pt-icon-segmented-control",
    HIGHLIGHT: "pt-icon-highlight",
    FILTER_LIST: "pt-icon-filter-list",
    CUT: "pt-icon-cut",
    ANNOTATION: "pt-icon-annotation",
    PIVOT: "pt-icon-pivot",
    RING: "pt-icon-ring",
    HEAT_GRID: "pt-icon-heat-grid",
    GANTT_CHART: "pt-icon-gantt-chart",
    VARIABLE: "pt-icon-variable",
    MANUAL: "pt-icon-manual",
    ADD_ROW_TOP: "pt-icon-add-row-top",
    ADD_ROW_BOTTOM: "pt-icon-add-row-bottom",
    ADD_COLUMN_LEFT: "pt-icon-add-column-left",
    ADD_COLUMN_RIGHT: "pt-icon-add-column-right",
    REMOVE_ROW_TOP: "pt-icon-remove-row-top",
    REMOVE_ROW_BOTTOM: "pt-icon-remove-row-bottom",
    REMOVE_COLUMN_LEFT: "pt-icon-remove-column-left",
    REMOVE_COLUMN_RIGHT: "pt-icon-remove-column-right",
    DOUBLE_CHEVRON_LEFT: "pt-icon-double-chevron-left",
    DOUBLE_CHEVRON_RIGHT: "pt-icon-double-chevron-right",
    DOUBLE_CHEVRON_UP: "pt-icon-double-chevron-up",
    DOUBLE_CHEVRON_DOWN: "pt-icon-double-chevron-down",
    KEY_CONTROL: "pt-icon-key-control",
    KEY_COMMAND: "pt-icon-key-command",
    KEY_SHIFT: "pt-icon-key-shift",
    KEY_BACKSPACE: "pt-icon-key-backspace",
    KEY_DELETE: "pt-icon-key-delete",
    KEY_ESCAPE: "pt-icon-key-escape",
    KEY_ENTER: "pt-icon-key-enter",
    CALCULATOR: "pt-icon-calculator",
    HORIZONTAL_BAR_CHART: "pt-icon-horizontal-bar-chart",
    SMALL_PLUS: "pt-icon-small-plus",
    SMALL_MINUS: "pt-icon-small-minus",
    STEP_CHART: "pt-icon-step-chart",
    EURO: "pt-icon-euro",
    DRAG_HANDLE_VERTICAL: "pt-icon-drag-handle-vertical",
    DRAG_HANDLE_HORIZONTAL: "pt-icon-drag-handle-horizontal",
    MOBILE_PHONE: "pt-icon-mobile-phone",
    SIM_CARD: "pt-icon-sim-card",
    TRENDING_UP: "pt-icon-trending-up",
    TRENDING_DOWN: "pt-icon-trending-down",
    CURVED_RANGE_CHART: "pt-icon-curved-range-chart",
    VERTICAL_BAR_CHART_DESC: "pt-icon-vertical-bar-chart-desc",
    HORIZONTAL_BAR_CHART_DESC: "pt-icon-horizontal-bar-chart-desc",
    DOCUMENT_OPEN: "pt-icon-document-open",
    DOCUMENT_SHARE: "pt-icon-document-share",
    HORIZONTAL_DISTRIBUTION: "pt-icon-horizontal-distribution",
    VERTICAL_DISTRIBUTION: "pt-icon-vertical-distribution",
    ALIGNMENT_LEFT: "pt-icon-alignment-left",
    ALIGNMENT_VERTICAL_CENTER: "pt-icon-alignment-vertical-center",
    ALIGNMENT_RIGHT: "pt-icon-alignment-right",
    ALIGNMENT_TOP: "pt-icon-alignment-top",
    ALIGNMENT_HORIZONTAL_CENTER: "pt-icon-alignment-horizontal-center",
    ALIGNMENT_BOTTOM: "pt-icon-alignment-bottom",
    GIT_PULL: "pt-icon-git-pull",
    GIT_MERGE: "pt-icon-git-merge",
    GIT_BRANCH: "pt-icon-git-branch",
    GIT_COMMIT: "pt-icon-git-commit",
    GIT_PUSH: "pt-icon-git-push",
    BUILD: "pt-icon-build",
    SYMBOL_CIRCLE: "pt-icon-symbol-circle",
    SYMBOL_SQUARE: "pt-icon-symbol-square",
    SYMBOL_DIAMOND: "pt-icon-symbol-diamond",
    SYMBOL_CROSS: "pt-icon-symbol-cross",
    SYMBOL_TRIANGLE_UP: "pt-icon-symbol-triangle-up",
    SYMBOL_TRIANGLE_DOWN: "pt-icon-symbol-triangle-down",
    WRENCH: "pt-icon-wrench",
    APPLICATION: "pt-icon-application",
    SEND_TO_GRAPH: "pt-icon-send-to-graph",
    SEND_TO_MAP: "pt-icon-send-to-map",
    JOIN_TABLE: "pt-icon-join-table",
    DERIVE_COLUMN: "pt-icon-derive-column",
    IMAGE_ROTATE_LEFT: "pt-icon-image-rotate-left",
    IMAGE_ROTATE_RIGHT: "pt-icon-image-rotate-right",
    KNOWN_VEHICLE: "pt-icon-known-vehicle",
    UNKNOWN_VEHICLE: "pt-icon-unknown-vehicle",
    SCATTER_PLOT: "pt-icon-scatter-plot",
    OIL_FIELD: "pt-icon-oil-field",
    RIG: "pt-icon-rig",
    MAP_CREATE: "pt-icon-map-create",
    KEY_OPTION: "pt-icon-key-option",
    LIST_DETAIL_VIEW: "pt-icon-list-detail-view",
    SWAP_VERTICAL: "pt-icon-swap-vertical",
    SWAP_HORIZONTAL: "pt-icon-swap-horizontal",
    NUMBERED_LIST: "pt-icon-numbered-list",
    NEW_GRID_ITEM: "pt-icon-new-grid-item",
    GIT_REPO: "pt-icon-git-repo",
    GIT_NEW_BRANCH: "pt-icon-git-new-branch",
    MANUALLY_ENTERED_DATA: "pt-icon-manually-entered-data",
    AIRPLANE: "pt-icon-airplane",
    MERGE_COLUMNS: "pt-icon-merge-columns",
    SPLIT_COLUMNS: "pt-icon-split-columns",
    DASHBOARD: "pt-icon-dashboard",
    PUBLISH_FUNCTION: "pt-icon-publish-function",
    PATH: "pt-icon-path",
    MOON: "pt-icon-moon",
    REMOVE_COLUMN: "pt-icon-remove-column",
    NUMERICAL: "pt-icon-numerical",
    KEY_TAB: "pt-icon-key-tab",
    REGRESSION_CHART: "pt-icon-regression-chart",
    TRANSLATE: "pt-icon-translate",
    EYE_ON: "pt-icon-eye-on",
    VERTICAL_BAR_CHART_ASC: "pt-icon-vertical-bar-chart-asc",
    HORIZONTAL_BAR_CHART_ASC: "pt-icon-horizontal-bar-chart-asc",
    GROUPED_BAR_CHART: "pt-icon-grouped-bar-chart",
    FULL_STACKED_CHART: "pt-icon-full-stacked-chart",
    ENDORSED: "pt-icon-endorsed",
    FOLLOWER: "pt-icon-follower",
    FOLLOWING: "pt-icon-following",
    MENU: "pt-icon-menu",
    COLLAPSE_ALL: "pt-icon-collapse-all",
    EXPAND_ALL: "pt-icon-expand-all",
    INTERSECTION: "pt-icon-intersection",
    BLOCKED_PERSON: "pt-icon-blocked-person",
    SLASH: "pt-icon-slash",
    PERCENTAGE: "pt-icon-percentage",
    SATELLITE: "pt-icon-satellite",
    PARAGRAPH: "pt-icon-paragraph",
    BANK_ACCOUNT: "pt-icon-bank-account",
    CELL_TOWER: "pt-icon-cell-tower",
    ID_NUMBER: "pt-icon-id-number",
    IP_ADDRESS: "pt-icon-ip-address",
    ERASER: "pt-icon-eraser",
    ISSUE: "pt-icon-issue",
    ISSUE_NEW: "pt-icon-issue-new",
    ISSUE_CLOSED: "pt-icon-issue-closed",
    PANEL_STATS: "pt-icon-panel-stats",
    PANEL_TABLE: "pt-icon-panel-table",
    TICK_CIRCLE: "pt-icon-tick-circle",
    PRESCRIPTION: "pt-icon-prescription",
    NEW_PRESCRIPTION: "pt-icon-new-prescription",
    FILTER_KEEP: "pt-icon-filter-keep",
    FILTER_REMOVE: "pt-icon-filter-remove",
    KEY: "pt-icon-key",
    FEED_SUBSCRIBED: "pt-icon-feed-subscribed",
    WIDGET_BUTTON: "pt-icon-widget-button",
    WIDGET_HEADER: "pt-icon-widget-header",
    WIDGET_FOOTER: "pt-icon-widget-footer",
    HEADER_ONE: "pt-icon-header-one",
    HEADER_TWO: "pt-icon-header-two",
    FORM: "pt-icon-form",
    SERIES_ADD: "pt-icon-series-add",
    SERIES_SEARCH: "pt-icon-series-search",
    SERIES_FILTERED: "pt-icon-series-filtered",
    SERIES_DERIVED: "pt-icon-series-derived",
    SERIES_CONFIGURATION: "pt-icon-series-configuration",
    CONSOLE: "pt-icon-console",
    COMPASS: "pt-icon-compass",
    WALK: "pt-icon-walk",
    TAXI: "pt-icon-taxi",
    TRAIN: "pt-icon-train",
    HEART_BROKEN: "pt-icon-heart-broken",
    INNER_JOIN: "pt-icon-inner-join",
    LEFT_JOIN: "pt-icon-left-join",
    RIGHT_JOIN: "pt-icon-right-join",
    STRIKETHROUGH: "pt-icon-strikethrough",
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconContents; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */
// tslint:disable:object-literal-sort-keys
var IconContents = {
    BLANK: "\ue900",
    STYLE: "\ue601",
    ALIGN_LEFT: "\ue602",
    ALIGN_CENTER: "\ue603",
    ALIGN_RIGHT: "\ue604",
    ALIGN_JUSTIFY: "\ue605",
    BOLD: "\ue606",
    ITALIC: "\ue607",
    UNDERLINE: "\u2381",
    SEARCH_AROUND: "\ue608",
    GRAPH_REMOVE: "\ue609",
    GROUP_OBJECTS: "\ue60a",
    MERGE_LINKS: "\ue60b",
    LAYOUT: "\ue60c",
    LAYOUT_AUTO: "\ue60d",
    LAYOUT_CIRCLE: "\ue60e",
    LAYOUT_HIERARCHY: "\ue60f",
    LAYOUT_GRID: "\ue610",
    LAYOUT_GROUP_BY: "\ue611",
    LAYOUT_SKEW_GRID: "\ue612",
    GEOSEARCH: "\ue613",
    HEATMAP: "\ue614",
    DRIVE_TIME: "\ue615",
    SELECT: "\ue616",
    PREDICTIVE_ANALYSIS: "\ue617",
    LAYERS: "\ue618",
    LOCATE: "\ue619",
    BOOKMARK: "\ue61a",
    CITATION: "\ue61b",
    TAG: "\ue61c",
    CLIPBOARD: "\ue61d",
    SELECTION: "\u29bf",
    TIMELINE_EVENTS: "\ue61e",
    TIMELINE_LINE_CHART: "\ue61f",
    TIMELINE_BAR_CHART: "\ue620",
    APPLICATIONS: "\ue621",
    PROJECTS: "\ue622",
    CHANGES: "\ue623",
    NOTIFICATIONS: "\ue624",
    LOCK: "\ue625",
    UNLOCK: "\ue626",
    USER: "\ue627",
    SEARCH_TEMPLATE: "\ue628",
    INBOX: "\ue629",
    MORE: "\ue62a",
    HELP: "\u003F",
    CALENDAR: "\ue62b",
    MEDIA: "\ue62c",
    LINK: "\ue62d",
    SHARE: "\ue62e",
    DOWNLOAD: "\ue62f",
    DOCUMENT: "\ue630",
    PROPERTIES: "\ue631",
    IMPORT: "\ue632",
    EXPORT: "\ue633",
    MINIMIZE: "\ue634",
    MAXIMIZE: "\ue635",
    TICK: "\u2713",
    CROSS: "\u2717",
    PLUS: "\u002b",
    MINUS: "\u2212",
    ARROW_LEFT: "\u2190",
    ARROW_RIGHT: "\u2192",
    EXCHANGE: "\ue636",
    COMPARISON: "\ue637",
    LIST: "\u2630",
    FILTER: "\ue638",
    CONFIRM: "\ue639",
    FORK: "\ue63a",
    TRASH: "\ue63b",
    PERSON: "\ue63c",
    PEOPLE: "\ue63d",
    ADD: "\ue63e",
    REMOVE: "\ue63f",
    GEOLOCATION: "\ue640",
    ZOOM_IN: "\ue641",
    ZOOM_OUT: "\ue642",
    REFRESH: "\ue643",
    DELETE: "\ue644",
    COG: "\ue645",
    FLAG: "\u2691",
    PIN: "\ue646",
    WARNING_SIGN: "\ue647",
    ERROR: "\ue648",
    INFO_SIGN: "\u2139",
    CREDIT_CARD: "\ue649",
    EDIT: "\u270E",
    HISTORY: "\ue64a",
    SEARCH: "\ue64b",
    LOG_OUT: "\ue64c",
    STAR: "\u2605",
    STAR_EMPTY: "\u2606",
    SORT_ALPHABETICAL: "\ue64d",
    SORT_NUMERICAL: "\ue64e",
    SORT: "\ue64f",
    FOLDER_OPEN: "\ue651",
    FOLDER_CLOSE: "\ue652",
    FOLDER_SHARED: "\ue653",
    CARET_UP: "\u2303",
    CARET_RIGHT: "\u232A",
    CARET_DOWN: "\u2304",
    CARET_LEFT: "\u2329",
    MENU_OPEN: "\ue654",
    MENU_CLOSED: "\ue655",
    FEED: "\ue656",
    TWO_COLUMNS: "\ue657",
    ONE_COLUMN: "\ue658",
    DOT: "\u2022",
    PROPERTY: "\ue65a",
    TIME: "\u23F2",
    DISABLE: "\ue600",
    UNPIN: "\ue650",
    FLOWS: "\ue659",
    NEW_TEXT_BOX: "\ue65b",
    NEW_LINK: "\ue65c",
    NEW_OBJECT: "\ue65d",
    PATH_SEARCH: "\ue65e",
    AUTOMATIC_UPDATES: "\ue65f",
    PAGE_LAYOUT: "\ue660",
    CODE: "\ue661",
    MAP: "\ue662",
    SEARCH_TEXT: "\ue663",
    ENVELOPE: "\u2709",
    PAPERCLIP: "\ue664",
    LABEL: "\ue665",
    GLOBE: "\ue666",
    HOME: "\u2302",
    TH: "\ue667",
    TH_LIST: "\ue668",
    TH_DERIVED: "\ue669",
    CIRCLE: "\ue66a",
    DRAW: "\ue66b",
    INSERT: "\ue66c",
    HELPER_MANAGEMENT: "\ue66d",
    SEND_TO: "\ue66e",
    EYE_OPEN: "\ue66f",
    FOLDER_SHARED_OPEN: "\ue670",
    SOCIAL_MEDIA: "\ue671",
    ARROW_UP: "\u2191 ",
    ARROW_DOWN: "\u2193 ",
    ARROWS_HORIZONTAL: "\u2194 ",
    ARROWS_VERTICAL: "\u2195 ",
    RESOLVE: "\ue672",
    GRAPH: "\ue673",
    BRIEFCASE: "\ue674",
    DOLLAR: "\u0024",
    NINJA: "\ue675",
    DELTA: "\u0394",
    BARCODE: "\ue676",
    TORCH: "\ue677",
    WIDGET: "\ue678",
    UNRESOLVE: "\ue679",
    OFFLINE: "\ue67a",
    ZOOM_TO_FIT: "\ue67b",
    ADD_TO_ARTIFACT: "\ue67c",
    MAP_MARKER: "\ue67d",
    CHART: "\ue67e",
    CONTROL: "\ue67f",
    MULTI_SELECT: "\ue680",
    DIRECTION_LEFT: "\ue681",
    DIRECTION_RIGHT: "\ue682",
    DATABASE: "\ue683",
    PIE_CHART: "\ue684",
    FULL_CIRCLE: "\ue685",
    SQUARE: "\ue686",
    PRINT: "\u2399",
    PRESENTATION: "\ue687",
    UNGROUP_OBJECTS: "\ue688",
    CHAT: "\ue689",
    COMMENT: "\ue68a",
    CIRCLE_ARROW_RIGHT: "\ue68b",
    CIRCLE_ARROW_LEFT: "\ue68c",
    CIRCLE_ARROW_UP: "\ue68d",
    CIRCLE_ARROW_DOWN: "\ue68e",
    UPLOAD: "\ue68f",
    ASTERISK: "\u002a",
    CLOUD: "\u2601",
    CLOUD_DOWNLOAD: "\ue690",
    CLOUD_UPLOAD: "\ue691",
    REPEAT: "\ue692",
    MOVE: "\ue693",
    CHEVRON_LEFT: "\ue694",
    CHEVRON_RIGHT: "\ue695",
    CHEVRON_UP: "\ue696",
    CHEVRON_DOWN: "\ue697",
    RANDOM: "\ue698",
    FULLSCREEN: "\ue699",
    LOG_IN: "\ue69a",
    HEART: "\u2665",
    OFFICE: "\ue69b",
    DUPLICATE: "\ue69c",
    BAN_CIRCLE: "\ue69d",
    CAMERA: "\ue69e",
    MOBILE_VIDEO: "\ue69f",
    VIDEO: "\ue6a0",
    FILM: "\ue6a1",
    SETTINGS: "\ue6a2",
    VOLUME_OFF: "\ue6a3",
    VOLUME_DOWN: "\ue6a4",
    VOLUME_UP: "\ue6a5",
    MUSIC: "\ue6a6",
    STEP_BACKWARD: "\ue6a7",
    FAST_BACKWARD: "\ue6a8",
    PAUSE: "\ue6a9",
    STOP: "\ue6aa",
    PLAY: "\ue6ab",
    FAST_FORWARD: "\ue6ac",
    STEP_FORWARD: "\ue6ad",
    EJECT: "\u23cf",
    RECORD: "\ue6ae",
    DESKTOP: "\ue6af",
    PHONE: "\u260e",
    LIGHTBULB: "\ue6b0",
    GLASS: "\ue6b1",
    TINT: "\ue6b2",
    FLASH: "\ue6b3",
    FONT: "\ue6b4",
    HEADER: "\ue6b5",
    SAVED: "\ue6b6",
    FLOPPY_DISK: "\ue6b7",
    BOOK: "\ue6b8",
    HAND_RIGHT: "\ue6b9",
    HAND_UP: "\ue6ba",
    HAND_DOWN: "\ue6bb",
    HAND_LEFT: "\ue6bc",
    THUMBS_UP: "\ue6bd",
    THUMBS_DOWN: "\ue6be",
    BOX: "\ue6bf",
    COMPRESSED: "\ue6c0",
    SHOPPING_CART: "\ue6c1",
    SHOP: "\ue6c2",
    LAYOUT_LINEAR: "\ue6c3",
    UNDO: "\u238c",
    REDO: "\ue6c4",
    CODE_BLOCK: "\ue6c5",
    DOUBLE_CARET_VERTICAL: "\ue6c6",
    DOUBLE_CARET_HORIZONTAL: "\ue6c7",
    SORT_ALPHABETICAL_DESC: "\ue6c8",
    SORT_NUMERICAL_DESC: "\ue6c9",
    TAKE_ACTION: "\ue6ca",
    CONTRAST: "\ue6cb",
    EYE_OFF: "\ue6cc",
    TIMELINE_AREA_CHART: "\ue6cd",
    DOUGHNUT_CHART: "\ue6ce",
    LAYER: "\ue6cf",
    GRID: "\ue6d0",
    POLYGON_FILTER: "\ue6d1",
    ADD_TO_FOLDER: "\ue6d2",
    LAYOUT_BALLOON: "\ue6d3",
    LAYOUT_SORTED_CLUSTERS: "\ue6d4",
    SORT_ASC: "\ue6d5",
    SORT_DESC: "\ue6d6",
    SMALL_CROSS: "\ue6d7",
    SMALL_TICK: "\ue6d8",
    POWER: "\ue6d9",
    COLUMN_LAYOUT: "\ue6da",
    ARROW_TOP_LEFT: "\u2196",
    ARROW_TOP_RIGHT: "\u2197",
    ARROW_BOTTOM_RIGHT: "\u2198",
    ARROW_BOTTOM_LEFT: "\u2199",
    MUGSHOT: "\ue6db",
    HEADSET: "\ue6dc",
    TEXT_HIGHLIGHT: "\ue6dd",
    HAND: "\ue6de",
    CHEVRON_BACKWARD: "\ue6df",
    CHEVRON_FORWARD: "\ue6e0",
    ROTATE_DOCUMENT: "\ue6e1",
    ROTATE_PAGE: "\ue6e2",
    BADGE: "\ue6e3",
    GRID_VIEW: "\ue6e4",
    FUNCTION: "\ue6e5",
    WATERFALL_CHART: "\ue6e6",
    STACKED_CHART: "\ue6e7",
    PULSE: "\ue6e8",
    NEW_PERSON: "\ue6e9",
    EXCLUDE_ROW: "\ue6ea",
    PIVOT_TABLE: "\ue6eb",
    SEGMENTED_CONTROL: "\ue6ec",
    HIGHLIGHT: "\ue6ed",
    FILTER_LIST: "\ue6ee",
    CUT: "\ue6ef",
    ANNOTATION: "\ue6f0",
    PIVOT: "\ue6f1",
    RING: "\ue6f2",
    HEAT_GRID: "\ue6f3",
    GANTT_CHART: "\ue6f4",
    VARIABLE: "\ue6f5",
    MANUAL: "\ue6f6",
    ADD_ROW_TOP: "\ue6f7",
    ADD_ROW_BOTTOM: "\ue6f8",
    ADD_COLUMN_LEFT: "\ue6f9",
    ADD_COLUMN_RIGHT: "\ue6fa",
    REMOVE_ROW_TOP: "\ue6fb",
    REMOVE_ROW_BOTTOM: "\ue6fc",
    REMOVE_COLUMN_LEFT: "\ue6fd",
    REMOVE_COLUMN_RIGHT: "\ue6fe",
    DOUBLE_CHEVRON_LEFT: "\ue6ff",
    DOUBLE_CHEVRON_RIGHT: "\ue701",
    DOUBLE_CHEVRON_UP: "\ue702",
    DOUBLE_CHEVRON_DOWN: "\ue703",
    KEY_CONTROL: "\ue704",
    KEY_COMMAND: "\ue705",
    KEY_SHIFT: "\ue706",
    KEY_BACKSPACE: "\ue707",
    KEY_DELETE: "\ue708",
    KEY_ESCAPE: "\ue709",
    KEY_ENTER: "\ue70a",
    CALCULATOR: "\ue70b",
    HORIZONTAL_BAR_CHART: "\ue70c",
    SMALL_PLUS: "\ue70d",
    SMALL_MINUS: "\ue70e",
    STEP_CHART: "\ue70f",
    EURO: "\u20ac",
    DRAG_HANDLE_VERTICAL: "\ue715",
    DRAG_HANDLE_HORIZONTAL: "\ue716",
    MOBILE_PHONE: "\ue717",
    SIM_CARD: "\ue718",
    TRENDING_UP: "\ue719",
    TRENDING_DOWN: "\ue71a",
    CURVED_RANGE_CHART: "\ue71b",
    VERTICAL_BAR_CHART_DESC: "\ue71c",
    HORIZONTAL_BAR_CHART_DESC: "\ue71d",
    DOCUMENT_OPEN: "\ue71e",
    DOCUMENT_SHARE: "\ue71f",
    HORIZONTAL_DISTRIBUTION: "\ue720",
    VERTICAL_DISTRIBUTION: "\ue721",
    ALIGNMENT_LEFT: "\ue722",
    ALIGNMENT_VERTICAL_CENTER: "\ue723",
    ALIGNMENT_RIGHT: "\ue724",
    ALIGNMENT_TOP: "\ue725",
    ALIGNMENT_HORIZONTAL_CENTER: "\ue726",
    ALIGNMENT_BOTTOM: "\ue727",
    GIT_PULL: "\ue728",
    GIT_MERGE: "\ue729",
    GIT_BRANCH: "\ue72a",
    GIT_COMMIT: "\ue72b",
    GIT_PUSH: "\ue72c",
    BUILD: "\ue72d",
    SYMBOL_CIRCLE: "\ue72e",
    SYMBOL_SQUARE: "\ue72f",
    SYMBOL_DIAMOND: "\ue730",
    SYMBOL_CROSS: "\ue731",
    SYMBOL_TRIANGLE_UP: "\ue732",
    SYMBOL_TRIANGLE_DOWN: "\ue733",
    WRENCH: "\ue734",
    APPLICATION: "\ue735",
    SEND_TO_GRAPH: "\ue736",
    SEND_TO_MAP: "\ue737",
    JOIN_TABLE: "\ue738",
    DERIVE_COLUMN: "\ue739",
    IMAGE_ROTATE_LEFT: "\ue73a",
    IMAGE_ROTATE_RIGHT: "\ue73b",
    KNOWN_VEHICLE: "\ue73c",
    UNKNOWN_VEHICLE: "\ue73d",
    SCATTER_PLOT: "\ue73e",
    OIL_FIELD: "\ue73f",
    RIG: "\ue740",
    MAP_CREATE: "\ue741",
    KEY_OPTION: "\ue742",
    LIST_DETAIL_VIEW: "\ue743",
    SWAP_VERTICAL: "\ue744",
    SWAP_HORIZONTAL: "\ue745",
    NUMBERED_LIST: "\ue746",
    NEW_GRID_ITEM: "\ue747",
    GIT_REPO: "\ue748",
    GIT_NEW_BRANCH: "\ue749",
    MANUALLY_ENTERED_DATA: "\ue74a",
    AIRPLANE: "\ue74b",
    MERGE_COLUMNS: "\ue74f",
    SPLIT_COLUMNS: "\ue750",
    DASHBOARD: "\ue751",
    PUBLISH_FUNCTION: "\ue752",
    PATH: "\ue753",
    MOON: "\ue754",
    REMOVE_COLUMN: "\ue755",
    NUMERICAL: "\ue756",
    KEY_TAB: "\ue757",
    REGRESSION_CHART: "\ue758",
    TRANSLATE: "\ue759",
    EYE_ON: "\ue75a",
    VERTICAL_BAR_CHART_ASC: "\ue75b",
    HORIZONTAL_BAR_CHART_ASC: "\ue75c",
    GROUPED_BAR_CHART: "\ue75d",
    FULL_STACKED_CHART: "\ue75e",
    ENDORSED: "\ue75f",
    FOLLOWER: "\ue760",
    FOLLOWING: "\ue761",
    MENU: "\ue762",
    COLLAPSE_ALL: "\ue763",
    EXPAND_ALL: "\ue764",
    INTERSECTION: "\ue765",
    BLOCKED_PERSON: "\ue768",
    SLASH: "\ue769",
    PERCENTAGE: "\ue76a",
    SATELLITE: "\ue76b",
    PARAGRAPH: "\ue76c",
    BANK_ACCOUNT: "\ue76f",
    CELL_TOWER: "\ue770",
    ID_NUMBER: "\ue771",
    IP_ADDRESS: "\ue772",
    ERASER: "\ue773",
    ISSUE: "\ue774",
    ISSUE_NEW: "\ue775",
    ISSUE_CLOSED: "\ue776",
    PANEL_STATS: "\ue777",
    PANEL_TABLE: "\ue778",
    TICK_CIRCLE: "\ue779",
    PRESCRIPTION: "\ue78a",
    NEW_PRESCRIPTION: "\ue78b",
    FILTER_KEEP: "\ue78c",
    FILTER_REMOVE: "\ue78d",
    KEY: "\ue78e",
    FEED_SUBSCRIBED: "\ue78f",
    WIDGET_BUTTON: "\ue790",
    WIDGET_HEADER: "\ue791",
    WIDGET_FOOTER: "\ue792",
    HEADER_ONE: "\ue793",
    HEADER_TWO: "\ue794",
    FORM: "\ue795",
    SERIES_ADD: "\ue796",
    SERIES_SEARCH: "\ue797",
    SERIES_FILTERED: "\ue798",
    SERIES_DERIVED: "\ue799",
    SERIES_CONFIGURATION: "\ue79a",
    CONSOLE: "\ue79b",
    COMPASS: "\ue79c",
    WALK: "\ue79d",
    TAXI: "\ue79e",
    TRAIN: "\ue79f",
    HEART_BROKEN: "\ue7a2",
    INNER_JOIN: "\ue7a3",
    LEFT_JOIN: "\ue7a4",
    RIGHT_JOIN: "\ue7a5",
    STRIKETHROUGH: "\ue7a6",
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/*!
Copyright (C) 2013-2015 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window){'use strict';
  /* jshint loopfunc: true, noempty: false*/
  // http://www.w3.org/TR/dom/#element

  function createDocumentFragment() {
    return document.createDocumentFragment();
  }

  function createElement(nodeName) {
    return document.createElement(nodeName);
  }

  function enoughArguments(length, name) {
    if (!length) throw new Error(
      'Failed to construct ' +
        name +
      ': 1 argument required, but only 0 present.'
    );
  }

  function mutationMacro(nodes) {
    if (nodes.length === 1) {
      return textNodeIfString(nodes[0]);
    }
    for (var
      fragment = createDocumentFragment(),
      list = slice.call(nodes),
      i = 0; i < nodes.length; i++
    ) {
      fragment.appendChild(textNodeIfString(list[i]));
    }
    return fragment;
  }

  function textNodeIfString(node) {
    return typeof node === 'string' ? document.createTextNode(node) : node;
  }

  for(var
    head,
    property,
    TemporaryPrototype,
    TemporaryTokenList,
    wrapVerifyToken,
    document = window.document,
    hOP = Object.prototype.hasOwnProperty,
    defineProperty = Object.defineProperty || function (object, property, descriptor) {
      if (hOP.call(descriptor, 'value')) {
        object[property] = descriptor.value;
      } else {
        if (hOP.call(descriptor, 'get'))
          object.__defineGetter__(property, descriptor.get);
        if (hOP.call(descriptor, 'set'))
          object.__defineSetter__(property, descriptor.set);
      }
      return object;
    },
    indexOf = [].indexOf || function indexOf(value){
      var length = this.length;
      while(length--) {
        if (this[length] === value) {
          break;
        }
      }
      return length;
    },
    // http://www.w3.org/TR/domcore/#domtokenlist
    verifyToken = function (token) {
      if (!token) {
        throw 'SyntaxError';
      } else if (spaces.test(token)) {
        throw 'InvalidCharacterError';
      }
      return token;
    },
    DOMTokenList = function (node) {
      var
        noClassName = typeof node.className === 'undefined',
        className = noClassName ?
          (node.getAttribute('class') || '') : node.className,
        isSVG = noClassName || typeof className === 'object',
        value = (isSVG ?
          (noClassName ? className : className.baseVal) :
          className
        ).replace(trim, '')
      ;
      if (value.length) {
        properties.push.apply(
          this,
          value.split(spaces)
        );
      }
      this._isSVG = isSVG;
      this._ = node;
    },
    classListDescriptor = {
      get: function get() {
        return new DOMTokenList(this);
      },
      set: function(){}
    },
    uid = 'dom4-tmp-'.concat(Math.random() * +new Date()).replace('.','-'),
    trim = /^\s+|\s+$/g,
    spaces = /\s+/,
    SPACE = '\x20',
    CLASS_LIST = 'classList',
    toggle = function toggle(token, force) {
      if (this.contains(token)) {
        if (!force) {
          // force is not true (either false or omitted)
          this.remove(token);
        }
      } else if(force === undefined || force) {
        force = true;
        this.add(token);
      }
      return !!force;
    },
    DocumentFragmentPrototype = window.DocumentFragment && DocumentFragment.prototype,
    Node = window.Node,
    NodePrototype = (Node || Element).prototype,
    CharacterData = window.CharacterData || Node,
    CharacterDataPrototype = CharacterData && CharacterData.prototype,
    DocumentType = window.DocumentType,
    DocumentTypePrototype = DocumentType && DocumentType.prototype,
    ElementPrototype = (window.Element || Node || window.HTMLElement).prototype,
    HTMLSelectElement = window.HTMLSelectElement || createElement('select').constructor,
    selectRemove = HTMLSelectElement.prototype.remove,
    ShadowRoot = window.ShadowRoot,
    SVGElement = window.SVGElement,
    // normalizes multiple ids as CSS query
    idSpaceFinder = / /g,
    idSpaceReplacer = '\\ ',
    createQueryMethod = function (methodName) {
      var createArray = methodName === 'querySelectorAll';
      return function (css) {
        var a, i, id, query, nl, selectors, node = this.parentNode;
        if (node) {
          for (
            id = this.getAttribute('id') || uid,
            query = id === uid ? id : id.replace(idSpaceFinder, idSpaceReplacer),
            selectors = css.split(','),
            i = 0; i < selectors.length; i++
          ) {
            selectors[i] = '#' + query + ' ' + selectors[i];
          }
          css = selectors.join(',');
        }
        if (id === uid) this.setAttribute('id', id);
        nl = (node || this)[methodName](css);
        if (id === uid) this.removeAttribute('id');
        // return a list
        if (createArray) {
          i = nl.length;
          a = new Array(i);
          while (i--) a[i] = nl[i];
        }
        // return node or null
        else {
          a = nl;
        }
        return a;
      };
    },
    addQueryAndAll = function (where) {
      if (!('query' in where)) {
        where.query = ElementPrototype.query;
      }
      if (!('queryAll' in where)) {
        where.queryAll = ElementPrototype.queryAll;
      }
    },
    properties = [
      'matches', (
        ElementPrototype.matchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        ElementPrototype.khtmlMatchesSelector ||
        ElementPrototype.mozMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        ElementPrototype.oMatchesSelector ||
        function matches(selector) {
          var parentNode = this.parentNode;
          return !!parentNode && -1 < indexOf.call(
            parentNode.querySelectorAll(selector),
            this
          );
        }
      ),
      'closest', function closest(selector) {
        var parentNode = this, matches;
        while (
          // document has no .matches
          (matches = parentNode && parentNode.matches) &&
          !parentNode.matches(selector)
        ) {
          parentNode = parentNode.parentNode;
        }
        return matches ? parentNode : null;
      },
      'prepend', function prepend() {
        var firstChild = this.firstChild,
            node = mutationMacro(arguments);
        if (firstChild) {
          this.insertBefore(node, firstChild);
        } else {
          this.appendChild(node);
        }
      },
      'append', function append() {
        this.appendChild(mutationMacro(arguments));
      },
      'before', function before() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.insertBefore(
            mutationMacro(arguments), this
          );
        }
      },
      'after', function after() {
        var parentNode = this.parentNode,
            nextSibling = this.nextSibling,
            node = mutationMacro(arguments);
        if (parentNode) {
          if (nextSibling) {
            parentNode.insertBefore(node, nextSibling);
          } else {
            parentNode.appendChild(node);
          }
        }
      },
      // WARNING - DEPRECATED - use .replaceWith() instead
      'replace', function replace() {
        this.replaceWith.apply(this, arguments);
      },
      'replaceWith', function replaceWith() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.replaceChild(
            mutationMacro(arguments),
            this
          );
        }
      },
      'remove', function remove() {
        var parentNode = this.parentNode;
        if (parentNode) {
          parentNode.removeChild(this);
        }
      },
      'query', createQueryMethod('querySelector'),
      'queryAll', createQueryMethod('querySelectorAll')
    ],
    slice = properties.slice,
    i = properties.length; i; i -= 2
  ) {
    property = properties[i - 2];
    if (!(property in ElementPrototype)) {
      ElementPrototype[property] = properties[i - 1];
    }
    if (property === 'remove') {
      // see https://github.com/WebReflection/dom4/issues/19
      HTMLSelectElement.prototype[property] = function () {
        return 0 < arguments.length ?
          selectRemove.apply(this, arguments) :
          ElementPrototype.remove.call(this);
      };
    }
    // see https://github.com/WebReflection/dom4/issues/18
    if (/^(?:before|after|replace|replaceWith|remove)$/.test(property)) {
      if (CharacterData && !(property in CharacterDataPrototype)) {
        CharacterDataPrototype[property] = properties[i - 1];
      }
      if (DocumentType && !(property in DocumentTypePrototype)) {
        DocumentTypePrototype[property] = properties[i - 1];
      }
    }
    // see https://github.com/WebReflection/dom4/pull/26
    if (/^(?:append|prepend)$/.test(property)) {
      if (DocumentFragmentPrototype) {
        if (!(property in DocumentFragmentPrototype)) {
          DocumentFragmentPrototype[property] = properties[i - 1];
        }
      } else {
        try {
          createDocumentFragment().constructor.prototype[property] = properties[i - 1];
        } catch(o_O) {}
      }
    }
  }

  // bring query and queryAll to the document too
  addQueryAndAll(document);

  // brings query and queryAll to fragments as well
  if (DocumentFragmentPrototype) {
    addQueryAndAll(DocumentFragmentPrototype);
  } else {
    try {
      addQueryAndAll(createDocumentFragment().constructor.prototype);
    } catch(o_O) {}
  }

  // bring query and queryAll to the ShadowRoot too
  if (ShadowRoot) {
    addQueryAndAll(ShadowRoot.prototype);
  }

  // most likely an IE9 only issue
  // see https://github.com/WebReflection/dom4/issues/6
  if (!createElement('a').matches('a')) {
    ElementPrototype[property] = function(matches){
      return function (selector) {
        return matches.call(
          this.parentNode ?
            this :
            createDocumentFragment().appendChild(this),
          selector
        );
      };
    }(ElementPrototype[property]);
  }

  // used to fix both old webkit and SVG
  DOMTokenList.prototype = {
    length: 0,
    add: function add() {
      for(var j = 0, token; j < arguments.length; j++) {
        token = arguments[j];
        if(!this.contains(token)) {
          properties.push.call(this, property);
        }
      }
      if (this._isSVG) {
        this._.setAttribute('class', '' + this);
      } else {
        this._.className = '' + this;
      }
    },
    contains: (function(indexOf){
      return function contains(token) {
        i = indexOf.call(this, property = verifyToken(token));
        return -1 < i;
      };
    }([].indexOf || function (token) {
      i = this.length;
      while(i-- && this[i] !== token){}
      return i;
    })),
    item: function item(i) {
      return this[i] || null;
    },
    remove: function remove() {
      for(var j = 0, token; j < arguments.length; j++) {
        token = arguments[j];
        if(this.contains(token)) {
          properties.splice.call(this, i, 1);
        }
      }
      if (this._isSVG) {
        this._.setAttribute('class', '' + this);
      } else {
        this._.className = '' + this;
      }
    },
    toggle: toggle,
    toString: function toString() {
      return properties.join.call(this, SPACE);
    }
  };

  if (SVGElement && !(CLASS_LIST in SVGElement.prototype)) {
    defineProperty(SVGElement.prototype, CLASS_LIST, classListDescriptor);
  }

  // http://www.w3.org/TR/dom/#domtokenlist
  // iOS 5.1 has completely screwed this property
  // classList in ElementPrototype is false
  // but it's actually there as getter
  if (!(CLASS_LIST in document.documentElement)) {
    defineProperty(ElementPrototype, CLASS_LIST, classListDescriptor);
  } else {
    // iOS 5.1 and Nokia ASHA do not support multiple add or remove
    // trying to detect and fix that in here
    TemporaryTokenList = createElement('div')[CLASS_LIST];
    TemporaryTokenList.add('a', 'b', 'a');
    if ('a\x20b' != TemporaryTokenList) {
      // no other way to reach original methods in iOS 5.1
      TemporaryPrototype = TemporaryTokenList.constructor.prototype;
      if (!('add' in TemporaryPrototype)) {
        // ASHA double fails in here
        TemporaryPrototype = window.TemporaryTokenList.prototype;
      }
      wrapVerifyToken = function (original) {
        return function () {
          var i = 0;
          while (i < arguments.length) {
            original.call(this, arguments[i++]);
          }
        };
      };
      TemporaryPrototype.add = wrapVerifyToken(TemporaryPrototype.add);
      TemporaryPrototype.remove = wrapVerifyToken(TemporaryPrototype.remove);
      // toggle is broken too ^_^ ... let's fix it
      TemporaryPrototype.toggle = toggle;
    }
  }

  if (!('contains' in NodePrototype)) {
    defineProperty(NodePrototype, 'contains', {
      value: function (el) {
        while (el && el !== this) el = el.parentNode;
        return this === el;
      }
    });
  }

  if (!('head' in document)) {
    defineProperty(document, 'head', {
      get: function () {
        return head || (
          head = document.getElementsByTagName('head')[0]
        );
      }
    });
  }

  // requestAnimationFrame partial polyfill
  (function () {
    for (var
      raf,
      rAF = window.requestAnimationFrame,
      cAF = window.cancelAnimationFrame,
      prefixes = ['o', 'ms', 'moz', 'webkit'],
      i = prefixes.length;
      !cAF && i--;
    ) {
      rAF = rAF || window[prefixes[i] + 'RequestAnimationFrame'];
      cAF = window[prefixes[i] + 'CancelAnimationFrame'] ||
            window[prefixes[i] + 'CancelRequestAnimationFrame'];
    }
    if (!cAF) {
      // some FF apparently implemented rAF but no cAF 
      if (rAF) {
        raf = rAF;
        rAF = function (callback) {
          var goOn = true;
          raf(function () {
            if (goOn) callback.apply(this, arguments);
          });
          return function () {
            goOn = false;
          };
        };
        cAF = function (id) {
          id();
        };
      } else {
        rAF = function (callback) {
          return setTimeout(callback, 15, 15);
        };
        cAF = function (id) {
          clearTimeout(id);
        };
      }
    }
    window.requestAnimationFrame = rAF;
    window.cancelAnimationFrame = cAF;
  }());

  // http://www.w3.org/TR/dom/#customevent
  try{new window.CustomEvent('?');}catch(o_O){
    window.CustomEvent = function(
      eventName,
      defaultInitDict
    ){

      // the infamous substitute
      function CustomEvent(type, eventInitDict) {
        /*jshint eqnull:true */
        var event = document.createEvent(eventName);
        if (typeof type != 'string') {
          throw new Error('An event name must be provided');
        }
        if (eventName == 'Event') {
          event.initCustomEvent = initCustomEvent;
        }
        if (eventInitDict == null) {
          eventInitDict = defaultInitDict;
        }
        event.initCustomEvent(
          type,
          eventInitDict.bubbles,
          eventInitDict.cancelable,
          eventInitDict.detail
        );
        return event;
      }

      // attached at runtime
      function initCustomEvent(
        type, bubbles, cancelable, detail
      ) {
        /*jshint validthis:true*/
        this.initEvent(type, bubbles, cancelable);
        this.detail = detail;
      }

      // that's it
      return CustomEvent;
    }(
      // is this IE9 or IE10 ?
      // where CustomEvent is there
      // but not usable as construtor ?
      window.CustomEvent ?
        // use the CustomEvent interface in such case
        'CustomEvent' : 'Event',
        // otherwise the common compatible one
      {
        bubbles: false,
        cancelable: false,
        detail: null
      }
    );
  }

  // window.Event as constructor
  try { new Event('_'); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($Event) {
      function Event(type, init) {
        enoughArguments(arguments.length, 'Event');
        var out = document.createEvent('Event');
        if (!init) init = {};
        out.initEvent(
          type,
          !!init.bubbles,
          !!init.cancelable
        );
        return out;
      }
      Event.prototype = $Event.prototype;
      return Event;
    }(window.Event || function Event() {}));
    defineProperty(window, 'Event', {value: o_O});
    // Android 4 gotcha
    if (Event !== o_O) Event = o_O;
  }

  // window.KeyboardEvent as constructor
  try { new KeyboardEvent('_', {}); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($KeyboardEvent) {
      // code inspired by https://gist.github.com/termi/4654819
      var
        initType = 0,
        defaults = {
          char: '',
          key: '',
          location: 0,
          ctrlKey: false,
          shiftKey: false,
          altKey: false,
          metaKey: false,
          altGraphKey: false,
          repeat: false,
          locale: navigator.language,
          detail: 0,
          bubbles: false,
          cancelable: false,
          keyCode: 0,
          charCode: 0,
          which: 0
        },
        eventType
      ;
      try {
        var e = document.createEvent('KeyboardEvent');
        e.initKeyboardEvent(
          'keyup', false, false, window, '+', 3,
          true, false, true, false, false
        );
        initType = (
          (e.keyIdentifier || e.key) == '+' &&
          (e.keyLocation || e.location) == 3
        ) && (
          e.ctrlKey ? e.altKey ? 1 : 3 : e.shiftKey ? 2 : 4
        ) || 9;
      } catch(o_O) {}
      eventType = 0 < initType ? 'KeyboardEvent' : 'Event';

      function getModifier(init) {
        for (var
          out = [],
          keys = [
            'ctrlKey',
            'Control',
            'shiftKey',
            'Shift',
            'altKey',
            'Alt',
            'metaKey',
            'Meta',
            'altGraphKey',
            'AltGraph'
          ],
          i = 0; i < keys.length; i += 2
        ) {
          if (init[keys[i]])
            out.push(keys[i + 1]);
        }
        return out.join(' ');
      }

      function withDefaults(target, source) {
        for (var key in source) {
          if (
            source.hasOwnProperty(key) &&
            !source.hasOwnProperty.call(target, key)
          ) target[key] = source[key];
        }
        return target;
      }

      function withInitValues(key, out, init) {
        try {
          out[key] = init[key];
        } catch(o_O) {}
      }

      function KeyboardEvent(type, init) {
        enoughArguments(arguments.length, 'KeyboardEvent');
        init = withDefaults(init || {}, defaults);
        var
          out = document.createEvent(eventType),
          ctrlKey = init.ctrlKey,
          shiftKey = init.shiftKey,
          altKey = init.altKey,
          metaKey = init.metaKey,
          altGraphKey = init.altGraphKey,
          modifiers = initType > 3 ? getModifier(init) : null,
          key = String(init.key),
          chr = String(init.char),
          location = init.location,
          keyCode = init.keyCode || (
            (init.keyCode = key) &&
            key.charCodeAt(0)
          ) || 0,
          charCode = init.charCode || (
            (init.charCode = chr) &&
            chr.charCodeAt(0)
          ) || 0,
          bubbles = init.bubbles,
          cancelable = init.cancelable,
          repeat = init.repeat,
          locale = init.locale,
          view = init.view || window,
          args
        ;
        if (!init.which) init.which = init.keyCode;
        if ('initKeyEvent' in out) {
          out.initKeyEvent(
            type, bubbles, cancelable, view,
            ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode
          );
        } else if (0 < initType && 'initKeyboardEvent' in out) {
          args = [type, bubbles, cancelable, view];
          switch (initType) {
            case 1:
              args.push(key, location, ctrlKey, shiftKey, altKey, metaKey, altGraphKey);
              break;
            case 2:
              args.push(ctrlKey, altKey, shiftKey, metaKey, keyCode, charCode);
              break;
            case 3:
              args.push(key, location, ctrlKey, altKey, shiftKey, metaKey, altGraphKey);
              break;
            case 4:
              args.push(key, location, modifiers, repeat, locale);
              break;
            default:
              args.push(char, key, location, modifiers, repeat, locale);
          }
          out.initKeyboardEvent.apply(out, args);
        } else {
          out.initEvent(type, bubbles, cancelable);
        }
        for (key in out) {
          if (defaults.hasOwnProperty(key) && out[key] !== init[key]) {
            withInitValues(key, out, init);
          }
        }
        return out;
      }
      KeyboardEvent.prototype = $KeyboardEvent.prototype;
      return KeyboardEvent;
    }(window.KeyboardEvent || function KeyboardEvent() {}));
    defineProperty(window, 'KeyboardEvent', {value: o_O});
    // Android 4 gotcha
    if (KeyboardEvent !== o_O) KeyboardEvent = o_O;
  }

  // window.MouseEvent as constructor
  try { new MouseEvent('_', {}); } catch (o_O) {
    /* jshint -W022 */
    o_O = (function ($MouseEvent) {
      function MouseEvent(type, init) {
        enoughArguments(arguments.length, 'MouseEvent');
        var out = document.createEvent('MouseEvent');
        if (!init) init = {};
        out.initMouseEvent(
          type,
          !!init.bubbles,
          !!init.cancelable,
          init.view || window,
          init.detail || 1,
          init.screenX || 0,
          init.screenY || 0,
          init.clientX || 0,
          init.clientY || 0,
          !!init.ctrlKey,
          !!init.altKey,
          !!init.shiftKey,
          !!init.metaKey,
          init.button || 0,
          init.relatedTarget || null
        );
        return out;
      }
      MouseEvent.prototype = $MouseEvent.prototype;
      return MouseEvent;
    }(window.MouseEvent || function MouseEvent() {}));
    defineProperty(window, 'MouseEvent', {value: o_O});
    // Android 4 gotcha
    if (MouseEvent !== o_O) MouseEvent = o_O;
  }

}(window));(function (global){'use strict';

  // a WeakMap fallback for DOM nodes only used as key
  var DOMMap = global.WeakMap || (function () {

    var
      counter = 0,
      dispatched = false,
      drop = false,
      value
    ;

    function dispatch(key, ce, shouldDrop) {
      drop = shouldDrop;
      dispatched = false;
      value = undefined;
      key.dispatchEvent(ce);
    }

    function Handler(value) {
      this.value = value;
    }

    Handler.prototype.handleEvent = function handleEvent(e) {
      dispatched = true;
      if (drop) {
        e.currentTarget.removeEventListener(e.type, this, false);
      } else {
        value = this.value;
      }
    };

    function DOMMap() {
      counter++;  // make id clashing highly improbable
      this.__ce__ = new Event(('@DOMMap:' + counter) + Math.random());
    }

    DOMMap.prototype = {
      'constructor': DOMMap,
      'delete': function del(key) {
        return dispatch(key, this.__ce__, true), dispatched;
      },
      'get': function get(key) {
        dispatch(key, this.__ce__, false);
        var v = value;
        value = undefined;
        return v;
      },
      'has': function has(key) {
        return dispatch(key, this.__ce__, false), dispatched;
      },
      'set': function set(key, value) {
        dispatch(key, this.__ce__, true);
        key.addEventListener(this.__ce__.type, new Handler(value), false);
        return this;
      },
    };

    return DOMMap;

  }());

  function Dict() {}
  Dict.prototype = (Object.create || Object)(null);

  // https://dom.spec.whatwg.org/#interface-eventtarget

  function createEventListener(type, callback, options) {
    function eventListener(e) {
      if (eventListener.once) {
        e.currentTarget.removeEventListener(
          e.type,
          callback,
          eventListener
        );
        eventListener.removed = true;
      }
      if (eventListener.passive) {
        e.preventDefault = createEventListener.preventDefault;
      }
      if (typeof eventListener.callback === 'function') {
        /* jshint validthis: true */
        eventListener.callback.call(this, e);
      } else if (eventListener.callback) {
        eventListener.callback.handleEvent(e);
      }
      if (eventListener.passive) {
        delete e.preventDefault;
      }
    }
    eventListener.type = type;
    eventListener.callback = callback;
    eventListener.capture = !!options.capture;
    eventListener.passive = !!options.passive;
    eventListener.once = !!options.once;
    // currently pointless but specs say to use it, so ...
    eventListener.removed = false;
    return eventListener;
  }

  createEventListener.preventDefault = function preventDefault() {};

  var
    Event = global.CustomEvent,
    hOP = Object.prototype.hasOwnProperty,
    dE = global.dispatchEvent,
    aEL = global.addEventListener,
    rEL = global.removeEventListener,
    counter = 0,
    increment = function () { counter++; },
    indexOf = [].indexOf || function indexOf(value){
      var length = this.length;
      while(length--) {
        if (this[length] === value) {
          break;
        }
      }
      return length;
    },
    getListenerKey = function (options) {
      return ''.concat(
        options.capture ? '1' : '0',
        options.passive ? '1' : '0',
        options.once ? '1' : '0'
      );
    },
    augment, proto
  ;

  try {
    aEL('_', increment, {once: true});
    dE(new Event('_'));
    dE(new Event('_'));
    rEL('_', increment, {once: true});
  } catch(o_O) {}

  if (counter !== 1) {
    (function () {
      var dm = new DOMMap();
      function createAEL(aEL) {
        return function addEventListener(type, handler, options) {
          if (options && typeof options !== 'boolean') {
            var
              info = dm.get(this),
              key = getListenerKey(options),
              i, tmp, wrap
            ;
            if (!info) dm.set(this, (info = new Dict()));
            if (!(type in info)) info[type] = {
              handler: [],
              wrap: []
            };
            tmp = info[type];
            i = indexOf.call(tmp.handler, handler);
            if (i < 0) {
              i = tmp.handler.push(handler) - 1;
              tmp.wrap[i] = (wrap = new Dict());
            } else {
              wrap = tmp.wrap[i];
            }
            if (!(key in wrap)) {
              wrap[key] = createEventListener(type, handler, options);
              aEL.call(this, type, wrap[key], wrap[key].capture);
            }
          } else {
            aEL.call(this, type, handler, options);
          }
        };
      }
      function createREL(rEL) {
        return function removeEventListener(type, handler, options) {
          if (options && typeof options !== 'boolean') {
            var
              info = dm.get(this),
              key, i, tmp, wrap
            ;
            if (info && (type in info)) {
              tmp = info[type];
              i = indexOf.call(tmp.handler, handler);
              if (-1 < i) {
                key = getListenerKey(options);
                wrap = tmp.wrap[i];
                if (key in wrap) {
                  rEL.call(this, type, wrap[key], wrap[key].capture);
                  delete wrap[key];
                  // return if there are other wraps
                  for (key in wrap) return;
                  // otherwise remove all the things
                  tmp.handler.splice(i, 1);
                  tmp.wrap.splice(i, 1);
                  // if there are no other handlers
                  if (tmp.handler.length === 0)
                    // drop the info[type] entirely
                    delete info[type];
                }
              }
            }
          } else {
            rEL.call(this, type, handler, options);
          }
        };
      }

      augment = function (Constructor) {
        if (!Constructor) return;
        var proto = Constructor.prototype;
        proto.addEventListener = createAEL(proto.addEventListener);
        proto.removeEventListener = createREL(proto.removeEventListener);
      };

      if (global.EventTarget) {
        augment(EventTarget);
      } else {
        augment(global.Text);
        augment(global.Element || global.HTMLElement);
        augment(global.HTMLDocument);
        augment(global.Window || {prototype:global});
        augment(global.XMLHttpRequest);
      }

    }());
  }

}(self));

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.3 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



module.exports = __webpack_require__(69);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(74);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(78);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(21);
var invariant = __webpack_require__(22);
var warning = __webpack_require__(20);
var assign = __webpack_require__(71);

var ReactPropTypesSecret = __webpack_require__(23);
var checkPropTypes = __webpack_require__(72);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(22);
  var warning = __webpack_require__(20);
  var ReactPropTypesSecret = __webpack_require__(23);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(21);
var invariant = __webpack_require__(22);
var ReactPropTypesSecret = __webpack_require__(23);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(75);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(76);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(79);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(81);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(82);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(83);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(9);

var _PropTypes = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(80);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(34);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(34);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MIN_ARROW_SPACING */
/* unused harmony export computeArrowOffset */
/* harmony export (immutable) */ __webpack_exports__["b"] = getPopoverTransformOrigin;
/* harmony export (immutable) */ __webpack_exports__["a"] = getArrowPositionStyles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_position__ = __webpack_require__(11);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

// this value causes popover and target edges to line up on 50px targets
var MIN_ARROW_SPACING = 18;
function computeArrowOffset(sideLength, arrowSize, minimum) {
    if (minimum === void 0) { minimum = MIN_ARROW_SPACING; }
    return Math.max(Math.round((sideLength - arrowSize) / 2), minimum);
}
function getPopoverTransformOrigin(position, arrowSize, targetDimensions) {
    var offsetX = computeArrowOffset(targetDimensions.width, arrowSize);
    var offsetY = computeArrowOffset(targetDimensions.height, arrowSize);
    switch (position) {
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].TOP_LEFT:
            return offsetX + "px bottom";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].TOP_RIGHT:
            return "calc(100% - " + offsetX + "px) bottom";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].BOTTOM_LEFT:
            return offsetX + "px top";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].BOTTOM_RIGHT:
            return "calc(100% - " + offsetX + "px) top";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].LEFT_TOP:
            return "right " + offsetY + "px";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].LEFT_BOTTOM:
            return "right calc(100% - " + offsetY + "px)";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].RIGHT_TOP:
            return "left " + offsetY + "px";
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].RIGHT_BOTTOM:
            return "left calc(100% - " + offsetY + "px)";
        default:
            return undefined;
    }
}
function getArrowPositionStyles(position, arrowSize, ignoreTargetDimensions, targetDimensions, inline) {
    // compute the offset to center an arrow with given hypotenuse in a side of the given length
    var popoverOffset = function (sideLength) {
        var offset = computeArrowOffset(sideLength, arrowSize, 0);
        return offset < MIN_ARROW_SPACING ? MIN_ARROW_SPACING - offset : 0;
    };
    var popoverOffsetX = popoverOffset(targetDimensions.width);
    var popoverOffsetY = popoverOffset(targetDimensions.height);
    // TOP, RIGHT, BOTTOM, LEFT are handled purely in CSS because of centering transforms
    switch (position) {
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].TOP_LEFT:
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].BOTTOM_LEFT:
            return {
                arrow: ignoreTargetDimensions ? {} : { left: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: -popoverOffsetX },
            };
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].TOP_RIGHT:
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].BOTTOM_RIGHT:
            return {
                arrow: ignoreTargetDimensions ? {} : { right: computeArrowOffset(targetDimensions.width, arrowSize) },
                container: { marginLeft: popoverOffsetX },
            };
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].RIGHT_TOP:
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].LEFT_TOP:
            return {
                arrow: ignoreTargetDimensions ? {} : { top: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { top: -popoverOffsetY } : { marginTop: -popoverOffsetY },
            };
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].RIGHT_BOTTOM:
        case __WEBPACK_IMPORTED_MODULE_0__common_position__["a" /* Position */].LEFT_BOTTOM:
            return {
                arrow: ignoreTargetDimensions ? {} : { bottom: computeArrowOffset(targetDimensions.height, arrowSize) },
                container: inline ? { bottom: -popoverOffsetY } : { marginTop: popoverOffsetY },
            };
        default:
            return {};
    }
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icon_icon__ = __webpack_require__(13);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var Alert = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alert.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, iconName = _a.iconName, intent = _a.intent, isOpen = _a.isOpen, confirmButtonText = _a.confirmButtonText, onConfirm = _a.onConfirm, style = _a.style;
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__dialog_dialog__["a" /* Dialog */], { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common__["b" /* Classes */].ALERT, className), isOpen: isOpen, style: style },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3__common__["b" /* Classes */].ALERT_BODY },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__icon_icon__["a" /* Icon */], { iconName: iconName, iconSize: "inherit", intent: __WEBPACK_IMPORTED_MODULE_3__common__["f" /* Intent */].DANGER }),
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3__common__["b" /* Classes */].ALERT_CONTENTS }, children)),
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3__common__["b" /* Classes */].ALERT_FOOTER },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__button_buttons__["c" /* Button */], { intent: intent, text: confirmButtonText, onClick: onConfirm }),
                this.maybeRenderSecondaryAction())));
    };
    Alert.prototype.validateProps = function (props) {
        if ((props.cancelButtonText != null && props.onCancel == null) ||
            (props.cancelButtonText == null && props.onCancel != null)) {
            console.warn(__WEBPACK_IMPORTED_MODULE_4__common_errors__["a" /* ALERT_WARN_CANCEL_PROPS */]);
        }
    };
    Alert.prototype.maybeRenderSecondaryAction = function () {
        if (this.props.cancelButtonText != null) {
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__button_buttons__["c" /* Button */], { text: this.props.cancelButtonText, onClick: this.props.onCancel });
        }
        return undefined;
    };
    Alert.defaultProps = {
        confirmButtonText: "OK",
        isOpen: false,
        onConfirm: null,
    };
    Alert.displayName = "Blueprint.Alert";
    return Alert;
}(__WEBPACK_IMPORTED_MODULE_3__common__["a" /* AbstractComponent */]));



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icon_icon__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spinner_spinner__ = __webpack_require__(25);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var AbstractButton = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AbstractButton, _super);
    function AbstractButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.refHandlers = {
            button: function (ref) {
                _this.buttonRef = ref;
                Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["safeInvoke"])(_this.props.elementRef, ref);
            },
        };
        _this.currentKeyDown = null;
        // we're casting as `any` to get around a somewhat opaque safeInvoke error
        // that "Type argument candidate 'KeyboardEvent<T>' is not a valid type
        // argument because it is not a supertype of candidate
        // 'KeyboardEvent<HTMLElement>'."
        _this.handleKeyDown = function (e) {
            if (isKeyboardClick(e.which)) {
                e.preventDefault();
                if (e.which !== _this.currentKeyDown) {
                    _this.setState({ isActive: true });
                }
            }
            _this.currentKeyDown = e.which;
            Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["safeInvoke"])(_this.props.onKeyDown, e);
        };
        _this.handleKeyUp = function (e) {
            if (isKeyboardClick(e.which)) {
                _this.setState({ isActive: false });
                _this.buttonRef.click();
            }
            _this.currentKeyDown = null;
            Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["safeInvoke"])(_this.props.onKeyUp, e);
        };
        return _this;
    }
    AbstractButton.prototype.getCommonButtonProps = function () {
        var disabled = this.props.disabled || this.props.loading;
        var className = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["BUTTON"], (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_3__common_classes__["ACTIVE"]] = this.state.isActive || this.props.active,
            _a[__WEBPACK_IMPORTED_MODULE_3__common_classes__["DISABLED"]] = disabled,
            _a[__WEBPACK_IMPORTED_MODULE_3__common_classes__["LOADING"]] = this.props.loading,
            _a), __WEBPACK_IMPORTED_MODULE_3__common_classes__["iconClass"](this.props.iconName), __WEBPACK_IMPORTED_MODULE_3__common_classes__["intentClass"](this.props.intent), this.props.className);
        return {
            className: className,
            disabled: disabled,
            onClick: disabled ? undefined : this.props.onClick,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            ref: this.refHandlers.button,
        };
        var _a;
    };
    AbstractButton.prototype.renderChildren = function () {
        var _a = this.props, loading = _a.loading, rightIconName = _a.rightIconName, text = _a.text;
        var children = __WEBPACK_IMPORTED_MODULE_2_react__["Children"].map(this.props.children, function (child, index) {
            if (child === "") {
                // render as undefined to avoid extra space after icon
                return undefined;
            }
            else if (typeof child === "string") {
                // must wrap string children in spans so loading prop can hide them
                return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { key: "text-" + index }, child);
            }
            return child;
        });
        return [
            loading ? __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__spinner_spinner__["a" /* Spinner */], { className: "pt-small pt-button-spinner", key: "spinner" }) : undefined,
            text != null ? __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("span", { key: "text" }, text) : undefined
        ].concat(children, [
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__icon_icon__["a" /* Icon */], { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["ALIGN_RIGHT"], iconName: rightIconName, key: "icon" }),
        ]);
    };
    return AbstractButton;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

function isKeyboardClick(keyCode) {
    return keyCode === __WEBPACK_IMPORTED_MODULE_4__common_keys__["ENTER"] || keyCode === __WEBPACK_IMPORTED_MODULE_4__common_keys__["SPACE"];
}


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breadcrumb; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var Breadcrumb = function (breadcrumbProps) {
    var classes = __WEBPACK_IMPORTED_MODULE_0_classnames__(__WEBPACK_IMPORTED_MODULE_2__common_classes__["BREADCRUMB"], (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_2__common_classes__["DISABLED"]] = breadcrumbProps.disabled,
        _a), breadcrumbProps.className);
    return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("a", { className: classes, href: breadcrumbProps.href, onClick: breadcrumbProps.disabled ? null : breadcrumbProps.onClick, tabIndex: breadcrumbProps.disabled ? null : 0, target: breadcrumbProps.target }, breadcrumbProps.text));
    var _a;
};


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var ButtonGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, fill = _a.fill, minimal = _a.minimal, large = _a.large, vertical = _a.vertical, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["className", "fill", "minimal", "large", "vertical"]);
        var buttonGroupClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["BUTTON_GROUP"], (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["FILL"]] = fill,
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["MINIMAL"]] = minimal,
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["LARGE"]] = large,
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["VERTICAL"]] = vertical,
            _b), className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, htmlProps, { className: buttonGroupClasses }), this.props.children));
        var _b;
    };
    ButtonGroup.displayName = "Blueprint.ButtonGroup";
    ButtonGroup = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], ButtonGroup);
    return ButtonGroup;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Callout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(8);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Callout = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, iconName = _a.iconName, intent = _a.intent, title = _a.title, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["className", "children", "iconName", "intent", "title"]);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].CALLOUT, __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].intentClass(intent), __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].iconClass(iconName), className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: classes }, htmlProps),
            title && __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("h5", null, title),
            children));
    };
    Callout = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Callout);
    return Callout;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Elevation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Elevation;
(function (Elevation) {
    Elevation[Elevation["ZERO"] = 0] = "ZERO";
    Elevation[Elevation["ONE"] = 1] = "ONE";
    Elevation[Elevation["TWO"] = 2] = "TWO";
    Elevation[Elevation["THREE"] = 3] = "THREE";
    Elevation[Elevation["FOUR"] = 4] = "FOUR";
})(Elevation || (Elevation = {}));
var ELEVATION_CLASSES = [
    __WEBPACK_IMPORTED_MODULE_4__common_classes__["ELEVATION_0"],
    __WEBPACK_IMPORTED_MODULE_4__common_classes__["ELEVATION_1"],
    __WEBPACK_IMPORTED_MODULE_4__common_classes__["ELEVATION_2"],
    __WEBPACK_IMPORTED_MODULE_4__common_classes__["ELEVATION_3"],
    __WEBPACK_IMPORTED_MODULE_4__common_classes__["ELEVATION_4"],
];
var Card = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: this.getClassName(), onClick: this.props.onClick }, this.props.children));
    };
    Card.prototype.getClassName = function () {
        var _a = this.props, elevation = _a.elevation, interactive = _a.interactive, className = _a.className;
        return __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["CARD"], (_b = {}, _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["INTERACTIVE"]] = interactive, _b), ELEVATION_CLASSES[elevation], className);
        var _b;
    };
    Card.displayName = "Blueprint.Card";
    Card.defaultProps = {
        elevation: Elevation.ZERO,
        interactive: false,
    };
    Card = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Card);
    return Card;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CollapsibleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CollapsibleListFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_position__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menuItem__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popover_popover__ = __webpack_require__(15);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var CollapseFrom;
(function (CollapseFrom) {
    CollapseFrom[CollapseFrom["START"] = 0] = "START";
    CollapseFrom[CollapseFrom["END"] = 1] = "END";
})(CollapseFrom || (CollapseFrom = {}));
var CollapsibleList = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](CollapsibleList, _super);
    function CollapsibleList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var collapseFrom = this.props.collapseFrom;
        var childrenLength = __WEBPACK_IMPORTED_MODULE_2_react__["Children"].count(this.props.children);
        var _a = this.partitionChildren(), visibleChildren = _a[0], collapsedChildren = _a[1];
        var visibleItems = visibleChildren.map(function (child, index) {
            var absoluteIndex = collapseFrom === CollapseFrom.START ? childrenLength - 1 - index : index;
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { className: _this.props.visibleItemClassName, key: absoluteIndex }, _this.props.renderVisibleItem(child.props, absoluteIndex)));
        });
        if (collapseFrom === CollapseFrom.START) {
            // reverse START list so separators appear before items
            visibleItems.reverse();
        }
        // construct dropdown menu for collapsed items
        var collapsedPopover;
        if (collapsedChildren.length > 0) {
            var position = collapseFrom === CollapseFrom.END ? __WEBPACK_IMPORTED_MODULE_5__common_position__["a" /* Position */].BOTTOM_RIGHT : __WEBPACK_IMPORTED_MODULE_5__common_position__["a" /* Position */].BOTTOM_LEFT;
            collapsedPopover = (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { className: this.props.visibleItemClassName },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8__popover_popover__["a" /* Popover */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ content: __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* Menu */], null, collapsedChildren), position: position }, this.props.dropdownProps), this.props.dropdownTarget)));
        }
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("ul", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["COLLAPSIBLE_LIST"], this.props.className) },
            collapseFrom === CollapseFrom.START ? collapsedPopover : null,
            visibleItems,
            collapseFrom === CollapseFrom.END ? collapsedPopover : null));
    };
    // splits the list of children into two arrays: visible and collapsed
    CollapsibleList.prototype.partitionChildren = function () {
        if (this.props.children == null) {
            return [[], []];
        }
        var childrenArray = __WEBPACK_IMPORTED_MODULE_2_react__["Children"].map(this.props.children, function (child, index) {
            if (child.type !== __WEBPACK_IMPORTED_MODULE_7__menu_menuItem__["a" /* MenuItem */]) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_4__common_errors__["c" /* COLLAPSIBLE_LIST_INVALID_CHILD */]);
            }
            return __WEBPACK_IMPORTED_MODULE_2_react__["cloneElement"](child, { key: "visible-" + index });
        });
        if (this.props.collapseFrom === CollapseFrom.START) {
            // reverse START list so we can always slice visible items from the front of the list
            childrenArray.reverse();
        }
        var visibleItemCount = this.props.visibleItemCount;
        return [childrenArray.slice(0, visibleItemCount), childrenArray.slice(visibleItemCount)];
    };
    CollapsibleList.displayName = "Blueprint.CollapsibleList";
    CollapsibleList.defaultProps = {
        collapseFrom: CollapseFrom.START,
        dropdownTarget: null,
        renderVisibleItem: null,
        visibleItemCount: 3,
    };
    return CollapsibleList;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var CollapsibleListFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](CollapsibleList);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ContextMenuTarget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utils_isDarkTheme__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contextMenu__ = __webpack_require__(32);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






function ContextMenuTarget(constructor) {
    var _a = constructor.prototype, render = _a.render, renderContextMenu = _a.renderContextMenu, onContextMenuClose = _a.onContextMenuClose;
    if (!Object(__WEBPACK_IMPORTED_MODULE_3__common_utils__["isFunction"])(renderContextMenu)) {
        console.warn(__WEBPACK_IMPORTED_MODULE_2__common_errors__["d" /* CONTEXTMENU_WARN_DECORATOR_NO_METHOD */]);
    }
    // patching classes like this requires preserving function context
    // tslint:disable-next-line only-arrow-functions
    constructor.prototype.render = function () {
        var _this = this;
        /* tslint:disable:no-invalid-this */
        var element = render.call(this);
        if (element == null) {
            // always return `element` in case caller is distinguishing between `null` and `undefined`
            return element;
        }
        var oldOnContextMenu = element.props.onContextMenu;
        var onContextMenu = function (e) {
            // support nested menus (inner menu target would have called preventDefault())
            if (e.defaultPrevented) {
                return;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__common_utils__["isFunction"])(_this.renderContextMenu)) {
                var menu = _this.renderContextMenu(e);
                if (menu != null) {
                    var htmlElement = __WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"](_this);
                    var darkTheme = htmlElement != null && Object(__WEBPACK_IMPORTED_MODULE_4__common_utils_isDarkTheme__["a" /* isDarkTheme */])(htmlElement);
                    e.preventDefault();
                    __WEBPACK_IMPORTED_MODULE_5__contextMenu__["show"](menu, { left: e.clientX, top: e.clientY }, onContextMenuClose, darkTheme);
                }
            }
            Object(__WEBPACK_IMPORTED_MODULE_3__common_utils__["safeInvoke"])(oldOnContextMenu, e);
        };
        return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](element, { onContextMenu: onContextMenu });
        /* tslint:enable:no-invalid-this */
    };
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditableText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditableTextFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__compatibility__ = __webpack_require__(94);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */









var BUFFER_WIDTH_EDGE = 5;
var BUFFER_WIDTH_IE = 30;
var EditableText = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](EditableText, _super);
    function EditableText(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHandlers = {
            content: function (spanElement) {
                _this.valueElement = spanElement;
            },
            input: function (input) {
                if (input != null) {
                    input.focus();
                    var length_1 = input.value.length;
                    input.setSelectionRange(_this.props.selectAllOnFocus ? 0 : length_1, length_1);
                    if (!_this.props.selectAllOnFocus) {
                        input.scrollLeft = input.scrollWidth;
                    }
                }
            },
        };
        _this.cancelEditing = function () {
            var _a = _this.state, lastValue = _a.lastValue, value = _a.value;
            _this.setState({ isEditing: false, value: lastValue });
            if (value !== lastValue) {
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(_this.props.onChange, lastValue);
            }
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(_this.props.onCancel, lastValue);
        };
        _this.toggleEditing = function () {
            if (_this.state.isEditing) {
                var value = _this.state.value;
                _this.setState({ isEditing: false, lastValue: value });
                Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(_this.props.onConfirm, value);
            }
            else if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        _this.handleFocus = function () {
            if (!_this.props.disabled) {
                _this.setState({ isEditing: true });
            }
        };
        _this.handleTextChange = function (event) {
            var value = event.target.value;
            // state value should be updated only when uncontrolled
            if (_this.props.value == null) {
                _this.setState({ value: value });
            }
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(_this.props.onChange, value);
        };
        _this.handleKeyEvent = function (event) {
            var altKey = event.altKey, ctrlKey = event.ctrlKey, metaKey = event.metaKey, shiftKey = event.shiftKey, which = event.which;
            if (which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ESCAPE"]) {
                _this.cancelEditing();
                return;
            }
            var hasModifierKey = altKey || ctrlKey || metaKey || shiftKey;
            if (which === __WEBPACK_IMPORTED_MODULE_6__common_keys__["ENTER"]) {
                // prevent IE11 from full screening with alt + enter
                // shift + enter adds a newline by default
                if (altKey || shiftKey) {
                    event.preventDefault();
                }
                if (_this.props.confirmOnEnterKey && _this.props.multiline) {
                    if (event.target != null && hasModifierKey) {
                        insertAtCaret(event.target, "\n");
                        _this.handleTextChange(event);
                    }
                    else {
                        _this.toggleEditing();
                    }
                }
                else if (!_this.props.multiline || hasModifierKey) {
                    _this.toggleEditing();
                }
            }
        };
        var value = props.value == null ? props.defaultValue : props.value;
        _this.state = {
            inputHeight: 0,
            inputWidth: 0,
            isEditing: props.isEditing === true && props.disabled === false,
            lastValue: value,
            value: value,
        };
        return _this;
    }
    EditableText.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, multiline = _a.multiline;
        var value = this.props.value == null ? this.state.value : this.props.value;
        var hasValue = value != null && value !== "";
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["EDITABLE_TEXT"], __WEBPACK_IMPORTED_MODULE_5__common_classes__["intentClass"](this.props.intent), (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["DISABLED"]] = disabled,
            _b["pt-editable-editing"] = this.state.isEditing,
            _b["pt-editable-placeholder"] = !hasValue,
            _b["pt-multiline"] = multiline,
            _b), this.props.className);
        var contentStyle;
        if (multiline) {
            // set height only in multiline mode when not editing
            // otherwise we're measuring this element to determine appropriate height of text
            contentStyle = { height: !this.state.isEditing ? this.state.inputHeight : null };
        }
        else {
            // minWidth only applies in single line mode (multiline == width 100%)
            contentStyle = {
                height: this.state.inputHeight,
                lineHeight: this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                minWidth: this.props.minWidth,
            };
        }
        // make enclosing div focusable when not editing, so it can still be tabbed to focus
        // (when editing, input itself is focusable so div doesn't need to be)
        var tabIndex = this.state.isEditing || disabled ? null : 0;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes, onFocus: this.handleFocus, tabIndex: tabIndex },
            this.maybeRenderInput(value),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: "pt-editable-content", ref: this.refHandlers.content, style: contentStyle }, hasValue ? value : this.props.placeholder)));
        var _b;
    };
    EditableText.prototype.componentDidMount = function () {
        this.updateInputDimensions();
    };
    EditableText.prototype.componentDidUpdate = function (_, prevState) {
        if (this.state.isEditing && !prevState.isEditing) {
            Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"])(this.props.onEdit);
        }
        this.updateInputDimensions();
    };
    EditableText.prototype.componentWillReceiveProps = function (nextProps) {
        var state = {};
        if (nextProps.value != null) {
            state.value = nextProps.value;
        }
        if (nextProps.isEditing != null) {
            state.isEditing = nextProps.isEditing;
        }
        if (nextProps.disabled || (nextProps.disabled == null && this.props.disabled)) {
            state.isEditing = false;
        }
        this.setState(state);
    };
    EditableText.prototype.maybeRenderInput = function (value) {
        var _a = this.props, maxLength = _a.maxLength, multiline = _a.multiline;
        if (!this.state.isEditing) {
            return undefined;
        }
        var props = {
            className: "pt-editable-input",
            maxLength: maxLength,
            onBlur: this.toggleEditing,
            onChange: this.handleTextChange,
            onKeyDown: this.handleKeyEvent,
            ref: this.refHandlers.input,
            style: {
                height: this.state.inputHeight,
                lineHeight: !multiline && this.state.inputHeight != null ? this.state.inputHeight + "px" : null,
                width: multiline ? "100%" : this.state.inputWidth,
            },
            value: value,
        };
        return multiline ? __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("textarea", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, props)) : __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("input", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ type: "text" }, props));
    };
    EditableText.prototype.updateInputDimensions = function () {
        if (this.valueElement != null) {
            var _a = this.props, maxLines = _a.maxLines, minLines = _a.minLines, minWidth = _a.minWidth, multiline = _a.multiline;
            var _b = this.valueElement, parentElement_1 = _b.parentElement, textContent = _b.textContent;
            var _c = this.valueElement, scrollHeight_1 = _c.scrollHeight, scrollWidth = _c.scrollWidth;
            var lineHeight = getLineHeight(this.valueElement);
            // add one line to computed <span> height if text ends in newline
            // because <span> collapses that trailing whitespace but <textarea> shows it
            if (multiline && this.state.isEditing && /\n$/.test(textContent)) {
                scrollHeight_1 += lineHeight;
            }
            if (lineHeight > 0) {
                // line height could be 0 if the isNaN block from getLineHeight kicks in
                scrollHeight_1 = Object(__WEBPACK_IMPORTED_MODULE_7__common_utils__["clamp"])(scrollHeight_1, minLines * lineHeight, maxLines * lineHeight);
            }
            // Chrome's input caret height misaligns text so the line-height must be larger than font-size.
            // The computed scrollHeight must also account for a larger inherited line-height from the parent.
            scrollHeight_1 = Math.max(scrollHeight_1, getFontSize(this.valueElement) + 1, getLineHeight(parentElement_1));
            // IE11 & Edge needs a small buffer so text does not shift prior to resizing
            if (__WEBPACK_IMPORTED_MODULE_8__compatibility__["a" /* Browser */].isEdge()) {
                scrollWidth += BUFFER_WIDTH_EDGE;
            }
            else if (__WEBPACK_IMPORTED_MODULE_8__compatibility__["a" /* Browser */].isInternetExplorer()) {
                scrollWidth += BUFFER_WIDTH_IE;
            }
            this.setState({
                inputHeight: scrollHeight_1,
                inputWidth: Math.max(scrollWidth, minWidth),
            });
            // synchronizes the ::before pseudo-element's height while editing for Chrome 53
            if (multiline && this.state.isEditing) {
                this.setTimeout(function () { return (parentElement_1.style.height = scrollHeight_1 + "px"); });
            }
        }
    };
    EditableText.defaultProps = {
        confirmOnEnterKey: false,
        defaultValue: "",
        disabled: false,
        maxLines: Infinity,
        minLines: 1,
        minWidth: 80,
        multiline: false,
        placeholder: "Click to Edit",
    };
    EditableText = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], EditableText);
    return EditableText;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));

function getFontSize(element) {
    var fontSize = getComputedStyle(element).fontSize;
    return fontSize === "" ? 0 : parseInt(fontSize.slice(0, -2), 10);
}
function getLineHeight(element) {
    // getComputedStyle() => 18.0001px => 18
    var lineHeight = parseInt(getComputedStyle(element).lineHeight.slice(0, -2), 10);
    // this check will be true if line-height is a keyword like "normal"
    if (isNaN(lineHeight)) {
        // @see http://stackoverflow.com/a/18430767/6342931
        var line = document.createElement("span");
        line.innerHTML = "<br>";
        element.appendChild(line);
        var singleLineHeight = element.offsetHeight;
        line.innerHTML = "<br><br>";
        var doubleLineHeight = element.offsetHeight;
        element.removeChild(line);
        // this can return 0 in edge cases
        lineHeight = doubleLineHeight - singleLineHeight;
    }
    return lineHeight;
}
function insertAtCaret(el, text) {
    var selectionEnd = el.selectionEnd, selectionStart = el.selectionStart, value = el.value;
    if (selectionStart >= 0) {
        var before_1 = value.substring(0, selectionStart);
        var after_1 = value.substring(selectionEnd, value.length);
        var len = text.length;
        el.value = "" + before_1 + text + after_1;
        el.selectionStart = selectionStart + len;
        el.selectionEnd = selectionStart + len;
    }
}
var EditableTextFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](EditableText);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__browser__["a"]; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browser; });
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
var browser = {
    isEdge: !!userAgent.match(/Edge/),
    isInternetExplorer: !!userAgent.match(/Trident/) || !!userAgent.match(/rv:11/),
    isWebkit: !!userAgent.match(/AppleWebKit/),
};
var Browser = {
    isEdge: function () { return browser.isEdge; },
    isInternetExplorer: function () { return browser.isInternetExplorer; },
    isWebkit: function () { return browser.isWebkit; },
};


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ControlGroupFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var ControlGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ControlGroup, _super);
    function ControlGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, fill = _a.fill, vertical = _a.vertical, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["children", "className", "fill", "vertical"]);
        var rootClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["CONTROL_GROUP"], (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["FILL"]] = fill,
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["VERTICAL"]] = vertical,
            _b), className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, htmlProps, { className: rootClasses }), children));
        var _b;
    };
    ControlGroup.displayName = "Blueprint.ControlGroup";
    ControlGroup = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], ControlGroup);
    return ControlGroup;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var ControlGroupFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](ControlGroup);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileUploadFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






// TODO: write tests (ignoring for now to get a build passing quickly)
/* istanbul ignore next */
var FileUpload = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](FileUpload, _super);
    function FileUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleInputChange = function (e) {
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onInputChange, e);
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.inputProps.onChange, e);
        };
        return _this;
    }
    FileUpload.prototype.render = function () {
        var _a = this.props, className = _a.className, fill = _a.fill, disabled = _a.disabled, inputProps = _a.inputProps, onInputChange = _a.onInputChange, large = _a.large, text = _a.text, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["className", "fill", "disabled", "inputProps", "onInputChange", "large", "text"]);
        var rootClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["FILE_UPLOAD"], (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["DISABLED"]] = disabled,
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["FILL"]] = fill,
            _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["LARGE"]] = large,
            _b), className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("label", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, htmlProps, { className: rootClasses }),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("input", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, inputProps, { onChange: this.handleInputChange, type: "file", disabled: disabled })),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_5__common_classes__["FILE_UPLOAD_INPUT"] }, text)));
        var _b;
    };
    FileUpload.displayName = "Blueprint.FileUpload";
    FileUpload.defaultProps = {
        inputProps: {},
        text: "Choose file...",
    };
    FileUpload = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], FileUpload);
    return FileUpload;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var FileUploadFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](FileUpload);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var FormGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](FormGroup, _super);
    function FormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormGroup_1 = FormGroup;
    FormGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, label = _a.label, labelFor = _a.labelFor;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: this.getClassName() },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("label", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["LABEL"], htmlFor: labelFor },
                label,
                this.maybeRenderRequiredLabel()),
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["FORM_CONTENT"] },
                children,
                this.maybeRenderHelperText())));
    };
    FormGroup.prototype.getClassName = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, inline = _a.inline, intent = _a.intent;
        return __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["FORM_GROUP"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["intentClass"](intent), (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["DISABLED"]] = disabled,
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["INLINE"]] = inline,
            _b), className);
        var _b;
    };
    FormGroup.prototype.maybeRenderRequiredLabel = function () {
        var requiredLabel = this.props.requiredLabel;
        return requiredLabel === true ? FormGroup_1.DEFAULT_REQUIRED_CONTENT : requiredLabel;
    };
    FormGroup.prototype.maybeRenderHelperText = function () {
        var helperText = this.props.helperText;
        if (!helperText) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["FORM_HELPER_TEXT"] }, helperText);
    };
    /**
     * Element used to render `required` message when a boolean value is provided for that prop.
     * Modifying the value of this property will change the default globally in your app.
     *
     * Defaults to `<span class="pt-text-muted">(required)</span>`.
     */
    FormGroup.DEFAULT_REQUIRED_CONTENT = __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["TEXT_MUTED"] }, "(required)");
    FormGroup = FormGroup_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], FormGroup);
    return FormGroup;
    var FormGroup_1;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LabelFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Label = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, disabled = _a.disabled, helperText = _a.helperText, text = _a.text, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["children", "className", "disabled", "helperText", "text"]);
        var rootClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["LABEL"], (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["DISABLED"]] = disabled,
            _b), className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, htmlProps, { className: rootClasses }),
            text,
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["TEXT_MUTED"]) }, helperText),
            children));
        var _b;
    };
    Label.displayName = "Blueprint.Label";
    Label = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Label);
    return Label;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var LabelFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Label);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumericInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NumericInputFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_buttons__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inputGroup__ = __webpack_require__(41);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var IncrementDirection;
(function (IncrementDirection) {
    IncrementDirection[IncrementDirection["DOWN"] = -1] = "DOWN";
    IncrementDirection[IncrementDirection["UP"] = 1] = "UP";
})(IncrementDirection || (IncrementDirection = {}));
var NumericInput = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](NumericInput, _super);
    function NumericInput(props, context) {
        var _this = _super.call(this, props, context) || this;
        // updating these flags need not trigger re-renders, so don't include them in this.state.
        _this.didPasteEventJustOccur = false;
        _this.shouldSelectAfterUpdate = false;
        _this.inputRef = function (input) {
            _this.inputElement = input;
        };
        // Callbacks - Buttons
        // ===================
        _this.handleDecrementButtonClick = function (e) {
            var delta = _this.getIncrementDelta(IncrementDirection.DOWN, e.shiftKey, e.altKey);
            var nextValue = _this.incrementValue(delta);
            _this.invokeValueCallback(nextValue, _this.props.onButtonClick);
        };
        _this.handleIncrementButtonClick = function (e) {
            var delta = _this.getIncrementDelta(IncrementDirection.UP, e.shiftKey, e.altKey);
            var nextValue = _this.incrementValue(delta);
            _this.invokeValueCallback(nextValue, _this.props.onButtonClick);
        };
        _this.handleButtonFocus = function () {
            _this.setState({ isButtonGroupFocused: true });
        };
        _this.handleButtonBlur = function () {
            _this.setState({ isButtonGroupFocused: false });
        };
        _this.handleButtonKeyUp = function (e, onClick) {
            if (e.keyCode === __WEBPACK_IMPORTED_MODULE_4__common__["g" /* Keys */].SPACE || e.keyCode === __WEBPACK_IMPORTED_MODULE_4__common__["g" /* Keys */].ENTER) {
                // prevent the page from scrolling (this is the default browser
                // behavior for shift + space or alt + space).
                e.preventDefault();
                // trigger a click event to update the input value appropriately,
                // based on the active modifier keys.
                var fakeClickEvent = {
                    altKey: e.altKey,
                    currentTarget: e.currentTarget,
                    shiftKey: e.shiftKey,
                    target: e.target,
                };
                onClick(fakeClickEvent);
            }
        };
        // Callbacks - Input
        // =================
        _this.handleInputFocus = function (e) {
            _this.shouldSelectAfterUpdate = _this.props.selectAllOnFocus;
            _this.setState({ isInputGroupFocused: true });
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onFocus, e);
        };
        _this.handleInputBlur = function (e) {
            // explicitly set `shouldSelectAfterUpdate` to `false` to prevent focus
            // hoarding on IE11 (#704)
            _this.shouldSelectAfterUpdate = false;
            var baseStateChange = { isInputGroupFocused: false };
            if (_this.props.clampValueOnBlur) {
                var value = e.target.value;
                var sanitizedValue = _this.getSanitizedValue(value);
                _this.setState(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, baseStateChange, { value: sanitizedValue }));
                if (value !== sanitizedValue) {
                    _this.invokeValueCallback(sanitizedValue, _this.props.onValueChange);
                }
            }
            else {
                _this.setState(baseStateChange);
            }
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onBlur, e);
        };
        _this.handleInputKeyDown = function (e) {
            if (_this.props.disabled || _this.props.readOnly) {
                return;
            }
            var keyCode = e.keyCode;
            var direction;
            if (keyCode === __WEBPACK_IMPORTED_MODULE_4__common__["g" /* Keys */].ARROW_UP) {
                direction = IncrementDirection.UP;
            }
            else if (keyCode === __WEBPACK_IMPORTED_MODULE_4__common__["g" /* Keys */].ARROW_DOWN) {
                direction = IncrementDirection.DOWN;
            }
            if (direction != null) {
                // when the input field has focus, some key combinations will modify
                // the field's selection range. we'll actually want to select all
                // text in the field after we modify the value on the following
                // lines. preventing the default selection behavior lets us do that
                // without interference.
                e.preventDefault();
                var delta = _this.getIncrementDelta(direction, e.shiftKey, e.altKey);
                _this.incrementValue(delta);
            }
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onKeyDown, e);
        };
        _this.handleInputKeyPress = function (e) {
            // we prohibit keystrokes in onKeyPress instead of onKeyDown, because
            // e.key is not trustworthy in onKeyDown in all browsers.
            if (_this.props.allowNumericCharactersOnly && _this.isKeyboardEventDisabledForBasicNumericEntry(e)) {
                e.preventDefault();
            }
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onKeyPress, e);
        };
        _this.handleInputPaste = function (e) {
            _this.didPasteEventJustOccur = true;
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onPaste, e);
        };
        _this.handleInputChange = function (e) {
            var value = e.target.value;
            var nextValue;
            if (_this.props.allowNumericCharactersOnly && _this.didPasteEventJustOccur) {
                _this.didPasteEventJustOccur = false;
                var valueChars = value.split("");
                var sanitizedValueChars = valueChars.filter(_this.isFloatingPointNumericCharacter);
                var sanitizedValue = sanitizedValueChars.join("");
                nextValue = sanitizedValue;
            }
            else {
                nextValue = value;
            }
            _this.shouldSelectAfterUpdate = false;
            _this.setState({ value: nextValue });
            _this.invokeValueCallback(nextValue, _this.props.onValueChange);
        };
        _this.state = {
            stepMaxPrecision: _this.getStepMaxPrecision(props),
            value: _this.getValueOrEmptyValue(props.value),
        };
        return _this;
    }
    NumericInput_1 = NumericInput;
    NumericInput.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        var value = this.getValueOrEmptyValue(nextProps.value);
        var didMinChange = nextProps.min !== this.props.min;
        var didMaxChange = nextProps.max !== this.props.max;
        var didBoundsChange = didMinChange || didMaxChange;
        var sanitizedValue = value !== NumericInput_1.VALUE_EMPTY
            ? this.getSanitizedValue(value, /* delta */ 0, nextProps.min, nextProps.max)
            : NumericInput_1.VALUE_EMPTY;
        var stepMaxPrecision = this.getStepMaxPrecision(nextProps);
        // if a new min and max were provided that cause the existing value to fall
        // outside of the new bounds, then clamp the value to the new valid range.
        if (didBoundsChange && sanitizedValue !== this.state.value) {
            this.setState({ stepMaxPrecision: stepMaxPrecision, value: sanitizedValue });
            this.invokeValueCallback(sanitizedValue, this.props.onValueChange);
        }
        else {
            this.setState({ stepMaxPrecision: stepMaxPrecision, value: value });
        }
    };
    NumericInput.prototype.render = function () {
        var _a = this.props, buttonPosition = _a.buttonPosition, className = _a.className, large = _a.large;
        var inputGroupHtmlProps = Object(__WEBPACK_IMPORTED_MODULE_4__common__["p" /* removeNonHTMLProps */])(this.props, [
            "allowNumericCharactersOnly",
            "buttonPosition",
            "clampValueOnBlur",
            "className",
            "large",
            "majorStepSize",
            "minorStepSize",
            "onButtonClick",
            "onValueChange",
            "selectAllOnFocus",
            "selectAllOnIncrement",
            "stepSize",
        ], true);
        var inputGroup = (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__inputGroup__["a" /* InputGroup */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ autoComplete: "off" }, inputGroupHtmlProps, { className: __WEBPACK_IMPORTED_MODULE_1_classnames__((_b = {}, _b[__WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].LARGE] = large, _b)), intent: this.props.intent, inputRef: this.inputRef, key: "input-group", leftIconName: this.props.leftIconName, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onChange: this.handleInputChange, onKeyDown: this.handleInputKeyDown, onKeyPress: this.handleInputKeyPress, onPaste: this.handleInputPaste, value: this.state.value })));
        // the strict null check here is intentional; an undefined value should
        // fall back to the default button position on the right side.
        if (buttonPosition === "none" || buttonPosition === null) {
            // If there are no buttons, then the control group will render the
            // text field with squared border-radii on the left side, causing it
            // to look weird. This problem goes away if we simply don't nest within
            // a control group.
            return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: className }, inputGroup);
        }
        else {
            var incrementButton = this.renderButton(NumericInput_1.INCREMENT_KEY, NumericInput_1.INCREMENT_ICON_NAME, this.handleIncrementButtonClick);
            var decrementButton = this.renderButton(NumericInput_1.DECREMENT_KEY, NumericInput_1.DECREMENT_ICON_NAME, this.handleDecrementButtonClick);
            var buttonGroup = (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { key: "button-group", className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].BUTTON_GROUP, __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].VERTICAL, __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].FIXED) },
                incrementButton,
                decrementButton));
            var inputElems = buttonPosition === __WEBPACK_IMPORTED_MODULE_4__common__["h" /* Position */].LEFT ? [buttonGroup, inputGroup] : [inputGroup, buttonGroup];
            var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].NUMERIC_INPUT, __WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].CONTROL_GROUP, (_c = {},
                _c[__WEBPACK_IMPORTED_MODULE_4__common__["b" /* Classes */].LARGE] = large,
                _c), className);
            return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes }, inputElems);
        }
        var _b, _c;
    };
    NumericInput.prototype.componentDidUpdate = function () {
        if (this.shouldSelectAfterUpdate) {
            this.inputElement.setSelectionRange(0, this.state.value.length);
        }
    };
    NumericInput.prototype.validateProps = function (nextProps) {
        var majorStepSize = nextProps.majorStepSize, max = nextProps.max, min = nextProps.min, minorStepSize = nextProps.minorStepSize, stepSize = nextProps.stepSize;
        if (min != null && max != null && min >= max) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["m" /* NUMERIC_INPUT_MIN_MAX */]);
        }
        if (stepSize == null) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["o" /* NUMERIC_INPUT_STEP_SIZE_NULL */]);
        }
        if (stepSize <= 0) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["n" /* NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE */]);
        }
        if (minorStepSize && minorStepSize <= 0) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["l" /* NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE */]);
        }
        if (majorStepSize && majorStepSize <= 0) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["j" /* NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE */]);
        }
        if (minorStepSize && minorStepSize > stepSize) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["k" /* NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND */]);
        }
        if (majorStepSize && majorStepSize < stepSize) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_5__common_errors__["i" /* NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND */]);
        }
    };
    // Render Helpers
    // ==============
    NumericInput.prototype.renderButton = function (key, iconName, onClick) {
        var _this = this;
        // respond explicitly on key *up*, because onKeyDown triggers multiple
        // times and doesn't always receive modifier-key flags, leading to an
        // unintuitive/out-of-control incrementing experience.
        var onKeyUp = function (e) {
            _this.handleButtonKeyUp(e, onClick);
        };
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__button_buttons__["c" /* Button */], { disabled: this.props.disabled || this.props.readOnly, iconName: iconName, intent: this.props.intent, key: key, onBlur: this.handleButtonBlur, onClick: onClick, onFocus: this.handleButtonFocus, onKeyUp: onKeyUp }));
    };
    NumericInput.prototype.invokeValueCallback = function (value, callback) {
        __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(callback, +value, value);
    };
    // Value Helpers
    // =============
    NumericInput.prototype.incrementValue = function (delta) {
        // pretend we're incrementing from 0 if currValue is empty
        var currValue = this.state.value || NumericInput_1.VALUE_ZERO;
        var nextValue = this.getSanitizedValue(currValue, delta);
        this.shouldSelectAfterUpdate = this.props.selectAllOnIncrement;
        this.setState({ value: nextValue });
        this.invokeValueCallback(nextValue, this.props.onValueChange);
        return nextValue;
    };
    NumericInput.prototype.getIncrementDelta = function (direction, isShiftKeyPressed, isAltKeyPressed) {
        var _a = this.props, majorStepSize = _a.majorStepSize, minorStepSize = _a.minorStepSize, stepSize = _a.stepSize;
        if (isShiftKeyPressed && majorStepSize != null) {
            return direction * majorStepSize;
        }
        else if (isAltKeyPressed && minorStepSize != null) {
            return direction * minorStepSize;
        }
        else {
            return direction * stepSize;
        }
    };
    NumericInput.prototype.getSanitizedValue = function (value, delta, min, max) {
        if (delta === void 0) { delta = 0; }
        if (min === void 0) { min = this.props.min; }
        if (max === void 0) { max = this.props.max; }
        if (!this.isValueNumeric(value)) {
            return NumericInput_1.VALUE_EMPTY;
        }
        var nextValue = this.toMaxPrecision(parseFloat(value) + delta);
        // defaultProps won't work if the user passes in null, so just default
        // to +/- infinity here instead, as a catch-all.
        var adjustedMin = min != null ? min : -Infinity;
        var adjustedMax = max != null ? max : Infinity;
        nextValue = __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].clamp(nextValue, adjustedMin, adjustedMax);
        return nextValue.toString();
    };
    NumericInput.prototype.getValueOrEmptyValue = function (value) {
        return value != null ? value.toString() : NumericInput_1.VALUE_EMPTY;
    };
    NumericInput.prototype.isValueNumeric = function (value) {
        // checking if a string is numeric in Typescript is a big pain, because
        // we can't simply toss a string parameter to isFinite. below is the
        // essential approach that jQuery uses, which involves subtracting a
        // parsed numeric value from the string representation of the value. we
        // need to cast the value to the `any` type to allow this operation
        // between dissimilar types.
        return value != null && value - parseFloat(value) + 1 >= 0;
    };
    NumericInput.prototype.isKeyboardEventDisabledForBasicNumericEntry = function (e) {
        // unit tests may not include e.key. don't bother disabling those events.
        if (e.key == null) {
            return false;
        }
        // allow modified key strokes that may involve letters and other
        // non-numeric/invalid characters (Cmd + A, Cmd + C, Cmd + V, Cmd + X).
        if (e.ctrlKey || e.altKey || e.metaKey) {
            return false;
        }
        // keys that print a single character when pressed have a `key` name of
        // length 1. every other key has a longer `key` name (e.g. "Backspace",
        // "ArrowUp", "Shift"). since none of those keys can print a character
        // to the field--and since they may have important native behaviors
        // beyond printing a character--we don't want to disable their effects.
        var isSingleCharKey = e.key.length === 1;
        if (!isSingleCharKey) {
            return false;
        }
        // now we can simply check that the single character that wants to be printed
        // is a floating-point number character that we're allowed to print.
        return !this.isFloatingPointNumericCharacter(e.key);
    };
    NumericInput.prototype.isFloatingPointNumericCharacter = function (character) {
        return NumericInput_1.FLOATING_POINT_NUMBER_CHARACTER_REGEX.test(character);
    };
    NumericInput.prototype.getStepMaxPrecision = function (props) {
        if (props.minorStepSize != null) {
            return __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].countDecimalPlaces(props.minorStepSize);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].countDecimalPlaces(props.stepSize);
        }
    };
    NumericInput.prototype.toMaxPrecision = function (value) {
        // round the value to have the specified maximum precision (toFixed is the wrong choice,
        // because it would show trailing zeros in the decimal part out to the specified precision)
        // source: http://stackoverflow.com/a/18358056/5199574
        var scaleFactor = Math.pow(10, this.state.stepMaxPrecision);
        return Math.round(value * scaleFactor) / scaleFactor;
    };
    NumericInput.displayName = "Blueprint.NumericInput";
    NumericInput.VALUE_EMPTY = "";
    NumericInput.VALUE_ZERO = "0";
    NumericInput.defaultProps = {
        allowNumericCharactersOnly: true,
        buttonPosition: __WEBPACK_IMPORTED_MODULE_4__common__["h" /* Position */].RIGHT,
        clampValueOnBlur: false,
        large: false,
        majorStepSize: 10,
        minorStepSize: 0.1,
        selectAllOnFocus: false,
        selectAllOnIncrement: false,
        stepSize: 1,
        value: NumericInput_1.VALUE_EMPTY,
    };
    NumericInput.DECREMENT_KEY = "decrement";
    NumericInput.INCREMENT_KEY = "increment";
    NumericInput.DECREMENT_ICON_NAME = "chevron-down";
    NumericInput.INCREMENT_ICON_NAME = "chevron-up";
    /**
     * A regex that matches a string of length 1 (i.e. a standalone character)
     * if and only if it is a floating-point number character as defined by W3C:
     * https://www.w3.org/TR/2012/WD-html-markup-20120329/datatypes.html#common.data.float
     *
     * Floating-point number characters are the only characters that can be
     * printed within a default input[type="number"]. This component should
     * behave the same way when this.props.allowNumericCharactersOnly = true.
     * See here for the input[type="number"].value spec:
     * https://www.w3.org/TR/2012/WD-html-markup-20120329/input.number.html#input.number.attrs.value
     */
    NumericInput.FLOATING_POINT_NUMBER_CHARACTER_REGEX = /^[Ee0-9\+\-\.]$/;
    NumericInput = NumericInput_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], NumericInput);
    return NumericInput;
    var NumericInput_1;
}(__WEBPACK_IMPORTED_MODULE_4__common__["a" /* AbstractComponent */]));

var NumericInputFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](NumericInput);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controls__ = __webpack_require__(40);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var counter = 0;
function nextName() {
    return RadioGroup.displayName + "-" + counter++;
}
var RadioGroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RadioGroup, _super);
    function RadioGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // a unique name for this group, which can be overridden by `name` prop.
        _this.autoGroupName = nextName();
        return _this;
    }
    RadioGroup.prototype.render = function () {
        var label = this.props.label;
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: this.props.className },
            label == null ? null : __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("label", { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["LABEL"] }, label),
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    };
    RadioGroup.prototype.validateProps = function () {
        if (this.props.children != null && this.props.options != null) {
            console.warn(__WEBPACK_IMPORTED_MODULE_4__common_errors__["A" /* RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX */]);
        }
    };
    RadioGroup.prototype.renderChildren = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_react__["Children"].map(this.props.children, function (child) {
            if (isRadio(child)) {
                return __WEBPACK_IMPORTED_MODULE_1_react__["cloneElement"](child, _this.getRadioProps(child.props));
            }
            else {
                return child;
            }
        });
    };
    RadioGroup.prototype.renderOptions = function () {
        var _this = this;
        return this.props.options.map(function (option) { return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__controls__["d" /* Radio */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, option, _this.getRadioProps(option), { key: option.value }))); });
    };
    RadioGroup.prototype.getRadioProps = function (optionProps) {
        var name = this.props.name;
        var value = optionProps.value, disabled = optionProps.disabled;
        return {
            checked: value === this.props.selectedValue,
            disabled: disabled || this.props.disabled,
            inline: this.props.inline,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
        };
    };
    RadioGroup.displayName = "Blueprint.RadioGroup";
    return RadioGroup;
}(__WEBPACK_IMPORTED_MODULE_2__common_abstractComponent__["a" /* AbstractComponent */]));

function isRadio(child) {
    return child != null && child.type === __WEBPACK_IMPORTED_MODULE_5__controls__["d" /* Radio */];
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TextAreaFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var TextArea = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.render = function () {
        var _a = this.props, className = _a.className, fill = _a.fill, intent = _a.intent, large = _a.large, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["className", "fill", "intent", "large"]);
        var rootClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["INPUT"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["intentClass"](intent), (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["FILL"]] = fill,
            _b[__WEBPACK_IMPORTED_MODULE_4__common_classes__["LARGE"]] = large,
            _b), className);
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("textarea", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, htmlProps, { className: rootClasses }));
        var _b;
    };
    TextArea.displayName = "Blueprint.TextArea";
    TextArea = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], TextArea);
    return TextArea;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var TextAreaFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](TextArea);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HotkeysTarget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotkeysEvents__ = __webpack_require__(104);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



function HotkeysTarget(constructor) {
    var _a = constructor.prototype, componentWillMount = _a.componentWillMount, componentDidMount = _a.componentDidMount, componentWillUnmount = _a.componentWillUnmount, render = _a.render, renderHotkeys = _a.renderHotkeys;
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__common_utils__["isFunction"])(renderHotkeys)) {
        throw new Error("@HotkeysTarget-decorated class must implement `renderHotkeys`. " + constructor);
    }
    // tslint:disable no-invalid-this only-arrow-functions
    constructor.prototype.componentWillMount = function () {
        this.localHotkeysEvents = new __WEBPACK_IMPORTED_MODULE_2__hotkeysEvents__["b" /* HotkeysEvents */](__WEBPACK_IMPORTED_MODULE_2__hotkeysEvents__["a" /* HotkeyScope */].LOCAL);
        this.globalHotkeysEvents = new __WEBPACK_IMPORTED_MODULE_2__hotkeysEvents__["b" /* HotkeysEvents */](__WEBPACK_IMPORTED_MODULE_2__hotkeysEvents__["a" /* HotkeyScope */].GLOBAL);
        if (componentWillMount != null) {
            componentWillMount.call(this);
        }
    };
    constructor.prototype.componentDidMount = function () {
        // attach global key event listeners
        document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        if (componentDidMount != null) {
            componentDidMount.call(this);
        }
    };
    constructor.prototype.componentWillUnmount = function () {
        // detach global key event listeners
        document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
        document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        this.globalHotkeysEvents.clear();
        this.localHotkeysEvents.clear();
        if (componentWillUnmount != null) {
            componentWillUnmount.call(this);
        }
    };
    constructor.prototype.render = function () {
        var _this = this;
        var element = render.call(this);
        var hotkeys = renderHotkeys.call(this);
        this.localHotkeysEvents.setHotkeys(hotkeys.props);
        this.globalHotkeysEvents.setHotkeys(hotkeys.props);
        // attach local key event listeners
        if (element != null && this.localHotkeysEvents.count() > 0) {
            var tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
            var existingKeyDown_1 = element.props.onKeyDown;
            var onKeyDown = function (e) {
                _this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                Object(__WEBPACK_IMPORTED_MODULE_1__common_utils__["safeInvoke"])(existingKeyDown_1, e);
            };
            var existingKeyUp_1 = element.props.onKeyUp;
            var onKeyUp = function (e) {
                _this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                Object(__WEBPACK_IMPORTED_MODULE_1__common_utils__["safeInvoke"])(existingKeyUp_1, e);
            };
            return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](element, { tabIndex: tabIndex, onKeyDown: onKeyDown, onKeyUp: onKeyUp });
        }
        else {
            return element;
        }
    };
    // tslint:enable
}


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotkeyScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HotkeysEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotkey__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotkeyParser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hotkeysDialog__ = __webpack_require__(44);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var SHOW_DIALOG_KEY = "?";
var HotkeyScope;
(function (HotkeyScope) {
    HotkeyScope[HotkeyScope["LOCAL"] = 0] = "LOCAL";
    HotkeyScope[HotkeyScope["GLOBAL"] = 1] = "GLOBAL";
})(HotkeyScope || (HotkeyScope = {}));
var HotkeysEvents = (function () {
    function HotkeysEvents(scope) {
        var _this = this;
        this.scope = scope;
        this.actions = [];
        this.handleKeyDown = function (e) {
            var combo = Object(__WEBPACK_IMPORTED_MODULE_3__hotkeyParser__["b" /* getKeyCombo */])(e);
            var isTextInput = _this.isTextInput(e);
            if (!isTextInput && Object(__WEBPACK_IMPORTED_MODULE_3__hotkeyParser__["a" /* comboMatches */])(Object(__WEBPACK_IMPORTED_MODULE_3__hotkeyParser__["e" /* parseKeyCombo */])(SHOW_DIALOG_KEY), combo)) {
                if (Object(__WEBPACK_IMPORTED_MODULE_4__hotkeysDialog__["c" /* isHotkeysDialogShowing */])()) {
                    Object(__WEBPACK_IMPORTED_MODULE_4__hotkeysDialog__["b" /* hideHotkeysDialogAfterDelay */])();
                }
                else {
                    Object(__WEBPACK_IMPORTED_MODULE_4__hotkeysDialog__["e" /* showHotkeysDialog */])(_this.actions.map(function (action) { return action.props; }));
                }
                return;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_4__hotkeysDialog__["c" /* isHotkeysDialogShowing */])()) {
                return;
            }
            _this.invokeNamedCallbackIfComboRecognized(combo, "onKeyDown", e);
        };
        this.handleKeyUp = function (e) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4__hotkeysDialog__["c" /* isHotkeysDialogShowing */])()) {
                return;
            }
            _this.invokeNamedCallbackIfComboRecognized(Object(__WEBPACK_IMPORTED_MODULE_3__hotkeyParser__["b" /* getKeyCombo */])(e), "onKeyUp", e);
        };
    }
    HotkeysEvents.prototype.count = function () {
        return this.actions.length;
    };
    HotkeysEvents.prototype.clear = function () {
        this.actions = [];
    };
    HotkeysEvents.prototype.setHotkeys = function (props) {
        var _this = this;
        var actions = [];
        __WEBPACK_IMPORTED_MODULE_0_react__["Children"].forEach(props.children, function (child) {
            if (__WEBPACK_IMPORTED_MODULE_2__hotkey__["a" /* Hotkey */].isInstance(child) && _this.isScope(child.props)) {
                actions.push({
                    combo: Object(__WEBPACK_IMPORTED_MODULE_3__hotkeyParser__["e" /* parseKeyCombo */])(child.props.combo),
                    props: child.props,
                });
            }
        });
        this.actions = actions;
    };
    HotkeysEvents.prototype.invokeNamedCallbackIfComboRecognized = function (combo, callbackName, e) {
        var isTextInput = this.isTextInput(e);
        for (var _i = 0, _a = this.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            var shouldIgnore = (isTextInput && !action.props.allowInInput) || action.props.disabled;
            if (!shouldIgnore && Object(__WEBPACK_IMPORTED_MODULE_3__hotkeyParser__["a" /* comboMatches */])(action.combo, combo)) {
                if (action.props.preventDefault) {
                    e.preventDefault();
                }
                if (action.props.stopPropagation) {
                    // set a flag just for unit testing. not meant to be referenced in feature work.
                    e.isPropagationStopped = true;
                    e.stopPropagation();
                }
                Object(__WEBPACK_IMPORTED_MODULE_1__common_utils__["safeInvoke"])(action.props[callbackName], e);
            }
        }
    };
    HotkeysEvents.prototype.isScope = function (props) {
        return (props.global ? HotkeyScope.GLOBAL : HotkeyScope.LOCAL) === this.scope;
    };
    HotkeysEvents.prototype.isTextInput = function (e) {
        var elem = e.target;
        // we check these cases for unit testing, but this should not happen
        // during normal operation
        if (elem == null || elem.closest == null) {
            return false;
        }
        var editable = elem.closest("input, textarea, [contenteditable=true]");
        if (editable == null) {
            return false;
        }
        // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
        if (editable.tagName.toLowerCase() === "input") {
            var inputType = editable.type;
            if (inputType === "checkbox" || inputType === "radio") {
                return false;
            }
        }
        // don't let read-only fields prevent hotkey behavior
        if (editable.readOnly) {
            return false;
        }
        return true;
    };
    return HotkeysEvents;
}());



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuDividerFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




var MenuDivider = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MenuDivider, _super);
    function MenuDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuDivider.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title;
        if (title == null) {
            // simple divider
            return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["MENU_DIVIDER"], className) });
        }
        else {
            // section header with title
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("li", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["MENU_HEADER"], className) },
                __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("h6", null, title)));
        }
    };
    MenuDivider.displayName = "Blueprint.MenuDivider";
    return MenuDivider;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var MenuDividerFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](MenuDivider);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbarDivider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbarGroup__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbarHeading__ = __webpack_require__(47);
/**
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
var Navbar = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, htmlProps = __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __rest */](_a, ["children", "className"]);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["NAVBAR"], className) }, htmlProps), children));
    };
    Navbar.displayName = "Blueprint.Navbar";
    Navbar.Divider = __WEBPACK_IMPORTED_MODULE_5__navbarDivider__["a" /* NavbarDivider */];
    Navbar.Group = __WEBPACK_IMPORTED_MODULE_6__navbarGroup__["a" /* NavbarGroup */];
    Navbar.Heading = __WEBPACK_IMPORTED_MODULE_7__navbarHeading__["a" /* NavbarHeading */];
    Navbar = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Navbar);
    return Navbar;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonIdealState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NonIdealStateFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_icon__ = __webpack_require__(13);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var NonIdealState = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE"], this.props.className) },
            this.maybeRenderVisual(),
            this.maybeRenderTitle(),
            this.maybeRenderDescription(),
            this.maybeRenderAction()));
    };
    NonIdealState.prototype.maybeRenderAction = function () {
        if (this.props.action == null) {
            return undefined;
        }
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE_ACTION"] }, this.props.action);
    };
    NonIdealState.prototype.maybeRenderDescription = function () {
        if (this.props.description == null) {
            return undefined;
        }
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE_DESCRIPTION"] }, this.props.description);
    };
    NonIdealState.prototype.maybeRenderTitle = function () {
        if (this.props.title == null) {
            return undefined;
        }
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("h4", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE_TITLE"] }, this.props.title);
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var visual = this.props.visual;
        if (visual == null) {
            return undefined;
        }
        else if (typeof visual === "string") {
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE_VISUAL"], __WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE_ICON"]) },
                __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__icon_icon__["a" /* Icon */], { iconName: visual, iconSize: "inherit" })));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_4__common_classes__["NON_IDEAL_STATE_VISUAL"] }, visual);
        }
    };
    NonIdealState = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], NonIdealState);
    return NonIdealState;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var NonIdealStateFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](NonIdealState);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var Text = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        _this.refHandlers = {
            text: function (overflowElement) { return (_this.textRef = overflowElement); },
        };
        return _this;
    }
    Text.prototype.componentDidMount = function () {
        this.update();
    };
    Text.prototype.componentDidUpdate = function () {
        this.update();
    };
    Text.prototype.render = function () {
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__((_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_4__common_classes__["TEXT_OVERFLOW_ELLIPSIS"]] = this.props.ellipsize,
            _a), this.props.className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes, ref: this.refHandlers.text, title: this.state.isContentOverflowing ? this.state.textContent : undefined }, this.props.children));
        var _a;
    };
    Text.prototype.update = function () {
        var newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    };
    Text = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Text);
    return Text;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SVGPopoverFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover__ = __webpack_require__(15);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var SVGPopover = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](SVGPopover, _super);
    function SVGPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGPopover.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__popover__["a" /* Popover */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGPopover;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var SVGPopoverFactory = __WEBPACK_IMPORTED_MODULE_1_react__["createFactory"](SVGPopover);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgressBarFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utils__ = __webpack_require__(5);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var ProgressBar = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, className = _a.className, intent = _a.intent, value = _a.value;
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__("pt-progress-bar", __WEBPACK_IMPORTED_MODULE_4__common_classes__["intentClass"](intent), className);
        // don't set width if value is null (rely on default CSS value)
        var width = value == null ? null : 100 * Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["clamp"])(value, 0, 1) + "%";
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "pt-progress-meter", style: { width: width } })));
    };
    ProgressBar.displayName = "Blueprint.ProgressBar";
    ProgressBar = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], ProgressBar);
    return ProgressBar;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var ProgressBarFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](ProgressBar);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SVGTooltipFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip__ = __webpack_require__(24);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var SVGTooltip = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](SVGTooltip, _super);
    function SVGTooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGTooltip.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__tooltip__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({ rootElementTag: "g" }, this.props), this.props.children));
    };
    return SVGTooltip;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var SVGTooltipFactory = __WEBPACK_IMPORTED_MODULE_1_react__["createFactory"](SVGTooltip);


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RangeSliderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coreSlider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__handle__ = __webpack_require__(49);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */








var RangeIndex;
(function (RangeIndex) {
    RangeIndex[RangeIndex["START"] = 0] = "START";
    RangeIndex[RangeIndex["END"] = 1] = "END";
})(RangeIndex || (RangeIndex = {}));
var RangeSlider = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RangeSlider, _super);
    function RangeSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["SLIDER"], __WEBPACK_IMPORTED_MODULE_3__common_classes__["RANGE_SLIDER"]);
        _this.handles = [];
        _this.addHandleRef = function (ref) {
            if (ref != null) {
                _this.handles.push(ref);
            }
        };
        _this.getHandlerForIndex = function (index, callback) { return function (newValue) {
            if (Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["isFunction"])(callback)) {
                var _a = _this.props.value, startValue = _a[0], endValue = _a[1];
                if (index === RangeIndex.START) {
                    callback([Math.min(newValue, endValue), endValue]);
                }
                else {
                    callback([startValue, Math.max(newValue, startValue)]);
                }
            }
        }; };
        _this.handleChange = function (newValue) {
            var _a = _this.props.value, startValue = _a[0], endValue = _a[1];
            var newStartValue = newValue[0], newEndValue = newValue[1];
            if ((startValue !== newStartValue || endValue !== newEndValue) && Object(__WEBPACK_IMPORTED_MODULE_5__common_utils__["isFunction"])(_this.props.onChange)) {
                _this.props.onChange(newValue);
            }
        };
        return _this;
    }
    RangeSlider.prototype.renderFill = function () {
        var tickSize = this.state.tickSize;
        var _a = this.props.value, startValue = _a[0], endValue = _a[1];
        if (startValue === endValue) {
            return undefined;
        }
        // expand by 1px in each direction so it sits under the handle border
        var offset = Math.round((startValue - this.props.min) * tickSize) - 1;
        var size = Math.round((endValue - startValue) * tickSize) + 2;
        if (size < 0) {
            offset += size;
            size = Math.abs(size);
        }
        var style = this.props.vertical
            ? { bottom: offset, height: size }
            : { left: offset, width: size };
        return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_3__common_classes__["SLIDER"] + "-progress", style: style });
    };
    RangeSlider.prototype.renderHandles = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, max = _a.max, min = _a.min, onRelease = _a.onRelease, stepSize = _a.stepSize, value = _a.value, vertical = _a.vertical;
        return value.map(function (val, index) { return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__handle__["a" /* Handle */], { disabled: disabled, key: index, label: _this.formatLabel(val), max: max, min: min, onChange: _this.getHandlerForIndex(index, _this.handleChange), onRelease: _this.getHandlerForIndex(index, onRelease), ref: _this.addHandleRef, stepSize: stepSize, tickSize: _this.state.tickSize, value: val, vertical: vertical })); });
    };
    RangeSlider.prototype.handleTrackClick = function (event) {
        var _this = this;
        this.handles
            .reduce(function (min, handle) {
            // find closest handle to the mouse position
            var offset = handle.mouseEventClientOffset(event);
            var value = handle.clientToValue(offset);
            return _this.nearestHandleForValue(value, min, handle);
        })
            .beginHandleMovement(event);
    };
    RangeSlider.prototype.handleTrackTouch = function (event) {
        var _this = this;
        this.handles
            .reduce(function (min, handle) {
            // find closest handle to the touch position
            var value = handle.clientToValue(handle.touchEventClientOffset(event));
            return _this.nearestHandleForValue(value, min, handle);
        })
            .beginHandleTouchMovement(event);
    };
    RangeSlider.prototype.nearestHandleForValue = function (value, firstHandle, secondHandle) {
        var firstHandleValue = firstHandle.props.value;
        var firstDistance = Math.abs(value - firstHandleValue);
        var secondDistance = Math.abs(value - secondHandle.props.value);
        if (firstDistance < secondDistance) {
            return firstHandle;
        }
        else if (secondDistance < firstDistance) {
            return secondHandle;
        }
        else {
            // if the values are equal, return the handle that is *able* to move
            // in the necessary direction.
            return value < firstHandleValue ? firstHandle : secondHandle;
        }
    };
    RangeSlider.prototype.validateProps = function (props) {
        var value = props.value;
        if (value == null || value[RangeIndex.START] == null || value[RangeIndex.END] == null) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_4__common_errors__["B" /* RANGESLIDER_NULL_VALUE */]);
        }
    };
    RangeSlider.defaultProps = {
        disabled: false,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: [0, 10],
        vertical: false,
    };
    RangeSlider.displayName = "Blueprint.RangeSlider";
    return RangeSlider;
}(__WEBPACK_IMPORTED_MODULE_6__coreSlider__["a" /* CoreSlider */]));

var RangeSliderFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](RangeSlider);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SliderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coreSlider__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handle__ = __webpack_require__(49);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var Slider = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:enable member-ordering
        _this.handleHandleRef = function (ref) {
            _this.handle = ref;
        };
        return _this;
    }
    Slider.prototype.renderFill = function () {
        var tickSize = this.state.tickSize;
        var initialValue = Object(__WEBPACK_IMPORTED_MODULE_3__common_utils__["clamp"])(this.props.initialValue, this.props.min, this.props.max);
        var offset = Math.round((initialValue - this.props.min) * tickSize);
        var size = Math.round((this.props.value - initialValue) * tickSize);
        if (size < 0) {
            offset += size;
            size = Math.abs(size);
        }
        var style = this.props.vertical
            ? { bottom: offset, height: size }
            : { left: offset, width: size };
        return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_2__common_classes__["SLIDER"] + "-progress", style: style });
    };
    Slider.prototype.renderHandles = function () {
        // make sure to *not* pass this.props.className to handle
        return (__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__handle__["a" /* Handle */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.props, this.state, { className: "", label: this.formatLabel(this.props.value), ref: this.handleHandleRef })));
    };
    Slider.prototype.handleTrackClick = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleMovement(event);
        }
    };
    Slider.prototype.handleTrackTouch = function (event) {
        if (this.handle != null) {
            this.handle.beginHandleTouchMovement(event);
        }
    };
    Slider.defaultProps = {
        disabled: false,
        initialValue: 0,
        labelStepSize: 1,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        value: 0,
        vertical: false,
    };
    return Slider;
}(__WEBPACK_IMPORTED_MODULE_4__coreSlider__["a" /* CoreSlider */]));

var SliderFactory = __WEBPACK_IMPORTED_MODULE_1_react__["createFactory"](Slider);


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVGSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SVGSpinnerFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner__ = __webpack_require__(25);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */




// import * to avoid "cannot be named" error on factory

var SVGSpinner = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](SVGSpinner, _super);
    function SVGSpinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SVGSpinner.prototype.renderContainer = function (classes, content) {
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("g", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["SVG_SPINNER"], classes) },
            __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("g", { className: "pt-svg-spinner-transform-group" }, content)));
    };
    return SVGSpinner;
}(__WEBPACK_IMPORTED_MODULE_4__spinner__["a" /* Spinner */]));

var SVGSpinnerFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](SVGSpinner);


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabsFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tab__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabList__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabPanel__ = __webpack_require__(52);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */













var TAB_CSS_SELECTOR = "li[role=tab]";
var Tabs = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tabs, _super);
    function Tabs(props, context) {
        var _this = _super.call(this, props, context) || this;
        // state is initialized in the constructor but getStateFromProps needs state defined
        _this.state = {};
        _this.panelIds = [];
        _this.tabIds = [];
        _this.handleClick = function (e) {
            _this.handleTabSelectingEvent(e);
        };
        _this.handleKeyPress = function (e) {
            var insideTab = e.target.closest("." + __WEBPACK_IMPORTED_MODULE_6__common_classes__["TAB"]) != null;
            if (insideTab && (e.which === __WEBPACK_IMPORTED_MODULE_8__common_keys__["SPACE"] || e.which === __WEBPACK_IMPORTED_MODULE_8__common_keys__["ENTER"])) {
                e.preventDefault();
                _this.handleTabSelectingEvent(e);
            }
        };
        _this.handleKeyDown = function (e) {
            // don't want to handle keyDown events inside a tab panel
            var insideTabList = e.target.closest("." + __WEBPACK_IMPORTED_MODULE_6__common_classes__["TAB_LIST"]) != null;
            if (!insideTabList) {
                return;
            }
            var focusedTabIndex = _this.getFocusedTabIndex();
            if (focusedTabIndex === -1) {
                return;
            }
            if (e.which === __WEBPACK_IMPORTED_MODULE_8__common_keys__["ARROW_LEFT"]) {
                e.preventDefault();
                // find previous tab that isn't disabled
                var newTabIndex = focusedTabIndex - 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== -1) {
                    newTabIndex--;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== -1) {
                    _this.focusTab(newTabIndex);
                }
            }
            else if (e.which === __WEBPACK_IMPORTED_MODULE_8__common_keys__["ARROW_RIGHT"]) {
                e.preventDefault();
                // find next tab that isn't disabled
                var tabsCount = _this.getTabsCount();
                var newTabIndex = focusedTabIndex + 1;
                var tabIsDisabled = _this.isTabDisabled(newTabIndex);
                while (tabIsDisabled && newTabIndex !== tabsCount) {
                    newTabIndex++;
                    tabIsDisabled = _this.isTabDisabled(newTabIndex);
                }
                if (newTabIndex !== tabsCount) {
                    _this.focusTab(newTabIndex);
                }
            }
        };
        _this.handleTabSelectingEvent = function (e) {
            var tabElement = e.target.closest(TAB_CSS_SELECTOR);
            // select only if Tab is one of us and is enabled
            if (tabElement != null &&
                _this.tabIds.indexOf(tabElement.id) >= 0 &&
                tabElement.getAttribute("aria-disabled") !== "true") {
                var index = tabElement.parentElement.queryAll(TAB_CSS_SELECTOR).indexOf(tabElement);
                _this.setSelectedTabIndex(index);
            }
        };
        _this.state = _this.getStateFromProps(_this.props);
        if (!__WEBPACK_IMPORTED_MODULE_9__common_utils__["isNodeEnv"]("production")) {
            console.warn(__WEBPACK_IMPORTED_MODULE_7__common_errors__["G" /* TABS_WARN_DEPRECATED */]);
        }
        return _this;
    }
    Tabs.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_6__common_classes__["TABS"], this.props.className), onClick: this.handleClick, onKeyPress: this.handleKeyPress, onKeyDown: this.handleKeyDown }, this.getChildren()));
    };
    Tabs.prototype.componentWillReceiveProps = function (newProps) {
        var newState = this.getStateFromProps(newProps);
        this.setState(newState);
    };
    Tabs.prototype.componentDidMount = function () {
        var _this = this;
        var selectedTab = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.refs["tabs-" + this.state.selectedTabIndex]);
        this.setTimeout(function () { return _this.moveIndicator(selectedTab); });
    };
    Tabs.prototype.componentDidUpdate = function (_, prevState) {
        var _this = this;
        var newIndex = this.state.selectedTabIndex;
        if (newIndex !== prevState.selectedTabIndex) {
            var tabElement_1 = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.refs["tabs-" + newIndex]);
            // need to measure on the next frame in case the Tab children simultaneously change
            this.setTimeout(function () { return _this.moveIndicator(tabElement_1); });
        }
    };
    Tabs.prototype.validateProps = function (props) {
        if (__WEBPACK_IMPORTED_MODULE_3_react__["Children"].count(props.children) > 0) {
            var child = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].toArray(props.children)[0];
            if (child != null && child.type !== __WEBPACK_IMPORTED_MODULE_11__tabList__["a" /* TabList */]) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_7__common_errors__["E" /* TABS_FIRST_CHILD */]);
            }
            if (this.getTabsCount() !== this.getPanelsCount()) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_7__common_errors__["F" /* TABS_MISMATCH */]);
            }
        }
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveIndicator = function (_a) {
        var clientHeight = _a.clientHeight, clientWidth = _a.clientWidth, offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop;
        var indicatorWrapperStyle = {
            height: clientHeight,
            transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
            width: clientWidth,
        };
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /**
     * Most of the component logic lives here. We clone the children provided by the user to set up refs,
     * accessibility attributes, and selection props correctly.
     */
    Tabs.prototype.getChildren = function () {
        var _this = this;
        for (var unassignedTabs = this.getTabsCount() - this.tabIds.length; unassignedTabs > 0; unassignedTabs--) {
            this.tabIds.push(generateTabId());
            this.panelIds.push(generatePanelId());
        }
        var childIndex = 0;
        return __WEBPACK_IMPORTED_MODULE_3_react__["Children"].map(this.props.children, function (child) {
            var result;
            // can be null if conditionally rendering TabList / TabPanel
            if (child == null) {
                return null;
            }
            if (childIndex === 0) {
                // clone TabList / Tab elements
                result = _this.cloneTabList(child);
            }
            else {
                var tabPanelIndex = childIndex - 1;
                var shouldRenderTabPanel = _this.state.selectedTabIndex === tabPanelIndex;
                result = shouldRenderTabPanel ? _this.cloneTabPanel(child, tabPanelIndex) : null;
            }
            childIndex++;
            return result;
        });
    };
    Tabs.prototype.cloneTabList = function (child) {
        var _this = this;
        var tabIndex = 0;
        var tabs = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].map(child.props.children, function (tab) {
            // can be null if conditionally rendering Tab
            if (tab == null) {
                return null;
            }
            var clonedTab = __WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"](tab, {
                id: _this.tabIds[tabIndex],
                isSelected: _this.state.selectedTabIndex === tabIndex,
                panelId: _this.panelIds[tabIndex],
                ref: "tabs-" + tabIndex,
            });
            tabIndex++;
            return clonedTab;
        });
        // tslint:disable-next-line no-object-literal-type-assertion
        return __WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"](child, {
            children: tabs,
            indicatorWrapperStyle: this.state.indicatorWrapperStyle,
            ref: "tablist",
        });
    };
    Tabs.prototype.cloneTabPanel = function (child, tabIndex) {
        return __WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"](child, {
            id: this.panelIds[tabIndex],
            isSelected: this.state.selectedTabIndex === tabIndex,
            ref: "panels-" + tabIndex,
            tabId: this.tabIds[tabIndex],
        });
    };
    Tabs.prototype.focusTab = function (index) {
        var ref = "tabs-" + index;
        var tab = Object(__WEBPACK_IMPORTED_MODULE_4_react_dom__["findDOMNode"])(this.refs[ref]);
        tab.focus();
    };
    Tabs.prototype.getFocusedTabIndex = function () {
        var focusedElement = document.activeElement;
        if (focusedElement != null && focusedElement.classList.contains(__WEBPACK_IMPORTED_MODULE_6__common_classes__["TAB"])) {
            var tabId = focusedElement.id;
            return this.tabIds.indexOf(tabId);
        }
        return -1;
    };
    Tabs.prototype.getTabs = function () {
        if (this.props.children == null) {
            return [];
        }
        var tabs = [];
        if (__WEBPACK_IMPORTED_MODULE_3_react__["Children"].count(this.props.children) > 0) {
            var firstChild = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].toArray(this.props.children)[0];
            if (firstChild != null) {
                __WEBPACK_IMPORTED_MODULE_3_react__["Children"].forEach(firstChild.props.children, function (tabListChild) {
                    if (tabListChild.type === __WEBPACK_IMPORTED_MODULE_10__tab__["a" /* Tab */]) {
                        tabs.push(tabListChild);
                    }
                });
            }
        }
        return tabs;
    };
    Tabs.prototype.getTabsCount = function () {
        return this.getTabs().length;
    };
    Tabs.prototype.getPanelsCount = function () {
        if (this.props.children == null) {
            return 0;
        }
        var index = 0;
        var panelCount = 0;
        __WEBPACK_IMPORTED_MODULE_3_react__["Children"].forEach(this.props.children, function (child) {
            if (child.type === __WEBPACK_IMPORTED_MODULE_12__tabPanel__["a" /* TabPanel */]) {
                panelCount++;
            }
            index++;
        });
        return panelCount;
    };
    Tabs.prototype.getStateFromProps = function (props) {
        var selectedTabIndex = props.selectedTabIndex, initialSelectedTabIndex = props.initialSelectedTabIndex;
        if (this.isValidTabIndex(selectedTabIndex)) {
            return { selectedTabIndex: selectedTabIndex };
        }
        else if (this.isValidTabIndex(initialSelectedTabIndex) && this.state.selectedTabIndex == null) {
            return { selectedTabIndex: initialSelectedTabIndex };
        }
        else {
            return this.state;
        }
    };
    Tabs.prototype.isTabDisabled = function (index) {
        var tab = this.getTabs()[index];
        return tab != null && tab.props.isDisabled;
    };
    Tabs.prototype.isValidTabIndex = function (index) {
        return index != null && index >= 0 && index < this.getTabsCount();
    };
    /**
     * Updates the component's state if uncontrolled and calls onChange.
     */
    Tabs.prototype.setSelectedTabIndex = function (index) {
        if (index === this.state.selectedTabIndex || !this.isValidTabIndex(index)) {
            return;
        }
        var prevSelectedIndex = this.state.selectedTabIndex;
        if (this.props.selectedTabIndex == null) {
            this.setState({
                selectedTabIndex: index,
            });
        }
        if (__WEBPACK_IMPORTED_MODULE_9__common_utils__["isFunction"](this.props.onChange)) {
            this.props.onChange(index, prevSelectedIndex);
        }
    };
    Tabs.defaultProps = {
        initialSelectedTabIndex: 0,
    };
    Tabs.displayName = "Blueprint.Tabs";
    Tabs = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Tabs);
    return Tabs;
}(__WEBPACK_IMPORTED_MODULE_5__common_abstractComponent__["a" /* AbstractComponent */]));

var globalTabCount = 0;
function generateTabId() {
    return "pt-tab-" + globalTabCount++;
}
var globalPanelCount = 0;
function generatePanelId() {
    return "pt-tab-panel-" + globalPanelCount++;
}
var TabsFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Tabs);


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expander; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tabs2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tabs2Factory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tab2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabTitle__ = __webpack_require__(117);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */










var Expander = function () { return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "pt-flex-expander" }); };
var TAB_SELECTOR = "." + __WEBPACK_IMPORTED_MODULE_5__common_classes__["TAB"];
var Tabs2 = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tabs2, _super);
    function Tabs2(props) {
        var _this = _super.call(this, props) || this;
        _this.refHandlers = {
            tablist: function (tabElement) { return (_this.tablistElement = tabElement); },
        };
        _this.handleKeyDown = function (e) {
            var focusedElement = document.activeElement.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            var enabledTabElements = _this.getTabElements().filter(function (el) { return el.getAttribute("aria-disabled") === "false"; });
            var focusedIndex = enabledTabElements.indexOf(focusedElement);
            var direction = _this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                var length_1 = enabledTabElements.length;
                // auto-wrapping at 0 and `length`
                var nextFocusedIndex = (focusedIndex + direction + length_1) % length_1;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        _this.handleKeyPress = function (e) {
            var targetTabElement = e.target.closest(TAB_SELECTOR);
            if (targetTabElement != null && isEventKeyCode(e, __WEBPACK_IMPORTED_MODULE_6__common_keys__["SPACE"], __WEBPACK_IMPORTED_MODULE_6__common_keys__["ENTER"])) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        _this.handleTabClick = function (newTabId, event) {
            __WEBPACK_IMPORTED_MODULE_7__common_utils__["safeInvoke"](_this.props.onChange, newTabId, _this.state.selectedTabId, event);
            if (_this.props.selectedTabId === undefined) {
                _this.setState({ selectedTabId: newTabId });
            }
        };
        _this.renderTabPanel = function (tab) {
            var _a = tab.props, className = _a.className, panel = _a.panel, id = _a.id;
            if (panel === undefined) {
                return undefined;
            }
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { "aria-labelledby": Object(__WEBPACK_IMPORTED_MODULE_9__tabTitle__["c" /* generateTabTitleId */])(_this.props.id, id), "aria-hidden": id !== _this.state.selectedTabId, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["TAB_PANEL"], className), id: Object(__WEBPACK_IMPORTED_MODULE_9__tabTitle__["b" /* generateTabPanelId */])(_this.props.id, id), key: id, role: "tabpanel" }, panel));
        };
        _this.renderTabTitle = function (tab) {
            var id = tab.props.id;
            return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__tabTitle__["a" /* TabTitle */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, tab.props, { parentId: _this.props.id, onClick: _this.handleTabClick, selected: id === _this.state.selectedTabId })));
        };
        var selectedTabId = _this.getInitialSelectedTabId();
        _this.state = { selectedTabId: selectedTabId };
        return _this;
    }
    Tabs2.prototype.render = function () {
        var _this = this;
        var _a = this.state, indicatorWrapperStyle = _a.indicatorWrapperStyle, selectedTabId = _a.selectedTabId;
        var tabTitles = __WEBPACK_IMPORTED_MODULE_3_react__["Children"].map(this.props.children, function (child) { return (isTab(child) ? _this.renderTabTitle(child) : child); });
        var tabPanels = this.getTabChildren()
            .filter(this.props.renderActiveTabPanelOnly ? function (tab) { return tab.props.id === selectedTabId; } : function () { return true; })
            .map(this.renderTabPanel);
        var tabIndicator = this.props.animate ? (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "pt-tab-indicator-wrapper", style: indicatorWrapperStyle },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: "pt-tab-indicator" }))) : (undefined);
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["TABS"], (_b = {}, _b[__WEBPACK_IMPORTED_MODULE_5__common_classes__["VERTICAL"]] = this.props.vertical, _b), this.props.className);
        var tabListClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_5__common_classes__["TAB_LIST"], (_c = {},
            _c[__WEBPACK_IMPORTED_MODULE_5__common_classes__["LARGE"]] = this.props.large,
            _c));
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: classes },
            __WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { className: tabListClasses, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: this.refHandlers.tablist, role: "tablist" },
                tabIndicator,
                tabTitles),
            tabPanels));
        var _b, _c;
    };
    Tabs2.prototype.componentDidMount = function () {
        this.moveSelectionIndicator();
    };
    Tabs2.prototype.componentWillReceiveProps = function (_a) {
        var selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            this.setState({ selectedTabId: selectedTabId });
        }
    };
    Tabs2.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
        else if (prevState.selectedTabId != null) {
            // comparing React nodes is difficult to do with simple logic, so
            // shallowly compare just their props as a workaround.
            var didChildrenChange = !__WEBPACK_IMPORTED_MODULE_7__common_utils__["arraysEqual"](this.getTabChildrenProps(prevProps), this.getTabChildrenProps(), __WEBPACK_IMPORTED_MODULE_7__common_utils__["shallowCompareKeys"]);
            if (didChildrenChange) {
                this.moveSelectionIndicator();
            }
        }
    };
    Tabs2.prototype.getInitialSelectedTabId = function () {
        // NOTE: providing an unknown ID will hide the selection
        var _a = this.props, defaultSelectedTabId = _a.defaultSelectedTabId, selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            var tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props.id;
        }
    };
    Tabs2.prototype.getKeyCodeDirection = function (e) {
        if (isEventKeyCode(e, __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_LEFT"], __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_UP"])) {
            return -1;
        }
        else if (isEventKeyCode(e, __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_RIGHT"], __WEBPACK_IMPORTED_MODULE_6__common_keys__["ARROW_DOWN"])) {
            return 1;
        }
        return undefined;
    };
    Tabs2.prototype.getTabChildrenProps = function (props) {
        if (props === void 0) { props = this.props; }
        return this.getTabChildren(props).map(function (child) { return child.props; });
    };
    /** Filters children to only `<Tab>`s */
    Tabs2.prototype.getTabChildren = function (props) {
        if (props === void 0) { props = this.props; }
        return __WEBPACK_IMPORTED_MODULE_3_react__["Children"].toArray(props.children).filter(isTab);
    };
    /** Queries root HTML element for all `.pt-tab`s with optional filter selector */
    Tabs2.prototype.getTabElements = function (subselector) {
        if (subselector === void 0) { subselector = ""; }
        if (this.tablistElement == null) {
            return [];
        }
        return this.tablistElement.queryAll(TAB_SELECTOR + subselector);
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs2.prototype.moveSelectionIndicator = function () {
        if (this.tablistElement === undefined || !this.props.animate) {
            return;
        }
        var tabIdSelector = TAB_SELECTOR + "[data-tab-id=\"" + this.state.selectedTabId + "\"]";
        var selectedTabElement = this.tablistElement.query(tabIdSelector);
        var indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            var clientHeight = selectedTabElement.clientHeight, clientWidth = selectedTabElement.clientWidth, offsetLeft = selectedTabElement.offsetLeft, offsetTop = selectedTabElement.offsetTop;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
                width: clientWidth,
            };
        }
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /** Insert a `Tabs2.Expander` between any two children to right-align all subsequent children. */
    Tabs2.Expander = Expander;
    Tabs2.Tab = __WEBPACK_IMPORTED_MODULE_8__tab2__["a" /* Tab2 */];
    Tabs2.defaultProps = {
        animate: true,
        large: false,
        renderActiveTabPanelOnly: false,
        vertical: false,
    };
    Tabs2.displayName = "Blueprint.Tabs2";
    Tabs2 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Tabs2);
    return Tabs2;
}(__WEBPACK_IMPORTED_MODULE_4__common_abstractComponent__["a" /* AbstractComponent */]));

var Tabs2Factory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Tabs2);
function isEventKeyCode(e) {
    var codes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        codes[_i - 1] = arguments[_i];
    }
    return codes.indexOf(e.which) >= 0;
}
function isTab(child) {
    return child != null && child.type === __WEBPACK_IMPORTED_MODULE_8__tab2__["a" /* Tab2 */];
}


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTitle; });
/* harmony export (immutable) */ __webpack_exports__["b"] = generateTabPanelId;
/* harmony export (immutable) */ __webpack_exports__["c"] = generateTabTitleId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var TabTitle = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected;
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("div", { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_4__common_classes__["TAB"], this.props.className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", tabIndex: disabled ? undefined : 0 },
            this.props.title,
            this.props.children));
    };
    TabTitle.displayName = "Blueprint.TabTitle";
    TabTitle = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], TabTitle);
    return TabTitle;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

function generateTabPanelId(parentId, tabId) {
    return __WEBPACK_IMPORTED_MODULE_4__common_classes__["TAB_PANEL"] + "_" + parentId + "_" + tabId;
}
function generateTabTitleId(parentId, tabId) {
    return __WEBPACK_IMPORTED_MODULE_4__common_classes__["TAB"] + "-title_" + parentId + "_" + tabId;
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TagFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_props__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_classes__ = __webpack_require__(3);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */







var Tag = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRemoveClick = function (e) {
            __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].safeInvoke(_this.props.onRemove, e, _this.props);
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, active = _a.active, className = _a.className, intent = _a.intent, onRemove = _a.onRemove;
        var tagClasses = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_6__common_classes__["TAG"], __WEBPACK_IMPORTED_MODULE_6__common_classes__["intentClass"](intent), (_b = {},
            _b[__WEBPACK_IMPORTED_MODULE_6__common_classes__["TAG_REMOVABLE"]] = onRemove != null,
            _b[__WEBPACK_IMPORTED_MODULE_6__common_classes__["ACTIVE"]] = active,
            _b), className);
        var button = __WEBPACK_IMPORTED_MODULE_4__common__["i" /* Utils */].isFunction(onRemove) ? (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("button", { type: "button", className: __WEBPACK_IMPORTED_MODULE_6__common_classes__["TAG_REMOVE"], onClick: this.onRemoveClick })) : (undefined);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"]("span", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, Object(__WEBPACK_IMPORTED_MODULE_5__common_props__["a" /* removeNonHTMLProps */])(this.props), { className: tagClasses }),
            this.props.children,
            button));
        var _b;
    };
    Tag.displayName = "Blueprint.Tag";
    Tag = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Tag);
    return Tag;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]));

var TagFactory = __WEBPACK_IMPORTED_MODULE_3_react__["createFactory"](Tag);


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_abstractComponent__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_keys__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_position__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__overlay_overlay__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toast__ = __webpack_require__(54);
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */













var Toaster = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Toaster, _super);
    function Toaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toasts: [],
        };
        // auto-incrementing identifier for un-keyed toasts
        _this.toastId = 0;
        _this.getDismissHandler = function (toast) { return function (timeoutExpired) {
            _this.dismiss(toast.key, timeoutExpired);
        }; };
        _this.handleClose = function (e) {
            // NOTE that `e` isn't always a KeyboardEvent but that's the only type we care about
            if (e.which === __WEBPACK_IMPORTED_MODULE_8__common_keys__["ESCAPE"]) {
                _this.clear();
            }
        };
        return _this;
    }
    Toaster_1 = Toaster;
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    Toaster.create = function (props, container) {
        if (container === void 0) { container = document.body; }
        if (props != null && props.inline != null && !Object(__WEBPACK_IMPORTED_MODULE_10__common_utils__["isNodeEnv"])("production")) {
            console.warn(__WEBPACK_IMPORTED_MODULE_7__common_errors__["H" /* TOASTER_WARN_INLINE */]);
        }
        var containerElement = document.createElement("div");
        container.appendChild(containerElement);
        return __WEBPACK_IMPORTED_MODULE_4_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](Toaster_1, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, props, { inline: true })), containerElement);
    };
    Toaster.prototype.show = function (props) {
        var options = this.createToastOptions(props);
        this.setState(function (prevState) { return ({
            toasts: [options].concat(prevState.toasts),
        }); });
        return options.key;
    };
    Toaster.prototype.update = function (key, props) {
        var options = this.createToastOptions(props, key);
        this.setState(function (prevState) { return ({
            toasts: prevState.toasts.map(function (t) { return (t.key === key ? options : t); }),
        }); });
    };
    Toaster.prototype.dismiss = function (key, timeoutExpired) {
        if (timeoutExpired === void 0) { timeoutExpired = false; }
        this.setState(function (_a) {
            var toasts = _a.toasts;
            return ({
                toasts: toasts.filter(function (t) {
                    var matchesKey = t.key === key;
                    if (matchesKey) {
                        Object(__WEBPACK_IMPORTED_MODULE_10__common_utils__["safeInvoke"])(t.onDismiss, timeoutExpired);
                    }
                    return !matchesKey;
                }),
            });
        });
    };
    Toaster.prototype.clear = function () {
        this.state.toasts.map(function (t) { return Object(__WEBPACK_IMPORTED_MODULE_10__common_utils__["safeInvoke"])(t.onDismiss, false); });
        this.setState({ toasts: [] });
    };
    Toaster.prototype.getToasts = function () {
        return this.state.toasts;
    };
    Toaster.prototype.render = function () {
        // $pt-transition-duration * 3 + $pt-transition-duration / 2
        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_6__common_classes__["TOAST_CONTAINER"], this.getPositionClasses(), this.props.className);
        return (__WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11__overlay_overlay__["a" /* Overlay */], { autoFocus: this.props.autoFocus, canEscapeKeyClose: this.props.canEscapeKeyClear, canOutsideClickClose: false, className: classes, enforceFocus: false, hasBackdrop: false, inline: this.props.inline, isOpen: this.state.toasts.length > 0, onClose: this.handleClose, transitionDuration: 350, transitionName: "pt-toast" }, this.state.toasts.map(this.renderToast, this)));
    };
    Toaster.prototype.validateProps = function (props) {
        if (props.position === __WEBPACK_IMPORTED_MODULE_9__common_position__["a" /* Position */].LEFT || props.position === __WEBPACK_IMPORTED_MODULE_9__common_position__["a" /* Position */].RIGHT) {
            console.warn(__WEBPACK_IMPORTED_MODULE_7__common_errors__["I" /* TOASTER_WARN_LEFT_RIGHT */]);
        }
    };
    Toaster.prototype.renderToast = function (toast) {
        return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12__toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, toast, { onDismiss: this.getDismissHandler(toast) }));
    };
    Toaster.prototype.createToastOptions = function (props, key) {
        if (key === void 0) { key = "toast-" + this.toastId++; }
        // clone the object before adding the key prop to avoid leaking the mutation
        return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, props, { key: key });
    };
    Toaster.prototype.getPositionClasses = function () {
        var positions = __WEBPACK_IMPORTED_MODULE_9__common_position__["a" /* Position */][this.props.position].split("_");
        // NOTE that there is no -center class because that's the default style
        return positions.map(function (p) { return __WEBPACK_IMPORTED_MODULE_6__common_classes__["TOAST_CONTAINER"] + "-" + p.toLowerCase(); });
    };
    Toaster.defaultProps = {
        autoFocus: false,
        canEscapeKeyClear: true,
        inline: false,
        position: __WEBPACK_IMPORTED_MODULE_9__common_position__["a" /* Position */].TOP,
    };
    Toaster = Toaster_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __WEBPACK_IMPORTED_MODULE_2_pure_render_decorator__
    ], Toaster);
    return Toaster;
    var Toaster_1;
}(__WEBPACK_IMPORTED_MODULE_5__common_abstractComponent__["a" /* AbstractComponent */]));



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_classes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treeNode__ = __webpack_require__(55);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */






var Tree = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeRefs = {};
        _this.handleNodeCollapse = function (node, e) {
            _this.handlerHelper(_this.props.onNodeCollapse, node, e);
        };
        _this.handleNodeClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeClick, node, e);
        };
        _this.handleContentRef = function (node, element) {
            if (element != null) {
                _this.nodeRefs[node.props.id] = element;
            }
            else {
                // don't want our object to get bloated with old keys
                delete _this.nodeRefs[node.props.id];
            }
        };
        _this.handleNodeContextMenu = function (node, e) {
            _this.handlerHelper(_this.props.onNodeContextMenu, node, e);
        };
        _this.handleNodeDoubleClick = function (node, e) {
            _this.handlerHelper(_this.props.onNodeDoubleClick, node, e);
        };
        _this.handleNodeExpand = function (node, e) {
            _this.handlerHelper(_this.props.onNodeExpand, node, e);
        };
        return _this;
    }
    Tree.nodeFromPath = function (path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    };
    Tree.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE"], this.props.className) }, this.renderNodes(this.props.contents, [], __WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_ROOT"])));
    };
    /**
     * Returns the underlying HTML element of the `Tree` node with an id of `nodeId`.
     * This element does not contain the children of the node, only its label and controls.
     * If the node is not currently mounted, `undefined` is returned.
     */
    Tree.prototype.getNodeContentElement = function (nodeId) {
        return this.nodeRefs[nodeId];
    };
    Tree.prototype.renderNodes = function (treeNodes, currentPath, className) {
        var _this = this;
        if (treeNodes == null) {
            return null;
        }
        var nodeItems = treeNodes.map(function (node, i) {
            var elementPath = currentPath.concat(i);
            return (__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__treeNode__["a" /* TreeNode */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, node, { key: node.id, contentRef: _this.handleContentRef, depth: elementPath.length - 1, onClick: _this.handleNodeClick, onContextMenu: _this.handleNodeContextMenu, onCollapse: _this.handleNodeCollapse, onDoubleClick: _this.handleNodeDoubleClick, onExpand: _this.handleNodeExpand, path: elementPath }), _this.renderNodes(node.childNodes, elementPath)));
        });
        return __WEBPACK_IMPORTED_MODULE_2_react__["createElement"]("ul", { className: __WEBPACK_IMPORTED_MODULE_1_classnames__(__WEBPACK_IMPORTED_MODULE_3__common_classes__["TREE_NODE_LIST"], className) }, nodeItems);
    };
    Tree.prototype.handlerHelper = function (handlerFromProps, node, e) {
        if (Object(__WEBPACK_IMPORTED_MODULE_4__common_utils__["isFunction"])(handlerFromProps)) {
            var nodeData = Tree.nodeFromPath(node.props.path, this.props.contents);
            handlerFromProps(nodeData, node.props.path, e);
        }
    };
    return Tree;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]));

var TreeFactory = __WEBPACK_IMPORTED_MODULE_2_react__["createFactory"](Tree);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
__webpack_require__(122);
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'base-showcase' }, this.props.children));
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(123);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(125)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./BaseComponent.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./BaseComponent.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(124)(false);
// imports


// module
exports.push([module.i, ".base-showcase\r\n{\r\n    padding: 10px;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: auto;\r\n}\r\n\r\n#example .pt-tab-list\r\n{\r\npadding :20px;\r\n}", ""]);

// exports


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(126);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 126 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var InputTextarea_1 = __webpack_require__(128);
var InputTextareaShowcase = /** @class */ (function (_super) {
    __extends(InputTextareaShowcase, _super);
    function InputTextareaShowcase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTextareaShowcase.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h4", null, "Simple TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, null),
            React.createElement("h4", null, "Disabled TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, { disabled: true }),
            React.createElement("h4", null, "Simple TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, { value: 'asdfasdfa adsfasfasdf adfsasdfasdffasadsfasdf' }),
            React.createElement("h4", null, "Simple TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, { intent: 0 }),
            React.createElement("h4", null, "Simple TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, { intent: 1 }),
            React.createElement("h4", null, "Simple TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, { intent: 2 }),
            React.createElement("h4", null, "Simple TextArea"),
            React.createElement(InputTextarea_1.InputTextarea, { intent: 3 })));
    };
    return InputTextareaShowcase;
}(React.Component));
exports.InputTextareaShowcase = InputTextareaShowcase;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var core_1 = __webpack_require__(28);
var InputTextarea = /** @class */ (function (_super) {
    __extends(InputTextarea, _super);
    function InputTextarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTextarea.prototype.render = function () {
        return React.createElement(core_1.TextArea, __assign({}, this.props));
    };
    return InputTextarea;
}(React.Component));
exports.InputTextarea = InputTextarea;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map