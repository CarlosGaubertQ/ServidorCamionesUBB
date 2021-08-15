import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import moment from 'moment'
const Camion = sequelize.define(
  "camion",
  {
    PATENTE_CAMION: {
      type: Sequelize.TEXT,
      primaryKey: true,
    },
    CODIGO_BANCO: {
      type: Sequelize.TEXT,
    },
    CODIGO_MANTENCION: {
      type: Sequelize.TEXT,
    },
    NUMERO_DE_LEASING: {
      type: Sequelize.TEXT,
    },
    MODELO_CAMION: { 
      type: Sequelize.TEXT,
    },
    KILOMETRAJE_COMPRA_CAMION:{
        type: Sequelize.FLOAT,
    },
    OBSERVACION_CAMION:{
        type: Sequelize.TEXT,
    },
    FECHA_COMPRA_CAMION:{
        type: Sequelize.DATE,
        get: function() {
            return moment(this.getDataValue('FECHA_COMPRA_CAMION')).add(1,'days').format('DD-MM-YYYY')
          }
    },
    VALOR_COMPRA_CAMION:{
        type: Sequelize.INTEGER
    },
    MARCA_CAMION:{
        type: Sequelize.TEXT
    },
    EJE_CAMION:{
        type: Sequelize.INTEGER
    },
    ANO_FABRICACION_CAMION:{
        type: Sequelize.INTEGER
    },
    NUMERO_MOTOR:{
        type: Sequelize.TEXT
    },
    CARGA_MAXIMA:{
        type: Sequelize.DOUBLE
    },
    CAPACIDAD_CARTER:{
        type: Sequelize.INTEGER
    },
    CAPACIDAD_CAJA:{
        type: Sequelize.INTEGER
    },
    CAPACIDAD_DIFERENCIAL:{
        type: Sequelize.INTEGER
    },
    TIPO_CAJA_CAMBIO:{
        type: Sequelize.TEXT
    },
    TIPO_DIFERENCIAL:{
        type: Sequelize.TEXT
    },
    TIPO_EMBRIAGE:{
        type: Sequelize.TEXT
    },
    TIPO_SUSPENCION:{
        type: Sequelize.TEXT
    },
    MODELO_FRENO_MOTOR:{
        type: Sequelize.TEXT
    },
    MODELO_DIRECCION:{
        type: Sequelize.TEXT
    },
    MODELO_INYECCION:{
        type: Sequelize.TEXT
    },
    MODELO_SISTEMA_ELECTRICO:{
        type: Sequelize.TEXT
    },
    NRO_CAMION:{
        type: Sequelize.TEXT
    },
    NRO_CHASIS:{
        type: Sequelize.TEXT
    },
    NRO_EJES:{
        type: Sequelize.INTEGER
    },
    Patente_Carro:{
        type: Sequelize.TEXT
    },
    FECHA_REV_TECNICA:{
        type: Sequelize.DATE
    },
    COLOR_CAMION:{
        type: Sequelize.TEXT
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
 

export default Camion