package com.no.country.vet.application.ports.out;

import com.no.country.vet.domain.models.Service;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository {
    Service save(Service service);
    Optional<Service> findById(String id);
    List<Service> findAll(String id);
    void deleteById(String id);
}
