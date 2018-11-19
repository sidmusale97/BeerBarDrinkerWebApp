import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Transactions{
  bar: string;
  total:number;
  tip: number;
  datetime: string;
}

export interface Drinker{
  name: string;
  state: string;
  address: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkerService {

  constructor(public http: HttpClient) { }
  getTransactions(drinker : string) {
    return this.http.get<Transactions[]>('/api/drinker/transactions/' + drinker)
  }
  getDrinkers(){
    return this.http.get<Drinker[]>('/api/drinker')
  }

  getFavItems(drinker:string)
  {
    return this.http.get<any[]>('api/drinker/favItems/' + drinker)
  }

  getMonthlySpending(drinker:string){
    return this.http.get<any[]>('api/drinker/spendingMonthly/' + drinker)
  }
}
