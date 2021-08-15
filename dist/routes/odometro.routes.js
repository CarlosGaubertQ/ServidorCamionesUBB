"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Odometro = require("../controllers/Odometro.controller");

var router = (0, _express.Router)();
router.get('/', _Odometro.getOdometro);
router.get('/:patente', _Odometro.getOdometroByPatente);
router.post('/', _Odometro.addOdometro);
router.put('/:patente&:fecha', _Odometro.updateOdometro);
router["delete"]('/:patente&:fecha', _Odometro.deleteOdometro);
var _default = router;
exports["default"] = _default;