import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visit} from './visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  readonly visitUrl: string;

  constructor(private http: HttpClient) {
    this.visitUrl = 'http://localhost:8080/visits';
  }

  public findAll(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.visitUrl);
  }

  public editVisit(id: number, text: string, field: string): Observable<Visit> {
    const map = new Map<string, string>();
    map.set(field, text);
    const json = JSON.stringify(`${field},${text}`);
    console.log(json);
    console.log(`{"${field}":"${text}"}`);
    console.log(`${this.visitUrl}/${id}`);
    return this.http.put<Visit>(`${this.visitUrl}/${id}`, `${field},${text}`);
  }
}
