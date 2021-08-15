"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TarjetaCredito = _database.sequelize.define("tarjeta_credito", {
  CODIGO_TARJETA: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  TOPE_TARJETA: {
    type: _sequelize["default"].INTEGER
  },
  ESTADO_TARJETA: {
    type: _sequelize["default"].TEXT
  },
  RUT_EMPLEADO: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = TarjetaCredito;
exports["default"] = _default;