import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { activities } from '../activity-list/activities';
import { Activity } from '../activity-list/Activity';
import { ActivityService } from '../activity-list/ActivityService';

@Component({
  selector: 'app-activity-hierarchy',
  templateUrl: './activity-hierarchy.component.html',
  styleUrls: ['./activity-hierarchy.component.css']
})
export class ActivityHierarchyComponent implements OnInit {
  // @Input() activity;
  @Output() notify = new EventEmitter();
  id;
  activity: Activity;
  successor: Activity;
  preDecessor: Activity;
  preDecessorNumber: number;
  successorNumber: number;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService
  ) { }

  sub;
  ngOnInit() {
    this.sub = this.activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      // tslint:disable-next-line: no-shadowed-variable
      const activities = this.activityService.getActivityList();
      // tslint:disable-next-line: triple-equals
      this.activity = activities.find(p => p.id == this.id);
      this.getSuccessor(this.id);
    });
  }

  public getSuccessor(id) {
    let index: number;
    // tslint:disable-next-line: no-shadowed-variable
    const activities = this.activityService.getActivityList();
    for (const i in activities) {
      // tslint:disable-next-line: triple-equals
      if (id == activities[i].id) {
        // tslint:disable-next-line: radix
        index = parseInt(i);
        break;
      }
    }
    this.successorNumber = index + 1;
    this.preDecessorNumber = index - 1;
    console.log('successorNumber: ' + this.successorNumber);
    console.log('preDecessorNumber: ' + this.preDecessorNumber);

    this.successor = activities[this.successorNumber];
    if (this.preDecessorNumber > -1) {
      this.preDecessor = activities[this.preDecessorNumber];
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/ActivityList']);
  }
}
