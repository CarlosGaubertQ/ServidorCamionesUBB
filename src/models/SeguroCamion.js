import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from "moment";
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
      get: function() {
        return moment(this.getDataValue('FECHA_PAGO_SEGURO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default SeguroCamion;