import {Router} from 'express'
import {getCarro, addCarro, deleteCarro, updateCarro} from '../controllers/Carro.controller'
const router = Router()

router.get('/', getCarro)
router.post('/', addCarro)
router.put('/:patente',updateCarro)
router.delete('/:patente',deleteCarro)
export default router;