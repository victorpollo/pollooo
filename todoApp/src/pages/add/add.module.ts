import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPage } from '../add/add';

@NgModule({
  declarations: [
    AddPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPage),
  ],
  exports: [
    AddPage
  ]
})
export class AddModule {}
