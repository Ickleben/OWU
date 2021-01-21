import {Component} from '@angular/core';
import {User} from '../models/User';
import {PostService} from './services/post.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  id: any;
  constructor(private postService: PostService) {
  }

  getBubbleUp(user: User): void {
    this.postService.getPost(user.id).subscribe(value => this.posts = value);
    this.id = user.id;
  }
}
