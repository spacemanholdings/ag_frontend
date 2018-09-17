import { Component } from '@angular/core';
import { Identity } from '../shared/models/identity.model';
import { QtumService } from '../shared/services/qtum/qtum.service';
import { web3, qtumjs, namehash } from '../shared/globals';
import { IDENTITY_ABI, IDENTITY_BYTECODE, IDENTITY_REGISTRAR } from '../shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private TABS = [
    'Create an identity record',
    'Create new role',
    'Create new circle'
  ];
  private _currentTab = this.TABS[0];
  private _crossChain: boolean;
  identity = new Identity();

  constructor(private qtumService: QtumService) { }

  createIdentityRecord(): void {
    const contract = new qtumjs.Contract(this.qtumService.rpc, {
      abi: IDENTITY_ABI
    });
    const senderAddress = this.qtumService.selectedAddress.address;
    contract.deploy([web3.sha3(this.identity.label), IDENTITY_REGISTRAR, this.identity.addr, this.identity.label,this.identity.email, this.identity.ipfs ], {
      senderAddress: senderAddress,
      bytecode: IDENTITY_BYTECODE,
      gasLimit: 4000000,
      amount: 0
    }).then((result) => {
      contract.address = result.address;
      this.identity = new Identity();
    });
  }

  setCurrentTab(tab: string): void {
    this._currentTab = tab;
  }

  isCurrentTab(tab: string): boolean {
    return tab === this.currentTab;
  }

  get currentTab(): string {
    return this._currentTab;
  }
}
