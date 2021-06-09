import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { todoPermissions } from './todo-permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

/**
 *
 */
constructor(private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      const permissionName=route.data.permission;
console.log('p')
      if(todoPermissions.find(x=> x==permissionName))
      return true;
      else{
        this.router.navigateByUrl('/unauthorized');
        return false;
      }

  }
  
}
