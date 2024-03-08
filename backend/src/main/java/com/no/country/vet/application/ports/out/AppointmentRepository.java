package com.no.country.vet.application.ports.out;

import com.no.country.vet.domain.models.Appointment;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepository {
    Appointment save(Appointment appointment);
    Optional<Appointment> findById(String id);
    List<Appointment> findAll(String id);
    List<Appointment> findBtPetId();
    void deleteById(String id);
}
