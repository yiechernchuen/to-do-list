/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\n    box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: 'Roboto', sans-serif;\n}\n\ninput {\n    border: none;\n    outline: none;\n}\n\n.header {\n    background-color: hsl(209, 75%, 38%);\n    padding: 1.5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: 'Yusei Magic', sans-serif;\n    color: white;\n}\n\n.header h1 {\n    margin-bottom: 0;\n}\n\n.projectHeader,\n.inboxHeader,\n.doneHeader {\n    font-size: 2rem;\n}\n\n.fa-list-ul {\n    padding-right: 0.5rem;\n}\n.fa-angles-down {\n    display: none;\n    cursor: pointer;\n}\n.h1 {\n    font-weight: bold;\n    margin: 0;\n    margin-bottom: 0.5rem;\n}\n#container {\n    flex-grow: 1;\n    display: flex;\n    background-color: #e9ecef;\n}\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 3rem;\n    gap: 1.5rem;\n    background-color: #ced4da;\n    box-shadow: 1px 0 1px -1px rgba(0, 0, 0, 0.2);\n}\n\n.tabBtnsContainer {\n    display: grid;\n    gap: 1rem;\n}\n\n.sidebarProject {\n    display: flex;\n    flex-direction: column;\n}\n.btn {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500;\n}\n.inboxBtn,\n.deletedBtn,\n.projectBtn {\n    width: 200px;\n    font-size: 1.2rem;\n}\n.projectBtn {\n    margin-bottom: 0.8rem;\n}\n\n.projectUserInputContainerParent {\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n.projectUserInputContainerChild {\n    margin-bottom: 5px;\n}\n.projectInput {\n    width: 200px;\n    padding-left: 7px;\n    background-color: #e7f5ff;\n    box-shadow: 0 0 2px rgb(0, 0, 0, 0.5);\n    border-radius: 20px;\n    margin-right: 5px;\n}\n.projectInput:focus-visible {\n    outline: none;\n    border: none;\n    box-shadow: 0 0 2px rgb(24, 100, 171);\n}\n\n.projectInput:invalid {\n    background-color: #fff;\n}\n\n.projectCross,\n.projectTick {\n    padding: 3px;\n}\n\n.tab {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin: 0 auto;\n    width: max(30rem, 40%);\n    padding: 2rem;\n}\n\n.inbox {\n    display: flex;\n}\n.toDoForm {\n    margin-bottom: 1rem;\n    gap: 0.5rem;\n}\nform {\n    display: flex;\n}\n.input {\n    flex-grow: 1;\n    border-radius: 20px;\n    border: none;\n    outline: none;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n    padding-left: 7px;\n}\n.input:focus-visible {\n    outline: none;\n    border: none;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);\n}\n.input:valid {\n    background-color: #e7f5ff;\n}\n.submitBtn {\n    padding: 0 1rem;\n}\n\n.list {\n    display: flex;\n    border-radius: 0.8rem;\n    align-items: center;\n    padding: 0.5rem 0;\n    padding-right: 7px;\n}\n.list:hover {\n    background-color: #d0ebff;\n    box-shadow: 0 0 2px #1864ab49;\n}\n\n.iconContainer {\n    display: flex;\n    gap: 0.5rem;\n    justify-content: center;\n    align-items: center;\n}\n\ni.fa-pen-to-square {\n    color: #0c6efd;\n}\n\ni.fa-check {\n    color: #1b995e;\n}\ni.fa-xmark {\n    color: #e13647;\n}\n\n.input2 {\n    flex-grow: 1;\n    padding-left: 7px;\n    border: none;\n    background-color: transparent;\n}\n.input2:focus-visible {\n    outline: none;\n}\n.edit,\n.tick,\n.cross {\n    cursor: pointer;\n}\n.project {\n    display: none;\n}\n.done {\n    display: none;\n}\n.doneHeader {\n    margin-bottom: 1rem;\n}\n.doneList {\n    text-align: start;\n    margin-bottom: 3px;\n}\n\nfooter {\n    margin-top: auto;\n    background-color: hsl(209, 75%, 38%);\n    color: white;\n    padding: 0.5rem;\n    text-align: center;\n    font-size: 1rem;\n}\n.fa-github {\n    color: white;\n    transition: transform 0.5s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: rotate(360deg) scale(1.25);\n}\n\n@media (max-width: 850px) {\n    .sidebar {\n        padding-left: 2rem;\n        padding-right: 2rem;\n    }\n\n    .inboxBtn,\n    .deletedBtn,\n    .projectBtn {\n        width: 10rem;\n        font-size: 1.2rem;\n    }\n\n    .projectInput {\n        width: 10rem;\n    }\n}\n\n@media (max-width: 630px) {\n    #container {\n        flex-direction: column;\n    }\n\n    .fa-angles-down {\n        display: block;\n    }\n\n    .sidebar {\n        display: none;\n        grid-template-columns: 1fr 1fr;\n        justify-items: center;\n        align-items: baseline;\n        padding: 1rem;\n        gap: 1rem;\n        background-color: rgb(218, 227, 235);\n    }\n\n    .sidebarProject {\n        align-self: center;\n    }\n\n    .projectHeader {\n        text-align: center;\n        margin-bottom: 1rem;\n    }\n\n    .inboxBtn,\n    .deletedBtn,\n    .projectBtn {\n        width: 200px;\n    }\n\n    .doneHeader {\n        padding: 0;\n    }\n}\n\n@media (max-width: 485px) {\n    .sidebar {\n        padding: 1rem 2rem;\n        grid-template-columns: 1fr;\n    }\n\n    .tab {\n        padding: 0.8rem;\n        padding-top: 1.5rem;\n        width: 90%;\n    }\n\n    .projectHeader {\n        margin-bottom: 0.5rem;\n    }\n\n    .inboxHeader,\n    .tab .projectHeader {\n        padding-left: 7px;\n    }\n\n    .projectHeader,\n    .inboxHeader,\n    .doneHeader {\n        font-size: 1.8rem;\n    }\n}\n\n@media (max-width: 375px) {\n    .sidebar {\n        justify-items: flex-start;\n    }\n\n    .inboxHeader,\n    .projectHeader,\n    .doneHeader {\n        text-align: start;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/doneTab.js":
/*!************************!*\
  !*** ./src/doneTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDoneTab: () => (/* binding */ updateDoneTab)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction updateDoneTab(input) {\n    const doneTab = document.querySelector('.done ul');\n    const doneList = document.createElement('li');\n    doneList.classList.add('doneList');\n    if (!input) {\n        return;\n    } else {\n        doneList.textContent = input;\n    }\n    doneTab.appendChild(doneList);\n}\nconst doneBtn = document.querySelector('.deletedBtn');\ndoneBtn.addEventListener('click', (e) => {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.tabSwitching)(e, 'done');\n});\n\n\n\n//# sourceURL=webpack://to-do-list/./src/doneTab.js?");

/***/ }),

/***/ "./src/inboxTab.js":
/*!*************************!*\
  !*** ./src/inboxTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendCreatedList: () => (/* binding */ appendCreatedList),\n/* harmony export */   createToDoList: () => (/* binding */ createToDoList)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _doneTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doneTab */ \"./src/doneTab.js\");\n\n\n\nfunction createToDoList(toDoValue) {\n    const div = document.createElement('div');\n    const iconContainer = document.createElement('div');\n    const input = document.createElement('input');\n    const span1 = document.createElement('span');\n    const span2 = document.createElement('span');\n    const span3 = document.createElement('span');\n    const editIcon = document.createElement('i');\n    const tickIcon = document.createElement('i');\n    const crossIcon = document.createElement('i');\n    div.classList.add('list');\n    iconContainer.classList.add('iconContainer');\n    input.classList.add('input2');\n    span1.classList.add('edit');\n    span2.classList.add('tick');\n    span3.classList.add('cross');\n    editIcon.classList.add('fa-solid', 'fa-pen-to-square', 'fa-lg');\n    tickIcon.classList.add('fa-solid', 'fa-check', 'fa-lg');\n    crossIcon.classList.add('fa-solid', 'fa-xmark', 'fa-lg');\n    input.type = 'text';\n    input.value = toDoValue;\n    input.readOnly = true;\n    span1.appendChild(editIcon);\n    span2.appendChild(tickIcon);\n    span3.appendChild(crossIcon);\n    iconContainer.append(span1, span2, span3);\n    div.append(input, iconContainer);\n    editTodo(input, span1);\n    doneTodo(div, span2, input);\n    deleteTodo(div, span3);\n    return div;\n}\n\nfunction appendCreatedList(createdList) {\n    const container = document.querySelector('.inbox');\n    container.appendChild(createdList);\n}\n\nfunction editTodo(input, edit) {\n    input.addEventListener('blur', () => {\n        input.readOnly = true;\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setInboxStorage)();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectStorage)();\n    });\n    edit.addEventListener('click', () => {\n        input.readOnly = false;\n        input.focus();\n    });\n}\n\nfunction doneTodo(div, tick, input) {\n    tick.addEventListener('click', () => {\n        div.remove();\n        (0,_doneTab__WEBPACK_IMPORTED_MODULE_1__.updateDoneTab)(input.value);\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setInboxStorage)();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectStorage)();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setDoneStorage)();\n    });\n}\n\nfunction deleteTodo(div, cross) {\n    cross.addEventListener('click', () => {\n        div.remove();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setInboxStorage)();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectStorage)();\n    });\n}\n\nfunction submit(e) {\n    e.preventDefault();\n    appendCreatedList(createToDoList(e.target[0].value));\n    form.reset();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setInboxStorage)();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectStorage)();\n}\n\nconst form = document.querySelector('.inbox .toDoForm');\nform.addEventListener('submit', submit);\n\nconst inboxBtn = document.querySelector('.inboxBtn');\ninboxBtn.addEventListener('click', (e) => {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.tabSwitching)(e, 'inbox');\n});\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/inboxTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setDoneStorage: () => (/* binding */ setDoneStorage),\n/* harmony export */   setInboxStorage: () => (/* binding */ setInboxStorage),\n/* harmony export */   setProjectSidebarStorage: () => (/* binding */ setProjectSidebarStorage),\n/* harmony export */   setProjectStorage: () => (/* binding */ setProjectStorage),\n/* harmony export */   tabSwitching: () => (/* binding */ tabSwitching)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _inboxTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxTab */ \"./src/inboxTab.js\");\n/* harmony import */ var _projectSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectSidebar */ \"./src/projectSidebar.js\");\n/* harmony import */ var _projectTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectTab */ \"./src/projectTab.js\");\n/* harmony import */ var _doneTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doneTab */ \"./src/doneTab.js\");\n\n\n\n\n\n\nfunction tabSwitching(e, tabName) {\n    const tabContent = document.querySelectorAll('.tab');\n    tabContent.forEach((tab) => {\n        tab.style.display = 'none';\n    });\n    const tabLinks = document.querySelectorAll('.tabBtns');\n    tabLinks.forEach((link) => {\n        link.classList.remove('active');\n    });\n    const tabActive = document.querySelector(`.tab.${tabName}`);\n    tabActive.style.display = 'flex';\n    e.target.classList.add('active');\n}\n\nfunction setInboxStorage() {\n    const inboxToDoValue = document.querySelectorAll('.inbox .list .input2');\n    let inboxStorage = [];\n    if (inboxToDoValue) {\n        inboxToDoValue.forEach((list) => {\n            inboxStorage.push(list.value);\n        });\n    }\n    if (inboxStorage.length > 0) {\n        localStorage.setItem('inbox', JSON.stringify(inboxStorage));\n    } else {\n        localStorage.removeItem('inbox');\n    }\n}\n\nfunction getInboxStorage() {\n    const inboxStorage = JSON.parse(localStorage.getItem('inbox'));\n    if (inboxStorage) {\n        inboxStorage.forEach((value) => {\n            (0,_inboxTab__WEBPACK_IMPORTED_MODULE_1__.appendCreatedList)((0,_inboxTab__WEBPACK_IMPORTED_MODULE_1__.createToDoList)(value));\n        });\n    }\n}\nfunction setProjectSidebarStorage() {\n    const sidebarProjectTitle = document.querySelectorAll('.projectInput.tabBtns');\n    const projectTitleStorage = [];\n    if (sidebarProjectTitle) {\n        sidebarProjectTitle.forEach((title) => {\n            projectTitleStorage.push(title.value);\n        });\n    }\n    if (projectTitleStorage.length > 0) {\n        localStorage.setItem('sidebarProject', JSON.stringify(projectTitleStorage));\n    } else {\n        localStorage.removeItem('sidebarProject');\n    }\n}\n\nfunction getProjectSidebarStorage() {\n    const projectTitleStorage = JSON.parse(localStorage.getItem('sidebarProject'));\n    const projectSidebarBox = document.querySelector('.projectUserInputContainerParent');\n    if (projectTitleStorage) {\n        projectTitleStorage.forEach((value) => {\n            projectSidebarBox.appendChild((0,_projectSidebar__WEBPACK_IMPORTED_MODULE_2__.addProject)(value));\n            document.querySelector('.projectTick').click();\n        });\n    }\n}\n\nfunction setProjectStorage() {\n    const projectTab = document.querySelectorAll('.tab.project');\n    const projectListStorage = {};\n    projectTab.forEach((tab, index) => {\n        const input = tab.querySelectorAll('.list .input2');\n        if (input.length > 0) {\n            projectListStorage[`project${index}`] = [];\n            input.forEach((list) => {\n                projectListStorage[`project${index}`].push(list.value);\n            });\n        }\n    });\n    if (Object.keys(projectListStorage).length > 0) {\n        localStorage.setItem('project', JSON.stringify(projectListStorage));\n    } else {\n        localStorage.removeItem('project');\n    }\n}\n\nfunction getProjectStorage() {\n    const projectStorage = JSON.parse(localStorage.getItem('project'));\n    if (projectStorage) {\n        for (const key in projectStorage) {\n            const projectTab = document.querySelector(`.tab.project.${key}`);\n            projectStorage[key].forEach((value) => {\n                projectTab.appendChild((0,_inboxTab__WEBPACK_IMPORTED_MODULE_1__.createToDoList)(value));\n            });\n        }\n    }\n}\n\nfunction setDoneStorage() {\n    const doneList = document.querySelectorAll('.tab .doneList');\n    const doneStorage = [];\n    doneList.forEach((list) => {\n        doneStorage.push(list.textContent);\n    });\n    localStorage.setItem('done', JSON.stringify(doneStorage));\n}\n\nfunction getDoneStorage() {\n    const doneStorage = JSON.parse(localStorage.getItem('done'));\n    if (doneStorage) doneStorage.forEach(_doneTab__WEBPACK_IMPORTED_MODULE_4__.updateDoneTab);\n}\n\nif (localStorage.length > 0) {\n    getInboxStorage();\n    getProjectSidebarStorage();\n    getProjectStorage();\n    getDoneStorage();\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/projectSidebar.js":
/*!*******************************!*\
  !*** ./src/projectSidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _projectTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectTab */ \"./src/projectTab.js\");\n\n\n\nfunction addProject(inputValue) {\n    const div = document.createElement('div');\n    const form = document.createElement('form');\n    const input = document.createElement('input');\n    const tick = document.createElement('button');\n    const cross = document.createElement('button');\n    const tickIcon = document.createElement('i');\n    const crossIcon = document.createElement('i');\n    div.classList.add('projectUserInputContainerChild');\n    input.classList.add('projectInput', 'tabBtns');\n    tick.classList.add('projectTick', 'btn');\n    cross.classList.add('projectCross', 'btn');\n    tickIcon.classList.add('fa-solid', 'fa-check', 'fa-lg');\n    crossIcon.classList.add('fa-solid', 'fa-xmark', 'fa-lg');\n    tick.append(tickIcon);\n    cross.append(crossIcon);\n    input.type = 'text';\n    input.required = true;\n    if (inputValue) input.value = inputValue;\n    tick.type = 'submit';\n    form.append(input, tick, cross);\n    div.append(form);\n    cross.addEventListener('click', projectDelete);\n    form.addEventListener('submit', projectTick);\n    return div;\n}\n\nfunction projectTick(e) {\n    const input = e.target[0];\n    const tick = e.target[1];\n    e.preventDefault();\n    input.readOnly = true;\n    input.required = false;\n    tick.remove();\n    (0,_projectTab__WEBPACK_IMPORTED_MODULE_1__.createToDoTab)(input.value);\n    addClassToProjectBtnAndTab();\n    projectBtn.style.display = 'inline-block';\n    input.addEventListener('click', (e) => {\n        addClassToProjectBtnAndTab();\n        (0,_index__WEBPACK_IMPORTED_MODULE_0__.tabSwitching)(e, e.target.classList[2]);\n    });\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectSidebarStorage)();\n}\n\nfunction projectDelete(e) {\n    const div = e.currentTarget.parentElement.parentElement;\n    const projectSidebarInput = e.currentTarget.form[0];\n    div.remove();\n    if (document.querySelector('.projectTick')) {\n        projectBtn.style.display = 'none';\n    } else {\n        projectBtn.style.display = 'inline-block';\n    }\n    const projectToBeDelete = document.querySelector(`.tab.${projectSidebarInput.classList[2]}`);\n    if (projectToBeDelete) {\n        projectToBeDelete.remove();\n        if (!document.querySelector('.active')) document.querySelector('.inboxBtn').click();\n    }\n\n    addClassToProjectBtnAndTab();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectSidebarStorage)();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectStorage)();\n}\n\nfunction addClassToProjectBtnAndTab() {\n    const projectInput = document.querySelectorAll('.projectInput');\n    const projectTabs = document.querySelectorAll('.project');\n    for (let i = 0; i < projectTabs.length && i < projectInput.length; i++) {\n        projectInput[i].className = `projectInput tabBtns project${i}`;\n        projectTabs[i].className = `tab project project${i}`;\n    }\n}\n\nconst projectBtn = document.querySelector('.projectBtn');\nprojectBtn.addEventListener('click', () => {\n    projectBtn.style.display = 'none';\n    const div = document.querySelector('.projectUserInputContainerParent');\n    div.appendChild(addProject());\n    document.querySelector('.projectInput[required]').focus();\n});\n\nconst navBarDropDownMenu = document.querySelector('.fa-angles-down');\nnavBarDropDownMenu.addEventListener('click', (e) => {\n    const sidebar = document.querySelector('.sidebar');\n    getComputedStyle(sidebar).display === 'none' ? (sidebar.style.display = 'grid') : (sidebar.style.display = 'none');\n});\n\nwindow.addEventListener('resize', () => {\n    const sidebar = document.querySelector('.sidebar');\n    if (window.outerWidth > 630) sidebar.removeAttribute('style');\n});\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projectSidebar.js?");

/***/ }),

/***/ "./src/projectTab.js":
/*!***************************!*\
  !*** ./src/projectTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDoTab: () => (/* binding */ createToDoTab)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _inboxTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxTab */ \"./src/inboxTab.js\");\n\n\n\nfunction createToDoTab(title) {\n    const div = document.createElement('div');\n    const h1 = document.createElement('h1');\n    const form = document.createElement('form');\n    const textInput = document.createElement('input');\n    const submitInput = document.createElement('input');\n    const container = document.querySelector('#container');\n    div.classList.add('tab', 'project');\n    form.classList.add('toDoForm');\n    h1.classList.add('h1', 'projectHeader');\n    h1.textContent = title;\n    textInput.classList.add('input');\n    textInput.required = true;\n    submitInput.classList.add('submitBtn', 'btn', 'btn-success');\n    submitInput.type = 'submit';\n    submitInput.value = 'Enter';\n    form.append(textInput, submitInput);\n    div.append(h1, form);\n    container.appendChild(div);\n    form.addEventListener('submit', submit);\n}\n\nfunction submit(e) {\n    e.preventDefault();\n    e.target.parentElement.appendChild((0,_inboxTab__WEBPACK_IMPORTED_MODULE_1__.createToDoList)(e.target[0].value));\n    e.target.reset();\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setProjectStorage)();\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/projectTab.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;