import { Component, OnInit } from '@angular/core';
import { namehash, qtumjs } from '../shared/globals';
import { Identity } from '../shared/models/identity.model';
import { Circle, Member } from '../shared/models/circle.model';
import {
  ENS_RESOLVER_ABI, ENS_RESOLVER_ADDRESS,
  IDENTITY_ABI, CIRCLE_ABI,
  QTUM_RPC_ENDPOINT
} from '../shared/constants';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  private _rpc: any;
  private _ensContract: any;
  private _searchType: string;
  private _currentResult: any;

  constructor() { }

  ngOnInit() {
    this._rpc = new qtumjs.QtumRPC(QTUM_RPC_ENDPOINT);
    this._ensContract = new qtumjs.Contract(this._rpc, {
      abi: ENS_RESOLVER_ABI,
      address: ENS_RESOLVER_ADDRESS
    });
  }

  onSearchChange(search: string): void {
    if (!search.endsWith('.arg')) {
      this._searchType = undefined;
      return;
    }
    this.ensAddressLookup(search).then((address) => {
      if (search.endsWith('.identity.arg')) {
        this.getIdentity(address).then((identity) => {
          this._currentResult = identity;
        });
        this._searchType = 'identity';
      } else if (search.endsWith('.bank.arg')) {
        this._searchType = 'bank';
      } else {
        this.getCircle(search, address).then((circle) => {
          this._currentResult = circle;
        });
        this._searchType = 'circle';
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  ensAddressLookup(name: string): Promise<string> {
    let hash = namehash.hash(name);
    return new Promise<string>((resolve, reject) => {
      this._ensContract.call('resolver', [hash]).then((tx: any) => {
        let address = tx.outputs[0];
        if (address === '0000000000000000000000000000000000000000') {
          reject('Name not found.');
        }
        resolve(address);
      });
    });
  }

  ensOwnerLookup(name: string): Promise<string> {
    let hash = namehash.hash(name);
    return new Promise<string>((resolve, reject) => {
      this._ensContract.call('owner', [hash]).then((tx: any) => {
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

  getCircle(name: string, address: string): Promise<Circle> {
    let rootDomain = name.match(/\.?(.*?\.arg)$/gm)[0];
    let circle = new Circle().deserialize({
      name: name,
      rootCircle: rootDomain,
      bankNode: 'bank.' + rootDomain
    });
    const contract = new qtumjs.Contract(this._rpc, {
      abi: CIRCLE_ABI,
      address: address
    });
    return new Promise<Circle>((resolve, reject) => {
      contract.call('isCircle').then((tx: any) => {
        return contract.logs({
          fromBlock: 0,
          toBlock: 'latest',
          filter: {
            topics: [
              'fe10c90f41fa2fa1fe0eb7e8f201b621622ba13acd92a4607ca14fe03ffda8f9'
            ]
          }
        });
      }).then((result) => {
        circle.members = result.entries.map((log) => {
          let event = log.event;
          return new Member().deserialize({
            address: event._assignedTo,
            role: event._role,
            purpose: event._purpose
          });
        });
        return this.ensOwnerLookup('leadlink.' + name);
      }).then((owner: any) => {
        circle.leader = owner;
        resolve(circle);
      });
    });
  }

  get searchType(): string {
    return this._searchType;
  }

  get currentResult(): any {
    return this._currentResult;
  }
}
