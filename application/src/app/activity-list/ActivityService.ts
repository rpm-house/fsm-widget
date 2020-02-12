import { Activity } from './Activity';

export class ActivityService {
  public getActivityList() {
    let activities: Activity[];
    activities = [
      new Activity('ACT4', 124, 800, 'ACT 4 is a 4th Activity'),
      new Activity('ACT3', 123, 80, 'ACT 3 is a 3rd Activity'),
      new Activity('ACT2', 122, 780, 'ACT 2 is a 2nd Activity'),
      new Activity('ACT5', 125, 80, 'ACT 5 is a 5th Activity'),
      new Activity('ACT1', 121, 780, 'ACT 1 is a 1st Activity')
    ];
    return activities;
  }
  public getActivity(id) {
    const activities: Activity[] = this.getActivityList();
    // tslint:disable-next-line: triple-equals
    return activities.find(p => p.id == id);
  }


}
