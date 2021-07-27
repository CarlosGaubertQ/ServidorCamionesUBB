import CostoDistribuir from "../models/CostoDistribuir";
import moment from "moment";

export async function getCostoDistribuir(req, res) {
  try {
    const costoDistribuir = await CostoDistribuir.findAll();
    res.status(200).json({ data: costoDistribuir });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addCostoDistribuir(req, res) {
  const { FECHA_PAGO, MONTO_DISTRIBUCION } = req.body;

  const formatFechaPago = moment(FECHA_PAGO, "YYYY-MM-DD").format("YYYY-MM-DD");

  try {
    const newCostoDistribuir = await CostoDistribuir.create(
      {
        FECHA_PAGO: new Date(formatFechaPago),
        MONTO_DISTRIBUCION,
      },
      {
        fields: ["FECHA_PAGO", "MONTO_DISTRIBUCION"],
      }
    );

    if (newCostoDistribuir) {
      res.status(200).send({
        message: "Costo indirecto registrado correctamente",
        data: newCostoDistribuir,
      });
    } else {
      res.status(400).send({
        message: "Ya esta registrado este costo indirecto",
        data: newCostoDistribuir,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: "Ya esta registrado este costo indirecto",
      data: [],
    });
  }
}

export async function updateCostoDistribuir(req, res) {
  const { fecha } = req.params;
  const { MONTO_DISTRIBUCION } = req.body;

  const formatFechaPago = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");

  const costoDistriuir = await CostoDistribuir.findOne({
    where: {
      FECHA_PAGO: new Date(formatFechaPago),
    },
  });

  if (costoDistriuir === null) {
    res.status(200).json({
      message: "No se encuentra el registro de este costo indirecto",
      data: [],
    });
  } else {
    const costoDistribuirUpdate = await costoDistriuir.update({
      MONTO_DISTRIBUCION,
    });
    return res.status(200).json({
      message: "Costo indirecto actualizado correctamente",
      data: costoDistribuirUpdate,
    });
  }
}

export async function deleteCostoDistribuir(req, res) {
  try {
    const { fecha } = req.params;
    const formatFechaPago = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");

    const deleteCostoDistriuir = await CostoDistribuir.destroy({
      where: {
        FECHA_PAGO: new Date(formatFechaPago),
      },
    });

    if (deleteCostoDistriuir === 0) {
      return res.status(400).json({
        message: "No se encuentra registrado este costo indirecto",
        count: deleteCostoDistriuir,
      });
    }

    res.status(200).json({
      message: "Costo indirecto eliminado correctamente",
      count: deleteCostoDistriuir,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este costo indirecto",
      count: 0,
    });
  }
}
