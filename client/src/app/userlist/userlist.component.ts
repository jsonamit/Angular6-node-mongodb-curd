import { Component, OnInit } from '@angular/core';
import {Userservices} from '../services/userservices';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:any=[];
  updatedisable: boolean = false;
  addForm: FormGroup;
  name: string;
  lastname: string;
  city: string;
  constructor(private FB: FormBuilder,public userservice:Userservices) {

    this.addForm = this.FB.group({
      // id: [null, Validators.required],
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      city: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.userservice.getuser()
      .subscribe(
        res=>{
            this.users=res;
            this.updatedisable=false;
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
    console.log("update id"+id);
    localStorage.setItem("userid",id);
    this.updatedisable=true;
    this.userservice.getuserById(id)
      .subscribe(
        res => {
          let users = res;
          this.addForm.patchValue(users);
          console.log("getting users by id"+this.users.name);
        });
  }
  updateuserByid()
  {
    let user = this.addForm.value;
    console.log(user);
    let userid=localStorage.getItem("userid");
    console.log("userid"+userid);
    this.userservice.updateuserByid(user,userid).subscribe(res => {
      // if(res.statusCode==200){
     // this.addForm.reset();


      // }
      // else {
      //   console.log('updated user successful');
      // }
    });
  }
}
