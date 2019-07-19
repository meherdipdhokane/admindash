import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';
import {HttpResponse} from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //let options = new RequestOptions({ headers: headers, withCredentials: true });
  constructor(
  private authser:AuthService,
  private router:Router) { }
  objs= new Object();

  uname
  pass
  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault();
    const target=event.target;
    const uname=target.querySelector('#uname').value;
    const pass=target.querySelector('#pass').value;
  //  this.authser.getuserdetails(uname,pass);
   
    this.objs={username:uname,password:pass}
    this.authser.getuserdetails(this.objs).subscribe(data=>{
      if(data.body.success){
        console.log(data.headers)
        this.router.navigate(['admin']);
      }else{
        window.alert("Invalid Userid or Password")
        this.router.navigate(['login']);
        console.log("invalid user");
      }
      console.log(data,"got from server");
    });
  }

  checklogin(){
    this.authser.isLoggedIn().subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
