import {Router} from 'express'
import {getOTMantencion, addOTMantencion, updateOTMantencion, deleteOTMantencion} from '../controllers/OTMantencion.controller'
const router = Router()

router.get('/', getOTMantencion)
router.post('/', addOTMantencion)
router.put('/:codigo', updateOTMantencion)
router.delete('/:codigo', deleteOTMantencion)

export default router;