import { toUser } from '../domain/models/User.js';

export const singleUserAdapter = (externalData) => {


    // aca se tomaria en realidad la data del external data

    const exampleData = {
        id: 1,
        name: 'Janet',
        email: 'janet.weaver@reqres.in',
        passwordHash: '12345',
        role:'admin',
        phone: '--'
    };

    const { id, name, email, passwordHash, role, phone } = exampleData;

    return toUser(id, name, email, passwordHash, role, phone);
}