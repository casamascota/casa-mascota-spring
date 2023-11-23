const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Revision (
    id_revision INTEGER NOT NULL CONSTRAINT Revision_pk PRIMARY KEY,
    fecha_revision DATETIME NOT NULL,
    sistema_car VARCHAR(50) NOT NULL,
    peso DOUBLE NOT NULL,
    sistema_nervioso VARCHAR(50) NOT NULL,
    Cita_Agendada_id_cita INTEGER NOT NULL,
    Doctor_id_doctor INTEGER NOT NULL,
    CONSTRAINT Revision_Cita_Agendada FOREIGN KEY (Cita_Agendada_id_cita)
      REFERENCES Cita_Agendada (id_cita),
    CONSTRAINT Revision_Doctor FOREIGN KEY (Doctor_id_doctor)
      REFERENCES Doctor (id_doctor)
  );`);

// Función para obtener todas las revisiones
exports.getRevisiones = (callback) => {
  db.all('SELECT * FROM Revision', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener una sola revisión por ID
exports.getRevisionById = (id, callback) => {
  db.get('SELECT * FROM Revision WHERE id_revision = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todas las revisiones de un doctor por ID de doctor
exports.getRevisionesByDoctorId = (doctorId, callback) => {
    db.all('SELECT * FROM Revision WHERE Doctor_id_doctor = ?', [doctorId], (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };

// Función para obtener todas las revisiones por cita
exports.getRevisionesByCitaId = (citaId, callback) => {
    db.all('SELECT * FROM Revision WHERE Cita_Agendada_id_cita = ?', [citaId], (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };

// Función para crear una nueva revisión
exports.createRevision = (revision, callback) => {
  const { fecha_revision, sistema_car, peso, sistema_nervioso, Cita_Agendada_id_cita, Doctor_id_doctor } = revision;
  db.run(
    'INSERT INTO Revision (fecha_revision, sistema_car, peso, sistema_nervioso, Cita_Agendada_id_cita, Doctor_id_doctor) VALUES (?, ?, ?, ?, ?, ?)',
    [fecha_revision, sistema_car, peso, sistema_nervioso, Cita_Agendada_id_cita, Doctor_id_doctor],
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

// Función para actualizar una revisión existente
exports.updateRevision = (id, revision, callback) => {
  const { fecha_revision, sistema_car, peso, sistema_nervioso, Cita_Agendada_id_cita, Doctor_id_doctor } = revision;
  db.run(
    'UPDATE Revision SET fecha_revision = ?, sistema_car = ?, peso = ?, sistema_nervioso = ?, Cita_Agendada_id_cita = ?, Doctor_id_doctor = ? WHERE id_revision = ?',
    [fecha_revision, sistema_car, peso, sistema_nervioso, Cita_Agendada_id_cita, Doctor_id_doctor, id],
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

// Función para eliminar una revisión por ID
exports.deleteRevisionById = (id, callback) => {
  db.run('DELETE FROM Revision WHERE id_revision = ?', [id], (err) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null);
    }
  });
};

// Cierra la conexión a la base de datos cuando se detiene la aplicación
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Conexión a la base de datos cerrada');
    }
    process.exit(0);
  });
})
