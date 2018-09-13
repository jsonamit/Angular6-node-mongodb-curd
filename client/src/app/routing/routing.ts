import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {UserlistComponent} from '../userlist/userlist.component';

const app_route:Routes=[
  {path:'userlist',component:UserlistComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},

];
export const routing = app_route;
