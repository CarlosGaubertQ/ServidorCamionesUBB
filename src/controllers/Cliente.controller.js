import Cliente from "../models/Cliente";

export async function getCliente(req, res) {
  try {
    const cliente = await Cliente.findAll();
    res.status(200).json({ data: cliente });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addCliente(req, res) {
  const [
    CODIGO_CLIENTE,
    NOMBRE_CLIENTE,
    DIRECCION_CLIENTE,
    FAX_CLIENTE,
    FONO_CLIENTE,
    OBSERVACION_CLIENTE,
    GIRO_CLIENTE,
    DIGITO_CLIENTE,
  ] = req.body;

  try {
    const newCliente = Cliente.create(
      {
        CODIGO_CLIENTE,
        NOMBRE_CLIENTE,
        DIRECCION_CLIENTE,
        FAX_CLIENTE,
        FONO_CLIENTE,
        OBSERVACION_CLIENTE,
        GIRO_CLIENTE,
        DIGITO_CLIENTE,
      },
      {
        fields: [
          "CODIGO_CLIENTE",
          "NOMBRE_CLIENTE",
          "DIRECCION_CLIENTE",
          "FAX_CLIENTE",
          "FONO_CLIENTE",
          "OBSERVACION_CLIENTE",
          "GIRO_CLIENTE",
          "DIGITO_CLIENTE",
        ],
      }
    );

    if (newCliente) {
      res
        .status(200)
        .send({ message: "Cliente creado correctamente", data: newCliente });
    } else {
      res
        .status(500)
        .send({ message: "Ya esta registrado este cliente", data: newCliente });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado este cliente", data: [] });
  }
}

export async function updateCliente(req, res) {
  const [rut] = req.params;
  const [
    NOMBRE_CLIENTE,
    DIRECCION_CLIENTE,
    FAX_CLIENTE,
    FONO_CLIENTE,
    OBSERVACION_CLIENTE,
    GIRO_CLIENTE,
    DIGITO_CLIENTE,
  ] = req.body;
  const cliente = await Cliente.findOne({
    where: {
      CODIGO_CLIENTE: rut,
    },
  });
  if (cliente === null) {
    res.status(200).json({ message: "No se encontro este cliente", data: [] });
  } else {
    const clienteUpdate = await cliente.update({
      NOMBRE_CLIENTE,
      DIRECCION_CLIENTE,
      FAX_CLIENTE,
      FONO_CLIENTE,
      OBSERVACION_CLIENTE,
      GIRO_CLIENTE,
      DIGITO_CLIENTE,
    });

    return res.status(200).json({
      message: "Cliente ha sido actualizado correctamente",
      data: clienteUpdate,
    });
  }
}

export async function deleteCliente(req, res) {
  const [rut] = req.params;

  try {
    const deleteCliente = await Cliente.destroy({
      where:{
        CODIGO_CLIENTE: rut,
      }
    })
    if(deleteCliente === 0){
      return res
        .status(400)
        .json({ message: "No existe este cliente", count: deleteCliente });
    }
    res
      .status(200)
      .json({ message: "Cliente eliminado correctamente", count: deleteCliente });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este cliente",
      count: 0,
    });
  }
}