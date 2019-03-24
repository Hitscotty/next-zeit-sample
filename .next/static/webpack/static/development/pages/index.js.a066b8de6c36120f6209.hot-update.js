webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_CoinDesk_CoinDesk_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/CoinDesk/CoinDesk.context.js */ "./shared/CoinDesk/CoinDesk.context.js");

var _jsxFileName = "/Users/scotty/Documents/Development/next-zeit-sample/components/Prices.js";

//No need to bring React in Next


var Prices = function Prices(props) {
  var _useContext = useContext(_shared_CoinDesk_CoinDesk_context_js__WEBPACK_IMPORTED_MODULE_2__["CoinDeskContext"]),
      bpi = _useContext.bpi;

  var _useState = useState("USD"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      currency = _useState2[0],
      setCurrency = _useState2[1];

  var _ref = bpi[currency] || {},
      description = _ref.description,
      rate = _ref.rate,
      code = _ref.code; //Retrieves selected properties from props object, based on State.


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "list-group-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Bitcoin rate for ", description, ":", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "badge badge-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, code), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, rate), ";"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    onChange: function onChange(e) {
      return setCurrency(e.target.value);
    },
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "USD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "USD"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "GBP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "GBP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "EUR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "EUR")));
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

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



// import  { createContext, useState, useEffect } from "react";
var CoinDeskContext = createContext({});
var CoinDeskProvider = function CoinDeskProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(),
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

  useEffect(function () {
    getCurrentPrice();
  }, []);
};
var ConDeskConsumer = CoinDeskContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (CoinDeskContext);

/***/ })

})
//# sourceMappingURL=index.js.a066b8de6c36120f6209.hot-update.js.map