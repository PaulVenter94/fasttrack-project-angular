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

  public deleteOwner(id: string): Observable<void> {
    return this.http.delete<void>(`${this.ownerUrl}/${id}`);
  }

  public edit(id: string, owner: Owner): Observable<Owner> {
    console.log(`${this.ownerUrl}/${id}`);
    console.log(`${owner.lastName} ${owner.firstName}`);
    console.log(`${owner.pets.forEach(pet => pet.name)} `);
    return this.http.put<Owner>(`${this.ownerUrl}/${id}`, owner);
  }

  getPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.ownerUrl}/${id}/pets`);
  }
}
