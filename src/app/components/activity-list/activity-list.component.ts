import { Component, OnInit } from '@angular/core';
import { GlobalContextService } from 'src/app/services/global-context.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {


  constructor(
    private globalContext: GlobalContextService
  ) { }

  ngOnInit() {
    // Seting the group context 
    let groupContext = this.globalContext.TYPES.ADD_TO_GROUP;
    this.globalContext.setContext(groupContext, { "contentType": "course"});
  }
}

//# sourceMappingURL=pathToSourceMaps