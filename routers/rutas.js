import express from "express"
import { ControladorHabitaciones } from "../controllers/ControladorHabitaciones.js"
import { ControladorReservas } from "../controllers/ControladorReservas.js"
//instanciar la clase
let controladorHabitacion=new ControladorHabitaciones()
let controladorReserva=new ControladorReservas()
// separar y personalizar las rutas del api
export let rutas=express.Router()
//atendiendo o enrutando las eticiones o servicios de mi server
rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion/:idhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editandohabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
  //----------------------------------------------------
rutas.get('/buscarreservas',controladorReserva.buscandoReservas)
rutas.get('/buscarreserva',controladorReserva.buscandoReserva)
    rutas.post('/registrarreserva/:idreserva',controladorReserva.registrandoReserva)
    rutas.put('/editandoreserva/:idreserva',controladorReserva.editandoReserva)
    rutas.delete('/eliminandoreserva/:idreserva',controladorReserva.eliminarReserva)
    