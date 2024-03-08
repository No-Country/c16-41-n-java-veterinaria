package com.no.country.vet.application.ports.out;

import com.no.country.vet.domain.models.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository {
    User save(User user);
    Optional<User> findById(String id);
    List<User> findAll(String id);
    void deleteById(String id);
}
