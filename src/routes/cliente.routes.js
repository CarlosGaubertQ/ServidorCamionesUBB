import {Router} from 'express'
import {getCliente, addCliente, updateCliente, deleteCliente} from '../controllers/Cliente.controller'
const router = Router()

router.get('/', getCliente)
router.post('/', addCliente)
router.put('/:rut',updateCliente)
router.delete('/:rut',deleteCliente)
export default router;