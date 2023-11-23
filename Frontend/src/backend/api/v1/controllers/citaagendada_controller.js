const CitaAgendadasql = require('../models/citaagendada_model');


exports.getCitaAgendadas = (req, res) => {
  CitaAgendadasql.getCitaAgendadassql((err, citaagendada) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las citas agendadas' });
    } else {
      res.json(citaagendada);
    }
  });
};

exports.getCitaAgendadaById = (req, res) => {
  CitaAgendadasql.getCitaAgendadaByIdsql((err, citaagendada) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo la cita agendada' });
    } else {
      res.json(citaagendada);
    }
  });
};

exports.getCitaAgendadaByMascotaId = (req, res) => {
  const mascotaId = req.params.mascotaId;
  CitaAgendadasql.getCitaAgendadaByMascotaIdsql(mascotaId, (err, citaagendada) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las citas agendadas' });
    } else {
      res.json(citaagendada);
    }
  });
};

exports.getCitaAgendadaByTipoServicio = (req, res) => {
  const tipoServicio = req.params.tipoServicio;
  CitaAgendadasql.getCitaAgendadaByTipoServiciosql(tipoServicio, (err, citaagendada) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las citas agendadas' });
    } else {
      res.json(citaagendada);
    }
  });
};


exports.createCitaAgendada = (req, res) => {
  const citaagendada = req.body;
  CitaAgendadasql.createCitaAgendadasql(citaagendada, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando la cita' });
    } else {
      res.json({ message: 'Cita creada exitosamente' });
    }
  });
};

exports.updateCitaAgendada = (req, res) => {
  const id = req.params.id;
  const citaagendada = req.body;
  CitaAgendadasql.updateCitaAgendadasql(id, citaagendada, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando la cita agendada' });
    } else {
      res.json({ message: `Cita agendada con id ${id} actualizada exitosamente` });
    }
  });
};

exports.deleteCitaAgendadaById = (req, res) => {
  const id = req.params.id;
  CitaAgendadasql.deleteCitaAgendadaByIdsql(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando la cita' });
    } else {
      res.json({ message: `Cita con id ${id} eliminada exitosamente` });
    }
  });
};