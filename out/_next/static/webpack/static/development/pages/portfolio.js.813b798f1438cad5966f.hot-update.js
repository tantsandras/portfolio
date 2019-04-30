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

var _jsxFileName = "/home/sandra/projects/next-js/components/ProjectGrid.js";


function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: \"Rajdhani\", sans-serif;\n  font-size: 1.6em;\n  color: #f5f5f5;\n  text-align: left;\n  padding-left: 1em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Rubik Mono One', sans-serif;\n  margin-left: -4.6em;\n  margin-top: 2.4em;\n  text-transform: uppercase;\n  font-size: 3em;\n  color: #f5f5f5;\n  text-shadow: 2px 2px #2fbf71;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: ", " 6s steps(80, end);\n"]);

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  width: 80%;\n  position: relative;\n  background-color: rgba(216, 17, 89, 0.8);\n  padding: 30px 15px 20px;\n  transform: translate(40%, -80px);\n  box-shadow: 5px 5px 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 6em 0  0 auto;\n  display: grid;\n  height: 100vw;\n  width: 90%;\n  grid-template-columns: 30% 30%;\n  grid-template-rows: 600px 600px;\n  grid-gap: 20%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var ProjectBoxes = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var ButtonSpread = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());
var type = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject4());
var ProjectTitles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject5(), type);
var ProjectDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject6());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Space"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Space Explorer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Made with GatsbyJs and Canvas, the \"Great Gatsby - Space Explorer\" game is a personal project that I built because I had never used Canvas before. And because, you know, ...space."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Plastic"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "PlastiScene"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "A project done at Athena Hackathon 2019, with the aim of solving the plastic crisis. It's made with React, Gatsby.js and D3. It's supposed to be a marketplace where businesses can shop around for existing projects that can either replace, recycle or dispose of plastic."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Jo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Rarely Jovial"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Rarely Jovial is a blog I made with Handlebars, Express, Node.js and PostgreSQL. It was a personal project that I tinkered with in my spare time, and unfortunately I didn't finish it, but it was good backend practice."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectThumbnails__WEBPACK_IMPORTED_MODULE_4__["Sports"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectBoxes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectTitles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Casual Sports"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "This is an app that wants to connect commitmentphobes and chillers who want to play sports. On the app, you can either sign your team up to play against other teams, see what sport events are going on in London through displaying events from the Meetup API, see what sport events are going on near you, or add and organise sport events."))));
});

/***/ })

})
//# sourceMappingURL=portfolio.js.813b798f1438cad5966f.hot-update.js.map