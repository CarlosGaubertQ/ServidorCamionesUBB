import {Router} from 'express'
import {getEmpleado, addEmpleado, updateEmpleado, deleteEmpleado} from '../controllers/Empleado.controller'
const router = Router()

router.get('/', getEmpleado)
router.post('/', addEmpleado)
router.put('/:rut', updateEmpleado)
router.delete('/:rut',deleteEmpleado)

export default router;