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

import com.casamascota.backendcasamascota.bl.CirugiaBl;
import com.casamascota.backendcasamascota.entity.Cirugia;

@RestController
    @RequestMapping("/api/v1/cirugia/")
public class CirugiaApi {
    
    @Autowired
    private CirugiaBl cirugiaBl;

    @PostMapping
    private ResponseEntity<Cirugia> create(@RequestBody Cirugia cirugia) {
        return ResponseEntity.ok(cirugiaBl.save(cirugia));
    }

    @GetMapping
    private ResponseEntity<List<Cirugia>> findAll() {
        return ResponseEntity.ok(cirugiaBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Cirugia> update(@RequestBody Cirugia cirugia) {
        return ResponseEntity.ok(cirugiaBl.save(cirugia));
    }

    @DeleteMapping
    private ResponseEntity<Void> delete(@RequestParam("cirugiaId") Long cirugiaId) {
        cirugiaBl.deleteById(cirugiaId);
        return ResponseEntity.ok().build();
    }
}
