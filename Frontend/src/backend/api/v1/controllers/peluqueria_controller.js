const Peluqueria = require('../models/peluqueria_model');


exports.getPeluquerias = (req, res) => {
  Peluqueria.getPeluqueria((err, peluqueria) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las citas de peluquería' });
    } else {
      res.json(peluqueria);
    }
  });
};

exports.getPeluqueriaById = (req, res) => {
 Peluqueria.getPeluqueriaById((err, peluqueria) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo la cita de peluqueria' });
    } else {
      res.json(peluqueria);
    }
  });
};

exports.getPeluqueriaByEstilistaId = (req, res) => {
  const estilistaId = req.params.estilistaId;
  Peluqueria.getPeluqueriaByEstilistaId(estilistaId, (err, peluqueria) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las citas agendadas' });
    } else {
      res.json(peluqueria);
    }
  });
};




exports.createPeluqueria = (req, res) => {
  const peluqueria = req.body;
  Peluqueria.createPeluqueria(peluqueria_object, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando la peluqueria' });
    } else {
      res.json({ message: 'Cita de peluqueria creada exitosamente' });
    }
  });
};

exports.updatePeluqueria = (req, res) => {
  const id = req.params.id;
  const peluqueria = req.body;
  Peluqueria.updatePeluqueria(id, peluqueria, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando la cita pelqueria' });
    } else {
      res.json({ message: `Cita pelqueria con id ${id} actualizada exitosamente` });
    }
  });
};

exports.deletePeluqueriaById = (req, res) => {
  const id = req.params.id;
  Peluqueria.deletePeluqueriaById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando la peluqueria' });
    } else {
      res.json({ message: `Cita de peluqueria con id ${id} eliminada exitosamente` });
    }
  });
};