"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Tarifa = require("../controllers/Tarifa.controller");

var router = (0, _express.Router)();
router.get('/', _Tarifa.getTarifa);
router.get('/:codigo&:um', _Tarifa.getTarifaByClienteUM);
router.post('/', _Tarifa.addTarifa);
router.put('/:cliente&:um', _Tarifa.updateTarifa);
router["delete"]('/:cliente&:um', _Tarifa.deleteTarifa);
var _default = router;
exports["default"] = _default;