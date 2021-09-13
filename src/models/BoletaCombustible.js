import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const BoletaCombustible = sequelize.define(
  "BOLETA_COMBUSTIBLE",
  {
    NUMERO_BOLETA_COMBUSTIBLE: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    NUMERO_GUIA: {
      type: Sequelize.INTEGER,
    },
    PROVEEDOR_COMBUSTIBLE: {
      type: Sequelize.TEXT,
    },
    MONTO_COMBUSTIBLE: {
      type: Sequelize.INTEGER,
    },
    LITROS_COMBUSTIBLE: {
      type: Sequelize.DOUBLE,
    },
    OCTANAJE_COMBUSTIBLE: {
      type: Sequelize.TEXT,
    },
    COMBUSTIBLE_BENCINA: {
      type: Sequelize.TINYINT,
    },
    COMBUSTIBLE_PETROLEO: {
      type: Sequelize.TINYINT,
    },
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
    },
    CODIGO_TARJETA: {
      type: Sequelize.TEXT,
    },
    ODOMETRO: {
      type: Sequelize.INTEGER,
    },
    FECHA_BOLETA: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default BoletaCombustible;
