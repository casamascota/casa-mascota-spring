package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name="Coordenadas")
public class Coordenadas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_coordenada;
    private int orden;
    private double latitud;
    private double longitud;
    
    @ManyToOne
    @JoinColumn(name = "id_areasFaltaVacunar")
    private AreasFaltaVacunar areasFaltaVacunar;

    @ManyToOne
    @JoinColumn(name = "id_areasVacunadas")
    private AreasVacunadas areasVacunadas;
}
