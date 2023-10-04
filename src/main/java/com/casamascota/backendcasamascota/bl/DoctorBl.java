package com.casamascota.backendcasamascota.bl;

import com.casamascota.backendcasamascota.dao.DoctorDao;
import com.casamascota.backendcasamascota.dao.PersonaDao;
import com.casamascota.backendcasamascota.entity.Doctor;
import com.casamascota.backendcasamascota.entity.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorBl {

    private DoctorDao doctorDao;
    private PersonaDao personaDao;

    @Autowired
    public DoctorBl(DoctorDao doctorDao, PersonaDao personaDao) {
        this.doctorDao = doctorDao;
        this.personaDao = personaDao;
    }

    public List<Doctor> getAllDoctors() {
        return doctorDao.findAll();
    }


    //Sin usar DTOs
    public void updateDoctor(Long id, Doctor updatedDoctor) {
        // Verificar si el doctor con el ID proporcionado existe en la base de datos
        Doctor existingDoctor = doctorDao.findById(id).orElse(null);
        if (existingDoctor != null) {
            // Actualizar los campos del doctor existente con los valores proporcionados en updatedDoctor
            existingDoctor.setUsername(updatedDoctor.getUsername());
            existingDoctor.setPassword(updatedDoctor.getPassword());
            existingDoctor.setEspecialidad(updatedDoctor.getEspecialidad());

            // Actualizar la entidad Persona asociada al Doctor
            Persona persona = existingDoctor.getPersona();
            persona.setNombre(updatedDoctor.getPersona().getNombre());
            persona.setApellido(updatedDoctor.getPersona().getApellido());
            persona.setNumeroTel(updatedDoctor.getPersona().getNumeroTel());
            persona.setDireccion(updatedDoctor.getPersona().getDireccion());

            doctorDao.save(existingDoctor);
        } else {
            // Lanzar una excepción o manejar el caso de que el doctor no exista
            throw new RuntimeException("El doctor con ID " + id + " no fue encontrado.");
        }
    }

    public void deleteDoctor(Long id) {
        // Verificar si el doctor con el ID proporcionado existe en la base de datos
        Doctor existingDoctor = doctorDao.findById(id).orElse(null);
        if (existingDoctor != null) {
            // Verificar si existen citas agendadas para este doctor
            /*
            //Este metodo se debe usar cuando exista citas agendadasDao, etc
            List<CitaAgendada> citasAgendadas = citaAgendadaDao.findByDoctor(existingDoctor);
            if (!citasAgendadas.isEmpty()) {
                // Si hay citas agendadas, lanzar una excepción
                throw new RuntimeException("Debe eliminar o cambiar de doctor en las citas agendadas antes de borrar este doctor.");
            }
            */


            // Si no hay citas agendadas, eliminar el doctor de la base de datos
            doctorDao.delete(existingDoctor);
        } else {
            // Lanzar una excepción o manejar el caso de que el doctor no exista
            throw new RuntimeException("El doctor con ID " + id + " no fue encontrado.");
        }
    }

    public void createDoctor(Doctor doctor) {
        // Puedes realizar validaciones o lógica adicional antes de crear el nuevo doctor
        // Por ejemplo, verificar si ya existe un doctor con el mismo nombre de usuario o ID
        // Luego, guardar el nuevo doctor en la base de datos

        // Antes de guardar el Doctor, asegúrate de crear y guardar una entidad Persona asociada
        Persona persona = doctor.getPersona();
        personaDao.save(persona);

        // Asignar la entidad Persona al Doctor
        doctor.setPersona(persona);

        doctorDao.save(doctor);
    }
}

