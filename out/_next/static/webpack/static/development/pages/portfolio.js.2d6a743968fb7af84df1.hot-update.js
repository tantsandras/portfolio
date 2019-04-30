webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/ProjectThumbnails.js":
/*!*****************************************!*\
  !*** ./components/ProjectThumbnails.js ***!
  \*****************************************/
/*! exports provided: Jo, Space, Pest, Sports, Plastic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jo", function() { return Jo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pest", function() { return Pest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sports", function() { return Sports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plastic", function() { return Plastic; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _jos_blog_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jos-blog.png */ "./components/jos-blog.png");
/* harmony import */ var _jos_blog_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jos_blog_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _space_game_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-game.png */ "./components/space-game.png");
/* harmony import */ var _space_game_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_space_game_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pest_alert_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pest-alert.png */ "./components/pest-alert.png");
/* harmony import */ var _pest_alert_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pest_alert_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _casual_sports_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./casual-sports.png */ "./components/casual-sports.png");
/* harmony import */ var _casual_sports_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_casual_sports_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plastic_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plastic.png */ "./components/plastic.png");
/* harmony import */ var _plastic_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plastic_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _projectGifs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectGifs.js */ "./components/projectGifs.js");


var _jsxFileName = "/home/sandra/projects/next-js/components/ProjectThumbnails.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  position: relative;\n  margin: 0 auto;\n  height: 250px;\n  width: 500px;\n  transition: all 1s ease;\n  &:hover {\n    transform: scale(1.5);\n    z-index: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  object-fit: cover;\n  width: 1275px;\n  height: 663px;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(60%);\n  transform: scale(1);\n  box-shadow: 5px 5px 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Photo = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].img(_templateObject());
var Frame = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());

var Jo = function Jo() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      hover = _React$useState2[0],
      setHover = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Frame, {
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseOut: function onMouseOut() {
      return setHover(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, hover ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ProjectGif, {
    src: "/static/Peek 2019-04-17 13-37 (1).m4v",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Photo, {
    src: _jos_blog_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
};

var Space = function Space() {
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      hover = _React$useState4[0],
      setHover = _React$useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Frame, {
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseOut: function onMouseOut() {
      return setHover(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, hover ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ProjectGif, {
    src: "/static/Peek 2019-04-17 13-39 (1).m4v",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Photo, {
    src: _space_game_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

var Pest = function Pest() {
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      hover = _React$useState6[0],
      setHover = _React$useState6[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Frame, {
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseOut: function onMouseOut() {
      return setHover(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, hover ? _projectGifs_js__WEBPACK_IMPORTED_MODULE_9__["hoverPest"] : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Photo, {
    src: _pest_alert_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }));
};

var Sports = function Sports() {
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      hover = _React$useState8[0],
      setHover = _React$useState8[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Frame, {
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseOut: function onMouseOut() {
      return setHover(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, hover ? _projectGifs_js__WEBPACK_IMPORTED_MODULE_9__["hoverSports"] : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Photo, {
    src: _casual_sports_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }));
};

var Plastic = function Plastic() {
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      hover = _React$useState10[0],
      setHover = _React$useState10[1];

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Frame, {
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseOut: function onMouseOut() {
      return setHover(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, hover ? _projectGifs_js__WEBPACK_IMPORTED_MODULE_9__["hoverPlastic"] : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Photo, {
    src: _plastic_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }));
};



/***/ })

})
//# sourceMappingURL=portfolio.js.2d6a743968fb7af84df1.hot-update.js.map