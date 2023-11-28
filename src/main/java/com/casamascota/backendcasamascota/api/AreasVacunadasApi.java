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

import com.casamascota.backendcasamascota.bl.AreasVacunadasBl;
import com.casamascota.backendcasamascota.entity.AreasVacunadas;

@RestController
@RequestMapping("/api/v1/areasvacunadas/")
public class AreasVacunadasApi {
    
    @Autowired
    private AreasVacunadasBl areasVacunadasBl;

    @PostMapping
    private ResponseEntity<AreasVacunadas> create(@RequestBody AreasVacunadas areasVacunadas){
        return ResponseEntity.ok(areasVacunadasBl.save(areasVacunadas));
    }

    @GetMapping
    private ResponseEntity<List<AreasVacunadas>> findAll(){
        return ResponseEntity.ok(areasVacunadasBl.findAll());
    }

    @PutMapping
    private ResponseEntity<AreasVacunadas> update(@RequestBody AreasVacunadas areasVacunadas){
        return ResponseEntity.ok(areasVacunadasBl.save(areasVacunadas));
    }

}
