export class Address {
  street: string;
  city: string;
  constructor(address: Partial<Address>) {
    Object.assign(this, address);
  }
}
