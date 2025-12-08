import mockData from '../data/mockExperimentos.json';

export const getExperimentos = async () => {
    // Promesa: "Te prometo que te daré datos, pero dame medio segundo"
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData);
        }, 1000);
    });
};