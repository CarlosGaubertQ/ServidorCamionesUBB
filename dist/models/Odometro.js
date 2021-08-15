"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Odometro = _database.sequelize.define("odometro_mensual", {
  PATENTE_CAMION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  ODOMETRO_CAMION: {
    type: _sequelize["default"].INTEGER
  },
  FECHA_ODOMETRO: {
    type: _sequelize["default"].DATE,
    primaryKey: true,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FECHA_ODOMETRO')).add(1, 'days').format('DD-MM-YYYY');
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Odometro;
exports["default"] = _default;