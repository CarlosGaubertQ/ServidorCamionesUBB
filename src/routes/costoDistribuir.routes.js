import {Router} from 'express'
import {getCostoDistribuir, addCostoDistribuir, updateCostoDistribuir, deleteCostoDistribuir} from '../controllers/CostoDistribuir.controller'
const router = Router()

router.get('/', getCostoDistribuir)
router.post('/', addCostoDistribuir)
router.put('/:fecha', updateCostoDistribuir)
router.delete('/:fecha',deleteCostoDistribuir)

export default router;