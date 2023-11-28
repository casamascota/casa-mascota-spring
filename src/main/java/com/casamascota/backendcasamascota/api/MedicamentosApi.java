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

import com.casamascota.backendcasamascota.bl.MedicamentosBl;
import com.casamascota.backendcasamascota.entity.Medicamentos;

@RestController
@RequestMapping("/api/v1/medicamentos/")
public class MedicamentosApi {

    @Autowired
    private MedicamentosBl medicamentosBl;

    @PostMapping
    private ResponseEntity<Medicamentos> create(@RequestBody Medicamentos medicamentos) {
        return ResponseEntity.ok(medicamentosBl.save(medicamentos));
    }

    @GetMapping
    private ResponseEntity<List<Medicamentos>> findAll() {
        return ResponseEntity.ok(medicamentosBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Medicamentos> update(@RequestBody Medicamentos medicamentos) {
        return ResponseEntity.ok(medicamentosBl.save(medicamentos));
    }

    @DeleteMapping
    private ResponseEntity<Void> delete(@RequestParam("medicamentoId") Long medicamentoId) {
        medicamentosBl.deleteById(medicamentoId);
        return ResponseEntity.ok().build();
    }
    
}
