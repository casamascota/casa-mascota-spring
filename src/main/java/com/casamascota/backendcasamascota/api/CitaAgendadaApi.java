package com.casamascota.backendcasamascota.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.CitaAgendadaBl;
import com.casamascota.backendcasamascota.entity.CitaAgendada;

@RestController
@RequestMapping("/api/v1/citaAgendada/")
public class CitaAgendadaApi {
    
    @Autowired
    private CitaAgendadaBl citaAgendadaBl;

    @PostMapping
    private ResponseEntity<CitaAgendada> create(@RequestBody CitaAgendada citaAgendada) {
        return ResponseEntity.ok(citaAgendadaBl.save(citaAgendada));
    }

    @GetMapping
    private ResponseEntity<List<CitaAgendada>> findAll() {
        return ResponseEntity.ok(citaAgendadaBl.findAll());
    }

    @PutMapping
    private ResponseEntity<CitaAgendada> update(@RequestBody CitaAgendada citaAgendada) {
        return ResponseEntity.ok(citaAgendadaBl.save(citaAgendada));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById(@RequestParam("citaAgendadaId") Long citaAgendadaId) {
        citaAgendadaBl.deleteById(citaAgendadaId);
        return ResponseEntity.ok(null);
    }
}
