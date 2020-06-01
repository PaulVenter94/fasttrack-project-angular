import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';
import {OwnerService} from '../owner.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  petForm: FormGroup;
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.pet = new Pet();
    this.petForm = new FormGroup({name: new FormControl(this.pet.name, [Validators.required])});
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.addPet(id, this.pet).subscribe(() => this.goToOwner(id));
  }

  private goToOwner(id: number) {
    this.router.navigate([`owners/${id}`]);
  }
}
