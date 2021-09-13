import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const TarjetaCredito = sequelize.define(
  "TARJETA_CREDITO",
  {
    CODIGO_TARJETA: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    TOPE_TARJETA: {
      type: Sequelize.INTEGER,
    },
    ESTADO_TARJETA: {
      type: Sequelize.TEXT,
    },
    RUT_EMPLEADO: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default TarjetaCredito;
