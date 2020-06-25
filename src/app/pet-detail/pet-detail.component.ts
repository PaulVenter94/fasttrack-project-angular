import {Component, OnInit} from '@angular/core';
import {Pet} from '../pet';
import {PetService} from '../pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Visit} from '../visit';

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
              private router: Router) {
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

  showPet() {
    window.alert(this.pet.name + ' ' + this.pet.owner + this.pet.id);
  }
}
