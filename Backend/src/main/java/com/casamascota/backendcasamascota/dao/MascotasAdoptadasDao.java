package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.MascotasAdoptadas;

public interface MascotasAdoptadasDao extends JpaRepository<MascotasAdoptadas, Long>{
    
}
