import { Component, OnInit } from '@angular/core';

// Ejemplo básico de formulario reactivo:
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  // Definimos nuestro formulario
  myForm: FormGroup = new FormGroup({});

  // Inyectamos la clase FormBuilder para poder construir el FormGroup
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Iniciamos los campos del formulario y sus valores por defecto
    this.myForm = this.formBuilder.group({
      name: '',
      surname: '',
      email: '',
      phone: '',
      direction: '',
    });

    // Nos suscribimos a los cambios que ocurran en el formulario y los mostramos por consola
    this.myForm.valueChanges.subscribe(console.log);

    // Esto sería igual pero escrito de una forma más compleja, por lo que se deja el otro
    // this.myForm.valueChanges.subscribe((valor) => console.log(valor));
  }
}
