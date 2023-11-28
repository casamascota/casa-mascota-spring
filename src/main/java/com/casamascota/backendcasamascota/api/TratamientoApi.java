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

import com.casamascota.backendcasamascota.bl.TratamientoBl;
import com.casamascota.backendcasamascota.entity.Tratamiento;

@RestController
@RequestMapping("/api/v1/tratamiento/")
public class TratamientoApi {
    
    @Autowired
    private TratamientoBl tratamientoBl;

    @PostMapping
    private ResponseEntity<Tratamiento> create(@RequestBody Tratamiento tratamiento){
        return ResponseEntity.ok(tratamientoBl.save(tratamiento));
    }

    @GetMapping
    private ResponseEntity<List<Tratamiento>> findAll(){
        return ResponseEntity.ok(tratamientoBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Tratamiento> update(@RequestBody Tratamiento tratamiento){
        return ResponseEntity.ok(tratamientoBl.save(tratamiento));
    }

    @DeleteMapping
    private ResponseEntity<Void> delete(@RequestParam("tratamientoId") Long tratamientoId){
        tratamientoBl.deleteById(tratamientoId);
        return ResponseEntity.ok().build();
    }
}
