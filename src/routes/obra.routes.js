import {Router} from 'express'
import {getObra, addObra, updateObra, deleteObra} from '../controllers/Obra.controller'
const router = Router()

router.get('/', getObra)
router.post('/', addObra)
router.put('/:codigo',updateObra)
router.delete('/:codigo',deleteObra)
export default router;