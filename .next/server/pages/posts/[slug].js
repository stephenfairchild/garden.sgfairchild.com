module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/posts/[slug].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/navbar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/components/navbar.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction Navbar() {\n  return __jsx(\"nav\", {\n    className: \"flex items-center justify-between flex-wrap bg-gray-700 p-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center flex-shrink-0 text-white mr-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"font-semibold text-xl tracking-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 17\n    }\n  }, \"Fairchild Portfolio & Projects\")), __jsx(\"div\", {\n    className: \"block lg:hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-3 w-3\",\n    viewBox: \"0 0 20 20\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 25\n    }\n  }, \"Menu\"), __jsx(\"path\", {\n    d: \"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  })))), __jsx(\"div\", {\n    className: \"w-full block flex-grow lg:flex lg:items-center lg:w-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"text-sm lg:flex-grow\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    className: \"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, \"Projects\"), __jsx(\"a\", {\n    href: \"/pictures\",\n    className: \"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, \"Pictures\"), __jsx(\"a\", {\n    href: \"/code\",\n    className: \"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }, \"Code\")), __jsx(\"div\", {\n    style: {\n      display: \"none\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    className: \"inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }, \"Dark mode\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanN4P2QzZmMiXSwibmFtZXMiOlsiTmF2YmFyIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0IsU0FDSTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLHNDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsOEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxzQkFEZDtBQUVJLFdBQU8sRUFBQyxXQUZaO0FBR0ksU0FBSyxFQUFDLDRCQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosRUFNSTtBQUFNLEtBQUMsRUFBQyw2Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESixDQURKLENBTkosRUFrQkk7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFFBQUksRUFBQyxHQURUO0FBRUksYUFBUyxFQUFDLHFFQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFPSTtBQUNJLFFBQUksRUFBQyxXQURUO0FBRUksYUFBUyxFQUFDLHFFQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosRUFhSTtBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksYUFBUyxFQUFDLHFFQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixDQURKLEVBcUJJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksUUFBSSxFQUFDLEdBRFQ7QUFFSSxhQUFTLEVBQUMsNkpBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixDQXJCSixDQWxCSixDQURKO0FBbURIIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgYmctZ3JheS03MDAgcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtc2hyaW5rLTAgdGV4dC13aGl0ZSBtci02XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIEZhaXJjaGlsZCBQb3J0Zm9saW8gJiBQcm9qZWN0c1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTMgcHktMiBib3JkZXIgcm91bmRlZCB0ZXh0LXRlYWwtMjAwIGJvcmRlci10ZWFsLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC0zIHctM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+TWVudTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgM2gyMHYySDBWM3ptMCA2aDIwdjJIMFY5em0wIDZoMjB2Mkgwdi0yelwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBibG9jayBmbGV4LWdyb3cgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOmZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcGljdHVyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtNCBsZzppbmxpbmUtYmxvY2sgbGc6bXQtMCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgbXItNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBpY3R1cmVzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC00IGxnOmlubGluZS1ibG9jayBsZzptdC0wIHRleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZSBtci00XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29kZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LXNtIHB4LTQgcHktMiBsZWFkaW5nLW5vbmUgYm9yZGVyIHJvdW5kZWQgdGV4dC13aGl0ZSBib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOnRleHQtdGVhbC01MDAgaG92ZXI6Ymctd2hpdGUgbXQtNCBsZzptdC0wXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGFyayBtb2RlXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navbar.jsx\n");

/***/ }),

/***/ "./src/content-api.js":
/*!****************************!*\
  !*** ./src/content-api.js ***!
  \****************************/
/*! exports provided: default, getAllPosts, getAllCategories, getAllPostsInCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPostBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCategories\", function() { return getAllCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPostsInCategory\", function() { return getAllPostsInCategory; });\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanity-client */ \"./src/sanity-client.js\");\n\n\nasync function getPostBySlug(slug) {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n      title,\n      \"name\": author->name,\n      \"categories\": categories[]->title,\n      \"authorImage\": author->image,\n      publishedAt,\n      body\n    }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {\n    slug\n  });\n}\nasync function getAllPosts() {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"post\"]{\n        title,\n        description,\n        slug,\n      }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {});\n}\nasync function getAllCategories() {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"category\"]{\n        title,\n        description,\n        slug,\n      }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {});\n}\nasync function getAllPostsInCategory(category) {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type==\"post\" && references(*[_type==\"category\" && slug.current == \"${category}\"]._id)]{\n      title,\n      \"slug\": slug.current\n    }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {\n    category\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC1hcGkuanM/NzdmZiJdLCJuYW1lcyI6WyJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsInF1ZXJ5IiwiZ3JvcSIsImNsaWVudCIsImZldGNoIiwiZ2V0QWxsUG9zdHMiLCJnZXRBbGxDYXRlZ29yaWVzIiwiZ2V0QWxsUG9zdHNJbkNhdGVnb3J5IiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsZUFBZUEsYUFBZixDQUE2QkMsSUFBN0IsRUFBbUM7QUFDOUMsUUFBTUMsS0FBSyxHQUFHQywyQ0FBSzs7Ozs7OztNQUFuQjtBQVNBLFNBQU9DLHNEQUFNLENBQUNDLEtBQVAsQ0FBYUgsS0FBYixFQUFvQjtBQUFFRDtBQUFGLEdBQXBCLENBQVA7QUFDSDtBQUVNLGVBQWVLLFdBQWYsR0FBNkI7QUFDaEMsUUFBTUosS0FBSyxHQUFHQywyQ0FBSzs7OztRQUFuQjtBQU1BLFNBQU9DLHNEQUFNLENBQUNDLEtBQVAsQ0FBYUgsS0FBYixFQUFvQixFQUFwQixDQUFQO0FBQ0g7QUFFTSxlQUFlSyxnQkFBZixHQUFrQztBQUNyQyxRQUFNTCxLQUFLLEdBQUdDLDJDQUFLOzs7O1FBQW5CO0FBTUEsU0FBT0Msc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFiLEVBQW9CLEVBQXBCLENBQVA7QUFDSDtBQUVNLGVBQWVNLHFCQUFmLENBQXFDQyxRQUFyQyxFQUErQztBQUNsRCxRQUFNUCxLQUFLLEdBQUdDLDJDQUFLLHlFQUF3RU0sUUFBUzs7O01BQXBHO0FBS0EsU0FBT0wsc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFiLEVBQW9CO0FBQUVPO0FBQUYsR0FBcEIsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL2NvbnRlbnQtYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4vc2FuaXR5LWNsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0QnlTbHVnKHNsdWcpIHtcbiAgICBjb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICAgICAgdGl0bGUsXG4gICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICAgICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBwdWJsaXNoZWRBdCxcbiAgICAgIGJvZHlcbiAgICB9YDtcblxuICAgIHJldHVybiBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXXtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzbHVnLFxuICAgICAgfWA7XG5cbiAgICByZXR1cm4gY2xpZW50LmZldGNoKHF1ZXJ5LCB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDYXRlZ29yaWVzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwiY2F0ZWdvcnlcIl17XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgc2x1ZyxcbiAgICAgIH1gO1xuXG4gICAgcmV0dXJuIGNsaWVudC5mZXRjaChxdWVyeSwge30pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNJbkNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGU9PVwicG9zdFwiICYmIHJlZmVyZW5jZXMoKltfdHlwZT09XCJjYXRlZ29yeVwiICYmIHNsdWcuY3VycmVudCA9PSBcIiR7Y2F0ZWdvcnl9XCJdLl9pZClde1xuICAgICAgdGl0bGUsXG4gICAgICBcInNsdWdcIjogc2x1Zy5jdXJyZW50XG4gICAgfWA7XG5cbiAgICByZXR1cm4gY2xpZW50LmZldGNoKHF1ZXJ5LCB7IGNhdGVnb3J5IH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/content-api.js\n");

/***/ }),

/***/ "./src/pages/posts/[slug].jsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].jsx ***!
  \************************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sanity-client */ \"./src/sanity-client.js\");\n/* harmony import */ var _content_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../content-api */ \"./src/content-api.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _render_body_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render-body-content */ \"./src/render-body-content.jsx\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navbar */ \"./src/components/navbar.jsx\");\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/pages/posts/[slug].jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_sanity_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\n\nasync function getStaticProps(context) {\n  const data = await Object(_content_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(context.params.slug);\n  return {\n    props: data\n  };\n}\nasync function getStaticPaths() {\n  const posts = await Object(_content_api__WEBPACK_IMPORTED_MODULE_3__[\"getAllPosts\"])();\n  const paths = posts.map(post => ({\n    params: {\n      slug: post.slug.current\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nfunction Post(props) {\n  const {\n    title,\n    publishedAt,\n    body = []\n  } = props;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), __jsx(\"article\", {\n    className: \"p-8 mx-auto max-w-6xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"font-bold text-gray-500\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(publishedAt).format(\"MMMM Do, YYYY\")), __jsx(\"h1\", {\n    className: \"text-4xl font-bold text-gray-800\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, title), __jsx(\"div\", {\n    className: \"text-xl text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, Object(_render_body_content__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(body))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLmpzeD9kM2RhIl0sIm5hbWVzIjpbInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZGF0YSIsImdldFBvc3RCeVNsdWciLCJwYXJhbXMiLCJzbHVnIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBvc3RzIiwiZ2V0QWxsUG9zdHMiLCJwYXRocyIsIm1hcCIsInBvc3QiLCJjdXJyZW50IiwiZmFsbGJhY2siLCJQb3N0IiwidGl0bGUiLCJwdWJsaXNoZWRBdCIsImJvZHkiLCJtb21lbnQiLCJmb3JtYXQiLCJyZW5kZXJCb2R5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDcEIsU0FBT0Msd0RBQWUsQ0FBQ0Msc0RBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDSDs7QUFFTSxlQUFlSSxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUMxQyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNERBQWEsQ0FBQ0YsT0FBTyxDQUFDRyxNQUFSLENBQWVDLElBQWhCLENBQWhDO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUVKO0FBREosR0FBUDtBQUdIO0FBRU0sZUFBZUssY0FBZixHQUFnQztBQUNuQyxRQUFNQyxLQUFLLEdBQUcsTUFBTUMsZ0VBQVcsRUFBL0I7QUFFQSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFVQyxJQUFJLEtBQUs7QUFDN0JSLFVBQU0sRUFBRTtBQUFFQyxVQUFJLEVBQUVPLElBQUksQ0FBQ1AsSUFBTCxDQUFVUTtBQUFsQjtBQURxQixHQUFMLENBQWQsQ0FBZDtBQUlBLFNBQU87QUFBRUgsU0FBRjtBQUFTSSxZQUFRLEVBQUU7QUFBbkIsR0FBUDtBQUNIO0FBRWMsU0FBU0MsSUFBVCxDQUFjVCxLQUFkLEVBQXFCO0FBQ2hDLFFBQU07QUFBRVUsU0FBRjtBQUFTQyxlQUFUO0FBQXNCQyxRQUFJLEdBQUc7QUFBN0IsTUFBb0NaLEtBQTFDO0FBQ0EsU0FDSSxtRUFDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVMsYUFBUyxFQUFDLHVCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLYSw2Q0FBTSxDQUFDRixXQUFELENBQU4sQ0FBb0JHLE1BQXBCLENBQTJCLGVBQTNCLENBREwsQ0FESixFQUlJO0FBQUksYUFBUyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0RKLEtBQWxELENBSkosRUFLSTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tLLG9FQUFpQixDQUFDSCxJQUFELENBRHRCLENBTEosQ0FGSixDQURKO0FBY0giLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9zYW5pdHktY2xpZW50XCI7XG5pbXBvcnQgZ2V0UG9zdEJ5U2x1ZywgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi8uLi9jb250ZW50LWFwaVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgcmVuZGVyQm9keUNvbnRlbnQgZnJvbSBcIi4uLy4uL3JlbmRlci1ib2R5LWNvbnRlbnRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5cbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdEJ5U2x1Zyhjb250ZXh0LnBhcmFtcy5zbHVnKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiBkYXRhXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcblxuICAgIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKHBvc3QgPT4gKHtcbiAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1Zy5jdXJyZW50IH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBwdWJsaXNoZWRBdCwgYm9keSA9IFtdIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicC04IG14LWF1dG8gbWF4LXctNnhsXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHttb21lbnQocHVibGlzaGVkQXQpLmZvcm1hdChcIk1NTU0gRG8sIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS04MDBcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQm9keUNvbnRlbnQoYm9keSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].jsx\n");

/***/ }),

/***/ "./src/render-body-content.jsx":
/*!*************************************!*\
  !*** ./src/render-body-content.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RenderBodyContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanity-client */ \"./src/sanity-client.js\");\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/render-body-content.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction RenderBodyContent(body) {\n  const serializers = {\n    list: props => __jsx(\"ul\", {\n      className: \"pt-2 pl-10 list-disc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 13\n      }\n    }, props.children),\n    types: {\n      block(props) {\n        switch (props.node.style) {\n          case \"h1\":\n            return __jsx(\"h1\", {\n              className: \"\",\n              __self: this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 13,\n                columnNumber: 32\n              }\n            }, props.children);\n\n          case \"blockquote\":\n            return __jsx(\"blockquote\", {\n              className: \"\",\n              __self: this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 29\n              }\n            }, props.children);\n\n          default:\n            return __jsx(\"p\", {\n              className: \"pt-2 pb-2\",\n              __self: this,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 32\n              }\n            }, props.children);\n        }\n      }\n\n    }\n  };\n  return __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({\n    serializers: serializers,\n    blocks: body,\n    imageOptions: {\n      w: 320,\n      h: 240,\n      fit: \"max\"\n    }\n  }, _sanity_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].config(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLWJvZHktY29udGVudC5qc3g/NzU5MyJdLCJuYW1lcyI6WyJSZW5kZXJCb2R5Q29udGVudCIsImJvZHkiLCJzZXJpYWxpemVycyIsImxpc3QiLCJwcm9wcyIsImNoaWxkcmVuIiwidHlwZXMiLCJibG9jayIsIm5vZGUiLCJzdHlsZSIsInciLCJoIiwiZml0IiwiY2xpZW50IiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGlCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM1QyxRQUFNQyxXQUFXLEdBQUc7QUFDaEJDLFFBQUksRUFBRUMsS0FBSyxJQUNQO0FBQUksZUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0NBLEtBQUssQ0FBQ0MsUUFBNUMsQ0FGWTtBQUloQkMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssQ0FBQ0gsS0FBRCxFQUFRO0FBQ1QsZ0JBQVFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXQyxLQUFuQjtBQUNJLGVBQUssSUFBTDtBQUNJLG1CQUFPO0FBQUksdUJBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBa0JMLEtBQUssQ0FBQ0MsUUFBeEIsQ0FBUDs7QUFDSixlQUFLLFlBQUw7QUFDSSxtQkFDSTtBQUFZLHVCQUFTLEVBQUMsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNLRCxLQUFLLENBQUNDLFFBRFgsQ0FESjs7QUFNSjtBQUNJLG1CQUFPO0FBQUcsdUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMEJELEtBQUssQ0FBQ0MsUUFBaEMsQ0FBUDtBQVhSO0FBYUg7O0FBZkU7QUFKUyxHQUFwQjtBQXVCQSxTQUNJLE1BQUMscUVBQUQ7QUFDSSxlQUFXLEVBQUVILFdBRGpCO0FBRUksVUFBTSxFQUFFRCxJQUZaO0FBR0ksZ0JBQVksRUFBRTtBQUFFUyxPQUFDLEVBQUUsR0FBTDtBQUFVQyxPQUFDLEVBQUUsR0FBYjtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCO0FBSGxCLEtBSVFDLHNEQUFNLENBQUNDLE1BQVAsRUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREo7QUFRSCIsImZpbGUiOiIuL3NyYy9yZW5kZXItYm9keS1jb250ZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9zYW5pdHktY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmRlckJvZHlDb250ZW50KGJvZHkpIHtcbiAgICBjb25zdCBzZXJpYWxpemVycyA9IHtcbiAgICAgICAgbGlzdDogcHJvcHMgPT4gKFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB0LTIgcGwtMTAgbGlzdC1kaXNjXCI+e3Byb3BzLmNoaWxkcmVufTwvdWw+XG4gICAgICAgICksXG4gICAgICAgIHR5cGVzOiB7XG4gICAgICAgICAgICBibG9jayhwcm9wcykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcHMubm9kZS5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaDFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiXCI+e3Byb3BzLmNoaWxkcmVufTwvaDE+O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmxvY2txdW90ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJwdC0yIHBiLTJcIj57cHJvcHMuY2hpbGRyZW59PC9wPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgICAgICAgYmxvY2tzPXtib2R5fVxuICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6IFwibWF4XCIgfX1cbiAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/render-body-content.jsx\n");

/***/ }),

/***/ "./src/sanity-client.js":
/*!******************************!*\
  !*** ./src/sanity-client.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n  projectId: \"mbuvk8iz\",\n  dataset: \"production\",\n  useCdn: false\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2FuaXR5LWNsaWVudC5qcz8wMTJkIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWVBLG9IQUFZLENBQUM7QUFDMUJDLFdBQVMsRUFBRSxVQURlO0FBRTFCQyxTQUFPLEVBQUUsWUFGaUI7QUFHMUJDLFFBQU0sRUFBRTtBQUhrQixDQUFELENBQTNCIiwiZmlsZSI6Ii4vc3JjL3Nhbml0eS1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwibWJ1dms4aXpcIixcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXG4gIHVzZUNkbjogZmFsc2UsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sanity-client.js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/block-content-to-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIj9mYWQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/block-content-to-react\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"groq\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncm9xXCI/ZTYzYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncm9xLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///groq\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });