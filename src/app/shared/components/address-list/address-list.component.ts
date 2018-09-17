import { Component, OnInit } from '@angular/core';
import { QtumService } from '../../services/qtum/qtum.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  private _addresses: string[];
  private _selectedAddress: string;

  constructor(private qtumService: QtumService) { }

  ngOnInit() {
    this.qtumService.loadAddresses().then((addresses) => {
      this._addresses = addresses;
      this._selectedAddress = this._addresses[0];
    });
  }

  private selectAddress(address: string): void {
    this._selectedAddress = address;
  }

  private isSelectedAddress(address: string): boolean {
    return address === this.selectedAddress;
  }

  get addresses(): string[] {
    return this._addresses;
  }

  get selectedAddress(): string {
    return this._selectedAddress;
  }
}
