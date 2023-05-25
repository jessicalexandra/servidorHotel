 import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
 export class ControladorHabitaciones{
    constructor(){}

    async registrandoHabitacion(peticion,respuesta){
        let datoshabitacion=peticion.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            if(datoshabitacion.precio < 100 && datoshabitacion.numeropersonas <2){
                respuesta.status(400).json({
                   "mensaje": "revisa el precio por noche y la cantidad maxima de personas"})

            }else if(datoshabitacion.precio <100){
                respuesta.status(400).json({"mensaje":"revisa el precio por noche"})
            }
            else if(datoshabitacion.numeropersonas <2){
                respuesta.status(400).json({
                    "mensaje": "muy poquitas personas en esta habitacion "
                })
            }else{ 
                await objetoServicioHabitacion.registrar(datoshabitacion)
                respuesta.status(200).json({
                    "mensaje":"exito agregando datos",

                 } )}
        
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    async buscandoHabitacion(peticion,respuesta){
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            let idHabitacion=peticion.params.idhabitacion
             respuesta.status(200).json({
                "mensaje":"exito buscando habitacion",
                "habitacion":await objetoServicioHabitacion.buscarPorId(idHabitacion)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    async buscandoHabitaciones(peticion,respuesta){
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando habitaciones",
                "habitaciones":await objetoServicioHabitacion.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idHabitacion=peticion.params.idhabitacion
        let datoshabitacion=peticion.body
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{
            await objetoServicioHabitacion.editar(idHabitacion,datoshabitacion)
            respuesta.status(200).json({
                "mensaje":"exito editando habitacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
 }