"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function DataTable(_ref) {
  var _ref$headCols = _ref.headCols,
    headCols = _ref$headCols === void 0 ? [] : _ref$headCols,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? [] : _ref$rows,
    _ref$page = _ref.page,
    page = _ref$page === void 0 ? 0 : _ref$page,
    _ref$rowsPerPage = _ref.rowsPerPage,
    rowsPerPage = _ref$rowsPerPage === void 0 ? 5 : _ref$rowsPerPage,
    _ref$totalRecords = _ref.totalRecords,
    totalRecords = _ref$totalRecords === void 0 ? 0 : _ref$totalRecords,
    _ref$handleChangePage = _ref.handleChangePage,
    handleChangePage = _ref$handleChangePage === void 0 ? function () {} : _ref$handleChangePage,
    _ref$handleChangeRows = _ref.handleChangeRowsPerPage,
    handleChangeRowsPerPage = _ref$handleChangeRows === void 0 ? function () {} : _ref$handleChangeRows,
    _ref$searchBarPositio = _ref.searchBarPosition,
    searchBarPosition = _ref$searchBarPositio === void 0 ? "center" : _ref$searchBarPositio,
    _ref$searchRecord = _ref.searchRecord,
    searchRecord = _ref$searchRecord === void 0 ? function () {} : _ref$searchRecord,
    _ref$rowsPerPageOptio = _ref.rowsPerPageOptions,
    rowsPerPageOptions = _ref$rowsPerPageOptio === void 0 ? [5, 10, 25] : _ref$rowsPerPageOptio,
    _ref$datatable = _ref.datatable,
    datatable = _ref$datatable === void 0 ? true : _ref$datatable,
    _ref$searchValue = _ref.searchValue,
    searchValue = _ref$searchValue === void 0 ? "" : _ref$searchValue,
    _ref$changeSortBy = _ref.changeSortBy,
    changeSortBy = _ref$changeSortBy === void 0 ? function () {} : _ref$changeSortBy,
    _ref$changeOrder = _ref.changeOrder,
    changeOrder = _ref$changeOrder === void 0 ? function () {} : _ref$changeOrder,
    isLoading = _ref.isLoading,
    searchPlaceholder = _ref.searchPlaceholder;
  var inputRef = (0, _react.useRef)(null);
  var totalPage = Math.ceil(totalRecords / rowsPerPage);
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    sortedName = _useState2[0],
    setSortedName = _useState2[1];
  // Focus input only on initial mount
  (0, _react.useEffect)(function () {
    if (inputRef.current) inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      border: datatable ? "2px solid #e8e5e5" : "none",
      borderRadius: "5px",
      height: "auto",
      width: "100%"
    }
  }, datatable && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      display: "flex",
      justifyContent: searchBarPosition,
      padding: "20px"
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: searchPlaceholder,
    onChange: function onChange(e) {
      return searchRecord(e);
    },
    ref: inputRef,
    value: searchValue,
    style: {
      width: "200px",
      height: "35px",
      fontSize: "20px",
      borderRadius: "5px",
      border: "2px solid gray",
      paddingLeft: "10px"
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.TableContainer, {
    sx: {
      maxHeight: datatable ? "290px" : "max-content",
      height: datatable ? "290px" : "max-content"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Table, {
    stickyHeader: true,
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_material.TableHead, null, /*#__PURE__*/_react["default"].createElement(_material.TableRow, null, headCols.map(function (col) {
    return /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
      key: col.id,
      sx: {
        border: "1px solid #ededed",
        backgroundColor: "#dcdcdc",
        width: col.width
      }
    }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, /*#__PURE__*/_react["default"].createElement(_material.Typography, null, col.name), col.sorting ? /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement("button", {
      style: {
        backgroundColor: "transparent",
        padding: "0px",
        border: "none",
        color: col.order === "asc" && col.sortingName === sortedName ? "white" : "black"
      },
      onClick: function onClick() {
        changeSortBy(col.sortingName);
        changeOrder("asc");
        setSortedName(col.sortingName);
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ArrowDropUp, null)), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        changeSortBy(col.sortingName);
        changeOrder("desc");
        setSortedName(col.sortingName);
      },
      style: {
        backgroundColor: "transparent",
        padding: "0px",
        border: "none",
        color: col.order === "desc" && col.sortingName === sortedName ? "white" : "black"
      }
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ArrowDropDown, null))) : ""));
  }))), isLoading ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px"
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    color: "inherit"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    align: "center",
    variant: "h5",
    marginLeft: "10px"
  }, "Loading...")) : /*#__PURE__*/_react["default"].createElement(_material.TableBody, null, rows.length === 0 ? /*#__PURE__*/_react["default"].createElement(_material.TableRow, null, /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
    colSpan: headCols.length,
    align: "center",
    sx: {
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6"
  }, "Record not found"))) : rows.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.TableRow, {
      key: "r".concat(index)
    }, row.map(function (col, index1) {
      return /*#__PURE__*/_react["default"].createElement(_material.TableCell, {
        key: "r".concat(index, "c").concat(index1),
        sx: {
          border: "1px solid #c2c2c2",
          backgroundColor: "white",
          fontFamily: "Times New Roman",
          fontSize: "18px",
          width: headCols[index1].width
        }
      }, col);
    }));
  })))), datatable && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
    sx: {
      boxShadow: "0px -1px 10px #dcdcdc"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Records Per Page \xA0", /*#__PURE__*/_react["default"].createElement("select", {
    onChange: handleChangeRowsPerPage,
    style: {
      backgroundColor: "transparent",
      height: "30px",
      borderRadius: "5px"
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: 5
  }, "5"), /*#__PURE__*/_react["default"].createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/_react["default"].createElement("option", {
    value: 20
  }, "20"), /*#__PURE__*/_react["default"].createElement("option", {
    value: 50
  }, "50"))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    alignItems: "center"
  }, rowsPerPage * page + 1, "-", rowsPerPage * page + rows.length, "\xA0 of \xA0", totalRecords, /*#__PURE__*/_react["default"].createElement(_material.Pagination, {
    shape: "rounded",
    color: "primary",
    count: totalPage,
    page: page + 1 < totalPage ? page + 1 : totalPage,
    onChange: handleChangePage
  }))));
}
var _default = exports["default"] = DataTable;