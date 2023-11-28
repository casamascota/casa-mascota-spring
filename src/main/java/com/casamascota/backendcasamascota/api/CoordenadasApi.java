package com.casamascota.backendcasamascota.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.CoordenadasBl;
import com.casamascota.backendcasamascota.entity.Coordenadas;

@RestController
@RequestMapping("/api/v1/coordenadas/")
public class CoordenadasApi {
    
    @Autowired
    private CoordenadasBl coordenadasBl;

    @PostMapping
    private ResponseEntity<Coordenadas> create(@RequestBody Coordenadas coordenadas){
        return ResponseEntity.ok(coordenadasBl.save(coordenadas));
    }

    @GetMapping
    private ResponseEntity<List<Coordenadas>> findAll(){
        return ResponseEntity.ok(coordenadasBl.findAll());
    }

    @GetMapping("/areaFaltaVacunar/")
    private ResponseEntity<List<Coordenadas>> findAllByAreaFaltaVacunarId(@RequestParam("id") Long id){
        return ResponseEntity.ok(coordenadasBl.findAllByAreaFaltaVacunarId(id));
    }

    @GetMapping("/areaVacunada/")
    private ResponseEntity<List<Coordenadas>> findAllByAreaVacunadaId(@RequestParam("id") Long id){
        return ResponseEntity.ok(coordenadasBl.findAllByAreaVacunadaId(id));
    }

    @PutMapping
    private ResponseEntity<Coordenadas> update(@RequestBody Coordenadas coordenadas){
        return ResponseEntity.ok(coordenadasBl.save(coordenadas));
    }

}
