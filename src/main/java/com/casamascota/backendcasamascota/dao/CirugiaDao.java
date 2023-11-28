package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Cirugia;

public interface CirugiaDao extends JpaRepository<Cirugia, Long> {
    
}
