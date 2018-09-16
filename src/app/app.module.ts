import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LookupModule } from './lookup/lookup.module';
import { RegisterModule } from './register/register.module';
import { TransferModule } from './transfer/transfer.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [BrowserModule,
    HttpClientModule, AppRoutingModule,
    RegisterModule, LookupModule,
    TransferModule,
    SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
