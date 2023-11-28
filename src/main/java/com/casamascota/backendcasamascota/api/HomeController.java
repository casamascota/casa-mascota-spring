/*package com.casamascota.backendcasamascota.api;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller for the home page. para renderizarme la vista :)
 *
@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model, @AuthenticationPrincipal OidcUser principal) {
        //Para mostrar el perfil del usuario
        if (principal != null) {
            model.addAttribute("profile", principal.getClaims());
        }
        return "index";
    }

}*/