import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecieDetailPageRoutingModule } from './specie-detail-routing.module';

import { SpecieDetailPage } from './specie-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecieDetailPageRoutingModule
  ],
  declarations: [SpecieDetailPage]
})
export class SpecieDetailPageModule {}
