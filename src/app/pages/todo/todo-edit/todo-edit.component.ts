import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Todo } from 'src/app/components/todo/models/todo.model';
import { TodoformComponent } from 'src/app/components/todo/todoform/todoform.component';
import {TodoService} from 'src/app/shared/services/todo/todo.service';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
 
todo:Todo;

  constructor(private route: ActivatedRoute, private todoService:TodoService) { }

  @ViewChild(TodoformComponent, { static:true}) formComponent:TodoformComponent;


  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.getRouteUpdate(params["id"])
    })
  }

  getRouteUpdate(id:number){
    this.todoService.getTodoUpdate(id).subscribe(p=> this.todo=p);
  }

  
  TodoSubmittedUpdate = (todo: Todo) => {

    console.log(todo);
    
    this.todoService.createTodo(todo).subscribe(response => {
      console.log('success', response);
    }, err => {
      console.log('err', err);
    });
  }

  

}
