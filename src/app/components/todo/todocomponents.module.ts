import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodocardComponent } from './todocard/todocard.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodogridComponent } from './todogrid/todogrid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoFormDialogComponent } from './todo-form-dialog/todo-form-dialog.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [TodocardComponent,TodoformComponent,TodogridComponent, TodoFormDialogComponent],
  entryComponents: [
    TodoFormDialogComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
    
  ],
  exports:[TodoformComponent,TodogridComponent, TodocardComponent,TodoFormDialogComponent],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false,}}]
})
export class TodocomponentsModule { }
    