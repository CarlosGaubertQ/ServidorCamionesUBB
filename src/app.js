import express,{json} from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()
//importing routers
import camion from './routes/camion.routes'
import odometro from './routes/odometro.routes'
import seguroCamion from './routes/seguroCamion.routes'
import cliente from './routes/cliente.routes'
import boletaCombustible from './routes/boletaCombustible.routes'
//middlewares
app.use(json())
app.use(morgan('dev'))
app.use(cors())

app.set('port', process.env.PORT || 4000)



//routes
app.use('/api/camion',camion)
app.use('/api/odometro',odometro )
app.use('/api/segurocamion', seguroCamion)
app.use('/api/cliente',cliente)
app.use('/api/boletacombustible',boletaCombustible)
export default app;