const express = require('express');
const router = express.Router();
const citaagendadaController = require('../controllers/citaagendada_controller');

// Ruta para obtener todas las Citas Agendadas
router.get('/', citaagendadaController.getCitaAgendadas);
// Ruta para obtener una Cita Agendada por ID
router.get('/:id', citaagendadaController.getCitaAgendadaById);
// Ruta para obtener una Cita Agendada por ID de mascota
router.get('/:id', citaagendadaController.getCitaAgendadaByMascotaId);
// Ruta para obtener todas las Citas Agendadas por "tipo" de servicio(de la Tabla servicios)
router.get('/doctor/:doctorId', citaagendadaController.getCitaAgendadaByTipoServicio);
// Ruta para crear una nueva cita
router.post('/', citaagendadaController.createCitaAgendada);
// Ruta para actualizar una cita existente
router.put('/:id', citaagendadaController.updateCitaAgendada);
// Ruta para eliminar una cita por ID
router.delete('/:id', citaagendadaController.deleteCitaAgendadaById);

module.exports = router;