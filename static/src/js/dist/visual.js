/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/visual.js":
/*!**************************!*\
  !*** ./src/js/visual.js ***!
  \**************************/
/***/ (() => {

eval("let martiniModel;\nlet setSpecularColor = true;\n\n\n// 만든 OBJ 모델 업로드\nfunction preload() {\n  martiniModel = loadModel('../static/assets/martini.obj', true);\n}\n\nfunction setup() {\n  createCanvas(800, 800, WEBGL);\n  noStroke();\n}\n\nfunction draw(){\n  background(255);\n  orbitControl();\n  let locX = mouseX - width / 2;\n  let locY = mouseY - height / 2;\n\n  ambientLight(200, 200, 110);\n\n  if (setSpecularColor) {\n    specularColor(168, 221, 240);\n  }\n  // -- create the light\n  pointLight(80, 129, 146, locX, locY, 50); // white light\n\n\n  specularMaterial(210);\n  shininess(10);\n\n  scale(2)\n  rotateX(-10)\n  rotateY(16)\n  rotateY(millis() / 6000);\n  model(martiniModel);\n}\n\n//# sourceURL=webpack://VisualArts/./src/js/visual.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/visual.js"]();
/******/ 	
/******/ })()
;