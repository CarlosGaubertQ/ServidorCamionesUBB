import Obra from "../models/Obra";

export async function getObra(req, res) {
  try {
    const obras = await Obra.findAll();
    res.status(200).json({ data: obras });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addObra(req, res) {
  const { CODIGO_OBRA, DESCRIPCION_OBRA } = req.body;

  try {
    const newObra = await Obra.create(
      {
        CODIGO_OBRA,
        DESCRIPCION_OBRA,
      },
      {
        fields: ["CODIGO_OBRA", "DESCRIPCION_OBRA"],
      }
    );

    if (newObra) {
      res
        .status(200)
        .send({ message: "Obra registrada correctamente", data: newObra });
    } else {
      res
        .status(500)
        .send({ message: "Ya esta registrada este obra", data: newObra });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado esta obra", data: [] });
  }
}

export async function updateObra(req, res) {
  const { codigo } = req.params;
  const { DESCRIPCION_OBRA } = req.body;

  const obra = await Obra.findOne({
    where: {
      CODIGO_OBRA: codigo,
    },
  });

  if (obra === null) {
    res
      .status(400)
      .json({ message: "No se encuentra registrado esta obra", data: [] });
  } else {
    const obraUpdate = await obra.update({
      DESCRIPCION_OBRA,
    });
    return res.status(200).json({
      message: "Obra actualizada correctamente",
      data: obraUpdate,
    });
  }
}

export async function deleteObra(req, res) {
  try {
    const { codigo } = req.params;

    const deleteObra = await Obra.destroy({
      where: {
        CODIGO_OBRA: codigo,
      },
    });

    if (deleteObra === 0) {
      return res
        .status(400)
        .json({ message: "No esta registrado esta obra", count: deleteObra });
    }

    res
      .status(200)
      .json({ message: "Obra eliminada correctamente", count: deleteObra });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este banco",
      count: 0,
    });
  }
}
