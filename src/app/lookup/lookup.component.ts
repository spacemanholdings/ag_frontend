import { Component, OnInit } from '@angular/core';
import { namehash, qtumjs } from '../shared/globals';
import { Identity } from '../shared/models/identity.model';
import {
  ENS_RESOLVER_ABI, ENS_RESOLVER_ADDRESS,
  IDENTITY_ABI, QTUM_RPC_ENDPOINT
} from '../shared/constants';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  private _rpc: any;
  private _ensContract: any;

  constructor() { }

  ngOnInit() {
    this._rpc = new qtumjs.QtumRPC(QTUM_RPC_ENDPOINT);
    this._ensContract = new qtumjs.Contract(this._rpc, {
      abi: ENS_RESOLVER_ABI,
      address: ENS_RESOLVER_ADDRESS
    });
  }

  onSearchChange(search: string): void {
    if (search.endsWith('.identity.arg')) {
      this.ensNameLookup(search).then((address) => {
        return this.getIdentity(address);
      }).then((identity) => {
        console.log(identity);
      });
    } else if (search.endsWith('.bank.arg')) {
    }
  }

  ensNameLookup(name: string): Promise<string> {
    let hash = namehash.hash(name);
    return new Promise<string>((resolve, reject) => {
      this._ensContract.call('resolver', [hash]).then((tx: any) => {
        resolve(tx.outputs[0]); 
      });
    });
  }

  getIdentity(address: string): Promise<Identity> {
    const contract = new qtumjs.Contract(this._rpc, {
      abi: IDENTITY_ABI,
      address: address
    });
    return new Promise<Identity>((resolve, reject) => {
      contract.call('getInfo').then((tx: any) => {
        resolve(new Identity().deserialize({
          address: tx.outputs[0],
          name: tx.outputs[1],
          email: tx.outputs[2],
          ipfs: tx.outputs[3]
        }));
      });
    });
  }
}
