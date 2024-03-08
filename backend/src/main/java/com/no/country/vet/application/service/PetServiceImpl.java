package com.no.country.vet.application.service;

import com.no.country.vet.application.ports.in.PetService;
import com.no.country.vet.application.ports.out.PetRepository;
import com.no.country.vet.domain.models.Pet;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PetServiceImpl implements PetService {

    private final PetRepository petRepository;

    public PetServiceImpl(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @Override
    public Pet registerPet(Pet pet) {
        return petRepository.save(pet);
    }

    @Override
    public Pet getPetById(String id) {
        return petRepository.findById(id);
    }

    @Override
    public List<Pet> getPetsByUserId(String userId) {
        return petRepository.findByUserId(userId);
    }

    @Override
    public Pet updatePet(Pet pet) {
        // Verifica si la mascota existe antes de actualizarla
        return petRepository.save(pet);
    }

    @Override
    public void deletePet(String id) {

    }

}
