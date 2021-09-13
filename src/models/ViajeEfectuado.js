import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const ViajeEfectuado = sequelize.define(
  "VIAJE_EFECTUADO",
  {
    NUMERO_GUIA_DESPACHO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
      primaryKey: true,
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
    SECCION: {
      type: Sequelize.INTEGER,
    },
    LLEGADA: {
      type: Sequelize.TEXT,
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
      get: function() {
        return moment(this.getDataValue('FECHA_VIAJE')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    HORA_SALIDA_VIAJE: {
      type: Sequelize.TEXT,
    },
    HORA_LLEGADA_VIAJE: {
      type: Sequelize.TEXT,
    },
    PRODUCTO: {
      type: Sequelize.TEXT,
    },
    CODIGO_OBRA: {
      type: Sequelize.INTEGER,
    },
    PRECIO_UNITARIO_CARGA_CAMION: {
      type: Sequelize.DOUBLE,
    },
    PRECIO_UNITARIO_CARGA_CARRO: {
      type: Sequelize.DOUBLE,
    },
    ODOMETRO_SALIDA: {
      type: Sequelize.INTEGER,
    },
    ODOMETRO_LLEGADA: {
      type: Sequelize.INTEGER,
    },
    OTROS_COSTOS: {
      type: Sequelize.INTEGER,
    },
    KILOMETRAJE_CAMINO_RIPIO: {
      type: Sequelize.DOUBLE,
    },
    KILOMETRAJE_CAMINO_PAVIMENTO: {
      type: Sequelize.DOUBLE,
    },
    Formula: {
      type: Sequelize.INTEGER,
    },
    OBSERVACION: {
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

export default ViajeEfectuado;
