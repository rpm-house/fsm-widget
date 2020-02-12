export class Activity {
  name: string;
  id: number;
  price: number;
  description: string;
  constructor(name: string, id: number, price: number, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
