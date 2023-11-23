
INSERT INTO Persona (nombre, apellido, numero_tel, direccion)
VALUES
    ('Juan', 'Perez', '555-1234', '123 Calle Principal'),
    ('Maria', 'Gomez', '555-5678', '456 Avenida Secundaria'),
    ('Carlos', 'Lopez', '555-9876', '789 Calle Central'),
    ('Daniel', 'Pendones', '555-4321', '321 Calle Inversa'),
    ('Cristo', 'Yocreoenti', '555-8765', '654 Avenida Terciaria'),
    ('Natalia', 'Lopez', '555-6789', '987 Calle Periférica'),
    ('Sergio', 'Wachallar', '555-1111', '111 Calle Solitaria'),
    ('Grace', 'Gomez', '555-2222', '222 Avenida Doble'),
    ('Camila', 'Urumpa', '555-3333', '333 Calle Tercera'),
    ('Eugenio', 'Casas', '555-4444', '444 Calle Cuarta'),
    ('Armando', 'Problemas', '555-5555', '555 Avenida Quinta'),
    ('Chae', 'Hoko', '555-6666', '666 Calle Sexta');
INSERT INTO Usuario (username, hashed_password, rol, id_persona)
VALUES
    ('juanp', 'hashed_juan', 'Owner', 1),
    ('mariag', 'hashed_maria', 'Owner', 2),
    ('carlosl', 'hashed_carlos', 'Owner', 3),
    ('danielp', 'hashed_daniel', 'Estilista', 4),
    ('cristoy', 'hashed_cristo', 'Estilista', 5),
    ('natalial', 'hashed_natalia', 'Doctor', 6),
    ('sergiow', 'hashed_sergio', 'Doctor', 7),
    ('graceg', 'hashed_grace', 'Doctor', 8),
    ('camilau', 'hashed_camila', 'Enfermero', 9),
    ('eugenioc', 'hashed_eugenio', 'Enfermero', 10),
    ('armandop', 'hashed_armando', 'Enfermero', 11),
    ('chaeh', 'hashed_chae', 'Estilista', 12);

INSERT INTO Mascota (nombre, raza, edad, genero, fecha_nacimiento, peso, id_usuario, especie, enadopcion)
VALUES
    ('Fido', 'Labrador', 3, 'Macho', '2020-01-15', 25.5, 1, 'Perro', false),
    ('Whiskers', 'Siamese', 2, 'Hembra', '2021-05-10', 8.0, 2, 'Gato', true),
    ('Rocky', 'Bulldog', 4, 'Macho', '2019-03-20', 30.0, 3, 'Perro', false);

-- Inserts for MascotasAdoptadas
-- Assuming that the owner with id 2 (Maria) adopted the pet with id 2 (Whiskers)
INSERT INTO MascotasAdoptadas (Owner_id_owner, Mascota_id_mascota, fecha_adopcion)
VALUES
    (2, 2, '2023-01-20');

-- Inserts for TipoDocumento
INSERT INTO TipoDocumento (tipo)
VALUES
    ('DNI'),
    ('Pasaporte'),
    ('Licencia de Conducir');

-- Inserts for DocumentoAdopcion
-- Assuming we have a document for the adoption that took place (id 1 in MascotasAdoptadas)
INSERT INTO DocumentoAdopcion (documento, MascotasAdoptadas_id_adoptadas, TipoDocumento_id_tipoDoc)
VALUES
    ('Documento_Adopcion_Whiskers.pdf', 1, 1);

-- Inserts for Imagenes
-- Assuming we have images for each pet
INSERT INTO Imagenes (imagen, Mascota_id_mascota)
VALUES
    ('fido.jpg', 1),
    ('whiskers.jpg', 2),
    ('rocky.jpg', 3);

-- Inserts for Servicio
INSERT INTO Servicio (tipo, precio, descripcion)
VALUES
    ('Corte de pelo', 25.99, 'Corte de pelo para mascotas'),
    ('Consulta médica', 45.50, 'Consulta médica general para mascotas'),
    ('Vacunación', 15.00, 'Vacunación anual para mascotas');

-- Inserts for Cita_Agendada
-- Assuming 'id_usuario' 6 (Natalia, who is a doctor) and 'id_usuario' 4 (Daniel, who is an estilista) are providing services
INSERT INTO Cita_Agendada (fecha_reserva, fecha_cita, id_servicio, id_mascota, Usuario_id_usuario)
VALUES
    ('2023-11-05 10:00:00', '2023-11-10 15:30:00', 1, 1, 6),
    ('2023-11-06 09:15:00', '2023-11-12 14:00:00', 2, 2, 6),
    ('2023-11-07 11:30:00', '2023-11-15 16:45:00', 3, 3, 6);

-- Inserts for Revision
-- Assuming we have revisions for each appointment
INSERT INTO revision (descripcion, id_cita)
VALUES
    ('Revisión de rutina completa', 1),
    ('Examen de sangre y chequeo', 2),
    ('Radiografía y evaluación física', 3);

-- Inserts for Diagnostico
-- Assuming each revision resulted in a diagnosis
INSERT INTO diagnostico (diagnostico, trat_requerido, id_revision)
VALUES
    ('Saludable', 0, 1),
    ('Anemia leve detectada', 1, 2),
    ('Fractura confirmada en pata delantera derecha', 1, 3);

-- Inserts for Tratamiento
-- Assuming treatments were prescribed based on the diagnoses
INSERT INTO Tratamiento (descripcion, fecha_inicio, fecha_final, id_diagnostico)
VALUES
    ('Ningún tratamiento necesario', '2023-11-10', '2023-11-10', 1),
    ('Suplementación con hierro durante 30 días', '2023-11-12', '2023-12-12', 2),
    ('Cirugía programada y 6 semanas de recuperación', '2023-11-15', '2023-12-27', 3);

-- Inserts for Cirugia
-- Assuming surgeries are scheduled for the pet with a fracture
INSERT INTO Cirugia (fecha, cirugiahecha, precio, id_usuario, id_diagnostico)
VALUES
    ('2023-11-15 14:00:00', true, 300.00, 7, 3);

-- Inserts for Medicamentos
-- Assuming we have a list of common medications
INSERT INTO Medicamentos (nombre, tipo, fecha_cad)
VALUES
    ('Ibuprofeno', 'Antiinflamatorio', '2025-01-01'),
    ('Amoxicilina', 'Antibiótico', '2024-12-31'),
    ('Prednisolona', 'Corticosteroide', '2024-12-31');

-- Inserts for Tratamiento_Med
-- Assuming medications are assigned to the treatments
INSERT INTO Tratamiento_Med (id_usuario, id_med, id_trat)
VALUES
    (6, 1, 1),
    (7, 2, 2),
    (7, 3, 3);
