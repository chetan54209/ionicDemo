import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { Tab2Page } from './tab2.page';
import { MaterialModule } from '../../material.module';
import { AddmodalComponent } from 'src/app/dialog/addmodal/addmodal.component';
import { EditmodalComponent } from 'src/app/dialog/editmodal/editmodal.component';
import { DeletemodalComponent } from 'src/app/dialog/deletemodal/deletemodal.component';


const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
  EditmodalComponent, DeletemodalComponent, AddmodalComponent
  ],
  declarations: [Tab2Page, EditmodalComponent, DeletemodalComponent, AddmodalComponent ]
})
export class Tab2PageModule {}
