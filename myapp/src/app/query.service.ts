import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(public http: HttpClient) { }
  performQuery(query: string)
  {
    return this.http.get<any[]>('api/query/' + query)
  }
}
