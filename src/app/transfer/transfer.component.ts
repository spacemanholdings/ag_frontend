import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  private TABS = [
    'Create a Token',
    'Transfer a Token',
    'Withdraw a Token'
  ];
  private _currentTab = this.TABS[0];
  private _crossChain: boolean;

  constructor() { }

  setCurrentTab(tab: string): void {
    this._currentTab = tab;
  }

  isCurrentTab(tab: string): boolean {
    return tab === this.currentTab;
  }

  get currentTab(): string {
    return this._currentTab;
  }

  get crossChain(): boolean {
    return this._crossChain;
  }

  set crossChain(value: boolean) {
    this._crossChain = value;
  }
}

