import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const ProgramaDeMantencion = sequelize.define(
  "programa_de_mantencion",
  {
    CODIGO_MANTENCION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    ELEMENTO: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    TIPO: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    MANTENCION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    KILOMETRAJE_PROGRAMADO: {
      type: Sequelize.INTEGER,
    },
    KM_ULTIMA_MANT: {
      type: Sequelize.INTEGER,
    },
    FECHA_DE_MANTENCION: {
      type: Sequelize.DATE,
    },

  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default ProgramaDeMantencion;
