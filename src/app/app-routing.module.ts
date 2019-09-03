import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/weather', pathMatch: 'full' },
      {
        path: 'weather',
        loadChildren: './starter/starter.module#StarterModule'
      },
      // {
      //   path: 'component',
      //   loadChildren: './component/component.module#ComponentsModule'
      // }
    ]
  },
  {
    path: '**',
    redirectTo: '/weather'
  }
];
