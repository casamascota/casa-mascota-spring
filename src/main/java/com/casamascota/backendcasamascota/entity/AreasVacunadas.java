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
@Table(name="AreasVacunadas")
public class AreasVacunadas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_areaVacunada;
    private int cant_vac;
    private int cant_duenos;
    private int masc_sin_hogar;
    private int cuant_vac;
    private int con_b;
    private String enfermedad;
    private String brote_enfer;
    private String reg_de_m;
    private Date fecha;
    private String personal_li;
    
}
