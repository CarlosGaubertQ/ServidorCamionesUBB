import Recorrido from "../models/Recorrido";
import Sequelize from "sequelize";
export async function getRecorrido(req, res) {
  try {
    const recorrido = await Recorrido.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col("Origen")),
          "Origen",
        ],
      ],
    });
    res.status(200).json({ data: recorrido });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getAllRecorrido(req, res) {
  try {
    const recorrido = await Recorrido.findAll();
    res.status(200).json({ data: recorrido });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getRecorridoByOrigen(req, res) {
  const {origen} = req.params;
  try {
    const recorrido = await Recorrido.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col("Seccion")),
          "Seccion",
        ],
      ],
      where:{
        Origen: origen
      }
    });
    res.status(200).json({ data: recorrido });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function getRecorridoByOrigenSeccion(req, res) {
  const {origen,seccion} = req.params;
  try {
    const recorrido = await Recorrido.findAll({
      attributes: [
        [
         
          Sequelize.fn("DISTINCT", Sequelize.col("Destino")),"Destino",
        
        ],
        "Origen",
        "Seccion",
        "Km_Ripio",
        "Km_Pavimento",
        "Total_Km",
        "Formula",
        "Observacion"
      ],
      where:{
        Origen: origen,
        Seccion: seccion
      }
    });
    res.status(200).json({ data: recorrido });
  } catch (error) {
    res.status(500).send({ data: error });
  }
}

export async function addRecorrido(req, res) {
  const {
    Origen,
    Destino,
    Seccion,
    Km_Ripio,
    Km_Pavimento,
    Total_Km,
    Formula,
    Observacion,
  } = req.body;

  try {
    const newRecorrido = await Recorrido.create(
      {
        Origen,
        Destino,
        Seccion,
        Km_Ripio,
        Km_Pavimento,
        Total_Km,
        Formula,
        Observacion,
      },
      {
        fields: [
          "Origen",
          "Destino",
          "Seccion",
          "Km_Ripio",
          "Km_Pavimento",
          "Total_Km",
          "Formula",
          "Observacion",
        ],
      }
    );

    if (newRecorrido) {
      res.status(200).send({
        message: "Recorrido registrado correctamente",
        data: newRecorrido,
      });
    } else {
      res.status(400).send({
        message: "Ya esta registrado este recorrido",
        data: newRecorrido,
      });
    }
  } catch (error) {
    res.status(400).send({
      message: "Ya esta registrado este recorrido",
      data: [],
    });
  }
}

export async function updateRecorrido(req, res) {
  const { origen, destino, seccion } = req.params;
  const { Km_Ripio, Km_Pavimento, Total_Km, Formula, Observacion } = req.body;
  try {
 
    const recorrido = await Recorrido.findOne({
      where: {
        Origen: origen,
        Destino: destino,
        Seccion: seccion,
      },
    });
  
    if (recorrido === null) {
      res.status(400).json({
        message: "No se encuentra el registro de este recorrido",
        data: [],
      });
    } else {
      const recorridoUpdate = await recorrido.update({
        Km_Ripio,
        Km_Pavimento,
        Total_Km,
        Formula,
        Observacion,
      });
      return res.status(200).json({
        message: "Recorrido actualizado correctamente",
        data: recorridoUpdate,
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

export async function deleteRecorrido(req, res) {
  try {
    const { origen, destino, seccion } = req.params;

    const deleteRecorrido = await Recorrido.destroy({
      where: {
        Origen: origen,
        Destino: destino,
        Seccion: seccion,
      },
    });

    if (deleteRecorrido === 0) {
      return res.status(400).json({
        message: "No se encuentra registrado este recorrido",
        count: deleteRecorrido,
      });
    }

    res.status(200).json({
      message: "Recorrido eliminado correctamente",
      count: deleteRecorrido,
    });
  } catch (error) {
    res.status(500).json({
      message: "Algo ocurrio cuando se queria eliminar este recorrido",
      count: 0,
    });
  }
}
