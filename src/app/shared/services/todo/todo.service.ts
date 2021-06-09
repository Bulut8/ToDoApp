import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/components/todo/models/todo.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  createTodo(todo: Todo) {

    return this.httpClient.post(environment.todoApiUrl, todo);

  }
  getTodo(): Observable<Todo[]> {

    return this.httpClient.get<Todo[]>(environment.todoApiUrl);

  }
  getTodoUpdate(id:number): Observable<Todo> {

    return this.httpClient.get<Todo>(environment.todoApiUrl+"/"+id);

  }

  deleteTodo(id:number): Observable<Todo> {

    return this.httpClient.delete<Todo>(environment.todoApiUrl+"/"+id);
    
  }


}
