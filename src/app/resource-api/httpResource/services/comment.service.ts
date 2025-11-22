import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  getCommentsByPostId(postId: () => number | undefined):HttpResourceRef<any[]> {
    // Logic to fetch comments by postId
    return httpResource<any[]>(
      () => `https://jsonplaceholder.typicode.com/comments/?postId=${postId()}`,
      {
        defaultValue: [],
      }
    );
  }
}
