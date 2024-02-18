package com.no.country.vet.application.ports.in;

import com.no.country.vet.domain.models.Pet;

import java.util.List;

public interface PetService {
    Pet createPet(Pet pet);
    Pet getPetById(String id);
    List<Pet> getPetsByUserId(String userId);
    Pet updatePet(Pet pet);
    void deletePet(String id);
}
