import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Banco = sequelize.define(
  "BANCO",
  {
    CODIGO_BANCO: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    NOMBRE_BANCO: {
      type: Sequelize.TEXT,
    },
    DIRECCION_INSTITUCION: {
      type: Sequelize.TEXT,
    },
    FONO_BANCO: {
      type: Sequelize.TEXT,
    },
    FAX_BANCO: {
      type: Sequelize.TEXT,
    },
    DIGITO_BANCO: {
      type: Sequelize.INTEGER,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Banco;
