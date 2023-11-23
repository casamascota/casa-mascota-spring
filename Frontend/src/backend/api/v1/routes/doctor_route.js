const express = require('express')
const router = express.Router()
const doctorController = require('../controllers/doctor_controller')

router.get('/', doctorController.getDoctores)
router.get('/:id', doctorController.getDoctorById)
router.post('/', doctorController.createDoctor)
router.put('/:id', doctorController.updateDoctor)
router.delete('/:id', doctorController.deleteDoctorById)

module.exports = router
