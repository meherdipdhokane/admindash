import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisteruserService } from '../registeruser.service';
import { Router } from '../../../node_modules/@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']

})
export class AdminComponent implements OnInit {

  constructor( private authser:AuthService,
  private regservice:RegisteruserService,
  private router:Router,
  private modalService: NgbModal
) {
 
 }
  dataarray;
  page:number=1;
  btnflg:boolean=false;
  ngOnInit() {
    this.serveyData(this.page);
   this.authser.isLoggedIn().subscribe(data=>{
     console.log(data)
   })
  }
  checklogin(){
    this.authser.isLoggedIn().subscribe(
      data=>{
        console.log(data)
      }
    )
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

serveyData(pagess:number){
  this.authser.getservey(pagess).subscribe(data=>{
      console.log("servey data",data)
      this.dataarray=data.body;
    })
}


  logout(){
    this.authser.logoutUser().subscribe(data=>{
      console.log(data)
      this.router.navigate(['login']);
    })
  }
  nextpage(){
    this.page=this.page+1;
    this.btnflg=true;
    this.serveyData(this.page);
  }

  privouspage(){
    if(this.page>1){
      this.page=this.page-1;
      if(this.page==1){
        this.btnflg=false;
      }
    }else{
      this.btnflg=false;
    }
    this.serveyData(this.page);

  }
  
}
