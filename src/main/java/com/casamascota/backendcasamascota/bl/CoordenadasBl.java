package com.casamascota.backendcasamascota.bl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.casamascota.backendcasamascota.dao.AreasFaltaVacunarDao;
import com.casamascota.backendcasamascota.dao.AreasVacunadasDao;
import com.casamascota.backendcasamascota.dao.CoordenadasDao;
import com.casamascota.backendcasamascota.entity.AreasFaltaVacunar;
import com.casamascota.backendcasamascota.entity.AreasVacunadas;
import com.casamascota.backendcasamascota.entity.Coordenadas;

@Service
public class CoordenadasBl implements CoordenadasDao {

    @Autowired
    private CoordenadasDao coordenadasDao;

    @Autowired
    private AreasFaltaVacunarDao areasFaltaVacunarDao;

    @Autowired
    private AreasVacunadasDao areasVacunadasDao;

    @Override
    public void flush() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'flush'");
    }

    @Override
    public <S extends Coordenadas> S saveAndFlush(S entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAndFlush'");
    }

    @Override
    public <S extends Coordenadas> List<S> saveAllAndFlush(Iterable<S> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAllAndFlush'");
    }

    @Override
    public void deleteAllInBatch(Iterable<Coordenadas> entities) {
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
    public Coordenadas getOne(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getOne'");
    }

    @Override
    public Coordenadas getById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getById'");
    }

    @Override
    public Coordenadas getReferenceById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getReferenceById'");
    }

    @Override
    public <S extends Coordenadas> List<S> findAll(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends Coordenadas> List<S> findAll(Example<S> example, Sort sort) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends Coordenadas> List<S> saveAll(Iterable<S> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveAll'");
    }

    @Override
    public List<Coordenadas> findAll() {
        try {
            return coordenadasDao.findAll();
        } catch (Exception e) {
            return null;
        }
    }

    public List<Coordenadas> findAllByAreaFaltaVacunarId(Long id) {
        try {
            List<Coordenadas> coordenadas = coordenadasDao.findAll();
            List<Coordenadas> coordenadasFiltradas = new ArrayList<>();

            for(Coordenadas coordenada : coordenadas) {
                if(coordenada.getAreasFaltaVacunar() != null && 
                   coordenada.getAreasFaltaVacunar().getId_areaFaltaVacunar().equals(id)) {
                    coordenadasFiltradas.add(coordenada);
                }
            }
    
            return coordenadasFiltradas;
        } catch (Exception e) {
            return null;
        }
    }

    public List<Coordenadas> findAllByAreaVacunadaId(Long id) {
        try {
            List<Coordenadas> coordenadas = coordenadasDao.findAll();
            List<Coordenadas> coordenadasFiltradas = new ArrayList<>();

            for(Coordenadas coordenada : coordenadas) {
                if(coordenada.getAreasVacunadas() != null && 
                   coordenada.getAreasVacunadas().getId_areaVacunada().equals(id)) {
                    coordenadasFiltradas.add(coordenada);
                }
            }
    
            return coordenadasFiltradas;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<Coordenadas> findAllById(Iterable<Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllById'");
    }

    @Override
    public <S extends Coordenadas> S save(S entity) {
        try {
            if (entity.getAreasFaltaVacunar().getId_areaFaltaVacunar() != null) {
                Optional<AreasFaltaVacunar> areaFaltaVacunar = areasFaltaVacunarDao.findById(entity.getAreasFaltaVacunar().getId_areaFaltaVacunar());
                entity.setAreasFaltaVacunar(areaFaltaVacunar.get());
            } else {
                entity.setAreasFaltaVacunar(null);
            }
    
            if (entity.getAreasVacunadas().getId_areaVacunada() != null) {
                Optional<AreasVacunadas> areaVacunada = areasVacunadasDao.findById(entity.getAreasVacunadas().getId_areaVacunada());
                entity.setAreasVacunadas(areaVacunada.get());
            } else {
                entity.setAreasVacunadas(null);
            }
    
            return coordenadasDao.save(entity);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Optional<Coordenadas> findById(Long id) {
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
    public void delete(Coordenadas entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public void deleteAllById(Iterable<? extends Long> ids) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAllById'");
    }

    @Override
    public void deleteAll(Iterable<? extends Coordenadas> entities) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteAll'");
    }

    @Override
    public List<Coordenadas> findAll(Sort sort) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public Page<Coordenadas> findAll(Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends Coordenadas> Optional<S> findOne(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findOne'");
    }

    @Override
    public <S extends Coordenadas> Page<S> findAll(Example<S> example, Pageable pageable) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public <S extends Coordenadas> long count(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'count'");
    }

    @Override
    public <S extends Coordenadas> boolean exists(Example<S> example) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'exists'");
    }

    @Override
    public <S extends Coordenadas, R> R findBy(Example<S> example, Function<FetchableFluentQuery<S>, R> queryFunction) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findBy'");
    }
    
}
