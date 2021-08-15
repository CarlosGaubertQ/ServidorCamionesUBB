import {Router} from 'express'
import {getCamiones,getCamionesCarro,getCamionByPatente ,addCamion,updateCamion, deleteCamion} from '../controllers/Camion.controller'
const router = Router()

router.get('/', getCamiones)
router.get('/carro/', getCamionesCarro)
router.get('/:patente',getCamionByPatente)  
router.post('/', addCamion)
router.put('/:patente',updateCamion)
router.delete('/:patente',deleteCamion)
export default router;