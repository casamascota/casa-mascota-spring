-- Table: Persona
CREATE TABLE Persona (
    id_persona serial PRIMARY KEY,
    nombre varchar(100) NOT NULL,
    apellido varchar(100) NOT NULL,
    numero_tel varchar(50) NOT NULL,
    direccion varchar(250) NOT NULL
);

-- Table: Usuario (reemplaza Owner, Estilista, Doctor, Enfermero con una columna de rol)
-- En teoria aqui manejamos los roles solo con texto
-- PD: check es para SOLO usar esos roles, no se aceptan otros roles mas que los que estan ahi
CREATE TABLE Usuario (
    id_usuario serial PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    hashed_password varchar(255) NOT NULL,
    rol varchar(50) CHECK (rol IN ('Owner', 'Estilista', 'Doctor', 'Enfermero')) NOT NULL,
    id_persona integer NOT NULL,
    especialidad varchar(250), -- NULLABLE, solo para doctores
    CONSTRAINT fk_usuario_persona FOREIGN KEY (id_persona) REFERENCES Persona (id_persona)
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



