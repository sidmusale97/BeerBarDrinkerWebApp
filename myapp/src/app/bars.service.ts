import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bar {
  name: string;
  license: string;
  state: string;
  phone: string;
  address: string;
 }

 
@Injectable({
  providedIn: 'root'
})
export class BarsService {
  constructor(
  public http: HttpClient
  ) { }
  getBars() {
  return this.http.get<Bar[]>('/api/bar');
  }
  getBar(bar: string)
  {
    return this.http.get<Bar>('/api/bar/' + bar)
  }
  getLargeSpenders(bar: string){
    return this.http.get<any[]>('/api/bar/LargeSpender/' + bar)
  }
  getPopBeers(bar: string){
    return this.http.get<any[]>('/api/bar/MostPopular/' + bar)
  }
  getTopManfs(bar:string){
    return this.http.get<any[]>('/api/bar/TopManf/' + bar)
  }

  getHourTimeDist(bar: string)
  {
    return this.http.get<any[]>('/api/bar/TimeDistHour/' + bar)
  }

  getWeekTimeDist(bar: string)
  {
    return this.http.get<any[]>('/api/bar/TimeDistWeek/' + bar)
  }
 }