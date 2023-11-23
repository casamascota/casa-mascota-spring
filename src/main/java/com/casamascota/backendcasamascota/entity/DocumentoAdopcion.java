package com.casamascota.backendcasamascota.entity;

import groovy.transform.builder.Builder;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DocumentoAdopcion")
public class DocumentoAdopcion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_comprobante;
    private String documento;

    @ManyToOne
    @JoinColumn(name = "id_adoptadas")
    private MascotasAdoptadas mascotasAdoptadas;

    @ManyToOne
    @JoinColumn(name = "id_tipoDoc")
    private TipoDocumento tipoDocumento;
    
}
