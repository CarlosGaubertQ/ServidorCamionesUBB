import SeguroCamion from "../models/SeguroCamion";
import moment from "moment";

export async function getSeguroCamion(req, res) {
  try {
    const seguroCamion = await SeguroCamion.findAll();
    res.status(200).json({ data: seguroCamion });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getSeguroCamionByPatente(req, res) {
  const { patente } = req.params;
  
  try {
    const seguroCamion = await SeguroCamion.findAll({
      where:{
        PATENTE_CAMION: patente,
      }
    });

    res.status(200).json({ data: seguroCamion });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addSeguroCamion(req, res) {
  const { PATENTE_CAMION, VALOR_SEGURO, FECHA_PAGO_SEGURO } = req.body;
  const formatFecha = moment(FECHA_PAGO_SEGURO, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );
  try {
    const newSeguroCamion = await SeguroCamion.create(
      {
        PATENTE_CAMION,
        VALOR_SEGURO,
        FECHA_PAGO_SEGURO: formatFecha,
      },
      { fields: ["PATENTE_CAMION", "VALOR_SEGURO", "FECHA_PAGO_SEGURO"] }
    );
    if (newSeguroCamion) {
      res.status(200).send({
        message: "Seguro agregado correctamente",
        data: newSeguroCamion,
      });
    } else {
      res.status(500).send({
        message:
          "Ya existe un seguro para este camion registrado con esta fecha",
        data: newSeguroCamion,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ya existe un seguro para este camion registrado con esta fecha",
      data: [error],
    });
  }
}

export async function updateSeguroCamion(req, res) {
  const { patente, fecha } = req.params;
  const { VALOR_SEGURO } = req.body;

  const formatFecha = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD")

  const seguro = await SeguroCamion.findOne({
    where: {
      PATENTE_CAMION: patente,
      FECHA_PAGO_SEGURO: new Date(formatFecha),
    },
  });
  if (seguro === null) {
    res.status(200).json({ message: "No se encontro este seguro", data: [] });
  } else {
    const seguroUpdate = await seguro.update({ VALOR_SEGURO });
    return res.status(200).json({
      message: "Seguro ha sido actualizado correctamente",
      data: seguroUpdate,
    });
  }
}

export async function deleteSeguroCamion(req, res) {
  try {
    const { patente, fecha } = req.params;
    const formatFecha = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD")
    const deleteSeguroCamion = await SeguroCamion.destroy({
      where: {
        PATENTE_CAMION: patente,
        FECHA_PAGO_SEGURO: new Date(formatFecha),
      },
    });

    if (deleteSeguroCamion === 0) {
      return res
        .status(400)
        .json({ message: "No existe este seguro", count: deleteSeguroCamion });
    }

    res.status(200).json({
      message: "Seguro eliminado correctamente",
      count: deleteSeguroCamion,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar seguro",
      count: 0,
    });
  }
}
