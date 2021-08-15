"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Banco = _database.sequelize.define("banco", {
  CODIGO_BANCO: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  NOMBRE_BANCO: {
    type: _sequelize["default"].TEXT
  },
  DIRECCION_INSTITUCION: {
    type: _sequelize["default"].TEXT
  },
  FONO_BANCO: {
    type: _sequelize["default"].TEXT
  },
  FAX_BANCO: {
    type: _sequelize["default"].TEXT
  },
  DIGITO_BANCO: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Banco;
exports["default"] = _default;