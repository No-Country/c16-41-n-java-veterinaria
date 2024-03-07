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
