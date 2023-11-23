const express = require('express');
const router = express.Router();
const medicamentosController = require('../controllers/medicamentos_controller');

// Ruta para obtener todos los medicamentos
router.get('/', medicamentosController.getMedicamentos);
// Ruta para obtener un medicamento por ID
router.get('/:id', medicamentosController.getMedicamentoById);
// Ruta para crear un nuevo medicamento
router.post('/', medicamentosController.createMedicamento);
// Ruta para actualizar un medicamento existente
router.put('/:id', medicamentosController.updateMedicamento);
// Ruta para eliminar un medicamento por ID
router.delete('/:id', medicamentosController.deleteMedicamentoById);

module.exports = router;