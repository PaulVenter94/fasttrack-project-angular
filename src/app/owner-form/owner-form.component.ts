import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../owner.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {
  ownerForm: FormGroup;
  owner: Owner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService
  ) {
    this.owner = new Owner();
    this.ownerForm = new FormGroup({
      firstName: new FormControl(this.owner.firstName, Validators.compose([Validators.required,
        Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{0,}$')])),
      lastName: new FormControl(this.owner.lastName, Validators.compose([Validators.required,
        Validators.pattern('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{0,}$')]))
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ownerService.add(this.owner).subscribe(result => this.goToOwnerList());
  }

  private goToOwnerList() {
    this.router.navigate(['/owners']);
  }
}
