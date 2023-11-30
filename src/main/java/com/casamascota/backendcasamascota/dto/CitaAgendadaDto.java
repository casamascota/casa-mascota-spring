package com.casamascota.backendcasamascota.dto;

import lombok.Data;

import java.util.Date;

@Data
public class CitaAgendadaDto {

    private Long id_cita;
    private Date fecha_reserva;
    private Date fecha_cita;
    private Long id_servicio;
    private Long id_mascota;
    private Long id_usuario;
}
