import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {
  baseUrl = environment.baseUrl;
  constructor(
    private _http:HttpClient
  ) { }
   //method to register user 
  registerData(registerdata):Observable<any>{
    let url = this.baseUrl + 'register';
    //return this._http.post("https://psl.stencil-middleware.tk/dashboard/register",registerdata);
    return this._http.post(url,registerdata)
  }

 
  
}
