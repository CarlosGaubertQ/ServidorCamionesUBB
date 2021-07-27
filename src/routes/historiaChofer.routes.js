import {Router} from 'express'
import {getHistoriaChofer,getHistoriaChoferByChofer, getHistoriaChoferByChoferFecha ,addHistoriaChofer, updateHistoriaChofer, deleteHistoriaChofer} from '../controllers/HistoriaChofer.controller'
const router = Router()

router.get('/', getHistoriaChofer)
router.get('/:rut', getHistoriaChoferByChofer)
router.get('/fecha/:rut&:fecha', getHistoriaChoferByChoferFecha)
router.post('/', addHistoriaChofer)
router.put('/:rut&:fecha&:hora', updateHistoriaChofer)
router.delete('/:rut&:fecha&:hora',deleteHistoriaChofer)

export default router;