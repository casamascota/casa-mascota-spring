const express = require('express');
const router = express.Router();
const pelqueriaController = require('../controllers/peluqueria_controller');

router.get('/', pelqueriaController.getPeluquerias);
router.get('/:id', pelqueriaController.getPeluqueriaById);
router.get('/estilista/:estilistaId', pelqueriaController.getPeluqueriaByEstilistaId);
router.post('/', pelqueriaController.createPeluqueria);
router.put('/:id', pelqueriaController.updatePeluqueria);
router.delete('/:id', pelqueriaController.deletePeluqueria);


module.exports = router;