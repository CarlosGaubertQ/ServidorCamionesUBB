import Carro from "../models/Carro";
import Camion from '../models/Camion'
import moment from 'moment'
import {Op} from 'Sequelize'

export async function getCarro(req, res) {
  try {
    const carro = await Carro.findAll();
    res.status(200).json({ data: carro });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getCarroSinCamion(req, res) {
    try {
      const carro = await Carro.findAll();
      const camionSinCarro = await Camion.findAll({ where:{
        Patente_Carro: {[Op.ne]: null}
      }})

      let patentesCarrosUsada = []
      camionSinCarro.map((carri) => patentesCarrosUsada.push(carri.Patente_Carro) )

      var resultado = carro.filter(item => !patentesCarrosUsada.includes(item.PATENTE_CARRO))

      res.status(200).json({ data: resultado });
    } catch (error) {
      res.status(500).send({ data: error });
    }
}

export async function addCarro(req, res) {
  const {
    PATENTE_CARRO,
    TIPO_DE_CARRO,
    FECHA_DE_COMPRA_CARRO,
    VALOR_CARRO,
    EJE_CARRO,
    MARCA_CARRO,
    OBSERVACION_CARRO,
    FECHA_REV_TECNICA,
  } = req.body;

  
  try {
    const formatFecha = moment(FECHA_DE_COMPRA_CARRO, "YYYY-MM-DD").format(
      "YYYY-MM-DD"
    );
    const newCarro = await Carro.create(
      {
        PATENTE_CARRO,
        TIPO_DE_CARRO,
        FECHA_DE_COMPRA_CARRO: formatFecha,
        VALOR_CARRO,
        EJE_CARRO,
        MARCA_CARRO,
        OBSERVACION_CARRO,
        FECHA_REV_TECNICA,
      },
      {
        fields: [
          "PATENTE_CARRO",
          "TIPO_DE_CARRO",
          "FECHA_DE_COMPRA_CARRO",
          "VALOR_CARRO",
          "EJE_CARRO",
          "MARCA_CARRO",
          "OBSERVACION_CARRO",
          "FECHA_REV_TECNICA",
        ],
      }
    );

    if (newCarro) {
      res
        .status(200)
        .send({ message: "Carro creado correctamente", data: newCarro });
    } else {
      res.status(500).send({ message: "Ya existe este carro", data: newCarro });
    }
  } catch (error) {
    return res.status(400).send({ message: "Ya existe este carro", data: [] });
  }
}

export async function updateCarro(req, res) {
  const {patente} = req.params;
  const {
    TIPO_DE_CARRO,
    FECHA_DE_COMPRA_CARRO,
    VALOR_CARRO,
    EJE_CARRO,
    MARCA_CARRO,
    OBSERVACION_CARRO,
    FECHA_REV_TECNICA,
   } = req.body;

   const formatFecha = moment(FECHA_DE_COMPRA_CARRO, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  const carro = await Carro.findOne({
    where: {
      PATENTE_CARRO: patente,
    },
  });

  if (carro === null) {
    res.status(400).json({ message: "No se encontro este carro", data: [] });
  } else {
    const carroUpdate = await carro.update({
      TIPO_DE_CARRO,
      FECHA_DE_COMPRA_CARRO: formatFecha,
      VALOR_CARRO,
      EJE_CARRO,
      MARCA_CARRO,
      OBSERVACION_CARRO,
      FECHA_REV_TECNICA,
    });

    return res.status(200).json({
      message: "Carro ha sido actualizado correctamente",
      data: carroUpdate,
    });
  }
}

export async function deleteCarro(req, res) {
  const {patente} = req.params;
  try {
    const deleteCarro = await Carro.destroy({
      where: {
        PATENTE_CARRO: patente,
      },
    });
    if (deleteCarro === 0) {
      return res
        .status(400)
        .json({ message: "No existe este carro", count: deleteCarro });
    }
    res
      .status(200)
      .json({ message: "Carro eliminado correctamente", count: deleteCarro });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este carro",
      count: 0,
    });
  }
}
