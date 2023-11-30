package com.casamascota.backendcasamascota.bl;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.logging.Logger;

import com.casamascota.backendcasamascota.exception.BadRequestException;
import com.casamascota.backendcasamascota.exception.UnknownException;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.casamascota.backendcasamascota.dao.AreasFaltaVacunarDao;
import com.casamascota.backendcasamascota.entity.AreasFaltaVacunar;

@Service
public class AreasFaltaVacunarBl implements AreasFaltaVacunarDao {

    @Autowired
    private AreasFaltaVacunarDao areasFaltaVacunarDao;
    Logger logger = Logger.getLogger(AreasFaltaVacunarBl.class.getName());

    @Override
    public void flush() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'flush'");
    }
    @Override
    public <S extends AreasFaltaVacunar> S saveAndFlush(S entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAndFlush'");
    }

    @Override
    public <S extends AreasFaltaVacunar> List<S> saveAllAndFlush(Iterable<S> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAllAndFlush'");
    }

    @Override
    public void deleteAllInBatch(Iterable<AreasFaltaVacunar> entities) {
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
    public AreasFaltaVacunar getOne(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getOne'");
    }

    @Override
    public AreasFaltaVacunar getById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public AreasFaltaVacunar getReferenceById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getReferenceById'");
    }

    @Override
    public <S extends AreasFaltaVacunar> List<S> findAll(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends AreasFaltaVacunar> List<S> findAll(Example<S> example, Sort sort) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends AreasFaltaVacunar> List<S> saveAll(Iterable<S> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAll'");
    }

    @Override
    public List<AreasFaltaVacunar> findAll() {
        try {
            return areasFaltaVacunarDao.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<AreasFaltaVacunar> findAllById(Iterable<Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllById'");
    }

    @Override
    public <S extends AreasFaltaVacunar> S save(S entity) {
        logger.info("saving area sin vacunar: " + entity.getEnfermedad());
        //Se valida que la cantidad de dueños no sea negativa
        if (entity.getCant_duenos() < 0) {
            try {
                throw new BadRequestException("La cantidad de dueños no puede ser negativa");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }

        //Se valida que la cantidad de mascotas no sea negativa
        if (entity.getCant_mascot() < 0) {
            try {
                throw new BadRequestException("La cantidad de mascotas no puede ser negativa");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }

        //Se valida que la cantidad de dosis programadas no sea negativa
        if (entity.getDosis_prog() < 0) {
            try {
                throw new BadRequestException("La cantidad de dosis programadas no puede ser negativa");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }

        //Se valida que el brote de enfermedad no sea nulo
        if (entity.getBrote_enfer() == null) {
            try {
                throw new BadRequestException("El brote de enfermedad no puede ser nulo");
            } catch (BadRequestException e) {
                throw new RuntimeException(e);
            }
        }


        return areasFaltaVacunarDao.save(entity);
    }




    @Override
    public Optional<AreasFaltaVacunar> findById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
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
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteById'");
    }

    @Override
    public void delete(AreasFaltaVacunar entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public void deleteAllById(Iterable<? extends Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAllById'");
    }

    @Override
    public void deleteAll(Iterable<? extends AreasFaltaVacunar> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }

    @Override
    public List<AreasFaltaVacunar> findAll(Sort sort) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public Page<AreasFaltaVacunar> findAll(Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends AreasFaltaVacunar> Optional<S> findOne(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findOne'");
    }

    @Override
    public <S extends AreasFaltaVacunar> Page<S> findAll(Example<S> example, Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends AreasFaltaVacunar> long count(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'count'");
    }

    @Override
    public <S extends AreasFaltaVacunar> boolean exists(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'exists'");
    }

    @Override
    public <S extends AreasFaltaVacunar, R> R findBy(Example<S> example,
            Function<FetchableFluentQuery<S>, R> queryFunction) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findBy'");
    }
    
}
