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

import com.casamascota.backendcasamascota.bl.TipoDocumentoBl;
import com.casamascota.backendcasamascota.entity.TipoDocumento;

@RestController
@RequestMapping("/api/v1/tipoDoc/")
public class TipoDocumentoApi {
    
    @Autowired
    private TipoDocumentoBl tipoDocumentoBl;

    @PostMapping
    private ResponseEntity<TipoDocumento> create(@RequestBody TipoDocumento tipoDocumento) {
        return ResponseEntity.ok(tipoDocumentoBl.save(tipoDocumento));
    }

    @GetMapping
    private ResponseEntity<List<TipoDocumento>> findAll() {
        return ResponseEntity.ok(tipoDocumentoBl.findAll());
    }

    @PutMapping
    private ResponseEntity<TipoDocumento> update(@RequestBody TipoDocumento tipoDocumento) {
        return ResponseEntity.ok(tipoDocumentoBl.save(tipoDocumento));
    }

    @DeleteMapping
    private ResponseEntity<Void> delete(@RequestParam("tipoDocumentoId") Long tipoDocumentoId) {
        tipoDocumentoBl.deleteById(tipoDocumentoId);
        return ResponseEntity.ok(null);
    }
}
