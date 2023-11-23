package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.TipoDocumento;

public interface TipoDocumentoDao extends JpaRepository<TipoDocumento, Long> {
    
}
