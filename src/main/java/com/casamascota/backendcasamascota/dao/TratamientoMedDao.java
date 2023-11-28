package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.TratamientoMed;

public interface TratamientoMedDao extends JpaRepository<TratamientoMed, Long> {
    
}
