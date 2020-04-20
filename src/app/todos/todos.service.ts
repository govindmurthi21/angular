import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
   return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
  }

  addTodo(todoTitle: string): Observable<Todo> {
    console.log(todoTitle);
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', {title: todoTitle, completed: false}).pipe(
      catchError(err => Observable.throw(err.json().error || 'Server error'))
      );
  } 
}
