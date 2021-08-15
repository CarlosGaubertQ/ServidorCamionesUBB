import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const Carro = sequelize.define(
  "carro",
  {
    PATENTE_CARRO: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    TIPO_DE_CARRO: {
      type: Sequelize.TEXT,
    },
    FECHA_DE_COMPRA_CARRO: {
      type: Sequelize.DATE,
      get: function() {
        return moment(this.getDataValue('FECHA_DE_COMPRA_CARRO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    VALOR_CARRO: {
      type: Sequelize.INTEGER,
    },
    EJE_CARRO: {
      type: Sequelize.INTEGER,
    },
    MARCA_CARRO: {
      type: Sequelize.TEXT,
    },
    OBSERVACION_CARRO: {
      type: Sequelize.TEXT,
    },
    FECHA_REV_TECNICA:{
      type: Sequelize.DATE,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Carro;
