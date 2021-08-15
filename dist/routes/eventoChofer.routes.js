"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _EventoChofer = require("../controllers/EventoChofer.controller");

var router = (0, _express.Router)();
router.get('/', _EventoChofer.getEventoChofer);
router.post('/', _EventoChofer.addEventoChofer);
router.put('/:codigo', _EventoChofer.updateEventoChofer);
router["delete"]('/:codigo', _EventoChofer.deleteEventoChofer);
var _default = router;
exports["default"] = _default;