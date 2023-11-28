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

import com.casamascota.backendcasamascota.bl.DiagnosticoBl;
import com.casamascota.backendcasamascota.entity.Diagnostico;

@RestController
@RequestMapping("/api/v1/diagnostico/")
public class DiagnosticoApi {
    
    @Autowired
    private DiagnosticoBl diagnosticoBl;

    @PostMapping
    private ResponseEntity<Diagnostico> create(@RequestBody Diagnostico diagnostico){
        return ResponseEntity.ok(diagnosticoBl.save(diagnostico));
    }

    @GetMapping
    private ResponseEntity<List<Diagnostico>> findAll(){
        return ResponseEntity.ok(diagnosticoBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Diagnostico> update(@RequestBody Diagnostico diagnostico){
        return ResponseEntity.ok(diagnosticoBl.save(diagnostico));
    }

    @DeleteMapping
    private ResponseEntity<Void> delete(@RequestParam("diagnosticoId") Long diagnosticoId){
        diagnosticoBl.deleteById(diagnosticoId);
        return ResponseEntity.ok().build();
    }

}
