"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Cliente = require("../controllers/Cliente.controller");

var router = (0, _express.Router)();
router.get('/', _Cliente.getCliente);
router.post('/', _Cliente.addCliente);
router.put('/:rut', _Cliente.updateCliente);
router["delete"]('/:rut', _Cliente.deleteCliente);
var _default = router;
exports["default"] = _default;