import {Component, OnInit} from '@angular/core';
import {PetService} from '../pet.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.css']
})
export class VisitFormComponent implements OnInit {
  date: string;

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.addVisit(id, this.date).subscribe(() => this.goToPet(id));
  }

  private goToPet(id: number) {
    this.router.navigate([`pets/${id}`]);
  }
}
