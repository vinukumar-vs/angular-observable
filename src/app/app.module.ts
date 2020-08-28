import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupActivitiesComponent } from './components/group-activities/group-activities.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';
import { AddToGroupDirective } from './directives/add-to-group.directive';

@NgModule({
  declarations: [
    AppComponent,
    GroupActivitiesComponent,
    ActivityListComponent,
    ContentDetailsComponent,
    AddToGroupDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
