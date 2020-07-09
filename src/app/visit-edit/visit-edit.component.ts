import {Component, Inject, OnInit} from '@angular/core';
import {VisitService} from '../visit.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.css']
})
export class VisitEditComponent implements OnInit {
  fieldName: string;
  textInput: string;
  id: number;

  constructor(private visitService: VisitService,
              private matDialogRef: MatDialogRef<VisitEditComponent>,
              @Inject(MAT_DIALOG_DATA)  data) {
    this.fieldName = data.field;
    this.id = data.visitId;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.id);
    console.log(this.textInput);
    console.log(this.fieldName);
    this.visitService.editVisit(this.id, this.textInput, this.fieldName).subscribe(() => this.matDialogRef.close());
  }
}
