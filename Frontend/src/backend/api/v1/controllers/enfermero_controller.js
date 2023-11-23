const Enfermero = require('../models/enfermero_model')

exports.getEnfermero = (req, res) => {
  Enfermero.getEnfermeros((err, enfermeros) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo los enfermeros' })
    } else {
      res.json(enfermeros)
    }
  })
}

exports.getEnfermeroById = (req, res) => {
  const id = req.params.id
  Enfermero.getEnfermeroById(id, (err, enfermero) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el enfermero' })
    } else if (!enfermero) {
      res.status(404).json({ error: `Enfermero con id ${id} no encontrado` })
    } else {
      res.json(enfermero)
    }
  })
}

exports.createEnfermero = (req, res) => {
  const enfermero = req.body
  console.log(enfermero)
  Enfermero.createEnfermero(enfermero, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando el enfermero' })
    } else {
      res.json({ message: 'Enfermero creado exitosamente' })
    }
  })
}

exports.updateEnfermero = (req, res) => {
  const id = req.params.id
  const enfermero = req.body
  Enfermero.updateEnfermero(id, enfermero, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando el enfermero' })
    } else {
      res.json({ message: `Enfermero con id ${id} actualizado exitosamente` })
    }
  })
}

exports.deleteEnfermeroById = (req, res) => {
  const id = req.params.id
  Enfermero.deleteEnfemeroById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando el enfermero' })
    } else {
      res.json({ message: `Enfermero con id ${id} eliminado exitosamente` })
    }
  })
}
