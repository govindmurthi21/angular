import { Component, OnInit } from '@angular/core';

import {TodosService} from '../todos.service';
import {Todo} from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private service: TodosService) { }

  ngOnInit(): void {
    this.todos$ = this.service.getTodos();
  }

}
