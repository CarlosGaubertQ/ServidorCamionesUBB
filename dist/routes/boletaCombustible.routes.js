"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BoletaCombustible = require("../controllers/BoletaCombustible.controller");

var router = (0, _express.Router)();
router.get('/', _BoletaCombustible.getBoletaCombustible);
router.post('/', _BoletaCombustible.addBoletaCombustible);
router.put('/:numboleta', _BoletaCombustible.updateBoletaCombustible);
router["delete"]('/:numboleta', _BoletaCombustible.deleteBoletaCombustible);
var _default = router;
exports["default"] = _default;