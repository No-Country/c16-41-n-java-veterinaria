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
        { id: 1, ownerId: '2', petId: '1', dateTime: '2024-01-15T10:00', serviceId: '2', status: 'Cancelo' },
        { id: 2, ownerId: '2', petId: '1', dateTime: '2024-01-16T10:00', serviceId: '4', status: 'Asistio' },
        { id: 3, ownerId: '3', petId: '3', dateTime: '2024-01-20T10:00', serviceId: '3', status: 'Asistio' },
        { id: 4, ownerId: '3', petId: '3', dateTime: '2024-02-22T10:00', serviceId: '4', status: 'Asistio' },
        { id: 5, ownerId: '3', petId: '3', dateTime: '2024-03-22T10:00', serviceId: '5', status: 'Pendiente'}
    ]

    const appointments = data.map(singleAppointmentAdapter);
    return appointments;

};