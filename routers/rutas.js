import express from "express"
// separar y personalizar las rutas del api
export let rutas=express.Router()
//atendiendo o enrutando las eticiones o servicios de mi server
rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('estoy buscando todas las habitaciones')
  })
  rutas.get('/buscarhabitacione', function (req, res) {
      res.send('estoy buscando una habitacion')
    })
  rutas.post('/registrarhabitacion', function (req, res) {
      res.send('estoy registrando una habitacion')
  })
  rutas.put('/editandohabitacion', function (req, res) {
      res.send('estoy editando una habitacion')
  })
  //----------------------------------------------------
    rutas.get('/buscarreservas', function (req, res) {
      res.send('estoy buscando todas las reservas')
    })
    rutas.get('/buscarreserva', function (req, res) {
        res.send('estoy buscando una reserva')
      })
    rutas.post('/registrarreserva', function (req, res) {
        res.send('estoy registrando una reserva')
    })
    rutas.put('/editandoreserva', function (req, res) {
        res.send('estoy editando una reserva')
    })
    rutas.delete('/eliminandoreserva', function (req, res) {
      res.send('estoy eliminando una reserva')
  })
    