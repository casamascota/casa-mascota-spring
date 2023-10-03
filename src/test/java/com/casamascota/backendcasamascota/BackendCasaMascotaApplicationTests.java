package com.casamascota.backendcasamascota;

import com.casamascota.backendcasamascota.dao.DoctorDao;
import com.casamascota.backendcasamascota.entity.Doctor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest
class BackendCasaMascotaApplicationTests {

	@Autowired
	DoctorDao doctorDao;

	@Test
	void contextLoads() {
		List<Doctor> DoctorList = doctorDao.findAll();
		for (Doctor u : DoctorList){
			System.out.println(u.getUsername());
		}
		assertNotEquals(0,DoctorList.size(),
				"No existen doctores");
	}

}
