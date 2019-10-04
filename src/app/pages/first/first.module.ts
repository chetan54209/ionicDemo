import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { IonicModule } from '@ionic/angular';

import { FirstPage } from './first.page';


const routes: Routes = [
  {
    path: '',
    component: FirstPage
  },
  // {
  //   path: 'tabs',
  //   component: FirstPage,
  //   children: [
  //     {
  //       path: 'tab1',
  //       loadChildren: '../tab1/tab1.module#Tab1PageModule'
  //     },
  //     {
  //       path: 'tab2',
  //       loadChildren: '../tab2/tab2.module#Tab2PageModule'
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}
