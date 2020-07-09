import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pet} from './pet';
import {Observable} from 'rxjs';
import {Visit} from './visit';
import {visit} from '@angular/compiler-cli/src/ngtsc/util/src/visitor';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petUrl: string;
  private visitUrl: string;
  private visits: Visit[];

  constructor(private http: HttpClient) {
    this.petUrl = 'http://localhost:8080/pets';
    this.visitUrl = 'http://localhost:8080/visits';
  }

  getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petUrl);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.petUrl}/${id}`);
  }

  addVisit(id: number, date: string) {
    return this.http.post(`${this.petUrl}/${id}`, date);
  }

  getVisits(id: number): Observable<Visit[]> {
    return this.http.get<Visit[]>(`${this.visitUrl}?petId=${id}`);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.petUrl}/${id}`);
  }

  editPet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.petUrl}/${pet.id}`, pet);
  }
}
