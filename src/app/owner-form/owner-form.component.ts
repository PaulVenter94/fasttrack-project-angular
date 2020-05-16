import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../owner.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {

  owner: Owner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService,
  ) {
    this.owner = new Owner();
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
