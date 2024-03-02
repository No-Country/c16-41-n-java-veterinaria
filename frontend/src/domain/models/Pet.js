export const toPet = (id, name, species, breed, birthdate, ownerid) => {
    return {
        id: id,
        name: name,
        species: species,
        breed: breed,
        birthdate: birthdate,
        ownerid: ownerid
    };
}