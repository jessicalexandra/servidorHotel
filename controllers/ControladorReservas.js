import  {ServicioReserva}  from '../services/ServicioReserva.js';
import { ServicioHabitacion }  from '../services/ServicioHabitacion.js'

export class ControladorReservas{
    constructor(){}
    async registrandoReserva(peticion,respuesta){
        let datosreserva = peticion.body;
        let idHabitacion = datosreserva.id;
        let fechaInicio = new Date(datosreserva.fechaInicioReserva)
        let fechaFin = new Date(datosreserva.fechaReservaFinal) 
        let dias = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
        
        try{
            let objetoHabitacion =new ServicioHabitacion()
            let objetoReserva = new ServicioReserva();
            let respueta=await objetoHabitacion.buscarPorId(idHabitacion)
            
            datosreserva.totalPago = dias * respueta.precio;


            if (respueta != null) {
                if (fechaInicio > fechaFin){
                    respuesta.status(400).json({
                        "mensaje": "proceso fallido, revisar las fechas"
                    })
                }else if (datosreserva.numeroadulto < 1){
                    respuesta.status(400).json({
                        "mensaje": "proceso fallido, debe reservar por lo minimo un adulto"
                    })
                }else if (datosreserva.numeroninos > 9){
                    respuesta.status(400).json({
                        "mensaje": "proceso fallido, no se admiten mas de 9 personas en una habitacion por politicas del hotel"
                    })
                }else{
                    await objetoReserva.registrar(datosreserva)
                    respuesta.status(200).json({
                        "mensaje":"exito agregando datos",
                        "diasDeReserva":"Tus dias de estadia son: "+dias+" "
                    })
                }   
            } else {
                respuesta.status(400).json({
                    "mensaje":"la habitacion no existe"
                })
            }
           
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    
    async buscandoReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        try{
            let objetoReserva = new ServicioReserva()
            respuesta.status(200).json({
                "mensaje":"exito buscando reserva",
                "reserva": await objetoReserva.buscarPorId(idReserva)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"No se encontro la reserva" +error
            })
        }
    }
    async buscandoReservas(peticion,respuesta){
        try{
            let objetoReserva=new ServicioReserva()
            respuesta.status(200).json({
                "mensaje":"exito buscando reservas",
                "reservas":await objetoReserva.buscarReservas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion" +error
            })
        }
    }
    async editandoReserva(peticion,respuesta){
        let idReserva=peticion.params.idreserva
        let datosReserva=peticion.body
        try{
           let objetoReserva=new ServicioReserva()
           await objetoReserva.editar(idReserva,datosReserva)
            respuesta.status(200).json({
                "mensaje":"exito editando reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":" no se pudo editar la reserva" +error
            })
        }
    }
    async eliminarReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        try{
            let objetoReserva=new ServicioReserva()
            await objetoReserva.eliminar(idReserva)
            respuesta.status(204).json({
                "mensaje":"exito eliminando reserva",
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"reserva no eliminada" +error
            })
        }
    }


 }