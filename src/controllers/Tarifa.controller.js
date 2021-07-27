import Tarifa from "../models/Tarifa";

export async function getTarifa(req, res) {
  try {
    const tarifa = await Tarifa.findAll({});
    res.status(200).json({ data: tarifa });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getTarifaByClienteUM(req, res) {
  const { codigo ,um} = req.params;
  try {
    const tarifa = await Tarifa.findAll({
      where: {
        Codigo_Cliente: codigo,
        U_M_tarifa: um
      },
    });
    res.status(200).json({ data: tarifa });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addTarifa(req, res) {
  const { Codigo_Cliente, U_M_tarifa, Tari } = req.body;

  try {

    const newTarifa = await Tarifa.create(
        {
          Codigo_Cliente,
          U_M_tarifa,
          Tarifa: Tari,
        
        },
        {
          fields: [
            "Codigo_Cliente",
            "U_M_tarifa",
            "Tarifa",
          ],
        }
      );

    if (newTarifa) {
      res.status(200).send({
        message: "Tarifa registrada correctamente",
        data: newTarifa,
      });
    } else {
      res.status(400).send({
        message: "Ya esta registrado esta tarifa",
        data: newTarifa,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({
      message: "Ya esta registrado esta tarifa",
      data: [],
    });
  }
}

export async function updateTarifa(req, res) {
  const { cliente, um } = req.params;
  const { Tari } = req.body;

  try {
    const tarifa = await Tarifa.findOne({
      where: {
        Codigo_Cliente: cliente,
        U_M_tarifa: um,
      },
    });
    if (tarifa === null) {
      res.status(400).json({
        message: "No se encuentra el registro de esta tarifa",
        data: [],
      });
    } else {
      const tarifaUpdate = await tarifa.update({
        Tarifa: Tari,
      });
      return res.status(200).json({
        message: "Tarifa actualizada correctamente",
        data: tarifaUpdate,
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Ocurrio un error",
      data: error,
    });
  }
}

export async function deleteTarifa(req, res) {
  try {
    const { cliente, um } = req.params;
    const deleteTarifa = await Tarifa.destroy({
      where: {
        Codigo_Cliente: cliente,
        U_M_tarifa: um,
      },
    });

    if (deleteTarifa === 0) {
      return res.status(400).json({
        message: "No se encuentra registrado esta tarifa",
        count: deleteTarifa,
      });
    }

    res.status(200).json({
      message: "Tarifa eliminada correctamente",
      count: deleteTarifa,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar esta tarifa",
      count: 0,
    });
  }
}
