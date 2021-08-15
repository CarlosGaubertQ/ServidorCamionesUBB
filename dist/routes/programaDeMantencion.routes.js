"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ProgramaDeMantencion = require("../controllers/ProgramaDeMantencion.controller");

var router = (0, _express.Router)();
router.get('/', _ProgramaDeMantencion.getProgramaDeMantencion);
router.post('/', _ProgramaDeMantencion.addProgramaDeMantencion);
router.put('/:codigo', _ProgramaDeMantencion.updateProgramaMantencion);
router["delete"]('/:codigo', _ProgramaDeMantencion.deleteProgramaDeMantencion);
var _default = router;
exports["default"] = _default;