import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {OwnerService} from '../owner.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {OwnerEditComponent} from '../owner-edit/owner-edit.component';
import {Pet} from '../pet';
import {PetService} from '../pet.service';
import {PetEditComponent} from '../pet-edit/pet-edit.component';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  owner: Owner;
  pets: Pet[];

  constructor(private ownerService: OwnerService,
              private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private petService: PetService
  ) {
  }

  ngOnInit(): void {
    this.getOwner();
  }

  private getOwner() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwner(id).subscribe(owner => {
      this.owner = owner;
      this.ownerService.getPets(id).subscribe(p => this.pets = p);
    });
  }

  public deleteOwner() {
    this.ownerService.deleteOwner(this.owner.id).subscribe(() => this.goToOwners());
  }

  private goToOwners() {
    this.router.navigate(['/owners']);
  }

  editOwner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.owner;
    this.dialog.open(OwnerEditComponent, dialogConfig);
  }

  deletePet(id: string) {
    this.petService.delete(id).subscribe(() => {
      this.ngOnInit();
      this.router.navigate([`/owners/${this.owner.id}`]);
      window.alert('Pet deleted');
    });
  }

  editPet(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.pets.find(p => p.id = id);
    this.dialog.open(PetEditComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe(() => this.ngOnInit());
  }
}
