import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OwnerListComponent} from './owner-list/owner-list.component';
import {OwnerFormComponent} from './owner-form/owner-form.component';
import {VetListComponent} from './vet-list/vet-list.component';
import {VetFormComponent} from './vet-form/vet-form.component';
import {OwnerDetailComponent} from './owner-detail/owner-detail.component';
import {PetFormComponent} from './pet-form/pet-form.component';

const routes: Routes = [
  {path: 'owners', component: OwnerListComponent},
  {path: 'addowner', component: OwnerFormComponent},
  {path: 'vets', component: VetListComponent},
  {path: 'addvet', component: VetFormComponent},
  {path: 'owners/:id', component: OwnerDetailComponent},
  {path: 'owners/:id/addpet', component: PetFormComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
