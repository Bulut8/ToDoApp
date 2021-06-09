import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPagesRoutingModule } from './todo-pages-routing.module';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodocomponentsModule } from 'src/app/components/todo/todocomponents.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [TodoCreateComponent, TodoListComponent, TodoEditComponent, TodoDeleteComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    TodoPagesRoutingModule,
    TodocomponentsModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class TodoPagesModule { }
