import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/contact.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss',
})
export class ContactsPageComponent implements OnInit {
  genderFilter: string = 'all';
  contactList: IContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // Obtenemos los Query Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam: ', params.gender);
      if (params.gender) {
        this.genderFilter = params.gender;
      }
      // Obtener la lista de contactos
      this.contactService
        .getContacts(this.genderFilter)
        .then((list) => (this.contactList = list))
        .catch((error) =>
          console.error(`Ha habido un error al obtener los contactos: ${error}`)
        )
        .finally(() => console.info('Petición de contactos terminada'));
    });
  }

  // Ejemplo de paso de información entre componentes a través del ESTADO

  backHome(contact: IContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact,
      },
    };
    this.router.navigate(['/home'], navigationExtras);
  }
}
