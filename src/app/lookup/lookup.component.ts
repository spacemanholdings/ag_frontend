import { Component } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent {

  constructor() { }

  onSearchChange(search: string): void {
    if (search.endsWith('.identity.arg')) {

    } else if (search.endsWith('.bank.arg')) {

    }
  }
}
