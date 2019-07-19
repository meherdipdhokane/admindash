import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservices:AuthService){

  }
  statusss:boolean=true;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;

    this.authservices.isLoggedIn().subscribe(data=>{
      return data;
      //console.log("msh",data.status)
    })
//     this.authservices.isLoggedIn().
//     pipe(map(res=>{
//       console.log(res.status);
// this.statusss=res.status
//     }))
  }
  
}
