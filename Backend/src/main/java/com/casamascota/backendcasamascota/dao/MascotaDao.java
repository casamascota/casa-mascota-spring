package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Mascota;

public interface MascotaDao extends JpaRepository<Mascota, Long>{
    
}
