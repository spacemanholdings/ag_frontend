import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddressListComponent } from './components/address-list/address-list.component';

import { QtumService } from './services/qtum/qtum.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    SidebarComponent,
    AddressListComponent
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SidebarComponent,
    AddressListComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [QtumService]
    };
  }
}
