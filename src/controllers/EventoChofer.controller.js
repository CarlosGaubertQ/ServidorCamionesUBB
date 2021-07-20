import EventoChofer from "../models/EventoChofer";

export async function getEventoChofer(req, res) {
  try {
    const eventoChoferes = await EventoChofer.findAll();
    res.status(200).json({ data: eventoChoferes });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addEventoChofer(req, res) {
  const { DESCRIPCION_EVENTO } = req.body;
  try {
    const newEventoChofer = await EventoChofer.create(
      {
        DESCRIPCION_EVENTO,
      },
      {
        fields: ["DESCRIPCION_EVENTO"],
      }
    );

    if (newEventoChofer) {
      res.status(200).send({
        message: "Evento chofer registrado correctamente",
        data: newEventoChofer,
      });
    } else {
      res.status(400).send({
        message: "Ya esta registrado este evento",
        data: newEventoChofer,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado este evento", data: [] });
  }
}

export async function updateEventoChofer(req, res) {
  const { codigo } = req.params;
  const { DESCRIPCION_EVENTO } = req.body;
  const eventoChofer = await EventoChofer.findOne({
    where: {
      CODIGO_EVENTO: codigo,
    },
  });
  if (eventoChofer === null) {
    res.status(200).json({
      message: "No se encuentra el registro de este evento",
      data: [],
    });
  } else {
    const eventoChoferUpdate = await eventoChofer.update({
      DESCRIPCION_EVENTO,
    });
    return res.status(200).json({
      message: "Datos de evento chofer actualizado correctamente",
      data: eventoChoferUpdate,
    });
  }
}

export async function deleteEventoChofer(req, res) {
  try {
    const { codigo } = req.params;
    const deleteEventoChofer = await EventoChofer.destroy({
      where: {
        CODIGO_EVENTO: codigo,
      },
    });
    if (deleteEventoChofer === 0) {
      return res.status(400).json({
        message: "No se encuentra registrado este tipo de eveto",
        count: deleteEventoChofer,
      });
    }
    res.status(200).json({
      message: "Tipo evento eliminado correctamente",
      count: deleteEventoChofer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este evento chofer",
      count: 0,
    });
  }
}
