import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ContentDetailsComponent } from './components/content-details/content-details.component';
import { GroupActivitiesComponent } from './components/group-activities/group-activities.component';


const routes: Routes = [
  { path: 'activity-list', component: ActivityListComponent },
  { path: 'content-details', component: ContentDetailsComponent },
  { path: '**', component: GroupActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
