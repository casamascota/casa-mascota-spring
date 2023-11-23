const express = require('express')
const router = express.Router()
const mascotaController = require('../controllers/mascota_controller')

router.get('/', mascotaController.getMascota)
router.get('/:id', mascotaController.getMascotaById)
router.post('/', mascotaController.createMascota)
router.put('/:id', mascotaController.updateMascota)
router.delete('/:id', mascotaController.deleteMascotaById)
router.get('/owner/:id', mascotaController.getMascotaByOwnerId)
router.get('/:id/citas', mascotaController.getCitasByMascotaId)

module.exports = router
