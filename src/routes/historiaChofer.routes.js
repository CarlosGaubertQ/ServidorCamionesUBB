import {Router} from 'express'
import {getHistoriaChofer, addHistoriaChofer, updateHistoriaChofer, deleteHistoriaChofer} from '../controllers/HistoriaChofer.controller'
const router = Router()

router.get('/', getHistoriaChofer)
router.post('/', addHistoriaChofer)
router.put('/:rut&:fecha&:hora', updateHistoriaChofer)
router.delete('/:rut&:fecha&:hora',deleteHistoriaChofer)

export default router;