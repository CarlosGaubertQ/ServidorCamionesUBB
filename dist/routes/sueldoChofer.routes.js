"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _SueldoChoferes = require("../controllers/SueldoChoferes.controller");

var router = (0, _express.Router)();
router.get('/', _SueldoChoferes.getSueldoChofer);
router.get('/:rut', _SueldoChoferes.getSueldoChoferByRut);
router.post('/', _SueldoChoferes.addSueldoChofer);
router.put('/:rut&:fecha', _SueldoChoferes.updateSueldoChofer);
router["delete"]('/:rut&:fecha', _SueldoChoferes.deleteSueldoChofer);
var _default = router;
exports["default"] = _default;