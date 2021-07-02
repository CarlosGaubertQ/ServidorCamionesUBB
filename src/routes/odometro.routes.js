import {Router} from 'express'
import {getOdometro,getOdometroByPatente,addOdometro,updateOdometro, deleteOdometro} from '../controllers/Odometro.controller'
const router = Router()

router.get('/', getOdometro)
router.get('/:patente', getOdometroByPatente)
router.post('/', addOdometro)
router.put('/:patente&:fecha', updateOdometro)
router.delete('/:patente&:fecha', deleteOdometro)

export default router;