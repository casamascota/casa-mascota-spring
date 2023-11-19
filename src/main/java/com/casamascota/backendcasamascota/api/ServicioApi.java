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

import com.casamascota.backendcasamascota.bl.ServicioBl;
import com.casamascota.backendcasamascota.entity.Servicio;

@RestController
@RequestMapping("/api/v1/servicio/")
public class ServicioApi {
    
    @Autowired
    private ServicioBl servicioBl;

    @PostMapping
    private ResponseEntity<Servicio> create(@RequestBody Servicio servicio) {
        return ResponseEntity.ok(servicioBl.save(servicio));
    }

    @GetMapping
    private ResponseEntity<List<Servicio>> findAll() {
        return ResponseEntity.ok(servicioBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Servicio> update (@RequestBody Servicio servicio) {
        return ResponseEntity.ok(servicioBl.save(servicio));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById (@RequestParam("servicioId") Long servicioId) {
        servicioBl.deleteById(servicioId);
        return ResponseEntity.ok(null);
    }
}
