import {Router} from 'express'
import {getBoletaCombustible,addBoletaCombustible, updateBoletaCombustible, deleteBoletaCombustible} from '../controllers/BoletaCombustible.controller'

const router = Router()

router.get('/', getBoletaCombustible)
router.post('/', addBoletaCombustible)
router.put('/:numBoleta',updateBoletaCombustible)
router.delete('/:numBoleta',deleteBoletaCombustible)
export default router;