const Tratamiento = require('../models/tratamiento_model');

// Obtener todos los tratamientos
exports.getTratamientos = (req, res) => {
  Tratamiento.getTratamientos((err, tratamientos) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los tratamientos' });
    } else {
      res.json(tratamientos);
    }
  });
};

// Obtener un tratamiento por ID
exports.getTratamientoById = (req, res) => {
  const id = req.params.id;
  Tratamiento.getTratamientoById(id, (err, tratamiento) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener el tratamiento' });
    } else if (tratamiento) {
      res.json(tratamiento);
    } else {
      res.status(404).json({ message: 'Tratamiento no encontrado' });
    }
  });
};

// Obtener tratamientos por ID de diagnóstico
exports.getTratamientosByDiagnosticoId = (req, res) => {
    const id = req.params.id;
    Tratamiento.getTratamientosByDiagnosticoId(id, (err, tratamientos) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los tratamientos' });
        } else {
            res.json(tratamientos);
        }
    });
};

// Crear un nuevo tratamiento
exports.createTratamiento = (req, res) => {
  const tratamiento = req.body;
  Tratamiento.createTratamiento(tratamiento, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear el tratamiento' });
    } else {
      res.status(201).json({ message: 'Tratamiento creado exitosamente' });
    }
  });
};

// Actualizar un tratamiento existente
exports.updateTratamiento = (req, res) => {
  const id = req.params.id;
  const tratamiento = req.body;
  Tratamiento.updateTratamiento(id, tratamiento, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al actualizar el tratamiento' });
    } else {
      res.json({ message: 'Tratamiento actualizado exitosamente' });
    }
  });
};

// Eliminar un tratamiento por ID
exports.deleteTratamientoById = (req, res) => {
  const id = req.params.id;
  Tratamiento.deleteTratamientoById(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar el tratamiento' });
    } else {
      res.json({ message: 'Tratamiento eliminado exitosamente' });
    }
  });
};
