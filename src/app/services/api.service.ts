import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  headers: any = {'headers': {'Authorization': 'Bearer 1|nH1QAVR2q0wPMdDvQ422f7jJyvQ8yXLgBgFlx8mR'}};

  constructor(private http: HttpClient) { }

  getClients(): Observable<any>{
    return this.http.get('http://192.168.1.130:8000/api/clientes', this.headers);
  }
}
