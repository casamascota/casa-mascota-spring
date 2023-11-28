package com.casamascota.backendcasamascota.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.VeterinariasBl;
import com.casamascota.backendcasamascota.entity.Veterinarias;

@RestController
@RequestMapping("/api/v1/veterinarias/")
public class VeterinariasApi {
    
    @Autowired
    private VeterinariasBl veterinariasBl;

    @PostMapping
    private ResponseEntity<Veterinarias> create(@RequestBody Veterinarias veterinarias){
        return ResponseEntity.ok(veterinariasBl.save(veterinarias));
    }

    @GetMapping
    private ResponseEntity<List<Veterinarias>> findAll(){
        return ResponseEntity.ok(veterinariasBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Veterinarias> update(@RequestBody Veterinarias veterinarias){
        return ResponseEntity.ok(veterinariasBl.save(veterinarias));
    }
    
}
