import { apiToUserFormat } from '../domain/models/User.js';

export const singleUserAdapter = (externalData) => {

    const { id, name, lastname, email, password, role, phone } = externalData;

    return apiToUserFormat(id, name, lastname, email, password, role, phone);
}