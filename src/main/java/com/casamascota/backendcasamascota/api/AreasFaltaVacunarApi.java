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

import com.casamascota.backendcasamascota.bl.AreasFaltaVacunarBl;
import com.casamascota.backendcasamascota.entity.AreasFaltaVacunar;

@RestController
@RequestMapping("/api/v1/areasfaltavacunar/")
public class AreasFaltaVacunarApi {
    
    @Autowired
    private AreasFaltaVacunarBl areasFaltaVacunarBl;

    @PostMapping
    private ResponseEntity<AreasFaltaVacunar> create(@RequestBody AreasFaltaVacunar areasFaltaVacunar){
        return ResponseEntity.ok(areasFaltaVacunarBl.save(areasFaltaVacunar));
    }

    @GetMapping
    private ResponseEntity<List<AreasFaltaVacunar>> findAll(){
        return ResponseEntity.ok(areasFaltaVacunarBl.findAll());
    }

    @PutMapping
    private ResponseEntity<AreasFaltaVacunar> update(@RequestBody AreasFaltaVacunar areasFaltaVacunar){
        return ResponseEntity.ok(areasFaltaVacunarBl.save(areasFaltaVacunar));
    }

}
