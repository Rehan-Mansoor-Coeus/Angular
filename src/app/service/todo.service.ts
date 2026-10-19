import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class TodoService {

  http = inject(HttpClient);
  
  getTodoFromAPI() {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const endpoint = '/todos';
    return this.http.get<Todo[]>(baseUrl + endpoint);
  }


}
