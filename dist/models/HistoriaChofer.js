"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HistoriaChofer = _database.sequelize.define("historia_chofer", {
  CODIGO_EVENTO: {
    type: _sequelize["default"].INTEGER
  },
  RUT_EMPLEADO: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  OBSERVACION_HISTORIAL: {
    type: _sequelize["default"].TEXT
  },
  FECHA_EVENTO: {
    type: _sequelize["default"].DATE,
    primaryKey: true,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FECHA_EVENTO')).add(1, 'days').format('DD-MM-YYYY');
    }
  },
  HORA_EVENTO: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  COSTO_EVENTO: {
    type: _sequelize["default"].INTEGER
  },
  FINALIZACION_EVENTO: {
    type: _sequelize["default"].DATE,
    get: function get() {
      return (0, _moment["default"])(this.getDataValue('FINALIZACION_EVENTO')).add(1, 'days').format('DD-MM-YYYY');
    }
  },
  QUIEN_PAGA: {
    type: _sequelize["default"].TEXT
  },
  CAMION_EVENTO: {
    type: _sequelize["default"].TEXT
  },
  Nombre_Empleado: {
    type: _sequelize["default"].TEXT
  },
  DIGITO_conductor: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = HistoriaChofer;
exports["default"] = _default;