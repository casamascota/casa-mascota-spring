package com.casamascota.backendcasamascota.dao;

import com.casamascota.backendcasamascota.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface PersonaDao extends JpaRepository<Persona, Long> {


}


