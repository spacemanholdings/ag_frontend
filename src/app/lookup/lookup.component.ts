import { Component } from '@angular/core';
import { namehash } from '../shared/globals';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent {

  constructor() { }

  onSearchChange(search: string): void {
    if (search.endsWith('.identity.arg')) {
      let hash = namehash.hash(search);
      console.log(hash);
    } else if (search.endsWith('.bank.arg')) {

    }
  }
}
