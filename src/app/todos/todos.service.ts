import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
   return  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
  }
}
