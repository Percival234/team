class Cart {
  constructor() {
    if (Cart.instance) {
      return Cart.instance;
    }

    Cart.instance = this;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}

const cart1 = new Cart();
const cart2 = new Cart();

cart1.addProduct('tomato');
cart1.addProduct('apple');
cart2.addProduct('juice');

console.log(cart1.products);
console.log(cart2.products);

class Car {
  constructor(color) {
    this.color = color;
  }
  drive() {
    console.log('drive');
  }
}

class BMW extends Car {
  constructor(color) {
    super(color);
    this.type = 'BMW';
  }
}

class Audi extends Car {
  constructor(color) {
    super(color);
    this.type = 'Audi';
  }
}

class CarFactory {
  constructor() {}
  createCar(type, color) {
    switch (type) {
      case 'BMW':
        return new BMW(color);
      case 'Audi':
        return new Audi(color);
      default:
        throw Error('No car with type ' + type);
    }
  }
}

const factory = new CarFactory();

const car1 = factory.createCar('BMW', 'red');
const car2 = factory.createCar('Audi', 'green');

car1.drive();
car2.drive();

function addFeature1() {
  // add feature 1
}
