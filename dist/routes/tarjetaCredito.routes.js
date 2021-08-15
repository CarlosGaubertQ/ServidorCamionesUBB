"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _TarjetaCredito = require("../controllers/TarjetaCredito.controller");

var router = (0, _express.Router)();
router.get('/', _TarjetaCredito.getTarjetaCredito);
router.post('/', _TarjetaCredito.addTarjetaCredito);
router.put('/:codigo', _TarjetaCredito.updateTarjetaCredito);
router["delete"]('/:codigo', _TarjetaCredito.deleteTarjetaCredito);
var _default = router;
exports["default"] = _default;