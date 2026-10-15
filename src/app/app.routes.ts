import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/body/body').then((m) => m.Body),
    },
    {
        path: 'todo',
        pathMatch: 'full',
        loadComponent: () => import('./components/todo/todo.component').then((m) => m.TodoComponent),
    }
];
