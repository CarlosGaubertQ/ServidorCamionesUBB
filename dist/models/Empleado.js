"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Empleado = _database.sequelize.define("empleado", {
  RUT_EMPLEADO: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  CODIGO_CUENTA: {
    type: _sequelize["default"].INTEGER
  },
  NOMBRE_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  NOMBRE_EMPLEADO2: {
    type: _sequelize["default"].TEXT
  },
  APELLIDO_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  APELLIDO_EMPLEADO2: {
    type: _sequelize["default"].TEXT
  },
  DIRECCION_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  FONO_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  OBSERVACION_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  FECHA_CONTRATO: {
    type: _sequelize["default"].DATE
  },
  DIGITO_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  CARGO_EMPLEADO: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Empleado;
exports["default"] = _default;