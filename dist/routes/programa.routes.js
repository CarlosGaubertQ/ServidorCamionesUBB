"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Programa = require("../controllers/Programa.controller");

var router = (0, _express.Router)();
router.get('/', _Programa.getPrograma);
router.get('/max/', _Programa.getCodigoViaje);
router.post('/', _Programa.addPrograma);
router.put('/:patente&:viaje&:fecha&:hora&:obra', _Programa.updatePrograma);
router["delete"]('/:patente&:viaje&:fecha&:hora&:obra', _Programa.deletePrograma);
var _default = router;
exports["default"] = _default;