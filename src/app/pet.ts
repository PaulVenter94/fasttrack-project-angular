import {Owner} from './owner';
import {Visit} from './visit';

export class Pet {
  id: string;
  name: string;
  age: string;
  owner: Owner;
  visits: Visit[];
  birthDate: string;
}
