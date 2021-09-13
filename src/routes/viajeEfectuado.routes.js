import {Router} from 'express'
import {getAllViajeEfectuados,getProduccionTotal , addViajeEfectuados, updateViajeEfectuados, deleteViajeEfectuado} from '../controllers/ViajeEfectuado.controller'

const router = Router()


router.get('/', getAllViajeEfectuados)
router.get('/:anio&:mes', getProduccionTotal)
router.post('/',addViajeEfectuados)
router.put('/:numguia&:patente&:codviaje&:fechaviaje',updateViajeEfectuados)
router.delete('/:numguia&:patente&:codviaje&:fechaviaje',deleteViajeEfectuado)

export default router