const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Cita_Agendada (
    id_cita integer NOT NULL CONSTRAINT Cita_Agendada_pk PRIMARY KEY,
    fecha datetime NOT NULL,
    hora time NOT NULL,
    Mascota_id_mascota integer NOT NULL,
    Servicio_id_servicio integer NOT NULL,
    CONSTRAINT Cita_Agendada_Mascota FOREIGN KEY (Mascota_id_mascota)
    REFERENCES Mascota (id_mascota),
    CONSTRAINT Cita_Agendada_Servicio FOREIGN KEY (Servicio_id_servicio)
    REFERENCES Servicio (id_servicio)
)`);

// Función para obtener todas las citas agendadas
exports.getCitaAgendadassql = (callback) => {
  db.all('SELECT * FROM Cita_Agendada', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener una sola cita agendada por ID
exports.getCitaAgendadaByIdsql = (id, callback) => {
  db.get('SELECT * FROM Cita_Agendada WHERE id_cita = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todas las citas agendadas de unna mascota por ID de mascota
exports.getCitaAgendadaByMascotaIdsql = (mascotaId, callback) => {
    db.all('SELECT * FROM Cita_Agendada WHERE Mascota_id_mascota = ?', [mascotaId], (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };

  // Función para obtener todas las citas agendadas con un tipo de servicio especifico
  //es decir por nombre de servicio 
exports.getCitaAgendadaByTipoServiciosql = (tipoServicio, callback) => {
    db.all('SELECT * FROM Cita_Agendada c JOIN Servicio s WHERE tipo= ?', [tipoServicio], (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };

  

// Función para crear una nueva cita agendada o
// *****Reserva de citas por internet.******
exports.createCitaAgendadasql = (citaagendada, callback) => {
  const { fecha, hora, Mascota_id_mascota, Servicio_id_servicio } = citaagendada;
  db.run(
    'INSERT INTO Cita_Agendada (fecha, hora, Mascota_id_mascota, Servicio_id_servicio) VALUES (?, ?, ?, ?)',
    [fecha, hora, Mascota_id_mascota, Servicio_id_servicio],
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

// Función para actualizar una cita agendada existente por ID
exports.updateCitaAgendadasql = (id, citaagendada, callback) => {
  const {  fecha, tipo, Mascota_id_mascota, Servicio_id_servicio } = citaagendada;
  db.run(
    'UPDATE Cita_Agendada SET fecha = ?, tipo = ?, Mascota_id_mascota = ?, Servicio_id_servicio = ? WHERE id_cita = ?',
    [ fecha, tipo, Mascota_id_mascota, Servicio_id_servicio, id],
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

// Función para eliminar una cita agendada por ID
exports.deleteCitaAgendadaByIdsql = (id, callback) => {
  db.run('DELETE FROM Cita_Agendada WHERE id_cita = ?', [id], (err) => {
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
