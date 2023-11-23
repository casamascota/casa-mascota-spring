package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Servicio;

public interface ServicioDao extends JpaRepository<Servicio, Long>{
    
}
