package com.casamascota.backendcasamascota.dao;

import com.casamascota.backendcasamascota.entity.Enfermero;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EnfermeroDao extends JpaRepository<Enfermero, Long> {


}


