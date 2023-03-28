import express from 'express'
import { rutas } from './routers/rutas.js'
export class API{
    constructor(){
        this.app = express()
        this.enrutarPeticiones()
    }
    levantarServidor(){
        //levantando el servidor 
this.app.listen(3000,function () {
    console.log("servidor encendido")
})
    }
    enrutarPeticiones(){
        this.app.use('/',rutas)
    }
     

    conectarConBD(){}
}