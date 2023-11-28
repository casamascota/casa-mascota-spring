package com.casamascota.backendcasamascota.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.PersonaBl;
import com.casamascota.backendcasamascota.entity.Persona;

@RestController
@RequestMapping("/api/v1/")
public class PersonaApi {
    
    @Autowired
    private PersonaBl personaBl;

    @PostMapping("persona/")
    private ResponseEntity<Persona> create(@RequestBody Persona persona) {
        return ResponseEntity.ok(personaBl.save(persona));
    }

    @GetMapping("persona/")
    private ResponseEntity<Optional<Persona>> findById(@RequestParam("personaId") Long personaId) {
        return ResponseEntity.ok(personaBl.findById(personaId));
    }
    @GetMapping("personas/")
    public ResponseEntity<List<Persona>> getAllPersonas() {
        List<Persona> personas = personaBl.findAll();
        return ResponseEntity.ok(personas);
    }
    
}
