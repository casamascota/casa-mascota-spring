package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Imagenes;

public interface ImagenesDao extends JpaRepository<Imagenes, Long> {
    
}
