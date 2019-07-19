import { Component, OnInit } from '@angular/core';
import { RegisteruserService } from '../../registeruser.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {

  constructor(private registeUserServices:RegisteruserService) { }

  ngOnInit() {
// this.registeUserServices.getservey().subscribe(data=>{
//   console.log(data);
// })

  }

}
