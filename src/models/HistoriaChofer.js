import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const HistoriaChofer = sequelize.define(
  "evento_chofer",
  {
    CODIGO_EVENTO: {
      type: Sequelize.INTEGER,
    },
    RUT_EMPLEADO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    OBSERVACION_HISTORIAL: {
      type: Sequelize.TEXT,
    },
    FECHA_EVENTO: {
      type: Sequelize.DATE,
      primaryKey: true,
      get: function() {
        return moment(this.getDataValue('FECHA_EVENTO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    HORA_EVENTO: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    COSTO_EVENTO: {
      type: Sequelize.INTEGER,
    },
    FINALIZACION_EVENTO: {
      type: Sequelize.DATE,
      get: function() {
        return moment(this.getDataValue('FINALIZACION_EVENTO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    QUIEN_PAGA: {
      type: Sequelize.TEXT,
    },
    CAMION_EVENTO: {
      type: Sequelize.TEXT,
    },
    Nombre_Empleado: {
      type: Sequelize.TEXT,
    },
    DIGITO_conductor: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default HistoriaChofer;
