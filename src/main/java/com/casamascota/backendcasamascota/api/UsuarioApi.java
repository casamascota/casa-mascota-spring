package com.casamascota.backendcasamascota.api;

import java.util.List;
import java.util.Optional;

import com.casamascota.backendcasamascota.entity.Persona;
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
@RequestMapping("/api/v1/")
public class UsuarioApi {
    
    @Autowired
    private UsuarioBl usuarioBl;

    @PostMapping("usuario/")
    private ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioBl.save(usuario));
    }

    @GetMapping("usuario/")
    private ResponseEntity<Optional<Usuario>> findById(@RequestParam("usuarioId") Long usuarioId) {
        return ResponseEntity.ok(usuarioBl.findById(usuarioId));
    }
    @GetMapping("usuarios/")
    public ResponseEntity<List<Usuario>> getAllPersonas() {
        List<Usuario> usuarios = usuarioBl.findAll();
        return ResponseEntity.ok(usuarios);
    }
}
