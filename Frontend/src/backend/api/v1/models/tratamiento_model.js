const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Tratamiento (
    id_trat INTEGER NOT NULL CONSTRAINT Tratamiento_pk PRIMARY KEY,
    fecha_inicio DATETIME NOT NULL,
    fecha_final DATETIME NOT NULL,
    Diagnostico_id_diagnostico INTEGER NOT NULL,
    CONSTRAINT Tratamiento_Diagnostico FOREIGN KEY (Diagnostico_id_diagnostico)
      REFERENCES Diagnostico (id_diagnostico)
  );`);

// Función para obtener todos los tratamientos
exports.getTratamientos = (callback) => {
  db.all('SELECT * FROM Tratamiento', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener un solo tratamiento por ID
exports.getTratamientoById = (id, callback) => {
  db.get('SELECT * FROM Tratamiento WHERE id_trat = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todos los tratamientos de un diagnóstico por ID de diagnóstico
exports.getTratamientosByDiagnosticoId = (diagnosticoId, callback) => {
    db.all('SELECT * FROM Tratamiento WHERE Diagnostico_id_diagnostico = ?', [diagnosticoId], (err, rows) => {
        if (err) {
            console.error(err.message);
            callback(err);
        } else {
            callback(null, rows);
        }
    });
};

// Función para crear un nuevo tratamiento
exports.createTratamiento = (tratamiento, callback) => {
  const { fecha_inicio, fecha_final, Diagnostico_id_diagnostico } = tratamiento;
  db.run(
    'INSERT INTO Tratamiento (fecha_inicio, fecha_final, Diagnostico_id_diagnostico) VALUES (?, ?, ?)',
    [fecha_inicio, fecha_final, Diagnostico_id_diagnostico],
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

// Función para actualizar un tratamiento existente
exports.updateTratamiento = (id, tratamiento, callback) => {
  const { fecha_inicio, fecha_final, Diagnostico_id_diagnostico } = tratamiento;
  db.run(
    'UPDATE Tratamiento SET fecha_inicio = ?, fecha_final = ?, Diagnostico_id_diagnostico = ? WHERE id_trat = ?',
    [fecha_inicio, fecha_final, Diagnostico_id_diagnostico, id],
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

// Función para eliminar un tratamiento por ID
exports.deleteTratamientoById = (id, callback) => {
  db.run('DELETE FROM Tratamiento WHERE id_trat = ?', [id], (err) => {
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