import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';
import { WeatherComponent } from '../component/weather-widget/weather-widget.component';
import { StockComponent } from './stock/stock.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path: 'weather',
    data: {
      title: 'Clima',
      urls: [
        { title: 'Clima', url: '/weather' },
        { title: 'Clima' }
      ]
    },
    component: StarterComponent
  },
  {
    path: 'stock',
    data: {
      title: 'Acciones',
      urls: [
        { title: 'Acciones', url: '/stock' },
        { title: 'Acciones' }
      ]
    },
    component: StockComponent
  },
  {
    path: 'faq',
    data: {
      title: 'Preguntas frecuentes',
      urls: [
        { title: 'Preguntas frecuentes', url: '/faq' },
        { title: 'Preguntas frecuentes' }
      ]
    },
    component: FaqComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [
    StarterComponent,
    WeatherComponent,
    StockComponent,
    FaqComponent
  ]
})
export class StarterModule {}
