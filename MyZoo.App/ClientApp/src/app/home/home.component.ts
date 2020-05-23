import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  eventsSubject: Subject<void> = new Subject<void>();

  emitEventToStatisticsComponent() {
    this.eventsSubject.next();
  }
}
