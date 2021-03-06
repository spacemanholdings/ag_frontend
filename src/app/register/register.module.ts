import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [RegisterRoutingModule, SharedModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegisterModule { }
