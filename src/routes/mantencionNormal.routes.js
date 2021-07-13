import {Router} from 'express'
import {getMantencionNormal, addMantencionNormal, updateMantencionNormal, deleteMantencionNormal} from '../controllers/MantencionNormal.controller'
const router = Router()

router.get('/', getMantencionNormal)
router.post('/', addMantencionNormal)
router.put('/:codigo', updateMantencionNormal)
router.delete('/:codigo', deleteMantencionNormal)

export default router;