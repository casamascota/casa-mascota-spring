package com.casamascota.backendcasamascota.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.PersonaBl;
import com.casamascota.backendcasamascota.entity.Persona;

@RestController
@RequestMapping("/api/v1/persona/")
public class PersonaApi {
    
    @Autowired
    private PersonaBl personaBl;

    @PostMapping
    private ResponseEntity<Persona> create(Persona persona) {
        return ResponseEntity.ok(personaBl.save(persona));
    }

    @GetMapping("/{personaId}")
    private ResponseEntity<Optional<Persona>> findById(@PathVariable("personaId") Long personaId) {
        return ResponseEntity.ok(personaBl.findById(personaId));
    }
    
}
