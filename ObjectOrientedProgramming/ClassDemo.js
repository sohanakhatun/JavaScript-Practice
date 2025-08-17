class Product {
    // Data Members
    name;
    price;
    category;
    description;
    rating;

    constructor(productName, productPrice, productCategory, productDescription, productRating) {
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.rating = productRating;
        this.description = productDescription;
    }

    // Member Functions
    addToCart() {
        console.log("Product added to cart");
    }
    removeFromCart() {
        console.log("Product deleted to cart");
    }
    displayProduct() {
        console.log("Product Displayed");
    }
    buyProduct() {
        console.log("Product bought");
    }
}

typeof Product // Function

let constructor = 10;
console.log(constructor);

// Creating Object from Class
// let iphone = new Product();// referring the constructor of the object

// with paramters
let iphone = new Product("Iphone", 125000, "mobile", "Some Desc", 4.3);
console.log(iphone);
// instead of passing values here as params we can also set them manually instead.
// iphone.name = "Iphone 15";
// iphone.price = 100000;


// Step1: new will create a plain empty object.
// Step2: new will call the constructor of the class and pass the empty object to the constructor through this keyword inside the constructor.
// this.name = productName; Now, this.name will create a new key called name inside the plain object and assign the value iphone to it.
// this.price = productPrice; this.price will create a new key called price inside the plain object and assign the value 125000 to it.
// this.category = productCategory; same 
// this.rating = productRating; same
//  Hence, there is no need for writting the keys before constructor as a new key and value pair will be created everytime new keyword is called. If we write it also there is no point.
// Step 3: Will see later
// Step 4: The empty object that now has key value pairs is returned hence that will be return

let obj = {
    x: 10,
    y: 20,
    z: {
        x: 99,
        fn: function () {
            console.log(this.x, this.y);
        }
    }
}

// call site for fn is z
// hence output will be 99 , undefined.

// this with arrow function
let obj1 = {
    x: 10,
    y: 20,
    fn: function () {
        const arrow = () => {
            console.log(this.x, this.y);
        }
        arrow();
    }
} // undefined , undefined as for arrow functions this doesnt refer to the call site.
