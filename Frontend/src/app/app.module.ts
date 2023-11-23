import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//----Componentes
// ADMIN
import { MascotaFormularioComponent } from './Componentes/Administrador/mascota-formulario/mascota-formulario.component';
import { AgregarRegistroComponent } from './Componentes/Administrador/agregar-registro/agregar-registro.component';
import { ListasRegistrosComponent } from './Componentes/Administrador/listas-registros/listas-registros.component';
import { ActualizarRegistroComponent } from './Componentes/Administrador/actualizar-registro/actualizar-registro.component';
import { ListaCitasComponent } from './Componentes/Administrador/lista-citas/lista-citas.component';
import { ListaMascotasComponent } from './Componentes/Administrador/lista-mascotas/lista-mascotas.component';
import { FormRevisionComponent } from './Componentes/Administrador/form-revision/form-revision.component';
import { FormEstilistaComponent } from './Componentes/Administrador/form-estilista/form-estilista.component';
import { TratamientoFormularioComponent } from './Componentes/Administrador/tratamiento-formulario/tratamiento-formulario.component';
import { ListaTratamientosComponent } from './Componentes/Administrador/lista-tratamientos/lista-tratamientos.component';
import { CirugiaFormularioComponent } from './Componentes/Administrador/cirugia-formulario/cirugia-formulario.component';
import { ListaCirugiasComponent } from './Componentes/Administrador/lista-cirugias/lista-cirugias.component';

// USER
import { NavBarComponent } from './Componentes/Usuario/NavBar/NavBar.component';
import { RecursosEducativosComponent } from './Componentes/Usuario/recursosEducativos/recursosEducativos.component';
import { ReservaCitaComponent } from './Componentes/Usuario/reserva-cita/reserva-cita.component';
import { DetallesMascotaComponent } from './Componentes/Usuario/detalles-mascota/detalles-mascota.component';
import { DetalleTratamientoComponent } from './Componentes/Usuario/detalle-tratamiento/detalle-tratamiento.component';
import { DetallesCirugiaComponent } from './Componentes/Usuario/detalles-cirugia/detalles-cirugia.component';
import { FooterComponent } from './Componentes/Usuario/Footer/Footer.component';

//----Modulos
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//----Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { InicioComponent } from './Componentes/Usuario/inicio/inicio.component';
import { NosotrosComponent } from './Componentes/Usuario/nosotros/nosotros.component';
import { ModalUpdateDoctorComponent } from './Componentes/Administrador/modals/modal-update-doctor/modal-update-doctor.component';
import {
  ModalUpdateCirugiaComponent
} from "./Componentes/Administrador/modals/modal-update-cirugia/modal-update-cirugia.component";
import {
  ModalUpdateTratamientosComponent
} from "./Componentes/Administrador/modals/modal-update-tratamientos/modal-update-tratamientos.component";
import {
  ModalUpdateCitasComponent
} from "./Componentes/Administrador/modals/modal-update-citas/modal-update-citas.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import { NavbarOwnerComponent } from './Componentes/Navbar/navbar-owner/navbar-owner.component';
import { NavbarDoctorComponent } from './Componentes/Navbar/navbar-doctor/navbar-doctor.component';
import { NavbarNurseComponent } from './Componentes/Navbar/navbar-nurse/navbar-nurse.component';
import { NavbarPrincipalComponent } from './Componentes/Navbar/navbar-principal/navbar-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MascotaFormularioComponent,
    AgregarRegistroComponent,
    ListasRegistrosComponent,
    RecursosEducativosComponent,
    ActualizarRegistroComponent,
    ReservaCitaComponent,
    ListaCitasComponent,
    ListaMascotasComponent,
    DetallesMascotaComponent,
    FormRevisionComponent,
    FormEstilistaComponent,
    TratamientoFormularioComponent,
    ListaTratamientosComponent,
    CirugiaFormularioComponent,
    ListaCirugiasComponent,
    DetalleTratamientoComponent,
    DetallesCirugiaComponent,
    InicioComponent,
    NosotrosComponent,
    ModalUpdateDoctorComponent,
    ModalUpdateCirugiaComponent,
    ModalUpdateTratamientosComponent,
    ModalUpdateCitasComponent,
    NavbarOwnerComponent,
    NavbarDoctorComponent,
    NavbarNurseComponent,
    NavbarPrincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,

    //--Material
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
