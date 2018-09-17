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
    let hash = namehash.hash(search);
    if (search.endsWith('.identity.arg')) {
    } else if (search.endsWith('.bank.arg')) {
    }
    console.log(hash);
  }
}
