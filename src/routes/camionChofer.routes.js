import {Router} from 'express'
import {getCamionChofer,getCamionChoferByPC, updateCamionChofer , addCamionChofer, deleteCamionChofer} from '../controllers/CamionChofer.controller'
const router = Router()

router.get('/', getCamionChofer)
router.get('/:patente&:chofer', getCamionChoferByPC)
router.put('/:patente&:chofer', updateCamionChofer)
router.post('/', addCamionChofer)
router.delete('/:fechadesde&:patente&:rut',deleteCamionChofer)

export default router;