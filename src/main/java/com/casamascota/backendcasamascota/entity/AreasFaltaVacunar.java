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
@Table(name="AreasFaltaVacunar")
public class AreasFaltaVacunar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_areaFaltaVacunar;
    private int cant_duenos;
    private int cant_mascot;
    private int dosis_prog;
    private String brote_enfer;
    private String enfermedad;
    private String refgis_mordida;
    private Date fecha_prog;
    private int personal;
    
}
