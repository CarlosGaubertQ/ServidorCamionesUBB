import {Router} from 'express'
import {getEventoChofer, addEventoChofer, updateEventoChofer, deleteEventoChofer} from '../controllers/EventoChofer.controller'
const router = Router()

router.get('/', getEventoChofer)
router.post('/', addEventoChofer)
router.put('/:codigo', updateEventoChofer)
router.delete('/:codigo',deleteEventoChofer)

export default router;