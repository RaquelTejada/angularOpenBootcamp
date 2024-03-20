import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContact } from '../../models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  token: string | null = null;
  selectedContact: IContact | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //Comprobar si existe el token en el sessionStorage
    this.token = sessionStorage.getItem('token');
    // Leemos del estado del historial de navegación
    if (history.state.data) {
      console.log(history.state.data);
      this.selectedContact = history.state.data;
    }
  }

  goToContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        gender: 'all',
      },
    };
    this.router.navigate(['/contacts'], navigationExtras);
  }
}
