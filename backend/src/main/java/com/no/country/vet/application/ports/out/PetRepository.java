package com.no.country.vet.application.ports.out;

import com.no.country.vet.domain.models.Pet;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository {
    Pet save(Pet pet);
    Pet findById(String id);
    List<Pet> findAll(String id);
    List<Pet> findByUserId(String id);
    void deleteById(String id);

}
