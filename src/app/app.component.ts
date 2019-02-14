import { Component } from '@angular/core';
import { zooEventsData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
import {
    EventSettingsModel,
    View,
    EventRenderedArgs,
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService,
    TimeScaleModel
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Object[] = <Object[]>extend([], zooEventsData, null, true);
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  public currentView: View = 'Week';
  public timeScale: TimeScaleModel = { enable: true, interval: 20 };

  oneventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
}
