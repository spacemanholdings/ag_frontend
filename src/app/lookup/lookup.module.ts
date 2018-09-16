import { NgModule } from '@angular/core';
import { LookupComponent } from './lookup.component';
import { LookupRoutingModule } from './lookup-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LookupRoutingModule, SharedModule],
  declarations: [LookupComponent],
  exports: [LookupComponent]
})
export class LookupModule { }
