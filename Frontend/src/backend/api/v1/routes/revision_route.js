const express = require('express');
const router = express.Router();
const revisionController = require('../controllers/revision_controller');

// Ruta para obtener todas las revisiones
router.get('/', revisionController.getRevisiones);
// Ruta para obtener una revisión por ID
router.get('/:id', revisionController.getRevisionById);
// Ruta para obtener todas las revisiones de un doctor por ID de doctor
router.get('/doctor/:doctorId', revisionController.getRevisionesByDoctorId);
// Ruta para obtener todas las revisiones por ID de cita
router.get('/cita/:citaId', revisionController.getRevisionesByCitaId);
// Ruta para crear una nueva revisión
router.post('/', revisionController.createRevision);
// Ruta para actualizar una revisión existente
router.put('/:id', revisionController.updateRevision);
// Ruta para eliminar una revisión por ID
router.delete('/:id', revisionController.deleteRevisionById);

module.exports = router;