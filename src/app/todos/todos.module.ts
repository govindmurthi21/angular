import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list/todo-list.component';

import {TodosRoutingModule} from './todos-routing.module';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
