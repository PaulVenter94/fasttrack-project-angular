import {Pet} from './pet';
import {Time} from '@angular/common';


export class Visit {
  id: string;
  dateTime: Date;
  pet: Pet;
  description: string;
  treatment: string;
}
