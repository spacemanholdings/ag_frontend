import { Deserializable } from './deserializable.model';

export class Identity implements Deserializable {
  label: string;
  name: string;
  addr: string;
  email: string;
  ipfs: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  get ipfsLink(): string {
    return 'https://ipfs.io/ipfs/' + this.ipfs;
  }
}
