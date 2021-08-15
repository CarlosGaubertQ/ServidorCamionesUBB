"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Recorrido = _database.sequelize.define("recorrido", {
  Origen: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  Destino: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  Seccion: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  Km_Ripio: {
    type: _sequelize["default"].DOUBLE
  },
  Km_Pavimento: {
    type: _sequelize["default"].DOUBLE
  },
  Total_Km: {
    type: _sequelize["default"].DOUBLE
  },
  Formula: {
    type: _sequelize["default"].INTEGER
  },
  Observacion: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Recorrido;
exports["default"] = _default;