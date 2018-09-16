import { Component, OnInit } from '@angular/core';

import { QtumService } from "../qtum.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  getUTXOs(): void {
    QtumService.mainRPC().rawCall('listunspent').then((result: any) => {
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
      this._utxos = unsortedBalances.sort((a: any, b: any) => {
        return b.amount - a.amount;
      }).slice(0, 10);
    });
  }

}
