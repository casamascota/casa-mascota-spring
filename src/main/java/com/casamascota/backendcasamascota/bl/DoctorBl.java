package com.casamascota.backendcasamascota.bl;

import com.casamascota.backendcasamascota.dao.DoctorDao;
import com.casamascota.backendcasamascota.entity.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorBl {


    private DoctorDao doctorDao;

    @Autowired
    public DoctorBl(DoctorDao doctorDao) {
        this.doctorDao = doctorDao;
    }

    public List<Doctor> getAllDoctors() {
        return doctorDao.findAll();
    }
}
