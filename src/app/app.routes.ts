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
    path:'**',
    redirectTo:'resource',
    pathMatch:'full'
  }
];
