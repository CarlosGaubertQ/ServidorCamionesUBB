"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _MantencionNormal = require("../controllers/MantencionNormal.controller");

var router = (0, _express.Router)();
router.get('/', _MantencionNormal.getMantencionNormal);
router.post('/', _MantencionNormal.addMantencionNormal);
router.put('/:codigo', _MantencionNormal.updateMantencionNormal);
router["delete"]('/:codigo', _MantencionNormal.deleteMantencionNormal);
var _default = router;
exports["default"] = _default;