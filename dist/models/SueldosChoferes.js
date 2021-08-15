"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SueldosChoferes = _database.sequelize.define("sueldo_choferes", {
  RUT_CHOFER: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  FECHA_PAGO: {
    type: _sequelize["default"].DATE,
    primaryKey: true,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FECHA_PAGO')).add(1, 'days').format('DD-MM-YYYY');
    }
  },
  SUELDO_BRUTO: {
    type: _sequelize["default"].INTEGER
  },
  PROVICION_DESAUCIO: {
    type: _sequelize["default"].INTEGER
  },
  PROVICION_VACACIONES: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = SueldosChoferes;
exports["default"] = _default;