import { Component, OnInit } from '@angular/core';

// Creamos un tipo base para el ejemplo
export type Product = {
  name: string;
  price: number;
  description: string;
};

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrl: './basic-list.component.scss',
})
export class BasicListComponent implements OnInit {
  elementsList: Product[] = [
    {
      name: 'Leche',
      price: 10,
      description: 'Leche semidesnatada',
    },
    {
      name: 'Carne',
      price: 20,
      description: 'Carne de cerdo',
    },
  ];

  cargando: boolean = true;

  opcion: number = 0;

  constructor() {}

  ngOnInit(): void {}

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida; // dado que el valor va a cambiar, implica un cambio en los elementos renderizados.
  }
}
