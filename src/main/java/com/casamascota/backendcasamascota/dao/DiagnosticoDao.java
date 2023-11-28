package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Diagnostico;

public interface DiagnosticoDao extends JpaRepository<Diagnostico, Long>{
    
}
