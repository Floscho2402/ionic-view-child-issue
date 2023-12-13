import { Route } from '@angular/router';

export const routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes')
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
] as Route[];

