package com.casamascota.backendcasamascota.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Owner")
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_owner")
    private Long idOwner;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "Persona_id_persona")
    private Persona persona;

    public Long getIdOwner() {
        return idOwner;
    }

    public void setIdOwner(Long idOwner) {
        this.idOwner = idOwner;
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

    public Owner() {
    }

    public Owner(Long idOwner, String username, String password, Persona persona) {
        this.idOwner = idOwner;
        this.username = username;
        this.password = password;
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "idOwner=" + idOwner +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", persona=" + persona +
                '}';
    }
}
