const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const doctorRoute = require("./api/v1/routes/doctor_route");
const estilistaRoute = require("./api/v1/routes/estilista_route");
const enfermeroRoute = require("./api/v1/routes/enfermero_route");
const revisionRoute = require("./api/v1/routes/revision_route");
const ownerRoute = require("./api/v1/routes/owner_route");
const mascotaRoute = require("./api/v1/routes/mascota_route");
const servicioRoute = require("./api/v1/routes/servicio_route");
const citaRoute = require("./api/v1/routes/citaagendada_route");
const cirugiasRoute = require("./api/v1/routes/cirugia_route");
const tratamientosRoute = require("./api/v1/routes/tratamiento_route");
const diagnosticosRoute = require("./api/v1/routes/diagnostico_route");
const medicamentosRoute = require("./api/v1/routes/medicamentos_route");
const vacunasRoute = require("./api/v1/routes/vacuna_route");
const emailRoutes = require('./api/v1/routes/email_route');
const tratamientoMedRoute = require("./api/v1/routes/tratamiento_med_route");
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use("/api/doctores", doctorRoute);
app.use("/api/estilistas", estilistaRoute);
app.use("/api/enfermeros", enfermeroRoute);
app.use("/api/revisiones", revisionRoute);
app.use("/api/owners", ownerRoute);
app.use("/api/mascotas", mascotaRoute);
app.use("/api/servicios", servicioRoute);
app.use("/api/citas", citaRoute);
app.use("/api/cirugias", cirugiasRoute);
app.use("/api/tratamientos", tratamientosRoute);
app.use("/api/diagnosticos", diagnosticosRoute);
app.use("/api/revision", revisionRoute);
app.use("/api/medicamentos", medicamentosRoute);
app.use("/api/vacunas", vacunasRoute);
app.use("/api/tratamientoMed", tratamientoMedRoute);
app.use('/api/email', emailRoutes);

app.get("/", (req, res) => {
  res.send("Hola desde Express.js!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
