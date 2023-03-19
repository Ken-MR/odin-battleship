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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  font-family: serif;\n  background-color: #02166e;\n  color: rgb(209, 207, 207);\n}\n\n#game-screen {\n  height: 100%;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n   }\n}\n\n#header {\n  grid-row: 1 / 2;\n  text-align: center;\n  justify-content: center;\n  font-size: 50px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#game-display {\n  padding: 10px;\n  grid-row: 2 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#player-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  border: 5px solid white;\n  border-radius: 5px;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\ninput[type=submit] {\n  cursor: default;\n  padding: 10px;\n  font-size: 20px;\n}\n\ninput[type=text] {\n  border: none;\n  height: 30px;\n  padding: 5px;\n}\n\n#player-name-input::placeholder {\n  color: white;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#messages {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  text-align: center;\n  background-color: grey;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#game-waters {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.game-board {\n  height: 450px;\n  width: 450px;\n  padding: 10px;\n  gap: 10px;\n  border: 5px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.fleet-waters {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); \n  grid-template-rows: repeat(10, 40px); \n}\n\n.game-space {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  width: 40px;\n  height: 40px;\n}\n\n@media only screen and (max-width: 1050px) {\n  #game-screen {\n    padding: 20px;\n  }\n\n  #game-display {\n    padding: 5px;\n  }\n\n  #header {\n    font-size: 30px;\n    height: 50px;\n  }\n\n  h2 {\n    font-size: 90%;\n  }\n\n  #messages {\n    padding: 5px;\n    width: 250px;\n    height: 50px;\n    border-radius: 10px;\n  }\n\n  #game-waters {\n    flex-direction: column;\n    gap: 5px;\n    padding: 10px;\n  }\n\n  .game-board {\n    height: 250px;\n    width: 250px;\n    padding: 5px;\n    border: 3px solid white;\n  }\n\n  .fleet-waters {\n    grid-template-columns: repeat(10, 20px); \n    grid-template-rows: repeat(10, 20px); \n  }\n\n  .game-space {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n.miss {\n  background-color: grey;\n}\n\n.ship-space {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}\n\nbutton {\n  padding: 10px;\n  background-color: grey;\n  border-radius: 5px;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,6BAA6B;;EAE7B,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE;MACI,UAAU;EACd;EACA;MACI,UAAU;GACb;AACH;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,uBAAuB;EACvB,kBAAkB;;EAElB,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,4BAA4B;EAC5B,6BAA6B;;EAE7B,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,6BAA6B;EAC7B,oCAAoC;EACpC,WAAW;EACX,YAAY;AACd;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,sBAAsB;IACtB,QAAQ;IACR,aAAa;EACf;;EAEA;IACE,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,uBAAuB;EACzB;;EAEA;IACE,uCAAuC;IACvC,oCAAoC;EACtC;;EAEA;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  font-family: serif;\n  background-color: #02166e;\n  color: rgb(209, 207, 207);\n}\n\n#game-screen {\n  height: 100%;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes fadeInAnimation {\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n   }\n}\n\n#header {\n  grid-row: 1 / 2;\n  text-align: center;\n  justify-content: center;\n  font-size: 50px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n#game-display {\n  padding: 10px;\n  grid-row: 2 / 2;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#player-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 20px;\n  border: 5px solid white;\n  border-radius: 5px;\n\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\ninput[type=submit] {\n  cursor: default;\n  padding: 10px;\n  font-size: 20px;\n}\n\ninput[type=text] {\n  border: none;\n  height: 30px;\n  padding: 5px;\n}\n\n#player-name-input::placeholder {\n  color: white;\n}\n\nlabel {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n#messages {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 10px;\n  text-align: center;\n  background-color: grey;\n  width: 250px;\n  height: 50px;\n  border-radius: 10px;\n}\n\n#game-waters {\n  animation: fadeInAnimation ease 3s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  gap: 10px;\n}\n\n.game-board {\n  height: 450px;\n  width: 450px;\n  padding: 10px;\n  gap: 10px;\n  border: 5px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.fleet-waters {\n  display: grid;\n  grid-template-columns: repeat(10, 40px); \n  grid-template-rows: repeat(10, 40px); \n}\n\n.game-space {\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  width: 40px;\n  height: 40px;\n}\n\n@media only screen and (max-width: 1050px) {\n  #game-screen {\n    padding: 20px;\n  }\n\n  #game-display {\n    padding: 5px;\n  }\n\n  #header {\n    font-size: 30px;\n    height: 50px;\n  }\n\n  h2 {\n    font-size: 90%;\n  }\n\n  #messages {\n    padding: 5px;\n    width: 250px;\n    height: 50px;\n    border-radius: 10px;\n  }\n\n  #game-waters {\n    flex-direction: column;\n    gap: 5px;\n    padding: 10px;\n  }\n\n  .game-board {\n    height: 250px;\n    width: 250px;\n    padding: 5px;\n    border: 3px solid white;\n  }\n\n  .fleet-waters {\n    grid-template-columns: repeat(10, 20px); \n    grid-template-rows: repeat(10, 20px); \n  }\n\n  .game-space {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n.miss {\n  background-color: grey;\n}\n\n.ship-space {\n  background-color: green;\n}\n\n.hit {\n  background-color: red;\n}\n\nbutton {\n  padding: 10px;\n  background-color: grey;\n  border-radius: 5px;\n  border: none;\n}"],"sourceRoot":""}]);
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
    messageDisplay.appendChild(document.createTextNode(`Place your ${shipTypes[currentShip]} (${shipLengths[currentShip]} spaces)`));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOzs7O0FBSTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtB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c0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixZQUFZO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YseUJBQXlCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRix5QkFBeUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0YsNEJBQTRCOztBQUU1RztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BhZ2UtY29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjE2NmU7XFxuICBjb2xvcjogcmdiKDIwOSwgMjA3LCAyMDcpO1xcbn1cXG5cXG4jZ2FtZS1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDVmcjtcXG5cXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICB9XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLWRpc3BsYXkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdyaWQtcm93OiAyIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNwbGF5ZXItZW50cnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwbGF5ZXItbmFtZS1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI21lc3NhZ2VzIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIGVhc2UgM3M7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuXFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNnYW1lLXdhdGVycyB7XFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGhlaWdodDogNDUwcHg7XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZsZWV0LXdhdGVycyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpOyBcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTsgXFxufVxcblxcbi5nYW1lLXNwYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAjZ2FtZS1zY3JlZW4ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcblxcbiAgI2dhbWUtZGlzcGxheSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gICNoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiA5MCU7XFxuICB9XFxuXFxuICAjbWVzc2FnZXMge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcblxcbiAgI2dhbWUtd2F0ZXJzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAuZ2FtZS1ib2FyZCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5mbGVldC13YXRlcnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjBweCk7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjBweCk7IFxcbiAgfVxcblxcbiAgLmdhbWUtc3BhY2Uge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgfVxcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uc2hpcC1zcGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO01BQ0ksVUFBVTtFQUNkO0VBQ0E7TUFDSSxVQUFVO0dBQ2I7QUFDSDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7RUFFbEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7O0VBRTdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7O0VBRTdCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUNBQXVDO0lBQ3ZDLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxNjZlO1xcbiAgY29sb3I6IHJnYigyMDksIDIwNywgMjA3KTtcXG59XFxuXFxuI2dhbWUtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciA1ZnI7XFxuXFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgfVxcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1kaXNwbGF5IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBncmlkLXJvdzogMiAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcGxheWVyLWVudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gZWFzZSAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcGxheWVyLW5hbWUtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNtZXNzYWdlcyB7XFxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcblxcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jZ2FtZS13YXRlcnMge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gZWFzZSAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mbGVldC13YXRlcnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTsgXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7IFxcbn1cXG5cXG4uZ2FtZS1zcGFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgI2dhbWUtc2NyZWVuIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG5cXG4gICNnYW1lLWRpc3BsYXkge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuICAjaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgfVxcblxcbiAgI21lc3NhZ2VzIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICNnYW1lLXdhdGVycyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgLmdhbWUtYm9hcmQge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICB9XFxuXFxuICAuZmxlZXQtd2F0ZXJzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIwcHgpOyBcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDIwcHgpOyBcXG4gIH1cXG5cXG4gIC5nYW1lLXNwYWNlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gIH1cXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnNoaXAtc3BhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cbmNsYXNzIFNoaXBDcmVhdG9yIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuc2hpcFR5cGUgPSBuYW1lO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aChuYW1lKTtcbiAgfVxuXG4gIGdldExlbmd0aCA9IChuYW1lKSA9PiB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdkZXN0cm95ZXInOiByZXR1cm4gMjtcbiAgICAgIGNhc2UgJ3N1Ym1hcmluZSc6IHJldHVybiAzO1xuICAgICAgY2FzZSAnY3J1aXNlcic6IHJldHVybiAzO1xuICAgICAgY2FzZSAnYmF0dGxlc2hpcCc6IHJldHVybiA0O1xuICAgICAgY2FzZSAnY2Fycmllcic6IHJldHVybiA1O1xuICAgIH1cbiAgfVxuXG4gIGhpdCA9ICgpID0+IHtcbiAgICB0aGlzLmhpdHMrKztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9O1xuXG4gIGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cy5TaGlwQ3JlYXRvciA9IFNoaXBDcmVhdG9yO1xuXG5cblxuY2xhc3MgU3BhY2Uge1xuICAvLyBjcmVhdGUgYSBuZXcgc3BhY2UgYW5kIHBhcmFtZXRlcnMgdG8gdHJhY2sgd2hldGhlciBpdCB3YXMgaGl0LCBpdHMgY29vcmRpbmF0ZXMsXG4gIC8vIHdoZXRoZXIgYSBzaGlwIGlzIGxvY2F0ZWQgdGhlcmUsIGV0Y1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgIHRoaXMuc3RydWNrID0gbnVsbDtcbiAgICB0aGlzLm9jY3VwaWVkID0gbnVsbDtcbiAgICB0aGlzLnNwYWNlID0gY29vcmRpbmF0ZXM7XG4gIH1cbn1cblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdlbmVyYXRlQm9hcmQoKTtcbiAgICB0aGlzLmxvc3QgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZmxlZXQgPSBbXTtcbiAgfVxuXG4gIGdlbmVyYXRlQm9hcmQoKSB7XG4gICAgLy8gMmQgYXJyYXkgb2YgYm9hcmQgc3BhY2VzXG4gICAgbGV0IGJvYXJkID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFtpXS5wdXNoKG5ldyBTcGFjZShbaSwgal0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXBUeXBlLCBkaXJlY3Rpb24sIGxvY2F0aW9uKSB7XG4gICAgLy8gY3JlYXRlIHNoaXAgb2JqZWN0XG4gICAgbGV0IHNoaXAgPSBuZXcgU2hpcENyZWF0b3Ioc2hpcFR5cGUpO1xuICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG5cbiAgICBsZXQgeCA9IGxvY2F0aW9uWzFdO1xuICAgIGxldCB5ID0gbG9jYXRpb25bMF07XG5cbiAgICBsZXQgc3RhcnRQb2ludCA9IChkaXJlY3Rpb24gPT09ICd5JykgPyB5IDogeDtcblxuICAgIC8vIGlmIHNoaXAgaXMgcGxhY2VkIHN1Y2ggdGhhdCBpdCBmYWxscyBvdXQgb2YgYm91bmRzIG9uIHRoZSBib2FyZCBvciBvdmVybGFwcyBhbm90aGVyIHNoaXAgdGhlbiByZWplY3QgcGxhY2VtZW50XG4gICAgaWYgKChzdGFydFBvaW50ICsgc2hpcExlbmd0aCkgPiAxMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgLy8gaWYgYW55IHNwYWNlIGFsb25nIHRoZSBzaGlwJ3MgaW50ZW5kZWQgcGF0aCBpcyBvY2N1cGllZCByZWplY3QgcGxhY2VtZW50XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb2ludDsgaSA8IChzdGFydFBvaW50ICsgc2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVt4XS5vY2N1cGllZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIGFueSBzcGFjZSBhbG9uZyB0aGUgc2hpcCdzIGludGVuZGVkIHBhdGggaXMgb2NjdXBpZWQgcmVqZWN0IHBsYWNlbWVudFxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UG9pbnQ7IGkgPCAoc3RhcnRQb2ludCArIHNoaXBMZW5ndGgpOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1baV0ub2NjdXBpZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHNoaXAgcGxhY2VtZW50IGlzIHZhbGlkIHNvIGFkZCBpdCB0byB0aGUgcGxheWVyJ3MgZmxlZXQgYW5kIHBvcHVsYXRlIHJlcXVpcmVkIHNwYWNlc1xuICAgIHRoaXMuZmxlZXQucHVzaChzaGlwKTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvaW50OyBpIDwgKHN0YXJ0UG9pbnQgKyBzaGlwTGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beF0ub2NjdXBpZWQgPSBzaGlwO1xuICAgICAgfVxuICAgIH0gICAgXG4gICAgZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb2ludDsgaSA8IChzdGFydFBvaW50ICsgc2hpcExlbmd0aCk7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3ldW2ldLm9jY3VwaWVkID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrIChjb29yZGluYXRlcykge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgbGV0IHkgPSBjb29yZGluYXRlc1swXTtcblxuICAgIC8vIHJlY29yZHMgbG9jYXRpb24gb2Ygc3RyaWtlXG4gICAgLy8gdGhlIERPTSBjb2RlIHdpbGwgcHJldmVudCBzdHJpa2VzIG9uIHByZXZpb3VzbHkgdGFyZ2V0ZWQgc3BhY2VzXG4gICAgdGhpcy5ib2FyZFt5XVt4XS5zdHJ1Y2sgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHNwYWNlIGlzIG9jY3VwaWVkIHRoZSBoaXQgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHRoZSBzaGlwXG4gICAgaWYgKHRoaXMuYm9hcmRbeV1beF0ub2NjdXBpZWQpIHtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0ub2NjdXBpZWQuaGl0KCk7XG4gICAgICAvLyBjaGVjayBpZiBhbnkgc2hpcHMgaW4gdGhlIGZsZWV0IGFyZSBzdGlsbCBmbG9hdGluZ1xuICAgICAgdGhpcy5mbGVldFN0YXR1cygpO1xuICAgICAgLy8gcmV0dXJuIG9iamVjdCBoaXRcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkW3ldW3hdO1xuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbCBmb3IgbWlzc1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZmxlZXRTdGF0dXMgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmZsZWV0W2ldLnN1bmspIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvc3QgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLkdhbWVCb2FyZCA9IEdhbWVCb2FyZDtcblxuXG5cbmNsYXNzIEdhbWVQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAobmFtZSA9IFwiY29tcHV0ZXJcIiwgdHlwZSA9IFwiY29tcHV0ZXJcIikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQobmFtZSk7XG4gIH1cblxuICB0YXJnZXRTcGFjZSAodHlwZSwgZW5lbXksIGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGhpdCA9IGVuZW15LmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gaGl0O1xuICB9XG5cbiAgY29tcHV0ZXJUYXJnZXQgKGVuZW15KSB7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBsb2NhdGlvbiB0aGUgY29tcHV0ZXIgd2lsbCB0YXJnZXRcbiAgICBsZXQgdGFyZ2V0ZWQ7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgZG8ge1xuICAgICAgeCA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgIHkgPSB0aGlzLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICB0YXJnZXRlZCA9IGVuZW15LmdhbWVCb2FyZC5ib2FyZFt5XVt4XS5zdHJ1Y2s7XG4gICAgfSB3aGlsZSAodGFyZ2V0ZWQpO1xuICAgIHJldHVybiBbeSwgeF07XG4gIH1cblxuICBnZXRDb29yZGluYXRlcyAoKSB7XG4gICAgLy8gZ2VuZXJhdGUgYSByYW5kb20gdmFsdWUgYmV0d2VlbiAwIGFuZCA5OyB0aGUgY29vcmRpbmF0ZSByYW5nZSBvZiB0aGUgZ2FtZSBib2FyZFxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuR2FtZVBsYXllciA9IEdhbWVQbGF5ZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gaW1wb3J0IHZhcmlvdXMgZ2FtZSBsb2dpYyBmdW5jdGlvbnMgdG8gaGVscCBydW4gdGhlIHBhZ2VcbmNvbnN0IGdhbWVMb2dpYyA9IHJlcXVpcmUoJy4uL3NyYy9iYXR0bGVzaGlwLmpzJyk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZW50cnknKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtET01Db250cm9sLnBsYXllckNyZWF0aW9uKCl9KTtcbn07XG5cbmNvbnN0IERPTUNvbnRyb2wgPSAoKCkgPT4ge1xuICAvLyB2YXJpYWJsZXMgdG8gdHJhY2sgdGhlIHR3byBwbGF5ZXJzIGluIHRoZSBnYW1lXG4gIGxldCBodW1hblBsYXllcjtcbiAgbGV0IGNvbXB1dGVyUGxheWVyO1xuXG4gIC8vIGhhcmQgY29kZWQgYXJyYXkgb2Ygc2hpcCBjb29yZGluYXRlcyBmb3IgdGVzdGluZ1xuICAvLyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggcGxheWVyIGNob2ljZSBhbmQgcmFuZG9tIGNvbXB1dGVyIGNvb3JkaW5hdGVzIGluIGZpbmFsIGdhbWUgYnVpbGRcbiAgbGV0IHNoaXBQb3NpdGlvbnMgPSBbWzAsMF0sIFsxLDldLCBbNywxXSwgWzUsNF0sIFszLDJdXTtcbiAgbGV0IHNoaXBEaXJlY3Rpb24gPSBbJ3gnLCAneScsICd4JywgJ3gnLCAneSddO1xuICBsZXQgc2hpcFR5cGVzID0gWydiYXR0bGVzaGlwJywgJ2NhcnJpZXInLCAnY3J1aXNlcicsICdzdWJtYXJpbmUnLCAnZGVzdHJveWVyJ107XG5cbiAgLy8gdHJhY2tlciBmb3IgaG93IG1hbnkgcGxheWVyIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbiAgbGV0IGN1cnJlbnRTaGlwID0gMDtcbiAgbGV0IHNoaXBMZW5ndGhzID0gWzQsIDUsIDMsIDMsIDJdO1xuXG4gIC8vIHRyYWNrZXIgZm9yIGNvbXB1dGVyIGFjdGl2aXR5XG4gIGxldCBjb21wdXRlck1vdmUgPSBmYWxzZTtcblxuICAvLyB0cmFja2VyIGZvciB3aGV0aGVyIG9yIG5vdCB0aGUgZ2FtZSBpcyBvdmVyXG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGNvbnN0IHBsYXllckNyZWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZUlucHV0LnZhbHVlO1xuICAgIGh1bWFuUGxheWVyID0gbmV3IGdhbWVMb2dpYy5HYW1lUGxheWVyKHBsYXllck5hbWUsICdodW1hbicpO1xuICAgIGNvbXB1dGVyUGxheWVyID0gbmV3IGdhbWVMb2dpYy5HYW1lUGxheWVyKCk7XG5cbiAgICBwbGFjZUNvbXB1dGVyU2hpcHMoKTtcblxuICAgIHBsYWNlUGxheWVyU2hpcHMoKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVBsYXllclNoaXBzID0gKCkgPT4ge1xuICAgIC8vIGNsZWFyIHRoZSBmb3JtIG5vdyB0aGF0IHRoZSBwbGF5ZXIgb2JqZWN0cyBleGlzdFxuICAgIGxldCBnYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWRpc3BsYXknKVxuICAgIGdhbWVEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgbGV0IG9jZWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb2NlYW4uc2V0QXR0cmlidXRlKCdpZCcsICdnYW1lLXdhdGVycycpO1xuICAgIG9jZWFuLmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgnaHVtYW4nKSk7XG4gICAgbGV0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWJvYXJkJyk7XG5cbiAgICBsZXQgbWVzc2FnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZXNzYWdlRGlzcGxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2VzJyk7XG4gICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFBsYWNlIHlvdXIgJHtzaGlwVHlwZXNbY3VycmVudFNoaXBdfSAoJHtzaGlwTGVuZ3Roc1tjdXJyZW50U2hpcF19IHNwYWNlcylgKSk7XG5cbiAgICBsZXQgZGlyZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ3gtYXhpcyc7XG4gICAgZGlyZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ3gtYXhpcycpIHtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ3ktYXhpcyc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGlyZWN0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ3gtYXhpcyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChtZXNzYWdlRGlzcGxheSk7XG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uQnV0dG9uKTtcbiAgICBnYW1lRGlzcGxheS5hcHBlbmRDaGlsZChvY2Vhbik7XG5cbiAgICBsZXQgcGxheWVyV2F0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0LXdhdGVycycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXNwYWNlJyk7XG4gICAgICAgIHBsYXllcldhdGVycy5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGN1cnJlbnRTaGlwUGxhY2VtZW50KG1lc3NhZ2VEaXNwbGF5LCBwbGF5ZXJXYXRlcnMsIFtpLCBqXSwgZGlyZWN0aW9uQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRTaGlwUGxhY2VtZW50ID0gKG1lc3NhZ2UsIHdhdGVycywgY29vcmRpbmF0ZXMsIGRpcmVjdGlvbkJ1dHRvbikgPT4ge1xuICAgIC8vIGV4dHJhY3QgY3VycmVudGx5IHNlbGVjdGVkIGRpcmVjdGlvblxuICAgIGxldCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25CdXR0b24udGV4dENvbnRlbnQ7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uLnNsaWNlKDAsIDEpO1xuXG4gICAgLy8gdmVyaWZ5IHRoaXMgaXMgYSB2YWxpZCBwb3NpdGlvbiB0byBwbGFjZSB0aGUgc2hpcFxuICAgIGxldCB2YWxpZFBvc2l0aW9uO1xuICAgIHZhbGlkUG9zaXRpb24gPSBodW1hblBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlc1tjdXJyZW50U2hpcF0sIGRpcmVjdGlvbiwgY29vcmRpbmF0ZXMpO1xuICAgIFxuICAgIGlmICh2YWxpZFBvc2l0aW9uKSB7XG4gICAgICBsZXQgc3BhY2VzID0gd2F0ZXJzLmNoaWxkcmVuO1xuICAgICAgbGV0IGxvY2F0aW9uO1xuICAgICAgbGV0IHNwYWNlO1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHNbY3VycmVudFNoaXBdOyBpKyspIHtcbiAgICAgICAgICBsb2NhdGlvbiA9IChjb29yZGluYXRlc1swXSAqIDEwKSArIChjb29yZGluYXRlc1sxXSArIGkpO1xuICAgICAgICAgIHNwYWNlID0gc3BhY2VzW2xvY2F0aW9uXTtcbiAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXNwYWNlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzW2N1cnJlbnRTaGlwXTsgaSsrKSB7XG4gICAgICAgICAgbG9jYXRpb24gPSAoKGNvb3JkaW5hdGVzWzBdICsgaSkgKiAxMCkgKyBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgICBzcGFjZSA9IHNwYWNlc1tsb2NhdGlvbl07XG4gICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc2hpcC1zcGFjZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdXJyZW50U2hpcCsrO1xuICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgUGxhY2UgeW91ciAke3NoaXBUeXBlc1tjdXJyZW50U2hpcF19ICgke3NoaXBMZW5ndGhzW2N1cnJlbnRTaGlwXX0gc3BhY2VzKWA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgSW52YWxpZCBsb2NhdGlvbiwgeW91ciAke3NoaXBUeXBlc1tjdXJyZW50U2hpcF19IHJlcXVpcmVzICR7c2hpcExlbmd0aHNbY3VycmVudFNoaXBdfSBvcGVuIHNwYWNlcyBhbG9uZyB5b3VyIGNob3NlbiBheGlzYDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRTaGlwID4gNCkge1xuICAgICAgZGlzcGxheUdhbWVCb2FyZHMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VDb21wdXRlclNoaXBzID0gKCkgPT4ge1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIC8vIHJhbmRvbWl6ZSB0aGUgZGlyZWN0aW9uIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkXG4gICAgbGV0IGRpcmVjdGlvbiA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICd4JyA6ICd5Jyk7XG4gICAgbGV0IGNvb3JkaW5hdGVzO1xuICAgIGxldCB2YWxpZFBvc2l0aW9uO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGRvIHtcbiAgICAgICAgeCA9IGNvbXB1dGVyUGxheWVyLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHkgPSBjb21wdXRlclBsYXllci5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICBjb29yZGluYXRlcyA9IFt5LCB4XTtcbiAgICAgICAgLy8gcGxhY2Ugc2hpcCBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIGlmIHBvc2l0aW9uIGlzIGZpbGxlZFxuICAgICAgICAvLyB0aGlzIHByb21wdHMgdGhlIGxvb3AgdG8gcnVuIGFnYWluIGFuZCBjaG9vc2UgbmV3IGNvb3JkaW5hdGVzIHVudGlsIGl0IHdvcmtzXG4gICAgICAgIHZhbGlkUG9zaXRpb24gPSBjb21wdXRlclBsYXllci5nYW1lQm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlc1tpXSwgZGlyZWN0aW9uLCBjb29yZGluYXRlcyk7XG4gICAgICAgIGRpcmVjdGlvbiA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA/ICd4JyA6ICd5Jyk7XG4gICAgICB9IHdoaWxlICghdmFsaWRQb3NpdGlvbik7XG4gICAgICAvLyByZXNldCBjaGVjayBmb3IgdmFsaWQgcG9zaXRpb25cbiAgICAgIHZhbGlkUG9zaXRpb24gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKHR5cGUpID0+IHtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dHlwZX1gKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdnYW1lLWJvYXJkJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAodHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2h1bWFuUGxheWVyLm5hbWV9J3MgRmxlZXRgKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBFbmVteSBGbGVldGApKTtcbiAgICB9XG5cbiAgICBsZXQgd2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2F0ZXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmxlZXQtd2F0ZXJzJyk7XG5cbiAgICBib2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKHdhdGVycyk7XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlHYW1lQm9hcmRzID0gKCkgPT4ge1xuICAgIC8vIGNsZWFyIHRoZSBmb3JtIG5vdyB0aGF0IHRoZSBnYW1lIG9iamVjdHMgZXhpc3RcbiAgICBsZXQgZ2FtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1kaXNwbGF5JylcbiAgICBnYW1lRGlzcGxheS5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBvY2VhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9jZWFuLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FtZS13YXRlcnMnKTtcblxuICAgIGxldCBtZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZXMnKTtcbiAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRW5lbXkgZmxlZXQgYXBwcm9hY2hpbmchJykpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQcmVwYXJlIGZvciBiYXR0bGUhJykpO1xuXG4gICAgZ2FtZURpc3BsYXkuYXBwZW5kQ2hpbGQobWVzc2FnZURpc3BsYXkpO1xuICAgIGdhbWVEaXNwbGF5LmFwcGVuZENoaWxkKG9jZWFuKTtcblxuICAgIC8vIGNyZWF0ZSBnYW1lIGJvYXJkcyB0byBtYW5pcHVsYXRlXG4gICAgb2NlYW4uYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZUJvYXJkKCdodW1hbicpKTtcbiAgICBvY2Vhbi5hcHBlbmRDaGlsZChjcmVhdGVHYW1lQm9hcmQoJ2NvbXB1dGVyJykpO1xuXG4gICAgbGV0IGNvbXB1dGVyV2F0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZWV0LXdhdGVycycpWzFdO1xuICAgIGxldCBwbGF5ZXJXYXRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxlZXQtd2F0ZXJzJylbMF07XG5cbiAgICAvLyBjcmVhdGUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHNwYWNlIG9uIHRoZSBlbmVteSBnYW1lIGJvYXJkIHRvIHRyYWNrIGlmIGl0IHdhcyBhIGhpdCBvciBtaXNzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IHNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3BhY2UnKTtcbiAgICAgICAgLy8gdGhpcyBjbGFzcyB3aWxsIGJlIHJlbW92ZWQgZnJvbSBlbmVteSBnYW1lIGJvYXJkIG9uY2Ugc2hpcCBwb3NpdGlvbnMgYXJlIHJhbmRvbWl6ZWRcbiAgICAgICAgLy9pZiAoY29tcHV0ZXJQbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW2ldW2pdLm9jY3VwaWVkKSB7XG4gICAgICAgICAgLy9zcGFjZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXNwYWNlJyk7XG4gICAgICAgIC8vfVxuICAgICAgICBjb21wdXRlcldhdGVycy5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICAgIHNwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGlmIHRoZSBjb21wdXRlciBpcyBjdXJyZW50bHkgdGFraW5nIGEgdHVybiB0aGUgY2xpY2sgZXZlbnQgd2lsbCBub3QgcHJvY2VlZFxuICAgICAgICAgIGlmIChjb21wdXRlck1vdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29tcHV0ZXJNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICBwbGF5ZXJUdXJuKGksIGosIHNwYWNlKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGdhbWUgaXMgb3ZlciBkb24ndCBsZXQgdGhlIGNvbXB1dGVyIG1ha2UgYSBtb3ZlXG4gICAgICAgICAgICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICAgIGNvbXB1dGVyVHVybigpO1xuICAgICAgICAgICAgICBjb21wdXRlck1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gc2V0IHRvIGZhbHNlOyB0aGUgY29tcHV0ZXIgbWFkZSBpdHMgbW92ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcGFjZScpO1xuICAgICAgICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkW2ldW2pdLm9jY3VwaWVkKSB7XG4gICAgICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnc2hpcC1zcGFjZScpO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllcldhdGVycy5hcHBlbmRDaGlsZChzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllclR1cm4gPSAoeSwgeCwgc3BhY2UpID0+IHtcbiAgICBsZXQgaGl0ID0gaHVtYW5QbGF5ZXIudGFyZ2V0U3BhY2UoaHVtYW5QbGF5ZXIudHlwZSwgY29tcHV0ZXJQbGF5ZXIsIFt5LCB4XSk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgc3BhY2UuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAvLyBzZW5kIG1lc3NhZ2Ugb24gZ2FtZSBzdGF0ZVxuICAgICAgZ2FtZU1lc3NhZ2UoaGl0LCBodW1hblBsYXllcik7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIGdhbWVNZXNzYWdlKGhpdCwgaHVtYW5QbGF5ZXIpO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgIGxldCBjb29yZGluYXRlcyA9IGNvbXB1dGVyUGxheWVyLmNvbXB1dGVyVGFyZ2V0KGh1bWFuUGxheWVyKTtcbiAgICBsZXQgaGl0ID0gY29tcHV0ZXJQbGF5ZXIudGFyZ2V0U3BhY2UoY29tcHV0ZXJQbGF5ZXIudHlwZSwgaHVtYW5QbGF5ZXIsIGNvb3JkaW5hdGVzKTtcbiAgICBsZXQgbG9jYXRpb24gPSAoY29vcmRpbmF0ZXNbMF0gKiAxMCkgKyBjb29yZGluYXRlc1sxXTtcbiAgICBsZXQgc3BhY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0LXdhdGVycycpLmNoaWxkcmVuO1xuICAgIGxldCBzcGFjZSA9IHNwYWNlc1tsb2NhdGlvbl07XG5cbiAgICBpZiAoaGl0KSB7XG4gICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIGdhbWVNZXNzYWdlKGhpdCwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIGdhbWVNZXNzYWdlKGhpdCwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lTWVzc2FnZSA9ICh0YXJnZXQsIHBsYXllcikgPT4ge1xuICAgIGxldCBtZXNzYWdlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlcycpO1xuICAgIG1lc3NhZ2VEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKChwbGF5ZXIudHlwZSA9PT0gJ2h1bWFuJykgJiYgKHRhcmdldCkpIHtcbiAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBEaXJlY3QgaGl0LCBDYXB0YWluICR7cGxheWVyLm5hbWV9IWApKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGxheWVyLnR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQSBtaXNzISBCdXQgd2UnbGwgZ2V0IHRoZW0geWV0IVwiKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKChwbGF5ZXIudHlwZSA9PT0gJ2NvbXB1dGVyJykgJiYgKHRhcmdldCkpIHtcbiAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQmxhc3QhXCIpKTtcbiAgICAgIGlmICh0YXJnZXQub2NjdXBpZWQuc3Vuaykge1xuICAgICAgICBtZXNzYWdlRGlzcGxheS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFRoZSBlbmVteSBqdXN0IHN1bmsgb3VyICR7dGFyZ2V0Lm9jY3VwaWVkLnNoaXBUeXBlfSFgKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gICAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUaGUgZW5lbXkncyBoaXQgb3VyICR7dGFyZ2V0Lm9jY3VwaWVkLnNoaXBUeXBlfSFgKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBIG1pc3MhIFdlJ3JlIHN0aWxsIGluIHRoaXMhXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoaHVtYW5QbGF5ZXIuZ2FtZUJvYXJkLmxvc3QpIHtcbiAgICAgIGdhbWVFbmQoJ2h1bWFuJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbXB1dGVyUGxheWVyLmdhbWVCb2FyZC5sb3N0KSB7XG4gICAgICBnYW1lRW5kKCdjb21wdXRlcicpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnYW1lRW5kID0gKHR5cGUpID0+IHtcbiAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgbGV0IG1lc3NhZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2VzJyk7XG4gICAgaWYgKHR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJZb3UgbG9zdCFcIikpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1lc3NhZ2VEaXNwbGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuICAgICAgbWVzc2FnZURpc3BsYXkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJZb3Ugd29uIVwiKSk7XG4gICAgfVxuICAgIHBsYXlBZ2FpbigpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcbiAgICBsZXQgZ2FtZVNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWRpc3BsYXknKTtcbiAgICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZ2FtZVNjcmVlbi5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgcGxheUFnYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheS1hZ2FpbicpO1xuICAgIHBsYXlBZ2Fpbi5pbm5lckhUTUwgPSAnUGxheSBBZ2Fpbj8nO1xuICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIHJlY3JlYXRlIGluaXRpYWwgcGxheWVyIGZvcm0gZW50cnkgc2NyZWVuXG4gICAgICBnYW1lU2NyZWVuLmlubmVySFRNTCA9IFxuICAgICAgICBgPGZvcm0gaWQ9XCJwbGF5ZXItZW50cnlcIiBvbnN1Ym1pdD1cImV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwicGxheWVyTmFtZUlucHV0XCI+RW50ZXIgUGxheWVyIE5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGxheWVyTmFtZUlucHV0XCIgaWQ9XCJwbGF5ZXJOYW1lSW5wdXRcIiBwbGFjZWhvbGRlcj1cIkJhdHRsZXNoaXAgQ2FwdGFpbiBfX19fX19fX1wiIHBhdHRlcm49XCJeKCg/IWNvbXB1dGVyKS4pKiRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3RhcnRcIj5cbiAgICAgICAgPC9mb3JtPmBcbiAgICAgIFxuICAgICAgLy8gcmVtYWtlIGV2ZW50IGxpc3RlbmVyIGZvciBpbnB1dHRpbmcgbmV3IHBsYXllciBuYW1lXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWVudHJ5JykuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7RE9NQ29udHJvbC5wbGF5ZXJDcmVhdGlvbigpfSlcblxuICAgICAgLy8gcmVzZXQgZ2FtZSBzdGF0ZXNcbiAgICAgIGdhbWVPdmVyID0gZmFsc2U7XG4gICAgICBjb21wdXRlck1vdmUgPSBmYWxzZTtcbiAgICAgIGN1cnJlbnRTaGlwID0gMDtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHsgcGxheWVyQ3JlYXRpb24gfTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9