import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalContextService } from 'src/app/services/global-context.service';

@Component({
  selector: 'app-group-activities',
  templateUrl: './group-activities.component.html',
  styleUrls: ['./group-activities.component.css']
})
export class GroupActivitiesComponent implements OnInit,  OnDestroy {
  groupContext: any;

  constructor(
    private globalContext: GlobalContextService,
    private location: Location
  ) { 
    this.groupContext = this.globalContext.TYPES.ADD_TO_GROUP;  
  }

  ngOnInit() {
    

    // Read context data if set
    var state = this.location.getState();
    console.log(state);
    console.log(this.globalContext.getContext(this.groupContext))

    // Clearnig context after reading
    this.globalContext.clear(this.groupContext)
  }

  ngOnDestroy() {
    this.globalContext.clear(this.groupContext)
  }
}
