import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from '../registeruser.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

  constructor(
    private regiservices:RegisteruserService
  ) { }
  regdata={}
  ngOnInit() {
  }
  registerUser(event){
  event.preventDefault();
  const target=event.target;
  const firstname=target.querySelector('#firstname').value;
  const lastname=target.querySelector('#lastname').value;
  const uname=target.querySelector('#uname').value;
  const pass=target.querySelector('#pass').value;
  this.regdata={firstname:firstname,lastname:lastname,username:uname,password:pass}

  this.regiservices.registerData(this.regdata).subscribe((data)=>{
    console.log(data)
  })
}


}
