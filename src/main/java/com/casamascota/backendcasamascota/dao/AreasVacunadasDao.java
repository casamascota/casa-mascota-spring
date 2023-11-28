package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.AreasVacunadas;

public interface AreasVacunadasDao extends JpaRepository<AreasVacunadas, Long> {
    
}
