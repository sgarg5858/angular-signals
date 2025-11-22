import { HttpClient } from '@angular/common/http';
import { inject, Injectable, ResourceLoaderParams } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  #httpClient = inject(HttpClient);

  getCommentsByPostId(params: ResourceLoaderParams<number>) {
    const postId = params.request as number;
    const url = `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`;
    return this.#httpClient.get<any[]>(url);
  }
}
