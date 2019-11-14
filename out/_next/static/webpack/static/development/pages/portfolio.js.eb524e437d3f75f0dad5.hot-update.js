webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/ProjectGrid.js":
/*!***********************************!*\
  !*** ./components/ProjectGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./components/Projects.js");
/* harmony import */ var _ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectThumbnails */ "./components/ProjectThumbnails.js");
/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devices */ "./components/devices.js");

var _jsxFileName = "/home/sandra/projects/portfolio/components/ProjectGrid.js";


function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 1.4em;\n  color: #f5f5f5;\n  text-align: left;\n  padding-left: 1em;\n  @media ", " {\n    font-size: 1.2em;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Rubik Mono One', sans-serif;\n  margin-left: -4.6em;\n  margin-top: 2.4em;\n  text-transform: uppercase;\n  font-size: 2em;\n  color: #f5f5f5;\n  text-shadow: 2px 2px #2fbf71;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: ", " 6s steps(80, end);\n  @media ", " {\n    font-size: 1.6em;\n    margin-left: -1.6em;\n    margin-right: -1em;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    from { \n        width: 0; \n        opacity: 1;\n    } \n    to { \n        width: 30em; \n        opacity: 1;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: 2.4em;\n  width: 50px;\n  height: 50px;\n  background:\t#80f3e5;\n  border: none;\n  border-radius: 30px;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3s ease;\n  mix-blend-mode: hard-light;\n  &:hover {\n    transform: scale(17.5);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  width: 80%;\n  position: relative;\n  background-color: rgba(216, 17, 89, 0.8);\n  padding: 30px 15px 20px;\n  transform: translate(40%, -80px);\n  box-shadow: 5px 5px 5px;\n  @media ", " {\n    transform: translate(0%, 0px);\n    margin: 0;\n    max-width: 70vw;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 6em 0  30em auto;\n  display: grid;\n  height: 100%;\n  padding-left: 6%;\n  grid-template-columns: 30% 30%;\n  grid-template-rows: 800px 800px;\n  grid-gap: 20%;\n  @media ", " {\n    grid-template-columns: 100%;\n    grid-template-rows: 700px 700px 700px 700px;\n    grid-row-gap: 2em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet);
var ProjectBoxes = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet);
var ButtonSpread = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());
var type = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject4());
var ProjectTitles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject5(), type, _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet);
var ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject6(), _devices__WEBPACK_IMPORTED_MODULE_5__["device"].tablet);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Space Explorer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Made with GatsbyJs and Canvas, the \"Great Gatsby - Space Explorer\" game is a personal project that I built because I had never used Canvas before. And because, you know, ...space."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Wollstonecraft"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Wollstonecraft Walks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "A progressive web app and virtual walk guide about Mary Wollstonecraft and her life on Newington Green. I made it in gatsby.js, with netlify's content management system, for the organisations Fragments & Monuments and Scary Little Girls."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Jo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Rarely Jovial"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Rarely Jovial is a blog I made with Handlebars, Express, Node.js and PostgreSQL. It was a personal project that I tinkered with in my spare time, and unfortunately I didn't finish it, but it was good backend practice."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Sports"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Casual Sports"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "This is an app that aims to connect commitmentphobes and chillers who want to play sports. On the app, you can either sign your team up to play against other teams, see what sport events are going on in London through displaying events from the Meetup API, see what sport events are going on near you, or add and organise sport events."))));
});

/***/ })

})
//# sourceMappingURL=portfolio.js.eb524e437d3f75f0dad5.hot-update.js.map