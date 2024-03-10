import { singlePetAdapter } from '../adapters/PetAdapter'
import { petToAPIFormat } from '../domain/models/Pet';
import { fetchData, putData } from './api';

export const getAllPets = async () => {
    const path = '/pets';
    const response = await fetchData(path);
    return response.map(singlePetAdapter)
}

export const getOwnerPetsById = async (ownerid) => {

    const allPets = await getAllPets();
    const foundPets = allPets.filter((pet) => pet.ownerid == ownerid);
    if (!foundPets || foundPets.error) {
        throw new Error('Usuario sin mascotas registradas');
    }
    return foundPets;

}

export const getPetById = async (petId) => {

    const allPets = await getAllPets();
    const foundPet = allPets.find((pet) => pet.id == petId);
    if (!foundPet || foundPet.error) {
        throw new Error('Mascota inexistente');
    }
    return foundPet;

}

export const createPet = async (newData) => {
    const newPet = petToAPIFormat(newData);
    const path = `/pets`;
    return putData('POST', path, newPet);
}

export const updatePet = async (petId, newData) => {
    const updatedPet = petToAPIFormat(newData);
    const path = `/pets/${petId}`;
    return putData('PUT', path, updatedPet);

}

export const getPetsTest = () => {

    const data = [
        { id: '1', name: 'Pepito', species: 'Roedor', breed: 'Hamster', birthdate: '10/12/2023', ownerid: '2' },
        { id: '2', name: 'Puppy', species: 'Perro', breed: 'Caniche', birthdate: '10/10/2023', ownerid: '2' },
        { id: '3', name: 'Bigotes', species: 'Gato', breed: 'Siberiano', birthdate: '20/09/2023', ownerid: '3' },
        { id: '4', name: 'Mia', species: 'Gata', breed: 'Himalayo', birthdate: '22/11/2023', ownerid: '4' },
    ];

    const pets = data.map(singlePetAdapter);

    return pets;
};

export const getPetByPetId = (pets, id) => {
    const pet = pets.find((p) => p.id == id);
    return pet ? pet : null;
}
