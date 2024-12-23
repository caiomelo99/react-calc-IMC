import { Level } from "@/types/typeLevel"

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number): Level | undefined => {
    const imc = weight / (height * height);

   
    const level = levels.find(item => imc >= item.imc[0] && imc < item.imc[1]);

   
    if (level) {
        return { ...level, yourImc: parseFloat(imc.toFixed(2)) }; 
    }

    return undefined; 
};
