webpackHotUpdate("static/development/pages/index.js",{

/***/ "./shared/CoinDesk/CoinDesk.context.js":
/*!*********************************************!*\
  !*** ./shared/CoinDesk/CoinDesk.context.js ***!
  \*********************************************/
/*! exports provided: CoinDeskContext, CoinDeskProvider, ConDeskConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinDeskContext", function() { return CoinDeskContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinDeskProvider", function() { return CoinDeskProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConDeskConsumer", function() { return ConDeskConsumer; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/Users/scotty/Documents/Development/next-zeit-sample/shared/CoinDesk/CoinDesk.context.js";


var CoinDeskContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])({});
var CoinDeskProvider = function CoinDeskProvider(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      bpi = _useState2[0],
      setBpi = _useState2[1];

  var getCurrentPrice =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              setBpi(data.bpi);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCurrentPrice() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getCurrentPrice();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CoinDeskContext.Provider, {
    value: {
      bpi: bpi
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children);
};
var ConDeskConsumer = CoinDeskContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (CoinDeskContext);

/***/ })

})
//# sourceMappingURL=index.js.5a8cfe82c6c5e42c32fa.hot-update.js.map