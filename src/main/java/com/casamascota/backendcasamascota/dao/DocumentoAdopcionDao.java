package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.DocumentoAdopcion;

public interface DocumentoAdopcionDao extends JpaRepository<DocumentoAdopcion, Long> {
    
}
