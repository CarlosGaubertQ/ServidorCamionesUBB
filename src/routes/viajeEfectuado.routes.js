import {Router} from 'express'
import {getAllViajeEfectuados, addViajeEfectuados, updateViajeEfectuados, deleteViajeEfectuado} from '../controllers/ViajeEfectuado.controller'

const router = Router()


router.get('/', getAllViajeEfectuados)
router.post('/',addViajeEfectuados)
router.put('/:numguia&:patente&:codviaje&:fechaviaje',updateViajeEfectuados)
router.delete('/:numguia&:patente&:codviaje&:fechaviaje',deleteViajeEfectuado)

export default router