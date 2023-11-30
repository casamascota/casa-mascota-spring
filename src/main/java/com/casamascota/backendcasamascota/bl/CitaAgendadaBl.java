package com.casamascota.backendcasamascota.bl;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import com.casamascota.backendcasamascota.dao.MascotaDao;
import com.casamascota.backendcasamascota.entity.Mascota;
import com.casamascota.backendcasamascota.entity.Servicio;
import com.casamascota.backendcasamascota.entity.Usuario;
import com.casamascota.backendcasamascota.exception.PetMissingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.casamascota.backendcasamascota.dao.CitaAgendadaDao;
import com.casamascota.backendcasamascota.entity.CitaAgendada;

@Service
public class CitaAgendadaBl implements CitaAgendadaDao {

    @Autowired
    private CitaAgendadaDao citaAgendadaDao;

    @Autowired
    private MascotaDao mascotaDao;

    @Override
    public void flush() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'flush'");
    }

    @Override
    public <S extends CitaAgendada> S saveAndFlush(S entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAndFlush'");
    }

    @Override
    public <S extends CitaAgendada> List<S> saveAllAndFlush(Iterable<S> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAllAndFlush'");
    }

    @Override
    public void deleteAllInBatch(Iterable<CitaAgendada> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAllInBatch'");
    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAllByIdInBatch'");
    }

    @Override
    public void deleteAllInBatch() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAllInBatch'");
    }

    @Override
    public CitaAgendada getOne(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getOne'");
    }

    @Override
    public CitaAgendada getById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public CitaAgendada getReferenceById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getReferenceById'");
    }

    @Override
    public <S extends CitaAgendada> List<S> findAll(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends CitaAgendada> List<S> findAll(Example<S> example, Sort sort) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends CitaAgendada> List<S> saveAll(Iterable<S> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAll'");
    }

    @Override
    public List<CitaAgendada> findAll() {
        try {
            return citaAgendadaDao.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<CitaAgendada> findAllById(Iterable<Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllById'");
    }

    @Override
    public <S extends CitaAgendada> S save(S entity) {
        Mascota mascota = mascotaDao.findById(entity.getMascota().getId_mascota()).get();
        Usuario usuario = mascota.getUsuario();
        Servicio servicio = entity.getServicio();
        if(mascota.getId_mascota() == null){
            try {
                throw new PetMissingException("Mascota no encontrada");
            } catch (PetMissingException e) {
                e.printStackTrace();
            }
        }
        if(usuario == null){
            try {
                throw new PetMissingException("Usuario no encontrado");
            } catch (PetMissingException e) {
                e.printStackTrace();
            }
        }
        if(servicio.getId_servicio() == null){
            try {
                throw new PetMissingException("Servicio no encontrado");
            } catch (PetMissingException e) {
                e.printStackTrace();
            }
        }
        return citaAgendadaDao.save(entity);
    }

    @Override
    public Optional<CitaAgendada> findById(Long id) {
        CitaAgendada citaAgendada = citaAgendadaDao.findById(id).get();
        if(citaAgendada.getId_cita() == null){
            try {
                throw new PetMissingException("Cita no encontrada");
            } catch (PetMissingException e) {
                e.printStackTrace();
            }
        }
        return citaAgendadaDao.findById(id);
    }

    @Override
    public boolean existsById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'existsById'");
    }

    @Override
    public long count() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'count'");
    }

    @Override
    public void deleteById(Long id) {
        try {
            citaAgendadaDao.deleteById(id);
        } catch (Exception e) {
            // TODO: handle exception
        }
    }

    @Override
    public void delete(CitaAgendada entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public void deleteAllById(Iterable<? extends Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAllById'");
    }

    @Override
    public void deleteAll(Iterable<? extends CitaAgendada> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }

    @Override
    public List<CitaAgendada> findAll(Sort sort) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public Page<CitaAgendada> findAll(Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends CitaAgendada> Optional<S> findOne(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findOne'");
    }

    @Override
    public <S extends CitaAgendada> Page<S> findAll(Example<S> example, Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends CitaAgendada> long count(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'count'");
    }

    @Override
    public <S extends CitaAgendada> boolean exists(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'exists'");
    }

    @Override
    public <S extends CitaAgendada, R> R findBy(Example<S> example,
            Function<FetchableFluentQuery<S>, R> queryFunction) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findBy'");
    }
    
}
