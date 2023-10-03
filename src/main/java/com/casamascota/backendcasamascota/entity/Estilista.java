package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Estilista")
public class Estilista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estilista")
    private Long idEstilista;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "Persona_id_persona")
    private Persona persona;

    public Long getIdEstilista() {
        return idEstilista;
    }

    public void setIdEstilista(Long idEstilista) {
        this.idEstilista = idEstilista;
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

    public Estilista() {
    }

    public Estilista(Long idEstilista, String username, String password, Persona persona) {
        this.idEstilista = idEstilista;
        this.username = username;
        this.password = password;
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "Estilista{" +
                "idEstilista=" + idEstilista +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", persona=" + persona +
                '}';
    }
}
