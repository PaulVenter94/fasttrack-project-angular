import {Component, OnInit} from '@angular/core';
import {Vet} from '../vet';
import {ActivatedRoute, Router} from '@angular/router';
import {VetService} from '../vet.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.css']
})
export class VetFormComponent implements OnInit {
  vet: Vet;

  constructor(
    private route: ActivatedRoute,
    private  router: Router,
    private vetService: VetService,
  ) {
    this.vet = new Vet();
  }

  onSubmit() {
    this.vetService.save(this.vet).subscribe(() => this.goToVetList());
  }

  private goToVetList() {
    this.router.navigate(['/vets']);
  }

  ngOnInit(): void {
  }
}
