import {Component, OnInit} from '@angular/core';
import {Vet} from '../vet';
import {VetService} from '../vet.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.css']
})
export class VetListComponent implements OnInit {
  vets: Vet[];

  constructor(private vetService: VetService) {
  }

  ngOnInit(): void {
    this.vetService.findAll().subscribe(data => this.vets = data);
  }

}
