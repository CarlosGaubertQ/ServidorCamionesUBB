import app from './app'

async function main(){
    await app.listen(app.get('port'))
    console.log("escuchando en el puerto ", app.get('port'))
}

main()

