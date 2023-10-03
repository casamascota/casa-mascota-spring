package com.casamascota.backendcasamascota.dao;

import com.casamascota.backendcasamascota.entity.Estilista;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EstilistaDao extends JpaRepository<Estilista, Long> {


}


