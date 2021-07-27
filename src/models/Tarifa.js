import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Tarifa = sequelize.define(
  "tarifa",
  {
    Codigo_Cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    U_M_tarifa: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    Tarifa: {
      type: Sequelize.DOUBLE,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Tarifa;
