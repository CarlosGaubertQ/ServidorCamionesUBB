import {Router} from 'express'
import {getProgramaDeMantencion, addProgramaDeMantencion, updateProgramaMantencion, deleteProgramaDeMantencion} from '../controllers/ProgramaDeMantencion.controller'
const router = Router()

router.get('/', getProgramaDeMantencion)
router.post('/', addProgramaDeMantencion)
router.put('/:codigo', updateProgramaMantencion)
router.delete('/:codigo', deleteProgramaDeMantencion)

export default router;