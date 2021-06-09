import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo/todo.service';
import { Todo } from '../models/todo.model';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'todo-form',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  // event
  @Output() Submitted = new EventEmitter<any>();
  todo: Todo = {title:'', completed: false, userId:1, id:101};

  @Input() title: string = '';
  @Input() completed: boolean = false;

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService:TodoService) { }

  ngOnInit(): void {

    this.todoForm = this.formBuilder.group({
      userId: [1],
      title: [this.title, Validators.required],
      completed: [this.completed],
    });

    console.log('todoForm',this.todoForm)

  }

  public cancel() {
    // this.dialogRef.close();
 }
  //
  Send = () => {

    if (this.todoForm.valid) {
      this.todo.title = this.todoForm.get('title').value;
      this.todo.completed = this.todoForm.get('completed').value;
      this.todo.userId = 1;

      this.todo={... this.todoForm.value}

      // api ye gönder
      this.Submitted.emit(this.todo);
    }

  }

 

}
