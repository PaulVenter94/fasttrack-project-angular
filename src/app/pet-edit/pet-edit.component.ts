import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Pet} from '../pet';
import {PetService} from '../pet.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  petForm: FormGroup;
  pet: Pet;

  constructor(
    private petService: PetService,
    private matDialogRef: MatDialogRef<PetEditComponent>,
    @Inject(MAT_DIALOG_DATA) pet: Pet) {
    this.pet = new Pet();
    this.initPet(pet);
    this.petForm = new FormGroup({
      name: new FormControl(this.pet.name, [Validators.required]),
      date: new FormControl('')
    });
  }

  private initPet(pet: Pet) {
    this.pet.id = pet.id;
    this.pet.owner = pet.owner;
    this.pet.name = pet.name;
    this.pet.visits = pet.visits;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.petService.editPet(this.pet).subscribe(() => this.matDialogRef.close());
  }
}
