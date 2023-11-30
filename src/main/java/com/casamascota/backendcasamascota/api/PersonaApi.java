package com.casamascota.backendcasamascota.api;

import java.util.List;
import java.util.Optional;

import com.casamascota.backendcasamascota.security.SecurityConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.PersonaBl;
import com.casamascota.backendcasamascota.entity.Persona;

@RestController
@RequestMapping("/api/v1/")
public class PersonaApi {

    Logger logger = LoggerFactory.getLogger(PersonaApi.class);
    @Autowired
    private PersonaBl personaBl;
    //@PreAuthorize("hasRole('admin')")
    @PostMapping("persona/")
    private ResponseEntity<Persona> create(@RequestBody Persona persona) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication != null) {
//            logger.info("Create operation by user: " + authentication.getName());
//        }
        return ResponseEntity.ok(personaBl.save(persona));
    }
//    @PreAuthorize("hasRole('admin')")
    @GetMapping("persona/")
    private ResponseEntity<Optional<Persona>> findById(@RequestParam("personaId") Long personaId) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication != null) {
//            logger.info("Create operation by user: " + authentication.getName());
//        }
        return ResponseEntity.ok(personaBl.findById(personaId));
    }
//    @PreAuthorize("hasRole('admin')")
    @GetMapping("personas/")
    public ResponseEntity<List<Persona>> getAllPersonas() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        logger.debug("Attempting to list all personas. Authentication: " + authentication);
//        if (authentication != null) {
//            logger.debug("User: " + authentication.getName() + " Roles: " + authentication.getAuthorities());
//        }
            List<Persona> personas = personaBl.findAll();
        return ResponseEntity.ok(personas);
    }
    
}
