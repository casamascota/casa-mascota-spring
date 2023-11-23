const sqlite3 = require("sqlite3").verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database("../casa_mascota_db.sqlite");

db.run(`CREATE TABLE IF NOT EXISTS Diagnostico  (
   id_diagnostico integer NOT NULL CONSTRAINT Diagnostico_pk PRIMARY KEY,
   diagnostico varchar(100) NOT NULL,
   trat_requerido integer NOT NULL,
   id_revision integer NOT NULL,
   CONSTRAINT Diagnostico_Revision FOREIGN KEY (id_revision)
   REFERENCES Revision (id_revision)
);`);

// Función para obtener todas los diagnósticos
exports.getDiagnosticos = (callback) => {
  db.all("SELECT * FROM Diagnostico", [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener una sola diagnóstico por ID
exports.getDiagnosticoById = (id, callback) => {
  db.get(
    "SELECT * FROM Diagnostico WHERE id_diagnostico = ?",
    [id],
    (err, row) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, row);
      }
    }
  );
};

// Función para crear un nuevo diagnóstico
exports.createDiagnostico = (diagnosticoObject, callback) => {
  const { diagnostico, tratamiento, idRevision } = diagnosticoObject;
  db.run(
    "INSERT INTO Diagnostico (diagnostico, trat_requerido, id_revision) VALUES (?, ?, ?)",
    [diagnostico, tratamiento, idRevision],
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

// Función para actualizar un diagnóstico existente
exports.updateDiagnostico = (id, diagnostico, callback) => {
  const { diagnosticoDesc, tratamiento, idRevision } = diagnostico;
  db.run(
    "UPDATE Diagnostico SET diagnostico = ?, tratamiento = ?, idRevision = ? WHERE id_revision = ?",
    [diagnosticoDesc, tratamiento, idRevision, id],
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

// Función para eliminar un diagnóstico por ID
exports.deleteDiagnosticoById = (id, callback) => {
  db.run("DELETE FROM Diagnostico WHERE id_Diagnostico = ?", [id], (err) => {
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
