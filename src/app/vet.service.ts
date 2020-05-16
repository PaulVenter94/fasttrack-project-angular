import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vet} from './vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  private vetUrl: string;

  constructor(private http: HttpClient) {
    this.vetUrl = 'http://localhost:8080/vets';
  }

  public findAll(): Observable<Vet[]> {
    return this.http.get<Vet[]>(this.vetUrl);
  }

  public save(vet: Vet) {
    return this.http.post<Vet>(this.vetUrl, vet);
  }
}
