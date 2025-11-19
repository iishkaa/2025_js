class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}, price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05
const produkt1 = new Products("shirt", 19.99)
const produkt2 = new Products("skirt", 22.50)
produkt1.displayProduct();
produkt2.displayProduct();
const total = produkt1.calculateTotal(salesTax);
console.log(`total price (with tax): $${total.toFixed(2)}`);
const total2 = produkt2.calculateTotal(salesTax);
console.log(`total price (with tax): $${total2.toFixed(2)}`);

