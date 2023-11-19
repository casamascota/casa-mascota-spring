package com.casamascota.backendcasamascota.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.MascotaBl;
import com.casamascota.backendcasamascota.entity.Mascota;

@RestController
@RequestMapping("/api/v1/mascota/")
public class MascotaApi {
    
    @Autowired
    private MascotaBl mascotaBl;

    @PostMapping
    private ResponseEntity<Mascota> create(@RequestBody Mascota mascota) {
        return ResponseEntity.ok(mascotaBl.save(mascota));
    }

    @GetMapping
    private ResponseEntity<List<Mascota>> findAll() {
        return ResponseEntity.ok(mascotaBl.findAll());
    }

    @GetMapping("/user/{userId}")
    private ResponseEntity<List<Mascota>> findAllByUserId(@PathVariable("userId") Long userId) {
        return ResponseEntity.ok(mascotaBl.findAllByUserId(userId));
    }

    @GetMapping
    private ResponseEntity<Optional<Mascota>> findById(@RequestParam("mascotaId") Long mascotaId) {
        return ResponseEntity.ok(mascotaBl.findById(mascotaId));
    }

    @PutMapping
    private ResponseEntity<Mascota> update(@RequestBody Mascota mascota) {
        return ResponseEntity.ok(mascotaBl.save(mascota));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById(@RequestParam("mascotaId") Long mascotaId) {
        mascotaBl.deleteById(mascotaId);
        return ResponseEntity.ok(null);
    }
}
