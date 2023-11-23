const sqlite3= require('sqlite3');

const db = new sqlite3.Database('../casa_mascota_db.sqlite');
//Crear la tabla si no existe
db.run(`CREATE TABLE IF NOT EXISTS Tratamiento_Med(
  id_trat_med integer NOT NULL CONSTRAINT Tratamiento_Med_pk PRIMARY KEY,
    Medicamentos_id_med integer NOT NULL,
    Tratamiento_id_trat integer NOT NULL,
    Doctor_id_doctor integer NOT NULL,
    CONSTRAINT Tratamiento_Med_Medicamentos FOREIGN KEY (Medicamentos_id_med)
    REFERENCES Medicamentos (id_med),
    CONSTRAINT Tratamiento_Med_Tratamiento FOREIGN KEY (Tratamiento_id_trat)
    REFERENCES Tratamiento (id_trat),
    CONSTRAINT Tratamiento_Med_Doctor FOREIGN KEY (Doctor_id_doctor)
    REFERENCES Doctor (id_doctor));`)

// Obtener todos los tratamientos medicamentos
exports.getTratamientosMed = (callback) => {
  db.all('SELECT * FROM Tratamiento_Med', [], (err, rows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Obtener un tratamiento medicamento por ID
exports.getTratamientoMedById = (id, callback) => {
  db.get('SELECT * FROM Tratamiento_Med WHERE id_trat_med = ?', [id], (err, row) => {
    if (err) {
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Obtener todos los tratamientos medicamentos de un medicamento por ID de medicamento
exports.getTratamientosMedByMedicamentoId = (medicamentoId, callback) => {
    db.all('SELECT * FROM Tratamiento_Med WHERE Medicamentos_id_med = ?', [medicamentoId], (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
        }
    });
};

// Obtener todos los tratamientos medicamentos de un doctor por ID de doctor
exports.getTratamientosMedByDoctorId = (doctorId, callback) => {
    db.all('SELECT * FROM Tratamiento_Med WHERE Doctor_id_doctor = ?', [doctorId], (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
        }
    });
};

// Obtener todos los tratamientos medicamentos de un tratamiento por ID de tratamiento
exports.getTratamientosMedByTratamientoId = (tratamientoId, callback) => {
    db.all('SELECT * FROM Tratamiento_Med WHERE Tratamiento_id_trat = ?', [tratamientoId], (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(null, rows);
        }
    });
};

// Obtener todos los tratamientos medicamentos de un tratamiento por ID de tratamiento
exports.getTratamientosMedByTratamientoId = (tratamientoId, callback) => {
  db.all('SELECT * FROM Tratamiento_Med WHERE Tratamiento_id_trat = ?', [tratamientoId], (err, rows) => {
    if (err) {
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Crear un nuevo tratamiento medicamento
exports.createTratamientoMed = (tratamientoMed, callback) => {
  const { Medicamentos_id_med, Tratamiento_id_trat, Doctor_id_doctor } = tratamientoMed;
  db.run(
    'INSERT INTO Tratamiento_Med (Medicamentos_id_med, Tratamiento_id_trat, Doctor_id_doctor) VALUES (?, ?, ?)',
    [Medicamentos_id_med, Tratamiento_id_trat, Doctor_id_doctor],
    (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

// Actualizar un tratamiento medicamento existente
exports.updateTratamientoMed = (id, tratamientoMed, callback) => {
  const { Medicamentos_id_med, Tratamiento_id_trat, Doctor_id_doctor } = tratamientoMed;
  db.run(
    'UPDATE Tratamiento_Med SET Medicamentos_id_med = ?, Tratamiento_id_trat = ?, Doctor_id_doctor = ? WHERE id_trat_med = ?',
    [Medicamentos_id_med, Tratamiento_id_trat, Doctor_id_doctor, id],
    (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    }
  );
};

// Eliminar un tratamiento medicamento por ID
exports.deleteTratamientoMedById = (id, callback) => {
  db.run('DELETE FROM Tratamiento_Med WHERE id_trat_med = ?', [id], (err) => {
    if (err) {
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
      console.error(err.message)
    } else {
      console.log('Conexión a la base de datos cerrada')
    }
    process.exit(0)
  })
})
