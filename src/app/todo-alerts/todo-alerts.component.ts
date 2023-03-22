import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../todos';

@Component({
  selector: 'app-todo-alerts',
  templateUrl: './todo-alerts.component.html',
  styleUrls: ['./todo-alerts.component.css']
})
export class TodoAlertsComponent {
  @Input() todo!: Todos 
  @Output() addDescription = new EventEmitter();
}
