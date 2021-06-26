import Sequelize from "sequelize";
import { sequelize } from "../database/database";

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
