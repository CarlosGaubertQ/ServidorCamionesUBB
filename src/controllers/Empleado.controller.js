import Empleado from "../models/Empleado";
import moment from 'moment'
export async function getEmpleado(req, res) {
  try {
    const empleado = await Empleado.findAll();
    res.status(200).json({ data: empleado });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addEmpleado(req, res) {
  const {
    RUT_EMPLEADO,
    CODIGO_CUENTA,
    NOMBRE_EMPLEADO,
    NOMBRE_EMPLEADO2,
    APELLIDO_EMPLEADO,
    APELLIDO_EMPLEADO2,
    DIRECCION_EMPLEADO,
    FONO_EMPLEADO,
    OBSERVACION_EMPLEADO,
    FECHA_CONTRATO,
    DIGITO_EMPLEADO,
    CARGO_EMPLEADO,
  } = req.body;

  const formatFechaEmpleado = moment(FECHA_CONTRATO, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  try {
    const newEmpleado = await Empleado.create(
      {
        RUT_EMPLEADO,
        CODIGO_CUENTA,
        NOMBRE_EMPLEADO,
        NOMBRE_EMPLEADO2,
        APELLIDO_EMPLEADO,
        APELLIDO_EMPLEADO2,
        DIRECCION_EMPLEADO,
        FONO_EMPLEADO,
        OBSERVACION_EMPLEADO,
        FECHA_CONTRATO: new Date(formatFechaEmpleado),
        DIGITO_EMPLEADO,
        CARGO_EMPLEADO,
      },
      {
        fields: [
          "RUT_EMPLEADO",
          "CODIGO_CUENTA",
          "NOMBRE_EMPLEADO",
          "NOMBRE_EMPLEADO2",
          "APELLIDO_EMPLEADO",
          "APELLIDO_EMPLEADO2",
          "DIRECCION_EMPLEADO",
          "FONO_EMPLEADO",
          "OBSERVACION_EMPLEADO",
          "FECHA_CONTRATO",
          "DIGITO_EMPLEADO",
          "CARGO_EMPLEADO",
        ],
      }
    );

    if (newEmpleado) {
      res.status(200).send({
        message: "Empleado registrado correctamente",
        data: newEmpleado,
      });
    } else {
      res.status(400).send({
        message: "Ya esta registrado este Empleado",
        data: newEmpleado,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: "Ya esta registrado este Empleado",
      data: [],
    });
  }
}

export async function updateEmpleado(req, res) {
  const { rut } = req.params;

  const {
    CODIGO_CUENTA,
    NOMBRE_EMPLEADO,
    NOMBRE_EMPLEADO2,
    APELLIDO_EMPLEADO,
    APELLIDO_EMPLEADO2,
    DIRECCION_EMPLEADO,
    FONO_EMPLEADO,
    OBSERVACION_EMPLEADO,
    FECHA_CONTRATO,
    DIGITO_EMPLEADO,
    CARGO_EMPLEADO,
  } = req.body;

  const formatFechaEmpleado = moment(FECHA_CONTRATO, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  const empleado = await Empleado.findOne({
    where: {
      RUT_EMPLEADO: rut,
    },
  });

  if (empleado === null) {
    res.status(200).json({
      message: "No se encuentra el registro de este empleado",
      data: [],
    });
  } else {
    const empleadoUpdate = await empleado.update({
      CODIGO_CUENTA,
      NOMBRE_EMPLEADO,
      NOMBRE_EMPLEADO2,
      APELLIDO_EMPLEADO,
      APELLIDO_EMPLEADO2,
      DIRECCION_EMPLEADO,
      FONO_EMPLEADO,
      OBSERVACION_EMPLEADO,
      FECHA_CONTRATO: formatFechaEmpleado,
      DIGITO_EMPLEADO,
      CARGO_EMPLEADO,
    });

    return res.status(200).json({
      message: "Empleado actualizado correctamente",
      data: empleadoUpdate,
    });
  }
}

export async function deleteEmpleado(req, res) {
  try {
    const { rut } = req.params;

    const deleteEmpleado = await Empleado.destroy({
      where: {
        RUT_EMPLEADO: rut,
      },
    });

    if (deleteEmpleado === 0) {
      return res.status(400).json({
        message: "No se encuentra registrado este empleado",
        count: deleteEmpleado,
      });
    }

    res.status(200).json({
      message: "Empleado eliminado correctamente",
      count: deleteEmpleado,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este empleado",
      count: 0,
    });
  }
}
