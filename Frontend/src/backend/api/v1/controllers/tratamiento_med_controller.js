const TratamientoMed = require('../models/tratamiento_med_model');

// Obtener todos los tratamientos medicamentos
exports.getTratamientosMed = (req, res) => {
  TratamientoMed.getTratamientosMed((err, tratamientosMed) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los tratamientos medicamentos' });
    } else {
      res.json(tratamientosMed);
    }
  });
};

// Obtener un tratamiento medicamento por ID
exports.getTratamientoMedById = (req, res) => {
  const id = req.params.id;
  TratamientoMed.getTratamientoMedById(id, (err, tratamientoMed) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener el tratamiento medicamento' });
    } else if (!tratamientoMed) {
      res.status(404).json({ error: 'Tratamiento medicamento no encontrado' });
    } else {
      res.json(tratamientoMed);
    }
  });
};

// Obtener todos los tratamientos medicamentos de un tratamiento por ID de tratamiento
exports.getTratamientosMedByTratamientoId = (req, res) => {
  const tratamientoId = req.params.id;
  TratamientoMed.getTratamientosMedByTratamientoId(tratamientoId, (err, tratamientosMed) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los tratamientos medicamentos' });
    } else {
      res.json(tratamientosMed);
    }
  });
};

// Obtener todos los tratamientos medicamentos de un medicamento por ID de medicamento
exports.getTratamientosMedByMedicamentoId = (req, res) => {
    const medicamentoId = req.params.id;
    TratamientoMed.getTratamientosMedByMedicamentoId(medicamentoId, (err, tratamientosMed) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los tratamientos medicamentos' });
        } else {
            res.json(tratamientosMed);
        }
    });
};

// obtener todos los tratamientos medicamentos de un tratamiento por ID de doctor
exports.getTratamientosMedByDoctorId = (req, res) => {
    const doctorId = req.params.id;
    TratamientoMed.getTratamientosMedByDoctorId(doctorId, (err, tratamientosMed) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los tratamientos medicamentos' });
        } else {
            res.json(tratamientosMed);
        }
    });
};

// Obtener todos los tratamientos medicamentos de un tratamiento por ID de tratamiento
exports.getTratamientosMedByTratamientoId = (req, res) => {
    const tratamientoId = req.params.id;
    TratamientoMed.getTratamientosMedByTratamientoId(tratamientoId, (err, tratamientosMed) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los tratamientos medicamentos' });
        } else {
            res.json(tratamientosMed);
        }
    });
};


// Crear un nuevo tratamiento medicamento
exports.createTratamientoMed = (req, res) => {
  const tratamientoMed = req.body;
  TratamientoMed.createTratamientoMed(tratamientoMed, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear el tratamiento medicamento' });
    } else {
      res.status(201).json({ message: 'Tratamiento medicamento creado exitosamente' });
    }
  });
};

// Actualizar un tratamiento medicamento existente
exports.updateTratamientoMed = (req, res) => {
  const id = req.params.id;
  const tratamientoMed = req.body;
  TratamientoMed.updateTratamientoMed(id, tratamientoMed, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al actualizar el tratamiento medicamento' });
    } else {
      res.json({ message: 'Tratamiento medicamento actualizado exitosamente' });
    }
  });
};

// Eliminar un tratamiento medicamento por ID
exports.deleteTratamientoMedById = (req, res) => {
  const id = req.params.id;
  TratamientoMed.deleteTratamientoMedById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar el tratamiento medicamento' });
    } else {
      res.json({ message: 'Tratamiento medicamento eliminado exitosamente' });
    }
  });
};