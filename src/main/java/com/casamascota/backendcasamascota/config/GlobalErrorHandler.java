package com.casamascota.backendcasamascota.config;

import com.casamascota.backendcasamascota.dto.ResponseDto;
import com.casamascota.backendcasamascota.exception.BadRequestException;
import com.casamascota.backendcasamascota.exception.PetMissingException;
import com.casamascota.backendcasamascota.exception.UnknownException;
import com.casamascota.backendcasamascota.exception.UserNotFoundException;
import com.casamascota.backendcasamascota.models.ErrorMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;


import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalErrorHandler {
    Logger logger = LoggerFactory.getLogger(GlobalErrorHandler.class);
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NoHandlerFoundException.class)
    public ErrorMessage handleNotFound(final HttpServletRequest request, final Exception error) {
        return ErrorMessage.from("Not Found");
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Throwable.class)
    public ErrorMessage handleInternalError(final HttpServletRequest request, final Exception error) {
        logger.error("Global error", error);
        return ErrorMessage.from(error.getMessage());
    }

    @ExceptionHandler(UnknownException.class)
    public ResponseEntity<ResponseDto> handleUnknownException(UnknownException e) {
        ResponseDto responseDto = new ResponseDto(e.getMessage(), "9999");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(responseDto);
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ResponseDto> handleBadRequestException(BadRequestException e) {
        ResponseDto responseDto = new ResponseDto("9000", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseDto);
    }

    @ExceptionHandler(PetMissingException.class)
    public ResponseEntity<ResponseDto> handlePetMissingException(PetMissingException e) {
        ResponseDto responseDto = new ResponseDto("9001", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseDto);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ResponseDto> handleUserNotFoundException(UserNotFoundException e) {
        ResponseDto responseDto = new ResponseDto("9002", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseDto);
    }


}