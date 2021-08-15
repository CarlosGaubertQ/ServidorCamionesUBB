"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _CostoDistribuir = require("../controllers/CostoDistribuir.controller");

var router = (0, _express.Router)();
router.get('/', _CostoDistribuir.getCostoDistribuir);
router.post('/', _CostoDistribuir.addCostoDistribuir);
router.put('/:fecha', _CostoDistribuir.updateCostoDistribuir);
router["delete"]('/:fecha', _CostoDistribuir.deleteCostoDistribuir);
var _default = router;
exports["default"] = _default;