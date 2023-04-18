export class ControladorReservas{
    constructor(){}
    registrandoReserva(peticion,respuesta){
        try{
            let datosreserva=peticion.body
            console.log(datosreserva)
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
    buscandoReserva(peticion,respuesta){
        try{
            let idReserva=peticion.params.idreserva
            console.log(idReserva)
            respuesta.status(200).json({
                "mensaje":"exito buscando reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    buscandoReservas(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando reservas",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    editandoReserva(peticion,respuesta){
        try{
            let idReserva=peticion.params.idreserva
            let datosReserva=peticion.body
            console.log(idReserva)
            console.log(datosReserva)
            respuesta.status(200).json({
                "mensaje":"exito editando reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    eliminarReserva(peticion,respuesta){
        try{
            let idReserva=peticion.params.idreserva
            let datosReserva=peticion.body
            console.log(idReserva)
            console.log(datosReserva)
            respuesta.status(204).json({
                "mensaje":"exito eliminando reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }


 }