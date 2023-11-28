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
@Table(name="TratamientoMed")
public class TratamientoMed {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_trat_med;

    @ManyToOne
    @JoinColumn(name = "id_med")
    private Medicamentos medicamentos;

    @ManyToOne
    @JoinColumn(name = "id_trat")
    private Tratamiento tratamiento;
}
