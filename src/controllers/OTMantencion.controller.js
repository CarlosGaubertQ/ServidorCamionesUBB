import OTMantencion from "../models/OTMantencion";

export async function getOTMantencion(req, res) {
  try {
    const oTMantencion = await OTMantencion.findAll();
    res.status(200).json({ data: oTMantencion });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addOTMantencion(req, res) {
  const [
    CODIGO_OT,
    PATENTE_CAMION,
    PATENTE_CARRO,
    TIPO_ORDEN,
    DESCRIPCION_OT,
    FECHA_OT,
    DURACION_ESTIMADA,
  ] = req.body;

  try {
    const newOTMantencion = await OTMantencion.create(
      {
        CODIGO_OT,
        PATENTE_CAMION,
        PATENTE_CARRO,
        TIPO_ORDEN,
        DESCRIPCION_OT,
        FECHA_OT,
        DURACION_ESTIMADA,
      },
      {
        fields: [
          "CODIGO_OT",
          "PATENTE_CAMION",
          "PATENTE_CARRO",
          "TIPO_ORDEN",
          "DESCRIPCION_OT",
          "FECHA_OT",
          "DURACION_ESTIMADA",
        ],
      }
    );

    if (newOTMantencion) {
      res.status(200).send({
        message: "Orden de trabajo agregada correctamente",
        data: newOTMantencion,
      });
    } else {
      res.status(500).send({
        message: "Ya esta registrado esta orden de trabajo",
        data: newOTMantencion,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado esta orden de trabajo", data: [] });
  }
}

export async function updateOTMantencion(req, res) {
  const [codigo] = req.params;
  const [
    PATENTE_CAMION,
    PATENTE_CARRO,
    TIPO_ORDEN,
    DESCRIPCION_OT,
    FECHA_OT,
    DURACION_ESTIMADA,
  ] = req.body;

  const oTMantencion = await OTMantencion.findOne({
    where: {
      CODIGO_OT: codigo,
    },
  });

  if (oTMantencion === null) {
    res
      .status(400)
      .json({ message: "No se encontro esta orden de trabajo", data: [] });
  } else {
    const oTMantencionUpdate = await oTMantencion.update({
      PATENTE_CAMION,
      PATENTE_CARRO,
      TIPO_ORDEN,
      DESCRIPCION_OT,
      FECHA_OT,
      DURACION_ESTIMADA,
    });
    return res.status(200).json({
      message: "Orden de trabajo actualizada correctamente",
      data: oTMantencionUpdate,
    });
  }
}

export async function deleteOTMantencion(req, res) {
  try {
    const [codigo] = req.params;
    const deleteOTMantencion = await OTMantencion.destroy({
      where: {
        CODIGO_OT: codigo,
      },
    });
    if (deleteOTMantencion === 0) {
      return res
        .status(400)
        .json({
          message: "No se encontro esta orden de trabajo",
          count: deleteOTMantencion,
        });
    }
    res
    .status(200)
    .json({ message: "Orden de trabajo eliminada correctamente", count: deleteOTMantencion });
  } catch (error) {
    res.status(500).json({
        message: "Algo ocurrio cuando se queria eliminar esta orden de trabajo",
        count: 0,
      });
  }
}
