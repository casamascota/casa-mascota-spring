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
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.MascotasAdoptadasBl;
import com.casamascota.backendcasamascota.entity.MascotasAdoptadas;

@RestController
@RequestMapping("/api/v1/mascotasAdoptadas/")
public class MascotasAdoptadasApi {
    
    @Autowired
    private MascotasAdoptadasBl mascotasAdoptadasBl;

    @PostMapping
    private ResponseEntity<MascotasAdoptadas> create(@RequestBody MascotasAdoptadas mascota) {
        return ResponseEntity.ok(mascotasAdoptadasBl.save(mascota));
    }

    @GetMapping
    private ResponseEntity<List<MascotasAdoptadas>> findAll() {
        return ResponseEntity.ok(mascotasAdoptadasBl.findAll());
    }

    @PutMapping
    private ResponseEntity<MascotasAdoptadas> update(@RequestBody MascotasAdoptadas mascota) {
        return ResponseEntity.ok(mascotasAdoptadasBl.save(mascota));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById(Long mascotaId) {
        mascotasAdoptadasBl.deleteById(mascotaId);
        return ResponseEntity.ok(null);
    }
}
