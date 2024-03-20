import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss',
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  // Los input es información que va de padres a hijos.
  @Input() name: string = 'Whatever';

  // Los output es información que va de hijos a padres a través de la emisión de un evento y la captura de ese evento por parte del padre a través de un método.
  @Output() messageEmitter: EventEmitter<string> = new EventEmitter();

  //Camel case para los atributos en el .ts, no como en .scss
  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  constructor() {}

  ngOnInit(): void {
    //Instrucciones previas a la renderización del componente.
    console.log('ngOnInit del componente');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges El componente recibe cambios', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente va a desaparecer');
  }

  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre.
  sendMessageFather(): void {
    // alert(`Hola, ${this.name}. Alerta despachada desde un click de botón.`);
    this.messageEmitter.emit(
      `Hola, ${this.name}. Alerta despachada desde un click de botón.`
    );
  }
}

// Orden de ciclo de vida de los componentes:
// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy
