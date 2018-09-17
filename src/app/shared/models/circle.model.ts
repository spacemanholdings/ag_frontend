import { Deserializable } from './deserializable.model';

export class Circle implements Deserializable {
  rootCircle: string;
  bankNode: string;
  leader: string;
  members: string[];

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
