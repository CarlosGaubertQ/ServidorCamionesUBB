import Odometro from "../models/Odometro";
import moment from "moment";
export async function getOdometro(req, res) {
  try {
    const odometro = await Odometro.findAll({});
    res.status(200).json({ data: odometro });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getOdometroByPatente(req, res) {
  const { patente } = req.params;

  try {
    const odometro = await Odometro.findAll({
      where: {
        PATENTE_CAMION: patente,
      },
    });

    res.status(200).json({ data: odometro });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addOdometro(req, res) {
  const { PATENTE_CAMION, ODOMETRO_CAMION, FECHA_ODOMETRO } = req.body;

  const formatFecha = moment(FECHA_ODOMETRO, "YYYY-MM-DD").format("YYYY-MM-DD");
  console.log(FECHA_ODOMETRO, formatFecha);
  try {
    const newOdometro = await Odometro.create(
      {
        PATENTE_CAMION,
        ODOMETRO_CAMION,
        FECHA_ODOMETRO: formatFecha,
      },
      { fields: ["PATENTE_CAMION", "ODOMETRO_CAMION", "FECHA_ODOMETRO"] }
    );

    if (newOdometro) {
      res.status(200).send({
        message: "Odómetro agregado correctamente",
        data: newOdometro,
      });
    } else {
      res.status(500).send({
        message: "Ya existe el registro del odómetro en esta fecha",
        data: newOdometro,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ya existe el registro del odómetro en esta fecha",
      data: [],
    });
  }
}

export async function updateOdometro(req, res) {
  const { patente, fecha } = req.params;
  const { ODOMETRO_CAMION } = req.body;

  try {
    const odometro = await Odometro.findOne({
      where: {
        PATENTE_CAMION: patente,
        FECHA_ODOMETRO: new Date(fecha),
      },
    });

    if (odometro === null) {
      res
        .status(200)
        .json({ message: "No se encontro este odometro", data: ["eqweqw"] });
    } else {
      const odometroUpdate = await odometro.update({ ODOMETRO_CAMION });

      return res.status(200).json({
        message: "Odómetro ha sido actualizado correctamente",
        data: odometroUpdate,
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "No se encontro este odometro", data: [error] });
  }
}

export async function deleteOdometro(req, res) {
  try {
    const { patente, fecha } = req.params;
    const deleteOdometro = await Odometro.destroy({
      where: {
        PATENTE_CAMION: patente,
        FECHA_ODOMETRO: new Date(fecha),
      },
    });

    if (deleteOdometro === 0) {
      return res
        .status(400)
        .json({ message: "No existe este odómetro", count: deleteOdometro });
    }

    res.status(200).json({
      message: "Odómetro eliminado correctamente",
      count: deleteOdometro,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar odómetro",
      count: 0,
    });
  }
}
