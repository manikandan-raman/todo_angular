import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodolistComponent } from './todolist/todolist.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoComponent, AddtodoComponent, TodolistComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class TodoModule { }
