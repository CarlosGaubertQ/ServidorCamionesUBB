import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Odometro = sequelize.define(
  "odometro_mensual",
  {
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    ODOMETRO_CAMION: {
      type: Sequelize.INTEGER,
    },
    FECHA_ODOMETRO: {
      type: Sequelize.DATE,
      primaryKey: true,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
 

export default Odometro