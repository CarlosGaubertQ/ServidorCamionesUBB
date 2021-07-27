import {Router} from 'express'
import { getTarifa,getTarifaByClienteUM ,addTarifa, updateTarifa, deleteTarifa } from '../controllers/Tarifa.controller'
const router = Router()

router.get('/', getTarifa)
router.get('/:codigo&:um', getTarifaByClienteUM)
router.post('/', addTarifa)
router.put('/:cliente&:um', updateTarifa)
router.delete('/:cliente&:um', deleteTarifa)

export default router;