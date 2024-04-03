import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrl: './array-form.component.scss',
})
export class ArrayFormComponent implements OnInit {
  myArrayForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myArrayForm = this.formBuilder.group({
      name: '',
      surname: '',
      phones: this.formBuilder.array([]), // Inicializamos la lista de teléfonos vacía.
    });
  }

  // Método Getter para obtener el FormArray de la lista de teléfonos
  get formPhones(): FormArray {
    return this.myArrayForm.get('phones') as FormArray;
  }

  // Método para añadir Teléfonos a la lista
  addPhone() {
    // Creamos un grupo teléfono
    const newPhone = this.formBuilder.group({
      countryCode: '',
      number: '',
    });

    // Añadimos el grupo a la lista de teléfonos
    this.formPhones.push(newPhone);
  }

  // Método para eliminar teléfonos a la lista
  deletePhone(index: number) {
    this.formPhones.removeAt(index);
  }
}
