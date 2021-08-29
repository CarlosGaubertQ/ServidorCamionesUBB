import {Router} from 'express'
import {getRecorrido, getAllRecorrido,getRecorridoByOrigenSeccionLlegada,getRecorridoByOrigen ,getRecorridoByOrigenSeccion, addRecorrido, updateRecorrido, deleteRecorrido } from '../controllers/Recorrido.controller'
const router = Router()

router.get('/', getRecorrido)
router.get('/all/', getAllRecorrido)
router.get('/:origen', getRecorridoByOrigen)
router.get('/destino/:origen&:seccion', getRecorridoByOrigenSeccion)
router.get('/primarykey/:origen&:seccion&:destino', getRecorridoByOrigenSeccionLlegada)
router.post('/', addRecorrido)
router.put('/:origen&:destino&:seccion', updateRecorrido)
router.delete('/:origen&:destino&:seccion', deleteRecorrido)

export default router;