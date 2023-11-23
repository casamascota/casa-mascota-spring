const sqlite3 = require('sqlite3').verbose()
const UUID = require('uuid');

// Abre la base de datos en modo lectura/escritura
const db = new sqlite3.Database('../casa_mascota_db.sqlite')

// Crea la tabla "doctores" si no existe
db.run(`CREATE TABLE IF NOT EXISTS Doctor (
   id_doctor integer NOT NULL CONSTRAINT Doctor_pk PRIMARY KEY,
   nombre varchar(50) NOT NULL,
   apellido varchar(50) NOT NULL,
   numero_tel varchar(50) NOT NULL,
   direccion varchar(100) NOT NULL
);`);

// Función para obtener todos los doctores
exports.getDoctores = (callback) => {
  db.all('SELECT * FROM Doctor', [], (err, rows) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

// Función para obtener un solo doctor por ID
exports.getDoctorById = (id, callback) => {
  db.get('SELECT * FROM Doctor WHERE id_doctor = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, row)
    }
  })
}

// Función para crear un nuevo doctor
exports.createDoctor = (doctor, callback) => {
  /*const id_doctor = UUID.v4()
  console.log(id_doctor)*/
  const { nombre, apellido, numero_tel, direccion } = doctor
  db.run('INSERT INTO Doctor (nombre, apellido, numero_tel, direccion) VALUES (?, ?, ?, ? )', [nombre, apellido, numero_tel, direccion], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para actualizar un doctor existente
exports.updateDoctor = (id, doctor, callback) => {
  const { nombre, apellido, numero_tel, direccion } = doctor
  db.run('UPDATE Doctor SET nombre = ?, apellido = ?, numero_tel = ?, direccion = ? WHERE id_doctor = ?', [nombre, apellido, numero_tel, direccion, id], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para eliminar un doctor por ID
exports.deleteDoctorById = (id, callback) => {
  db.run('DELETE FROM Doctor WHERE id_doctor = ?', [id], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

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
