import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/components/todo/models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  todo:Todo;

  ngOnInit(): void {

    this.todo={... this.route.snapshot.data.todoData};

  }


}
