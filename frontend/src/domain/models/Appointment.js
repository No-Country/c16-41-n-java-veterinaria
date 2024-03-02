export const toAppointment = (id, ownerId, petId, serviceId, dateTime, status) => {
    return {
        id: id,
        ownerId: ownerId,
        petId: petId,
        serviceId: serviceId,
        dateTime: dateTime,
        status: status
    };
}