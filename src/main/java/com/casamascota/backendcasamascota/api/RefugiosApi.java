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

import com.casamascota.backendcasamascota.bl.RefugiosBl;
import com.casamascota.backendcasamascota.entity.Refugios;

@RestController
@RequestMapping("/api/v1/refugios/")
public class RefugiosApi {
    
    @Autowired
    private RefugiosBl refugiosBl;

    @PostMapping
    private ResponseEntity<Refugios> create(@RequestBody Refugios refugios){
        return ResponseEntity.ok(refugiosBl.save(refugios));
    }

    @GetMapping
    private ResponseEntity<List<Refugios>> findAll(){
        return ResponseEntity.ok(refugiosBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Refugios> update(@RequestBody Refugios refugios){
        return ResponseEntity.ok(refugiosBl.save(refugios));
    }
    
}
