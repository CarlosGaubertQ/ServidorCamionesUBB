import Camion from "../models/Camion";
import {Op} from 'Sequelize'
export async function getCamiones(req, res) {
  try {
    const camiones = await Camion.findAll();
    res.status(200).json({ data: camiones });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getCamionesCarro(req, res) {
  try {
    const camiones = await Camion.findAll({ where:{
      Patente_Carro: {
        [Op.ne]: null
      }
    }});
    res.status(200).json({ data: camiones });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getCamionByPatente(req, res) {
  const { patente } = req.params;
  try {
    const camion = await Camion.findAll({
      where: {
        PATENTE_CAMION: patente,
      },
    });
    res.status(200).json({ data: camion });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addCamion(req, res) {
  const {
    PATENTE_CAMION,
    MODELO_CAMION,
    CODIGO_MANTENCION,
    MARCA_CAMION,
    COLOR_CAMION,
    ANO_FABRICACION_CAMION,
    KILOMETRAJE_COMPRA_CAMION,
    FECHA_COMPRA_CAMION,
    VALOR_COMPRA_CAMION,
    CARGA_MAXIMA,
    OBSERVACION_CAMION,
    CAPACIDAD_CARTER,
    CAPACIDAD_CAJA,
    CAPACIDAD_DIFERENCIAL,
    TIPO_CAJA_CAMBIO,
    TIPO_DIFERENCIAL,
    TIPO_EMBRIAGE,
    TIPO_SUSPENCION,
    MODELO_FRENO_MOTOR,
    MODELO_DIRECCION,
    MODELO_INYECCION,
    MODELO_SISTEMA_ELECTRICO,
    NRO_CAMION,
    NRO_CHASIS,
    NRO_EJES,
  } = req.body;

  try {
    const newCamion = await Camion.create(
      {
        PATENTE_CAMION,
        MODELO_CAMION,
        CODIGO_MANTENCION,
        MARCA_CAMION,
        COLOR_CAMION,
        ANO_FABRICACION_CAMION,
        KILOMETRAJE_COMPRA_CAMION,
        FECHA_COMPRA_CAMION,
        VALOR_COMPRA_CAMION,
        CARGA_MAXIMA,
        OBSERVACION_CAMION,
        CAPACIDAD_CARTER,
        CAPACIDAD_CAJA,
        CAPACIDAD_DIFERENCIAL,
        TIPO_CAJA_CAMBIO,
        TIPO_DIFERENCIAL,
        TIPO_EMBRIAGE,
        TIPO_SUSPENCION,
        MODELO_FRENO_MOTOR,
        MODELO_DIRECCION,
        MODELO_INYECCION,
        MODELO_SISTEMA_ELECTRICO,
        NRO_CAMION,
        NRO_CHASIS,
        NRO_EJES,
      },
      {
        fields: [
          "PATENTE_CAMION",
          "MODELO_CAMION",
          "CODIGO_MANTENCION",
          "MARCA_CAMION",
          "COLOR_CAMION",
          "ANO_FABRICACION_CAMION",
          "KILOMETRAJE_COMPRA_CAMION",
          "FECHA_COMPRA_CAMION",
          "VALOR_COMPRA_CAMION",
          "CARGA_MAXIMA",
          "OBSERVACION_CAMION",
          "CAPACIDAD_CARTER",
          "CAPACIDAD_CAJA",
          "CAPACIDAD_DIFERENCIAL",
          "TIPO_CAJA_CAMBIO",
          "TIPO_DIFERENCIAL",
          "TIPO_EMBRIAGE",
          "TIPO_SUSPENCION",
          "MODELO_FRENO_MOTOR",
          "MODELO_DIRECCION",
          "MODELO_INYECCION",
          "MODELO_SISTEMA_ELECTRICO",
          "NRO_CAMION",
          "NRO_CHASIS",
          "NRO_EJES",
        ],
      }
    );
    if (newCamion) {
      res
        .status(200)
        .send({ message: "Cami??n creado correctamente", data: newCamion });
    } else {
      res
        .status(500)
        .send({ message: "Ya existe este cami??n", data: newCamion });
    }
  } catch (error) {
    console.log(error)
    return res.status(400).send({ message: "Ya existe este cami??n", data: [] });
  }
}

export async function updateCamion(req, res) {
  const { patente } = req.params;
  const {
    MODELO_CAMION,
    CODIGO_MANTENCION,
    MARCA_CAMION,
    COLOR_CAMION,
    ANO_FABRICACION_CAMION,
    KILOMETRAJE_COMPRA_CAMION,
    FECHA_COMPRA_CAMION,
    VALOR_COMPRA_CAMION,
    CARGA_MAXIMA,
    OBSERVACION_CAMION,
    CAPACIDAD_CARTER,
    CAPACIDAD_CAJA,
    CAPACIDAD_DIFERENCIAL,
    TIPO_CAJA_CAMBIO,
    TIPO_DIFERENCIAL,
    TIPO_EMBRIAGE,
    TIPO_SUSPENCION,
    MODELO_FRENO_MOTOR,
    MODELO_DIRECCION,
    MODELO_INYECCION,
    MODELO_SISTEMA_ELECTRICO,
    NRO_CAMION,
    NRO_CHASIS,
    NRO_EJES,
    Patente_Carro
  } = req.body;

  const camion = await Camion.findOne({
    where: {
      PATENTE_CAMION: patente,
    },
  });

  if (camion === null) {
    res.status(200).json({ message: "No se encontro este cami??n", data: [] });
  } else {
    const camionUpdate = await camion.update({
      MODELO_CAMION,
      CODIGO_MANTENCION,
      MARCA_CAMION,
      COLOR_CAMION,
      ANO_FABRICACION_CAMION,
      KILOMETRAJE_COMPRA_CAMION,
      FECHA_COMPRA_CAMION,
      VALOR_COMPRA_CAMION,
      CARGA_MAXIMA,
      OBSERVACION_CAMION,
      CAPACIDAD_CARTER,
      CAPACIDAD_CAJA,
      CAPACIDAD_DIFERENCIAL,
      TIPO_CAJA_CAMBIO,
      TIPO_DIFERENCIAL,
      TIPO_EMBRIAGE,
      TIPO_SUSPENCION,
      MODELO_FRENO_MOTOR,
      MODELO_DIRECCION,
      MODELO_INYECCION,
      MODELO_SISTEMA_ELECTRICO,
      NRO_CAMION,
      NRO_CHASIS,
      NRO_EJES,
      Patente_Carro
    });

    return res.status(200).json({
      message: "Camion ha sido actualizado correctamente",
      data: camionUpdate,
    });
  }
}

export async function deleteCamion(req, res) {
  try {
    const { patente } = req.params;
    const deleteCamion = await Camion.destroy({
      where: {
        PATENTE_CAMION: patente,
      },
    });

    if (deleteCamion === 0) {
      return res
        .status(400)
        .json({ message: "No existe este cami??n", count: deleteCamion });
    }
    res
      .status(200)
      .json({ message: "Cami??n eliminado correctamente", count: deleteCamion });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este cami??n",
      count: 0,
    });
  }
}
