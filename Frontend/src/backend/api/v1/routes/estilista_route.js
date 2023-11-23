const express = require('express')
const router = express.Router()
const estilistaController = require('../controllers/estilista_controller')

router.get('/', estilistaController.getEstilistas)
router.get('/:id', estilistaController.getEstilistaById)
router.post('/', estilistaController.createEstilista)
router.put('/:id', estilistaController.updateEstilista)
router.delete('/:id', estilistaController.deleteEstilistaById)

module.exports = router
