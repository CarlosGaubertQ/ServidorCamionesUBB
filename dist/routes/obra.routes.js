"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Obra = require("../controllers/Obra.controller");

var router = (0, _express.Router)();
router.get('/', _Obra.getObra);
router.post('/', _Obra.addObra);
router.put('/:codigo', _Obra.updateObra);
router["delete"]('/:codigo', _Obra.deleteObra);
var _default = router;
exports["default"] = _default;