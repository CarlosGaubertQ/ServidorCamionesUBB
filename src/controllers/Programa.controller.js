import Programa from "../models/Programa";
import moment from 'moment'
export async function getPrograma(req, res) {
  try {
    const programa = await Programa.findAll();
    res.status(200).json({ data: programa });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getProgramaRealizado(req, res) {
  try {
    const programa = await Programa.findAll({
      where:{
        Viajerealizado: "NO"
      }
    });
    res.status(200).json({ data: programa });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getCodigoViaje(req, res) {
  try {
    const programa = await Programa.max('CODIGO_VIAJE')
    if(isNaN(programa)) return  res.status(200).json({ data: 0 });
    const final = programa + 1
    res.status(200).json({ data: final });
  } catch (error) {
    console.log(error)
    res.status(500).send({ data: error });
  }
}

export async function addPrograma(req, res) {
  const {
    PATENTE_CAMION,
    CODIGO_SERVICIO,
    RUT_EMPLEADO,
    PATENTE_CARRO,
    PARTIDA,
    LLEGADA,
    SECCION,
    CLIENTE,
    TIPO_CARGA_CARRO,
    TIPO_CARGA_CAMION,
    CANTIDAD_CARGA_CAMION,
    CANTIDAD_CARGA_CARRO,
    CODIGO_VIAJE,
    FECHA_VIAJE,
    HORA_SALIDA_VIAJE,
    PRODUCTO,
    HORA_LLEGADA_VIAJE,
    CODIGO_OBRA,
    Formula,
    Observacion,
    Viajerealizado,
    Num_PViaje,
   } = req.body;

  const formatFecha = moment(FECHA_VIAJE, "YYYY-MM-DD").format(
    "YYYY-MM-DD"
  );

  try {
    const newPrograma = await Programa.create(
      {
        PATENTE_CAMION,
        CODIGO_SERVICIO,
        RUT_EMPLEADO,
        PATENTE_CARRO,
        PARTIDA,
        LLEGADA,
        SECCION,
        CLIENTE,
        TIPO_CARGA_CARRO,
        TIPO_CARGA_CAMION,
        CANTIDAD_CARGA_CAMION,
        CANTIDAD_CARGA_CARRO,
        CODIGO_VIAJE,
        FECHA_VIAJE: formatFecha,
        HORA_SALIDA_VIAJE,
        PRODUCTO,
        HORA_LLEGADA_VIAJE,
        CODIGO_OBRA,
        Formula,
        Observacion,
        Viajerealizado,
        Num_PViaje,
      },
      {
        fields: [
          "PATENTE_CAMION",
          "CODIGO_SERVICIO",
          "RUT_EMPLEADO",
          "PATENTE_CARRO",
          "PARTIDA",
          "LLEGADA",
          "SECCION",
          "CLIENTE",
          "TIPO_CARGA_CARRO",
          "TIPO_CARGA_CAMION",
          "CANTIDAD_CARGA_CAMION",
          "CANTIDAD_CARGA_CARRO",
          "CODIGO_VIAJE",
          "FECHA_VIAJE",
          "HORA_SALIDA_VIAJE",
          "PRODUCTO",
          "HORA_LLEGADA_VIAJE",
          "CODIGO_OBRA",
          "Formula",
          "Observacion",
          "Viajerealizado",
          "Num_PViaje",
        ],
      }
    );

    if (newPrograma) {
      res.status(200).send({
        message: "Programa de viaje registrado correctamente",
        data: newPrograma,
      });
    } else {
      res.status(500).send({
        message: "Ya esta registrado este programa de viaje",
        data: newPrograma,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Ya esta registrado este programa de viaje", data: [] });
  }
}


export async function updatePrograma(req, res) {
    const {patente, viaje, fecha, hora, obra} = req.params;
    console.log(req.params)
    const {
        CODIGO_SERVICIO,
        RUT_EMPLEADO,
        PATENTE_CARRO,
        PARTIDA,
        LLEGADA,
        SECCION,
        CLIENTE,
        TIPO_CARGA_CARRO,
        TIPO_CARGA_CAMION,
        CANTIDAD_CARGA_CAMION,
        CANTIDAD_CARGA_CARRO, 
        PRODUCTO,
        HORA_LLEGADA_VIAJE,
        Formula,
        Observacion,
        Viajerealizado,
        Num_PViaje,
     } = req.body;

     const formatFecha = moment(fecha, "DD-MM-YYYY").format("YYYY-MM-DD");
  
    const programa = await Programa.findOne({
      where: {
        PATENTE_CAMION: patente,
        CODIGO_VIAJE: viaje,
        FECHA_VIAJE: new Date(formatFecha),
        HORA_SALIDA_VIAJE: hora,
        CODIGO_OBRA: obra
      },
    });
  
    if (programa === null) {
      res
        .status(400)
        .json({ message: "No se encontro este programa de viaje", data: [] });
    } else {
      const programaUpdate = await programa.update({
        CODIGO_SERVICIO,
        RUT_EMPLEADO,
        PATENTE_CARRO,
        PARTIDA,
        LLEGADA,
        SECCION,
        CLIENTE,
        TIPO_CARGA_CARRO,
        TIPO_CARGA_CAMION,
        CANTIDAD_CARGA_CAMION,
        CANTIDAD_CARGA_CARRO, 
        PRODUCTO,
        HORA_LLEGADA_VIAJE,
        Formula,
        Observacion,
        Viajerealizado,
        Num_PViaje,
      });
      return res.status(200).json({
        message: "Programa de viaje actualizado correctamente",
        data: programaUpdate,
      });
    }
  }

  export async function deletePrograma(req, res) {
    try {
        const {patente, viaje, fecha, hora, obra} = req.params;
    
        const deletePrograma = await Programa.destroy({
          where: {
            PATENTE_CAMION: patente,
            CODIGO_VIAJE: viaje,
            FECHA_VIAJE: fecha,
            HORA_SALIDA_VIAJE: hora,
            CODIGO_OBRA: obra
          },
        });
        if (deletePrograma === 0) {
          return res
            .status(400)
            .json({
              message: "No se encontro este programa de viaje",
              count: deletePrograma,
            });
        }
        res
        .status(200)
        .json({ message: "Programa de viaje eliminado correctamente", count: deletePrograma });
      } catch (error) {
        res.status(500).json({
            message: "Algo ocurrio cuando se queria eliminar este programa de viaje",
            count: 0,
          });
      }
  }