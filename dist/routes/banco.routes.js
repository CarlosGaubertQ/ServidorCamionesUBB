"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Banco = require("../controllers/Banco.controller");

var router = (0, _express.Router)();
router.get('/', _Banco.getBanco);
router.post('/', _Banco.addBanco);
router.put('/:codigo', _Banco.updateBanco);
router["delete"]('/:codigo', _Banco.deleteBanco);
var _default = router;
exports["default"] = _default;