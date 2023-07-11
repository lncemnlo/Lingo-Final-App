import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifDetailsPageRoutingModule } from './gif-details-routing.module';

import { GifDetailsPage } from './gif-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GifDetailsPageRoutingModule
  ],
  declarations: [GifDetailsPage]
})
export class GifDetailsPageModule {}
