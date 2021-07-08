import {Router} from 'express'
import {getTarjetaCredito, addTarjetaCredito, updateTarjetaCredito, deleteTarjetaCredito} from '../controllers/TarjetaCredito.controller'

const router = Router()


router.get('/', getTarjetaCredito)
router.post('/',addTarjetaCredito)
router.put('/:codigo',updateTarjetaCredito)
router.delete('/:codigo',deleteTarjetaCredito)

export default router