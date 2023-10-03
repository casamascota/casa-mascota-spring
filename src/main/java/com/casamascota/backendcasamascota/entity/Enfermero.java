package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Enfermero")
public class Enfermero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_enfermero")
    private Long idEnfermero;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "Persona_id_persona")
    private Persona persona;

    public Long getIdEnfermero() {
        return idEnfermero;
    }

    public void setIdEnfermero(Long idEnfermero) {
        this.idEnfermero = idEnfermero;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Enfermero() {
    }

    public Enfermero(Long idEnfermero, String username, String password, Persona persona) {
        this.idEnfermero = idEnfermero;
        this.username = username;
        this.password = password;
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "Enfermero{" +
                "idEnfermero=" + idEnfermero +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", persona=" + persona +
                '}';
    }
}
