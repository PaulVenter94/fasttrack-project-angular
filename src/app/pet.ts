import {Owner} from './owner';
import {Visit} from './visit';

export class Pet {
  id: string;
  name: string;
  owner: Owner;
  visits: Visit[];
}
