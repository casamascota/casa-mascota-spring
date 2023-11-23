const sqlite3 = require('sqlite3').verbose()

// Abre la base de datos en modo lectura/escritura

const db = new sqlite3.Database('../casa_mascota_db.sqlite')

// Crea la tabla "Estilista" si no existe
db.run(`CREATE TABLE IF NOT EXISTS Enfermero (
    id_enfermero integer NOT NULL CONSTRAINT Enfermero_pk PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    apellidos varchar(50) NOT NULL,
    numero_tel varchar(50) NOT NULL,
    direccion varchar(30) NOT NULL
);
`)

// Función para obtener todos los doctores
exports.getEnfermeros = (callback) => {
  db.all('SELECT * FROM Enfermero', [], (err, rows) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

// Función para obtener un solo enfermero por ID
exports.getEnfermeroById = (id, callback) => {
  db.get('SELECT * FROM Enfermero WHERE id_enfermero = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, row)
    }
  })
}

// Función para crear un nuevo enfermero
exports.createEnfermero = (enfermero, callback) => {
  /*const id_doctor = UUID.v4()
  console.log(id_doctor)*/
  const { nombre, apellido, numero_tel, direccion } = enfermero
  db.run('INSERT INTO Enfermero (nombre, apellidos, numero_tel, direccion) VALUES (?, ?, ?, ?)', [ nombre, apellido, numero_tel,direccion], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para actualizar un enfermero existente
exports.updateEnfermero = (id, enfermero, callback) => {
  const { nombre, apellido, numero_tel, direccion } = enfermero
  db.run('UPDATE Enfermero SET nombre = ?, apellidos = ?, numero_tel = ?, direccion = ? WHERE id_enfermero = ?', [nombre, apellido, numero_tel, direccion, id], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para eliminar un enfermero por ID
exports.deleteEnfemeroById = (id, callback) => {
  db.run('DELETE FROM Enfermero WHERE id_enfermero = ?', [id], (err) => {
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
