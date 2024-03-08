import { toUser } from '../domain/models/User.js';

export const singleUserAdapter = (externalData) => {

    const { id, name, email, password, role, phone } = externalData;

    return toUser(id, name, email, password, role, phone);
}