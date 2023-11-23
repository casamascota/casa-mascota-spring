const Mascota = require('../models/mascota_model')

exports.getMascota = (req, res) => {
  Mascota.getMascotas((err, mascotas) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las mascotas' })
    } else {
      res.json(mascotas)
    }
  })
}

exports.getMascotaById = (req, res) => {
  const id = req.params.id
  Mascota.getMascotaById(id, (err, mascota) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo la mascota' })
    } else if (!mascota) {
      res.status(404).json({ error: `Mascota con id ${id} no encontrado` })
    } else {
      res.json(mascota)
    }
  })
}

exports.getCitasByMascotaId = (req, res) => {
  const id = req.params.id
  Mascota.getCitasByMascotaId(id, (err, citas) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las citas' })
    } else if (!citas) {
      res.status(404).json({ error: `Citas con id ${id} no encontrado` })
    } else {
      res.json(citas)
    }
  })
}

exports.getMascotaByOwnerId = (req, res) => {
   const id = req.params.id
   Mascota.getMascotasByOwnerId(id, (err, mascotas) => {
     if (err) {
       res.status(500).json({ error: 'Error obteniendo las mascotas' })
     } else if (!mascotas) {
       res.status(404).json({ error: `Mascota con id ${id} no encontrado` })
     } else {
       res.json(mascotas)
     }
   })
 }


exports.createMascota = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const mascota = req.body
  console.log(mascota)
  Mascota.createMascota(mascota, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando la mascota' })
    } else {
      res.json({ message: 'Mascota creado exitosamente' })
    }
  })
}

exports.updateMascota = (req, res) => {
  const id = req.params.id
  const mascota = req.body
  Mascota.updateMascota(id, mascota, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando la mascota' })
    } else {
      res.json({ message: `Mascota con id ${id} actualizado exitosamente` })
    }
  })
}

exports.deleteMascotaById = (req, res) => {
  const id = req.params.id
  Mascota.deleteMascotaById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando la mascota' })
    } else {
      res.json({ message: `Mascota con id ${id} eliminado exitosamente` })
    }
  })
}
