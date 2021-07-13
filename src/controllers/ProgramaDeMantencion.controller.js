import ProgramaDeMantencion from "../models/ProgramaDeMantencion";

export async function getProgramaDeMantencion(req, res) {
  try {
    const programaDeMantencion = await ProgramaDeMantencion.findAll({});
    res.status(200).json({ data: programaDeMantencion });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addProgramaDeMantencion(req, res) {
  const {
    CODIGO_MANTENCION,
    ELEMENTO,
    TIPO,
    MANTENCION,
    KILOMETRAJE_PROGRAMADO,
    KM_ULTIMA_MANT,
    FECHA_DE_MANTENCION,
  } = req.body;

  try {
    const newProgramaDeMantencion = await ProgramaDeMantencion.create(
      {
        CODIGO_MANTENCION,
        ELEMENTO,
        TIPO,
        MANTENCION,
        KILOMETRAJE_PROGRAMADO,
        KM_ULTIMA_MANT,
        FECHA_DE_MANTENCION,
      },
      {
        fields: [
          "CODIGO_MANTENCION",
          "ELEMENTO",
          "TIPO",
          "MANTENCION",
          "KILOMETRAJE_PROGRAMADO",
          "KM_ULTIMA_MANT",
          "FECHA_DE_MANTENCION",
        ],
      }
    );

    if (newProgramaDeMantencion) {
      res.status(200).send({
        message: "Programa Mantención agregado correctamente",
        data: newProgramaDeMantencion,
      });
    } else {
      res.status(500).send({
        message: "Ya existe el registro de este programa mantención",
        data: newProgramaDeMantencion,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Ya existe el registro de este programa mantención",
      data: [],
    });
  }
}

export async function updateProgramaMantencion(req, res) {
  const { codigo } = req.params;
  const {
    ELEMENTO,
    TIPO,
    MANTENCION,
    KILOMETRAJE_PROGRAMADO,
    FECHA_DE_MANTENCION,
  } = req.body;

  try {
    const programaDeMantencion = await ProgramaDeMantencion.findOne({
      where: {
        CODIGO_MANTENCION: codigo,
      },
    });

    if (programaDeMantencion === null) {
      res
        .status(200)
        .json({
          message: "No se encontro este programa de mantención",
          data: [],
        });
    } else {
      console.log(ELEMENTO, TIPO, MANTENCION, KILOMETRAJE_PROGRAMADO, FECHA_DE_MANTENCION)
      try {
        const programaDeMantencionUpdate = await programaDeMantencion.update({
          ELEMENTO: "HOLI",
          TIPO,
          MANTENCION,
          KILOMETRAJE_PROGRAMADO,
          
          FECHA_DE_MANTENCION
        });
        return res.status(200).json({
          message: "Programa de mantención ha sido actualizado correctamente",
          data: programaDeMantencionUpdate,
        });  
      } catch (error) {
        console.log("hola")
      }
      
    }
  } catch (error) {
    res
    .status(400)
    .json({
      message: "No se encontro este programa de mantención",
      data: [error],
    });
  }
}

export async function deleteProgramaDeMantencion(req, res){
    try {
        const { codigo } = req.params;
        const deleteProgramaDeMantencion = await ProgramaDeMantencion.destroy({
            where: {
                CODIGO_MANTENCION: codigo,
            }
        })

        if(deleteProgramaDeMantencion === 0){
            return res
            .status(400)
            .json({
              message: "No existe este programa de mantención",
              count: deleteProgramaDeMantencion,
            });
        }

        res.status(200).json({
            message: "Programa de mantención eliminado correctamente",
            count: deleteProgramaDeMantencion,
          });
    } catch (error) {
        res.status(500).json({
            message: "Algo ocurrio cuando se queria eliminar este programa de mantención",
            count: 0,
          });
    }
}
