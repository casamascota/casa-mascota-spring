const Vacuna = require('../models/vacuna_model');

// Obtener todas las vacunas
exports.getVacunas = (req, res) => {
  Vacuna.getVacunas((err, vacunas) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener las vacunas' });
    } else {
      res.json(vacunas);
    }
  });
};

// Obtener una vacuna por ID
exports.getVacunaById = (req, res) => {
  const id = req.params.id;
  Vacuna.getVacunaById(id, (err, vacuna) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener la vacuna' });
    } else if (!vacuna) {
      res.status(404).json({ error: 'Vacuna no encontrada' });
    } else {
      res.json(vacuna);
    }
  });
};

// Obtener todas las vacunas de un tratamiento por ID de doctor
exports.getVacunasByDoctorId = (req, res) => {
    const doctorId = req.params.id;
    Vacuna.getVacunasByDoctorId(doctorId, (err, vacunas) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener las vacunas' });
        } else {
            res.json(vacunas);
        }
    });
};

// Obtener todas las vacunas de un tratamiento por ID de cita agendada
exports.getVacunasByCitaAgendadaId = (req, res) => {
    const citaAgendadaId = req.params.id;
    Vacuna.getVacunasByCitaAgendadaId(citaAgendadaId, (err, vacunas) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener las vacunas' });
        } else {
            res.json(vacunas);
        }
    });
};

// Crear una nueva vacuna
exports.createVacuna = (req, res) => {
  const vacuna = req.body;
  Vacuna.createVacuna(vacuna, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear la vacuna' });
    } else {
      res.status(201).json({ message: 'Vacuna creada exitosamente' });
    }
  });
};

// Actualizar una vacuna existente
exports.updateVacuna = (req, res) => {
  const id = req.params.id;
  const vacuna = req.body;
  Vacuna.updateVacuna(id, vacuna, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al actualizar la vacuna' });
    } else {
      res.json({ message: 'Vacuna actualizada exitosamente' });
    }
  });
};

// Eliminar una vacuna por ID
exports.deleteVacunaById = (req, res) => {
  const id = req.params.id;
  Vacuna.deleteVacunaById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar la vacuna' });
    } else {
      res.json({ message: 'Vacuna eliminada exitosamente' });
    }
  });
};
