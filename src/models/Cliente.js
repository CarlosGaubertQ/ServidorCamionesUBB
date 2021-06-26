import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Cliente = sequelize.define(
  "cliente",
  {
    CODIGO_CLIENTE: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    NOMBRE_CLIENTE: {
      type: Sequelize.TEXT,
    },
    DIRECCION_CLIENTE: {
      type: Sequelize.TEXT,
    },
    FAX_CLIENTE: {
      type: Sequelize.TEXT,
    },
    FONO_CLIENTE: {
      type: Sequelize.TEXT,
    },
    OBSERVACION_CLIENTE: {
      type: Sequelize.TEXT,
    },
    GIRO_CLIENTE: {
      type: Sequelize.TEXT,
    },
    DIGITO_CLIENTE:{
      type: Sequelize.TEXT,
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Cliente;
