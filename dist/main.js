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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  font-family: serif;\n  background-color: #02166e;\n  color: rgb(209, 207, 207);\n}\n\n#game-screen {\n  height: 100%;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n   }\n}\n\n#header {\n  grid-row: 1 / 2;\n  text-align: center;\n  justify-content: center;\n  font-size: 50px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#game-display {\n  padding: 10px;\n  grid-row: 2 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#player-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  border: 5px solid white;\n  border-radius: 5px;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\ninput[type=submit] {\n  cursor: default;\n  padding: 10px;\n  font-size: 20px;\n}\n\ninput[type=text] {\n  border: none;\n  height: 30px;\n  padding: 5px;\n}\n\n#player-name-input::placeholder {\n  color: white;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#messages {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  text-align: center;\n  background-color: grey;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#game-waters {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.game-board {\n  height: 450px;\n  width: 450px;\n  padding: 10px;\n  gap: 10px;\n  border: 5px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.fleet-waters {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); \n  grid-template-rows: repeat(10, 40px); \n}\n\n.game-space {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  width: 40px;\n  height: 40px;\n}\n\n.miss {\n  background-color: grey;\n}\n\n.ship-space {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}\n\nbutton {\n  padding: 10px;\n  background-color: grey;\n  border-radius: 5px;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,6BAA6B;;EAE7B,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE;MACI,UAAU;EACd;EACA;MACI,UAAU;GACb;AACH;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,kBAAkB;;EAElB,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  font-family: serif;\n  background-color: #02166e;\n  color: rgb(209, 207, 207);\n}\n\n#game-screen {\n  height: 100%;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n   }\n}\n\n#header {\n  grid-row: 1 / 2;\n  text-align: center;\n  justify-content: center;\n  font-size: 50px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#game-display {\n  padding: 10px;\n  grid-row: 2 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#player-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  border: 5px solid white;\n  border-radius: 5px;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\ninput[type=submit] {\n  cursor: default;\n  padding: 10px;\n  font-size: 20px;\n}\n\ninput[type=text] {\n  border: none;\n  height: 30px;\n  padding: 5px;\n}\n\n#player-name-input::placeholder {\n  color: white;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#messages {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  text-align: center;\n  background-color: grey;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#game-waters {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.game-board {\n  height: 450px;\n  width: 450px;\n  padding: 10px;\n  gap: 10px;\n  border: 5px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.fleet-waters {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); \n  grid-template-rows: repeat(10, 40px); \n}\n\n.game-space {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  width: 40px;\n  height: 40px;\n}\n\n.miss {\n  background-color: grey;\n}\n\n.ship-space {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}\n\nbutton {\n  padding: 10px;\n  background-color: grey;\n  border-radius: 5px;\n  border: none;\n}"],"sourceRoot":""}]);
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
    if ((startPoint + shipLength) > 10) {
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
    return true;
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

  // tracker for how many player ships have been placed
  let currentShip = 0;
  let shipLengths = [4, 5, 3, 3, 2];

  // tracker for computer activity
  let computerMove = false;

  // tracker for whether or not the game is over
  let gameOver = false;

  const playerCreation = () => {
    let playerName = playerNameInput.value;
    humanPlayer = new gameLogic.GamePlayer(playerName, 'human');
    computerPlayer = new gameLogic.GamePlayer();

    placeComputerShips();

    placePlayerShips();
  };

  const placePlayerShips = () => {
    // clear the form now that the player objects exist
    let gameDisplay = document.getElementById('game-display')
    gameDisplay.innerHTML = '';

    let ocean = document.createElement('div');
    ocean.setAttribute('id', 'game-waters');
    ocean.appendChild(createGameBoard('human'));
    let gameBoard = document.getElementById('game-board');

    let messageDisplay = document.createElement('div');
    messageDisplay.setAttribute('id', 'messages');
    messageDisplay.appendChild(document.createTextNode(`Place your ${shipTypes[currentShip]}`));

    let directionButton = document.createElement('button');
    directionButton.textContent = 'x-axis';
    directionButton.addEventListener('click', () => {
      if (directionButton.textContent === 'x-axis') {
        directionButton.textContent = 'y-axis';
      }
      else {
        directionButton.textContent = 'x-axis';
      }
    });

    gameDisplay.appendChild(messageDisplay);
    gameDisplay.appendChild(directionButton);
    gameDisplay.appendChild(ocean);

    let playerWaters = document.querySelector('.fleet-waters');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        playerWaters.appendChild(space);
        space.addEventListener('click', () => {
          currentShipPlacement(messageDisplay, playerWaters, [i, j], directionButton);
        });
      }
    }
  };

  const currentShipPlacement = (message, waters, coordinates, directionButton) => {
    // extract currently selected direction
    let direction = directionButton.textContent;
    direction = direction.slice(0, 1);

    // verify this is a valid position to place the ship
    let validPosition;
    validPosition = humanPlayer.gameBoard.placeShip(shipTypes[currentShip], direction, coordinates);
    
    if (validPosition) {
      let spaces = waters.children;
      let location;
      let space;
      if (direction === 'x') {
        for (let i = 0; i < shipLengths[currentShip]; i++) {
          location = (coordinates[0] * 10) + (coordinates[1] + i);
          space = spaces[location];
          space.classList.add('ship-space');
        }
      }
      else {
        for (let i = 0; i < shipLengths[currentShip]; i++) {
          location = ((coordinates[0] + i) * 10) + coordinates[1];
          space = spaces[location];
          space.classList.add('ship-space');
        }
      }
      currentShip++;
      message.innerHTML = `Place your ${shipTypes[currentShip]} (${shipLengths[currentShip]} spaces)`;
    }
    else {
      message.innerHTML = `Invalid location, your ${shipTypes[currentShip]} requires ${shipLengths[currentShip]} open spaces along your chosen axis`;
    }
    if (currentShip > 4) {
      displayGameBoards();
    }
  };

  const placeComputerShips = () => {
    let x;
    let y;
    // randomize the direction the ship will be placed
    let direction = (Math.floor(Math.random() * 2) ? 'x' : 'y');
    let coordinates;
    let validPosition;

    for (let i = 0; i < 5; i++) {
      do {
        x = computerPlayer.getCoordinates();
        y = computerPlayer.getCoordinates();
        coordinates = [y, x];
        // place ship function returns false if position is filled
        // this prompts the loop to run again and choose new coordinates until it works
        validPosition = computerPlayer.gameBoard.placeShip(shipTypes[i], direction, coordinates);
        direction = (Math.floor(Math.random() * 2) ? 'x' : 'y');
      } while (!validPosition);
      // reset check for valid position
      validPosition = false;
    }
  };

  const createGameBoard = (type) => {
    let board = document.createElement('div');
    board.setAttribute('id', `${type}`);
    board.classList.add('game-board');

    let header = document.createElement('h2');
    if (type === 'human') {
      header.appendChild(document.createTextNode(`${humanPlayer.name}'s Fleet`));
    }
    else {
      header.appendChild(document.createTextNode(`Enemy Fleet`));
    }

    let waters = document.createElement('div');
    waters.setAttribute('class', 'fleet-waters');

    board.appendChild(header);
    board.appendChild(waters);
    return board;
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
    ocean.appendChild(createGameBoard('human'));
    ocean.appendChild(createGameBoard('computer'));

    let computerWaters = document.querySelectorAll('.fleet-waters')[1];
    let playerWaters = document.querySelectorAll('.fleet-waters')[0];

    // create event listeners for each space on the enemy game board to track if it was a hit or miss
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let space = document.createElement('div');
        space.classList.add('game-space');
        // this class will be removed from enemy game board once ship positions are randomized
        //if (computerPlayer.gameBoard.board[i][j].occupied) {
          //space.classList.add('ship-space');
        //}
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
          }, 1500);
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
    }
    else if (player.type === 'human') {
      messageDisplay.appendChild(document.createTextNode("A miss! But we'll get them yet!"));
    }
    else if ((player.type === 'computer') && (target)) {
      messageDisplay.appendChild(document.createTextNode("Blast!"));
      if (target.occupied.sunk) {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`The enemy just sunk our ${target.occupied.shipType}!`));
      }
      else {
        messageDisplay.appendChild(document.createElement('br'));
        messageDisplay.appendChild(document.createTextNode(`The enemy's hit our ${target.occupied.shipType}!`));
      }
    }
    else {
      messageDisplay.appendChild(document.createTextNode("A miss! We're still in this!"));
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
    let messageDisplay = document.getElementById('messages');
    if (type === 'human') {
      messageDisplay.appendChild(document.createElement('br'));
      messageDisplay.appendChild(document.createTextNode("You lost!"));
    }
    else {
      messageDisplay.appendChild(document.createElement('br'));
      messageDisplay.appendChild(document.createTextNode("You won!"));
    }
    playAgain();
  };

  const playAgain = () => {
    let gameScreen = document.getElementById('game-display');
    let playAgain = document.createElement('button');
    gameScreen.appendChild(playAgain);

    playAgain.setAttribute('id', 'play-again');
    playAgain.innerHTML = 'Play Again?';
    playAgain.addEventListener('click', () => {
      // recreate initial player form entry screen
      gameScreen.innerHTML = 
        `<form id="player-entry" onsubmit="event.preventDefault()">
          <label for="playerNameInput">Enter Player Name:</label>
          <input type="text" name="playerNameInput" id="playerNameInput" placeholder="Battleship Captain ________" pattern="^((?!computer).)*$" required>
          <input type="submit" value="Start">
        </form>`
      
      // remake event listener for inputting new player name
      document.getElementById('player-entry').addEventListener("submit", () => {DOMControl.playerCreation()})

      // reset game states
      gameOver = false;
      computerMove = false;
      currentShip = 0;
    });
  };
  return { playerCreation };
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixZQUFZO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YseUJBQXlCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRix5QkFBeUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsNEJBQTRCOztBQUU1RztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BhZ2UtY29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjE2NmU7XFxuICBjb2xvcjogcmdiKDIwOSwgMjA3LCAyMDcpO1xcbn1cXG5cXG4jZ2FtZS1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmcjtcXG5cXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICB9XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLWRpc3BsYXkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdyaWQtcm93OiAyIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNwbGF5ZXItZW50cnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwbGF5ZXItbmFtZS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI21lc3NhZ2VzIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNnYW1lLXdhdGVycyB7XFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZWV0LXdhdGVycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpOyBcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTsgXFxufVxcblxcbi5nYW1lLXNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5zaGlwLXNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7O0VBRTdCLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7TUFDSSxVQUFVO0VBQ2Q7RUFDQTtNQUNJLFVBQVU7R0FDYjtBQUNIOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCOztFQUVsQixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMTY2ZTtcXG4gIGNvbG9yOiByZ2IoMjA5LCAyMDcsIDIwNyk7XFxufVxcblxcbiNnYW1lLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgNWZyO1xcblxcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gZWFzZSAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgIH1cXG59XFxuXFxuI2hlYWRlciB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtZGlzcGxheSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ3JpZC1yb3c6IDIgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3BsYXllci1lbnRyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3BsYXllci1uYW1lLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jbWVzc2FnZXMge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gZWFzZSAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2dhbWUtd2F0ZXJzIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmxlZXQtd2F0ZXJzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7IFxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDQwcHgpOyBcXG59XFxuXFxuLmdhbWUtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnNoaXAtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cbmNsYXNzIFNoaXBDcmVhdG9yIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuc2hpcFR5cGUgPSBuYW1lO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aChuYW1lKTtcbiAgfVxuXG4gIGdldExlbmd0aCA9IChuYW1lKSA9PiB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdkZXN0cm95ZXInOiByZXR1cm4gMjtcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6IHJldHVybiAzO1xuICAgICAgY2FzZSAnY3J1aXNlcic6IHJldHVybiAzO1xuICAgICAgY2FzZSAnYmF0dGxlc2hpcCc6IHJldHVybiA0O1xuICAgICAgY2FzZSAnY2Fycmllcic6IHJldHVybiA1O1xuICAgIH1cbiAgfVxuXG4gIGhpdCA9ICgpID0+IHtcbiAgICB0aGlzLmhpdHMrKztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9O1xuXG4gIGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cy5TaGlwQ3JlYXRvciA9IFNoaXBDcmVhdG9yO1xuXG5cblxuY2xhc3MgU3BhY2Uge1xuICAvLyBjcmVhdGUgYSBuZXcgc3BhY2UgYW5kIHBhcmFtZXRlcnMgdG8gdHJhY2sgd2hldGhlciBpdCB3YXMgaGl0LCBpdHMgY29vcmRpbmF0ZXMsXG4gIC8vIHdoZXRoZXIgYSBzaGlwIGlzIGxvY2F0ZWQgdGhlcmUsIGV0Y1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgIHRoaXMuc3RydWNrID0gbnVsbDtcbiAgICB0aGlzLm9jY3VwaWVkID0gbnVsbDtcbiAgICB0aGlzLnNwYWNlID0gY29vcmRpbmF0ZXM7XG4gIH1cbn1cblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdlbmVyYXRlQm9hcmQoKTtcbiAgICB0aGlzLmxvc3QgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZmxlZXQgPSBbXTtcbiAgfVxuXG4gIGdlbmVyYXRlQm9hcmQoKSB7XG4gICAgLy8gMmQgYXJyYXkgb2YgYm9hcmQgc3BhY2VzXG4gICAgbGV0IGJvYXJkID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKG5ldyBTcGFjZShbaSwgal0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXBUeXBlLCBkaXJlY3Rpb24sIGxvY2F0aW9uKSB7XG4gICAgLy8gY3JlYXRlIHNoaXAgb2JqZWN0XG4gICAgbGV0IHNoaXAgPSBuZXcgU2hpcENyZWF0b3Ioc2hpcFR5cGUpO1xuICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG5cbiAgICBsZXQgeCA9IGxvY2F0aW9uWzFdO1xuICAgIGxldCB5ID0gbG9jYXRpb25bMF07XG5cbiAgICBsZXQgc3RhcnRQb2ludCA9IChkaXJlY3Rpb24gPT09ICd5JykgPyB5IDogeDtcblxuICAgIC8vIGlmIHNoaXAgaXMgcGxhY2VkIHN1Y2ggdGhhdCBpdCBmYWxscyBvdXQgb2YgYm91bmRzIG9uIHRoZSBib2FyZCBvciBvdmVybGFwcyBhbm90aGVyIHNoaXAgdGhlbiByZWplY3QgcGxhY2VtZW50XG4gICAgaWYgKChzdGFydFBvaW50ICsgc2hpcExlbmd0aCkgPiAxMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgLy8gaWYgYW55IHNwYWNlIGFsb25nIHRoZSBzaGlwJ3MgaW50ZW5kZWQgcGF0aCBpcyBvY2N1cGllZCByZWplY3QgcGxhY2VtZW50XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb2ludDsgaSA8IChzdGFydFBvaW50ICsgc2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVt4XS5vY2N1cGllZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIGFueSBzcGFjZSBhbG9uZyB0aGUgc2hpcCdzIGludGVuZGVkIHBhdGggaXMgb2NjdXBpZWQgcmVqZWN0IHBsYWNlbWVudFxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UG9pbnQ7IGkgPCAoc3RhcnRQb2ludCArIHNoaXBMZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1baV0ub2NjdXBpZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHNoaXAgcGxhY2VtZW50IGlzIHZhbGlkIHNvIGFkZCBpdCB0byB0aGUgcGxheWVyJ3MgZmxlZXQgYW5kIHBvcHVsYXRlIHJlcXVpcmVkIHNwYWNlc1xuICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvaW50OyBpIDwgKHN0YXJ0UG9pbnQgKyBzaGlwTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beF0ub2NjdXBpZWQgPSBzaGlwO1xuICAgICAgfVxuICAgIH0gICAgXG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb2ludDsgaSA8IChzdGFydFBvaW50ICsgc2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3ldW2ldLm9jY3VwaWVkID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrIChjb29yZGluYXRlcykge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgbGV0IHkgPSBjb29yZGluYXRlc1swXTtcblxuICAgIC8vIHJlY29yZHMgbG9jYXRpb24gb2Ygc3RyaWtlXG4gICAgLy8gdGhlIERPTSBjb2RlIHdpbGwgcHJldmVudCBzdHJpa2VzIG9uIHByZXZpb3VzbHkgdGFyZ2V0ZWQgc3BhY2VzXG4gICAgdGhpcy5ib2FyZFt5XVt4XS5zdHJ1Y2sgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHNwYWNlIGlzIG9jY3VwaWVkIHRoZSBoaXQgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHRoZSBzaGlwXG4gICAgaWYgKHRoaXMuYm9hcmRbeV1beF0ub2NjdXBpZWQpIHtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0ub2NjdXBpZWQuaGl0KCk7XG4gICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgaW4gdGhlIGZsZWV0IGFyZSBzdGlsbCBmbG9hdGluZ1xuICAgICAgdGhpcy5mbGVldFN0YXR1cygpO1xuICAgICAgLy8gcmV0dXJuIG9iamVjdCBoaXRcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkW3ldW3hdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbCBmb3IgbWlzc1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZmxlZXRTdGF0dXMgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmZsZWV0W2ldLnN1bmspIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvc3QgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLkdhbWVCb2FyZCA9IEdhbWVCb2FyZDtcblxuXG5cbmNsYXNzIEdhbWVQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAobmFtZSA9IFwiY29tcHV0ZXJcIiwgdHlwZSA9IFwiY29tcHV0ZXJcIikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQobmFtZSk7XG4gIH1cblxuICB0YXJnZXRTcGFjZSAodHlwZSwgZW5lbXksIGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGhpdCA9IGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gaGl0O1xuICB9XG5cbiAgY29tcHV0ZXJUYXJnZXQgKGVuZW15KSB7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBsb2NhdGlvbiB0aGUgY29tcHV0ZXIgd2lsbCB0YXJnZXRcbiAgICBsZXQgdGFyZ2V0ZWQ7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgZG8ge1xuICAgICAgeCA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHkgPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB0YXJnZXRlZCA9IGVuZW15LmdhbWVCb2FyZC5ib2FyZFt5XVt4XS5zdHJ1Y2s7XG4gICAgfSB3aGlsZSAodGFyZ2V0ZWQpO1xuICAgIHJldHVybiBbeSwgeF07XG4gIH1cblxuICBnZXRDb29yZGluYXRlcyAoKSB7XG4gICAgLy8gZ2VuZXJhdGUgYSByYW5kb20gdmFsdWUgYmV0d2VlbiAwIGFuZCA5OyB0aGUgY29vcmRpbmF0ZSByYW5nZSBvZiB0aGUgZ2FtZSBib2FyZFxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuR2FtZVBsYXllciA9IEdhbWVQbGF5ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gaW1wb3J0IHZhcmlvdXMgZ2FtZSBsb2dpYyBmdW5jdGlvbnMgdG8gaGVscCBydW4gdGhlIHBhZ2VcbmNvbnN0IGdhbWVMb2dpYyA9IHJlcXVpcmUoJy4uL3NyYy9iYXR0bGVzaGlwLmpzJyk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZW50cnknKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtET01Db250cm9sLnBsYXllckNyZWF0aW9uKCl9KTtcbn07XG5cbmNvbnN0IERPTUNvbnRyb2wgPSAoKCkgPT4ge1xuICAvLyB2YXJpYWJsZXMgdG8gdHJhY2sgdGhlIHR3byBwbGF5ZXJzIGluIHRoZSBnYW1lXG4gIGxldCBodW1hblBsYXllcjtcbiAgbGV0IGNvbXB1dGVyUGxheWVyO1xuXG4gIC8vIGhhcmQgY29kZWQgYXJyYXkgb2Ygc2hpcCBjb29yZGluYXRlcyBmb3IgdGVzdGluZ1xuICAvLyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggcGxheWVyIGNob2ljZSBhbmQgcmFuZG9tIGNvbXB1dGVyIGNvb3JkaW5hdGVzIGluIGZpbmFsIGdhbWUgYnVpbGRcbiAgbGV0IHNoaXBQb3NpdGlvbnMgPSBbWzAsMF0sIFsxLDldLCBbNywxXSwgWzUsNF0sIFszLDJdXTtcbiAgbGV0IHNoaXBEaXJlY3Rpb24gPSBbJ3gnLCAneScsICd4JywgJ3gnLCAneSddO1xuICBsZXQgc2hpcFR5cGVzID0gWydiYXR0bGVzaGlwJywgJ2NhcnJpZXInLCAnY3J1aXNlcicsICdzdWJtYXJpbmUnLCAnZGVzdHJveWVyJ107XG5cbiAgLy8gdHJhY2tlciBmb3IgaG93IG1hbnkgcGxheWVyIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgbGV0IGN1cnJlbnRTaGlwID0gMDtcbiAgbGV0IHNoaXBMZW5ndGhzID0gWzQsIDUsIDMsIDMsIDJdO1xuXG4gIC8vIHRyYWNrZXIgZm9yIGNvbXB1dGVyIGFjdGl2aXR5XG4gIGxldCBjb21wdXRlck1vdmUgPSBmYWxzZTtcblxuICAvLyB0cmFja2VyIGZvciB3aGV0aGVyIG9yIG5vdCB0aGUgZ2FtZSBpcyBvdmVyXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGNvbnN0IHBsYXllckNyZWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZUlucHV0LnZhbHVlO1xuICAgIGh1bWFuUGxheWVyID0gbmV3IGdhbWVMb2dpYy5HYW1lUGxheWVyKHBsYXllck5hbWUsICdodW1hbicpO1xuICAgIGNvbXB1dGVyUGxheWVyID0gbmV3IGdhbWVMb2dpYy5HYW1lUGxheWVyKCk7XG5cbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKTtcblxuICAgIHBsYWNlUGxheWVyU2hpcHMoKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXBzID0gKCkgPT4ge1xuICAgIC8vIGNsZWFyIHRoZSBmb3JtIG5vdyB0aGF0IHRoZSBwbGF5ZXIgb2JqZWN0cyBleGlzdFxuICAgIGxldCBnYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWRpc3BsYXknKVxuICAgIGdhbWVEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IG9jZWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2NlYW4uc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lLXdhdGVycycpO1xuICAgIG9jZWFuLmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgnaHVtYW4nKSk7XG4gICAgbGV0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWJvYXJkJyk7XG5cbiAgICBsZXQgbWVzc2FnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2VzJyk7XG4gICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFBsYWNlIHlvdXIgJHtzaGlwVHlwZXNbY3VycmVudFNoaXBdfWApKTtcblxuICAgIGxldCBkaXJlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSAneC1heGlzJztcbiAgICBkaXJlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID09PSAneC1heGlzJykge1xuICAgICAgICBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSAneS1heGlzJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSAneC1heGlzJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKG1lc3NhZ2VEaXNwbGF5KTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChkaXJlY3Rpb25CdXR0b24pO1xuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKG9jZWFuKTtcblxuICAgIGxldCBwbGF5ZXJXYXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxlZXQtd2F0ZXJzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3BhY2UnKTtcbiAgICAgICAgcGxheWVyV2F0ZXJzLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgY3VycmVudFNoaXBQbGFjZW1lbnQobWVzc2FnZURpc3BsYXksIHBsYXllcldhdGVycywgW2ksIGpdLCBkaXJlY3Rpb25CdXR0b24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3VycmVudFNoaXBQbGFjZW1lbnQgPSAobWVzc2FnZSwgd2F0ZXJzLCBjb29yZGluYXRlcywgZGlyZWN0aW9uQnV0dG9uKSA9PiB7XG4gICAgLy8gZXh0cmFjdCBjdXJyZW50bHkgc2VsZWN0ZWQgZGlyZWN0aW9uXG4gICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbkJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24uc2xpY2UoMCwgMSk7XG5cbiAgICAvLyB2ZXJpZnkgdGhpcyBpcyBhIHZhbGlkIHBvc2l0aW9uIHRvIHBsYWNlIHRoZSBzaGlwXG4gICAgbGV0IHZhbGlkUG9zaXRpb247XG4gICAgdmFsaWRQb3NpdGlvbiA9IGh1bWFuUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcFR5cGVzW2N1cnJlbnRTaGlwXSwgZGlyZWN0aW9uLCBjb29yZGluYXRlcyk7XG4gICAgXG4gICAgaWYgKHZhbGlkUG9zaXRpb24pIHtcbiAgICAgIGxldCBzcGFjZXMgPSB3YXRlcnMuY2hpbGRyZW47XG4gICAgICBsZXQgbG9jYXRpb247XG4gICAgICBsZXQgc3BhY2U7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Roc1tjdXJyZW50U2hpcF07IGkrKykge1xuICAgICAgICAgIGxvY2F0aW9uID0gKGNvb3JkaW5hdGVzWzBdICogMTApICsgKGNvb3JkaW5hdGVzWzFdICsgaSk7XG4gICAgICAgICAgc3BhY2UgPSBzcGFjZXNbbG9jYXRpb25dO1xuICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc3BhY2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbY3VycmVudFNoaXBdOyBpKyspIHtcbiAgICAgICAgICBsb2NhdGlvbiA9ICgoY29vcmRpbmF0ZXNbMF0gKyBpKSAqIDEwKSArIGNvb3JkaW5hdGVzWzFdO1xuICAgICAgICAgIHNwYWNlID0gc3BhY2VzW2xvY2F0aW9uXTtcbiAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXNwYWNlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1cnJlbnRTaGlwKys7XG4gICAgICBtZXNzYWdlLmlubmVySFRNTCA9IGBQbGFjZSB5b3VyICR7c2hpcFR5cGVzW2N1cnJlbnRTaGlwXX0gKCR7c2hpcExlbmd0aHNbY3VycmVudFNoaXBdfSBzcGFjZXMpYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtZXNzYWdlLmlubmVySFRNTCA9IGBJbnZhbGlkIGxvY2F0aW9uLCB5b3VyICR7c2hpcFR5cGVzW2N1cnJlbnRTaGlwXX0gcmVxdWlyZXMgJHtzaGlwTGVuZ3Roc1tjdXJyZW50U2hpcF19IG9wZW4gc3BhY2VzIGFsb25nIHlvdXIgY2hvc2VuIGF4aXNgO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFNoaXAgPiA0KSB7XG4gICAgICBkaXNwbGF5R2FtZUJvYXJkcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgLy8gcmFuZG9taXplIHRoZSBkaXJlY3Rpb24gdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWRcbiAgICBsZXQgZGlyZWN0aW9uID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gJ3gnIDogJ3knKTtcbiAgICBsZXQgY29vcmRpbmF0ZXM7XG4gICAgbGV0IHZhbGlkUG9zaXRpb247XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgZG8ge1xuICAgICAgICB4ID0gY29tcHV0ZXJQbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgeSA9IGNvbXB1dGVyUGxheWVyLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGNvb3JkaW5hdGVzID0gW3ksIHhdO1xuICAgICAgICAvLyBwbGFjZSBzaGlwIGZ1bmN0aW9uIHJldHVybnMgZmFsc2UgaWYgcG9zaXRpb24gaXMgZmlsbGVkXG4gICAgICAgIC8vIHRoaXMgcHJvbXB0cyB0aGUgbG9vcCB0byBydW4gYWdhaW4gYW5kIGNob29zZSBuZXcgY29vcmRpbmF0ZXMgdW50aWwgaXQgd29ya3NcbiAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGNvbXB1dGVyUGxheWVyLmdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcFR5cGVzW2ldLCBkaXJlY3Rpb24sIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgZGlyZWN0aW9uID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID8gJ3gnIDogJ3knKTtcbiAgICAgIH0gd2hpbGUgKCF2YWxpZFBvc2l0aW9uKTtcbiAgICAgIC8vIHJlc2V0IGNoZWNrIGZvciB2YWxpZCBwb3NpdGlvblxuICAgICAgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAodHlwZSkgPT4ge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0eXBlfWApO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWUtYm9hcmQnKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmICh0eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7aHVtYW5QbGF5ZXIubmFtZX0ncyBGbGVldGApKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYEVuZW15IEZsZWV0YCkpO1xuICAgIH1cblxuICAgIGxldCB3YXRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YXRlcnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmbGVldC13YXRlcnMnKTtcblxuICAgIGJvYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQod2F0ZXJzKTtcbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUdhbWVCb2FyZHMgPSAoKSA9PiB7XG4gICAgLy8gY2xlYXIgdGhlIGZvcm0gbm93IHRoYXQgdGhlIGdhbWUgb2JqZWN0cyBleGlzdFxuICAgIGxldCBnYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWRpc3BsYXknKVxuICAgIGdhbWVEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IG9jZWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2NlYW4uc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lLXdhdGVycycpO1xuXG4gICAgbGV0IG1lc3NhZ2VEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZURpc3BsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlcycpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdFbmVteSBmbGVldCBhcHByb2FjaGluZyEnKSk7XG4gICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1ByZXBhcmUgZm9yIGJhdHRsZSEnKSk7XG5cbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChtZXNzYWdlRGlzcGxheSk7XG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQob2NlYW4pO1xuXG4gICAgLy8gY3JlYXRlIGdhbWUgYm9hcmRzIHRvIG1hbmlwdWxhdGVcbiAgICBvY2Vhbi5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoJ2h1bWFuJykpO1xuICAgIG9jZWFuLmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgnY29tcHV0ZXInKSk7XG5cbiAgICBsZXQgY29tcHV0ZXJXYXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxlZXQtd2F0ZXJzJylbMV07XG4gICAgbGV0IHBsYXllcldhdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mbGVldC13YXRlcnMnKVswXTtcblxuICAgIC8vIGNyZWF0ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggc3BhY2Ugb24gdGhlIGVuZW15IGdhbWUgYm9hcmQgdG8gdHJhY2sgaWYgaXQgd2FzIGEgaGl0IG9yIG1pc3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcGFjZScpO1xuICAgICAgICAvLyB0aGlzIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIGVuZW15IGdhbWUgYm9hcmQgb25jZSBzaGlwIHBvc2l0aW9ucyBhcmUgcmFuZG9taXplZFxuICAgICAgICAvL2lmIChjb21wdXRlclBsYXllci5nYW1lQm9hcmQuYm9hcmRbaV1bal0ub2NjdXBpZWQpIHtcbiAgICAgICAgICAvL3NwYWNlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtc3BhY2UnKTtcbiAgICAgICAgLy99XG4gICAgICAgIGNvbXB1dGVyV2F0ZXJzLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICAgICAgc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgLy8gaWYgdGhlIGNvbXB1dGVyIGlzIGN1cnJlbnRseSB0YWtpbmcgYSB0dXJuIHRoZSBjbGljayBldmVudCB3aWxsIG5vdCBwcm9jZWVkXG4gICAgICAgICAgaWYgKGNvbXB1dGVyTW92ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wdXRlck1vdmUgPSB0cnVlO1xuICAgICAgICAgIHBsYXllclR1cm4oaSwgaiwgc3BhY2UpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgZ2FtZSBpcyBvdmVyIGRvbid0IGxldCB0aGUgY29tcHV0ZXIgbWFrZSBhIG1vdmVcbiAgICAgICAgICAgIGlmICghZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICAgIGNvbXB1dGVyTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBzZXQgdG8gZmFsc2U7IHRoZSBjb21wdXRlciBtYWRlIGl0cyBtb3ZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXNwYWNlJyk7XG4gICAgICAgIGlmIChodW1hblBsYXllci5nYW1lQm9hcmQuYm9hcmRbaV1bal0ub2NjdXBpZWQpIHtcbiAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXNwYWNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyV2F0ZXJzLmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxheWVyVHVybiA9ICh5LCB4LCBzcGFjZSkgPT4ge1xuICAgIGxldCBoaXQgPSBodW1hblBsYXllci50YXJnZXRTcGFjZShodW1hblBsYXllci50eXBlLCBjb21wdXRlclBsYXllciwgW3ksIHhdKTtcbiAgICBpZiAoaGl0KSB7XG4gICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIC8vIHNlbmQgbWVzc2FnZSBvbiBnYW1lIHN0YXRlXG4gICAgICBnYW1lTWVzc2FnZShoaXQsIGh1bWFuUGxheWVyKTtcbiAgICAgIHJldHVybiBoaXQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgZ2FtZU1lc3NhZ2UoaGl0LCBodW1hblBsYXllcik7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJUYXJnZXQoaHVtYW5QbGF5ZXIpO1xuICAgIGxldCBoaXQgPSBjb21wdXRlclBsYXllci50YXJnZXRTcGFjZShjb21wdXRlclBsYXllci50eXBlLCBodW1hblBsYXllciwgY29vcmRpbmF0ZXMpO1xuICAgIGxldCBsb2NhdGlvbiA9IChjb29yZGluYXRlc1swXSAqIDEwKSArIGNvb3JkaW5hdGVzWzFdO1xuICAgIGxldCBzcGFjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxlZXQtd2F0ZXJzJykuY2hpbGRyZW47XG4gICAgbGV0IHNwYWNlID0gc3BhY2VzW2xvY2F0aW9uXTtcblxuICAgIGlmIChoaXQpIHtcbiAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgZ2FtZU1lc3NhZ2UoaGl0LCBjb21wdXRlclBsYXllcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgZ2FtZU1lc3NhZ2UoaGl0LCBjb21wdXRlclBsYXllcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdhbWVNZXNzYWdlID0gKHRhcmdldCwgcGxheWVyKSA9PiB7XG4gICAgbGV0IG1lc3NhZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VzJyk7XG4gICAgbWVzc2FnZURpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoKHBsYXllci50eXBlID09PSAnaHVtYW4nKSAmJiAodGFyZ2V0KSkge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYERpcmVjdCBoaXQsIENhcHRhaW4gJHtwbGF5ZXIubmFtZX0hYCkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBIG1pc3MhIEJ1dCB3ZSdsbCBnZXQgdGhlbSB5ZXQhXCIpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKHBsYXllci50eXBlID09PSAnY29tcHV0ZXInKSAmJiAodGFyZ2V0KSkge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJCbGFzdCFcIikpO1xuICAgICAgaWYgKHRhcmdldC5vY2N1cGllZC5zdW5rKSB7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVGhlIGVuZW15IGp1c3Qgc3VuayBvdXIgJHt0YXJnZXQub2NjdXBpZWQuc2hpcFR5cGV9IWApKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFRoZSBlbmVteSdzIGhpdCBvdXIgJHt0YXJnZXQub2NjdXBpZWQuc2hpcFR5cGV9IWApKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkEgbWlzcyEgV2UncmUgc3RpbGwgaW4gdGhpcyFcIikpO1xuICAgIH1cblxuICAgIGlmIChodW1hblBsYXllci5nYW1lQm9hcmQubG9zdCkge1xuICAgICAgZ2FtZUVuZCgnaHVtYW4nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29tcHV0ZXJQbGF5ZXIuZ2FtZUJvYXJkLmxvc3QpIHtcbiAgICAgIGdhbWVFbmQoJ2NvbXB1dGVyJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdhbWVFbmQgPSAodHlwZSkgPT4ge1xuICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICBsZXQgbWVzc2FnZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZXMnKTtcbiAgICBpZiAodHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIllvdSBsb3N0IVwiKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIllvdSB3b24hXCIpKTtcbiAgICB9XG4gICAgcGxheUFnYWluKCk7XG4gIH07XG5cbiAgY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICAgIGxldCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZGlzcGxheScpO1xuICAgIGxldCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBnYW1lU2NyZWVuLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG5cbiAgICBwbGF5QWdhaW4uc2V0QXR0cmlidXRlKCdpZCcsICdwbGF5LWFnYWluJyk7XG4gICAgcGxheUFnYWluLmlubmVySFRNTCA9ICdQbGF5IEFnYWluPyc7XG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gcmVjcmVhdGUgaW5pdGlhbCBwbGF5ZXIgZm9ybSBlbnRyeSBzY3JlZW5cbiAgICAgIGdhbWVTY3JlZW4uaW5uZXJIVE1MID0gXG4gICAgICAgIGA8Zm9ybSBpZD1cInBsYXllci1lbnRyeVwiIG9uc3VibWl0PVwiZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwbGF5ZXJOYW1lSW5wdXRcIj5FbnRlciBQbGF5ZXIgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwbGF5ZXJOYW1lSW5wdXRcIiBpZD1cInBsYXllck5hbWVJbnB1dFwiIHBsYWNlaG9sZGVyPVwiQmF0dGxlc2hpcCBDYXB0YWluIF9fX19fX19fXCIgcGF0dGVybj1cIl4oKD8hY29tcHV0ZXIpLikqJFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdGFydFwiPlxuICAgICAgICA8L2Zvcm0+YFxuICAgICAgXG4gICAgICAvLyByZW1ha2UgZXZlbnQgbGlzdGVuZXIgZm9yIGlucHV0dGluZyBuZXcgcGxheWVyIG5hbWVcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZW50cnknKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtET01Db250cm9sLnBsYXllckNyZWF0aW9uKCl9KVxuXG4gICAgICAvLyByZXNldCBnYW1lIHN0YXRlc1xuICAgICAgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgIGNvbXB1dGVyTW92ZSA9IGZhbHNlO1xuICAgICAgY3VycmVudFNoaXAgPSAwO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4geyBwbGF5ZXJDcmVhdGlvbiB9O1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=