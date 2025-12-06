import mockData from '../data/mockUsers.json';

export const getContenido = async () => {
    // Promesa: "Te prometo que te daré datos, pero dame medio segundo"
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000);
    });
};