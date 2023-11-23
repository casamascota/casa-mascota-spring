const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Medicamentos (
  id_med integer NOT NULL CONSTRAINT Medicamentos_pk PRIMARY KEY,
  nombre varchar(50) NOT NULL,
  tipo varchar(50) NOT NULL
);`);

// Función para obtener todos los Medicamentos
exports.getMedicamentossql = (callback) => {
  db.all('SELECT * FROM Medicamentos', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener un solo Medicamento por ID
exports.getMedicamentoByIdsql = (id, callback) => {
  db.get('SELECT * FROM Medicamentos WHERE id_med = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};


// Función para crear un nuevo Medicamento
exports.createMedicamentosql = (medicamento, callback) => {
  const { nombre, tipo } = medicamento;
  db.run(
    'INSERT INTO Medicamentos (nombre, tipo) VALUES (?, ?)',
    [nombre, tipo],
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

// Función para actualizar un Medicamento existente
exports.updateMedicamentosql = (id, medicamento, callback) => {
  const { nombre, tipo } = medicamento;
  db.run(
    'UPDATE Medicamentos SET nombre = ?, tipo = ? WHERE id_med = ?',
    [nombre, tipo, id],
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

// Función para eliminar un medicamento por ID
exports.deleteMedicamentoByIdsql = (id, callback) => {
  db.run('DELETE FROM Medicamentos WHERE id_med = ?', [id], (err) => {
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
