import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Tab1Page } from './tab1.page';
import { MaterialModule } from '../../material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  }
];


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes),
    TranslateModule.forRoot({
      
    }),
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
