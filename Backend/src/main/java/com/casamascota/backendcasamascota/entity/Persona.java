package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Persona")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_persona;
    private String nombre;
    private String apellido;
    private String numero_tel;
    private String direccion;

    @Override
    public String toString() {
        return "Persona{" +
                "idPersona=" + id_persona +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", numeroTel='" + numero_tel + '\'' +
                ", direccion='" + direccion + '\'' +
                '}';
    }
}
