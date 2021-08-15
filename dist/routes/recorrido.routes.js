"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Recorrido = require("../controllers/Recorrido.controller");

var router = (0, _express.Router)();
router.get('/', _Recorrido.getRecorrido);
router.get('/:origen', _Recorrido.getRecorridoByOrigen);
router.get('/destino/:origen&:seccion', _Recorrido.getRecorridoByOrigenSeccion);
router.post('/', _Recorrido.addRecorrido);
router.put('/:origen&:destino&:seccion', _Recorrido.updateRecorrido);
router["delete"]('/:origen&:destino&:seccion', _Recorrido.deleteRecorrido);
var _default = router;
exports["default"] = _default;