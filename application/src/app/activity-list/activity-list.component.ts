import { Component, OnInit } from '@angular/core';
import { ActivityService } from './ActivityService';
import { Activity } from './Activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  activities: Activity[];



  share(activityName) {
    window.alert('The Activity ' + activityName + ' has been clicked!' );
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }


  ngOnInit() {
    this.activities = this.activityService.getActivityList();
  }

}
