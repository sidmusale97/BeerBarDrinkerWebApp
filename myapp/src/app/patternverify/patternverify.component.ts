import { Component, OnInit } from '@angular/core';
import { PatternService, pattern1, pattern2} from '../patternservice.service';
@Component({
  selector: 'app-patternverify',
  templateUrl: './patternverify.component.html',
  styleUrls: ['./patternverify.component.css']
})
export class PatternverifyComponent implements OnInit {
  pat1 : pattern1[];
  pat2 : pattern2[];
  constructor(
    public patternService : PatternService
  ) { 
    patternService.verifyPattern1().subscribe(
      data =>{
        this.pat1 = data;
        if (this.pat1 === undefined || this.pat1.length == 0)
        {
          alert('Pattern1 query returned empty')
        }
      }
    );
    patternService.verifyPattern2().subscribe(
      data => {
        this.pat2 = data;
        if (this.pat2 === undefined || this.pat2.length == 0)
        {
          alert('Pattern2 query returned empty')
        }
      }
    );
  }

  ngOnInit() {
  }

}
