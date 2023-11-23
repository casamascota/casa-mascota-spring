const Doctor = require('../models/doctor_model')

exports.getDoctores = (req, res) => {
  Doctor.getDoctores((err, doctores) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo los doctores' })
    } else {
      res.json(doctores)
    }
  })
}

exports.getDoctorById = (req, res) => {
  const id = req.params.id
  Doctor.getDoctorById(id, (err, doctor) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el doctor' })
    } else if (!doctor) {
      res.status(404).json({ error: `Doctor con id ${id} no encontrado` })
    } else {
      res.json(doctor)
    }
  })
}

exports.createDoctor = (req, res) => {
  const doctor = req.body
  res.setHeader('Content-Type', 'application/json');

  console.log(doctor)
  Doctor.createDoctor(doctor, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando el doctor' })
    } else {
      res.json({ message: 'Doctor creado exitosamente' })
    }
  })
}

exports.updateDoctor = (req, res) => {
  const id = req.params.id
  const doctor = req.body
  Doctor.updateDoctor(id, doctor, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando el doctor' })
    } else {
      res.json({ message: `Doctor con id ${id} actualizado exitosamente` })
    }
  })
}

exports.deleteDoctorById = (req, res) => {
  const id = req.params.id
  Doctor.deleteDoctorById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando el doctor' })
    } else {
      res.json({ message: `Doctor con id ${id} eliminado exitosamente` })
    }
  })
}
