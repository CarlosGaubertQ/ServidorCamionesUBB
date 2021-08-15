"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Programa = _database.sequelize.define("programa", {
  PATENTE_CAMION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  CODIGO_SERVICIO: {
    type: _sequelize["default"].INTEGER
  },
  RUT_EMPLEADO: {
    type: _sequelize["default"].INTEGER
  },
  PATENTE_CARRO: {
    type: _sequelize["default"].TEXT
  },
  PARTIDA: {
    type: _sequelize["default"].TEXT
  },
  LLEGADA: {
    type: _sequelize["default"].TEXT
  },
  SECCION: {
    type: _sequelize["default"].INTEGER
  },
  CLIENTE: {
    type: _sequelize["default"].INTEGER
  },
  TIPO_CARGA_CARRO: {
    type: _sequelize["default"].INTEGER
  },
  TIPO_CARGA_CAMION: {
    type: _sequelize["default"].INTEGER
  },
  CANTIDAD_CARGA_CAMION: {
    type: _sequelize["default"].DOUBLE
  },
  CANTIDAD_CARGA_CARRO: {
    type: _sequelize["default"].DOUBLE
  },
  CODIGO_VIAJE: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  FECHA_VIAJE: {
    type: _sequelize["default"].DATE,
    primaryKey: true
  },
  HORA_SALIDA_VIAJE: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  PRODUCTO: {
    type: _sequelize["default"].TEXT
  },
  HORA_LLEGADA_VIAJE: {
    type: _sequelize["default"].TEXT
  },
  CODIGO_OBRA: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  Formula: {
    type: _sequelize["default"].INTEGER
  },
  Observacion: {
    type: _sequelize["default"].TEXT
  },
  Viajerealizado: {
    type: _sequelize["default"].TEXT
  },
  Num_PViaje: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Programa;
exports["default"] = _default;