package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_doctor")
    private Long idDoctor;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "especialidad")
    private String especialidad;

    @ManyToOne
    @JoinColumn(name = "Persona_id_persona")
    private Persona persona;

    public Long getIdDoctor() {
        return idDoctor;
    }

    public void setIdDoctor(Long idDoctor) {
        this.idDoctor = idDoctor;
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

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    public Doctor() {
    }

    public Doctor(Long idDoctor, String username, String password, String especialidad, Persona persona) {
        this.idDoctor = idDoctor;
        this.username = username;
        this.password = password;
        this.especialidad = especialidad;
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "idDoctor=" + idDoctor +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", especialidad='" + especialidad + '\'' +
                ", persona=" + persona +
                '}';
    }
}
