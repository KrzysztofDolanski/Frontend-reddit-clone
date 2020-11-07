import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import {PostService} from '../post.service';
import {faArrowUp, faArrowDown, faComments} from '@fortawsome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {


  posts$: Array<PostModel>;
  

  faComments = faComments;
  @Input() posts: PostModel[];

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post=> {
      this.posts$ = post;
    });
   }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post' + id);
  }

}
