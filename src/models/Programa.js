import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Programa = sequelize.define(
  "programa",
  {
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    CODIGO_SERVICIO: {
      type: Sequelize.INTEGER,
    },
    RUT_EMPLEADO: {
      type: Sequelize.INTEGER,
    },
    PATENTE_CARRO: {
      type: Sequelize.TEXT,
    },
    PARTIDA: {
      type: Sequelize.TEXT,
    },
    LLEGADA: {
      type: Sequelize.TEXT,
    },
    SECCION: {
      type: Sequelize.INTEGER,
    },
    CLIENTE: {
      type: Sequelize.INTEGER,
    },
    TIPO_CARGA_CARRO: {
      type: Sequelize.INTEGER,
    },
    TIPO_CARGA_CAMION: {
      type: Sequelize.INTEGER,
    },
    CANTIDAD_CARGA_CAMION: {
      type: Sequelize.DOUBLE,
    },
    CANTIDAD_CARGA_CARRO: {
      type: Sequelize.DOUBLE,
    },
    CODIGO_VIAJE: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    FECHA_VIAJE: {
      type: Sequelize.DATE,
      primaryKey: true,
    },
    HORA_SALIDA_VIAJE: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    PRODUCTO: {
      type: Sequelize.TEXT,
    },
    HORA_LLEGADA_VIAJE: {
      type: Sequelize.TEXT,
    },
    CODIGO_OBRA: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    Formula: {
      type: Sequelize.INTEGER,
    },
    Observacion: {
      type: Sequelize.TEXT,
    },
    Viajerealizado: {
      type: Sequelize.TEXT,
    },
    Num_PViaje: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Programa;
