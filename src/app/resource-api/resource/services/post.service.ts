import { HttpClient } from '@angular/common/http';
import { inject, Injectable, ResourceLoaderParams } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  #httpClient = inject(HttpClient);

  getCommentsByPostId(postId: ResourceLoaderParams<number | undefined>) {
    const url = `https://jsonplaceholder.typicode.com/comments/?postId=${postId}`;
    return firstValueFrom(this.#httpClient.get<any[]>(url));
  }
}
