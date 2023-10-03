package com.casamascota.backendcasamascota.dao;

import com.casamascota.backendcasamascota.entity.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


@Repository
public interface DoctorDao extends JpaRepository<Doctor, Long> {


}


