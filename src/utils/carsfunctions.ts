import { cars } from '@/data/cars';

function addCar(nome: string, modelo: string) {
  const novoId = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1;
  const novoAutomovel = { id: novoId, nome: nome, modelo: modelo, agenda: [] };
  cars.push(novoAutomovel);
  return novoAutomovel;
}

function deleteCar(id: number) {
  const index = cars.findIndex(car => car.id === id);
  cars.splice(index, 1);
}

export { addCar, deleteCar };
