import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  imports: [GreetingComponent, CounterComponent],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  bodyMessage = signal('Good Morning!');
}
