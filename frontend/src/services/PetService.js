import { singlePetAdapter } from '../adapters/PetAdapter'

export const getPetsByUser = async (userId) => {

    const url = '' + userId; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || pets.userId !== userId) {
        throw new Error('Usuario sin mascotas registradas.');
    }

    // de la respuesta json a un objeto user
    const pets = res.map(singlePetAdapter);

    return pets;

}

export const getPetById = async (petId) => {

    const url = '' + petId; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || res.petId !== petId) {
        throw new Error('Mascota inexistente');
    }

    // de la respuesta json a un objeto user
    const pet = singlePetAdapter(res);

    return pet;

}