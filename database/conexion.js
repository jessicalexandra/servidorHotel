import  mongoose from 'mongoose'
export async function establecerconexion() {
    try{
       await mongoose.connect(process.env.DATABASE)
       console.log('exito conctandonos a BD')
    }catch(error){
        console.log('fallamos en la conexion'+error)
    }
}