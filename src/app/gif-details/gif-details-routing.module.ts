import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifDetailsPage } from './gif-details.page';

const routes: Routes = [
  {
    path: '',
    component: GifDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifDetailsPageRoutingModule {}
