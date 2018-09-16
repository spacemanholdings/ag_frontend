import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LookupComponent } from './lookup.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'lookup', component: LookupComponent }
    ])
  ],
  exports: [RouterModule]
})
export class LookupRoutingModule { }
