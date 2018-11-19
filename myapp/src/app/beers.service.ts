import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 export interface Beer {
  name: string;
  manf: string;
 }

 export interface BarSellsMost{
 	bar: string;
 	quantity: number;
 }

 export interface BiggestConsumers{
 	drinker: string;
 	How_many_times: number;
 }

 export interface TimeBeer{
 	month: number;
 	quantity: number;
 }

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
  public http: HttpClient
  ) { }

  getBeers() {
    return this.http.get<Beer[]>('/api/beer');
  }

  getBarSellsMost(beer: string){
  	return this.http.get<BarSellsMost[]>('/api/beer/BarSellsMost/' + beer)
  }

  getBiggestConsumers(beer: string){
  	return this.http.get<BiggestConsumers[]>('/api/beer/BiggestConsumers/' + beer)
  }

  getTimeBeer(beer: string){
  	return this.http.get<TimeBeer[]>('/api/beer/TimeBeer/' + beer)
  }  

}
