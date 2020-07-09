import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';
import {PetService} from '../pet.service';
import {ActivatedRoute} from '@angular/router';
import {Visit} from '../visit';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {VisitEditComponent} from '../visit-edit/visit-edit.component';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;
  visits: Visit[];

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getPet();
  }

  private getPet() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(data => {
      this.pet = data;
      this.petService.getVisits(id).subscribe(v => this.visits = v);
    });
  }

  editVisit(visitId: string, whatToEdit: string) {
    const dialogConfig = new MatDialogConfig();
    const id = +visitId;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.data = {visitId: id, field: whatToEdit};
    this.dialog.open(VisitEditComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(() => this.ngOnInit());
  }
}
