import { singleAppointmentAdapter } from '../adapters/AppointmentAdapter'

export const getAppointmentsByUser = async (userId) => {

    const url = '' + userId; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || res.userId !== userId ) {
        throw new Error('Usuario sin turnos existentes.');
    }
    
    // de la respuesta json a un objeto user
    const appointments = res.map(singleAppointmentAdapter);
    
    return appointments;

}

export const getAllAppointments = async () => {

    const url = ''; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    // de la respuesta json a un objeto user
    const appointments = res.map(singleAppointmentAdapter);

    return appointments;

}