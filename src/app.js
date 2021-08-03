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
import banco from './routes/banco.routes'
import carro from './routes/carro.routes'
import chofer from './routes/chofer.routes'
import oTMantencion from './routes/oTMantencion.routes'
import tarjetaCredito from './routes/tarjetaCredito.routes'
import mantencionNormal from './routes/mantencionNormal.routes'
import programaDeMantencion from './routes/programaDeMantencion.routes'
import obra from './routes/obra.routes'
import camionChofer from './routes/camionChofer.routes'
import sueldoChofer from './routes/sueldoChofer.routes'
import eventoChofer from './routes/eventoChofer.routes'
import historiaChofer from './routes/historiaChofer.routes'
import empleado from './routes/empleado.routes'
import costoDistribuir from './routes/costoDistribuir.routes'
import recorrido from './routes/recorrido.routes'
import tarifa from './routes/tarifa.routes'
import programa from './routes/programa.routes'
//middlewares
app.use(json())
app.use(morgan('dev'))
app.use(cors())

app.set('port', process.env.PORT || 4000)


//routes
app.use('/api/camion',camion)
app.use('/api/carro',carro)
app.use('/api/odometro',odometro )
app.use('/api/segurocamion', seguroCamion)
app.use('/api/cliente',cliente)
app.use('/api/boletacombustible',boletaCombustible)
app.use('/api/banco',banco)
app.use('/api/chofer',chofer)
app.use('/api/otmantencion',oTMantencion)
app.use('/api/tarjetacredito',tarjetaCredito)
app.use('/api/mantencionnormal', mantencionNormal)
app.use('/api/programademantencion', programaDeMantencion)
app.use('/api/obra', obra)
app.use('/api/camionchofer', camionChofer)
app.use('/api/sueldochofer', sueldoChofer)
app.use('/api/eventochofer', eventoChofer)
app.use('/api/historiachofer', historiaChofer)
app.use('/api/empleado', empleado)
app.use('/api/costodistribuir',costoDistribuir)
app.use('/api/recorrido',recorrido)
app.use('/api/tarifa', tarifa)
app.use('/api/programa', programa)
export default app;