import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {Todo} from 'src/app/components/todo/models/todo.model'
import{TodoService} from 'src/app/shared/services/todo/todo.service'
import{TodoformComponent} from '../todoform/todoform.component'
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoFormDialogComponent } from '../todo-form-dialog/todo-form-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-todogrid',
  templateUrl: './todogrid.component.html',
  styleUrls: ['./todogrid.component.css']
})
export class TodogridComponent implements OnInit,AfterViewInit {


@Input() todoGet: Todo[] = [];
dataSource  = new MatTableDataSource<Todo>();
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

displayedColumns: string[]=['action','userId','id','title','completed'];



  constructor( private todoService:TodoService,public dialog: MatDialog, private router:Router,private activatedRoute: ActivatedRoute) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  ngOnInit(): void {

    this.dataSource.data= this.todoGet;

  }

filter(text:string){
  this.dataSource.filter=text.trim().toLowerCase();
}

todoDelete(id:number){
  if(confirm("Are you sure?")){
  this.todoService.deleteTodo(id).subscribe(response => {
    console.log('success', response);
  }, err => {
    console.log('err', err);
  });
}
}


todoDetail(id:number){
  this.router.navigateByUrl("/todo/detail/"+id)
}
edit(id:number){
  this.router.navigateByUrl("/todo/edit/"+id)
}

  editDialog(selectedItem:Todo,dialogConfig:MatDialogConfig): void {

    // let todoForm: TodoformComponent;
    // todoForm.title = selectedItem.title;
    // todoForm.completed = selectedItem.completed;

    // let dialogRef = this.dialog.open(TodoFormDialogComponent, {
    //   width: '350px',
    //   data: selectedItem
    // });

    // 

    let dialogRef = this.dialog.open(TodoFormDialogComponent,{data:selectedItem});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // listeyi yeniden çekilir.
    });


  }

}
