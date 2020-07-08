import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  imports: [ CommonModule, MatTabsModule, RouterModule.forChild([
    { path: '', component: ExampleComponent, children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent, data: { label: 'Home' } },
      { path: 'food', component: FoodComponent, data: { label: 'Food' } }
    ] }
  ]) ],
  declarations: [ ExampleComponent, HomeComponent, FoodComponent ]
})
export class ExampleModule { }
