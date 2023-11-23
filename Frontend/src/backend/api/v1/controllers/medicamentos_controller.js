const Medicamentosql = require('../models/medicamentos_model');

exports.getMedicamentos = (req, res) => {
  Medicamentosql.getMedicamentossql((err, revisiones) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo los medicamentos' });
    } else {
      res.json(revisiones);
    }
  });
};

exports.getMedicamentoById = (req, res) => {
  const id = req.params.id;
  Medicamentosql.getMedicamentoByIdsql(id, (err, revision) => {
    if (err) {
      res.status(500).json({ error: 'Error obteniendo el medicamento' });
    } else if (!revision) {
      res.status(404).json({ error: `Medicamento con id ${id} no encontrado` });
    } else {
      res.json(revision);
    }
  });
};

exports.createMedicamento = (req, res) => {
  const medicamento = req.body;
  Medicamentosql.createMedicamentosql(medicamento, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error creando el Medicamento' });
    } else {
      res.json({ message: 'Medicamento creado exitosamente' });
    }
  });
};

exports.updateMedicamento = (req, res) => {
  const id = req.params.id;
  const medicamento = req.body;
  Medicamentosql.updateMedicamentosql(id, medicamento, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error actualizando el medicamento' });
    } else {
      res.json({ message: `Medicamento con id ${id} actualizado exitosamente` });
    }
  });
};

exports.deleteMedicamentoById = (req, res) => {
  const id = req.params.id;
  Medicamentosql.deleteMedicamentoByIdsql(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error eliminando el medicamento' });
    } else {
      res.json({ message: `Medicamento con id ${id} eliminado exitosamente` });
    }
  });
};