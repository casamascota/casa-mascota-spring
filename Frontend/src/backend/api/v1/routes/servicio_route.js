const express = require('express')
const router = express.Router()
const servicioController = require('../controllers/servicio_controller')

router.get('/', servicioController.getServicios)
router.get('/:id', servicioController.getServicioById)
router.post('/', servicioController.createServicio)
router.put('/:id', servicioController.updateServicio)
router.delete('/:id', servicioController.deleteServicioById)
router.get('/tipo/:tipo', servicioController.getIdByServicio)

module.exports = router
