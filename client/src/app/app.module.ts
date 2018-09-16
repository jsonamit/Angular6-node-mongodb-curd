import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import {routing} from './routing/routing';
import {Userservices} from './services/userservices';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserupdateComponent } from './userupdate/userupdate.component'
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routing)
  ],
  providers: [Userservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
