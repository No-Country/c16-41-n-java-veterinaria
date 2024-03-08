export const toUser = (id, name, email, password, role, phone) => {
    return {
        id: id,
        email: email,
        name: name,
        password: password,
        role: role,
        phone: phone
    };
}