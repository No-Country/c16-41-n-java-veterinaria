import { singleMedicalRecordAdapter } from '../adapters/MedicalRecordAdapter'

export const getMedicalRecordsByUser = async (userId) => {

    const url = '' + userId; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || res.userId !== userId) {
        throw new Error('Usuario sin historial medico de mascotas existente.');
    }

    // de la respuesta json a un objeto user
    const medicalRecords = res.map(singleMedicalRecordAdapter);

    return medicalRecords;

}

export const getAllMedicalRecords = async () => {

    const url = ''; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    // de la respuesta json a un objeto user
    const appointments = res.map(singleMedicalRecordAdapter);

    return appointments;

}