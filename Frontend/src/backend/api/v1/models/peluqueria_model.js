const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Peluqueria (
  id_pel integer NOT NULL CONSTRAINT Peluqueria_pk PRIMARY KEY,
  fecha datetime NOT NULL,
  descripcion varchar(150) NOT NULL,
  Estilista_id_estilista integer NOT NULL,
  Cita_Agendada_id_cita integer NOT NULL,
  CONSTRAINT Peluqueria_Estilista FOREIGN KEY (Estilista_id_estilista)
  REFERENCES Estilista (id_estilista),
  CONSTRAINT Peluqueria_Cita_Agendada FOREIGN KEY (Cita_Agendada_id_cita)
  REFERENCES Cita_Agendada (id_cita)
);`);

exports.getPeluqueria = (callback) => {
  db.all('SELECT * FROM Peluqueria', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

exports.getPeluqueriaById = (id, callback) => {
  db.get('SELECT * FROM Peluqueria WHERE id_pel = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todas las citas de peluqueria de un estilsita por su id
exports.getPeluqueriaByEstilistaId = (estilistaId, callback) => {
    db.all('SELECT * FROM Peluqueria WHERE Estilista_id_estilista = ?', [estilistaId], (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };


exports.createPeluqueria = (peluqueria, callback) => {
  const { fecha, descripcion, estilistaId, citaId} = peluqueria;
  db.run(
    'INSERT INTO Peluqueria (fecha, descripcion, Estilista_id_estilista, Cita_Agendada_id_cita) VALUES (?, ?, ?, ?)',
    [fecha, descripcion, estilistaId, citaId],
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

// Función para actualizar una cita de peluqueria existente
exports.updatePeluqueria = (id, peluqueria, callback) => {
  const { fecha, descripcion, idEstilista, idCita } = peluqueria;
  db.run(
    'UPDATE Peluqueria SET fecha = ?, descripcion = ?, Estilista_id_estilista = ?, Cita_Agendada_id_cita = ? WHERE id_pel = ?',
    [fecha, descripcion, idEstilista, idCita, id],
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

// Función para eliminar una cita de peluquería por ID
exports.deletePeluqueriaById = (id, callback) => {
  db.run('DELETE FROM Peluqueria WHERE id_pel = ?', [id], (err) => {
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
