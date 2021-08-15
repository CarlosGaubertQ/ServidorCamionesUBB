"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BoletaCombustible = _database.sequelize.define("boleta_combustible", {
  NUMERO_BOLETA_COMBUSTIBLE: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  NUMERO_GUIA: {
    type: _sequelize["default"].INTEGER
  },
  PROVEEDOR_COMBUSTIBLE: {
    type: _sequelize["default"].TEXT
  },
  MONTO_COMBUSTIBLE: {
    type: _sequelize["default"].INTEGER
  },
  LITROS_COMBUSTIBLE: {
    type: _sequelize["default"].DOUBLE
  },
  OCTANAJE_COMBUSTIBLE: {
    type: _sequelize["default"].TEXT
  },
  COMBUSTIBLE_BENCINA: {
    type: _sequelize["default"].TINYINT
  },
  COMBUSTIBLE_PETROLEO: {
    type: _sequelize["default"].TINYINT
  },
  PATENTE_CAMION: {
    type: _sequelize["default"].TEXT
  },
  CODIGO_TARJETA: {
    type: _sequelize["default"].TEXT
  },
  ODOMETRO: {
    type: _sequelize["default"].INTEGER
  },
  FECHA_BOLETA: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = BoletaCombustible;
exports["default"] = _default;