import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo/todo.service';


@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.css']
})
export class TodocardComponent implements OnInit {
@Input () id:number=0;
@Input () title:string='';
@Input () completed:boolean=false;
@Input () userId:number=0;


  constructor( private todoService:TodoService) { }

  
  ngOnInit(): void {
  }
Delete(id:number)
{
  if(confirm("Are you sure?")){
    this.todoService.deleteTodo(id).subscribe(response => {
      console.log('success', response);
    }, err => {
      console.log('err', err);
    });
  }
}

}
