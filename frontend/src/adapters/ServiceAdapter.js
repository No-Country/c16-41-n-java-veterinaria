import { toService } from '../domain/models/Service.js';

export const singleServiceAdapter = (externalData) => {

    // aca se tomaria en realidad la data del external data

    const exampleData = {
        id: '1',
        name: 'Desparacitación',
        description: 'Se desparacita mediante pastilla.',
        cost: '5000'
    };

    const { id, name, description, cost } = exampleData;

    return toService(id, name, description, cost);
}