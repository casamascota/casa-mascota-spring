package com.casamascota.backendcasamascota.dao;

import com.casamascota.backendcasamascota.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OwnerDao extends JpaRepository<Owner, Long> {


}


