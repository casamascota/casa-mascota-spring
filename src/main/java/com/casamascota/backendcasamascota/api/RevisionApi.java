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

import com.casamascota.backendcasamascota.bl.RevisionBl;
import com.casamascota.backendcasamascota.entity.Revision;

@RestController
@RequestMapping("/api/v1/revision/")
public class RevisionApi {
    
    @Autowired
    private RevisionBl revisionBl;

    @PostMapping
    private ResponseEntity<Revision> create(@RequestBody Revision revision) {
        return ResponseEntity.ok(revisionBl.save(revision));
    }

    @GetMapping
    private ResponseEntity<List<Revision>> findAll() {
        return ResponseEntity.ok(revisionBl.findAll());
    }

    @PutMapping
    private ResponseEntity<Revision> update(@RequestBody Revision revision) {
        return ResponseEntity.ok(revisionBl.save(revision));
    }

    @DeleteMapping
    private ResponseEntity<Void> deleteById(@RequestParam("revisionId") Long revisionId) {
        revisionBl.deleteById(revisionId);
        return ResponseEntity.ok(null);
    }

}
