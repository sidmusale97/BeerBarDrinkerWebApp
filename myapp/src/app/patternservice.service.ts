import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface pattern1
{
  drinker: string;
  drinkerstate: string;
  bar: string;
  barstate: string;
}
export interface pattern2
{
  billTime:string;
  open: string;
  close: string;
}
@Injectable({
  providedIn: 'root'
})


export class PatternService {

  constructor(public http: HttpClient) { }
  verifyPattern1()
  {
    return this.http.get<any[]>('api/pattern1')
  }
  verifyPattern2()
  {
    return this.http.get<any[]>('api/pattern2')
  }
}
