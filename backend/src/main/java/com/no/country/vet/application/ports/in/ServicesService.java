package com.no.country.vet.application.ports.in;

import com.no.country.vet.domain.models.Service;

import java.util.List;

public interface ServicesService {
    Service createService(Service service);
    Service getServiceById(String id);
    List<Service> getAllServices();
    Service updateService(Service service);
    void deleteService(String id);
}
