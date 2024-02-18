package com.no.country.vet.application.ports.in;

import com.no.country.vet.domain.models.User;

import java.util.List;

public interface UserService {
    User createUser(User user);
    User getUserById(String id);
    List<User> getAllUsers();
    User updateUser(User user);
    void deleteUser(String id);
}
