import { singleServiceAdapter } from '../adapters/ServiceAdapter'

export const getServices = async () => {

    const url = ''; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    // de la respuesta json a un objeto user
    const services = res.map(singleServiceAdapter);

    return services;

}