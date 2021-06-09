import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/components/todo/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  constructor(private TodoService:TodoService) { }

  ngOnInit(): void {
  }


  TodoSubmitted = (todo: Todo) => {

    console.log(todo);
    
    this.TodoService.createTodo(todo).subscribe(response => {
      console.log('success', response);
    }, err => {
      console.log('err', err);
    });
  }

}
