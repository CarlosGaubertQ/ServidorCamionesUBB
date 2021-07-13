import Banco from "../models/Banco";

export async function getBanco(req, res) {
  try {
    const banco = await Banco.findAll();
    res.status(200).json({ data: banco });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addBanco(req, res) {
  const {
    CODIGO_BANCO,
    NOMBRE_BANCO,
    DIRECCION_INSTITUCION,
    FONO_BANCO,
    FAX_BANCO,
    DIGITO_BANCO,
  } = req.body;

  try {
    const newBanco = await Banco.create(
      {
        CODIGO_BANCO,
        NOMBRE_BANCO,
        DIRECCION_INSTITUCION,
        FONO_BANCO,
        FAX_BANCO,
        DIGITO_BANCO,
      },
      {
        fields: [
          "CODIGO_BANCO",
          "NOMBRE_BANCO",
          "DIRECCION_INSTITUCION",
          "FONO_BANCO",
          "FAX_BANCO",
          "DIGITO_BANCO",
        ],
      }
    );

    if (newBanco) {
      res
        .status(200)
        .send({ message: "Banco registrado correctamente", data: newBanco });
    } else {
      res
        .status(500)
        .send({ message: "Ya esta registrado este banco", data: newBanco });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado este banco", data: [] });
  }
}

export async function updateBanco(req, res) {
  const {codigo} = req.params;
  const 
    {NOMBRE_BANCO,
    DIRECCION_INSTITUCION,
    FONO_BANCO,
    FAX_BANCO,
    DIGITO_BANCO,
     } = req.body;

  const banco = await Banco.findOne({
    where: {
      CODIGO_BANCO: codigo,
    },
  });

  if (banco === null) {
    res
      .status(400)
      .json({ message: "No se encuentra registrao este banco", data: [] });
  } else {
    const bancoUpdate = banco.update({
      NOMBRE_BANCO,
      DIRECCION_INSTITUCION,
      FONO_BANCO,
      FAX_BANCO,
      DIGITO_BANCO,
    });
    return res.status(200).json({
      message: "Banco actualizado correctamente",
      data: bancoUpdate,
    });
  }
}

export async function deleteBanco(req, res) {
  try {
    const [codigo] = req.params;
    const deleteBanco = await Banco.destroy({
      where: {
        CODIGO_BANCO: codigo,
      },
    });
    if (deleteBanco === 0) {
      return res
        .status(400)
        .json({ message: "No esta registrado este banco", count: deleteBanco });
    }

    res
      .status(200)
      .json({ message: "Banco eliminado correctamente", count: deleteBanco });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este banco",
      count: 0,
    });
  }
}
