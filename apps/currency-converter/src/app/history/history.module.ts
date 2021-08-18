import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
  },
];

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class HistoryModule {}
