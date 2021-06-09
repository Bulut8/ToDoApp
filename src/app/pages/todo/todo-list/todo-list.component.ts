import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/components/todo/models/todo.model';
import { TodogridComponent } from 'src/app/components/todo/todogrid/todogrid.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  

  constructor( private activatedRoute:ActivatedRoute) { }


  toDo:Todo[];

  

//  @ViewChild(TodogridComponent, { static:true}) gridComponent:TodogridComponent;

  ngOnInit( ): void { 

    this.toDo=[... this.activatedRoute.snapshot.data.todoData];
  }

  
   
  
  

}
