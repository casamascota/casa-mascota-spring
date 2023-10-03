-- Table: Persona
CREATE TABLE Persona (
                         id_persona serial PRIMARY KEY,
                         nombre varchar(100) NOT NULL,
                         apellido varchar(100) NOT NULL,
                         numero_tel varchar(50) NOT NULL,
                         direccion varchar(250) NOT NULL
);

-- Table: Owner
CREATE TABLE Owner (
                       id_owner serial PRIMARY KEY,
                       username varchar(50) NOT NULL,
                       password varchar(50) NOT NULL,
                       Persona_id_persona integer NOT NULL,
                       CONSTRAINT Owner_Persona FOREIGN KEY (Persona_id_persona)
                           REFERENCES Persona (id_persona)
);

-- Table: Estilista
CREATE TABLE Estilista (
                           id_estilista serial PRIMARY KEY,
                           username varchar(50) NOT NULL,
                           password varchar(50) NOT NULL,
                           Persona_id_persona integer NOT NULL,
                           CONSTRAINT Estilista_Persona FOREIGN KEY (Persona_id_persona)
                               REFERENCES Persona (id_persona)
);

-- Table: Doctor
CREATE TABLE Doctor (
                        id_doctor serial PRIMARY KEY,
                        username varchar(50) NOT NULL,
                        password varchar(50) NOT NULL,
                        especialidad varchar(250) NOT NULL,
                        Persona_id_persona integer NOT NULL,
                        CONSTRAINT Doctor_Persona FOREIGN KEY (Persona_id_persona)
                            REFERENCES Persona (id_persona)
);

-- Table: Enfermero
CREATE TABLE Enfermero (
                           id_enfermero serial PRIMARY KEY,
                           username varchar(50) NOT NULL,
                           password varchar(50) NOT NULL,
                           Persona_id_persona integer NOT NULL,
                           CONSTRAINT Enfermero_Persona FOREIGN KEY (Persona_id_persona)
                               REFERENCES Persona (id_persona)
);

-- Table: Mascota
CREATE TABLE Mascota (
                         id_mascota serial PRIMARY KEY,
                         nombre varchar(60) NOT NULL,
                         raza varchar(40) NOT NULL,
                         edad integer NOT NULL,
                         genero varchar(50) NOT NULL,
                         fecha_nacimiento timestamp NOT NULL,
                         peso double precision NOT NULL,
                         id_owner integer NOT NULL,
                         especie varchar(30) NOT NULL,
                         enadopcion boolean NOT NULL,
                         CONSTRAINT Mascota_Owner FOREIGN KEY (id_owner)
                             REFERENCES Owner (id_owner)
);

-- Table: MascotasAdoptadas
CREATE TABLE MascotasAdoptadas (
                                   id_adoptadas serial PRIMARY KEY,
                                   Owner_id_owner integer NOT NULL,
                                   Mascota_id_mascota integer NOT NULL,
                                   fecha_adopcion date NOT NULL,
                                   CONSTRAINT MascotasAdoptadas_Owner FOREIGN KEY (Owner_id_owner)
                                       REFERENCES Owner (id_owner),
                                   CONSTRAINT MascotasAdoptadas_Mascota FOREIGN KEY (Mascota_id_mascota)
                                       REFERENCES Mascota (id_mascota)
);

-- Table: TipoDocumento
CREATE TABLE TipoDocumento (
                               id_tipoDoc serial PRIMARY KEY,
                               tipo varchar(100) NOT NULL
);

-- Table: DocumentoAdopcion
CREATE TABLE DocumentoAdopcion (
                                   id_comprobante serial PRIMARY KEY,
                                   documento varchar(250) NOT NULL,
                                   MascotasAdoptadas_id_adoptadas integer NOT NULL,
                                   TipoDocumento_id_tipoDoc integer NOT NULL,
                                   CONSTRAINT DocumentoAdopcion_MascotasAdoptadas FOREIGN KEY (MascotasAdoptadas_id_adoptadas)
                                       REFERENCES MascotasAdoptadas (id_adoptadas),
                                   CONSTRAINT DocumentoAdopcion_TipoDocumento FOREIGN KEY (TipoDocumento_id_tipoDoc)
                                       REFERENCES TipoDocumento (id_tipoDoc)
);

-- Table: Imagenes
CREATE TABLE Imagenes (
                          id_Imagen serial PRIMARY KEY,
                          imagen varchar(250) NOT NULL,
                          Mascota_id_mascota integer NOT NULL,
                          CONSTRAINT Imagenes_Mascota FOREIGN KEY (Mascota_id_mascota)
                              REFERENCES Mascota (id_mascota)
);

-- Table: Servicio
CREATE TABLE Servicio (
                          id_servicio serial PRIMARY KEY,
                          tipo varchar(50) NOT NULL,
                          precio double precision NOT NULL,
                          descripcion varchar(250) NOT NULL
);

-- Table: Cita_Agendada
CREATE TABLE Cita_Agendada (
                               id_cita serial PRIMARY KEY,
                               fecha_reserva timestamp NOT NULL,
                               fecha_cita timestamp NOT NULL,
                               id_servicio integer NOT NULL,
                               id_mascota integer NOT NULL,
                               Doctor_id_doctor integer NOT NULL,
                               Estilista_id_estilista integer NOT NULL,
                               CONSTRAINT Cita_Agendada_Servicio FOREIGN KEY (id_servicio)
                                   REFERENCES Servicio (id_servicio),
                               CONSTRAINT Cita_Agendada_Mascota FOREIGN KEY (id_mascota)
                                   REFERENCES Mascota (id_mascota),
                               CONSTRAINT Cita_Agendada_Doctor FOREIGN KEY (Doctor_id_doctor)
                                   REFERENCES Doctor (id_doctor),
                               CONSTRAINT Cita_Agendada_Estilista FOREIGN KEY (Estilista_id_estilista)
                                   REFERENCES Estilista (id_estilista)
);

-- Table: revision
CREATE TABLE revision (
                          id_revision serial PRIMARY KEY,
                          descripcion varchar(2000) NOT NULL,
                          id_cita integer NOT NULL,
                          CONSTRAINT Revision_Cita_Agendada FOREIGN KEY (id_cita)
                              REFERENCES Cita_Agendada (id_cita)
);

-- Table: diagnostico
CREATE TABLE diagnostico (
                             id_diagnostico serial PRIMARY KEY,
                             diagnostico varchar(100) NOT NULL,
                             trat_requerido integer NOT NULL,
                             id_revision integer NOT NULL,
                             CONSTRAINT Diagnostico_revision FOREIGN KEY (id_revision)
                                 REFERENCES revision (id_revision)
);

-- Table: Tratamiento
CREATE TABLE Tratamiento (
                             id_trat serial PRIMARY KEY,
                             descripcion varchar(2000) NOT NULL,
                             fecha_inicio timestamp NOT NULL,
                             fecha_final timestamp NOT NULL,
                             id_diagnostico integer NOT NULL,
                             CONSTRAINT trat_diagnostico FOREIGN KEY (id_diagnostico)
                                 REFERENCES diagnostico (id_diagnostico)
);

-- Table: Cirugia
CREATE TABLE Cirugia (
                         id_cirugia serial PRIMARY KEY,
                         fecha timestamp NOT NULL,
                         cirugiahecha boolean NOT NULL,
                         precio decimal(5,2) NOT NULL,
                         id_doctor integer NOT NULL,
                         id_enfermero integer NOT NULL,
                         id_diagnostico integer NOT NULL,
                         CONSTRAINT Cirugia_Doctor FOREIGN KEY (id_doctor)
                             REFERENCES Doctor (id_doctor),
                         CONSTRAINT Cirugia_Enfermero FOREIGN KEY (id_enfermero)
                             REFERENCES Enfermero (id_enfermero),
                         CONSTRAINT Cirugia_diagnostico FOREIGN KEY (id_diagnostico)
                             REFERENCES diagnostico (id_diagnostico)
);

-- Table: Medicamentos
CREATE TABLE Medicamentos (
                              id_med serial PRIMARY KEY,
                              nombre varchar(50) NOT NULL,
                              tipo varchar(50) NOT NULL,
                              fecha_cad timestamp NOT NULL
);

-- Table: Tratamiento_Med
CREATE TABLE Tratamiento_Med (
                                 id_trat_med serial PRIMARY KEY,
                                 id_doctor integer NOT NULL,
                                 id_med integer NOT NULL,
                                 id_trat integer NOT NULL,
                                 CONSTRAINT Tratamiento_Med_Doctor FOREIGN KEY (id_doctor)
                                     REFERENCES Doctor (id_doctor),
                                 CONSTRAINT Tratamiento_Med_Medicamentos FOREIGN KEY (id_med)
                                     REFERENCES Medicamentos (id_med),
                                 CONSTRAINT Tratamiento_Med_Tratamiento FOREIGN KEY (id_trat)
                                     REFERENCES Tratamiento (id_trat)
);

INSERT INTO Persona (nombre, apellido, numero_tel, direccion)
VALUES
    ('Juan', 'Perez', '555-1234', '123 Calle Principal'),
    ('Maria', 'Gomez', '555-5678', '456 Avenida Secundaria'),
    ('Carlos', 'Lopez', '555-9876', '789 Calle Central'),
    ('Daniel', 'Pendones', '555-1234', '123 Calle Principal'),
    ('Cristo', 'Yocreoenti', '555-5678', '456 Avenida Secundaria'),
    ('Natalia', 'Lopez', '555-9876', '789 Calle Central'),
    ('Sergio', 'Wachallar', '555-1234', '123 Calle Principal'),
    ('Grace', 'Gomez', '555-5678', '456 Avenida Secundaria'),
    ('Camila', 'Urumpa', '555-9876', '789 Calle Central'),
    ('Eugenio', 'Casas', '555-1234', '123 Calle Principal'),
    ('Armando', 'Problemas', '555-5678', '456 Avenida Secundaria'),
    ('Chae', 'Hoko', '555-9876', '789 Calle Central');

INSERT INTO Owner (username, password, Persona_id_persona)
VALUES
    ('owner1', 'password1', 1),
    ('owner2', 'password2', 2),
    ('owner3', 'password3', 3);

INSERT INTO Mascota (nombre, raza, edad, genero, fecha_nacimiento, peso, id_owner, especie, enadopcion)
VALUES
    ('Fido', 'Labrador', 3, 'Macho', '2020-01-15', 25.5, 1, 'Perro', false),
    ('Whiskers', 'Siamese', 2, 'Hembra', '2021-05-10', 8.0, 2, 'Gato', true),
    ('Rocky', 'Bulldog', 4, 'Macho', '2019-03-20', 30.0, 3, 'Perro', false);
INSERT INTO Estilista (username, password, Persona_id_persona)
VALUES
    ('estilista1', 'password1', 4),
    ('estilista2', 'password2', 5),
    ('estilista3', 'password3', 6);
INSERT INTO Doctor (username, password, especialidad, Persona_id_persona)
VALUES
    ('doctor1', 'password1', 'Cardiología', 7),
    ('doctor2', 'password2', 'Pediatría', 8),
    ('doctor3', 'password3', 'Dermatología', 9);
INSERT INTO Enfermero (username, password, Persona_id_persona)
VALUES
    ('enfermero1', 'password1', 10),
    ('enfermero2', 'password2', 11),
    ('enfermero3', 'password3', 12);
INSERT INTO TipoDocumento (tipo)
VALUES
    ('DNI'),
    ('Pasaporte'),
    ('Carnet de conducir');
INSERT INTO Servicio (tipo, precio, descripcion)
VALUES
    ('Corte de pelo', 25.99, 'Corte de pelo para mascotas'),
    ('Consulta médica', 45.50, 'Consulta médica para mascotas'),
    ('Vacunación', 15.00, 'Vacunación para mascotas');

INSERT INTO Cita_Agendada (fecha_reserva, fecha_cita, id_servicio, id_mascota, Doctor_id_doctor, Estilista_id_estilista)
VALUES
    ('2023-11-05 10:00:00', '2023-11-10 15:30:00', 1, 1, 1, 4),
    ('2023-11-06 09:15:00', '2023-11-12 14:00:00', 2, 2, 2, 5),
    ('2023-11-07 11:30:00', '2023-11-15 16:45:00', 3, 3, 3, 6);

INSERT INTO revision (descripcion, id_cita)
VALUES
    ('Revisión de rutina', 4),
    ('Examen de sangre', 5),
    ('Radiografía', 6);
INSERT INTO diagnostico (diagnostico, trat_requerido, id_revision)
VALUES
    ('Saludable', 0, 4),
    ('Deficiencia de hierro', 2, 5),
    ('Fractura de hueso', 4, 6);
INSERT INTO Tratamiento (descripcion, fecha_inicio, fecha_final, id_diagnostico)
VALUES
    ('Descanso y suplementos', '2023-11-11 00:00:00', '2023-11-21 00:00:00', 4),
    ('Suplementos de hierro', '2023-11-13 00:00:00', '2023-11-23 00:00:00', 5),
    ('Cirugía y reposo', '2023-11-17 00:00:00', '2023-11-27 00:00:00', 6);
INSERT INTO Cirugia (fecha, cirugiahecha, precio, id_doctor, id_enfermero, id_diagnostico)
VALUES
    ('2023-11-18 14:00:00', true, 500.00, 1, 4, 4),
    ('2023-11-20 15:30:00', true, 600.00, 2, 5, 5),
    ('2023-11-25 12:45:00', false, 0.00, 3, 6, 6);
INSERT INTO Medicamentos (nombre, tipo, fecha_cad)
VALUES
    ('Ibuprofeno', 'Antiinflamatorio', '2024-06-01 00:00:00'),
    ('Amoxicilina', 'Antibiótico', '2023-12-31 00:00:00'),
    ('Vitamina C', 'Suplemento', '2024-04-15 00:00:00');
INSERT INTO Tratamiento_Med (id_doctor, id_med, id_trat)
VALUES
    (1, 1, 4),
    (2, 2, 5),
    (3, 3, 6);
