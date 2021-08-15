"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EventoChofer = _database.sequelize.define("evento_chofer", {
  CODIGO_EVENTO: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  DESCRIPCION_EVENTO: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = EventoChofer;
exports["default"] = _default;