 export class ControladorHabitaciones{
    constructor(){}
    registrandoHabitacion(peticion,respuesta){
        try{
            let datoshabitacion=peticion.body
            console.log(datoshabitacion)
            respuesta.status(200).json({
                "mensaje":"exito agregando datos",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    buscandoHabitacion(peticion,respuesta){
        try{
            let idHabitacion=peticion.params.idhabitacion
            console.log(idHabitacion)
            respuesta.status(200).json({
                "mensaje":"exito buscando habitacion",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    buscandoHabitaciones(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando habitaciones",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    editandoHabitacion(peticion,respuesta){
        try{
            let idHabitacion=peticion.params.idhabitacion
            let datosHabitacion=peticion.body
            console.log(idHabitacion)
            console.log(datosHabitacion)
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