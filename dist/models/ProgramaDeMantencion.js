"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProgramaDeMantencion = _database.sequelize.define("programa_de_mantencion", {
  CODIGO_MANTENCION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  ELEMENTO: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  TIPO: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  MANTENCION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  KILOMETRAJE_PROGRAMADO: {
    type: _sequelize["default"].INTEGER
  },
  KM_ULTIMA_MANT: {
    type: _sequelize["default"].INTEGER
  },
  FECHA_DE_MANTENCION: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = ProgramaDeMantencion;
exports["default"] = _default;