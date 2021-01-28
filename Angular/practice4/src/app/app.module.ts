import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './component/user/user/user.component';
import { PostsComponent } from './component/post/posts/posts.component';
import { PostComponent } from './component/post/post/post.component';
import {UsersComponent} from './component/user/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './service/user/user-resolve.service';
import { FullUserComponent } from './component/user/full-user/full-user.component';
import {PostResolveService} from './service/post/post-resolve.service';
import { FullPostComponent } from './component/post/full-post/full-post.component';
const routes: Routes = [
  {path: 'user', component: UsersComponent,  resolve: {userData: UserResolveService},
    children: [{ path: ':id' , component: FullUserComponent
    }]
  },
  {path: 'post', component: PostsComponent, resolve: {postData: PostResolveService},
    children: [{ path: ':id' , component: FullPostComponent
    }]}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent
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
