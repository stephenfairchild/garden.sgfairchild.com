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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0/xF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Navbar() {
  return __jsx("nav", {
    className: "flex items-center justify-between flex-wrap bg-gray-700 p-6"
  }, __jsx("div", {
    className: "flex items-center flex-shrink-0 text-white mr-6"
  }, __jsx("span", {
    className: "font-semibold text-xl tracking-tight"
  }, "Fairchild Portfolio & Projects")), __jsx("div", {
    className: "block lg:hidden"
  }, __jsx("button", {
    className: "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("title", null, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  })))), __jsx("div", {
    className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
  }, __jsx("div", {
    className: "text-sm lg:flex-grow"
  }, __jsx("a", {
    href: "/",
    className: "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
  }, "Projects"), __jsx("a", {
    href: "/pictures",
    className: "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
  }, "Pictures"), __jsx("a", {
    href: "/code",
    className: "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
  }, "Code")), __jsx("div", {
    style: {
      display: "none"
    }
  }, __jsx("a", {
    href: "#",
    className: "inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
  }, "Dark mode"))));
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dtc0");


/***/ }),

/***/ "AS2U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Aog/");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "mbuvk8iz",
  dataset: "production",
  useCdn: false
}));

/***/ }),

/***/ "Aog/":
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "Dtc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d//C");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0/xF");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



async function getServerSideProps() {
  const data = await Object(_content_api__WEBPACK_IMPORTED_MODULE_2__[/* getAllCategories */ "b"])();
  return {
    props: {
      categories: data
    }
  };
}
function Index(props) {
  const {
    categories
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx("div", null, __jsx("div", null, categories.map(category => __jsx("div", {
    className: "float-left bg-gray-700 w-64 h-24 m-2 relative cursor-pointer"
  }, __jsx("div", {
    className: "bg-gray-300 w-64 z-10 h-10 p-2 absolute bottom-0 hover:font-light"
  }, __jsx("a", {
    href: `/category/${category.slug.current}`
  }, category.title)))))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d//C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllPostsInCategory; });
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pYZh");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AS2U");


async function getPostBySlug(slug) {
  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      publishedAt,
      body
    }`;
  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fetch(query, {
    slug
  });
}
async function getAllCategories() {
  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type == "category"]{
        title,
        description,
        slug,
      }`;
  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fetch(query, {});
}
async function getAllPostsInCategory(category) {
  const query = groq__WEBPACK_IMPORTED_MODULE_0___default.a`*[_type=="post" && references(*[_type=="category" && slug.current == "${category}"]._id)]{
      title,
      "slug": slug.current
    }`;
  return _sanity_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fetch(query, {
    category
  });
}

/***/ }),

/***/ "pYZh":
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });