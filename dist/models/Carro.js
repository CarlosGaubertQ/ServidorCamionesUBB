"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Carro = _database.sequelize.define("carro", {
  PATENTE_CARRO: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  TIPO_DE_CARRO: {
    type: _sequelize["default"].TEXT
  },
  FECHA_DE_COMPRA_CARRO: {
    type: _sequelize["default"].DATE
  },
  VALOR_CARRO: {
    type: _sequelize["default"].INTEGER
  },
  EJE_CARRO: {
    type: _sequelize["default"].INTEGER
  },
  MARCA_CARRO: {
    type: _sequelize["default"].TEXT
  },
  OBSERVACION_CARRO: {
    type: _sequelize["default"].TEXT
  },
  FECHA_REV_TECNICA: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Carro;
exports["default"] = _default;