const express = require('express');
const router = express.Router();
const vacunaController = require('../controllers/vacuna_controller');


// Obtener todas las vacunas
router.get('/', vacunaController.getVacunas);

// Obtener una vacuna por ID
router.get('/:id', vacunaController.getVacunaById);

// Obtener todas las vacunas de un doctor por ID de doctor
router.get('/doctor/:doctorId', vacunaController.getVacunasByDoctorId);

// Obtener todas las vacunas de una cita agendada por ID de cita agendada
router.get('/cita/:citaAgendadaId', vacunaController.getVacunasByCitaAgendadaId);

// Crear una nueva vacuna
router.post('/', vacunaController.createVacuna);

// Actualizar una vacuna existente
router.put('/:id', vacunaController.updateVacuna);

// Eliminar una vacuna por ID
router.delete('/:id', vacunaController.deleteVacunaById);


module.exports = router;
