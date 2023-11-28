package com.casamascota.backendcasamascota.entity;

import java.sql.Date;

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
@Table(name="Cirugia")
public class Cirugia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cirugia;
    private Date fecha;
    private boolean cirugiahecha;
    private double precio;

    @ManyToOne
    @JoinColumn(name = "id_diagnostico")
    private Diagnostico diagnostico;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}
