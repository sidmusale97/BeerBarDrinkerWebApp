import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { QueryService } from '../query.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.css']
})
export class QueryResultComponent implements OnInit {
  query: string;
  result: any;
  headers: any[];
  rows: string[];
  constructor(
    route: ActivatedRoute,
    queryService: QueryService
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.query = paramMap.get('query')
      queryService.performQuery(this.query).subscribe(
        data => {
          this.result = data
          console.log(this.result)
          var len = this.result.length;
          for (var i = 0; i < len ; i++ )
          {
            //this.headers.push(this.result[i])
            alert(JSON.stringify(this.result[i]))
          }
        },
        (error: HttpResponse<any>)=>{
          if (error.status === 404){
            alert('Bar Not Found');
          }
          else{
            console.error(error.status + ' - ' + error.body);
            alert('update error fails constraints'); 
          }
        }
      )
    });
  }

  ngOnInit() {
  }

}
