import BoletaCombustible from "../models/BoletaCombustible";

export async function getBoletaCombustible(req, res) {
  try {
    const boletaCombustible = await BoletaCombustible.findAll();
    res.status(200).json({ data: boletaCombustible });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addBoletaCombustible(req, res) {
  const [
    NUMERO_BOLETA_COMBUSTIBLE,
    NUMERO_GUIA,
    PROVEEDOR_COMBUSTIBLE,
    MONTO_COMBUSTIBLE,
    LITROS_COMBUSTIBLE,
    OCTANAJE_COMBUSTIBLE,
    COMBUSTIBLE_BENCINA,
    COMBUSTIBLE_PETROLEO,
    PATENTE_CAMION,
    CODIGO_TARJETA,
    ODOMETRO,
    FECHA_BOLETA,
  ] = req.body;

  try {
    const newBoletaCombustible = await BoletaCombustible.create(
      {
        NUMERO_BOLETA_COMBUSTIBLE,
        NUMERO_GUIA,
        PROVEEDOR_COMBUSTIBLE,
        MONTO_COMBUSTIBLE,
        LITROS_COMBUSTIBLE,
        OCTANAJE_COMBUSTIBLE,
        COMBUSTIBLE_BENCINA,
        COMBUSTIBLE_PETROLEO,
        PATENTE_CAMION,
        CODIGO_TARJETA,
        ODOMETRO,
        FECHA_BOLETA,
      },
      {
        fields: [
          "NUMERO_BOLETA_COMBUSTIBLE",
          "NUMERO_GUIA",
          "PROVEEDOR_COMBUSTIBLE",
          "MONTO_COMBUSTIBLE",
          "LITROS_COMBUSTIBLE",
          "OCTANAJE_COMBUSTIBLE",
          "COMBUSTIBLE_BENCINA",
          "COMBUSTIBLE_PETROLEO",
          "PATENTE_CAMION",
          "CODIGO_TARJETA",
          "ODOMETRO",
          "FECHA_BOLETA",
        ],
      }
    );
    if (newBoletaCombustible) {
      res.status(200).send({
        message: "Boleta de combustible creada correctamente",
        data: newBoletaCombustible,
      });
    } else {
      res.status(500).send({
        message: "Ya existe esta boleta de combustible",
        data: newBoletaCombustible,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya existe esta boleta de combustible", data: [] });
  }
}

export async function updateBoletaCombustible(req, res) {
  const [numBoleta] = req.params;
  const [
    NUMERO_GUIA,
    PROVEEDOR_COMBUSTIBLE,
    MONTO_COMBUSTIBLE,
    LITROS_COMBUSTIBLE,
    OCTANAJE_COMBUSTIBLE,
    COMBUSTIBLE_BENCINA,
    COMBUSTIBLE_PETROLEO,
    PATENTE_CAMION,
    CODIGO_TARJETA,
    ODOMETRO,
    FECHA_BOLETA,
  ] = req.body;

  const boletaCombustible = await BoletaCombustible.findOne({
    where: {
      NUMERO_BOLETA_COMBUSTIBLE: numBoleta,
    },
  });

  if (boletaCombustible === null) {
    res.status(200).json({ message: "No se encontro esta boleta", data: [] });
  } else {
    const boletaCombustibleUpdate = await BoletaCombustible.update({
      NUMERO_GUIA,
      PROVEEDOR_COMBUSTIBLE,
      MONTO_COMBUSTIBLE,
      LITROS_COMBUSTIBLE,
      OCTANAJE_COMBUSTIBLE,
      COMBUSTIBLE_BENCINA,
      COMBUSTIBLE_PETROLEO,
      PATENTE_CAMION,
      CODIGO_TARJETA,
      ODOMETRO,
      FECHA_BOLETA,
    });

    return res.status(200).json({
      message: "Boleta de combustible ha sido actualizado correctamente",
      data: boletaCombustibleUpdate,
    });
  }
}

export async function deleteBoletaCombustible(req, res) {
  const [numBoleta] = req.params;
  try {
    const deleteBoletaCombustible = await BoletaCombustible.destroy({
      NUMERO_BOLETA_COMBUSTIBLE: numBoleta,
    });

    if (deleteBoletaCombustible === 0) {
      return res.status(400).json({
        message: "No existe esta boleta de combustible",
        count: deleteBoletaCombustible,
      });
    }

    res.status(200).json({
      message: "Boleta de combustible eliminada correctamente",
      count: deleteBoletaCombustible,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Algo ocurrio cuando se queria eliminar esta boleta de combustible",
      count: 0,
    });
  }
}
