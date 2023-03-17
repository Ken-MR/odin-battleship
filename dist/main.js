/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  font-family: serif;\n  background-color: #02166e;\n  color: rgb(209, 207, 207);\n}\n\n#game-screen {\n  height: 100%;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n   }\n}\n\n#header {\n  grid-row: 1 / 2;\n  text-align: center;\n  justify-content: center;\n  font-size: 50px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#game-display {\n  padding: 10px;\n  grid-row: 2 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#player-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  border: 5px solid white;\n  border-radius: 5px;\n}\n\ninput[type=submit] {\n  cursor: default;\n  padding: 10px;\n  font-size: 20px;\n}\n\ninput[type=text] {\n  border: none;\n  height: 30px;\n  padding: 5px;\n}\n\n#player-name-input::placeholder {\n  color: white;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#messages {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  text-align: center;\n  background-color: grey;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#game-waters {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.game-board {\n  height: 450px;\n  width: 450px;\n  padding: 10px;\n  border: 5px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fleet-waters {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); \n  grid-template-rows: repeat(10, 40px); \n}\n\n.game-space {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  width: 40px;\n  height: 40px;\n}\n\n.miss {\n  background-color: grey;\n}\n\n.ship-space {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,6BAA6B;;EAE7B,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE;MACI,UAAU;EACd;EACA;MACI,UAAU;GACb;AACH;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  font-family: serif;\n  background-color: #02166e;\n  color: rgb(209, 207, 207);\n}\n\n#game-screen {\n  height: 100%;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n   }\n}\n\n#header {\n  grid-row: 1 / 2;\n  text-align: center;\n  justify-content: center;\n  font-size: 50px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#game-display {\n  padding: 10px;\n  grid-row: 2 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#player-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  border: 5px solid white;\n  border-radius: 5px;\n}\n\ninput[type=submit] {\n  cursor: default;\n  padding: 10px;\n  font-size: 20px;\n}\n\ninput[type=text] {\n  border: none;\n  height: 30px;\n  padding: 5px;\n}\n\n#player-name-input::placeholder {\n  color: white;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#messages {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  text-align: center;\n  background-color: grey;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#game-waters {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.game-board {\n  height: 450px;\n  width: 450px;\n  padding: 10px;\n  border: 5px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fleet-waters {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); \n  grid-template-rows: repeat(10, 40px); \n}\n\n.game-space {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  width: 40px;\n  height: 40px;\n}\n\n.miss {\n  background-color: grey;\n}\n\n.ship-space {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((module) => {

module.exports = {};

class ShipCreator {
  constructor(name) {
    this.shipType = name;
    this.hits = 0;
    this.sunk = false;
    this.length = this.getLength(name);
  }

  getLength = (name) => {
    switch (name) {
      case 'destroyer': return 2;
      case 'submarine': return 3;
      case 'cruiser': return 3;
      case 'battleship': return 4;
      case 'carrier': return 5;
    }
  }

  hit = () => {
    this.hits++;
    this.isSunk();
  };

  isSunk = () => {
    if (this.hits === this.length) {
      this.sunk = true;
    }
  };
}
module.exports.ShipCreator = ShipCreator;



class Space {
  // create a new space and parameters to track whether it was hit, its coordinates,
  // whether a ship is located there, etc
  constructor(coordinates) {
    this.struck = null;
    this.occupied = null;
    this.space = coordinates;
  }
}

class GameBoard {
  constructor(name) {
    this.board = this.generateBoard();
    this.lost = false;
    this.name = name;
    this.fleet = [];
  }

  generateBoard() {
    // 2d array of board spaces
    let board = [[],[],[],[],[],[],[],[],[],[]];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board[i].push(new Space([i, j]));
      }
    }
    return board;
  }

  placeShip(shipType, direction, location) {
    // create ship object
    let ship = new ShipCreator(shipType);
    let shipLength = ship.length;

    let x = location[1];
    let y = location[0];

    let startPoint = (direction === 'y') ? y : x;

    // if ship is placed such that it falls out of bounds on the board or overlaps another ship then reject placement
    if ((startPoint + shipLength) > 7) {
      return false;
    }
    else if (direction === 'y') {
      // if any space along the ship's intended path is occupied reject placement
      for (let i = startPoint; i < (startPoint + shipLength); i++) {
        if (this.board[i][x].occupied) {
          return false;
        }
      }
    }
    else {
      // if any space along the ship's intended path is occupied reject placement
      for (let i = startPoint; i < (startPoint + shipLength); i++) {
        if (this.board[y][i].occupied) {
          return false;
        }
      }
    }


    // ship placement is valid so add it to the player's fleet and populate required spaces
    this.fleet.push(ship);
    if (direction === 'y') {
      for (let i = startPoint; i < (startPoint + shipLength); i++) {
        this.board[i][x].occupied = ship;
      }
    }    
    else {
      for (let i = startPoint; i < (startPoint + shipLength); i++) {
        this.board[y][i].occupied = ship;
      }
    }
  }

  receiveAttack (coordinates) {
    let x = coordinates[1];
    let y = coordinates[0];

    // records location of strike
    // the DOM code will prevent strikes on previously targeted spaces
    this.board[y][x].struck = true;

    // if the space is occupied the hit function is called on the ship
    if (this.board[y][x].occupied) {
      this.board[y][x].occupied.hit();
      // check if any ships in the fleet are still floating
      this.fleetStatus();
      // return object hit
      return this.board[y][x];
    }
    // return null for miss
    return null;
  }

  fleetStatus () {
    for (let i = 0; i < this.fleet.length; i++) {
      if (!this.fleet[i].sunk) {
        return false;
      }
    }
    this.lost = true;
    return true;
  }
}

module.exports.GameBoard = GameBoard;



class GamePlayer {
  constructor (name = "computer", type = "computer") {
    this.name = name;
    this.type = type;
    this.gameBoard = new GameBoard(name);
  }

  targetSpace (type, enemy, coordinates) {
    let hit = enemy.gameBoard.receiveAttack(coordinates);
    return hit;
  }

  computerTarget (enemy) {
    // calculate the location the computer will target
    let targeted;
    let x;
    let y;
    do {
      x = this.getCoordinates();
      y = this.getCoordinates();
      targeted = enemy.gameBoard.board[y][x].struck;
    } while (targeted);
    return [y, x];
  }

  getCoordinates () {
    // generate a random value between 0 and 9; the coordinate range of the game board
    return Math.floor(Math.random() * 10);
  }
}

module.exports.GamePlayer = GamePlayer;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/page-control.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import styles


// import various game logic functions to help run the page
const gameLogic = __webpack_require__(/*! ../src/battleship.js */ "./src/battleship.js");

window.onload = () => {
  document.getElementById('player-entry').addEventListener("submit", () => {DOMControl.playerCreation()});
};

const DOMControl = (() => {
  // variables to track the two players in the game
  let humanPlayer;
  let computerPlayer;

  // hard coded array of ship coordinates for testing
  // will be replaced with player choice and random computer coordinates in final game build
  let shipPositions = [[0,0], [1,9], [7,1], [5,4], [3,2]];
  let shipDirection = ['x', 'y', 'x', 'x', 'y'];
  let shipTypes = ['battleship', 'carrier', 'cruiser', 'submarine', 'destroyer'];

  // tracker for computer activity
  let computerMove = false;

  // tracker for whether or not the game is over
  let gameOver = false;

  const playerCreation = () => {
    let playerName = playerNameInput.value;
    humanPlayer = new gameLogic.GamePlayer(playerName, 'human');
    computerPlayer = new gameLogic.GamePlayer();
    placeComputerShips();

    // temporary section of code to populate the computer player's board with ships
    // will be replaced by player choice in final game build
    for (let i = 0; i < 5; i++) {
      humanPlayer.gameBoard.placeShip(shipTypes[i], shipDirection[i], shipPositions[i]);
    }
    // temporary code ends

    displayGameBoards();
  };
  // this function will be changed to randomly place them when the human player is given the ability to choose locations
  const placeComputerShips = () => {
    for (let i = 0; i < 5; i++) {
      computerPlayer.gameBoard.placeShip(shipTypes[i], shipDirection[i], shipPositions[i]);
    }
  };
  const displayGameBoards = () => {
    // clear the form now that the game objects exist
    let gameDisplay = document.getElementById('game-display')
    gameDisplay.innerHTML = '';

    let ocean = document.createElement('div');
    ocean.setAttribute('id', 'game-waters');

    let messageDisplay = document.createElement('div');
    messageDisplay.setAttribute('id', 'messages');
    messageDisplay.appendChild(document.createTextNode('Enemy fleet approaching!'));
    messageDisplay.appendChild(document.createElement('br'));
    messageDisplay.appendChild(document.createTextNode('Prepare for battle!'));

    gameDisplay.appendChild(messageDisplay);
    gameDisplay.appendChild(ocean);

    // create game boards to manipulate
    let playerBoard = document.createElement('div');
    playerBoard.setAttribute('id', 'player');
    playerBoard.classList.add('game-board');
    let computerBoard = document.createElement('div');
    computerBoard.setAttribute('id', 'computer');
    computerBoard.classList.add('game-board');

    let playerWaters = document.createElement('div');
    playerWaters.setAttribute('class', 'fleet-waters');
    let computerWaters = document.createElement('div');
    computerWaters.setAttribute('class', 'fleet-waters');

    playerBoard.appendChild(playerWaters);
    computerBoard.appendChild(computerWaters);

    ocean.appendChild(playerBoard);
    ocean.appendChild(computerBoard);

    // create event listeners for each space on the enemy game board to track if it was a hit or miss
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        // this class will be removed from enemy game board once ship positions are randomized
        if (computerPlayer.gameBoard.board[i][j].occupied) {
          space.classList.add('ship-space');
        }
        computerWaters.appendChild(space);
        space.addEventListener('click', () => {
          // if the computer is currently taking a turn the click event will not proceed
          if (computerMove === true) {
            return;
          }
          computerMove = true;
          playerTurn(i, j, space);

          setTimeout(() => {
            // if the game is over don't let the computer make a move
            if (!gameOver) {
              computerTurn();
              computerMove = false;
              // set to false; the computer made its move
            }
          }, 2000);
        });
      }
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        if (humanPlayer.gameBoard.board[i][j].occupied) {
          space.classList.add('ship-space');
        }
        playerWaters.appendChild(space);
      }
    }
  };

  const playerTurn = (y, x, space) => {
    let hit = humanPlayer.targetSpace(humanPlayer.type, computerPlayer, [y, x]);
    if (hit) {
      space.classList.add('hit');
      // send message on game state
      gameMessage(hit, humanPlayer);
      return hit;
    }
    else {
      space.classList.add('miss');
      gameMessage(hit, humanPlayer);
      return 'miss';
    }
  };

  const computerTurn = () => {
    let coordinates = computerPlayer.computerTarget(humanPlayer);
    let hit = computerPlayer.targetSpace(computerPlayer.type, humanPlayer, coordinates);
    let location = (coordinates[0] * 10) + coordinates[1];
    let spaces = document.querySelector('.fleet-waters').children;
    let space = spaces[location];

    if (hit) {
      space.classList.add('hit');
      gameMessage(hit, computerPlayer);
    }
    else {
      space.classList.add('miss');
      gameMessage(hit, computerPlayer);
    }
  };

  const gameMessage = (target, player) => {
    let messageDisplay = document.getElementById('messages');
    messageDisplay.innerHTML = '';

    if ((player.type === 'human') && (target)) {
      messageDisplay.appendChild(document.createTextNode(`Direct hit, Captain ${player.name}!`));
      console.log(`Direct hit, Captain ${player.name}!`)
      if (target.occupied.sunk) {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`You sunk the enemy's ${target.occupied.shipType}!`));
        console.log(`You sunk the enemy's ${target.occupied.shipType}!`);
      }
      else {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`You struck the enemy's ${target.occupied.shipType}!`));
        console.log(`You struck the enemy's ${target.occupied.shipType}!`);
      }
    }
    else if (player.type === 'human') {
      messageDisplay.appendChild(document.createTextNode("A miss! But we'll get them yet!"));
      console.log("A miss! But we'll get them yet!");
    }
    else if ((player.type === 'computer') && (target)) {
      messageDisplay.appendChild(document.createTextNode("Blast!"));
      console.log(`Blast!`);
      if (target.occupied.sunk) {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`The enemy just sunk our ${target.occupied.shipType}!`));
        console.log(`The enemy just sunk our ${target.occupied.shipType}!`);
      }
      else {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`The enemy's hit our ${target.occupied.shipType}!`));
        console.log(`The enemy's hit our ${target.occupied.shipType}!`);
      }
    }
    else {
      messageDisplay.appendChild(document.createTextNode("A miss! We're still in this!"));
      console.log("A miss! We're still in this!");
    }

    if (humanPlayer.gameBoard.lost) {
      gameEnd('human');
    }
    else if (computerPlayer.gameBoard.lost) {
      gameEnd('computer');
    }
  };

  const gameEnd = (type) => {
    gameOver = true;

    if (type === 'human') {
      console.log("You lost!");
    }
    else {
      console.log("You won!");
    }
  };
  return { playerCreation };
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wYWdlLWNvbnRyb2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxNjZlO1xcbiAgY29sb3I6IHJnYigyMDksIDIwNywgMjA3KTtcXG59XFxuXFxuI2dhbWUtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnI7XFxuXFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgfVxcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1kaXNwbGF5IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBncmlkLXJvdzogMiAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3BsYXllci1lbnRyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcGxheWVyLW5hbWUtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNtZXNzYWdlcyB7XFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jZ2FtZS13YXRlcnMge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gZWFzZSAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsZWV0LXdhdGVycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpOyBcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTsgXFxufVxcblxcbi5nYW1lLXNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5zaGlwLXNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO01BQ0ksVUFBVTtFQUNkO0VBQ0E7TUFDSSxVQUFVO0dBQ2I7QUFDSDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjE2NmU7XFxuICBjb2xvcjogcmdiKDIwOSwgMjA3LCAyMDcpO1xcbn1cXG5cXG4jZ2FtZS1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmcjtcXG5cXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICB9XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLWRpc3BsYXkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdyaWQtcm93OiAyIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcGxheWVyLWVudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwbGF5ZXItbmFtZS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI21lc3NhZ2VzIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNnYW1lLXdhdGVycyB7XFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxlZXQtd2F0ZXJzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7IFxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQwcHgpOyBcXG59XFxuXFxuLmdhbWUtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnNoaXAtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5jbGFzcyBTaGlwQ3JlYXRvciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLnNoaXBUeXBlID0gbmFtZTtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgobmFtZSk7XG4gIH1cblxuICBnZXRMZW5ndGggPSAobmFtZSkgPT4ge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnZGVzdHJveWVyJzogcmV0dXJuIDI7XG4gICAgICBjYXNlICdzdWJtYXJpbmUnOiByZXR1cm4gMztcbiAgICAgIGNhc2UgJ2NydWlzZXInOiByZXR1cm4gMztcbiAgICAgIGNhc2UgJ2JhdHRsZXNoaXAnOiByZXR1cm4gNDtcbiAgICAgIGNhc2UgJ2NhcnJpZXInOiByZXR1cm4gNTtcbiAgICB9XG4gIH1cblxuICBoaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5oaXRzKys7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfTtcblxuICBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMuU2hpcENyZWF0b3IgPSBTaGlwQ3JlYXRvcjtcblxuXG5cbmNsYXNzIFNwYWNlIHtcbiAgLy8gY3JlYXRlIGEgbmV3IHNwYWNlIGFuZCBwYXJhbWV0ZXJzIHRvIHRyYWNrIHdoZXRoZXIgaXQgd2FzIGhpdCwgaXRzIGNvb3JkaW5hdGVzLFxuICAvLyB3aGV0aGVyIGEgc2hpcCBpcyBsb2NhdGVkIHRoZXJlLCBldGNcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnN0cnVjayA9IG51bGw7XG4gICAgdGhpcy5vY2N1cGllZCA9IG51bGw7XG4gICAgdGhpcy5zcGFjZSA9IGNvb3JkaW5hdGVzO1xuICB9XG59XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5nZW5lcmF0ZUJvYXJkKCk7XG4gICAgdGhpcy5sb3N0ID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmZsZWV0ID0gW107XG4gIH1cblxuICBnZW5lcmF0ZUJvYXJkKCkge1xuICAgIC8vIDJkIGFycmF5IG9mIGJvYXJkIHNwYWNlc1xuICAgIGxldCBib2FyZCA9IFtbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXSxbXV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaChuZXcgU3BhY2UoW2ksIGpdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwVHlwZSwgZGlyZWN0aW9uLCBsb2NhdGlvbikge1xuICAgIC8vIGNyZWF0ZSBzaGlwIG9iamVjdFxuICAgIGxldCBzaGlwID0gbmV3IFNoaXBDcmVhdG9yKHNoaXBUeXBlKTtcbiAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgbGV0IHggPSBsb2NhdGlvblsxXTtcbiAgICBsZXQgeSA9IGxvY2F0aW9uWzBdO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQgPSAoZGlyZWN0aW9uID09PSAneScpID8geSA6IHg7XG5cbiAgICAvLyBpZiBzaGlwIGlzIHBsYWNlZCBzdWNoIHRoYXQgaXQgZmFsbHMgb3V0IG9mIGJvdW5kcyBvbiB0aGUgYm9hcmQgb3Igb3ZlcmxhcHMgYW5vdGhlciBzaGlwIHRoZW4gcmVqZWN0IHBsYWNlbWVudFxuICAgIGlmICgoc3RhcnRQb2ludCArIHNoaXBMZW5ndGgpID4gNykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgLy8gaWYgYW55IHNwYWNlIGFsb25nIHRoZSBzaGlwJ3MgaW50ZW5kZWQgcGF0aCBpcyBvY2N1cGllZCByZWplY3QgcGxhY2VtZW50XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb2ludDsgaSA8IChzdGFydFBvaW50ICsgc2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVt4XS5vY2N1cGllZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIGFueSBzcGFjZSBhbG9uZyB0aGUgc2hpcCdzIGludGVuZGVkIHBhdGggaXMgb2NjdXBpZWQgcmVqZWN0IHBsYWNlbWVudFxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UG9pbnQ7IGkgPCAoc3RhcnRQb2ludCArIHNoaXBMZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1baV0ub2NjdXBpZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHNoaXAgcGxhY2VtZW50IGlzIHZhbGlkIHNvIGFkZCBpdCB0byB0aGUgcGxheWVyJ3MgZmxlZXQgYW5kIHBvcHVsYXRlIHJlcXVpcmVkIHNwYWNlc1xuICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvaW50OyBpIDwgKHN0YXJ0UG9pbnQgKyBzaGlwTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beF0ub2NjdXBpZWQgPSBzaGlwO1xuICAgICAgfVxuICAgIH0gICAgXG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb2ludDsgaSA8IChzdGFydFBvaW50ICsgc2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3ldW2ldLm9jY3VwaWVkID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrIChjb29yZGluYXRlcykge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgbGV0IHkgPSBjb29yZGluYXRlc1swXTtcblxuICAgIC8vIHJlY29yZHMgbG9jYXRpb24gb2Ygc3RyaWtlXG4gICAgLy8gdGhlIERPTSBjb2RlIHdpbGwgcHJldmVudCBzdHJpa2VzIG9uIHByZXZpb3VzbHkgdGFyZ2V0ZWQgc3BhY2VzXG4gICAgdGhpcy5ib2FyZFt5XVt4XS5zdHJ1Y2sgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHNwYWNlIGlzIG9jY3VwaWVkIHRoZSBoaXQgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHRoZSBzaGlwXG4gICAgaWYgKHRoaXMuYm9hcmRbeV1beF0ub2NjdXBpZWQpIHtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0ub2NjdXBpZWQuaGl0KCk7XG4gICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgaW4gdGhlIGZsZWV0IGFyZSBzdGlsbCBmbG9hdGluZ1xuICAgICAgdGhpcy5mbGVldFN0YXR1cygpO1xuICAgICAgLy8gcmV0dXJuIG9iamVjdCBoaXRcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkW3ldW3hdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbCBmb3IgbWlzc1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZmxlZXRTdGF0dXMgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmZsZWV0W2ldLnN1bmspIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvc3QgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLkdhbWVCb2FyZCA9IEdhbWVCb2FyZDtcblxuXG5cbmNsYXNzIEdhbWVQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAobmFtZSA9IFwiY29tcHV0ZXJcIiwgdHlwZSA9IFwiY29tcHV0ZXJcIikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQobmFtZSk7XG4gIH1cblxuICB0YXJnZXRTcGFjZSAodHlwZSwgZW5lbXksIGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGhpdCA9IGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gaGl0O1xuICB9XG5cbiAgY29tcHV0ZXJUYXJnZXQgKGVuZW15KSB7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBsb2NhdGlvbiB0aGUgY29tcHV0ZXIgd2lsbCB0YXJnZXRcbiAgICBsZXQgdGFyZ2V0ZWQ7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgZG8ge1xuICAgICAgeCA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHkgPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB0YXJnZXRlZCA9IGVuZW15LmdhbWVCb2FyZC5ib2FyZFt5XVt4XS5zdHJ1Y2s7XG4gICAgfSB3aGlsZSAodGFyZ2V0ZWQpO1xuICAgIHJldHVybiBbeSwgeF07XG4gIH1cblxuICBnZXRDb29yZGluYXRlcyAoKSB7XG4gICAgLy8gZ2VuZXJhdGUgYSByYW5kb20gdmFsdWUgYmV0d2VlbiAwIGFuZCA5OyB0aGUgY29vcmRpbmF0ZSByYW5nZSBvZiB0aGUgZ2FtZSBib2FyZFxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuR2FtZVBsYXllciA9IEdhbWVQbGF5ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gaW1wb3J0IHZhcmlvdXMgZ2FtZSBsb2dpYyBmdW5jdGlvbnMgdG8gaGVscCBydW4gdGhlIHBhZ2VcbmNvbnN0IGdhbWVMb2dpYyA9IHJlcXVpcmUoJy4uL3NyYy9iYXR0bGVzaGlwLmpzJyk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZW50cnknKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtET01Db250cm9sLnBsYXllckNyZWF0aW9uKCl9KTtcbn07XG5cbmNvbnN0IERPTUNvbnRyb2wgPSAoKCkgPT4ge1xuICAvLyB2YXJpYWJsZXMgdG8gdHJhY2sgdGhlIHR3byBwbGF5ZXJzIGluIHRoZSBnYW1lXG4gIGxldCBodW1hblBsYXllcjtcbiAgbGV0IGNvbXB1dGVyUGxheWVyO1xuXG4gIC8vIGhhcmQgY29kZWQgYXJyYXkgb2Ygc2hpcCBjb29yZGluYXRlcyBmb3IgdGVzdGluZ1xuICAvLyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggcGxheWVyIGNob2ljZSBhbmQgcmFuZG9tIGNvbXB1dGVyIGNvb3JkaW5hdGVzIGluIGZpbmFsIGdhbWUgYnVpbGRcbiAgbGV0IHNoaXBQb3NpdGlvbnMgPSBbWzAsMF0sIFsxLDldLCBbNywxXSwgWzUsNF0sIFszLDJdXTtcbiAgbGV0IHNoaXBEaXJlY3Rpb24gPSBbJ3gnLCAneScsICd4JywgJ3gnLCAneSddO1xuICBsZXQgc2hpcFR5cGVzID0gWydiYXR0bGVzaGlwJywgJ2NhcnJpZXInLCAnY3J1aXNlcicsICdzdWJtYXJpbmUnLCAnZGVzdHJveWVyJ107XG5cbiAgLy8gdHJhY2tlciBmb3IgY29tcHV0ZXIgYWN0aXZpdHlcbiAgbGV0IGNvbXB1dGVyTW92ZSA9IGZhbHNlO1xuXG4gIC8vIHRyYWNrZXIgZm9yIHdoZXRoZXIgb3Igbm90IHRoZSBnYW1lIGlzIG92ZXJcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgY29uc3QgcGxheWVyQ3JlYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG4gICAgaHVtYW5QbGF5ZXIgPSBuZXcgZ2FtZUxvZ2ljLkdhbWVQbGF5ZXIocGxheWVyTmFtZSwgJ2h1bWFuJyk7XG4gICAgY29tcHV0ZXJQbGF5ZXIgPSBuZXcgZ2FtZUxvZ2ljLkdhbWVQbGF5ZXIoKTtcbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKTtcblxuICAgIC8vIHRlbXBvcmFyeSBzZWN0aW9uIG9mIGNvZGUgdG8gcG9wdWxhdGUgdGhlIGNvbXB1dGVyIHBsYXllcidzIGJvYXJkIHdpdGggc2hpcHNcbiAgICAvLyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYXllciBjaG9pY2UgaW4gZmluYWwgZ2FtZSBidWlsZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBodW1hblBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlc1tpXSwgc2hpcERpcmVjdGlvbltpXSwgc2hpcFBvc2l0aW9uc1tpXSk7XG4gICAgfVxuICAgIC8vIHRlbXBvcmFyeSBjb2RlIGVuZHNcblxuICAgIGRpc3BsYXlHYW1lQm9hcmRzKCk7XG4gIH07XG4gIC8vIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjaGFuZ2VkIHRvIHJhbmRvbWx5IHBsYWNlIHRoZW0gd2hlbiB0aGUgaHVtYW4gcGxheWVyIGlzIGdpdmVuIHRoZSBhYmlsaXR5IHRvIGNob29zZSBsb2NhdGlvbnNcbiAgY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb21wdXRlclBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlc1tpXSwgc2hpcERpcmVjdGlvbltpXSwgc2hpcFBvc2l0aW9uc1tpXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkaXNwbGF5R2FtZUJvYXJkcyA9ICgpID0+IHtcbiAgICAvLyBjbGVhciB0aGUgZm9ybSBub3cgdGhhdCB0aGUgZ2FtZSBvYmplY3RzIGV4aXN0XG4gICAgbGV0IGdhbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZGlzcGxheScpXG4gICAgZ2FtZURpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBsZXQgb2NlYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvY2Vhbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbWUtd2F0ZXJzJyk7XG5cbiAgICBsZXQgbWVzc2FnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2VzJyk7XG4gICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0VuZW15IGZsZWV0IGFwcHJvYWNoaW5nIScpKTtcbiAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUHJlcGFyZSBmb3IgYmF0dGxlIScpKTtcblxuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKG1lc3NhZ2VEaXNwbGF5KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChvY2Vhbik7XG5cbiAgICAvLyBjcmVhdGUgZ2FtZSBib2FyZHMgdG8gbWFuaXB1bGF0ZVxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVyJyk7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1ib2FyZCcpO1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcHV0ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVyJyk7XG4gICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lLWJvYXJkJyk7XG5cbiAgICBsZXQgcGxheWVyV2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyV2F0ZXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxlZXQtd2F0ZXJzJyk7XG4gICAgbGV0IGNvbXB1dGVyV2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tcHV0ZXJXYXRlcnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmbGVldC13YXRlcnMnKTtcblxuICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHBsYXllcldhdGVycyk7XG4gICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjb21wdXRlcldhdGVycyk7XG5cbiAgICBvY2Vhbi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gICAgb2NlYW4uYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XG5cbiAgICAvLyBjcmVhdGUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHNwYWNlIG9uIHRoZSBlbmVteSBnYW1lIGJvYXJkIHRvIHRyYWNrIGlmIGl0IHdhcyBhIGhpdCBvciBtaXNzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3BhY2UnKTtcbiAgICAgICAgLy8gdGhpcyBjbGFzcyB3aWxsIGJlIHJlbW92ZWQgZnJvbSBlbmVteSBnYW1lIGJvYXJkIG9uY2Ugc2hpcCBwb3NpdGlvbnMgYXJlIHJhbmRvbWl6ZWRcbiAgICAgICAgaWYgKGNvbXB1dGVyUGxheWVyLmdhbWVCb2FyZC5ib2FyZFtpXVtqXS5vY2N1cGllZCkge1xuICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc3BhY2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlcldhdGVycy5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHRoZSBjb21wdXRlciBpcyBjdXJyZW50bHkgdGFraW5nIGEgdHVybiB0aGUgY2xpY2sgZXZlbnQgd2lsbCBub3QgcHJvY2VlZFxuICAgICAgICAgIGlmIChjb21wdXRlck1vdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHV0ZXJNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICBwbGF5ZXJUdXJuKGksIGosIHNwYWNlKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGdhbWUgaXMgb3ZlciBkb24ndCBsZXQgdGhlIGNvbXB1dGVyIG1ha2UgYSBtb3ZlXG4gICAgICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgICAgICAgICAgICBjb21wdXRlck1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gc2V0IHRvIGZhbHNlOyB0aGUgY29tcHV0ZXIgbWFkZSBpdHMgbW92ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcGFjZScpO1xuICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW2ldW2pdLm9jY3VwaWVkKSB7XG4gICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc2hpcC1zcGFjZScpO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllcldhdGVycy5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllclR1cm4gPSAoeSwgeCwgc3BhY2UpID0+IHtcbiAgICBsZXQgaGl0ID0gaHVtYW5QbGF5ZXIudGFyZ2V0U3BhY2UoaHVtYW5QbGF5ZXIudHlwZSwgY29tcHV0ZXJQbGF5ZXIsIFt5LCB4XSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAvLyBzZW5kIG1lc3NhZ2Ugb24gZ2FtZSBzdGF0ZVxuICAgICAgZ2FtZU1lc3NhZ2UoaGl0LCBodW1hblBsYXllcik7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIGdhbWVNZXNzYWdlKGhpdCwgaHVtYW5QbGF5ZXIpO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgIGxldCBjb29yZGluYXRlcyA9IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyVGFyZ2V0KGh1bWFuUGxheWVyKTtcbiAgICBsZXQgaGl0ID0gY29tcHV0ZXJQbGF5ZXIudGFyZ2V0U3BhY2UoY29tcHV0ZXJQbGF5ZXIudHlwZSwgaHVtYW5QbGF5ZXIsIGNvb3JkaW5hdGVzKTtcbiAgICBsZXQgbG9jYXRpb24gPSAoY29vcmRpbmF0ZXNbMF0gKiAxMCkgKyBjb29yZGluYXRlc1sxXTtcbiAgICBsZXQgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0LXdhdGVycycpLmNoaWxkcmVuO1xuICAgIGxldCBzcGFjZSA9IHNwYWNlc1tsb2NhdGlvbl07XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIGdhbWVNZXNzYWdlKGhpdCwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIGdhbWVNZXNzYWdlKGhpdCwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lTWVzc2FnZSA9ICh0YXJnZXQsIHBsYXllcikgPT4ge1xuICAgIGxldCBtZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlcycpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKChwbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJykgJiYgKHRhcmdldCkpIHtcbiAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBEaXJlY3QgaGl0LCBDYXB0YWluICR7cGxheWVyLm5hbWV9IWApKTtcbiAgICAgIGNvbnNvbGUubG9nKGBEaXJlY3QgaGl0LCBDYXB0YWluICR7cGxheWVyLm5hbWV9IWApXG4gICAgICBpZiAodGFyZ2V0Lm9jY3VwaWVkLnN1bmspIHtcbiAgICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBZb3Ugc3VuayB0aGUgZW5lbXkncyAke3RhcmdldC5vY2N1cGllZC5zaGlwVHlwZX0hYCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgWW91IHN1bmsgdGhlIGVuZW15J3MgJHt0YXJnZXQub2NjdXBpZWQuc2hpcFR5cGV9IWApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgWW91IHN0cnVjayB0aGUgZW5lbXkncyAke3RhcmdldC5vY2N1cGllZC5zaGlwVHlwZX0hYCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgWW91IHN0cnVjayB0aGUgZW5lbXkncyAke3RhcmdldC5vY2N1cGllZC5zaGlwVHlwZX0hYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBsYXllci50eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkEgbWlzcyEgQnV0IHdlJ2xsIGdldCB0aGVtIHlldCFcIikpO1xuICAgICAgY29uc29sZS5sb2coXCJBIG1pc3MhIEJ1dCB3ZSdsbCBnZXQgdGhlbSB5ZXQhXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmICgocGxheWVyLnR5cGUgPT09ICdjb21wdXRlcicpICYmICh0YXJnZXQpKSB7XG4gICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkJsYXN0IVwiKSk7XG4gICAgICBjb25zb2xlLmxvZyhgQmxhc3QhYCk7XG4gICAgICBpZiAodGFyZ2V0Lm9jY3VwaWVkLnN1bmspIHtcbiAgICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaGUgZW5lbXkganVzdCBzdW5rIG91ciAke3RhcmdldC5vY2N1cGllZC5zaGlwVHlwZX0hYCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGVuZW15IGp1c3Qgc3VuayBvdXIgJHt0YXJnZXQub2NjdXBpZWQuc2hpcFR5cGV9IWApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVGhlIGVuZW15J3MgaGl0IG91ciAke3RhcmdldC5vY2N1cGllZC5zaGlwVHlwZX0hYCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGVuZW15J3MgaGl0IG91ciAke3RhcmdldC5vY2N1cGllZC5zaGlwVHlwZX0hYCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBIG1pc3MhIFdlJ3JlIHN0aWxsIGluIHRoaXMhXCIpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQSBtaXNzISBXZSdyZSBzdGlsbCBpbiB0aGlzIVwiKTtcbiAgICB9XG5cbiAgICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmxvc3QpIHtcbiAgICAgIGdhbWVFbmQoJ2h1bWFuJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXB1dGVyUGxheWVyLmdhbWVCb2FyZC5sb3N0KSB7XG4gICAgICBnYW1lRW5kKCdjb21wdXRlcicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lRW5kID0gKHR5cGUpID0+IHtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgY29uc29sZS5sb2coXCJZb3UgbG9zdCFcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJZb3Ugd29uIVwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IHBsYXllckNyZWF0aW9uIH07XG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==