import {Router} from 'express'
import {getChoferes,addChoferes,getChoferesByRut ,updateChofer, deleteChofer} from '../controllers/Choferes.controller'

const router = Router()

router.get('/', getChoferes)
router.get('/:rut', getChoferesByRut)
router.post('/', addChoferes)
router.put('/:rut',updateChofer)
router.delete('/:rut',deleteChofer)
export default router;