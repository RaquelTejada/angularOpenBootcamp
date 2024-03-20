import { IContact } from '../models/contact.interface';

// Exportamos una lista simulada de Contactos.
export const CONTACTS: IContact[] = [
  {
    id: 0,
    name: 'Martín',
    surname: 'San José',
    email: 'martin@imaginagroup.com',
    age: 30,
    gender: 'Male',
  },
  {
    id: 1,
    name: 'Juan',
    surname: 'García López',
    email: 'juan@imaginagroup.com',
    age: 35,
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Natalia',
    surname: 'Giménez López',
    email: 'natalia@imaginagroup.com',
    age: 27,
    gender: 'Female',
  },
];
