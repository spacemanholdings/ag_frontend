import { Deserializable } from './deserializable.model';

export class Role implements Deserializable {
  name: string;
  purpose: string;
  address: string[];
  
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
