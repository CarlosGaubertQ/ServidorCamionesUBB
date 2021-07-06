import {Router} from 'express'
import {getSeguroCamion, getSeguroCamionByPatente, deleteSeguroCamion, updateSeguroCamion,addSeguroCamion} from '../controllers/SeguroCamion.controller'

const router = Router()


router.get('/', getSeguroCamion)
router.get('/:patente', getSeguroCamionByPatente)
router.post('/', addSeguroCamion)
router.put('/:patente&:fecha', updateSeguroCamion)
router.delete('/:patente&:fecha', deleteSeguroCamion)


export default router