const Cirugiasql = require("../models/cirugia_model");

exports.getCirugiasPendientes = (req, res) => {
  Cirugiasql.getCirugiasPendientessql((err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo las cirugias" });
    } else {
      res.json(cirugias);
    }
  });
};

exports.getCirugias = (req, res) => {
  Cirugiasql.getCirugiassql((err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo las cirugias" });
    } else {
      res.json(cirugias);
    }
  });
};

exports.getCirugiaById = (req, res) => {
  const id = req.params.id;
  Cirugiasql.getCirugiaByIdsql(id, (err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo la cirugia" });
    } else if (!cirugias) {
      res.status(404).json({ error: `Cirugia con id ${id} no encontrada` });
    } else {
      res.json(cirugias);
    }
  });
};

exports.getCirugiaByDoctorId = (req, res) => {
  const doctorId = req.params.doctorId;
  Cirugiasql.getCirugiaByDoctorIdsql(doctorId, (err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo las cirugias" });
    } else {
      res.json(cirugias);
    }
  });
};

exports.getCirugiasByEnfermeroId = (req, res) => {
  const enfermeroId = req.params.enfermeroId;
  Cirugiasql.getCirugiasByEnfermeroIdsql(enfermeroId, (err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo las cirugias" });
    } else {
      res.json(cirugias);
    }
  });
};

exports.getCirugiaByDiagnosticoId = (req, res) => {
  const DiagnosticoId = req.params.DiagnosticoId;
  Cirugiasql.getCirugiaByDiagnosticoIdsql(DiagnosticoId, (err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo las cirugias" });
    } else {
      res.json(cirugias);
    }
  });
};
//query para obtener id de cirugia por id de mascota
exports.getCirugiaByMascotaId = (req, res) => {
  const MascotaId = req.params.MascotaId;
  Cirugiasql.getCirugiaByMacotaIdsql(MascotaId, (err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo la cirugia" });
    } else {
      res.json(cirugias);
    }
  });
};

//query para obtener id de cirugia por id de tratamiento
exports.getCirugiaByTratamientoId = (req, res) => {
  const TratamientoId = req.params.MascotaId;
  Cirugiasql.getCirugiaByTratamientoIdsql(TratamientoId, (err, cirugias) => {
    if (err) {
      res.status(500).json({ error: "Error obteniendo la cirugia" });
    } else {
      res.json(cirugias);
    }
  });
};

exports.createCirugia = (req, res) => {
  const cirugia = req.body;
  Cirugiasql.createCirugiasql(cirugia, (err) => {
    if (err) {
      res.status(500).json({ error: "Error creando la cirugia" });
    } else {
      res.json({ message: "Cirugia creada exitosamente" });
    }
  });
};

exports.updateCirugia = (req, res) => {
  const id = req.params.id;
  const cirugia = req.body;
  Cirugiasql.updateCirugiasql(id, cirugia, (err) => {
    if (err) {
      res.status(500).json({ error: "Error actualizando la cirugia" });
    } else {
      res.json({ message: `Cirugia con id ${id} actualizada exitosamente` });
    }
  });
};

exports.deleteCirugiaById = (req, res) => {
  const id = req.params.id;
  Cirugiasql.deleteCirugiaByIdsql(id, (err) => {
    if (err) {
      res.status(500).json({ error: "Error eliminando la cirugia" });
    } else {
      res.json({ message: `Cirugia con id ${id} eliminada exitosamente` });
    }
  });
};
