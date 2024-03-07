import { singleUserAdapter } from '../adapters/UserAdapter'

export const getUserByUsername = async (username) => {

    const url = '' + username; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || res.username !== username) {
        throw new Error('Usuario inexistente');
    }

    // de la respuesta json a un objeto user
    const user = singleUserAdapter(res);

    return user;

}

export const getUsersTest = () => {

    const data = [
        { id: '1', email: 'admin@email.com', name: 'Maria Admin', passwordHash: 'mariaadmin', role: 'Admin', phone: '' },
        { id: '2', email: 'johndoe@email.com', name: 'John Doe', passwordHash: '12345', role: 'Owner', phone: '1134567890' },
        { id: '3', email: 'janedoe@email.com', name: 'Jane Doe', passwordHash: '54321', role: 'Owner', phone: '1198765432' },
        { id: '4', email: 'jenniferdoe@email.com', name: 'Jennifer Doe', passwordHash: '112233', role: 'Owner', phone: '' },
    ]

    const users = data.map(singleUserAdapter);

    return users;

}

export const findUserById = (array, id) => {
    return array.find((user) => user.id == id);
}