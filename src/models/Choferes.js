import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Choferes = sequelize.define(
  "choferes",
  {
    RUT_EMPLEADO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    NRO_LICENCIA_CONDUCIR: {
      type: Sequelize.INTEGER,
    },
    CODIGO_CUENTA: {
      type: Sequelize.INTEGER,
    },
    NOMBRE_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    NOMBRE_EMPLEADO2: {
      type: Sequelize.TEXT,
    },
    APELLIDO_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    APELLIDO_EMPLEADO2: {
      type: Sequelize.TEXT,
    },
    DIRECCION_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    FONO_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    OBSERVAVION_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    FECHA_CONTRATO: {
      type: Sequelize.DATE,
    },
    CLASE_LICENCIA: {
      type: Sequelize.TEXT,
    },
    OBSERVACION_CHOFERES: {
      type: Sequelize.TEXT,
    },
    FECHA_CONTROL_LICENCIA: {
      type: Sequelize.DATE,
    },
    FECHA_NACIMIENTO: {
      type: Sequelize.DATE,
    },
    DIGITO_CONDUCTOR: {
      type: Sequelize.TEXT,
    },
    PORCENTAJE_PARTICIPACION: {
      type: Sequelize.DOUBLE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Choferes;