import HistoriaChofer from "../models/HistoriaChofer";
import moment from "moment";
import Sequelize from "sequelize";
export async function getHistoriaChofer(req, res) {
  try {
    const historiaChoferes = await HistoriaChofer.findAll();
    res.status(200).json({ data: historiaChoferes });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}



export async function getHistoriaChoferByChofer(req, res) {
  try {
    const { rut } = req.params;
    const historiaChoferes = await HistoriaChofer.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col("FECHA_EVENTO")),
          "FECHA_EVENTO",
        ],
      ],
      where: {
        RUT_EMPLEADO: rut,
      },
    });
    res.status(200).json({ data: historiaChoferes });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getHistoriaChoferByChoferFecha(req, res) {
  try {
    const { rut, fecha } = req.params;

    const formatFechaEvento = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
    const historiaChoferes = await HistoriaChofer.findAll({
      where: {
        RUT_EMPLEADO: rut,
        FECHA_EVENTO: new Date(formatFechaEvento),
      },
    });
    res.status(200).json({ data: historiaChoferes });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addHistoriaChofer(req, res) {
  const {
    CODIGO_EVENTO,
    RUT_EMPLEADO,
    OBSERVACION_HISTORIAL,
    FECHA_EVENTO,
    HORA_EVENTO,
    COSTO_EVENTO,
    FINALIZACION_EVENTO,
    QUIEN_PAGA,
    CAMION_EVENTO,
    Nombre_Empleado,
    DIGITO_conductor,
  } = req.body;

  const formatHora = moment(HORA_EVENTO, "hh:mm:ss").format("hh:mm:ss");

  const formatFechaEvento = moment(FECHA_EVENTO, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  const formatFechaFinalizacion = moment(
    FINALIZACION_EVENTO,
    "YYYY-MM-DD"
  ).format("YYYY-MM-DD");

  try {
    const newHistoriaChofer = await HistoriaChofer.create(
      {
        CODIGO_EVENTO,
        RUT_EMPLEADO,
        OBSERVACION_HISTORIAL,
        FECHA_EVENTO: new Date(formatFechaEvento),
        HORA_EVENTO: formatHora,
        COSTO_EVENTO,
        FINALIZACION_EVENTO: new Date(formatFechaFinalizacion),
        QUIEN_PAGA,
        CAMION_EVENTO,
        Nombre_Empleado,
        DIGITO_conductor,
      },
      {
        fields: [
          "CODIGO_EVENTO",
          "RUT_EMPLEADO",
          "OBSERVACION_HISTORIAL",
          "FECHA_EVENTO",
          "HORA_EVENTO",
          "COSTO_EVENTO",
          "FINALIZACION_EVENTO",
          "QUIEN_PAGA",
          "CAMION_EVENTO",
          "Nombre_Empleado",
          "DIGITO_conductor",
        ],
      }
    );
    if (newHistoriaChofer) {
      res.status(200).send({
        message: "Evento chofer registrado correctamente",
        data: newHistoriaChofer,
      });
    } else {
      res.status(400).send({
        message: "Ya esta registrado este evento",
        data: newHistoriaChofer,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Ya esta registrado este evento",
      data: [],
    });
  }
}

export async function updateHistoriaChofer(req, res) {
  const { rut, fecha, hora } = req.params;
  const {
    CODIGO_EVENTO,
    OBSERVACION_HISTORIAL,
    COSTO_EVENTO,
    FINALIZACION_EVENTO,
    QUIEN_PAGA,
    CAMION_EVENTO,
  } = req.body;
  console.log(req.body);

  const formatFechaEvento = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");

  const formatFechaEventoFinaliza = moment(
    FINALIZACION_EVENTO,
    "DD-MM-YYYY"
  ).format("YYYY-MM-DD");

  const historiaChofer = await HistoriaChofer.findOne({
    where: {
      RUT_EMPLEADO: rut,
      FECHA_EVENTO: new Date(formatFechaEvento),
      HORA_EVENTO: hora,
    },
  });

  if (historiaChofer === null) {
    res.status(200).json({
      message: "No se encuentra el registro de este evento",
      data: [],
    });
  } else {
    const historiaChoferUpdate = await historiaChofer.update({
      CODIGO_EVENTO,
      OBSERVACION_HISTORIAL,
      COSTO_EVENTO,
      FINALIZACION_EVENTO: new Date(formatFechaEventoFinaliza),
      QUIEN_PAGA,
      CAMION_EVENTO,
    });
    return res.status(200).json({
      message: "Datos de evento fueron actualizado correctamente",
      data: historiaChoferUpdate,
    });
  }
}

export async function deleteHistoriaChofer(req, res) {
  try {
    const { rut, fecha, hora } = req.params;

    const formatFechaEvento = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");

    const deleteHistoriaChofer = await HistoriaChofer.destroy({
      where: {
        RUT_EMPLEADO: rut,
        FECHA_EVENTO: new Date(formatFechaEvento),
        HORA_EVENTO: hora,
      },
    });

    if (deleteHistoriaChofer === 0) {
      return res.status(400).json({
        message: "No se encuentra registrado este evento",
        count: deleteHistoriaChofer,
      });
    }
    res.status(200).json({
      message: "Evento eliminado correctamente",
      count: deleteHistoriaChofer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este evento",
      count: 0,
    });
  }
}
