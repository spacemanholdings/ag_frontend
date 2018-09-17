import { Injectable } from '@angular/core';
import { qtumjs } from '../../globals';
import { QTUM_RPC_ENDPOINT } from '../../constants';

@Injectable()
export class QtumService {
  private _addresses: any[] = [];
  private _selectedAddress: any;
  private _rpc: any;

  constructor() {
    this._rpc = new qtumjs.QtumRPC(QTUM_RPC_ENDPOINT);
  }

  public loadAddresses(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.rpc.rawCall('listunspent').then((result: any) => {
        // Return the 10 largest UTXOs by amount
        const balances: any = {};
        result.forEach((utxo: any) => {
          balances[utxo.address] = (balances[utxo.address] || 0) + utxo.amount;
        });
        const unsortedBalances: any = [];
        for (const address in balances) {
          unsortedBalances[unsortedBalances.length] = {
            address: address,
            amount: balances[address]
          };
        }
        this._addresses = unsortedBalances.sort((a: any, b: any) => {
          return b.amount - a.amount;
        }).slice(0, 10);

        // Select the largest UTXO automatically
        this.selectedAddress = this._addresses[0];

        resolve(this._addresses);
      });
    });
  }

  get addresses(): any[] {
    return this._addresses;
  }

  get selectedAddress(): any {
    return this._selectedAddress;
  }

  set selectedAddress(address: any) {
    this._selectedAddress = address;
  }

  get rpc(): any {
    return this._rpc;
  }
}
