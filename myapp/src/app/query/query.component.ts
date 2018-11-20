import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { QueryService } from '../query.service';
import {Router } from '@angular/router'
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  queryString : string;
  
  submitted = false;
 
  constructor(private router:Router) {}
  ngOnInit() {
  }
  submitQuery(){
    this.router.navigate(['query/' + this.queryString]);
  }


}
