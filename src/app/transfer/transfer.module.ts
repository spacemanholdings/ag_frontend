import { NgModule } from '@angular/core';
import { TransferComponent } from './transfer.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [TransferRoutingModule, SharedModule],
  declarations: [TransferComponent],
  exports: [TransferComponent]
})
export class TransferModule { }
