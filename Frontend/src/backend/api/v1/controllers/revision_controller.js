const Revision = require('../models/revision_model');

exports.getRevisiones = (req, res) => {
  Revision.getRevisiones((err, revisiones) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las revisiones' });
    } else {
      res.json(revisiones);
    }
  });
};

exports.getRevisionById = (req, res) => {
  const id = req.params.id;
  Revision.getRevisionById(id, (err, revision) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo la revisión' });
    } else if (!revision) {
      res.status(404).json({ error: `Revisión con id ${id} no encontrada` });
    } else {
      res.json(revision);
    }
  });
};

exports.getRevisionesByDoctorId = (req, res) => {
  const doctorId = req.params.doctorId;
  Revision.getRevisionesByDoctorId(doctorId, (err, revisiones) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las revisiones' });
    } else {
      res.json(revisiones);
    }
  });
};

exports.getRevisionesByCitaId = (req, res) => {
  const citaId = req.params.citaId;
  Revision.getRevisionesByCitaId(citaId, (err, revisiones) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo las revisiones' });
    } else {
      res.json(revisiones);
    }
  });
};

exports.createRevision = (req, res) => {
  const revision = req.body;
  Revision.createRevision(revision, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando la revisión' });
    } else {
      res.json({ message: 'Revisión creada exitosamente' });
    }
  });
};

exports.updateRevision = (req, res) => {
  const id = req.params.id;
  const revision = req.body;
  Revision.updateRevision(id, revision, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando la revisión' });
    } else {
      res.json({ message: `Revisión con id ${id} actualizada exitosamente` });
    }
  });
};

exports.deleteRevisionById = (req, res) => {
  const id = req.params.id;
  Revision.deleteRevisionById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando la revisión' });
    } else {
      res.json({ message: `Revisión con id ${id} eliminada exitosamente` });
    }
  });
};