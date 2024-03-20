import { Injectable } from '@angular/core';

// Importamos la lista de contactos MOCK.

import { CONTACTS } from '../mocks/contact.mock';
import { IContact } from '../models/contact.interface';

// Importamos Observables de rxjs.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactList: IContact[] = CONTACTS;

  constructor() {}

  getContacts(gender?: string): Promise<IContact[]> {
    if (gender == 'Male' || gender == 'Female') {
      let filteredList: IContact[] = this.contactList.filter(
        (contact) => contact.gender == gender
      );
      return Promise.resolve(filteredList);
    } else if (gender == 'all') {
      return Promise.resolve(this.contactList);
    } else {
      return Promise.reject('Filtro no válido');
    }
  }

  getAllContacts(): Promise<IContact[]> {
    return Promise.resolve(CONTACTS);
  }

  getContactByID(id: number): Observable<IContact> | undefined {
    // Buscamos el contacto por ID dentro de la lista de CONTACTS mockeados.
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);

    // Creamos un observable
    let observable: Observable<IContact> = new Observable((observer) => {
      observer.next(contact); // emitir un valor a todo componente suscrito.
      observer.complete(); // Cuando lo completamos ya no se emite mas.
    });

    if (contact) {
      return observable;
    } else {
      return;
    }
  }
}
