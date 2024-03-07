import { toAppointment } from '../domain/models/Appointment.js';

export const singleAppointmentAdapter = (externalData) => {

    const { id, ownerId, petId, serviceId, dateTime, status } = externalData;

    return toAppointment(id, ownerId, petId, serviceId, dateTime, status);
}