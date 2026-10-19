import { Component, inject, signal, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // injecting service
  todoService = inject(TodoService);
  // creating a signal to hold the todo items
  todoItems = signal(Array<Todo>());


  ngOnInit(): void {
    // assigning the todoItems from service to signal
    this.todoService
    .getTodoFromAPI()
    .pipe(
      catchError((error) => {
        console.error('Error fetching todo items:', error);
        throw error; // Rethrow the error to propagate it
      })
    )
    .subscribe((items) => {
      // get last 10 items from the array
      items = items.slice(-10);
      this.todoItems.set(items);
    });
  }
 }
