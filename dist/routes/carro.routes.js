"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Carro = require("../controllers/Carro.controller");

var router = (0, _express.Router)();
router.get('/', _Carro.getCarro);
router.get('/sincamion/', _Carro.getCarroSinCamion);
router.post('/', _Carro.addCarro);
router.put('/:patente', _Carro.updateCarro);
router["delete"]('/:patente', _Carro.deleteCarro);
var _default = router;
exports["default"] = _default;