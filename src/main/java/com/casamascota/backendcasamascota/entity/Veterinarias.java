package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Veterinarias")
public class Veterinarias {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_veterinaria;
    private int mascotas_at;
    private int cant_duenos;
    private int cant_person;
    private String nombre;
    private String direccion;
    private String C_X;
    private String C_Y;

}
