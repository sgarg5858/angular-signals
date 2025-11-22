import { Component, inject, signal } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  #commentService = inject(CommentService);

  postId = signal<number | undefined>(undefined);
  #commentResource = this.#commentService.getCommentsByPostId(this.postId);

  comments = this.#commentResource.value;
  loading = this.#commentResource.isLoading;
  error = this.#commentResource.error;
}
