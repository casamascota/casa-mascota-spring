const express = require("express");
const router = express.Router();
const cirugiaController = require("../controllers/cirugia_controller");

// Ruta para obtener todas las cirugias
router.get("/", cirugiaController.getCirugias);
// Ruta para obtener todas las cirugias PENDIENTES
router.get("/", cirugiaController.getCirugiasPendientes);

// Ruta para obtener una cirugia por ID
router.get("/:id", cirugiaController.getCirugiaById);
// Ruta para obtener todas las cirugias de un doctor por ID de doctor
router.get("/cirugia/:doctorId", cirugiaController.getCirugiaByDoctorId);
// Ruta para obtener todas las cirugias de un doctor por ID de enfermero
router.get("/cirugia/:enfermeroId", cirugiaController.getCirugiasByEnfermeroId);
// Ruta para obtener todas las cirugias de un doctor por ID de diagnostico
router.get(
  "/cirugia/:DiagnosticoId",
  cirugiaController.getCirugiaByDiagnosticoId
);
//QUERY GET ID CIRUGIA POR ID MASCOTA
router.get("/mascotas/:id_mascota", cirugiaController.getCirugiaByMascotaId);
//QUERY GET ID TRATAMIENTO POR ID MASCOTA
router.get(
  "/tratamiento/:id_trat",
  cirugiaController.getCirugiaByTratamientoId
);
// Ruta para crear una nueva cirugia
router.post("/", cirugiaController.createCirugia);
// Ruta para actualizar una cirugia existente
router.put("/:id", cirugiaController.updateCirugia);
// Ruta para eliminar una cirugia por ID
router.delete("/:id", cirugiaController.deleteCirugiaById);

module.exports = router;
