export const apiToUserFormat = (id, name, lastname, email, password, role, phone) => {
    return {
        id: id,
        email: email,
        name: name,
        lastname: lastname,
        password: password,
        role: role,
        phone: phone
    };
}

export const userToAPIFormat = (data) => {

    const { id, name, lastname, email, password, role, phone } = data;

    return {
        id: id,
        email: email,
        name: name,
        lastname: lastname,
        password: password,
        role: role,
        phone: phone
    };
}