import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-form-dialog',
  templateUrl: './todo-form-dialog.component.html',
  styleUrls: ['./todo-form-dialog.component.css'],
 
})

export class TodoFormDialogComponent implements OnInit {

  dialogConfig:MatDialogConfig;
  constructor(public dialogRef: MatDialogRef<TodoFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo) {

  }
  ngOnInit(): void {

  }

  
  TodoSubmitted = (event) => {
    this.dialogRef.close();
  }
  close = () => {
    this.dialogRef.close();
  }

}
