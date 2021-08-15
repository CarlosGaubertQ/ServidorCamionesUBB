"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CamionChofer = _database.sequelize.define("camionchofer", {
  FechaDesde: {
    type: _sequelize["default"].DATE,
    primaryKey: true,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FechaDesde')).add(1, 'days').format('DD-MM-YYYY');
    }
  },
  FechaHasta: {
    type: _sequelize["default"].DATE,
    primaryKey: true,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FechaHasta')).add(1, 'days').format('DD-MM-YYYY');
    }
  },
  Patente_Camion: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  Rut_Conductor: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = CamionChofer;
exports["default"] = _default;