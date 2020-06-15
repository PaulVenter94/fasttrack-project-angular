import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Owner} from '../owner';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../owner.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit {
  ownerForm: FormGroup;
  owner: Owner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService,
    private matDialogRef: MatDialogRef<OwnerEditComponent>,
    @Inject(MAT_DIALOG_DATA) newOwner: Owner,
  ) {
    this.owner = newOwner;
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
    this.ownerService.edit(this.owner.id, this.owner).subscribe(() => this.matDialogRef.close());
  }

}
