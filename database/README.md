# Sistema de Gestión de Refugios y Veterinarias

## Descripción General

Este sistema está diseñado para manejar la información relacionada con los refugios de animales, las veterinarias y los servicios asociados en la ciudad de La Paz. Permite la gestión de mascotas, propietarios, citas médicas y más.

## Base de Datos

### Esquema de la Base de Datos

El esquema de la base de datos consiste en las siguientes tablas principales:

- `Persona`: Almacena información básica sobre las personas asociadas al sistema.
- `Usuario`: Contiene los datos de acceso y roles de los usuarios.
- `Mascota`: Registra los datos de las mascotas.
- `MascotasAdoptadas`: Lleva el registro de las adopciones.
- `TipoDocumento`: Define los tipos de documentos disponibles.
- `DocumentoAdopcion`: Almacena los documentos de adopción de mascotas.
- `Imagenes`: Guarda las imágenes relacionadas con las mascotas.
- `Servicio`: Lista los servicios ofrecidos por las veterinarias.
- `Cita_Agendada`: Registra las citas agendadas para servicios veterinarios.
- `Revision`: Almacena las revisiones médicas de las mascotas.
- `Diagnostico`: Guarda los diagnósticos resultantes de las revisiones.
- `Tratamiento`: Lleva el control de los tratamientos prescritos.
- `Cirugia`: Registra las cirugías realizadas a las mascotas.
- `Medicamentos`: Almacena información sobre los medicamentos.
- `Tratamiento_Med`: Asocia los medicamentos con los tratamientos y el personal médico.

### Diccionario de Datos

Para las tablas principales

#### Tabla `Persona`

| Campo        | Tipo      | Descripción             |
| ------------ | --------- | ----------------------- |
| `id_persona` | `serial`  | Identificador único     |
| `nombre`     | `varchar` | Nombre de la persona    |
| `apellido`   | `varchar` | Apellido de la persona  |
| `numero_tel` | `varchar` | Número telefónico       |
| `direccion`  | `varchar` | Dirección de residencia |

#### Tabla `Usuario`

| Campo             | Tipo      | Descripción                           |
| ----------------- | --------- | ------------------------------------- |
| `id_usuario`      | `serial`  | Identificador único del usuario       |
| `username`        | `varchar` | Nombre de usuario                     |
| `hashed_password` | `varchar` | Contraseña hasheada del usuario       |
| `rol`             | `varchar` | Rol del usuario (Owner, Doctor, etc.) |
| `id_persona`      | `integer` | Clave foránea a `Persona`             |
| `especialidad`    | `varchar` | Especialidad médica (opcional)        |

### Relaciones

Las relaciones entre las tablas se definen mediante claves foráneas y permiten mantener la integridad referencial del sistema. Por ejemplo:

- Cada `Usuario` está asociado a una `Persona`.
- `Mascota` está vinculada a un `Usuario` que es el propietario.

## Funcionalidades del Sistema

El sistema permite realizar las siguientes operaciones:

- Registro y manejo de usuarios (propietarios, personal médico).
- Gestión de mascotas y su información relevante.
- Registro y seguimiento de citas y tratamientos veterinarios.
- Proceso de adopción, incluyendo el seguimiento documental.

## Consideraciones de Seguridad

- Las contraseñas se almacenan en forma hasheada para proteger la información sensible de los usuarios.

## Escalabilidad

El sistema está diseñado para ser escalable y manejar un creciente volumen de datos y usuarios. Se recomienda:

- Monitorizar el rendimiento y realizar ajustes en la base de datos según sea necesario.
- Considerar el uso de técnicas de particionamiento y bases de datos distribuidas para manejar grandes volúmenes de datos.
- Considerar usar Auth0, Firebase autenticacion o algun otro servicio de autenticacion para manejar el login correctamente
