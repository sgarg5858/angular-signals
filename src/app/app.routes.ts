import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./updating-signals/updating.routes').then(
        (m) => m.updatingRoutes
      ),
  },
   {
    path: 'resource',
    loadComponent: () =>
      import('./resource-api/resource/containers/posts/posts.component').then(
        (m) => m.PostsComponent
      ),
  },
  {
    path: 'rxResource',
    loadComponent: () =>
      import('./resource-api/rxResource/containers/comments/comments.component').then(
        (m) => m.CommentsComponent
      ),
  },
   {
    path: 'httpResource',
    loadComponent: () =>
      import('./resource-api/httpResource/components/comments/comments.component').then(
        (m) => m.CommentsComponent
      ),
  },
  {
    path:'**',
    redirectTo:'httpResource',
    pathMatch:'full'
  }
];
