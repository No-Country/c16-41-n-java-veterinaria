import { toPet } from '../domain/models/Pet.js';

export const singlePetAdapter = (externalData) => {

    // aca se tomaria en realidad la data del external data

    const exampleData = {
        id: 1,
        name: 'Perrito',
        species: 'Perro',
        breed: 'Salchicha',
        birthdate: '12-12-2020',
        ownerid: '1'
    };

    const { id, name, species, breed, birthdate, ownerid } = exampleData;

    return toPet(id, name, species, breed, birthdate, ownerid);
}