import MantencionNormal from "../models/MantencionNormal";

export async function getMantencionNormal(req, res) {
  try {
    const mantencionNormal = await MantencionNormal.findAll({});
    res.status(200).json({ data: mantencionNormal });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

    export async function addMantencionNormal(req, res) {
  const { CODIGO_MANTENCION, OBSERVACION_MANTENCION } = req.body;

  try {
    const newMantencionNormal = await MantencionNormal.create(
      {
        CODIGO_MANTENCION,
        OBSERVACION_MANTENCION,
      },
      { fields: ["CODIGO_MANTENCION", "OBSERVACION_MANTENCION"] }
    );

    if (newMantencionNormal) {
      res.status(200).send({
        message: "Mantencion normal agregado correctamente",
        data: newMantencionNormal,
      });
    } else {
      res.status(500).send({
        message: "Ya existe el registro de esta mantencion normal",
        data: newMantencionNormal,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ya existe el registro de esta mantencion normal",
      data: [],
    });
  }
}

export async function updateMantencionNormal(req, res) {
  const { codigo } = req.params;
  const { OBSERVACION_MANTENCION } = req.body;

  try {
    const mantencionNormal = await MantencionNormal.findOne({
      where: {
        CODIGO_MANTENCION: codigo,
      },
    });

    if (mantencionNormal === null) {
      res
        .status(200)
        .json({ message: "No se encontro este mantención normal", data: [] });
    } else {
      const mantencionNormalUpdate = await mantencionNormal.update({
        OBSERVACION_MANTENCION,
      });

      return res.status(200).json({
        message: "Mantención normal ha sido actualizado correctamente",
        data: mantencionNormalUpdate,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: "No se encontro esta mantención normal",
        data: [error],
      });
  }
}

export async function deleteMantencionNormal(req, res) {
  try {
    const { codigo } = req.params;

    const deleteMantencionNormal = await MantencionNormal.destroy({
      where: {
        CODIGO_MANTENCION: codigo,
      },
    });
    if (deleteMantencionNormal === 0) {
      return res
        .status(400)
        .json({
          message: "No existe esta mantención normal",
          count: deleteMantencionNormal,
        });
    }

    res.status(200).json({
      message: "Mantención normal eliminado correctamente",
      count: deleteMantencionNormal,
    });
  } catch (error) {
    res.status(500).json({
        message: "Algo ocurrio cuando se queria eliminar esta mantención normal",
        count: 0,
      });
  }
}
