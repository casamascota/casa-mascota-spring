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
@Table(name="Refugios")
public class Refugios {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_refugio;
    private int cant_animal;
    private String nombre;
    private String direccion;
    private int personal;
    private int espa_tot;
    private String C_X;
    private String C_Y;
    
}
