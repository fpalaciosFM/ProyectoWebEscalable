import mockData from '../data/mockExperimentos.json';

/**
 * getExperimentos
 * Servicio simulado que devuelve una lista de experimentos desde un mock JSON.
 * - Actualmente simula latencia con `setTimeout`.
 * - En el futuro este servicio puede reemplazarse por una llamada fetch a una API.
 *
 * @returns {Promise<Array>} Promise que resuelve con el array de experimentos
 */
export const getExperimentos = async () => {
    // Simular una petición asíncrona (latencia) para desarrollo
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000);
    });
};