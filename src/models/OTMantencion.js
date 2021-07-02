import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const OTMantencion = sequelize.define(
  "orden_de_trabajo_de_mantencion",
  {
    CODIGO_OT: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
    },
    PATENTE_CARRO: {
      type: Sequelize.TEXT,
    },
    TIPO_ORDEN: {
      type: Sequelize.TEXT,
    },
    DESCRIPCION_OT: {
      type: Sequelize.TEXT,
    },
    FECHA_OT: {
      type: Sequelize.DATE,
    },
    DURACION_ESTIMADA: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default OTMantencion;
