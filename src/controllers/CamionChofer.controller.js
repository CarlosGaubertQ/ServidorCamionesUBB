import CamionChofer from "../models/CamionChofer";
import moment from "moment";

export async function getCamionChofer(req, res) {
  try {
    const camionChofer = await CamionChofer.findAll();
    res.status(200).json({ data: camionChofer });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getCamionChoferByPC(req, res) {
  try {
    const {patente, chofer} = req.params;
    const camionChofer = await CamionChofer.findAll({
      where: {
        Rut_Conductor: chofer,
        Patente_Camion: patente
      }
    });
    res.status(200).json({ data: camionChofer });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addCamionChofer(req, res) {
  const { FechaDesde, FechaHasta, Patente_Camion, Rut_Conductor } = req.body;

  const formatFechaDesde = moment(FechaDesde, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );
  const formatFechaHasta = moment(FechaHasta, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  try {
    const newCamionChofer = await CamionChofer.create(
      {
        FechaDesde: formatFechaDesde,
        FechaHasta: formatFechaHasta,
        Patente_Camion,
        Rut_Conductor,
      },
      {
        fields: ["FechaDesde", "FechaHasta", "Patente_Camion", "Rut_Conductor"],
      }
    );

    if (newCamionChofer) {
      res.status(200).send({
        message: "Camion asignacion al chofer correctamente",
        data: newCamionChofer,
      });
    } else {
      res.status(500).send({
        message: "Ya esta asignado el camion a este chofer",
        data: newCamionChofer,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ya esta asignado el camion a este chofer",
      data: [],
    });
  }
}

export async function updateCamionChofer(req, res) {
  const {patente, chofer} = req.params;
  const { FechaHasta, FechaDesde } = req.body;

  const formatFechaDesde = moment(FechaDesde, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );
  const formatFechaHasta = moment(FechaHasta,  "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  const camionChofer = await CamionChofer.findOne({
    where: {
      Rut_Conductor: chofer,
      Patente_Camion: patente
    },
  });

  if(camionChofer === null){
    res.status(400).json({ message: "No se encontro esta asignación", data: [] });
  }else{
    const camionChoferUpdate = await camionChofer.update({
      FechaDesde: new Date(formatFechaDesde),
      FechaHasta: new Date(formatFechaHasta)
    })

    return res.status(200).json({
      message: "Asignación actualizado correctamente",
      data: camionChoferUpdate,
    });
  }
}

export async function deleteCamionChofer(req, res) {
  try {
    const { fechadesde, patente, rut } = req.params;

    const formatFechaDesde = moment(fechadesde, "DD-MM-YYYY").format(
      "YYYY-MM-DD"
    );
    console.log(fechadesde, formatFechaDesde, patente, rut)
    const deleteCamionChofer = await CamionChofer.destroy({
      where: {
        FechaDesde: new Date(formatFechaDesde),
        Patente_Camion: patente,
        Rut_Conductor: rut,
      },
    });

    if (deleteCamionChofer === 0) {
      return res
        .status(400)
        .json({
          message: "No existe esta relacion entre camion y chofer",
          count: deleteCamionChofer,
        });
    }


    res.status(200).json({
        message: "Asignacion camion y chofer eliminada correctamente",
        count: deleteCamionChofer,
      });
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message: "Algo ocurrio cuando se queria eliminar esta relación entre camion y chofer",
        count: 0,
      });
  }
}
