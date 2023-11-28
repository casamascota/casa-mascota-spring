package com.casamascota.backendcasamascota.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.casamascota.backendcasamascota.entity.Medicamentos;

public interface MedicamentosDao extends JpaRepository<Medicamentos, Long> {
    
}
