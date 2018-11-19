import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {DrinkerService, Drinker } from "../drinker.service";
declare const Highcharts: any;

@Component({
  selector: 'app-drinker',
  templateUrl: './drinker.component.html',
  styleUrls: ['./drinker.component.css']
})
export class DrinkerComponent implements OnInit {
  drinkers:Drinker[];
  constructor(
    private drinkerService: DrinkerService,
  ) { 
  }

  ngOnInit() {
    this.getDrinkers();
  }
  getDrinkers(){
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
      },
      error => {
        alert('Could not retrieve a list of drinkers');
        }
    );
  }

}
