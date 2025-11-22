import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { debounceTime, filter, retry, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-comments',
  imports: [FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  commentService = inject(CommentService);
  postId = signal<number>(0);

  commentsResource = rxResource({
    request: this.postId,
    defaultValue: [],
    loader: (params) =>
      timer(300).pipe(
        switchMap(()=> this.commentService.getCommentsByPostId(params)),
      )
  });

  comments = this.commentsResource.value;
  loadingComments = this.commentsResource.isLoading;
  error = this.commentsResource.error;
}
