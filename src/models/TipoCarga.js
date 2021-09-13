import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const TipoCarga = sequelize.define(
  "TIPO_CARGA",
  {
    CODIGO_CARGA: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    NOMBRE_TIPO_CARGA: {
      type: Sequelize.TEXT,
    },
    COSTO_COMBUSTIBLE_POR_KM: {
      type: Sequelize.INTEGER,
    },
    COSTO_NEUMATICOS_POR_KM: {
      type: Sequelize.INTEGER,
    },
    COSTO_ACEITE_POR_KM: {
        type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default TipoCarga;