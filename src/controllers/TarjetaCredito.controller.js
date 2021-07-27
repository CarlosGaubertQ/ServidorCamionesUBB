import TarjetaCredito from "../models/TarjetaDeCredito";

export async function getTarjetaCredito(req, res) {
  try {
    const tarjetaCredito = await TarjetaCredito.findAll();
    res.status(200).json({ data: tarjetaCredito });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addTarjetaCredito(req, res) {
  const { CODIGO_TARJETA, TOPE_TARJETA, ESTADO_TARJETA, RUT_EMPLEADO } =
    req.body;

  try {
    const newTarjetaCredito = await TarjetaCredito.create(
      {
        CODIGO_TARJETA,
        TOPE_TARJETA,
        ESTADO_TARJETA,
        RUT_EMPLEADO,
      },
      {
        fields: [
          "CODIGO_TARJETA",
          "TOPE_TARJETA",
          "ESTADO_TARJETA",
          "RUT_EMPLEADO",
        ],
      }
    );
    if (newTarjetaCredito) {
      res.status(200).send({
        message: "Tarjeta de credito agregado correctamente",
        data: newTarjetaCredito,
      });
    } else {
      res.status(500).send({
        message: "Ya existe esta tarjeta de credito en la base de datos",
        data: newTarjetaCredito,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ya existe esta tarjeta de credito en la base de datos",
      data: [error],
    });
  }
}

export async function updateTarjetaCredito(req, res) {
  const { codigo } = req.params;
  const { TOPE_TARJETA, ESTADO_TARJETA, RUT_EMPLEADO } = req.body;

  const tarjetaCredito = await TarjetaCredito.findOne({
    where: {
      CODIGO_TARJETA: codigo,
    },
  });

  if (tarjetaCredito === null) {
    res
      .status(400)
      .json({ message: "No se encontro esta tarjeta de credito", data: [] });
  } else {
    const tarjetaCreditoUpdate = await tarjetaCredito.update({
      TOPE_TARJETA,
      ESTADO_TARJETA,
      RUT_EMPLEADO,
    });
    return res.status(200).json({
      message: "Tarjeta de credito actualizada correctamente",
      data: tarjetaCreditoUpdate,
    });
  }
}

export async function deleteTarjetaCredito(req, res) {
  try {
    const { codigo } = req.params;
    const deleteTarjetaCredito = await TarjetaCredito.destroy({
      where: {
        CODIGO_TARJETA: codigo,
      },
    });
    if (deleteTarjetaCredito === 0) {
      return res.status(400).json({
        message: "No se encontro esta tarjeta de credito",
        count: deleteTarjetaCredito,
      });
    }
    res
      .status(200)
      .json({
        message: "Tarjeta de credito eliminada correctamente",
        count: deleteTarjetaCredito,
      });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar esta tarjeta de credito",
      count: 0,
    });
  }
}
