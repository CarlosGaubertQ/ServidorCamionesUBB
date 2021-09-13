import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Obra = sequelize.define(
  "OBRA",
  {
    CODIGO_OBRA: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    DESCRIPCION_OBRA: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Obra;
