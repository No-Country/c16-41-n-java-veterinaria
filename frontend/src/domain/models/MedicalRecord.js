export const toService = (id, petId, visitDate, serviceId, vetNotes) => {
    return {
        id: id,
        petId: petId,
        visitDate: visitDate,
        serviceId: serviceId,
        vetNotes: vetNotes
    };
}