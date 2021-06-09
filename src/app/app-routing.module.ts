import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';

const routes: Routes = [
  
  {
    component:UnAuthorizedComponent,
    path:'unauthorized'
  },
  
  
  {

      path: 'todo', //ana modul pathı 
      loadChildren: () => import('./pages/todo/todo-pages.module').then(m => m.TodoPagesModule)
    
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
