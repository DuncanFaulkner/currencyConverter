import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './exchange.component';

const routes: Routes = [
  {
    path: '',
    component: ExchangeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ExchangeModule {}
