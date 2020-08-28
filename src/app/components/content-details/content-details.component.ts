import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/services/global-context.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {

  constructor(
    private globalContext: GlobalContextService
  ) { }

  ngOnInit() {  
    console.log("Content details ==", this.globalContext.getContext(this.globalContext.TYPES.ADD_TO_GROUP))
  }
}
