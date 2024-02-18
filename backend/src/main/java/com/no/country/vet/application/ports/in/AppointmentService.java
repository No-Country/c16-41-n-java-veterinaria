package com.no.country.vet.application.ports.in;

import com.no.country.vet.domain.models.Appointment;

import java.util.List;

public interface AppointmentService {
    Appointment scheduleAppointment(Appointment appointment);
    Appointment getAppointmentById(String id);
    List<Appointment> getAppointmentsByUserId(String userId);
    List<Appointment> getAppointmentsByPetId(String petId);
    Appointment updateAppointment(Appointment appointment);
    void deleteAppointment(String id);
}
