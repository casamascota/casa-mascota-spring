const express = require('express');
const router = express.Router();
const tratamientoMedController = require('../controllers/tratamiento_med_controller');

// Obtener todos los tratamientos medicamentos
router.get('/', tratamientoMedController.getTratamientosMed);

// Obtener un tratamiento medicamento por ID
router.get('/:id', tratamientoMedController.getTratamientoMedById);

// Obtener todos los tratamientos medicamentos de un tratamiento por ID de tratamiento
router.get('/tratamiento/:id', tratamientoMedController.getTratamientosMedByTratamientoId);

// Obtener todos los tratamientos medicamentos de un medicamento por ID de medicamento
router.get('/medicamento/:id', tratamientoMedController.getTratamientosMedByMedicamentoId);

// Obtener todos los tratamientos medicamentos de un doctor por ID de doctor
router.get('/doctor/:id', tratamientoMedController.getTratamientosMedByDoctorId);

// Crear un nuevo tratamiento medicamento
router.post('/', tratamientoMedController.createTratamientoMed);

// Actualizar un tratamiento medicamento existente
router.put('/:id', tratamientoMedController.updateTratamientoMed);

// Eliminar un tratamiento medicamento por ID
router.delete('/:id', tratamientoMedController.deleteTratamientoMedById);

module.exports = router;
