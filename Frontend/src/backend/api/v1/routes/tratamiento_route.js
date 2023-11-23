const express = require('express');
const router = express.Router();
const tratamientoController = require('../controllers/tratamiento_controller');

// Obtener todos los tratamientos
router.get('/', tratamientoController.getTratamientos);

// Obtener un tratamiento por ID
router.get('/:id', tratamientoController.getTratamientoById);

// Obtener tratamientos por ID de diagnóstico
router.get('/diagnostico/:diagnosticoId', tratamientoController.getTratamientosByDiagnosticoId);

// Crear un nuevo tratamiento
router.post('/', tratamientoController.createTratamiento);

// Actualizar un tratamiento existente
router.put('/:id', tratamientoController.updateTratamiento);

// Eliminar un tratamiento por ID
router.delete('/:id', tratamientoController.deleteTratamientoById);

module.exports = router;
