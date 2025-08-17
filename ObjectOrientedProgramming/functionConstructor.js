// Older implementation before class was introduced.
// This implementation is called functionConstructor.
// Interview question: If we want class like implementation but there is no class implementation in JS , let's say it has been removed , then how can we achieve this ?
// Answer: Using function constructor. Below is the example:
function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    function displayProduct() {
        console.log("Name", this.name, "Price", this.price, "Description", this.description);
    }
}

// let a = new Product("mac", 1244333, "Apple Mac");
a.displayProduct(); // a.displayproduct is not a function as it's reference is not attached to this keyword.

function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    this.displayProduct = function () {
        console.log("Name", this.name, "Price", this.price, "Description", this.description);
    }
}

let b = new Product("mac", 1244333, "Apple Mac");
b.displayProduct(); // This is valid as the reference of displayProduct is attached to this
// If we call b without new keyword it behaves like a normal function.