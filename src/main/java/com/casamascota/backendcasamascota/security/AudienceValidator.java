package com.casamascota.backendcasamascota.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;

class AudienceValidator implements OAuth2TokenValidator<Jwt> {
    Logger logger = LoggerFactory.getLogger(AudienceValidator.class);
    private final String audience;

    AudienceValidator(String audience) {
        this.audience = audience;
    }

    public OAuth2TokenValidatorResult validate(Jwt jwt) {
        logger.debug("Validating JWT Audience: " + jwt.getAudience().toString());
        OAuth2Error error = new OAuth2Error("invalid_token", "The required audience is missing", null);
        logger.debug("Audience: " + audience);
        if (jwt.getAudience().contains(audience)) {
            logger.debug("JWT Audience validation succeeded.");
            return OAuth2TokenValidatorResult.success();
        }
        logger.error("JWT Audience validation failed: " + jwt.getAudience().toString());
        return OAuth2TokenValidatorResult.failure(error);
    }

}