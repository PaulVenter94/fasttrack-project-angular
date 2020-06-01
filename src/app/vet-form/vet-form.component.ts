import {Component, OnInit} from '@angular/core';
import {Vet} from '../vet';
import {ActivatedRoute, Router} from '@angular/router';
import {VetService} from '../vet.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.css']
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup;
  vet: Vet;

  constructor(
    private route: ActivatedRoute,
    private  router: Router,
    private vetService: VetService,
  ) {
    this.vet = new Vet();
    this.vetForm = new FormGroup({
      firstName: new FormControl(this.vet.firstName, Validators.compose([Validators.required,
        Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{0,}$')])),
      lastName: new FormControl(this.vet.lastName, Validators.compose([Validators.required,
        Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{0,}$')])),
      age: new FormControl(this.vet.age, [Validators.required,
        Validators.min(0), Validators.max(120)])
    });
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
