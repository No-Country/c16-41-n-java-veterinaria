import { singleUserAdapter } from '../adapters/UserAdapter'
import { userToAPIFormat } from '../domain/models/User';
import { fetchData, putData } from './api';

export const getAllUsers = async () => {
    const path = '/users';
    const response = await fetchData(path);

    return response.map(singleUserAdapter);
}

export const logIn = async (email, password) => {

    const allUsers = await getAllUsers();
    console.log(allUsers)
    const foundUser = allUsers.find((user) => user.email == email && user.password == password);

    console.log('user encontrado' , foundUser);

    if (!foundUser || foundUser.error) {
        throw new Error('Error, reingresar datos');
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
    const newUser = userToAPIFormat(newData);
    const path = `/users`;
    return putData('POST', path, newUser);
}

export const updateUser = async (userId, newData) => {
    const updatedUser = userToAPIFormat(newData);
    const path = `/users/${userId}`;
    return putData('PUT', path, updatedUser);
}

export const getUsersTest = () => {

    const data = [
        { id: '1', email: 'admin@email.com', name: 'Maria Admin', password: 'mariaadmin', role: 'Admin', phone: '' },
        { id: '2', email: 'johndoe@email.com', name: 'John Doe', password: '12345', role: 'Owner', phone: '1134567890' },
        { id: '3', email: 'janedoe@email.com', name: 'Jane Doe', password: '54321', role: 'Owner', phone: '1198765432' },
        { id: '4', email: 'jenniferdoe@email.com', name: 'Jennifer Doe', password: '112233', role: 'Owner', phone: '' },
    ]

    const users = data.map(singleUserAdapter);

    return users;

}

export const findUserById = (array, id) => {
    return array.find((user) => user.id == id);
}