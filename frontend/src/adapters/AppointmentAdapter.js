import { apiToAppointmentFormat } from '../domain/models/Appointment.js';

export const singleAppointmentAdapter = (externalData) => {

    const { id, owner_id, pet_id, service_id, date_time, status } = externalData;

    return apiToAppointmentFormat(id, owner_id, pet_id, service_id, date_time, status);
}