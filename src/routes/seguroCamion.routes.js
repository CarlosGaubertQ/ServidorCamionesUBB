import {Router} from 'express'
import {getSeguroCamion, deleteSeguroCamion, updateSeguroCamion,addSeguroCamion} from '../controllers/SeguroCamion.controller'

const router = Router()


router.get('/', getSeguroCamion)
router.post('/', addSeguroCamion)
router.put('/:patente&:fecha', updateSeguroCamion)
router.delete('/:patente&:fecha', deleteSeguroCamion)


export default router