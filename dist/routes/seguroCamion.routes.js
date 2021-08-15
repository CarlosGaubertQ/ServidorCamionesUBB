"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _SeguroCamion = require("../controllers/SeguroCamion.controller");

var router = (0, _express.Router)();
router.get('/', _SeguroCamion.getSeguroCamion);
router.get('/:patente', _SeguroCamion.getSeguroCamionByPatente);
router.post('/', _SeguroCamion.addSeguroCamion);
router.put('/:patente&:fecha', _SeguroCamion.updateSeguroCamion);
router["delete"]('/:patente&:fecha', _SeguroCamion.deleteSeguroCamion);
var _default = router;
exports["default"] = _default;