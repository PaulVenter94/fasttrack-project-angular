import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pet} from './pet';
import {Observable} from 'rxjs';
import {Visit} from './visit';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petUrl: string;

  constructor(private http: HttpClient) {
    this.petUrl = 'http://localhost:8080/pets';
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
}
