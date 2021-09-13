import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const CostoDistribuir = sequelize.define(
  "Costo_distribuir",
  {
    FECHA_PAGO: {
      type: Sequelize.DATE,
      primaryKey: true,
      get: function() {
        return moment(this.getDataValue('FECHA_PAGO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    MONTO_DISTRIBUCION: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default CostoDistribuir;
