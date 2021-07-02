import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from "moment"
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
      get: function() {
        return moment(this.getDataValue('FECHA_ODOMETRO')).add(1,'days').format('DD-MM-YYYY')
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
 

export default Odometro