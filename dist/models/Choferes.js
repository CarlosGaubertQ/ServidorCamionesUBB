"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Choferes = _database.sequelize.define("choferes", {
  RUT_EMPLEADO: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  NRO_LICENCIA_CONDUCIR: {
    type: _sequelize["default"].INTEGER
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
  OBSERVAVION_EMPLEADO: {
    type: _sequelize["default"].TEXT
  },
  FECHA_CONTRATO: {
    type: _sequelize["default"].DATE
  },
  CLASE_LICENCIA: {
    type: _sequelize["default"].TEXT
  },
  OBSERVACION_CHOFERES: {
    type: _sequelize["default"].TEXT
  },
  FECHA_CONTROL_LICENCIA: {
    type: _sequelize["default"].DATE
  },
  FECHA_NACIMIENTO: {
    type: _sequelize["default"].DATE
  },
  DIGITO_CONDUCTOR: {
    type: _sequelize["default"].TEXT
  },
  PORCENTAJE_PARTICIPACION: {
    type: _sequelize["default"].DOUBLE
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Choferes;
exports["default"] = _default;