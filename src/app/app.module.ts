import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OwnerListComponent} from './owner-list/owner-list.component';
import {OwnerFormComponent} from './owner-form/owner-form.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {OwnerService} from './owner.service';
import {HttpClientModule} from '@angular/common/http';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { PetFormComponent } from './pet-form/pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerListComponent,
    OwnerFormComponent,
    VetListComponent,
    VetFormComponent,
    OwnerDetailComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OwnerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
