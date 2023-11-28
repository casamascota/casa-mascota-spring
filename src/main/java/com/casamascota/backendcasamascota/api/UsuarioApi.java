package com.casamascota.backendcasamascota.api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.casamascota.backendcasamascota.bl.UsuarioBl;
import com.casamascota.backendcasamascota.entity.Usuario;

@RestController
@RequestMapping("/api/v1/usuario/")
public class UsuarioApi {
    
    @Autowired
    private UsuarioBl usuarioBl;

    @PostMapping
    private ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioBl.save(usuario));
    }

    @GetMapping
    private ResponseEntity<Optional<Usuario>> findById(@RequestParam("usuarioId") Long usuarioId) {
        return ResponseEntity.ok(usuarioBl.findById(usuarioId));
    }

}
