"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tarifa = _database.sequelize.define("tarifa", {
  Codigo_Cliente: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  U_M_tarifa: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  Tarifa: {
    type: _sequelize["default"].DOUBLE
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Tarifa;
exports["default"] = _default;