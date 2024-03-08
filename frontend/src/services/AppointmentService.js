import { singleAppointmentAdapter } from '../adapters/AppointmentAdapter'
import { appointmentToAPIFormat } from '../domain/models/Appointment';
import { fetchData, putData } from './api';

export const getAllAppointments = async () => {
    const path = '/appointments';
    const response = await fetchData(path);
    return response.map(singleAppointmentAdapter);
}

export const getAppointmentsByUserId = async (ownerId) => {

    const allAppointments = await getAllAppointments();
    const foundAppointments = allAppointments.filter((ap) => ap.ownerId == ownerId);
    if (!foundAppointments || foundAppointments.error) {
        throw new Error('Usuario sin turnos registrados');
    }
    return foundAppointments;

}

export const getAppointmentsById = async (id) => {

    const allAppointments = await getAllAppointments();
    const foundAppointments = allAppointments.filter((ap) => ap.id == id);
    if (!foundAppointments || foundAppointments.error) {
        throw new Error('Usuario sin turnos registrados');
    }
    return foundAppointments;

}

export const createAppointment = async (newData) => {
    const newAppointment = appointmentToAPIFormat(newData);
    const path = `/appointments`;
    return putData('POST', path, newAppointment);

}

export const updateAppointment = async (appointmentId, newData) => {
    const updatedAppointment = appointmentToAPIFormat(newData);
    const path = `/appointments/${appointmentId}`;
    return putData('PUT', path, updatedAppointment);

}

export const getAppointmentsTest = () => {

    const data = [
        { id: 1, ownerId: '2', petId: '1', dateTime: '15/01/2024', serviceId: '2', status: 'Cancelo' },
        { id: 2, ownerId: '2', petId: '2', dateTime: '16/01/2024', serviceId: '4', status: 'Asistio' },
        { id: 3, ownerId: '3', petId: '3', dateTime: '20/01/2024', serviceId: '3', status: 'Asistio' },
        { id: 4, ownerId: '3', petId: '3', dateTime: '22/02/2024', serviceId: '4', status: 'Asistio' },
        { id: 5, ownerId: '3', petId: '3', dateTime: '22/03/2024', serviceId: '5', status: 'Pendiente' }
    ]

    const appointments = data.map(singleAppointmentAdapter);
    return appointments;

};