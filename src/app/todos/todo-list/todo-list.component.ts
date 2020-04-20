import { Component, OnInit } from '@angular/core';

import {TodosService} from '../todos.service';
import {Todo} from '../todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  todoTitle: string;

  constructor(private service: TodosService) { }

  ngOnInit(): void {
    this.todos$ = this.service.getTodos();
  }

  toggleTodoCompleted(todo: Todo): void {
    todo.completed = !todo.completed
  }

  addTodo(e): void {
    e.preventDefault();
    this.service.addTodo(this.todoTitle).subscribe(newTodo => {
      this.todos$ = this.todos$.pipe(map(todos => {todos.push(newTodo); return todos;}));
      e.preventDefault();
    });
  }

}
