import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OwnerListComponent} from './owner-list/owner-list.component';
import {OwnerFormComponent} from './owner-form/owner-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {OwnerService} from './owner.service';
import {HttpClientModule} from '@angular/common/http';
import {VetListComponent} from './vet-list/vet-list.component';
import {VetFormComponent} from './vet-form/vet-form.component';
import {OwnerDetailComponent} from './owner-detail/owner-detail.component';
import {PetFormComponent} from './pet-form/pet-form.component';
import {PetDetailComponent} from './pet-detail/pet-detail.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import {VisitFormComponent} from './visit-form/visit-form.component';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {OwnerEditComponent} from './owner-edit/owner-edit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import { PetEditComponent } from './pet-edit/pet-edit.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    OwnerListComponent,
    OwnerFormComponent,
    VetListComponent,
    VetFormComponent,
    OwnerDetailComponent,
    PetFormComponent,
    PetDetailComponent,
    VisitFormComponent,
    OwnerEditComponent,
    PetEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: momentAdapterFactory}),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  providers: [OwnerService],
  bootstrap: [AppComponent],
  entryComponents: [OwnerEditComponent, VetListComponent],
})
export class AppModule {
}
