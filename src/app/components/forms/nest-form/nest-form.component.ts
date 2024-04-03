import { Component, OnInit } from '@angular/core';

// Importamos de Reactive Forms para crear un formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nest-form',
  templateUrl: './nest-form.component.html',
  styleUrl: './nest-form.component.scss',
})
export class NestFormComponent implements OnInit {
  myNestForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Agrupación para teléfonos
    const phone = this.formBuilder.group({
      countryCode: '',
      phone: '',
    });

    const mobile = this.formBuilder.group({
      countryCode: '',
      phone: '',
    });

    // Agrupación del formulario que contiene dos agrupaciones
    this.myNestForm = this.formBuilder.group({
      name: '',
      phone: phone,
      mobile: mobile,
    });
  }
}
