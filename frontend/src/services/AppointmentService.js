import { singleAppointmentAdapter } from '../adapters/AppointmentAdapter'

export const getAppointmentsByUser = async (userId) => {

    const url = '/appointments' + userId; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    if (!res || res.error || res.userId !== userId) {
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
export const getAppointmentsTest = () => {

    const data = [
        { id: 1, ownerId: '2', petId: '1', dateTime: '15/01/2024', serviceId: '2', status: 'Cancelo' },
        { id: 2, ownerId: '2', petId: '2', dateTime: '16/01/2024', serviceId: '4', status: 'Asistio' },
        { id: 3, ownerId: '3', petId: '3', dateTime: '20/01/2024', serviceId: '3', status: 'Asistio' },
        { id: 4, ownerId: '3', petId: '3', dateTime: '22/02/2024', serviceId: '4', status: 'Asistio' },
        { id: 5, ownerId: '3', petId: '3', dateTime: '22/03/2024', serviceId: '5', status: 'Pendiente'}
    ]

    const appointments = data.map(singleAppointmentAdapter);
    return appointments;

};