import { Injectable } from '@angular/core';

// External imports
import { qtumjs, mainRPCURL, govrRPCURL } from './globals';

// default to localhost where user will be running a testnet
// currently setup to specifically run on testnet
// TODO implement mainnet functionality

@Injectable()
export class QtumService {
  private _defaultRpcUrl = 'http://qtum:test@localhost:9888';

  constructor() { }

  /* 
  get rpcUrl(): string {
    return this._defaultRpcUrl;
  }

  set rpcUrl(rpcUrl: string) {
    this.storageService.set(STORAGE_KEYS['rpcUrl'], rpcUrl);
  }
  */

  get mainRPC(): any {
    return new qtumjs.QtumRPC(mainRPCURL);
  }

  get govrRPC(): any {
    return new qtumjs.QtumRPC(govrRPCURL);
  }

}
