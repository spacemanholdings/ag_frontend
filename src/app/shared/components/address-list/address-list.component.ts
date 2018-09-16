import { Component, OnInit } from '@angular/core';
import { QtumService } from '../../services/qtum/qtum.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  private _addresses: string[];

  constructor(private qtumService: QtumService) { }

  ngOnInit() {
    this._addresses = this.qtumService.getAddresses();
  }

  get addresses(): string[] {
    return this._addresses;
  }
}
