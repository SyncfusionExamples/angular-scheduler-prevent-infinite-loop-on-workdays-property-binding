import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  DayService, WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'schedule-ang8';
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: scheduleData
  };
  public getWorkDays() {
    const workDays = [1, 2, 3];
    return workDays;
  }
}
