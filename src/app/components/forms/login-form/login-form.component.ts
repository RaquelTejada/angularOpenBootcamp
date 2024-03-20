import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('eve.holt@reqres.in', 'pistol').subscribe(
      (response) => {
        console.log('Respuesta login', response);
        if (response.token) sessionStorage.setItem('token', response.token);
      },
      (error) => console.error(`Ha ocurrido un error en el proceso: ${error}`),
      () => console.info(`Se ha completado la llamda de login a REQRES`)
    );
  }
}
