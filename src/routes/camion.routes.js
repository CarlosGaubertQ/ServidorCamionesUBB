import {Router} from 'express'
import {getCamiones,addCamion,updateCamion, deleteCamion} from '../controllers/Camion.controller'
const router = Router()

router.get('/', getCamiones)
router.post('/', addCamion)
router.put('/:patente',updateCamion)
router.delete('/:patente',deleteCamion)
export default router;