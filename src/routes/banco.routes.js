import {Router} from 'express'
import {getBanco, addBanco, updateBanco, deleteBanco} from '../controllers/Banco.controller'

const router = Router()

router.get('/', getBanco)
router.post('/', addBanco)
router.put('/:codigo', updateBanco)
router.delete('/:codigo', deleteBanco)
export default router;