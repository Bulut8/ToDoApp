import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo/todo.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  providers:[TodoService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }



