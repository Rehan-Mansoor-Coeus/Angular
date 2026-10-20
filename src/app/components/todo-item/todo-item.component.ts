import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directive/highlight-completed-todo.directive';

@Component({
  imports: [HighlightCompletedTodoDirective],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
    todo = input.required<Todo>();
}
