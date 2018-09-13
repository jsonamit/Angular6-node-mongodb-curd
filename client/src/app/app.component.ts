import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Userservices} from './services/userservices';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  addForm: FormGroup;
  name:string;
  lastname:string;
  city:string;
users:any=[];
constructor(private FB:FormBuilder,private route:Router,private userservice:Userservices){
  this.addForm = this.FB.group({
    name: [null,[Validators.required]],
    lastname: [null,[Validators.required]],
    city: [null,[Validators.required]],
  });
}
  register()
  {
    let user = this.addForm.value;
    console.log(user);
    this.userservice.registeruser(user).subscribe(res=>{
      // if(res.statusCode==200){
        this.addForm.reset();
        this.route.navigate(['userlist']);
      // }
      // else {
      //   console.log('registration not successful');
      // }
    });

  }


}

