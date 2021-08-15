import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const Empleado = sequelize.define(
  "empleado",
  {
    RUT_EMPLEADO: {
      type: Sequelize.INTEGER,
      primaryKey: true,
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
    OBSERVACION_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    FECHA_CONTRATO: {
      type: Sequelize.DATE,
      get: function() {
        return moment(this.getDataValue('FECHA_CONTRATO')).add(1,'days').format('DD-MM-YYYY')
      }
    },
    DIGITO_EMPLEADO: {
      type: Sequelize.TEXT,
    },
    CARGO_EMPLEADO: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Empleado;
