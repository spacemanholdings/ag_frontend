import { Deserializable } from './deserializable.model';

export class Identity implements Deserializable {
  name: string;
  addr: string;
  email: string;
  ipfs: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
