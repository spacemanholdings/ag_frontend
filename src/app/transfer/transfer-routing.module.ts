import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferComponent } from './transfer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'transfer', component: TransferComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
