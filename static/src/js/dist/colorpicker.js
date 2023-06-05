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

/***/ "./src/js/colorpicker.js":
/*!*******************************!*\
  !*** ./src/js/colorpicker.js ***!
  \*******************************/
/***/ (() => {

eval("const input = document.querySelector(\"input\")\nconst output = document.querySelector(\"output\")\nlet imagesArray = []\n\n\ninput.addEventListener(\"change\", () => {\n    const file = input.files\n    imagesArray.push(file[0])\n    displayImages()\n  })\n\n\n\nfunction displayImages() {\n    let images = \"\"\n    imagesArray.forEach((image, index) => {\n        images += `<div class=\"image\">\n                    <img src=\"${URL.createObjectURL(image)}\" alt=\"image\">\n                    <span onclick=\"deleteImage(${index})\">&times;</span>\n                </div>`\n    })\n    output.innerHTML = images\n}\n\n\n\nfunction deleteImage(index) {\n    imagesArray.splice(index, 1)\n    displayImages()\n}\n\n//# sourceURL=webpack://VisualArts/./src/js/colorpicker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/colorpicker.js"]();
/******/ 	
/******/ })()
;