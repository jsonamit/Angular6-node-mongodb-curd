import {HttpClient, HttpHeaders} from '@angular/common/http'
import {OnInit,Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Apiurl} from '../apiurl/apirul';

@Injectable({
  providedIn: 'root'
})
export class Userservices
{
  private apiurl:any;
  constructor(private http:HttpClient)
  {
      this.apiurl=Apiurl;
  }
 // private apiurl:string="http://localhost:8000/";

  getuser():Observable<any>
  {
    console.log(this.apiurl);
    return this.http.get(this.apiurl+'/getuser');
  }
  registeruser(data):Observable<any>
  {
    return this.http.post(this.apiurl+'/adduser',data)
  }
  deluser(id):Observable<any>
  {
    return this.http.put(this.apiurl+'/deleteuser'+`/${id}`)
  }

}
