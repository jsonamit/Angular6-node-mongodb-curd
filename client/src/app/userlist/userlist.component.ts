import { Component, OnInit } from '@angular/core';
import {Userservices} from '../services/userservices';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:any=[];
  constructor(public userservice:Userservices) { }

  ngOnInit() {
    this.userservice.getuser()
      .subscribe(
        res=>{
            this.users=res;
            console.log("getting users");
      });

  }

  deleteuser(id)
  {
    console.log(id);
    this.userservice.deluser(id)
      .subscribe(
        res=>{
          console.log("deleted user");
          this.ngOnInit();
        });
  }
  updateuser(id)
  {
    console.log(id);
  }

}
