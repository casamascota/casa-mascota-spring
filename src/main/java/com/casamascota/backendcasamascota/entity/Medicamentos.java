package com.casamascota.backendcasamascota.entity;

import java.sql.Date;

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
@Table(name="Medicamentos")
public class Medicamentos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_med;
    private String nombre;
    private String tipo;
    private Date fecha_cad;

}
