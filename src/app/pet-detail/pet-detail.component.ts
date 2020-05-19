import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';
import {PetService} from '../pet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  pet: Pet;

  constructor(private petService: PetService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.getPet();
  }

  private getPet() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id).subscribe(data => this.pet = data);
  }

  showPet() {
    window.alert(this.pet.name + ' ' + this.pet.owner + this.pet.id);
  }
}
