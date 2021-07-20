import {Router} from 'express'
import {getSueldoChofer,getSueldoChoferByRut , addSueldoChofer, updateSueldoChofer, deleteSueldoChofer} from '../controllers/SueldoChoferes.controller'

const router = Router()


router.get('/', getSueldoChofer)
router.get('/:rut', getSueldoChoferByRut)
router.post('/', addSueldoChofer)
router.put('/:rut&:fecha', updateSueldoChofer)
router.delete('/:rut&:fecha', deleteSueldoChofer)


export default router