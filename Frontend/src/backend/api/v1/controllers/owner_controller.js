const Owner = require('../models/owner_model');

// Obtener todos los tratamientos
exports.getOwners = (req, res) => {
  Owner.getOwnerssql((err, owners) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los owners' });
    } else {
      res.json(owners);
    }
  });
};

// Obtener un tratamiento por ID
exports.getOwnerById = (req, res) => {
  const id = req.params.id;
  Owner.getOwnerByIdsql(id, (err, owners) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener el Owner' });
    } else if (owners) {
      res.json(owners);
    } else {
      res.status(404).json({ message: 'Owner no encontrado' });
    }
  });
};

// Crear un nuevo owner
exports.createOwner = (req, res) => {
  const owners = req.body;
  Owner.createOwnersql(owners, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al crear el owner' });
    } else {
      res.status(201).json({ message: 'Owner creado exitosamente' });
    }
  });
};

// Actualizar un tratamiento existente
exports.updateOwner = (req, res) => {
  const id = req.params.id;
  const owners = req.body;
  Owner.updateOwnersql(id, owners, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al actualizar el owner' });
    } else {
      res.json({ message: 'Owner actualizado exitosamente' });
    }
  });
};

// Eliminar un tratamiento por ID
exports.deleteOwnerById = (req, res) => {
  const id = req.params.id;
  Owner.deleteOwnerByIdsql(id, (err) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar el owner' });
    } else {
      res.json({ message: 'Owner eliminado exitosamente' });
    }
  });
};
