import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './service/resolve/user-resolve.service';
import {UsersComponent} from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { FullUserComponent } from './component/full-user/full-user.component';
const routes: Routes = [
  {path: 'users', component: UsersComponent , resolve: {xxx: UserResolveService},
  children: [{ path: ':id' , component: FullUserComponent
  }]
  }
  ,
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
