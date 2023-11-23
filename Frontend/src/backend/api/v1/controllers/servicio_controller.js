const Servicio = require('../models/servicio_model')

exports.getServicios = (req, res) => {
  Servicio.getServicios((err, servicios) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo los servicios' })
    } else {
      res.json(servicios)
    }
  })
}

exports.getServicioById = (req, res) => {
  const id = req.params.id
  Servicio.getServicioById(id, (err, servicio) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el servicio' })
    } else if (!servicio) {
      res.status(404).json({ error: `Servicio con id ${id} no encontrado` })
    } else {
      res.json(servicio)
    }
  })
}

exports.createServicio = (req, res) => {
  
  const servicio = req.body
  console.log(servicio)
  Servicio.createServicio(servicio, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando el servicio' })
    } else {
      res.json({ message: 'Servicio creado exitosamente' })
    }
  })
}

exports.getIdByServicio = (req, res) => {
  const tipo = req.params.tipo
  Servicio.getIdServicio(tipo, (err, servicio) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el servicio' })
    } else if (!servicio) {
      res.status(404).json({ error: `Servicio con tipo ${tipo} no encontrado` })
    } else {
      res.json(servicio)
    }
  })
}

exports.updateServicio = (req, res) => {
  const id = req.params.id
  const estilista = req.body
  Servicio.updateServicio(id, estilista, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando el estilista' })
    } else {
      res.json({ message: `Servicio con id ${id} actualizado exitosamente` })
    }
  })
}

exports.deleteServicioById = (req, res) => {
  const id = req.params.id
  Servicio.deleteServicioById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando el servicio' })
    } else {
      res.json({ message: `Servicio con id ${id} eliminado exitosamente` })
    }
  })
}
