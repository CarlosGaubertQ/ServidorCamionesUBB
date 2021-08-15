"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SeguroCamion = _database.sequelize.define("seguro_camion", {
  PATENTE_CAMION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  VALOR_SEGURO: {
    type: _sequelize["default"].INTEGER
  },
  FECHA_PAGO_SEGURO: {
    type: _sequelize["default"].DATE,
    primaryKey: true,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FECHA_PAGO_SEGURO')).add(1, 'days').format('DD-MM-YYYY');
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = SeguroCamion;
exports["default"] = _default;