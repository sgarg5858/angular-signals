import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { debounceTime, filter, retry, switchMap, timer } from 'rxjs';
import { CommentStore } from '../../store/comment-store.service';

@Component({
  selector: 'app-comments',
  imports: [FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  commentStore = inject(CommentStore);

  postId = this.commentStore.postId;
  loadingComments = this.commentStore.loadingComments;
  comments = this.commentStore.comments;
  error = this.commentStore.error;
}
