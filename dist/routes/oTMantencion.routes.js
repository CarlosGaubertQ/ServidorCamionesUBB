"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _OTMantencion = require("../controllers/OTMantencion.controller");

var router = (0, _express.Router)();
router.get('/', _OTMantencion.getOTMantencion);
router.post('/', _OTMantencion.addOTMantencion);
router.put('/:codigo', _OTMantencion.updateOTMantencion);
router["delete"]('/:codigo', _OTMantencion.deleteOTMantencion);
var _default = router;
exports["default"] = _default;