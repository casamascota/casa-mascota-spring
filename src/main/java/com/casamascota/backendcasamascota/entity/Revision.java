package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
@Table(name = "Revision")
public class Revision {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_revision;
    private String descripcion;

    @OneToOne
    @JoinColumn(name = "id_cita")
    private CitaAgendada citaAgendada;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
}