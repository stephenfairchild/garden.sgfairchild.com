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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/category/[category].jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/ListOfPosts.jsx":
/*!****************************************!*\
  !*** ./src/components/ListOfPosts.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListOfPosts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/components/ListOfPosts.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ListOfPosts(props) {\n  const {\n    posts\n  } = props;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    className: \"text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Most recent\"), __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, posts.map(post => __jsx(\"a\", {\n    href: `/posts/${post.slug}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }, __jsx(\"li\", {\n    className: \"cursor-pointer hover:font-light\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 25\n    }\n  }, post.title)))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0T2ZQb3N0cy5qc3g/ZTJmMSJdLCJuYW1lcyI6WyJMaXN0T2ZQb3N0cyIsInByb3BzIiwicG9zdHMiLCJtYXAiLCJwb3N0Iiwic2x1ZyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3ZDLFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjtBQUVBLFNBQ0ksbUVBQ0k7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsSUFBSSxJQUNYO0FBQUcsUUFBSSxFQUFHLFVBQVNBLElBQUksQ0FBQ0MsSUFBSyxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsaUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxJQUFJLENBQUNFLEtBRFYsQ0FESixDQURILENBREwsQ0FGSixDQURKO0FBY0giLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaXN0T2ZQb3N0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RPZlBvc3RzKHByb3BzKSB7XG4gICAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGxcIj5Nb3N0IHJlY2VudDwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjpmb250LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ListOfPosts.jsx\n");

/***/ }),

/***/ "./src/components/PhotoPosts.jsx":
/*!***************************************!*\
  !*** ./src/components/PhotoPosts.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-builder */ \"./src/image-builder.js\");\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/components/PhotoPosts.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction PhotoPosts(props) {\n  const {\n    posts\n  } = props;\n\n  const showImage = src => Object(_image_builder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(src).height(400).width(400).url();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, posts.map(post => __jsx(\"img\", {\n    className: \"lg:float-left sm:w-full sm:h-full md:w-64 md:h-64 m-1 p-1\",\n    src: showImage(post.mainImage),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaG90b1Bvc3RzLmpzeD9lZjczIl0sIm5hbWVzIjpbIlBob3RvUG9zdHMiLCJwcm9wcyIsInBvc3RzIiwic2hvd0ltYWdlIiwic3JjIiwiaW1hZ2VCdWlsZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cmwiLCJtYXAiLCJwb3N0IiwibWFpbkltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3RDLFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjs7QUFDQSxRQUFNRSxTQUFTLEdBQUdDLEdBQUcsSUFBSUMsOERBQVksQ0FBQ0QsR0FBRCxDQUFaLENBQWtCRSxNQUFsQixDQUF5QixHQUF6QixFQUE4QkMsS0FBOUIsQ0FBb0MsR0FBcEMsRUFBeUNDLEdBQXpDLEVBQXpCOztBQUVBLFNBQ0ksbUVBQ0tOLEtBQUssQ0FBQ08sR0FBTixDQUFVQyxJQUFJLElBQ1g7QUFDSSxhQUFTLEVBQUMsMkRBRGQ7QUFFSSxPQUFHLEVBQUVQLFNBQVMsQ0FBQ08sSUFBSSxDQUFDQyxTQUFOLENBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxDQURMLENBREo7QUFVSCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bob3RvUG9zdHMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGltYWdlQnVpbGRlciBmcm9tIFwiLi4vaW1hZ2UtYnVpbGRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG90b1Bvc3RzKHByb3BzKSB7XG4gICAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2hvd0ltYWdlID0gc3JjID0+IGltYWdlQnVpbGRlcihzcmMpLmhlaWdodCg0MDApLndpZHRoKDQwMCkudXJsKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmZsb2F0LWxlZnQgc206dy1mdWxsIHNtOmgtZnVsbCBtZDp3LTY0IG1kOmgtNjQgbS0xIHAtMVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17c2hvd0ltYWdlKHBvc3QubWFpbkltYWdlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PhotoPosts.jsx\n");

/***/ }),

/***/ "./src/content-api.js":
/*!****************************!*\
  !*** ./src/content-api.js ***!
  \****************************/
/*! exports provided: default, getAllPosts, getAllCategories, getCategoryBySlug, getAllPostsInCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPostBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCategories\", function() { return getAllCategories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategoryBySlug\", function() { return getCategoryBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPostsInCategory\", function() { return getAllPostsInCategory; });\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanity-client */ \"./src/sanity-client.js\");\n\n\nasync function getPostBySlug(slug) {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"post\" && slug.current == $slug][0]{\n      title,\n      \"name\": author->name,\n      \"categories\": categories[]->title,\n      \"authorImage\": author->image,\n      publishedAt,\n      body\n    }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {\n    slug\n  });\n}\nasync function getAllPosts() {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"post\"]{\n        title,\n        description,\n        slug,\n        \"mainImage\": mainImage.asset->url,\n      }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {});\n}\nasync function getAllCategories() {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"category\"]{\n        title,\n        description,\n        type,\n        \"image\": coverImage.asset->url,\n        slug,\n      }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {});\n}\nasync function getCategoryBySlug(slug) {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == \"category\" && slug.current == $slug][0]{\n        title,\n        description,\n        type,\n        \"image\": coverImage.asset->url,\n        slug,\n    }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {\n    slug\n  });\n}\nasync function getAllPostsInCategory(category) {\n  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type==\"post\" && references(*[_type==\"category\" && slug.current == \"${category}\"]._id)]{\n      \"mainImage\": mainImage.asset->url,\n      title,\n      \"slug\": slug.current\n    }`;\n  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(query, {\n    category\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC1hcGkuanM/NzdmZiJdLCJuYW1lcyI6WyJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsInF1ZXJ5IiwiZ3JvcSIsImNsaWVudCIsImZldGNoIiwiZ2V0QWxsUG9zdHMiLCJnZXRBbGxDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnlCeVNsdWciLCJnZXRBbGxQb3N0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLGVBQWVBLGFBQWYsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQzlDLFFBQU1DLEtBQUssR0FBR0MsMkNBQUs7Ozs7Ozs7TUFBbkI7QUFTQSxTQUFPQyxzREFBTSxDQUFDQyxLQUFQLENBQWFILEtBQWIsRUFBb0I7QUFBRUQ7QUFBRixHQUFwQixDQUFQO0FBQ0g7QUFFTSxlQUFlSyxXQUFmLEdBQTZCO0FBQ2hDLFFBQU1KLEtBQUssR0FBR0MsMkNBQUs7Ozs7O1FBQW5CO0FBT0EsU0FBT0Msc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFiLEVBQW9CLEVBQXBCLENBQVA7QUFDSDtBQUVNLGVBQWVLLGdCQUFmLEdBQWtDO0FBQ3JDLFFBQU1MLEtBQUssR0FBR0MsMkNBQUs7Ozs7OztRQUFuQjtBQVFBLFNBQU9DLHNEQUFNLENBQUNDLEtBQVAsQ0FBYUgsS0FBYixFQUFvQixFQUFwQixDQUFQO0FBQ0g7QUFFTSxlQUFlTSxpQkFBZixDQUFpQ1AsSUFBakMsRUFBdUM7QUFDMUMsUUFBTUMsS0FBSyxHQUFHQywyQ0FBSzs7Ozs7O01BQW5CO0FBUUEsU0FBT0Msc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFiLEVBQW9CO0FBQUVEO0FBQUYsR0FBcEIsQ0FBUDtBQUNIO0FBRU0sZUFBZVEscUJBQWYsQ0FBcUNDLFFBQXJDLEVBQStDO0FBQ2xELFFBQU1SLEtBQUssR0FBR0MsMkNBQUsseUVBQXdFTyxRQUFTOzs7O01BQXBHO0FBTUEsU0FBT04sc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhSCxLQUFiLEVBQW9CO0FBQUVRO0FBQUYsR0FBcEIsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL2NvbnRlbnQtYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4vc2FuaXR5LWNsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0QnlTbHVnKHNsdWcpIHtcbiAgICBjb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICAgICAgdGl0bGUsXG4gICAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICAgICAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBwdWJsaXNoZWRBdCxcbiAgICAgIGJvZHlcbiAgICB9YDtcblxuICAgIHJldHVybiBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiXXtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBzbHVnLFxuICAgICAgICBcIm1haW5JbWFnZVwiOiBtYWluSW1hZ2UuYXNzZXQtPnVybCxcbiAgICAgIH1gO1xuXG4gICAgcmV0dXJuIGNsaWVudC5mZXRjaChxdWVyeSwge30pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2F0ZWdvcmllcygpIHtcbiAgICBjb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcImNhdGVnb3J5XCJde1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHR5cGUsXG4gICAgICAgIFwiaW1hZ2VcIjogY292ZXJJbWFnZS5hc3NldC0+dXJsLFxuICAgICAgICBzbHVnLFxuICAgICAgfWA7XG5cbiAgICByZXR1cm4gY2xpZW50LmZldGNoKHF1ZXJ5LCB7fSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yeUJ5U2x1ZyhzbHVnKSB7XG4gICAgY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJjYXRlZ29yeVwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgdHlwZSxcbiAgICAgICAgXCJpbWFnZVwiOiBjb3ZlckltYWdlLmFzc2V0LT51cmwsXG4gICAgICAgIHNsdWcsXG4gICAgfWA7XG5cbiAgICByZXR1cm4gY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0c0luQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZT09XCJwb3N0XCIgJiYgcmVmZXJlbmNlcygqW190eXBlPT1cImNhdGVnb3J5XCIgJiYgc2x1Zy5jdXJyZW50ID09IFwiJHtjYXRlZ29yeX1cIl0uX2lkKV17XG4gICAgICBcIm1haW5JbWFnZVwiOiBtYWluSW1hZ2UuYXNzZXQtPnVybCxcbiAgICAgIHRpdGxlLFxuICAgICAgXCJzbHVnXCI6IHNsdWcuY3VycmVudFxuICAgIH1gO1xuXG4gICAgcmV0dXJuIGNsaWVudC5mZXRjaChxdWVyeSwgeyBjYXRlZ29yeSB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/content-api.js\n");

/***/ }),

/***/ "./src/image-builder.js":
/*!******************************!*\
  !*** ./src/image-builder.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return imageBuilder; });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanity-client */ \"./src/sanity-client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_sanity_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nfunction imageBuilder(source) {\n  return builder.image(source);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtYnVpbGRlci5qcz85YjVjIl0sIm5hbWVzIjpbImJ1aWxkZXIiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZUJ1aWxkZXIiLCJzb3VyY2UiLCJpbWFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHdEQUFlLENBQUNDLHNEQUFELENBQS9CO0FBRWUsU0FBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDekMsU0FBT0osT0FBTyxDQUFDSyxLQUFSLENBQWNELE1BQWQsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL2ltYWdlLWJ1aWxkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuL3Nhbml0eS1jbGllbnRcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5cbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1hZ2VCdWlsZGVyKHNvdXJjZSkge1xuICAgIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/image-builder.js\n");

/***/ }),

/***/ "./src/pages/category/[category].jsx":
/*!*******************************************!*\
  !*** ./src/pages/category/[category].jsx ***!
  \*******************************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Category; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../content-api */ \"./src/content-api.js\");\n/* harmony import */ var _components_ListOfPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ListOfPosts */ \"./src/components/ListOfPosts.jsx\");\n/* harmony import */ var _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PhotoPosts */ \"./src/components/PhotoPosts.jsx\");\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/pages/category/[category].jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nasync function getStaticProps(context) {\n  const posts = await Object(_content_api__WEBPACK_IMPORTED_MODULE_2__[\"getAllPostsInCategory\"])(context.params.category);\n  const category = await Object(_content_api__WEBPACK_IMPORTED_MODULE_2__[\"getCategoryBySlug\"])(context.params.category);\n  return {\n    props: {\n      posts,\n      category\n    }\n  };\n}\nasync function getStaticPaths() {\n  const categories = await Object(_content_api__WEBPACK_IMPORTED_MODULE_2__[\"getAllCategories\"])();\n  const paths = categories.map(category => ({\n    params: {\n      category: category.slug.current\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  };\n}\nfunction Category(props) {\n  const {\n    posts,\n    category\n  } = props;\n\n  const displayPosts = () => {\n    if (category.type.includes(\"list\")) {\n      return __jsx(_components_ListOfPosts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        posts: posts,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 20\n        }\n      });\n    } else if (category.type.includes(\"photo\")) {\n      return __jsx(_components_PhotoPosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        posts: posts,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 20\n        }\n      });\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, displayPosts());\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2F0ZWdvcnkvW2NhdGVnb3J5XS5qc3g/MmYxMCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwb3N0cyIsImdldEFsbFBvc3RzSW5DYXRlZ29yeSIsInBhcmFtcyIsImNhdGVnb3J5IiwiZ2V0Q2F0ZWdvcnlCeVNsdWciLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiY2F0ZWdvcmllcyIsImdldEFsbENhdGVnb3JpZXMiLCJwYXRocyIsIm1hcCIsInNsdWciLCJjdXJyZW50IiwiZmFsbGJhY2siLCJDYXRlZ29yeSIsImRpc3BsYXlQb3N0cyIsInR5cGUiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUVPLGVBQWVBLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU1DLEtBQUssR0FBRyxNQUFNQywwRUFBcUIsQ0FBQ0YsT0FBTyxDQUFDRyxNQUFSLENBQWVDLFFBQWhCLENBQXpDO0FBQ0EsUUFBTUEsUUFBUSxHQUFHLE1BQU1DLHNFQUFpQixDQUFDTCxPQUFPLENBQUNHLE1BQVIsQ0FBZUMsUUFBaEIsQ0FBeEM7QUFFQSxTQUFPO0FBQ0hFLFNBQUssRUFBRTtBQUNITCxXQURHO0FBRUhHO0FBRkc7QUFESixHQUFQO0FBTUg7QUFFTSxlQUFlRyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1DLFVBQVUsR0FBRyxNQUFNQyxxRUFBZ0IsRUFBekM7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0csR0FBWCxDQUFlUCxRQUFRLEtBQUs7QUFDdENELFVBQU0sRUFBRTtBQUFFQyxjQUFRLEVBQUVBLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjQztBQUExQjtBQUQ4QixHQUFMLENBQXZCLENBQWQ7QUFJQSxTQUFPO0FBQUVILFNBQUY7QUFBU0ksWUFBUSxFQUFFO0FBQW5CLEdBQVA7QUFDSDtBQUVjLFNBQVNDLFFBQVQsQ0FBa0JULEtBQWxCLEVBQXlCO0FBQ3BDLFFBQU07QUFBRUwsU0FBRjtBQUFTRztBQUFULE1BQXNCRSxLQUE1Qjs7QUFFQSxRQUFNVSxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFJWixRQUFRLENBQUNhLElBQVQsQ0FBY0MsUUFBZCxDQUF1QixNQUF2QixDQUFKLEVBQW9DO0FBQ2hDLGFBQU8sTUFBQywrREFBRDtBQUFhLGFBQUssRUFBRWpCLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNILEtBRkQsTUFFTyxJQUFJRyxRQUFRLENBQUNhLElBQVQsQ0FBY0MsUUFBZCxDQUF1QixPQUF2QixDQUFKLEVBQXFDO0FBQ3hDLGFBQU8sTUFBQyw4REFBRDtBQUFZLGFBQUssRUFBRWpCLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNIO0FBQ0osR0FORDs7QUFRQSxTQUFPLG1FQUFHZSxZQUFZLEVBQWYsQ0FBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NhdGVnb3J5L1tjYXRlZ29yeV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHtcbiAgICBnZXRBbGxQb3N0c0luQ2F0ZWdvcnksXG4gICAgZ2V0QWxsQ2F0ZWdvcmllcyxcbiAgICBnZXRDYXRlZ29yeUJ5U2x1Z1xufSBmcm9tIFwiLi4vLi4vY29udGVudC1hcGlcIjtcbmltcG9ydCBMaXN0T2ZQb3N0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MaXN0T2ZQb3N0c1wiO1xuaW1wb3J0IFBob3RvUG9zdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGhvdG9Qb3N0c1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHNJbkNhdGVnb3J5KGNvbnRleHQucGFyYW1zLmNhdGVnb3J5KTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGdldENhdGVnb3J5QnlTbHVnKGNvbnRleHQucGFyYW1zLmNhdGVnb3J5KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0cyxcbiAgICAgICAgICAgIGNhdGVnb3J5XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldEFsbENhdGVnb3JpZXMoKTtcbiAgICBjb25zdCBwYXRocyA9IGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+ICh7XG4gICAgICAgIHBhcmFtczogeyBjYXRlZ29yeTogY2F0ZWdvcnkuc2x1Zy5jdXJyZW50IH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHByb3BzKSB7XG4gICAgY29uc3QgeyBwb3N0cywgY2F0ZWdvcnkgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgZGlzcGxheVBvc3RzID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2F0ZWdvcnkudHlwZS5pbmNsdWRlcyhcImxpc3RcIikpIHtcbiAgICAgICAgICAgIHJldHVybiA8TGlzdE9mUG9zdHMgcG9zdHM9e3Bvc3RzfSAvPjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeS50eXBlLmluY2x1ZGVzKFwicGhvdG9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiA8UGhvdG9Qb3N0cyBwb3N0cz17cG9zdHN9IC8+O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiA8PntkaXNwbGF5UG9zdHMoKX08Lz47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/category/[category].jsx\n");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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