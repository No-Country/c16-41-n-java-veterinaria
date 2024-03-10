import { toMedicalRecord } from '../domain/models/MedicalRecord.js';

export const singleMedicalRecordAdapter = (externalData) => {

    // aca se tomaria en realidad la data del external data

    const exampleData = {
        id: '1',
        petId: '1',
        visitDate: '10-10-2023',
        serviceId: '1',
        vetNotes: 'todo ok'
    };

    const { id, petId, visitDate, serviceId, vetNotes } = exampleData;

    return toMedicalRecord(id, petId, visitDate, serviceId, vetNotes);
}