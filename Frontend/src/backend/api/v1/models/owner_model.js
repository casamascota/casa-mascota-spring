const sqlite3 = require('sqlite3').verbose();

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Owner (
    id_owner integer NOT NULL CONSTRAINT Owner_pk PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    apellido varchar(50) NOT NULL,
    numero_tel varchar(50) NOT NULL,
    direccion varchar(100) NOT NULL,
    correo varchar(100) NOT NULL
);`);

// Función para obtener todos los Owners
exports.getOwnerssql = (callback) => {
  db.all('SELECT * FROM Owner', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

// Función para obtener un solo owner por ID
exports.getOwnerByIdsql = (id, callback) => {
  db.get('SELECT * FROM Owner WHERE id_owner = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};


// Función para crear un nuevo owner
exports.createOwnersql = (tratamiento, callback) => {
  const { nombre, apellido, numero_tel, direccion, correo } = tratamiento;
  db.run(
    'INSERT INTO Owner (nombre, apellido, numero_tel, direccion, correo) VALUES (?, ?, ?, ?, ?)',
    [nombre, apellido, numero_tel, direccion, correo],
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

// Función para actualizar un owner existente
exports.updateOwnersql = (id, owner, callback) => {
  const { nombre, apellido, numero_tel, direccion } = owner;
  db.run(
    'UPDATE Owner SET nombre = ?, apellido = ?, numero_tel = ?, direccion = ?, correo = ?, WHERE id_owner = ?',
    [nombre, apellido, numero_tel, direccion, id],
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

// Función para eliminar un owner por ID
exports.deleteOwnerByIdsql = (id, callback) => {
  db.run('DELETE FROM Owner WHERE id_owner = ?', [id], (err) => {
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