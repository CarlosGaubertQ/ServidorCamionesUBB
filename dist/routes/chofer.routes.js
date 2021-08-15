"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Choferes = require("../controllers/Choferes.controller");

var router = (0, _express.Router)();
router.get('/', _Choferes.getChoferes);
router.get('/:rut', _Choferes.getChoferesByRut);
router.post('/', _Choferes.addChoferes);
router.put('/:rut', _Choferes.updateChofer);
router["delete"]('/:rut', _Choferes.deleteChofer);
var _default = router;
exports["default"] = _default;