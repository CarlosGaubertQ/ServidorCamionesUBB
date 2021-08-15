"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _HistoriaChofer = require("../controllers/HistoriaChofer.controller");

var router = (0, _express.Router)();
router.get('/', _HistoriaChofer.getHistoriaChofer);
router.get('/:rut', _HistoriaChofer.getHistoriaChoferByChofer);
router.get('/fecha/:rut&:fecha', _HistoriaChofer.getHistoriaChoferByChoferFecha);
router.post('/', _HistoriaChofer.addHistoriaChofer);
router.put('/:rut&:fecha&:hora', _HistoriaChofer.updateHistoriaChofer);
router["delete"]('/:rut&:fecha&:hora', _HistoriaChofer.deleteHistoriaChofer);
var _default = router;
exports["default"] = _default;