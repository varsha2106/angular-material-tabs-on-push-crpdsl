import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example/example.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'example' },
      { path: 'example', loadChildren: './example/example.module#ExampleModule' }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }