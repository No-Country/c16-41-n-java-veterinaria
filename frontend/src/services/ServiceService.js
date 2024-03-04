import { singleServiceAdapter } from '../adapters/ServiceAdapter'

export const getServices = async () => {

    const url = ''; //endpoint
    const externalData = await fetch(url);
    const res = await externalData.json();

    // de la respuesta json a un objeto user
    const services = res.map(singleServiceAdapter);

    return services;

}
export const getServicesTest = () => {

    const testExternalData = `{"data": [
        {
            "id": 1, "name": "Vacunación Anual", "description": "Mantén a tu mascota protegida contra enfermedades comunes con nuestra vacunación anual. Nuestros veterinarios expertos administrarán las vacunas necesarias para garantizar la salud y el bienestar de tu mascota durante todo el año.", "cost": 6750
        },
        {
            "id": 2, "name": "Consulta Médica General", "description": "Programa una consulta médica general para tu mascota y deja que nuestros veterinarios expertos realicen un examen exhaustivo. Te brindaremos orientación sobre la nutrición, el cuidado y cualquier preocupación médica que puedas tener.", "cost": 3600
        },
        {
            "id": 3, "name": "Esterilización / Castración", "description": "La esterilización o castración es una parte importante del cuidado de tu mascota. Nuestros veterinarios realizarán el procedimiento de manera segura y compasiva para ayudar a controlar la población de animales y promover la salud a largo plazo.", "cost": 13500
        },
        {
            "id": 4, "name": "Corte de Pelo y Baño", "description": " Dale a tu mascota un cambio de imagen completo con nuestro servicio de corte de pelo y baño. Nuestros peluqueros expertos cuidarán de tu mascota, dejándola limpia, fresca y con un aspecto increíble.", "cost": 5400
        },
        {
            "id": 5, "name": "Desparasitación Interna y Externa", "description": "Protege a tu mascota contra parásitos internos y externos con nuestra desparasitación completa. Nuestros productos seguros y efectivos ayudarán a mantener a tu mascota libre de gusanos, pulgas y garrapatas.", "cost": 4500
        },
        {
            "id": 6, "name": "Tratamiento de Problemas de Piel", "description": "Aborda los problemas de piel comunes en las mascotas con nuestro servicio de diagnóstico y tratamiento especializado. Nuestros veterinarios determinarán la causa del problema y proporcionarán un tratamiento efectivo para aliviar el malestar de tu mascota.", "cost": 3500
        }]}`;

    const testRes = JSON.parse(testExternalData);
    const testData = testRes.data;

    const services = testData.map(singleServiceAdapter);
    return services;

}