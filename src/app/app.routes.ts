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
    path:'**',
    redirectTo:'users',
    pathMatch:'full'
  }
];
