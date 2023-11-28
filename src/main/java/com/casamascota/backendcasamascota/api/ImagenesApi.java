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

import com.casamascota.backendcasamascota.bl.ImagenesBl;
import com.casamascota.backendcasamascota.entity.Imagenes;

@RestController
@RequestMapping("/api/v1/imagenes/")
public class ImagenesApi {
    
    @Autowired
    private ImagenesBl imagenesBl;

    @PostMapping
    private ResponseEntity<Imagenes> create(@RequestBody Imagenes imagenes) {
        return ResponseEntity.ok(imagenesBl.save(imagenes));
    }

    @GetMapping
    private ResponseEntity<List<Imagenes>> findAll() {
        return ResponseEntity.ok(imagenesBl.findAll());
    }

    @GetMapping("mascota/")
    private ResponseEntity<List<Imagenes>> findAllByMascotaId(@RequestParam("mascotaId") Long mascotaId) {
        return ResponseEntity.ok(imagenesBl.findAllByMascotaId(mascotaId));
    }

    @PutMapping
    private ResponseEntity<Imagenes> update(@RequestBody Imagenes imagenes) {
        return ResponseEntity.ok(imagenesBl.save(imagenes));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById(@RequestParam("imagenesId") Long imagenesId) {
        imagenesBl.deleteById(imagenesId);
        return ResponseEntity.ok(null);
    }
    
}