import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {OwnerService} from '../owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.ownerService.findAll().subscribe(data => this.owners = data);

  }

}
