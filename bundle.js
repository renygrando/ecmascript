/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack://Ecmascript_course/./functions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
eval("\n\nvar _functions = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\n// const arr = [ 1, 3, 4, 5, 8, 9]\n// const newArr = arr.map((item) => {\n//   return item * 2 \n// })\n// console.log(newArr)\n// // map com arrow function:\n// const newArrTwo = arr.map(item => item * 2)\n// console.log(newArrTwo)\n// // fim map\n// const sum = arr.reduce(function(total, next){\n//   return total + next\n// })\n// console.log(sum)\n// //reduce com arrow function:\n// const sum2 = arr.reduce((total, next) => {\n//   return total + next\n// }) \n// console.log(sum2)\n// // fim reduce\n// const filter = arr.filter(function(item) {\n//   return item % 2 === 0\n// })\n// console.log(filter)\n// //filter com arrow function:\n// const filter2 = arr.filter(item => item % 2 === 0)\n// console.log(filter2)\n// // fim filter\n// const find = arr.find(function(item){\n//   return item === 3\n// })\n// console.log(find)\n// //find com arrow function:\n// const find2 = arr.find(item => item === 3)\n// console.log(find2)\n// //fim find\n// // VALORES PADRÃO\n// const soma = (a = 3, b =6) => a + b\n// console.log(soma(1))\n// console.log(soma())\n// // DESESTRUTURAÇÃO DE OBJETOS\n// const usuario = {\n//   nome: \"Reny\",\n//   idade: 31,\n//   endereco: {\n//     cidade: 'osasco',\n//     estado: 'SP'\n//   },\n// }\n// const { nome, idade, endereco: { cidade } } = usuario\n// console.log(nome)\n// console.log(idade)\n// console.log(cidade)\n// // UTILIZANDO DESESTRUTURAÇÃO DENTRO DA FUNCTION\n// function mostraNome({endereco: {cidade}}) {\n//   console.log(cidade)\n// }\n// mostraNome(usuario)\n// // UTILIZANDO REST OPERATOR\n// const usuario = {\n//   nome: \"Reny\", \n//   idade: 31,\n//   empresa: \"Oliver\",\n//   cidade: \"Osasco\",\n//   estado: \"SP\"\n// }\n// const { nome, ...resto} = usuario\n// console.log(nome, resto)\n// function soma(a, b, ...params){\n//   return params.reduce((total, next) => total + next)\n// }\n// console.log(soma(1, 2, 3, 4, 5, 6, 7))\n// // SPREAD OPERATOR\n// const arr1 = [1, 2, 3]\n// const arr2 = [4, 5, 6]\n// const arr3 = [ ...arr1, ...arr2 ]\n// console.log(arr3)\n// const usuario1 = {\n//   nome: \"Reny\",\n//   idade: 23,\n//   empresa: \"oliver\"\n// }\n// const usuario2 = {...usuario1, nome: 'Pipoca'}\n// console.log(usuario2)\n// // TEMPLATE LITERALS\n// const nome = 'Reny'\n// const idade = 31\n// console.log(`meu nome é ${nome} e tenho ${idade} anos.`)\n// // OBJECT SHORT SYNTAX\n// const nome = \"Reny\"\n// const idade = 31\n// const usuario = {\n// \tnome, // aqui não precisamos atribuir o valor à propriedade\n// \tidade,\n// \tempresa: \"Rocketseat\"\n// }\n// console.log(usuario)\nconsole.log((0, _functions.soma)(1, 2));\n\n//# sourceURL=webpack://Ecmascript_course/./main.js?");
})();

/******/ })()
;