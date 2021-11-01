import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamesByGenerationPageRoutingModule } from './names-by-generation-routing.module';

import { NamesByGenerationPage } from './names-by-generation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NamesByGenerationPageRoutingModule
  ],
  declarations: [NamesByGenerationPage]
})
export class NamesByGenerationPageModule {}
