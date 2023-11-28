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
@Table(name = "MascotasAdoptadas")
public class MascotasAdoptadas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_adoptadas;
    private Date fecha_adopcion;

    @ManyToOne
    @JoinColumn(name = "id_mascota")
    private Mascota mascota;
}
