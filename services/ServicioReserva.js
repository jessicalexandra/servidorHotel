import {modeloReserva}from"../models/modeloReserva.js"; 



export class ServicioReserva{
    constructor(){}
   async registrar(datosReserva){
        let nuevaReserva = new modeloReserva(datosReserva)
        return await nuevaReserva.save()
    }
    async buscarReservas(){
        let reservas=await modeloReserva.find()
        return reservas
    }
    async buscarPorId(idReserva){
        let reserva=await modeloReserva.findById(idReserva)
        return reserva
    }
    async editar(idReserva,datosReserva){
         return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }

    async eliminar(idReserva){
        return await modeloReserva.findByIdAndDelete(idReserva)
    }
}