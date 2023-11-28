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

import com.casamascota.backendcasamascota.bl.TratamientoMedBl;
import com.casamascota.backendcasamascota.entity.TratamientoMed;

@RestController
@RequestMapping("/api/v1/tratamientoMed/")
public class TratamientoMedApi {
    
    @Autowired
    private TratamientoMedBl tratamientoMedBl;

    @PostMapping
    private ResponseEntity<TratamientoMed> create(@RequestBody TratamientoMed tratamientoMed){
        return ResponseEntity.ok(tratamientoMedBl.save(tratamientoMed));
    }

    @GetMapping
    private ResponseEntity<List<TratamientoMed>> findAll() {
        return ResponseEntity.ok(tratamientoMedBl.findAll());
    }

    @PutMapping
    private ResponseEntity<TratamientoMed> update(@RequestBody TratamientoMed tratamientoMed){
        return ResponseEntity.ok(tratamientoMedBl.save(tratamientoMed));
    }

    @DeleteMapping
    private ResponseEntity<Void> delete(@RequestParam("tratamientoMedId") Long tratamientoMedId){
        tratamientoMedBl.deleteById(tratamientoMedId);
        return ResponseEntity.ok().build();
    }
}
