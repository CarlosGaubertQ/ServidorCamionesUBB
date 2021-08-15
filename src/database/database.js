import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'camiones',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }


)

