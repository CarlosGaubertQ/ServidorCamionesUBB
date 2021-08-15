"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _CamionChofer = require("../controllers/CamionChofer.controller");

var router = (0, _express.Router)();
router.get('/', _CamionChofer.getCamionChofer);
router.get('/:patente&:chofer', _CamionChofer.getCamionChoferByPC);
router.get('/patente/:patente', _CamionChofer.getCamionChoferByP);
router.put('/:patente&:chofer', _CamionChofer.updateCamionChofer);
router.post('/', _CamionChofer.addCamionChofer);
router["delete"]('/:fechadesde&:patente&:rut', _CamionChofer.deleteCamionChofer);
var _default = router;
exports["default"] = _default;