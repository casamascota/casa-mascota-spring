const sqlite3 = require('sqlite3').verbose()

// Abre la base de datos en modo lectura/escritura

const db = new sqlite3.Database('../casa_mascota_db.sqlite')

//Crea la tabla "Estilista" si no existe
db.run(`CREATE TABLE IF NOT EXISTS Estilista (
    id_estilista integer NOT NULL CONSTRAINT Estilista_pk PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    apellido varchar(50) NOT NULL,
    numero_tel varchar(50) NOT NULL
);`)

// Función para obtener todos los doctores
exports.getEstilistas = (callback) => {
  db.all('SELECT * FROM Estilista', [], (err, rows) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

// Función para obtener un solo estilista por ID
exports.getEstilistaById = (id, callback) => {
  db.get('SELECT * FROM Estilista WHERE id_estilista = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, row)
    }
  })
}

// Función para crear un nuevo estilista
exports.createEstilista = (estilista, callback) => {
  /*const id_doctor = UUID.v4()
  console.log(id_doctor)*/
  const { nombre, apellido, numero_tel } = estilista
  db.run('INSERT INTO Estilista (nombre, apellido, numero_tel) VALUES (?, ?, ?)', [ nombre, apellido, numero_tel], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para actualizar un estilista existente
exports.updateEstilista = (id, doctor, callback) => {
  const { nombre, apellido, telefono, direccion } = doctor
  db.run('UPDATE Estilista SET nombre = ?, apellido = ?, telefono = ? WHERE id = ?', [nombre, apellido, telefono, id], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para eliminar un estilista por ID
exports.deleteEstilistaById = (id, callback) => {
  db.run('DELETE FROM Estilista WHERE id = ?', [id], (err) => {
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
