"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cliente = _database.sequelize.define("cliente", {
  CODIGO_CLIENTE: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  NOMBRE_CLIENTE: {
    type: _sequelize["default"].TEXT
  },
  DIRECCION_CLIENTE: {
    type: _sequelize["default"].TEXT
  },
  FAX_CLIENTE: {
    type: _sequelize["default"].TEXT
  },
  FONO_CLIENTE: {
    type: _sequelize["default"].TEXT
  },
  OBSERVACION_CLIENTE: {
    type: _sequelize["default"].TEXT
  },
  GIRO_CLIENTE: {
    type: _sequelize["default"].TEXT
  },
  DIGITO_CLIENTE: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Cliente;
exports["default"] = _default;