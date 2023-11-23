const sqlite3 = require("sqlite3").verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database("../casa_mascota_db.sqlite");

db.run(`CREATE TABLE IF NOT EXISTS Cirugia (
    id_cirugia integer NOT NULL CONSTRAINT Cirugia_pk PRIMARY KEY,
    fecha varchar(50) NOT NULL,
    cirugiahecha int NOT NULL,
    Doctor_id_doctor integer NOT NULL,
    Enfermero_id_enfermero integer NOT NULL,
    Diagnostico_id_diagnostico integer NOT NULL,
    CONSTRAINT Cirugia_Doctor FOREIGN KEY (Doctor_id_doctor)
    REFERENCES Doctor (id_doctor),
    CONSTRAINT Cirugia_Enfermero FOREIGN KEY (Enfermero_id_enfermero)
    REFERENCES Enfermero (id_enfermero),
    CONSTRAINT Cirugia_Diagnostico FOREIGN KEY (Diagnostico_id_diagnostico)
    REFERENCES Diagnostico (id_diagnostico)
)`);
//Visualización de las cirugias pendientes.
//Las cirugias hechas tiene 1, las no hechas(pendientes seran 0)
exports.getCirugiasPendientessql = (id, callback) => {
  db.get("SELECT * FROM Cirugia WHERE cirugiahecha = 0", [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todas las Cirugias
exports.getCirugiassql = (callback) => {
  db.all("SELECT * FROM Cirugia", [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener una sola Cirugia por ID
exports.getCirugiaByIdsql = (id, callback) => {
  db.get("SELECT * FROM Cirugia WHERE id_cirugia = ?", [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todas las Cirugias hechas por un doctor por ID de doctor
exports.getCirugiaByDoctorIdsql = (doctorId, callback) => {
  db.all(
    "SELECT * FROM Cirugia WHERE Doctor_id_doctor = ?",
    [doctorId],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    }
  );
};

// Función para obtener todas las Cirugias de un enfermero por ID de enfermero
exports.getCirugiasByEnfermeroIdsql = (enfermeroId, callback) => {
  db.all(
    "SELECT * FROM Cirugia WHERE Enfermero_id_enfermero = ?",
    [enfermeroId],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    }
  );
};

// Función para obtener todas las Cirugias por Diagnostico ID
exports.getCirugiaByDiagnosticoIdsql = (DiagnosticoId, callback) => {
  db.all(
    "SELECT * FROM Cirugia WHERE Cirugia_Diagnostico = ?",
    [DiagnosticoId],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    }
  );
};

//QUERY PARA OBTENER ID CIRUGIA POR MASCOTA ID
exports.getCirugiaByMacotaIdsql = (MascotaId, callback) => {
  db.all(
    "SELECT Cirugia.id_cirugia FROM Cirugia JOIN diagnostico ON Cirugia.id_diagnostico = diagnostico.id_diagnostico JOIN revision ON diagnostico.id_revision = revision.id_revision JOIN Cita_Agendada ON revision.id_cita = Cita_Agendada.id_cita JOIN Mascota ON Cita_Agendada.id_mascota = Mascota.id_mascota WHERE Mascota.id_mascota = ?",
    [MascotaId],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    }
  );
};

//QUERY PARA OBTENER ID CIRUGIA POR TRATAMIENTO ID
exports.getCirugiaByTratamientoIdsql = (TratamientoId, callback) => {
  db.all(
    "SELECT Cirugia.id_cirugia FROM Cirugia JOIN diagnostico ON Cirugia.id_diagnostico = diagnostico.id_diagnostico JOIN Tratamiento ON diagnostico.id_diagnostico = Tratamiento.id_diagnostico WHERE Tratamiento.id_trat = ?",
    [TratamientoId],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    }
  );
};

// Función para crear una nueva revisión
exports.createCirugiasql = (revision, callback) => {
  const {
    fecha,
    cirugiahecha,
    Doctor_id_doctor,
    Enfermero_id_enfermero,
    Diagnostico_id_diagnostico,
  } = revision;
  db.run(
    "INSERT INTO Cirugia (fecha, cirugiahecha, Doctor_id_doctor, Enfermero_id_enfermero, Diagnostico_id_diagnostico) VALUES (?, ?, ?, ?, ?)",
    [
      fecha,
      cirugiahecha,
      Doctor_id_doctor,
      Enfermero_id_enfermero,
      Diagnostico_id_diagnostico,
    ],
    (err) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

// Función para actualizar una Cirugia existente
exports.updateCirugiasql = (id, cirugia, callback) => {
  const {
    fecha,
    cirugiahecha,
    Doctor_id_doctor,
    Enfermero_id_enfermero,
    Diagnostico_id_diagnostico,
  } = cirugia;
  db.run(
    "UPDATE Cirugia SET fecha = ?, cirugiahecha = ?, Doctor_id_doctor = ?, Enfermero_id_enfermero = ?, Diagnostico_id_diagnostico = ? WHERE id_cirugia = ?",
    [
      fecha,
      cirugiahecha,
      Doctor_id_doctor,
      Enfermero_id_enfermero,
      Diagnostico_id_diagnostico,
      id,
    ],
    (err) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

// Función para eliminar una Cirugia por ID
exports.deleteCirugiaByIdsql = (id, callback) => {
  db.run("DELETE FROM Cirugia WHERE id_cirugia = ?", [id], (err) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Cierra la conexión a la base de datos cuando se detiene la aplicación
process.on("SIGINT", () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Conexión a la base de datos cerrada");
    }
    process.exit(0);
  });
});
