import {Router} from 'express'
import {getPrograma,getProgramaRealizado,getCodigoViaje,addPrograma, updatePrograma, deletePrograma} from '../controllers/Programa.controller'
const router = Router()

router.get('/', getPrograma)
router.get('/norealizado/',getProgramaRealizado)
router.get('/max/', getCodigoViaje)
router.post('/', addPrograma)
router.put('/:patente&:viaje&:fecha&:hora&:obra', updatePrograma)
router.delete('/:patente&:viaje&:fecha&:hora&:obra', deletePrograma)

export default router;