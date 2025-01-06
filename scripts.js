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
