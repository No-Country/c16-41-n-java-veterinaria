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
