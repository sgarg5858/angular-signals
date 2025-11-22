import { Component, computed, inject, resource, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/post.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

//providing default value for debounced signal skips initial bedouncing
export function debounceSignal<T>(source: Signal<T>, timeMsec: number): Signal<T > {
    return toSignal(toObservable(source).pipe(debounceTime(timeMsec)),{
      initialValue: source(),
    });
}

@Component({
  selector: 'app-posts',
  imports: [FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {

  commentService = inject(CommentService);
  postId = signal<number | undefined>(undefined);
  #commentsFilter = computed(() => {
    const postId = this.postId();
    return postId ? postId : 0;
  });
  #debouncedCommentsFilter = debounceSignal(this.#commentsFilter, 300);

  commentsResource = resource({
    request: this.#debouncedCommentsFilter,
    loader: (criteria) => {
      return this.commentService.getCommentsByPostId(criteria)
    },
    defaultValue: [],
  });

  comments = this.commentsResource.value;
  loadingComments = this.commentsResource.isLoading;
  error = this.commentsResource.error;
}
