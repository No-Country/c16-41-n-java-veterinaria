import { singleUserAdapter } from '../adapters/UserAdapter';

export const loginUser = async (username, password) => {
    const url = ''; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || res.username !== username || res.password !== password) {
        throw new Error('Usuario o contraseña incorrectos');
    }

    // de la respuesta json a un objeto user
    const user = singleUserAdapter(res);

    return user;
};