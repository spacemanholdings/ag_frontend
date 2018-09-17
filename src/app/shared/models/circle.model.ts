import { Deserializable } from './deserializable.model';

export class Member implements Deserializable {
  address: string;
  role: string;
  purpose: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

export class Circle implements Deserializable {
  name: string;
  rootCircle: string;
  bankNode: string;
  leader: string;
  members: Member[];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
