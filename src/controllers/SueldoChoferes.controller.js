import SueldosChoferes from "../models/SueldosChoferes";
import moment from 'moment'
export async function getSueldoChofer(req, res) {
  try {
    const sueldoChofer = await SueldosChoferes.findAll();
    res.status(200).json({ data: sueldoChofer });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getSueldoChoferByRut(req, res) {
  try {
    const { rut } = req.params;
    const sueldoChofer = await SueldosChoferes.findAll({
      where:{
        RUT_CHOFER: rut 
      }
    });
    res.status(200).json({ data: sueldoChofer });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addSueldoChofer(req, res) {
  const {
    RUT_CHOFER,
    FECHA_PAGO,
    SUELDO_BRUTO,
    PROVICION_DESAUCIO,
    PROVICION_VACACIONES,
  } = req.body;

  const formatFechaPago = moment(FECHA_PAGO, "YYYY-MM-DD").format("YYYY-MM-DD");

  try {
    const newSueldoChofer = await SueldosChoferes.create(
      {
        RUT_CHOFER,
        FECHA_PAGO: new Date(formatFechaPago),
        SUELDO_BRUTO,
        PROVICION_DESAUCIO,
        PROVICION_VACACIONES,
      },
      {
        fields: [
          "RUT_CHOFER",
          "FECHA_PAGO",
          "SUELDO_BRUTO",
          "PROVICION_DESAUCIO",
          "PROVICION_VACACIONES",
        ],
      }
    );

    if (newSueldoChofer) {
      res.status(200).send({
        message: "Sueldo de chofer ingresado correctamente",
        data: newSueldoChofer,
      });
    } else {
      res.status(400).send({
        message:
          "Ya esta ingresado este sueldo de chofer durante la fecha indicada",
        data: newSueldoChofer,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        "Ya esta ingresado este sueldo de chofer durante la fecha indicada",
      data: [],
    });
  }
}

export async function updateSueldoChofer(req, res) {
  const { rut, fecha } = req.params;
  const { SUELDO_BRUTO, PROVICION_DESAUCIO, PROVICION_VACACIONES } = req.body;

  const formatFechaPago = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
 
  const sueldoChofer = await SueldosChoferes.findOne({
    where: {
      RUT_CHOFER: rut,
      FECHA_PAGO: new Date(formatFechaPago),
    },
  });

  if (sueldoChofer === null) {
    res
      .status(400)
      .json({ message: "No se encontro este sueldo de chofer", data: [] });
  } else {
    const sueldoChoferUpdate = await sueldoChofer.update({
      SUELDO_BRUTO,
      PROVICION_DESAUCIO,
      PROVICION_VACACIONES,
    });

    return res.status(200).json({
      message: "Sueldo de chofer actualizado correctamente",
      data: sueldoChoferUpdate,
    });
  }
}

export async function deleteSueldoChofer(req, res) {
  try {
    const { rut, fecha } = req.params;

    const formatFechaPago = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
 
    const deleteSueldoChofer = await SueldosChoferes.destroy({
      where: {
        RUT_CHOFER: rut,
        FECHA_PAGO: new Date(formatFechaPago),
      },
    });

    if(deleteSueldoChofer === 0){
        return res
        .status(400)
        .json({
          message: "No existe esta sueldo de chofer",
          count: deleteSueldoChofer,
        });
    }

    res.status(200).json({
        message: "Sueldo de chofer eliminado correctamente",
        count: deleteSueldoChofer,
      });

  } catch (error) {
    res.status(500).json({
        message: "Algo ocurrio cuando se queria eliminar este sueldo de chofer",
        count: 0,
      });
  }
}
