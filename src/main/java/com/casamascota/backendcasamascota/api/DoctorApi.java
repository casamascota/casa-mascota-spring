package com.casamascota.backendcasamascota.api;

import com.casamascota.backendcasamascota.bl.DoctorBl;
import com.casamascota.backendcasamascota.dao.DoctorDao;
import com.casamascota.backendcasamascota.dto.ResponseDto;
import com.casamascota.backendcasamascota.entity.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/api/v1/doctores")
public class DoctorApi {
    private final Logger logger = LoggerFactory.getLogger(DoctorBl.class);
    @Autowired
    DoctorBl doctorBl;
    @Autowired
    public DoctorApi(DoctorBl doctorBl) {
        this.doctorBl = doctorBl;
    }





    @GetMapping("/")
    public List<Doctor> getAllDoctors() {
        try {
            //Obtener todos los doctores
            List<Doctor> doctorList = doctorBl.getAllDoctors();
        }catch (RuntimeException ex){
        //Devolver un error con codigo y el mensaje de ResponseDto
        logger.warn(ex.getMessage());
        return (List<Doctor>) new ResponseDto("Result-1000", ex.getMessage());

    }

        return doctorBl.getAllDoctors();
    }
        // Método para crear un nuevo doctor mediante una solicitud POST
        @PostMapping("/")
        public ResponseDto createDoctor(@RequestBody Doctor doctor) {
            try {
                // Lógica para crear un nuevo doctor
                doctorBl.createDoctor(doctor);
                return new ResponseDto("Result-2000", "Doctor creado exitosamente");
            } catch (RuntimeException ex) {
                logger.warn(ex.getMessage());
                return new ResponseDto("Result-1000", ex.getMessage());
            }
        }
    // Método para actualizar un doctor existente mediante una solicitud PUT
    @PutMapping("/{id}")
    public ResponseDto updateDoctor(@PathVariable Long id, @RequestBody Doctor updatedDoctor) {
        try {
            // Lógica para actualizar el doctor con el ID proporcionado
            doctorBl.updateDoctor(id, updatedDoctor);
            return new ResponseDto("Result-2000", "Doctor actualizado exitosamente");
        } catch (RuntimeException ex) {
            logger.warn(ex.getMessage());
            return new ResponseDto("Result-1000", ex.getMessage());
        }
    }
    // Método para eliminar un doctor mediante una solicitud DELETE
    @DeleteMapping("/{id}")
    public ResponseDto deleteDoctor(@PathVariable Long id) {
        try {
            // Lógica para eliminar el doctor con el ID proporcionado
            doctorBl.deleteDoctor(id);
            return new ResponseDto("Result-2000", "Doctor eliminado exitosamente");
        } catch (RuntimeException ex) {
            logger.warn(ex.getMessage());
            return new ResponseDto("Result-1000", ex.getMessage());
        }
    }


}
