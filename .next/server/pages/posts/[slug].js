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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+BZ4":
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

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

/***/ "09qL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Post; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__("+BZ4");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);

// EXTERNAL MODULE: ./src/sanity-client.js
var sanity_client = __webpack_require__("AS2U");

// EXTERNAL MODULE: ./src/content-api.js
var content_api = __webpack_require__("d//C");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__("gEUu");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);

// CONCATENATED MODULE: ./src/render-body-content.jsx

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function RenderBodyContent(body) {
  const serializers = {
    list: props => __jsx("ul", {
      className: "pt-2 pl-10 list-disc"
    }, props.children),
    types: {
      block(props) {
        switch (props.node.style) {
          case "h1":
            return __jsx("h1", {
              className: ""
            }, props.children);

          case "blockquote":
            return __jsx("blockquote", {
              className: ""
            }, props.children);

          default:
            return __jsx("p", {
              className: "pt-2 pb-2"
            }, props.children);
        }
      }

    }
  };
  return __jsx(block_content_to_react_default.a, _extends({
    serializers: serializers,
    blocks: body,
    imageOptions: {
      w: 320,
      h: 240,
      fit: "max"
    }
  }, sanity_client["a" /* default */].config()));
}
// EXTERNAL MODULE: ./src/components/navbar.jsx
var navbar = __webpack_require__("0/xF");

// CONCATENATED MODULE: ./src/pages/posts/[slug].jsx

var _slug_jsx = external_react_default.a.createElement;







function urlFor(source) {
  return image_url_default()(sanity_client["a" /* default */]).image(source);
}

async function getServerSideProps(context) {
  const {
    slug = ""
  } = context.query;
  const data = await Object(content_api["a" /* default */])(slug);
  return {
    props: data
  };
}
function Post(props) {
  const {
    title,
    publishedAt,
    body = []
  } = props;
  return _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(navbar["a" /* default */], null), _slug_jsx("article", {
    className: "p-8 mx-auto max-w-6xl"
  }, _slug_jsx("h3", {
    className: "font-bold text-gray-500"
  }, external_moment_default()(publishedAt).format("MMMM Do, YYYY")), _slug_jsx("h1", {
    className: "text-4xl font-bold text-gray-800"
  }, title), _slug_jsx("div", {
    className: "text-xl text-gray-700"
  }, RenderBodyContent(body))));
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("09qL");


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

/***/ "gEUu":
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "pYZh":
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });