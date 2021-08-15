const request = require('supertest')
const app = require('../dist/app')


/**testing get all api camiones */

describe('get all api camiones', () =>{
    it('Devuelve con json todos los camiones en la base de datos', done =>{
        request(app)
        .get('/api/camion')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los carros de la base de datos', done =>{
        request(app)
        .get('/api/carro')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los odometros de la base de datos', done =>{
        request(app)
        .get('/api/odometro')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los seguros de camión de la base de datos', done =>{
        request(app)
        .get('/api/segurocamion')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los clientes de la base de datos', done =>{
        request(app)
        .get('/api/cliente')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas las boletas de camión de la base de datos', done =>{
        request(app)
        .get('/api/boletacombustible')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas las instituciones financieras de la base de datos', done =>{
        request(app)
        .get('/api/banco')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los choferes de la base de datos', done =>{
        request(app)
        .get('/api/chofer')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas ordenes de trabajo para mantenciones de la base de datos', done =>{
        request(app)
        .get('/api/otmantencion')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas las tarjetas de credito de la base de datos', done =>{
        request(app)
        .get('/api/tarjetacredito')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas las mantenciones de la base de datos', done =>{
        request(app)
        .get('/api/mantencionnormal')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los programas de mantenciones de la base de datos', done =>{
        request(app)
        .get('/api/programademantencion')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas las obras en la base de datos', done =>{
        request(app)
        .get('/api/obra')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todas las asociaciones entre camión y chofer en la base de datos', done =>{
        request(app)
        .get('/api/camionchofer')
       
        .expect(200, done)
    })
    
    
    it('Devuelve con json todos los sueldos en la base de datos', done =>{
        request(app)
        .get('/api/sueldochofer')
       
        .expect(200, done)
    })
    
    
    it('Devuelve con json todos los eventos de chofer en la base de datos', done =>{
        request(app)
        .get('/api/eventochofer')
       
        .expect(200, done)
    })
    
    it('Devuelve con json todos los historial de chofer en la base de datos', done =>{
        request(app)
        .get('/api/historiachofer')
       
        .expect(200, done)
    })
    
    
    it('Devuelve con json todos los empleado en la base de datos', done =>{
        request(app)
        .get('/api/empleado')
       
        .expect(200, done)
    })
    
    
    it('Devuelve con json todas las rutas en la base de datos', done =>{
        request(app)
        .get('/api/recorrido')
       
        .expect(200, done)
    })
    
    
    it('Devuelve con json todas las tarifas en la base de datos', done =>{
        request(app)
        .get('/api/tarifa')
       
        .expect(200, done)
    })
    
    
    it('Devuelve con json todas las programas de viaje en la base de datos', done =>{
        request(app)
        .get('/api/programa')
       
        .expect(200, done)
    })
    
})
