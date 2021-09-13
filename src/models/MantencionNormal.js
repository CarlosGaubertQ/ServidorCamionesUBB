import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const MantencionNormal = sequelize.define(
  "MANTENCION_NORMAL",
  {
    CODIGO_MANTENCION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    OBSERVACION_MANTENCION: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default MantencionNormal;
