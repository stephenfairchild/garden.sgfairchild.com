module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content-api */ \"./src/content-api.js\");\n/* harmony import */ var _image_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-builder */ \"./src/image-builder.js\");\nvar _jsxFileName = \"/home/stephen/Apps/next-portfolio/src/pages/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nasync function getStaticProps() {\n  const data = await Object(_content_api__WEBPACK_IMPORTED_MODULE_2__[\"getAllCategories\"])();\n  return {\n    props: {\n      categories: data\n    }\n  };\n}\nfunction Index(props) {\n  const {\n    categories\n  } = props;\n\n  const showImage = src => Object(_image_builder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(src).height(400).width(400).url();\n\n  const goTo = url => window.location.href = url;\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, categories.map(category => __jsx(\"div\", {\n    onClick: () => goTo(`/category/${category.slug.current}`),\n    className: \"relative float-left sm:w-full sm:h-full md:w-64 md:h-64 m-2 cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: \"relative object-scale-down h-full w-full\",\n    src: showImage(category.image),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"absolute bottom-0 left-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(\"span\", {\n    className: \"text-white tracking-tighter ml-2 p-1 text-2xl bg-opacity-75 bg-black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, category.title)))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4PzBlZDciXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInByb3BzIiwiY2F0ZWdvcmllcyIsIkluZGV4Iiwic2hvd0ltYWdlIiwic3JjIiwiaW1hZ2VCdWlsZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cmwiLCJnb1RvIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibWFwIiwiY2F0ZWdvcnkiLCJzbHVnIiwiY3VycmVudCIsImltYWdlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLHFFQUFnQixFQUFuQztBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLGdCQUFVLEVBQUVIO0FBRFQ7QUFESixHQUFQO0FBS0g7QUFFYyxTQUFTSSxLQUFULENBQWVGLEtBQWYsRUFBc0I7QUFDakMsUUFBTTtBQUFFQztBQUFGLE1BQWlCRCxLQUF2Qjs7QUFDQSxRQUFNRyxTQUFTLEdBQUdDLEdBQUcsSUFBSUMsOERBQVksQ0FBQ0QsR0FBRCxDQUFaLENBQWtCRSxNQUFsQixDQUF5QixHQUF6QixFQUE4QkMsS0FBOUIsQ0FBb0MsR0FBcEMsRUFBeUNDLEdBQXpDLEVBQXpCOztBQUVBLFFBQU1DLElBQUksR0FBR0QsR0FBRyxJQUFLRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCSixHQUE1Qzs7QUFFQSxTQUNJLG1FQUNLUCxVQUFVLENBQUNZLEdBQVgsQ0FBZUMsUUFBUSxJQUNwQjtBQUNJLFdBQU8sRUFBRSxNQUFNTCxJQUFJLENBQUUsYUFBWUssUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQVEsRUFBcEMsQ0FEdkI7QUFFSSxhQUFTLEVBQUMsNEVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJO0FBQ0ksYUFBUyxFQUFDLDBDQURkO0FBRUksT0FBRyxFQUFFYixTQUFTLENBQUNXLFFBQVEsQ0FBQ0csS0FBVixDQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFRSTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsc0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0gsUUFBUSxDQUFDSSxLQURkLENBREosQ0FSSixDQURILENBREwsQ0FESjtBQW9CSCIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBnZXRBbGxDYXRlZ29yaWVzIH0gZnJvbSBcIi4uL2NvbnRlbnQtYXBpXCI7XG5pbXBvcnQgaW1hZ2VCdWlsZGVyIGZyb20gXCIuLi9pbWFnZS1idWlsZGVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGRhdGFcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gICAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSBwcm9wcztcbiAgICBjb25zdCBzaG93SW1hZ2UgPSBzcmMgPT4gaW1hZ2VCdWlsZGVyKHNyYykuaGVpZ2h0KDQwMCkud2lkdGgoNDAwKS51cmwoKTtcblxuICAgIGNvbnN0IGdvVG8gPSB1cmwgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ29UbyhgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Zy5jdXJyZW50fWApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbG9hdC1sZWZ0IHNtOnctZnVsbCBzbTpoLWZ1bGwgbWQ6dy02NCBtZDpoLTY0IG0tMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvYmplY3Qtc2NhbGUtZG93biBoLWZ1bGwgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2hvd0ltYWdlKGNhdGVnb3J5LmltYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdHJhY2tpbmctdGlnaHRlciBtbC0yIHAtMSB0ZXh0LTJ4bCBiZy1vcGFjaXR5LTc1IGJnLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

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