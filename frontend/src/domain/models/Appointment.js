export const apiToAppointmentFormat = (id, ownerId, petId, serviceId, dateTime, status) => {
    return {
        id: id,
        ownerId: ownerId,
        petId: petId,
        serviceId: serviceId,
        dateTime: dateTime,
        status: status
    };
}

export const appointmentToAPIFormat = (data) => {

    const { id, ownerId, petId, serviceId, dateTime, status } = data;

    return {
        id: id,
        owner_id: ownerId,
        pet_id: petId,
        service_id: serviceId,
        date_time: dateTime,
        status: status
    };
}