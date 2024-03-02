export const toUser = (id, name, email, passwordHash, role, phone) => {
    return {
        id: id,
        email: email,
        name: name,
        passwordHash: passwordHash,
        role: role,
        phone: phone
    };
}