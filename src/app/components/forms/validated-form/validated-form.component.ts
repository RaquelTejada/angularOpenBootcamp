import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrl: './validated-form.component.scss',
})
export class ValidatedFormComponent implements OnInit {
  myValidatedForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formBuilder.group({
      // Campo obligatorio
      name: ['', Validators.required],
      // Campo no obligatorio
      surname: '',
      // Campo obligatorio con valores mínimos y máximos
      age: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(18),
          Validators.max(99),
        ]),
      ],
      // Campo obligatorio y de tipo email
      email: ['', Validators.compose([Validators.required, Validators.email])],
      // Campo obligatorio y con expresión regular
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ]),
      ],
      // Campo booleano con true como obligatorio
      accept: [false, Validators.requiredTrue],
    });
  }

  get name() {
    return this.myValidatedForm.get('name');
  }

  get surname() {
    return this.myValidatedForm.get('surname');
  }

  get age() {
    return this.myValidatedForm.get('age');
  }

  get email() {
    return this.myValidatedForm.get('email');
  }

  get password() {
    return this.myValidatedForm.get('password');
  }

  get accept() {
    return this.myValidatedForm.get('accept');
  }

  // Método de Submit del formulario
  sendForm() {
    //Controlar que el formulario sea válido
    if (this.myValidatedForm.valid) {
      console.table(this.myValidatedForm.value);
      // Resetear los campos del formulario
      this.myValidatedForm.reset();
    }
  }
}
