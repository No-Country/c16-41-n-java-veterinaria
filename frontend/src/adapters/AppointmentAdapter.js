import { toAppointment } from '../domain/models/Appointment.js';

export const singleAppointmentAdapter = (externalData) => {

    // aca se tomaria en realidad la data del external data

    const exampleData = {
        id: '1',
        ownerId: '1',
        petId: '1',
        serviceId: '1',
        dateTime: '11-10-2023',
        status: 'Atendido'
    };

    const { id, ownerId, petId, serviceId, dateTime, status } = exampleData;

    return toAppointment(id, ownerId, petId, serviceId, dateTime, status);
}