import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'OpenBootcamp';
  userName = 'Raquel';

  token: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  // Esta función se ejecuta cuando en el hijo (SaludoComponent) se pulse un botón.
  getChildMessage(event: string) {
    alert(event);
  }
}

// Paso de información entre componentes:
// 1. A través de @Inputs y @Outputs
// 2. A través de inyecciones de constructores de componentes hijos @ViewChild, @ContentChild o @ContentChildren
// 3. A través de Servicios (Promesas y Observables, etc.) --> NGRX (Gestión del estado de la aplicación)
// 4. A través de parámetros entre rutas.
