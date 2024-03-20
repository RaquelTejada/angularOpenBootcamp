import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';

@NgModule({
  declarations: [BasicListComponent],
  imports: [CommonModule],

  // Exportamos aquellas clases (componentes/pipes, services, etc) que queramos compartir a quien importe este módulo.
  exports: [BasicListComponent],
})
export class ListsModule {}
