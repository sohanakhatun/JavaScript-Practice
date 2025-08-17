class Product {
    static x = 10;
    constructor(name, price) {
        this.name = name;
        this.price = price;
        console.log(x); // we cannot access the static variables like this it has to be accessed with the class name.
        console.log(Product.x); // valid     
    }
}

let p = new Product("Iphone", 10000);
console.log(p1.x); // undefined
console.log(Product.x); // 10 
// static variables are associated with the class not the object. they are created when the class is created , they will exist even if no object is created from the class.
// They can also be created as private variables by using # in the start of the name --> static #x ==> this is pvt.


