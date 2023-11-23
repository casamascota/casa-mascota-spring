const Diagnostico = require('../models/diagnostico_model')

exports.getDiagnostico = (req, res) => {
  Diagnostico.getDiagnosticos((err, enfermeros) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo los diagnosticos' })
    } else {
      res.json(enfermeros)
    }
  })
}

exports.getDiagnosticoById = (req, res) => {
  const id = req.params.id
  Diagnostico.getDiagnosticoById(id, (err, enfermero) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el diagnostico' })
    } else if (!enfermero) {
      res.status(404).json({ error: `Diagnostico con id ${id} no encontrado` })
    } else {
      res.json(enfermero)
    }
  })
}

exports.createDiagnostico = (req, res) => {
  const diagnostico = req.body
  console.log(diagnostico)
  Diagnostico.createDiagnostico(diagnostico, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando el diagnostico' })
    } else {
      res.json({ message: 'Diagnostico creado exitosamente' })
    }
  })
}

exports.updateDiagnostico = (req, res) => {
  const id = req.params.id
  const diagnostico = req.body
  Diagnostico.updateDiagnostico(id, diagnostico, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando el diagnostico' })
    } else {
      res.json({ message: `Diagnostico con id ${id} actualizado exitosamente` })
    }
  })
}

exports.deleteDiagnosticoById = (req, res) => {
  const id = req.params.id
  Diagnostico.deleteDiagnosticoById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando el diagnostico' })
    } else {
      res.json({ message: `Diagnostico con id ${id} eliminado exitosamente` })
    }
  })
}
