import { inject, Injectable, signal } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentStore {

  commentService = inject(CommentService);

  readonly postId = signal<number>(0);

   #commentsResource = rxResource({
    request: this.postId,
    defaultValue: [],
    loader: (params) =>
      timer(300).pipe(
        switchMap(()=> this.commentService.getCommentsByPostId(params)),
      )
  });

   readonly comments = this.#commentsResource.value;
   readonly loadingComments = this.#commentsResource.isLoading;
   readonly error = this.#commentsResource.error;

}
