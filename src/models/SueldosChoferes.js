import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const SueldosChoferes = sequelize.define(
  "sueldo_choferes",
  {
    RUT_CHOFER: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    FECHA_PAGO: {
      type: Sequelize.DATE,
      primaryKey: true,
      get: function() {
        return moment(this.getDataValue('FECHA_PAGO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    SUELDO_BRUTO: {
      type: Sequelize.INTEGER,
    },
    PROVICION_DESAUCIO: {
      type: Sequelize.INTEGER,
    },
    PROVICION_VACACIONES: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default SueldosChoferes;
