package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Coordenadas;

public interface CoordenadasDao extends JpaRepository<Coordenadas, Long> {
    
}
