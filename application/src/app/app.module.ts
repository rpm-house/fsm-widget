import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityHierarchyComponent } from './activity-hierarchy/activity-hierarchy.component';
import { ActivityService } from './activity-list/ActivityService';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityHierarchyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'ActivityList', component: ActivityListComponent },
      { path: 'ActivityHierarchy/:id', component: ActivityHierarchyComponent },
    ])
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
