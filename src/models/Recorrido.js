import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Recorrido = sequelize.define(
  "recorrido",
  {
    Origen: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    Destino: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    Seccion: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    Km_Ripio: {
      type: Sequelize.DOUBLE,
    },
    Km_Pavimento: {
      type: Sequelize.DOUBLE,
    },
    Total_Km: {
      type: Sequelize.DOUBLE,
    },
    Formula: {
      type: Sequelize.INTEGER,
    },
    Observacion: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Recorrido;
