import { toService } from '../domain/models/Service.js';

export const singleServiceAdapter = (externalData) => {

    const { id, name, description, cost } = externalData;

    return toService(id, name, description, cost);
}