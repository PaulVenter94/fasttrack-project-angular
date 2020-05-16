import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {OwnerService} from '../owner.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  owner: Owner;

  constructor(private ownerService: OwnerService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getOwner();
  }

  private getOwner() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwner(id).subscribe(owner => this.owner = owner);
  }
}
