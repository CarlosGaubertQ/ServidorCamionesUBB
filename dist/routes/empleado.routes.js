"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Empleado = require("../controllers/Empleado.controller");

var router = (0, _express.Router)();
router.get('/', _Empleado.getEmpleado);
router.post('/', _Empleado.addEmpleado);
router.put('/:rut', _Empleado.updateEmpleado);
router["delete"]('/:rut', _Empleado.deleteEmpleado);
var _default = router;
exports["default"] = _default;