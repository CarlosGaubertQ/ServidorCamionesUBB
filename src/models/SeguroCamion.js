import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const SeguroCamion = sequelize.define(
  "seguro_camion",
  {
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    VALOR_SEGURO: {
      type: Sequelize.INTEGER,
    },
    FECHA_PAGO_SEGURO: {
      type: Sequelize.DATE,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default SeguroCamion;