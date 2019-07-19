import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { map } from '../../node_modules/rxjs/operators';

import { environment } from '../environments/environment';
interface isLoggedIn {
  status: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedInStatus=false;
  constructor(
    private _http:HttpClient
  ) { }
  baseUrl = environment.baseUrl;


getuserdetails(obje):Observable<any>{
  
  let url = this.baseUrl + 'login';
 const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
withCredentials: true, 
observe: 'response' as 'response'
}; 

 // console.log(obje,"service");
  //return this._http.post('https://psl.stencil-middleware.tk/dashboard/login',obje,httpOptions);
  return this._http.post(url,obje,httpOptions)
 
}


isLoggedIn(): Observable<isLoggedIn> {
  let urlis = this.baseUrl + 'isLoggedIn';
  let headers = new HttpHeaders({'Content-Type': 'application/json'})
  let options = {
    headers: headers,
    withCredentials:true
 }
  return this._http.get<isLoggedIn>(urlis,options)
}


setLoggedIn(value: boolean) {
  this.loggedInStatus = value
}

get isLoggedInset() {
  return this.loggedInStatus
}


logoutUser(){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  
  withCredentials: true, 
  observe: 'response' as 'response'
  }; 

  let urlout = this.baseUrl + 'logOut';
  return this._http.get(urlout,httpOptions)
}


getservey(pages:number){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  
  withCredentials: true, 
  observe: 'response' as 'response'
  }; 
  let urlo = this.baseUrl + 'getWareHouseRecords?page='+pages;
 // https://psl.stencil-middleware.tk/dashboard/getwareHouseRecords?records=2&page=6
 // this.baseURL + 'users/' + userName + '/repos'

  return this._http.get(urlo,httpOptions)
}
}
