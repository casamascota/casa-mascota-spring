const express = require('express');
const router = express.Router();
const diagnosticoController = require('../controllers/diagnostico_controller');

router.get('/', diagnosticoController.getDiagnostico);
router.get('/:id', diagnosticoController.deleteDiagnosticoById);
router.post('/', diagnosticoController.createDiagnostico);
router.put('/:id', diagnosticoController.updateDiagnostico);
router.delete('/:id', diagnosticoController.deleteDiagnosticoById);

module.exports = router;