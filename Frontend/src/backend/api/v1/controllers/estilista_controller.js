const Estilista = require('../models/estilista_model')

exports.getEstilistas = (req, res) => {
  Estilista.getEstilistas((err, doctores) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo los estilistas' })
    } else {
      res.json(doctores)
    }
  })
}

exports.getEstilistaById = (req, res) => {
  const id = req.params.id
  Estilista.getEstilistaById(id, (err, estilista) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el estilista' })
    } else if (!estilista) {
      res.status(404).json({ error: `Estilista con id ${id} no encontrado` })
    } else {
      res.json(estilista)
    }
  })
}

exports.createEstilista = (req, res) => {
  const estilista = req.body
  console.log(estilista)
  Estilista.createEstilista(estilista, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando el estilista' })
    } else {
      res.json({ message: 'Estilista creado exitosamente' })
    }
  })
}

exports.updateEstilista = (req, res) => {
  const id = req.params.id
  const estilista = req.body
  Estilista.updateEstilista(id, estilista, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando el estilista' })
    } else {
      res.json({ message: `Estilista con id ${id} actualizado exitosamente` })
    }
  })
}

exports.deleteEstilistaById = (req, res) => {
  const id = req.params.id
  Estilista.deleteEstilistaById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando el estilista' })
    } else {
      res.json({ message: `Estilista con id ${id} eliminado exitosamente` })
    }
  })
}
