import Sequelize from "sequelize";
import { sequelize } from "../database/database";
const EventoChofer = sequelize.define(
  "EVENTO_CHOFER",
  {
    CODIGO_EVENTO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DESCRIPCION_EVENTO: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default EventoChofer;
