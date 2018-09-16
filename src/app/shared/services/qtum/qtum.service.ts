import { Injectable } from '@angular/core';

@Injectable()
export class QtumService {
  private DUMMY_ADDRESS = [
    'QMkpQfMwwJTPXNws1xbwmdhTaAaHQQjHy6',
    'Qj7saeg1vamVKGrC7KMtELx6BeQ4XE4P6g',
    'QUZFDZxHMJ2T71VT8tBzBhb6Bq5FhdBxQy',
    'QPysdTE1TcSmo5vg8rSs83XcqsnZ5xydTn',
    'QjA67dXp7sUDEhAXQrSYLC5ngCCJCxjz4L',
    'QNqKeSsHjZfbVxB2jkpDUgGcZvSheWKhCw'
  ];

  public getAddresses(): string[] {
    return this.DUMMY_ADDRESS
  }
}
