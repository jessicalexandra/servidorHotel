import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Reserva=new Schema({

    idhabitacion:{
        type:Number,
        required:true
    },
    nombreCliente:{
        type:String,
        required:true,

    },
    apellidoCliente:{
        type:[String],
        required:true
    },
    TelefonoCliente:{
        type:String,
        required:true,
    },
    fechaInicioReserva:{
        type:Date,
        required:true
    },
    fechaReservaFinal:{
        type:Date,
        required:true
    },
    numeroninos:{
        type:Number,
        required:true
    },
    numeroadulto:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('reservas',Reserva)