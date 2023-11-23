const express = require('express')
const router = express.Router()
const enfermeroController = require('../controllers/enfermero_controller')

router.get('/', enfermeroController.getEnfermero)
router.get('/:id', enfermeroController.getEnfermeroById)
router.post('/', enfermeroController.createEnfermero)
router.put('/:id', enfermeroController.updateEnfermero)
router.delete('/:id', enfermeroController.deleteEnfermeroById)

module.exports = router
