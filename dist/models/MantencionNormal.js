"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MantencionNormal = _database.sequelize.define("mantencion_normal", {
  CODIGO_MANTENCION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  OBSERVACION_MANTENCION: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = MantencionNormal;
exports["default"] = _default;