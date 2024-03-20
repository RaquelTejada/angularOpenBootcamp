import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/contact.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent implements OnInit, OnDestroy {
  // Creamos una lista de contactos
  contactsList: IContact[] = [];
  selectedContact: IContact | undefined;

  // Subscripción de servicio
  subscription: Subscription | undefined;

  // Inyectamos en el constructor el servicio de Contactos.
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio.
    this.contactService
      .getAllContacts()
      .then((list: IContact[]) => (this.contactsList = list))
      .catch((error) =>
        console.error(
          `Ha habido un error al recuperar la lista de contactos: ${error}`
        )
      )
      .finally(() => console.log('Petición de lista de contactos terminada'));
  }

  getOneContact(id: number) {
    // console.log(`Obtener info del contacto: ${id}`);
    this.subscription = this.contactService
      .getContactByID(id)
      ?.subscribe((contact: IContact) => (this.selectedContact = contact));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
