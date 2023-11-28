package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Veterinarias;

public interface VeterinariasDao extends JpaRepository<Veterinarias, Long> {
    
}
