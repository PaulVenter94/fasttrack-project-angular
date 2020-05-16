import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from './owner';
import {Pet} from './pet';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private ownerUrl: string;

  constructor(private http: HttpClient) {
    this.ownerUrl = 'http://localhost:8080/owners';
  }

  public findAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.ownerUrl);
  }

  public add(owner: Owner) {
    return this.http.post<Owner>(this.ownerUrl, owner);
  }

  public getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.ownerUrl}/${id}`);
  }

  public addPet(id: number, pet: Pet) {
    return this.http.post(`${this.ownerUrl}/${id}`, pet);
  }
}
