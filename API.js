import express from 'express'
import { rutas } from './routers/rutas.js'
import { establecerconexion } from './database/conexion.js'
export class API{
    constructor(){
        this.app = express()
        this.conectarConBD()    
        this.enrutarPeticiones()
    }
    levantarServidor(){
        //levantando el servidor 
        this.app.listen(process.env.PORT,()=>console.log(`encendido en ${process.env.PORT}`))
    }
    enrutarPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }

    conectarConBD(){
        establecerconexion()
    }
}