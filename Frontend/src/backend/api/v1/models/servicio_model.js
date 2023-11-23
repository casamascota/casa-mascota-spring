const sqlite3 = require('sqlite3').verbose()
const UUID = require('uuid');

// Abre la base de datos en modo lectura/escritura

const db = new sqlite3.Database('../casa_mascota_db.sqlite')

// Crea la tabla "Servicio" si no existe
db.run(`CREATE TABLE IF NOT EXISTS Servicio(
    id_servicio integer NOT NULL CONSTRAINT id_servicio PRIMARY KEY,
    tipo varchar(50) NOT NULL,
    costo double NOT NULL
);`)

// Función para obtener todos los doctores
exports.getServicios = (callback) => {
  db.all('SELECT * FROM Servicio', [], (err, rows) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, rows)
    }
  })
}

// Función para obtener un solo Servicio por ID
exports.getServicioById = (id, callback) => {
  db.get('SELECT * FROM Servicio WHERE id_servicio = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null, row)
    }
  })
}

// Función para crear un nuevo servicio
exports.createServicio = (servicio, callback) => {
 
  const {tipo, costo} = servicio
  console.log(tipo)
  db.run('INSERT INTO Servicio (tipo, costo) VALUES (?, ?)', [tipo, costo], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para actualizar un servicio existente
exports.updateServicio = (id, servicio, callback) => {
  const { tipo,costo } = servicio
  db.run('UPDATE Servicio SET tipo = ?, costo = ? WHERE id = ?', [tipo, costo, id], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

// Función para eliminar un servicio por ID
exports.deleteServicioById = (id, callback) => {
  db.run('DELETE FROM Servicio WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      callback(null)
    }
  })
}

exports.getIdServicio = (tipo,callback) => {
  db.get('SELECT id_servicio FROM Servicio WHERE tipo = ?', [tipo], (err, row) => {
    if (err) {
      console.error(err.message)
      callback(err)
    } else {
      console.log(row)
      callback(null, row)
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
