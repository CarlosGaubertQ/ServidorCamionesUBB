"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Camion = _database.sequelize.define("camion", {
  PATENTE_CAMION: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  CODIGO_BANCO: {
    type: _sequelize["default"].TEXT
  },
  CODIGO_MANTENCION: {
    type: _sequelize["default"].TEXT
  },
  NUMERO_DE_LEASING: {
    type: _sequelize["default"].TEXT
  },
  MODELO_CAMION: {
    type: _sequelize["default"].TEXT
  },
  KILOMETRAJE_COMPRA_CAMION: {
    type: _sequelize["default"].FLOAT
  },
  OBSERVACION_CAMION: {
    type: _sequelize["default"].TEXT
  },
  FECHA_COMPRA_CAMION: {
    type: _sequelize["default"].DATE
  },
  VALOR_COMPRA_CAMION: {
    type: _sequelize["default"].INTEGER
  },
  MARCA_CAMION: {
    type: _sequelize["default"].TEXT
  },
  EJE_CAMION: {
    type: _sequelize["default"].INTEGER
  },
  ANO_FABRICACION_CAMION: {
    type: _sequelize["default"].INTEGER
  },
  NUMERO_MOTOR: {
    type: _sequelize["default"].TEXT
  },
  CARGA_MAXIMA: {
    type: _sequelize["default"].DOUBLE
  },
  CAPACIDAD_CARTER: {
    type: _sequelize["default"].INTEGER
  },
  CAPACIDAD_CAJA: {
    type: _sequelize["default"].INTEGER
  },
  CAPACIDAD_DIFERENCIAL: {
    type: _sequelize["default"].INTEGER
  },
  TIPO_CAJA_CAMBIO: {
    type: _sequelize["default"].TEXT
  },
  TIPO_DIFERENCIAL: {
    type: _sequelize["default"].TEXT
  },
  TIPO_EMBRIAGE: {
    type: _sequelize["default"].TEXT
  },
  TIPO_SUSPENCION: {
    type: _sequelize["default"].TEXT
  },
  MODELO_FRENO_MOTOR: {
    type: _sequelize["default"].TEXT
  },
  MODELO_DIRECCION: {
    type: _sequelize["default"].TEXT
  },
  MODELO_INYECCION: {
    type: _sequelize["default"].TEXT
  },
  MODELO_SISTEMA_ELECTRICO: {
    type: _sequelize["default"].TEXT
  },
  NRO_CAMION: {
    type: _sequelize["default"].TEXT
  },
  NRO_CHASIS: {
    type: _sequelize["default"].TEXT
  },
  NRO_EJES: {
    type: _sequelize["default"].INTEGER
  },
  Patente_Carro: {
    type: _sequelize["default"].TEXT
  },
  FECHA_REV_TECNICA: {
    type: _sequelize["default"].DATE
  },
  COLOR_CAMION: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Camion;
exports["default"] = _default;