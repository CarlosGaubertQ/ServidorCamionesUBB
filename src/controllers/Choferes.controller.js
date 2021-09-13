import Choferes from "../models/Choferes";
import {Op} from 'Sequelize'
export async function getChoferes(req, res) {
  try {
    const choferes = await Choferes.findAll();
    res.status(200).json({ data: choferes });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getChoferesAvisoLincencia(req, res) {
  try {
    const choferes = await Choferes.findAll({
      where:{
        FECHA_CONTROL_LICENCIA:{
          [Op.lt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      }
      
    });
    res.status(200).json({ data: choferes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ data: error });
  }
}

export async function getChoferesByRut(req, res) {
  try {
    const { rut } = req.params;
    const choferes = await Choferes.findAll({
      where: {
        RUT_EMPLEADO: rut
      }
    });
    res.status(200).json({ data: choferes });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addChoferes(req, res) {
  const {
    RUT_EMPLEADO,
    NRO_LICENCIA_CONDUCIR,
    CODIGO_CUENTA,
    NOMBRE_EMPLEADO,
    NOMBRE_EMPLEADO2,
    APELLIDO_EMPLEADO,
    APELLIDO_EMPLEADO2,
    DIRECCION_EMPLEADO,
    FONO_EMPLEADO,
    OBSERVAVION_EMPLEADO,
    FECHA_CONTRATO,
    CLASE_LICENCIA,
    OBSERVACION_CHOFERES,
    FECHA_CONTROL_LICENCIA,
    FECHA_NACIMIENTO,
    DIGITO_CONDUCTOR,
    PORCENTAJE_PARTICIPACION,
  } = req.body;

  try {
    const newChofer = await Choferes.create(
      {
        RUT_EMPLEADO,
        NRO_LICENCIA_CONDUCIR,
        CODIGO_CUENTA,
        NOMBRE_EMPLEADO,
        NOMBRE_EMPLEADO2,
        APELLIDO_EMPLEADO,
        APELLIDO_EMPLEADO2,
        DIRECCION_EMPLEADO,
        FONO_EMPLEADO,
        OBSERVAVION_EMPLEADO,
        FECHA_CONTRATO,
        CLASE_LICENCIA,
        OBSERVACION_CHOFERES,
        FECHA_CONTROL_LICENCIA,
        FECHA_NACIMIENTO,
        DIGITO_CONDUCTOR,
        PORCENTAJE_PARTICIPACION,
      },
      {

        fields: [
          "RUT_EMPLEADO",
          "NRO_LICENCIA_CONDUCIR",
          "CODIGO_CUENTA",
          "NOMBRE_EMPLEADO",
          "NOMBRE_EMPLEADO2",
          "APELLIDO_EMPLEADO",
          "APELLIDO_EMPLEADO2",
          "DIRECCION_EMPLEADO",
          "FONO_EMPLEADO",
          "OBSERVAVION_EMPLEADO",
          "FECHA_CONTRATO",
          "CLASE_LICENCIA",
          "OBSERVACION_CHOFERES",
          "FECHA_CONTROL_LICENCIA",
          "FECHA_NACIMIENTO",
          "DIGITO_CONDUCTOR",
          "PORCENTAJE_PARTICIPACION",
        ],
      }
    );

    if (newChofer) {
      res
        .status(200)
        .send({ message: "Chofer registrado correctamente", data: newChofer });
    } else {
      res
        .status(500)
        .send({ message: "Ya esta registrado este chofer", data: newChofer });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado este camión", data: [] });
  }
}

export async function updateChofer(req, res) {
  const { rut } = req.params;
  const {
    NRO_LICENCIA_CONDUCIR,
    CODIGO_CUENTA,
    NOMBRE_EMPLEADO,
    NOMBRE_EMPLEADO2,
    APELLIDO_EMPLEADO,
    APELLIDO_EMPLEADO2,
    DIRECCION_EMPLEADO,
    FONO_EMPLEADO,
    OBSERVAVION_EMPLEADO,
    FECHA_CONTRATO,
    CLASE_LICENCIA,
    OBSERVACION_CHOFERES,
    FECHA_CONTROL_LICENCIA,
    FECHA_NACIMIENTO,
    DIGITO_CONDUCTOR,
    PORCENTAJE_PARTICIPACION,
  } = req.body;

  const chofer = await Choferes.findOne({
    where: {
      RUT_EMPLEADO: rut,
    },
  });
  if (chofer === null) {
    res
      .status(200)
      .json({
        message: "No se encuentra el registro de este chofer",
        data: [],
      });
  } else {
    const choferUpdate = await chofer.update({
      NRO_LICENCIA_CONDUCIR,
      CODIGO_CUENTA,
      NOMBRE_EMPLEADO,
      NOMBRE_EMPLEADO2,
      APELLIDO_EMPLEADO,
      APELLIDO_EMPLEADO2,
      DIRECCION_EMPLEADO,
      FONO_EMPLEADO,
      OBSERVAVION_EMPLEADO,
      FECHA_CONTRATO,
      CLASE_LICENCIA,
      OBSERVACION_CHOFERES,
      FECHA_CONTROL_LICENCIA,
      FECHA_NACIMIENTO,
      DIGITO_CONDUCTOR,
      PORCENTAJE_PARTICIPACION,
    });
    return res.status(200).json({
      message: "Datos de chofer actualizado correctamente",
      data: choferUpdate,
    });
  }
}

export async function deleteChofer(req, res) {
  try {
    const { rut } = req.params;
    const deleteChofer = await Choferes.destroy({
      where: {
        RUT_EMPLEADO: rut,
      },
    });
    if (deleteChofer === 0) {
      return res
        .status(400)
        .json({
          message: "No se encuentra registrado este chofer",
          count: deleteChofer,
        });
    }
    res
      .status(200)
      .json({ message: "Chofer eliminado correctamente", count: deleteChofer });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este chofer",
      count: 0,
    });
  }
}
