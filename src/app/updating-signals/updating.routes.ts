import { Route } from '@angular/router';

export const updatingRoutes:Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./containers/users/users.component').then(
        (m) => m.UsersComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import(
        './containers/edit-user-container/edit-user-container.component'
      ).then((m) => m.EditUserContainerComponent),
  },
];
