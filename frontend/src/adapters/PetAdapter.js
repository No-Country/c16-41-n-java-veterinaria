import { toPet } from '../domain/models/Pet.js';

export const singlePetAdapter = (externalData) => {

    const { id, name, species, breed, birthdate, ownerid } = externalData;

    return toPet(id, name, species, breed, birthdate, ownerid);
}