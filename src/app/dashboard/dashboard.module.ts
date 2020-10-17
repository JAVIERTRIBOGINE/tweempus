import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
