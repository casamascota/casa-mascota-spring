package com.casamascota.backendcasamascota.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.DocumentoAdopcionBl;
import com.casamascota.backendcasamascota.entity.DocumentoAdopcion;

@RestController
@RequestMapping("/api/v1/documentoAdopcion/")
public class DocumentosAdopcionApi {
    
    @Autowired
    private DocumentoAdopcionBl documentoAdopcionBl;

    @PostMapping
    private ResponseEntity<DocumentoAdopcion> create(DocumentoAdopcion documentoAdopcion) {
        return ResponseEntity.ok(documentoAdopcionBl.save(documentoAdopcion));
    }

    @GetMapping
    private ResponseEntity<List<DocumentoAdopcion>> findAll() {
        return ResponseEntity.ok(documentoAdopcionBl.findAll());
    }

    @GetMapping
    private ResponseEntity<Optional<DocumentoAdopcion>> findById(@RequestParam("documentoAdopcionId") Long documentoAdopcionId) {
        return ResponseEntity.ok(documentoAdopcionBl.findById(documentoAdopcionId));
    }

    @PutMapping
    private ResponseEntity<DocumentoAdopcion> update(DocumentoAdopcion documentoAdopcion) {
        return ResponseEntity.ok(documentoAdopcionBl.save(documentoAdopcion));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById(@RequestParam("documentoAdopcionId") Long documentoAdopcionId) {
        documentoAdopcionBl.deleteById(documentoAdopcionId);
        return ResponseEntity.ok(null);
    }
}
