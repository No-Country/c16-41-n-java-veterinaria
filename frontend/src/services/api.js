const api = 'http://localhost:8080';
const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json'
};

const handleResponse = async (res) => {
    if (!res.ok) {
        throw new Error('Failed API connection');
    }
    return res.json();
}

export const fetchData = async (path) => {

    const url = api + path;
    const res = await fetch(url, { headers });
    return handleResponse(res);

}

export const putData = async (method, path, newData) => {
    const url = api + path;
    const res = await fetch(url, {
        method: { method },
        headers,
        body: JSON.stringify(newData)
    });
    return handleResponse(res);
}
