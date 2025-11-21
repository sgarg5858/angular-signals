import { Component, computed, inject, resource, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  imports: [FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {

  commentService = inject(PostService);
  postId = signal<number | undefined>(undefined);
  commentsFilter = computed(() => {
    const postId = this.postId();
    return postId ? postId : 0;
  });

  commentsResource = resource({
    request: this.commentsFilter,
    loader: (criteria) => {
      return this.commentService.getCommentsByPostId(criteria)
    },
    defaultValue: [],
  });
  
  comments = this.commentsResource.value;
  loadingComments = this.commentsResource.isLoading;
  error = this.commentsResource.error;
}
