import { apiToPetFormat } from '../domain/models/Pet.js';

export const singlePetAdapter = (externalData) => {

    const { id, name, species, breed, birth, owner_id } = externalData;

    return apiToPetFormat(id, name, species, breed, birth, owner_id);
}