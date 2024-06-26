import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Módulos Angular Material

import { MatFormFieldModule } from '@angular/material/form-field';

// Módulo personalizado que exporta componentes de tipo lista:
import { ListsModule } from './modules/lists/lists.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailsPageComponent } from './pages/contacts-details-page/contacts-details-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormComponent } from './components/forms/form/form.component';
import { NestFormComponent } from './components/forms/nest-form/nest-form.component';
import { ArrayFormComponent } from './components/forms/array-form/array-form.component';
import { ValidatedFormComponent } from './components/forms/validated-form/validated-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContactsListComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactsDetailsPageComponent,
    FormComponent,
    NestFormComponent,
    ArrayFormComponent,
    ValidatedFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Importamos nuestro módulo personalizado.
    ListsModule,
    // Importamos el módulo HttpClientModule para hacer peticiones HTTP.
    HttpClientModule,
    // Importamos Reactive Forms Module para trabajar con formularios reactivos.
    ReactiveFormsModule,
    // Importamos los módulos de Angular Material que usamos en los formularios
    MatFormFieldModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
