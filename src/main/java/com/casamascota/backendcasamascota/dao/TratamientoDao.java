package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Tratamiento;

public interface TratamientoDao extends JpaRepository<Tratamiento, Long> {
    
}
