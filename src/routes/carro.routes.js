import {Router} from 'express'
import {getCarro,getCarroSinCamion, addCarro, deleteCarro, updateCarro} from '../controllers/Carro.controller'
const router = Router()

router.get('/', getCarro)
router.get('/sincamion/', getCarroSinCamion)
router.post('/', addCarro)
router.put('/:patente',updateCarro)
router.delete('/:patente',deleteCarro)
export default router;