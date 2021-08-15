"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Camion = require("../controllers/Camion.controller");

var router = (0, _express.Router)();
router.get('/', _Camion.getCamiones);
router.get('/:patente', _Camion.getCamionByPatente);
router.post('/', _Camion.addCamion);
router.put('/:patente', _Camion.updateCamion);
router["delete"]('/:patente', _Camion.deleteCamion);
var _default = router;
exports["default"] = _default;