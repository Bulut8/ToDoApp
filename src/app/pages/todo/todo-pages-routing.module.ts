import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizedComponent } from 'src/app/un-authorized/un-authorized.component';
import { PermissionGuard } from './permission.guard';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoDeleteComponent } from './todo-delete/todo-delete.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoResolver } from './todo.resolver';

const routes: Routes = [
  {
    component:TodoCreateComponent,
    path:'create',
    canActivate:[PermissionGuard],
    data:{
    permission:'create'
         }
  },
  {
    component:TodoEditComponent,
    path:'edit/:id',
    resolve:{
      todoData:TodoResolver
    },
    canActivate:[PermissionGuard],
    data:{
    permission:'edit/:id'
         }
  },
  {
    component:TodoDeleteComponent,
    path:'delete/:id',
    resolve:{
      todoData:TodoResolver
    },
    canActivate:[PermissionGuard],
    data:{
    permission:'delete/:id'
         }
  },
  {
    component:TodoListComponent,
    path:'list',
    resolve:{
      todoData:TodoResolver
    },
    canActivate:[PermissionGuard],
    data:{
    permission:'list'
         }
  },
  {
    component:null,
    path:'card/:id',
    
  },
  {
    component:TodoDetailComponent,
    path:'detail/:id',
    resolve:{
      todoData:TodoResolver
    },
    canActivate:[PermissionGuard],
    data:{
    permission:'detail/:id'
         }
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[TodoResolver]
})
export class TodoPagesRoutingModule { }
