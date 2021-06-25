import SeguroCamion from '../models/SeguroCamion'


export async function getSeguroCamion(req, res){
    try {
        const seguroCamion = await SeguroCamion.findAll()
        res.status(200).json({ data: seguroCamion });
    } catch (error) {
        res.status(500).send({ data: error });
    }    
}

export async function addSeguroCamion(req, res){
    const [PATENTE_CAMION, VALOR_SEGURO, FECHA_PAGO_SEGURO] = req.body

    try {
        const newSeguroCamion = await SeguroCamion.create({
            PATENTE_CAMION, VALOR_SEGURO, FECHA_PAGO_SEGURO
        }, { fields: ["PATENTE_CAMION", "VALOR_SEGURO", "FECHA_PAGO_SEGURO"] })
        if (newSeguroCamion) {
            res
              .status(200)
              .send({
                message: "Seguro agregado correctamente",
                data: newSeguroCamion,
              });
          } else {
            res.status(500).send({
              message: "Ya existe un seguro para este camion registrado con esta fecha",
              data: newSeguroCamion,
            });
          }
    } catch (error) {
        res.status(500).send({
            message: "Ya existe un seguro para este camion registrado con esta fecha",
            data: [],
          });
    }

}

export async function updateSeguroCamion(req, res){
    const { patente, fecha } = req.params;
    const { VALOR_SEGURO } = req.body;

    const seguro = await SeguroCamion.findOne({
        where: {
          PATENTE_CAMION: patente,
          FECHA_PAGO_SEGURO: fecha,
        },
      });
    if(seguro === null){
        res.status(200).json({ message: "No se encontro este seguro", data: [] });
    }else{
        const seguroUpdate = await seguro.update({VALOR_SEGURO})
        return res.status(200).json({
            message: "Seguro ha sido actualizado correctamente",
            data: seguroUpdate,
          });
    }
}

export async function deleteSeguroCamion(req, res){
    try {
        const { patente, fecha } = req.params;
        const deleteSeguroCamion = await SeguroCamion.destroy({
            where: {
              PATENTE_CAMION: patente,
              FECHA_PAGO_SEGURO: fecha,
            },
          })

          if(deleteSeguroCamion === 0){
            return res
            .status(400)
            .json({ message: "No existe este seguro", count: deleteSeguroCamion });
          }

          res
          .status(200)
          .json({ message: "Seguro eliminado correctamente", count: deleteSeguroCamion });
      
    } catch (error) {
      res
      .status(500)
      .json({
        message: "Algo ocurrio cuando se queria eliminar seguro",
        count: 0,
      });
    }
}

