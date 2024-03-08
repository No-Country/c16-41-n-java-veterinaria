export const apiToPetFormat = (id, name, species, breed, birthdate, ownerid) => {
    return {
        id: id,
        name: name,
        species: species,
        breed: breed,
        birthdate: birthdate,
        ownerid: ownerid
    };
}

export const petToAPIFormat = (data) => {

    const { name, species, breed, birthdate, ownerid } = data;
    
    return {
        name: name,
        species: species,
        breed: breed,
        birth: birthdate,
        owner_id: ownerid
    };
}