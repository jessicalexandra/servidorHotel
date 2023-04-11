
import { API } from "./API.js";
import  *  as  dotenv  from  'dotenv'  // consulte https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import 
dotenv . config ( ) 
console.log(process.env.PORT)
let servidorHoltel=new API()
servidorHoltel.levantarServidor()