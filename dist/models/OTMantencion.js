"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OTMantencion = _database.sequelize.define("orden_de_trabajo_de_mantencion", {
  CODIGO_OT: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  PATENTE_CAMION: {
    type: _sequelize["default"].TEXT
  },
  PATENTE_CARRO: {
    type: _sequelize["default"].TEXT
  },
  TIPO_ORDEN: {
    type: _sequelize["default"].TEXT
  },
  DESCRIPCION_OT: {
    type: _sequelize["default"].TEXT
  },
  FECHA_OT: {
    type: _sequelize["default"].DATE
  },
  DURACION_ESTIMADA: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = OTMantencion;
exports["default"] = _default;