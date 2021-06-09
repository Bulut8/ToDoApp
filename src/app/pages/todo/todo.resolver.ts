import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/components/todo/models/todo.model';
import { TodoService } from 'src/app/shared/services/todo/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<any> {
  constructor(private todoService: TodoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> | Observable<Todo[]> {
    
    if(state.url === '/todo/list')
    return this.todoService.getTodo();
    else
    return this.todoService.getTodoUpdate(route.params.id)

  }
}
