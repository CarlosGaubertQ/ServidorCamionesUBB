import {Router} from 'express'
import {getTipoCarga} from '../controllers/TipoCarga.controller'

const router = Router()


router.get('/', getTipoCarga)

export default router