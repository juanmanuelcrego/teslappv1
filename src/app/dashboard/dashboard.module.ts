import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ListComponent} from '../baterias/list.component';
import { LineChartComponent } from './line-chart/line-chart.component'



@NgModule({
  declarations: [ListComponent, LineChartComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
