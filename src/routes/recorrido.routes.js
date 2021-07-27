import {Router} from 'express'
import {getRecorrido,getRecorridoByOrigen ,getRecorridoByOrigenSeccion, addRecorrido, updateRecorrido, deleteRecorrido } from '../controllers/Recorrido.controller'
const router = Router()

router.get('/', getRecorrido)
router.get('/:origen', getRecorridoByOrigen)
router.get('/destino/:origen&:seccion', getRecorridoByOrigenSeccion)
router.post('/', addRecorrido)
router.put('/:origen&:destino&:seccion', updateRecorrido)
router.delete('/:origen&:destino&:seccion', deleteRecorrido)

export default router;