const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/owner_controller');

// Ruta para obtener todos los owners
router.get('/', ownerController.getOwners);
// Ruta para obtener un owner por ID
router.get('/:id', ownerController.getOwnerById);
// Ruta para crear un owner
router.post('/', ownerController.createOwner);
// Ruta para actualizar un owner existente
router.put('/:id', ownerController.updateOwner);
// Ruta para eliminar un owner por ID
router.delete('/:id', ownerController.deleteOwnerById);

module.exports = router;