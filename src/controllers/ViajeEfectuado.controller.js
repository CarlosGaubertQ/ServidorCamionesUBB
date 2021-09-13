import ViajeEfectuado from '../models/ViajeEfectuado'
import sequelize from 'sequelize'
export async function getAllViajeEfectuados(req, res) {
    try {
        const viajeEfectuado = await ViajeEfectuado.findAll();
        res.status(200).json({ data: viajeEfectuado });
    } catch (error) {
        res.status(500).send({ data: error });
    }
}

export async function getProduccionTotal(req, res) {
    const {anio, mes} = req.params
    try {
        const viajeEfectuado = await ViajeEfectuado.findAll({
            attributes: [
                [sequelize.fn('sum', sequelize.col('PRECIO_UNITARIO_CARGA_CAMION')), 'Total precio unitario camión'],
                [sequelize.fn('sum', sequelize.col('PRECIO_UNITARIO_CARGA_CARRO')), 'Total precio unitario carro'],
                [sequelize.fn('sum', sequelize.col('ODOMETRO_SALIDA')), 'Total odometro salida'],
                [sequelize.fn('sum', sequelize.col('ODOMETRO_LLEGADA')), 'Total odometro llegada'],
                [sequelize.fn('sum', sequelize.col('OTROS_COSTOS')), 'Total otros costos'],
                [sequelize.fn('sum', sequelize.col('KILOMETRAJE_CAMINO_RIPIO')), 'Total kilometraje ripio'],
                [sequelize.fn('sum', sequelize.col('KILOMETRAJE_CAMINO_PAVIMENTO')), 'Total kilometraje pavimento'],
                [sequelize.fn('sum', sequelize.col('CANTIDAD_CARGA_CAMION')), 'Total cantidad carga camión'],
                [sequelize.fn('sum', sequelize.col('CANTIDAD_CARGA_CARRO')), 'Total cantidad carga carro']
            ],
            where: [sequelize.where(sequelize.fn('YEAR', sequelize.col('FECHA_VIAJE')), anio),sequelize.where(sequelize.fn('MONTH', sequelize.col('FECHA_VIAJE')), mes)]
        });
        res.status(200).json({ data: viajeEfectuado });
    } catch (error) {
        res.status(500).send({ data: error });
    }
}

export async function addViajeEfectuados(req, res) {
    const {
        NUMERO_GUIA_DESPACHO,
        PATENTE_CAMION,
        RUT_EMPLEADO,
        PATENTE_CARRO,
        PARTIDA,
        SECCION,
        LLEGADA,
        CLIENTE,
        TIPO_CARGA_CARRO,
        TIPO_CARGA_CAMION,
        CANTIDAD_CARGA_CAMION,
        CANTIDAD_CARGA_CARRO,
        CODIGO_VIAJE,
        FECHA_VIAJE,
        HORA_SALIDA_VIAJE,
        HORA_LLEGADA_VIAJE,
        PRODUCTO,
        CODIGO_OBRA,
        PRECIO_UNITARIO_CARGA_CAMION,
        PRECIO_UNITARIO_CARGA_CARRO,
        ODOMETRO_SALIDA,
        ODOMETRO_LLEGADA,
        OTROS_COSTOS,
        KILOMETRAJE_CAMINO_RIPIO,
        KILOMETRAJE_CAMINO_PAVIMENTO,
        Formula,
        OBSERVACION,
        Num_PViaje
    } = req.body;

    try {
        const newViajeEfectuados = await ViajeEfectuado.create(
            {
                NUMERO_GUIA_DESPACHO,
                PATENTE_CAMION,
                RUT_EMPLEADO,
                PATENTE_CARRO,
                PARTIDA,
                SECCION,
                LLEGADA,
                CLIENTE,
                TIPO_CARGA_CARRO,
                TIPO_CARGA_CAMION,
                CANTIDAD_CARGA_CAMION,
                CANTIDAD_CARGA_CARRO,
                CODIGO_VIAJE,
                FECHA_VIAJE,
                HORA_SALIDA_VIAJE,
                HORA_LLEGADA_VIAJE,
                PRODUCTO,
                CODIGO_OBRA,
                PRECIO_UNITARIO_CARGA_CAMION,
                PRECIO_UNITARIO_CARGA_CARRO,
                ODOMETRO_SALIDA,
                ODOMETRO_LLEGADA,
                OTROS_COSTOS,
                KILOMETRAJE_CAMINO_RIPIO,
                KILOMETRAJE_CAMINO_PAVIMENTO,
                Formula,
                OBSERVACION,
                Num_PViaje
            },
            {
                fields: [
                    "NUMERO_GUIA_DESPACHO",
                    "PATENTE_CAMION",
                    "RUT_EMPLEADO",
                    "PATENTE_CARRO",
                    "PARTIDA",
                    "SECCION",
                    "LLEGADA",
                    "CLIENTE",
                    "TIPO_CARGA_CARRO",
                    "TIPO_CARGA_CAMION",
                    "CANTIDAD_CARGA_CAMION",
                    "CANTIDAD_CARGA_CARRO",
                    "CODIGO_VIAJE",
                    "FECHA_VIAJE",
                    "HORA_SALIDA_VIAJE",
                    "HORA_LLEGADA_VIAJE",
                    "PRODUCTO",
                    "CODIGO_OBRA",
                    "PRECIO_UNITARIO_CARGA_CAMION",
                    "PRECIO_UNITARIO_CARGA_CARRO",
                    "ODOMETRO_SALIDA",
                    "ODOMETRO_LLEGADA",
                    "OTROS_COSTOS",
                    "KILOMETRAJE_CAMINO_RIPIO",
                    "KILOMETRAJE_CAMINO_PAVIMENTO",
                    "Formula",
                    "OBSERVACION",
                    "Num_PViaje"
                ],
            }
        );

        if (newViajeEfectuados) {
            res.status(200).send({
                message: "Viaje efectuado correctamente",
                data: newViajeEfectuados,
            });
        } else {
            res.status(400).send({
                message: "Ya se efectuo este viaje",
                data: newViajeEfectuados,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({
            message: "Ya se efectuo este viaje",
            data: [],
        });
    }
}


export async function updateViajeEfectuados(req, res) {
    const { numguia, patente, codviaje, fechaviaje } = req.params;
    const {

        RUT_EMPLEADO,
        PATENTE_CARRO,
        PARTIDA,
        SECCION,
        LLEGADA,
        CLIENTE,
        TIPO_CARGA_CARRO,
        TIPO_CARGA_CAMION,
        CANTIDAD_CARGA_CAMION,
        CANTIDAD_CARGA_CARRO,
        HORA_SALIDA_VIAJE,
        HORA_LLEGADA_VIAJE,
        PRODUCTO,
        CODIGO_OBRA,
        PRECIO_UNITARIO_CARGA_CAMION,
        PRECIO_UNITARIO_CARGA_CARRO,
        ODOMETRO_SALIDA,
        ODOMETRO_LLEGADA,
        OTROS_COSTOS,
        KILOMETRAJE_CAMINO_RIPIO,
        KILOMETRAJE_CAMINO_PAVIMENTO,
        Formula,
        OBSERVACION,
        Num_PViaje } = req.body;
    try {

        const viajeEfectuado = await viajeEfectuado.findOne({
            where: {
                NUMERO_GUIA_DESPACHO: numguia,
                PATENTE_CAMION: patente,
                CODIGO_VIAJE: codviaje,
                FECHA_VIAJE: fechaviaje
            },
        });

        if (viajeEfectuado === null) {
            res.status(400).json({
                message: "No se encuentra este viaje",
                data: [],
            });
        } else {
            const viajeEfectuadoUpdate = await viajeEfectuado.update({
                RUT_EMPLEADO,
                PATENTE_CARRO,
                PARTIDA,
                SECCION,
                LLEGADA,
                CLIENTE,
                TIPO_CARGA_CARRO,
                TIPO_CARGA_CAMION,
                CANTIDAD_CARGA_CAMION,
                CANTIDAD_CARGA_CARRO,
                HORA_SALIDA_VIAJE,
                HORA_LLEGADA_VIAJE,
                PRODUCTO,
                CODIGO_OBRA,
                PRECIO_UNITARIO_CARGA_CAMION,
                PRECIO_UNITARIO_CARGA_CARRO,
                ODOMETRO_SALIDA,
                ODOMETRO_LLEGADA,
                OTROS_COSTOS,
                KILOMETRAJE_CAMINO_RIPIO,
                KILOMETRAJE_CAMINO_PAVIMENTO,
                Formula,
                OBSERVACION,
                Num_PViaje
            });
            return res.status(200).json({
                message: "Viaje actualizado correctamente",
                data: viajeEfectuadoUpdate,
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


export async function deleteViajeEfectuado(req, res) {
    try {
        const { numguia, patente, codviaje, fechaviaje } = req.params;
  
      const deleteViajeEfectuado = await ViajeEfectuado.destroy({
        where: {
            NUMERO_GUIA_DESPACHO: numguia,
            PATENTE_CAMION: patente,
            CODIGO_VIAJE: codviaje,
            FECHA_VIAJE: fechaviaje
        },
      });
  
      if (deleteViajeEfectuado === 0) {
        return res.status(400).json({
          message: "No se encuentra registrado este viaje",
          count: deleteViajeEfectuado,
        });
      }
  
      res.status(200).json({
        message: "Viaje eliminado correctamente",
        count: deleteViajeEfectuado,
      });
    } catch (error) {
      res.status(500).json({
        message: "Algo ocurrio cuando se queria eliminar este viaje",
        count: 0,
      });
    }
  }