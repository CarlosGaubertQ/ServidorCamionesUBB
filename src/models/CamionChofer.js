import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const CamionChofer = sequelize.define(
  "camionchofer",
  {
    FechaDesde: {
      type: Sequelize.DATE,
      primaryKey: true,
      get: function() {
        return moment(this.getDataValue('FechaDesde')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    FechaHasta: {
      type: Sequelize.DATE,
      primaryKey: true,
      get: function() {
        return moment(this.getDataValue('FechaHasta')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    Patente_Camion: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    Rut_Conductor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default CamionChofer;
