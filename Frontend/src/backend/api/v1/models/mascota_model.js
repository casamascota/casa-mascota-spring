const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Mascota (
   id_mascota integer NOT NULL CONSTRAINT Mascota_pk PRIMARY KEY,
   nombre varchar(60) NOT NULL,
   raza varchar(40) NOT NULL,
   edad integer NOT NULL,
   genero varchar(50) NOT NULL,
   fecha_nacimiento datetime NOT NULL,
   peso double NOT NULL,
   isAdopted boolean NOT NULL,
   Owner_id_owner integer,
   CONSTRAINT Mascota_Owner FOREIGN KEY (Owner_id_owner)
   REFERENCES Owner (id_owner)
   
);`);

// Función para obtener todas las mascotas
exports.getMascotas = (callback) => {
  db.all('SELECT * FROM Mascota', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

exports.getCitasByMascotaId = (id, callback) => {
  db.all('SELECT * FROM Cita_Agendada WHERE Mascota_id_mascota = ?', [id], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
}

// Función para obtener una sola mascota por ID
exports.getMascotaById = (id, callback) => {
  db.get('SELECT * FROM Mascota WHERE id_mascota = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};

// Función para obtener todas las mascotas de un dueño por id de dueño
exports.getMascotasByOwnerId = (ownerId, callback) => {
    db.all('SELECT * FROM Mascota WHERE Owner_id_owner = ?', [ownerId], (err, rows) => {
      if (err) {
        console.error(err.message);
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  };


// Función para crear una nueva mascota
exports.createMascota = (mascota, callback) => {
  const { nombre, raza, edad, genero, fecha_nacimiento, peso, isAdopted, Owner_id_owner } = mascota;
  db.run(
    'INSERT INTO Mascota (nombre, raza, edad, genero, fecha_nacimiento, peso, isAdopted, Owner_id_owner) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [nombre, raza, edad, genero, fecha_nacimiento, peso, isAdopted, Owner_id_owner],
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

// Función para actualizar una mascota existente
exports.updateMascota = (id, mascota, callback) => {
  const { nombre, raza, edad, genero, fechaNac, peso, idOwner  } = mascota;
  db.run(
    'UPDATE Mascota SET nombre = ?, raza = ?, edad = ?, genero = ?, fecha_nacimiento = ?, peso = ?, Owner_id_owner = ? WHERE id_mascota = ?',
    [nombre, raza, edad, genero, fechaNac, peso, idOwner, id],
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

// Función para eliminar una mascota por ID
exports.deleteMascotaById = (id, callback) => {
  db.run('DELETE FROM Mascota WHERE id_mascota = ?', [id], (err) => {
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
