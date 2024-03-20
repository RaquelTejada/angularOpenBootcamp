import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-details-page',
  templateUrl: './contacts-details-page.component.html',
  styleUrl: './contacts-details-page.component.scss',
})
export class ContactsDetailsPageComponent implements OnInit {
  id: any | undefined;
  contact: IContact = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    age: 0,
    gender: 'Female',
  };

  previousFilter: string = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Vamos a leer los parámetros
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    // Vamos a leer del State el contacto
    if (history.state.data) {
      this.contact = history.state.data;
    }
    if (history.state.filter) {
      this.previousFilter = history.state.filter;
    }
  }
}
