import { singleUserAdapter } from '../adapters/UserAdapter'
import { fetchData, putData } from './api';

export const getAllUsers = async () => {
    const path = '/users';
    const response = await fetchData(path);

    return response.map(singleUserAdapter);
}

export const logIn = async (email, password) => {

    const allUsers = await getAllUsers();
    const foundUser = allUsers.find((user) => user.email == email);
    if (!foundUser || foundUser.error) {
        throw new Error('Usuario inexistente');
    }
    if (foundUser.email == email && foundUser.passwordHash != password) {
        throw new Error('Contraseña incorrecta');
    }
    return foundUser;

}
export const signUp = async (newUser) => {

    const allUsers = await getAllUsers();
    const foundUser = allUsers.find((user) => user.email == newUser.email);

    if (foundUser) {
        throw new Error('Email ya registrado');
    }
    const savedUser = createUser(newUser);
    return savedUser;

}

export const createUser = async (newData) => {

    const path = `/users`;
    return putData('POST', path, newData);

}

export const updateUser = async (userId, newData) => {

    const path = `/users/${userId}`;
    return putData('PUT', path, newData);

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